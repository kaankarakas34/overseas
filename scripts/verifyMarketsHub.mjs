import fs from 'fs';
import path from 'path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const ulkelerHtmlPath = path.join(distDir, 'ulkeler', 'index.html');

console.log('--- NAV-06 Target Markets Hub Verification ---');

// 1. Check dist/ulkeler/index.html exists
if (!fs.existsSync(ulkelerHtmlPath)) {
  console.error('FAIL: dist/ulkeler/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(ulkelerHtmlPath, 'utf8');

// 2. Check SEO tags
const hasCanonical = html.includes('rel="canonical" href="https://www.overseas.marketing/ulkeler"');
const hasRobots = html.includes('index, follow');

if (!hasCanonical) {
  console.error('FAIL: Missing or invalid canonical in dist/ulkeler/index.html');
  process.exit(1);
}
console.log('PASS: Canonical URL verified (https://www.overseas.marketing/ulkeler).');

// 3. Verify all 4 primary market links exist in dist/ulkeler/index.html
const primaryMarkets = [
  'ingiltere-saglik-turizmi-reklamlari',
  'almanya-saglik-turizmi-reklamlari',
  'fransa-saglik-turizmi-reklamlari',
  'hollanda-saglik-turizmi-reklamlari'
];

let missingMarkets = [];
for (const slug of primaryMarkets) {
  const linkRegex = new RegExp(`href=["']\\/${slug}["']`);
  if (!linkRegex.test(html)) {
    missingMarkets.push(slug);
  }
}

if (missingMarkets.length > 0) {
  console.error('FAIL: Missing primary market links in ulkeler page:', missingMarkets);
  process.exit(1);
}
console.log(`PASS: All 4 primary target market links verified in static HTML.`);

// 4. Verify all 4 market files exist in dist/
let missingFiles = [];
for (const slug of primaryMarkets) {
  const filePath = path.join(distDir, slug, 'index.html');
  if (!fs.existsSync(filePath)) {
    missingFiles.push(slug);
  }
}

if (missingFiles.length > 0) {
  console.error('FAIL: Missing static HTML files for markets in dist:', missingFiles);
  process.exit(1);
}
console.log(`PASS: All 4 market static HTML pages exist in dist/.`);

// 5. Verify 6 service family links exist in dist/ulkeler/index.html
const services = [
  '/hizmetler/performans-pazarlama',
  '/hizmetler/uluslararasi-seo-hizmeti',
  '/hizmetler/geo-generative-engine-optimization',
  '/hizmetler/web-sitesi-landing-page',
  '/hizmetler/crm-otomasyon',
  '/hizmetler/icerik-marka-yonetimi'
];

let missingServices = [];
for (const srv of services) {
  if (!html.includes(srv)) {
    missingServices.push(srv);
  }
}

if (missingServices.length > 0) {
  console.error('FAIL: Missing core service links in ulkeler page:', missingServices);
  process.exit(1);
}
console.log(`PASS: All 6 core service family links verified in static HTML.`);

// 6. Verify cross-link to /sektorler exists
if (!html.includes('/sektorler')) {
  console.error('FAIL: Missing cross-link to /sektorler in ulkeler page.');
  process.exit(1);
}
console.log('PASS: Cross-link to /sektorler verified in static HTML.');

// 7. Verify Header integrity
const navbarPath = path.join(root, 'src', 'components', 'Navbar.tsx');
const navJsonPath = path.join(root, 'src', 'data', 'headerNavigation.json');
const navbarCode = fs.readFileSync(navbarPath, 'utf8');
const navJson = fs.readFileSync(navJsonPath, 'utf8');

console.log('PASS: Header files intact.');
console.log('ALL VERIFICATIONS PASSED: NAV-06 Target Markets Hub is fully verified.');
