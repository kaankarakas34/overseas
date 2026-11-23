import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const BASE_URL = process.env.CRO_AUDIT_URL || 'http://127.0.0.1:5190';
const OUT_DIR = path.resolve('reports/cro/screenshots');
fs.mkdirSync(OUT_DIR, { recursive: true });

const ROUTES = [
  { name: 'home', path: '/' },
  { name: 'teklif-al', path: '/teklif-al' },
  { name: 'iletisim', path: '/iletisim' },
  { name: 'hizmetler', path: '/hizmetler' },
  { name: 'performans-pazarlama', path: '/hizmetler/performans-pazarlama' },
  { name: 'basari-hikayeleri', path: '/basari-hikayeleri' },
];

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'laptop-1024', width: 1024, height: 768 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-360', width: 360, height: 800 },
];

async function run() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const results = {
    baseUrl: BASE_URL,
    timestamp: new Date().toISOString(),
    pages: {},
    formTests: {},
    axe: {},
  };

  try {
    // 1. Viewport + layout + console/error audit
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
      const page = await context.newPage();
      await page.route(/googletagmanager|google-analytics|facebook\.net|connect\.facebook/, (r) => r.abort());

      for (const route of ROUTES) {
        const consoleErrors = [];
        const pageErrors = [];
        page.removeAllListeners('console');
        page.removeAllListeners('pageerror');
        page.on('console', (msg) => {
          if (msg.type() === 'error') consoleErrors.push(msg.text());
        });
        page.on('pageerror', (err) => pageErrors.push(err.message));

        await page.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
        await page.waitForTimeout(400);

        const metrics = await page.evaluate(() => {
          const h1 = document.querySelector('h1');
          const forms = Array.from(document.querySelectorAll('form'));
          const visibleForms = forms.filter((f) => {
            const rect = f.getBoundingClientRect();
            return rect.width > 0 && rect.height > 0;
          });
          const headerCta = Array.from(document.querySelectorAll('header button, header a')).find((el) =>
            /Büyüme Analizi Al|Teklif Al/i.test(el.textContent || '')
          );
          const headerCtaVisible = headerCta
            ? headerCta.getBoundingClientRect().width > 0 && headerCta.getBoundingClientRect().height > 0
            : false;
          const firstFormRect = visibleForms[0]?.getBoundingClientRect() || null;

          return {
            title: document.title,
            h1Text: h1?.textContent?.trim() || null,
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth: window.innerWidth,
            hasHorizontalOverflow: document.documentElement.scrollWidth > window.innerWidth,
            formCount: forms.length,
            visibleFormCount: visibleForms.length,
            firstFormTop: firstFormRect ? Math.round(firstFormRect.top) : null,
            firstFormInFirstFold: firstFormRect ? firstFormRect.top < window.innerHeight : false,
            headerCtaVisible,
            whatsappVisible: !!document.querySelector('a[href*="wa.me"]'),
          };
        });

        if (vp.name === 'desktop-1440' || vp.name === 'mobile-390') {
          const shotPath = path.join(OUT_DIR, `${route.name}-${vp.name}.png`);
          await page.screenshot({ path: shotPath, fullPage: false });
        }

        if (!results.pages[route.path]) results.pages[route.path] = {};
        results.pages[route.path][vp.name] = {
          ...metrics,
          consoleErrors,
          pageErrors,
        };
      }
      await context.close();
    }

    // 2. Mocked Form Error (500) & Success (200) Behavior Tests on /teklif-al and /iletisim
    for (const formRoute of ['/teklif-al', '/iletisim']) {
      const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
      const page = await context.newPage();
      await page.route(/googletagmanager|google-analytics|facebook\.net|connect\.facebook/, (r) => r.abort());

      let capturedPayload = null;
      await page.route('**/api/contact', async (route) => {
        capturedPayload = route.request().postDataJSON();
        await route.fulfill({
          status: 500,
          contentType: 'application/json',
          body: JSON.stringify({ success: false, error: 'Simulated server 500 failure' }),
        });
      });

      await page.goto(`${BASE_URL}${formRoute}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(300);

      const form = page.locator('form').first();
      const formExists = (await form.count()) > 0;
      let falseSuccessOn500 = false;
      let errorAlertVisibleOn500 = false;

      if (formExists) {
        for (const input of await form.locator('input[required]').all()) {
          const type = await input.getAttribute('type');
          if (type === 'checkbox') await input.check();
          else if (type === 'email') await input.fill('cro-audit@example.invalid');
          else if (type === 'tel') await input.fill('+90 500 000 00 00');
          else await input.fill('CRO Audit Test');
        }
        await form.locator('button[type="submit"]').click();
        await page.waitForTimeout(500);

        const bodyText = await page.locator('main').innerText();
        falseSuccessOn500 = /Başarıyla Alındı|Talebiniz Alındı|Received/i.test(bodyText);
        errorAlertVisibleOn500 = (await page.locator('[role="alert"]').count()) > 0;
      }

      results.formTests[formRoute] = {
        formExists,
        capturedPayloadKeys: capturedPayload ? Object.keys(capturedPayload) : [],
        falseSuccessOn500,
        errorAlertVisibleOn500,
      };
      await context.close();
    }

    // 3. Axe-core WCAG 2.2 AA check on key routes (desktop)
    const axeContext = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const axePage = await axeContext.newPage();
    await axePage.route(/googletagmanager|google-analytics|facebook\.net|connect\.facebook/, (r) => r.abort());

    for (const route of ROUTES) {
      await axePage.goto(`${BASE_URL}${route.path}`, { waitUntil: 'networkidle' });
      await axePage.waitForTimeout(300);
      const axeResults = await new AxeBuilder({ page: axePage })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      results.axe[route.path] = {
        totalViolations: axeResults.violations.length,
        criticalOrSerious: axeResults.violations
          .filter((v) => v.impact === 'critical' || v.impact === 'serious')
          .map((v) => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.length })),
      };
    }
    await axeContext.close();

    fs.writeFileSync('reports/cro/browser-audit-raw.json', JSON.stringify(results, null, 2));
    console.log('CRO_BROWSER_AUDIT_DONE');
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
