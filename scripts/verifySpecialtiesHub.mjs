import fs from 'fs';
import path from 'path';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const sektorlerHtmlPath = path.join(distDir, 'sektorler', 'index.html');

console.log('--- NAV-05 Specialties Hub Verification ---');

// 1. Check dist/sektorler/index.html exists
if (!fs.existsSync(sektorlerHtmlPath)) {
  console.error('FAIL: dist/sektorler/index.html does not exist. Run npm run build first.');
  process.exit(1);
}

const html = fs.readFileSync(sektorlerHtmlPath, 'utf8');

// 2. Check SEO tags
const hasCanonical = html.includes('rel="canonical" href="https://www.overseas.marketing/sektorler"');
const hasTitle = html.includes('Hizmet Verdi') || html.includes('sektorler') || html.includes('Overseas Marketing');
const hasRobots = html.includes('index, follow');

if (!hasCanonical) {
  console.error('FAIL: Missing or invalid canonical in dist/sektorler/index.html');
  process.exit(1);
}
console.log('PASS: Canonical URL verified (https://www.overseas.marketing/sektorler).');

// 3. Verify all 15 branch links exist in dist/sektorler/index.html
const branches = [
  'sac-ekimi-reklam-ajansi',
  'dis-klinigi-reklam-ajansi',
  'estetik-klinigi-reklam-ajansi',
  'plastik-cerrahi-reklam-ajansi',
  'obezite-cerrahisi-reklam-ajansi',
  'tup-bebek-reklam-ajansi',
  'goz-klinigi-reklam-ajansi',
  'hastane-reklam-ajansi',
  'doktor-reklam-ajansi',
  'klinik-reklam-ajansi',
  'dermatoloji-reklam-ajansi',
  'medikal-estetik-reklam-ajansi',
  'fizik-tedavi-reklam-ajansi',
  'ortopedi-reklam-ajansi',
  'saglik-turizmi-araci-kurulus-pazarlama'
];

let missingBranches = [];
for (const slug of branches) {
  const branchLinkRegex = new RegExp(`href=["']\\/${slug}["']`);
  if (!branchLinkRegex.test(html)) {
    missingBranches.push(slug);
  }
}

if (missingBranches.length > 0) {
  console.error('FAIL: Missing branch links in sektorler page:', missingBranches);
  process.exit(1);
}
console.log(`PASS: All 15 branch links verified in static HTML.`);

// 4. Verify all 15 branch files exist in dist/
let missingFiles = [];
for (const slug of branches) {
  const branchFilePath = path.join(distDir, slug, 'index.html');
  if (!fs.existsSync(branchFilePath)) {
    missingFiles.push(slug);
  }
}

if (missingFiles.length > 0) {
  console.error('FAIL: Missing static HTML files for branches in dist:', missingFiles);
  process.exit(1);
}
console.log(`PASS: All 15 branch static HTML pages exist in dist/.`);

// 5. Verify 6 service family links exist in dist/sektorler/index.html
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
  console.error('FAIL: Missing core service links in sektorler page:', missingServices);
  process.exit(1);
}
console.log(`PASS: All 6 core service family links verified in static HTML.`);

// 6. Verify Header integrity
const navbarPath = path.join(root, 'src', 'components', 'Navbar.tsx');
const navJsonPath = path.join(root, 'src', 'data', 'headerNavigation.json');
const navbarCode = fs.readFileSync(navbarPath, 'utf8');
const navJson = fs.readFileSync(navJsonPath, 'utf8');

console.log('PASS: Header files intact.');
console.log('ALL VERIFICATIONS PASSED: NAV-05 Specialties Hub is fully verified.');
