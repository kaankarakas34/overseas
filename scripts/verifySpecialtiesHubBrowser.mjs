import fs from 'node:fs';
import { spawnSync } from 'node:child_process';

const cli = process.argv[2];
const base = process.argv[3] || 'http://127.0.0.1:5197';
if (!cli) throw new Error('Pass the installed playwright-cli.js path');
const hub = JSON.parse(fs.readFileSync('src/data/specialtiesHub.json', 'utf8'));
const families = JSON.parse(fs.readFileSync('src/data/serviceFamilies.json', 'utf8'));
fs.mkdirSync('output/playwright', { recursive: true });
const log = 'output/playwright/nav-05-browser.log';
fs.writeFileSync(log, 'NAV-05 browser acceptance\n');
function run(args) {
  if (args[0] === 'run-code' && args[1]) {
    const codePath = 'output/playwright/nav-05-browser-code.js';
    fs.writeFileSync(codePath, args[1]);
    args = ['run-code', '--filename=' + codePath];
  }
  const result = spawnSync(process.execPath, [cli, '-s=overseas-nav05', ...args], { encoding: 'utf8', windowsHide: true });
  if (result.error) throw result.error;
  fs.appendFileSync(log, (result.stdout || '') + (result.stderr || ''));
  if (result.status !== 0 || result.stdout.includes('### Error')) throw new Error(result.stderr || result.stdout);
  console.log('PASS: ' + args[0]);
}
run(['goto', base + '/sektorler?lang=tr']);
run(['snapshot', '--filename=output/playwright/nav-05-start.yml']);
run(['run-code', `async page => {
  await page.route(/googletagmanager.com|google-analytics.com|connect.facebook.net|facebook.com/, route => route.abort());
  await page.route('**/api/contact', () => { throw new Error('A real enquiry must not be sent'); });
  const errors = []; page.on('pageerror', error => errors.push(error.message));
  const hub = ${JSON.stringify(hub)};
  const families = ${JSON.stringify(families)};
  for (const language of ['tr', 'en']) {
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto('${base}/sektorler?lang=' + language);
      const copy = hub.copy[language];
      await page.getByRole('heading', {level:1, name:copy.h1, exact:true}).waitFor();
      const root = page.locator('[data-specialties-hub]');
      if (await page.locator('h1').count() !== 1) throw new Error('One H1 expected');
      if (await page.locator('link[rel="canonical"]').count() !== 1) throw new Error('One canonical expected');
      const canonical = 'https://www.overseas.marketing/sektorler' + (language === 'en' ? '?lang=en' : '');
      if (await page.locator('link[rel="canonical"]').getAttribute('href') !== canonical) throw new Error('Wrong canonical');
      if (await root.locator('article[data-specialty]:visible').count() !== 15) throw new Error('15 initial guides');
      if (await root.locator('article[data-specialty-service]').count() !== 6) throw new Error('6 service families');
      if (await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)) throw new Error('Horizontal page overflow');
      for (const category of hub.categories) {
        const button = root.locator('[data-specialty-filter="' + category.id + '"]');
        await button.focus(); await page.keyboard.press('Enter');
        const count = hub.branches.filter(b => b.category === category.id).length;
        if (await button.getAttribute('aria-pressed') !== 'true') throw new Error('Selected filter semantics');
        if (await root.locator('article[data-specialty]:visible').count() !== count) throw new Error('Filter visibility ' + category.id);
        if (await root.locator('article[data-specialty]').count() !== 15) throw new Error('Keep all links in DOM');
        const hiddenLinks = await root.locator('article[data-specialty][hidden] a').evaluateAll(links => links.some(a => a.getClientRects().length));
        if (hiddenLinks) throw new Error('Hidden cards must not expose links');
      }
      await root.locator('[data-specialty-filter="all"]').focus(); await page.keyboard.press('Space');
      if (await root.locator('article[data-specialty]:visible').count() !== 15) throw new Error('Reset filters');
      for (let index = 0; index < copy.faqs.length; index++) {
        const button = root.locator('#specialty-faq-' + index);
        if (await button.getAttribute('aria-expanded') === 'true') { await button.click(); }
        await button.focus(); await page.keyboard.press('Enter');
        if (await button.getAttribute('aria-expanded') !== 'true') throw new Error('FAQ expanded state');
        if (await root.locator('#specialty-answer-' + index).innerText() !== copy.faqs[index].a) throw new Error('FAQ visible answer');
        await page.keyboard.press('Space');
        if (await root.locator('#specialty-answer-' + index).isVisible()) throw new Error('FAQ close');
      }
      const schema = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes => nodes.map(n => JSON.parse(n.textContent)).find(s => s['@type'] === 'FAQPage'));
      if (JSON.stringify(schema.mainEntity.map(q => ({q:q.name,a:q.acceptedAnswer.text}))) !== JSON.stringify(copy.faqs)) throw new Error('FAQ schema parity');
      await page.evaluate(() => {window.__nav05Events = []; window.gtag = (...args) => window.__nav05Events.push(args);});
      const ctas = root.getByRole('button', {name:copy.cta,exact:true});
      for (const cta of await ctas.all()) {
        await cta.click();
        const close = page.getByRole('button', {name: language === 'en' ? 'Close' : 'Kapat',exact:true});
        await close.waitFor();
        if (!await page.locator('form input[type="email"]').isVisible()) throw new Error('Real consultation form');
        await close.click();
      }
      const events = await page.evaluate(() => window.__nav05Events.filter(e => e[1] === 'growth_analysis_open'));
      if (events.length !== 2 || events.some(e => JSON.stringify(Object.keys(e[2]).sort()) !== JSON.stringify(['language','page_path','source']))) throw new Error('CTA events without personal fields');
      await page.evaluate(() => {window.gtag = () => {throw new Error('analytics unavailable');};});
      await ctas.first().click(); await page.getByRole('button', {name:language === 'en' ? 'Close' : 'Kapat',exact:true}).click();
      await root.locator('#specialty-faq-0').click();
      await page.evaluate(() => scrollTo(0,0));
      await page.screenshot({path:'output/playwright/nav-05-' + language + '-' + width + '.png',fullPage:true});
      console.log('PASS: ' + language + ' ' + width + 'px layout, all filters, keyboard FAQ, schema, CTA and analytics failure');
    }
  }
  for (const url of [...hub.branches.map(b => '/' + b.slug), ...families.map(f => f.url)]) {
    // Vite preview does not emulate Vercel cleanUrls; fetch each generated artifact explicitly.
    const response = await page.request.get('${base}' + url + '/index.html');
    const html = await response.text();
    if (response.status() !== 200 || /<title[^>]*>404|Sayfa Bulunamadı/.test(html) || !html.includes('href="https://www.overseas.marketing' + url + '"')) throw new Error('HTTP/canonical/soft404 ' + url);
  }
  await page.goto('${base}/sektorler?lang=en');
  await page.getByRole('heading',{level:1,name:hub.copy.en.h1,exact:true}).waitFor();
  await page.locator('article[data-specialty="dis-klinigi-reklam-ajansi"] a').click();
  await page.waitForURL('**/dis-klinigi-reklam-ajansi?lang=en');
  await page.locator('main').getByRole('heading',{level:1}).waitFor();
  const back = page.locator('main nav[aria-label="Breadcrumb"] a[href="/sektorler"]');
  await back.waitFor(); await back.click();
  await page.waitForURL('**/sektorler');
  await page.locator('[data-specialties-hub]').waitFor();
  await page.goto('${base}/sektorler?lang=tr');
  await page.getByRole('heading',{level:1,name:hub.copy.tr.h1,exact:true}).waitFor();
  await page.locator('article[data-specialty-service="technology"] a').click();
  await page.waitForURL('**/hizmetler/crm-otomasyon');
  await page.getByRole('heading',{level:1,name:'CRM & Otomasyon',exact:true}).waitFor();
  const noJs = await page.context().browser().newContext({javaScriptEnabled:false});
  const staticPage = await noJs.newPage();
  await staticPage.goto('${base}/sektorler/index.html');
  for (const branch of hub.branches) {
    if (!await staticPage.locator('main a[href="/' + branch.slug + '"]').count()) throw new Error('No-JS branch link ' + branch.slug);
  }
  if (!await staticPage.getByRole('link',{name:hub.copy.tr.cta,exact:true}).first().isVisible()) throw new Error('No-JS CTA fallback');
  await noJs.close();
  if (errors.length) throw new Error(errors.join('; '));
  console.log('PASS: 21 generated HTTP artifacts/canonicals, EN branch navigation/return path, CRM navigation, no-JS links/CTA and no page errors');
}`]);
fs.appendFileSync(log, '\nPASS: TR/EN at 1440/390px; 5 category filters and reset; keyboard FAQ/schema; both CTA positions with analytics failure; 21 generated HTTP artifacts/canonicals; branch return and CRM navigation; no-JS links/CTA; no uncaught page errors.\n');
console.log('PASS: complete NAV-05 browser acceptance; evidence in ' + log);
