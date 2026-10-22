import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- NAV-07: Çift Yönlü Link ve Entegrasyon Doğrulama Testi ---\n');

let failed = false;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ BAŞARISIZ: ${message}`);
    failed = true;
  } else {
    console.log(`✅ BAŞARILI: ${message}`);
  }
}

// 1. serviceRelations.ts kontrolü
const serviceRelationsPath = path.resolve(rootDir, 'src/data/serviceRelations.ts');
assert(fs.existsSync(serviceRelationsPath), 'src/data/serviceRelations.ts dosyası mevcut');

const serviceRelationsContent = fs.readFileSync(serviceRelationsPath, 'utf8');
assert(serviceRelationsContent.includes('SERVICE_RELATIONS'), 'SERVICE_RELATIONS haritası tanımlı');
assert(serviceRelationsContent.includes("'performans-pazarlama'"), 'Performans Pazarlama hub kaydı mevcut');
assert(serviceRelationsContent.includes("'saglik-turizmi-google-ads'"), 'Google Ads alt hizmet kaydı mevcut');
assert(serviceRelationsContent.includes("'saglik-turizmi-meta-reklamlari'"), 'Meta Ads alt hizmet kaydı mevcut');
assert(serviceRelationsContent.includes("'doktor-marka-yonetimi'"), 'Doktor Marka Yönetimi kaydı mevcut');

// 2. ServiceDetailPage.tsx kontrolü
const serviceDetailPagePath = path.resolve(rootDir, 'src/components/ServiceDetailPage.tsx');
const serviceDetailContent = fs.readFileSync(serviceDetailPagePath, 'utf8');
assert(serviceDetailContent.includes('SERVICE_RELATIONS'), 'ServiceDetailPage SERVICE_RELATIONS import ediyor');
assert(serviceDetailContent.includes('relations.parentHub'), 'Alt hizmetlerde parentHub blok kurgusu mevcut');
assert(serviceDetailContent.includes('relations.subServices'), 'Hub sayfalarında subServices listesi kurgusu mevcut');
assert(serviceDetailContent.includes('relations?.relatedBranches'), 'Klinik branşlar (/sektorler) entegrasyonu mevcut');
assert(serviceDetailContent.includes('relations?.relatedMarkets'), 'Hedef pazarlar (/ulkeler) entegrasyonu mevcut');
assert(serviceDetailContent.includes('/hizmetler'), 'Hizmetler ana dizin linki breadcrumb içinde mevcut');

// 3. DoctorBrandingPage.tsx kontrolü
const doctorBrandingPagePath = path.resolve(rootDir, 'src/components/DoctorBrandingPage.tsx');
const doctorBrandingContent = fs.readFileSync(doctorBrandingPagePath, 'utf8');
assert(doctorBrandingContent.includes('/hizmetler/icerik-marka-yonetimi'), 'Doktor Marka Yönetimi üst hub linki içeriyor');
assert(doctorBrandingContent.includes('/doktor-reklam-ajansi'), 'Doktor Reklam Ajansı branş linki içeriyor');

// 4. ServicesDirectoryPage.tsx kontrolü
const servicesDirectoryPagePath = path.resolve(rootDir, 'src/components/ServicesDirectoryPage.tsx');
const servicesDirectoryContent = fs.readFileSync(servicesDirectoryPagePath, 'utf8');
assert(servicesDirectoryContent.includes('/sektorler'), 'ServicesDirectoryPage /sektorler linki içeriyor');
assert(servicesDirectoryContent.includes('/ulkeler'), 'ServicesDirectoryPage /ulkeler linki içeriyor');

// 5. prerender.js statik içerik kontrolü
const prerenderPath = path.resolve(rootDir, 'scripts/prerender.js');
const prerenderContent = fs.readFileSync(prerenderPath, 'utf8');
assert(prerenderContent.includes('/hizmetler/performans-pazarlama'), 'prerender.js performans pazarlama hub linki içeriyor');
assert(prerenderContent.includes('/hizmetler/saglik-turizmi-google-ads'), 'prerender.js google ads linki içeriyor');
assert(prerenderContent.includes('/hizmetler/saglik-turizmi-meta-reklamlari'), 'prerender.js meta reklamları linki içeriyor');
assert(prerenderContent.includes('/hizmetler/web-sitesi-landing-page'), 'prerender.js web & landing page hub linki içeriyor');
assert(prerenderContent.includes('/hizmetler/crm-otomasyon'), 'prerender.js crm-otomasyon hub linki içeriyor');
assert(prerenderContent.includes('/hizmetler/icerik-marka-yonetimi'), 'prerender.js icerik-marka-yonetimi hub linki içeriyor');

// 6. Header Dokunulmazlığı (diff = 0)
try {
  const navbarDiff = execSync('git diff HEAD -- src/components/Navbar.tsx', { encoding: 'utf8' }).trim();
  assert(navbarDiff === '', 'Navbar.tsx dosyasında 0 değişiklik var (Header dokunulmazlığı)');
} catch (e) {
  console.warn('Git diff Navbar kontrolü yapılamadı:', e.message);
}

try {
  const headerNavDiff = execSync('git diff HEAD -- src/data/headerNavigation.json', { encoding: 'utf8' }).trim();
  assert(headerNavDiff === '', 'headerNavigation.json dosyasında 0 değişiklik var (Header dokunulmazlığı)');
} catch (e) {
  console.warn('Git diff headerNavigation kontrolü yapılamadı:', e.message);
}

console.log('\n--------------------------------------------------------------');
if (failed) {
  console.error('❌ NAV-07 testleri BAŞARISIZ oldu!');
  process.exit(1);
} else {
  console.log('🎉 NAV-07 tüm kriterleri başarıyla GEÇTİ!');
  process.exit(0);
}
