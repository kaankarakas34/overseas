import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

console.log('🔍 SEO Raporu Doğrulama ve Audit Kontrolü Başlatılıyor...\n');

let passCount = 0;
let failCount = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✅ PASS: ${message}`);
    passCount++;
  } else {
    console.error(`  ❌ FAIL: ${message}`);
    failCount++;
  }
}

// 1. 14 Previously Erroneous Pages Check
console.log('--- 1. 14 Adet Hatalı Sayfanın Başlık, H1 ve Canonical Doğrulaması ---');
const branchAndGeoChecks = [
  { path: 'dis-klinigi-reklam-ajansi', expectedH1: 'Diş Kliniği Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/dis-klinigi-reklam-ajansi' },
  { path: 'estetik-klinigi-reklam-ajansi', expectedH1: 'Estetik Kliniği Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/estetik-klinigi-reklam-ajansi' },
  { path: 'plastik-cerrahi-reklam-ajansi', expectedH1: 'Plastik Cerrahi Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/plastik-cerrahi-reklam-ajansi' },
  { path: 'obezite-cerrahisi-reklam-ajansi', expectedH1: 'Obezite Cerrahisi Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/obezite-cerrahisi-reklam-ajansi' },
  { path: 'tup-bebek-reklam-ajansi', expectedH1: 'Tüp Bebek (IVF) Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/tup-bebek-reklam-ajansi' },
  { path: 'goz-klinigi-reklam-ajansi', expectedH1: 'Göz Kliniği Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/goz-klinigi-reklam-ajansi' },
  { path: 'hastane-reklam-ajansi', expectedH1: 'Hastane Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/hastane-reklam-ajansi' },
  { path: 'doktor-reklam-ajansi', expectedH1: 'Doktor Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/doktor-reklam-ajansi' },
  { path: 'almanya-saglik-turizmi-reklamlari', expectedH1: 'Almanya Sağlık Turizmi Reklamları', expectedCanonical: 'https://www.overseas.marketing/almanya-saglik-turizmi-reklamlari' },
  { path: 'fransa-saglik-turizmi-reklamlari', expectedH1: 'Fransa Sağlık Turizmi Reklamları', expectedCanonical: 'https://www.overseas.marketing/fransa-saglik-turizmi-reklamlari' },
  { path: 'hollanda-saglik-turizmi-reklamlari', expectedH1: 'Hollanda Sağlık Turizmi Reklamları', expectedCanonical: 'https://www.overseas.marketing/hollanda-saglik-turizmi-reklamlari' },
  { path: 'antalya-saglik-turizmi-reklam-ajansi', expectedH1: 'Antalya Sağlık Turizmi Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/antalya-saglik-turizmi-reklam-ajansi' },
  { path: 'izmir-saglik-turizmi-reklam-ajansi', expectedH1: 'İzmir Sağlık Turizmi Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/izmir-saglik-turizmi-reklam-ajansi' },
  { path: 'ankara-saglik-turizmi-reklam-ajansi', expectedH1: 'Ankara Sağlık Turizmi Reklam Ajansı', expectedCanonical: 'https://www.overseas.marketing/ankara-saglik-turizmi-reklam-ajansi' }
];

for (const check of branchAndGeoChecks) {
  const filePath = path.resolve(distDir, check.path, 'index.html');
  assert(fs.existsSync(filePath), `${check.path}/index.html dosyası mevcut`);
  if (fs.existsSync(filePath)) {
    const html = fs.readFileSync(filePath, 'utf-8');
    assert(html.includes(`<h1 style="font-size: 32px; color: #16202E; margin-bottom: 16px; line-height: 1.2;">${check.expectedH1}</h1>`) || html.includes(`>${check.expectedH1}<`), `${check.path} doğru H1 içeriyor: ${check.expectedH1}`);
    assert(html.includes(`href="${check.expectedCanonical}"`), `${check.path} doğru canonical içeriyor: ${check.expectedCanonical}`);
    
    // Canonical count check
    const canonicalMatches = html.match(/rel="canonical"/g) || [];
    assert(canonicalMatches.length === 1, `${check.path} sayfasında tam olarak 1 adet canonical etiketi var`);

    // Preload hero check (should NOT be preloaded on subpages)
    const hasHeroPreload = html.includes('rel="preload" as="image" href="/images/hero_health_tech.jpg"');
    assert(!hasHeroPreload, `${check.path} alt sayfasında gereksiz hero_health_tech preload'u kaldırılmış`);
  }
}

