import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- NAV-08: Breadcrumb Hiyerarşisi ve Şema Entegrasyonu Doğrulama Testi ---\n');

let failed = false;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ BAŞARISIZ: ${message}`);
    failed = true;
  } else {
    console.log(`✅ BAŞARILI: ${message}`);
  }
}

// 1. JsonLdSchema.tsx kontrolleri
const jsonLdPath = path.resolve(rootDir, 'src/components/JsonLdSchema.tsx');
assert(fs.existsSync(jsonLdPath), 'src/components/JsonLdSchema.tsx mevcut');
const jsonLdContent = fs.readFileSync(jsonLdPath, 'utf8');
assert(jsonLdContent.includes('SERVICE_RELATIONS'), 'JsonLdSchema SERVICE_RELATIONS import ediyor');
assert(jsonLdContent.includes('rel.parentHub'), 'Alt hizmetlerde 4 kademeli breadcrumb desteği mevcut');
assert(jsonLdContent.includes("'doctor-branding'"), 'Doktor Marka Yönetimi için 4 kademeli breadcrumb desteği mevcut');
assert(jsonLdContent.includes('customBreadcrumbs'), 'customBreadcrumbs desteği mevcut');

// 2. DoctorAdvertisingAgencyPage.tsx kontrolleri
const doctorAdPath = path.resolve(rootDir, 'src/components/DoctorAdvertisingAgencyPage.tsx');
const doctorAdContent = fs.readFileSync(doctorAdPath, 'utf8');
assert(doctorAdContent.includes('"name": "Uzmanlık Alanları"'), 'DoctorAdvertisingAgencyPage JSON-LD Uzmanlık Alanları içeriyor');
assert(doctorAdContent.includes('to="/sektorler"'), 'DoctorAdvertisingAgencyPage görsel breadcrumb /sektorler linki içeriyor');

// 3. ServicesDirectoryPage.tsx kontrolleri
const servicesDirPath = path.resolve(rootDir, 'src/components/ServicesDirectoryPage.tsx');
const servicesDirContent = fs.readFileSync(servicesDirPath, 'utf8');
assert(servicesDirContent.includes('JsonLdSchema'), 'ServicesDirectoryPage JsonLdSchema kullanıyor');
assert(servicesDirContent.includes('customBreadcrumbs'), 'ServicesDirectoryPage customBreadcrumbs tanımlıyor');

// 4. DictionaryPage.tsx kontrolleri
const dictionaryPath = path.resolve(rootDir, 'src/components/DictionaryPage.tsx');
const dictionaryContent = fs.readFileSync(dictionaryPath, 'utf8');
assert(dictionaryContent.includes("'@type': 'BreadcrumbList'"), 'DictionaryPage BreadcrumbList şeması içeriyor');
assert(dictionaryContent.includes('to="/blog"'), 'DictionaryPage görsel breadcrumb /blog linki içeriyor');

// 5. prerender.js kontrolleri
const prerenderPath = path.resolve(rootDir, 'scripts/prerender.js');
const prerenderContent = fs.readFileSync(prerenderPath, 'utf8');
assert(prerenderContent.includes('generateBreadcrumbSchema'), 'prerender.js generateBreadcrumbSchema fonksiyonu içeriyor');
assert(prerenderContent.includes('serviceRelationsData.json'), 'prerender.js serviceRelationsData.json okuyor');
assert(prerenderContent.includes('application/ld+json'), 'prerender.js statik head içine JSON-LD şeması enjekte ediyor');

// 6. dist/ Statik Çıktı Kontrolleri
const distDir = path.resolve(rootDir, 'dist');
assert(fs.existsSync(distDir), 'dist klasörü mevcut');

// 6a. Alt hizmet (Google Ads) 4 kademe
const gadsHtmlPath = path.resolve(distDir, 'saglik-turizmi-google-ads/index.html');
assert(fs.existsSync(gadsHtmlPath), 'dist/saglik-turizmi-google-ads/index.html mevcut');
const gadsHtml = fs.readFileSync(gadsHtmlPath, 'utf8');
assert(gadsHtml.includes('"@type":"BreadcrumbList"') && gadsHtml.includes('"position":4'), 'Google Ads statik HTML 4 kademeli BreadcrumbList içeriyor');

// 6b. Hub hizmeti (Performans Pazarlama) 3 kademe
const perfHtmlPath = path.resolve(distDir, 'hizmetler/performans-pazarlama/index.html');
assert(fs.existsSync(perfHtmlPath), 'dist/.../performans-pazarlama/index.html mevcut');
const perfHtml = fs.readFileSync(perfHtmlPath, 'utf8');
assert(perfHtml.includes('"@type":"BreadcrumbList"') && perfHtml.includes('"position":3') && !perfHtml.includes('"position":4'), 'Performans Pazarlama statik HTML 3 kademeli BreadcrumbList içeriyor');

// 6c. Doktor Marka Yönetimi 4 kademe
const docHtmlPath = path.resolve(distDir, 'doktor-marka-yonetimi/index.html');
assert(fs.existsSync(docHtmlPath), 'dist/doktor-marka-yonetimi/index.html mevcut');
const docHtml = fs.readFileSync(docHtmlPath, 'utf8');
assert(docHtml.includes('"@type":"BreadcrumbList"') && docHtml.includes('"position":4'), 'Doktor Marka Yönetimi statik HTML 4 kademeli BreadcrumbList içeriyor');

// 6d. Branş (Saç Ekimi) 3 kademe (Uzmanlık Alanları)
const hairHtmlPath = path.resolve(distDir, 'sac-ekimi-reklam-ajansi/index.html');
assert(fs.existsSync(hairHtmlPath), 'dist/sac-ekimi-reklam-ajansi/index.html mevcut');
const hairHtml = fs.readFileSync(hairHtmlPath, 'utf8');
assert(hairHtml.includes('"@type":"BreadcrumbList"') && hairHtml.includes('Uzmanlık Alanları'), 'Saç Ekimi statik HTML Uzmanlık Alanları kademeli BreadcrumbList içeriyor');

// 6e. Pazar (İngiltere) 3 kademe (Hedef Pazarlar)
const ukHtmlPath = path.resolve(distDir, 'ingiltere-saglik-turizmi-reklamlari/index.html');
assert(fs.existsSync(ukHtmlPath), 'dist/ingiltere-saglik-turizmi-reklamlari/index.html mevcut');
const ukHtml = fs.readFileSync(ukHtmlPath, 'utf8');
assert(ukHtml.includes('"@type":"BreadcrumbList"') && ukHtml.includes('Hedef Pazarlar'), 'İngiltere statik HTML Hedef Pazarlar kademeli BreadcrumbList içeriyor');

// 6f. Sözlük 3 kademe (Bilgi Merkezi)
const dictHtmlPath = path.resolve(distDir, 'sozluk/index.html');
assert(fs.existsSync(dictHtmlPath), 'dist/sozluk/index.html mevcut');
const dictHtml = fs.readFileSync(dictHtmlPath, 'utf8');
assert(dictHtml.includes('"@type":"BreadcrumbList"') && dictHtml.includes('Bilgi Merkezi'), 'Sözlük statik HTML Bilgi Merkezi kademeli BreadcrumbList içeriyor');

// 7. Header Dokunulmazlığı (diff = 0)
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
  console.error('❌ NAV-08 testleri BAŞARISIZ oldu!');
  process.exit(1);
} else {
  console.log('🎉 NAV-08 tüm testleri ve statik HTML çıktısı başarıyla GEÇTİ!');
  process.exit(0);
}