// 2. Homepage Checks
console.log('\n--- 2. Ana Sayfa H1 ve Canonical Doğrulaması ---');
const homeHtml = fs.readFileSync(path.resolve(distDir, 'index.html'), 'utf-8');
assert(homeHtml.includes('Sağlık Turizmi İçin Reklam, SEO ve CRM Çözümleri'), 'Ana sayfa H1 rapordaki tavsiyeye uygun olarak güncellenmiş');
assert(homeHtml.includes('https://www.overseas.marketing/'), 'Ana sayfa canonical www ile eşleşiyor');
const homeCanonicalMatches = homeHtml.match(/rel="canonical"/g) || [];
assert(homeCanonicalMatches.length === 1, 'Ana sayfada tam olarak 1 adet canonical etiketi var');

// 3. 404 Page Checks
console.log('\n--- 3. 404 Hata Sayfası ve Soft-404 Önleme ---');
const notFoundPath = path.resolve(distDir, '404.html');
assert(fs.existsSync(notFoundPath), 'dist/404.html dosyası başarıyla üretilmiş');
if (fs.existsSync(notFoundPath)) {
  const nfHtml = fs.readFileSync(notFoundPath, 'utf-8');
  assert(nfHtml.includes('content="noindex, follow"'), '404.html noindex etiketine sahip');
  assert(nfHtml.includes('Sayfa Bulunamadı'), '404.html kullanıcı dostu hata mesajı sunuyor');
}

// 4. Sitemap & Robots Checks
console.log('\n--- 4. Sitemap ve Robots.txt Doğrulaması ---');
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
assert(fs.existsSync(sitemapPath), 'sitemap.xml mevcut');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
assert(!sitemapContent.includes('https://overseas.marketing/'), 'sitemap.xml içinde non-www adresi kalmamış, tümü www');
assert(sitemapContent.includes('https://www.overseas.marketing/'), 'sitemap.xml https://www.overseas.marketing/ içeriyor');

const robotsPath = path.resolve(__dirname, '../public/robots.txt');
const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
assert(robotsContent.includes('Sitemap: https://www.overseas.marketing/sitemap.xml'), 'robots.txt sitemap URL www ile güncellenmiş');

// 5. Special SEO Guide Checks
console.log('\n--- 5. Özel Rehberler ve İçerik Kalitesi ---');
const nedirPath = path.resolve(distDir, 'saglik-turizmi/nedir/index.html');
assert(fs.existsSync(nedirPath), '/saglik-turizmi/nedir/index.html mevcut');
if (fs.existsSync(nedirPath)) {
  const nedirHtml = fs.readFileSync(nedirPath, 'utf-8');
  assert(nedirHtml.includes('Sağlık turizmi; bireylerin sağlığını korumak'), '/saglik-turizmi/nedir ilk paragrafta doğrudan tanım veriyor');
  assert(nedirHtml.includes('Medikal Turizm'), '/saglik-turizmi/nedir üç temel türü ve aktörleri açıklıyor');
}

const fiyatPath = path.resolve(distDir, 'saglik-turizmi/dis-fiyatlari/index.html');
assert(fs.existsSync(fiyatPath), '/saglik-turizmi/dis-fiyatlari/index.html mevcut');
if (fs.existsSync(fiyatPath)) {
  const fiyatHtml = fs.readFileSync(fiyatPath, 'utf-8');
  assert(fiyatHtml.includes('350€') || fiyatHtml.includes('All-on-4'), '/saglik-turizmi/dis-fiyatlari somut fiyat ve Avrupa karşılaştırması sunuyor');
}

const tabanPath = path.resolve(distDir, 'saglik-turizmi-isletmeciligi/taban-puanlari/index.html');
assert(fs.existsSync(tabanPath), '/saglik-turizmi-isletmeciligi/taban-puanlari/index.html mevcut');
if (fs.existsSync(tabanPath)) {
  const tabanHtml = fs.readFileSync(tabanPath, 'utf-8');
  assert(tabanHtml.includes('TYT') && tabanHtml.includes('taban puan'), '/saglik-turizmi-isletmeciligi/taban-puanlari eğitim ve sıralama verilerini içeriyor');
}

console.log(`\n========================================`);
console.log(`📊 Doğrulama Tamamlandı!`);
console.log(`Toplam Başarılı Test: ${passCount}`);
console.log(`Toplam Hatalı Test: ${failCount}`);
console.log(`========================================\n`);

if (failCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 TÜM TESTLER BAŞARIYLA GEÇTİ!');
}
