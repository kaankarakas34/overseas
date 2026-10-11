import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const loadData = (p) => {
  const code = ts.transpileModule(read(p), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const context = { exports: {} };
  vm.runInNewContext(code, context, { filename: p });
  return context.exports;
};
const data = loadData('src/data/masterPlanData.ts');
const articles = [...loadData('src/data/seoArticlesData.ts').SEO_ARTICLES, ...loadData('src/data/doctorArticlesData.ts').DOCTOR_ARTICLES];
const app = read('src/App.tsx');
const rows = new Map();
const base = 'https://www.overseas.marketing';
const add = (url, fields, source) => {
  const pathname = url.startsWith('http') ? new URL(url).pathname : url;
  const existing = rows.get(pathname) || { path: pathname, url: base + pathname, sources: [], gscStatus: 'Veri yok; sorgu/URL ve performans doğrulaması bekliyor', indexStatus: 'GSC ile doğrulanmadı', role: 'İncelenmeli', intent: 'Belirlenmeli', keywords: [], parent: 'Belirlenmeli', placement: 'Bağlamsal; inceleme gerekli', currentHeader: 'Kaynakta doğrudan doğrulanmadı', decision: 'Koruma varsayımı; GSC bekleniyor' };
  Object.assign(existing, fields);
  if (!existing.sources.includes(source)) existing.sources.push(source);
  rows.set(pathname, existing);
};
const serviceRoles = {
  'saglik-turizmi-reklam-ajansi': ['Ana ticari giriş (örtüşme adayı)', 'Ajans seçimi', ['sağlık turizmi reklam ajansı'], '/', 'Merkez + bağlamsal; header için yeni ekleme yok'],
  'saglik-turizmi-dijital-pazarlama': ['Entegre çözüm / alt hizmet (geçici)', 'Entegre dijital büyüme hizmeti', ['sağlık turizmi dijital pazarlama'], '/hizmetler [öneri; mevcut değil]', 'Merkez + bağlamsal'],
  'uluslararasi-hasta-kazanimi': ['Entegre çözüm / alt hizmet (geçici)', 'Hasta edinimi ve satış hunisi hizmeti', ['uluslararası hasta kazanımı', 'yabancı hasta kazanımı'], '/hizmetler [öneri; mevcut değil]', 'Merkez + branş/ülke + bağlamsal'],
  'performans-pazarlama': ['Ana hizmet merkezi', 'Performans reklam yönetimi', ['sağlık turizmi reklam yönetimi', 'sağlık turizmi performans pazarlama'], '/hizmetler [öneri; mevcut değil]', 'Hizmet merkezi; header kararı ayrı/onay gerekli'],
  'saglik-turizmi-google-ads': ['Alt hizmet', 'Google Ads yönetimi', ['sağlık turizmi Google Ads'], '/hizmetler/performans-pazarlama', 'Merkez + rehber/branş/ülke'],
  'saglik-turizmi-meta-reklamlari': ['Alt hizmet', 'Meta reklam yönetimi', ['sağlık turizmi Meta reklamları', 'Instagram reklam yönetimi'], '/hizmetler/performans-pazarlama', 'Merkez + rehber/branş/ülke'],
  'uluslararasi-seo-hizmeti': ['Ana hizmet merkezi', 'Uluslararası SEO hizmeti', ['uluslararası SEO', 'yurtdışı SEO', 'sağlık turizmi SEO'], '/hizmetler [öneri; mevcut değil]', 'Hizmet merkezi; header kararı ayrı/onay gerekli'],
  'geo-generative-engine-optimization': ['Ana hizmet merkezi', 'GEO ve AI görünürlüğü hizmeti', ['GEO ajansı', 'sağlık turizmi GEO'], '/hizmetler [öneri; mevcut değil]', 'Hizmet merkezi; header kararı ayrı/onay gerekli'],
  'web-sitesi-landing-page': ['Ana hizmet merkezi', 'Web sitesi ve dönüşüm tasarımı', ['sağlık turizmi web tasarım', 'klinik web sitesi'], '/hizmetler [öneri; mevcut değil]', 'Hizmet merkezi; header kararı ayrı/onay gerekli'],
  'saglik-turizmi-landing-page': ['Alt hizmet', 'Landing page tasarımı', ['sağlık turizmi landing page'], '/hizmetler/web-sitesi-landing-page', 'Merkez + bağlamsal'],
  'saglik-turizmi-crm-yazilimi': ['Ana teknoloji hizmeti', 'CRM ve lead takibi', ['sağlık turizmi CRM', 'hasta takip sistemi'], 'CRM & Otomasyon [gruplama önerisi; merkez URL kararı NAV-02]', 'Teknoloji merkezi + bağlamsal'],
  'yapay-zeka-otomasyon': ['Alt teknoloji hizmeti', 'AI Call Agent ve otomasyon', ['AI Call Agent', 'sağlık turizmi otomasyon'], 'CRM & Otomasyon [gruplama önerisi; merkez URL kararı NAV-02]', 'Teknoloji merkezi + bağlamsal'],
  'sosyal-medya-yonetimi': ['Alt içerik hizmeti', 'Sosyal medya yönetimi', ['sağlık turizmi sosyal medya yönetimi'], 'İçerik & Marka [gruplama önerisi; merkez URL kararı NAV-02]', 'İçerik merkezi + bağlamsal'],
  'icerik-produksiyon': ['Alt içerik hizmeti', 'Video ve prodüksiyon hizmeti', ['sağlık turizmi içerik prodüksiyon', 'doktor video çekimi'], 'İçerik & Marka [gruplama önerisi; merkez URL kararı NAV-02]', 'İçerik merkezi + bağlamsal'],
};
for (const service of data.MASTER_SERVICES) {
  const mapping = serviceRoles[service.id];
  if (!mapping) throw new Error(`Sınıflandırılmamış hizmet: ${service.id}`);
  const [role, intent, keywords, parent, placement] = mapping;
  const canonical = `/hizmetler/${service.id}`;
  add(canonical, { title: service.title, role, intent, keywords, parent, placement, currentHeader: 'Evet; Navbar MASTER_SERVICES.map masaüstü ve mobil', canonicalTarget: canonical, evidence: service.shortDesc }, 'MASTER_SERVICES + App.tsx');
}
for (const match of app.matchAll(/<Route\s+path="([^"]+)"\s+element=\{<ServicePageWrapper\s+serviceIdProp="([^"]+)"/g)) {
  const canonical = `/hizmetler/${match[2]}`;
  const source = rows.get(canonical);
  add(match[1], { ...source, path: match[1], url: base + match[1], sources: [], currentHeader: 'Navbar hizmet listesinde bu alias yerine /hizmetler/ URL kullanılıyor', canonicalTarget: canonical, decision: 'Alias aynı bileşene bağlı; canonical kaynak koddan türetildi. Canlı HTML/GSC doğrulaması bekliyor; 301 uygulanmadı.' }, 'App.tsx explicit ServicePageWrapper alias');
}
for (const [key, role, parent, intent] of [
  ['MASTER_BRANCHES', 'Branş', '/sektorler', 'Branşa özel ajans/hasta kazanımı'],
  ['MASTER_MARKETS', 'Ülke / pazar', '/ulkeler', 'Ülkeden hasta kazanımı/pazarlama'],
  ['MASTER_CITIES', 'Şehir / yerel hizmet', '/hizmetler [öneri; mevcut değil]', 'Şehirde ajans/hizmet seçimi'],
]) {
  for (const item of data[key]) add(`/${item.slug}`, { title: item.title, role, intent, keywords: [item.seoTitle || item.title], parent, placement: 'Merkez + ilgili hizmet/rehber bağlantıları', canonicalTarget: `/${item.slug}` }, key);
}
for (const article of articles) {
  const service = (article.internalLinks || []).find(link => link.url.startsWith('/hizmetler/'));
  add(article.url, { title: article.title, role: 'Bilgilendirici rehber', intent: article.searchIntent, keywords: [article.primaryKeyword, ...(article.secondaryKeywords || [])], parent: '/blog', serviceTarget: service?.url || 'İçerik özelinde belirlenmeli', placement: 'Rehber merkezi + konu kümesi + ilgili hizmet; yeni header eklemesi yok', canonicalTarget: article.url }, 'SEO_ARTICLES / DOCTOR_ARTICLES');
}
const hubs = {
  '/': ['Ana sayfa', 'Ana ticari giriş', 'Sağlık turizmi ajansı seçimi', ['sağlık turizmi reklam ajansı', 'sağlık turizmi pazarlaması']],
  '/sektorler': ['Sektörler', 'Branş merkezi', 'Klinik branşına uygun ajans', ['klinik pazarlama uzmanlık alanları']],
  '/ulkeler': ['Hedef ülkeler', 'Ülke merkezi', 'Hedef pazar seçimi', ['sağlık turizmi hedef ülkeler']],
  '/blog': ['Rehber ve bilgi merkezi', 'Rehber merkezi', 'Bilgi arama', ['sağlık turizmi pazarlama rehberleri']],
  '/kaynaklar': ['Kaynaklar', 'Rehber merkezi alias', 'Bilgi arama', ['sağlık turizmi rehberleri']],
  '/doktor-marka-yonetimi': ['Doktor marka yönetimi', 'Alt içerik hizmeti', 'Hekim marka danışmanlığı', ['doktor marka yönetimi']],
  '/doktor-reklam-ajansi': ['Doktor reklam ajansı', 'Branş / uzmanlık ticari sayfası', 'Hekime özel ajans seçimi', ['doktor reklam ajansı']],
  '/b2b-linkedin-outreach': ['B2B LinkedIn Outreach', 'Bağımsız B2B hizmet landing page', 'B2B iş geliştirme', ['B2B LinkedIn outreach']],
  '/sozluk': ['Pazarlama sözlüğü', 'Bilgilendirici sözlük merkezi', 'Terim açıklaması', ['sağlık turizmi pazarlama terimleri']],
};
for (const [url, [title, role, intent, keywords]] of Object.entries(hubs)) add(url, { title, role, intent, keywords, parent: url === '/' ? 'Yok' : url === '/doktor-marka-yonetimi' ? 'İçerik & Marka [NAV-02 kararı]' : url === '/doktor-reklam-ajansi' ? '/sektorler' : '/', placement: 'Merkez/bağlamsal; header değişikliği bu görevde uygulanmaz' }, 'App.tsx dedicated routes');
for (const match of app.matchAll(/<Route\s+path="([^":*]+)"/g)) {
  if (match[1].endsWith('/') && match[1] !== '/') continue;
  if (!rows.has(match[1])) add(match[1], { role: 'Kurumsal / güven / dönüşüm', intent: 'Kurumsal bilgi veya iletişim', keywords: [match[1].slice(1).replaceAll('-', ' ')], parent: '/', placement: 'İlgili kurumsal merkez / footer' }, 'App.tsx explicit route');
}
const sitemap = [...read('public/sitemap.xml').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => new URL(m[1]).pathname);
for (const url of sitemap) add(url, { inSitemap: true }, 'public/sitemap.xml');
for (const row of rows.values()) row.inSitemap ??= false;
const inventory = [...rows.values()].sort((a, b) => a.path.localeCompare(b.path));
const summary = { urls: inventory.length, sitemapUrls: sitemap.length, uniqueSitemapUrls: new Set(sitemap).size, services: data.MASTER_SERVICES.length, serviceAliases: inventory.filter(r => r.sources.includes('App.tsx explicit ServicePageWrapper alias')).length, branches: data.MASTER_BRANCHES.length, markets: data.MASTER_MARKETS.length, cities: data.MASTER_CITIES.length, articles: articles.length, unclassified: inventory.filter(r => r.role === 'İncelenmeli').length, missingGsc: true };
const escape = value => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const table = items => ['| URL | Rol | Ana niyet / kelime | Üst merkez | Link konumu |', '| --- | --- | --- | --- | --- |', ...items.map(r => `| ${r.path} | ${escape(r.role)} | ${escape(r.intent)}; ${escape(r.keywords.join(', '))} | ${escape(r.parent)} | ${escape(r.placement)} |`)].join('\n');
const serviceRows = inventory.filter(r => r.sources.includes('MASTER_SERVICES + App.tsx'));
const report = `# NAV-01 — URL ve sayfa rolü sınıflandırması\n\nTarih: 11 Ekim 2026. Durum: Kod/sitemap tabanlı ön çalışma; GSC doğrulaması bekleniyor.\n\n## Kullanıcı kuralı\n\nYeni sayfa oluşturulabilir. Header'a yeni hizmet eklenmesi, veri listesi üzerinden dolaylı ekleme dahil, önceden açık kullanıcı onayı gerektirir. Header'a şu anda hiçbir şey eklenmeyecek. NAV-01 dışındaki görevler kullanıcı “devam” demeden başlamayacak.\n\n## Kanıt ve sınırlar\n\nKaynaklar: App.tsx route'ları, MASTER_SERVICES/BRANCHES/MARKETS/CITIES, SEO_ARTICLES, DOCTOR_ARTICLES ve public/sitemap.xml. Site ana sayfasının sunucu tarafından sunulan metni de 11 Ekim 2026'da kontrol edildi: https://www.overseas.marketing/. Bu tam bir canlı crawl, render veya GSC indeks denetimi değildir. Rol ve kelime önerileri kaynak içeriklerinden yapılan çıkarımlardır; arama hacmi veya GSC verisi değildir.\n\n${summary.urls} URL; ${summary.services} hizmet kaydı; ${summary.serviceAliases} hizmet alias route'u; ${summary.branches} branş, ${summary.markets} pazar, ${summary.cities} şehir kaydı; ${summary.articles} rehber kaydı. Sitemap: ${summary.sitemapUrls} kayıt / ${summary.uniqueSitemapUrls} tekil URL. İncelenmeli rolü: ${summary.unclassified}. Bu sayılar yerel çalışma ağacına aittir; Google indeks sayısı değildir.\n\n## Hizmet URL karar tablosu\n\n${table(serviceRows)}\n\n## Kapsam örtüşmesi kararları\n\n- Ana sayfa ve Sağlık Turizmi Reklam Ajansı: İkisinde de ajans seçimi ve entegre hasta kazanımı kapsamı var. Ana sayfa marka/ajans girişidir; hizmet sayfasını B2B hizmet kapsamı, süreç ve vaka kanıtıyla farklılaştırma adayı olarak koru. Birleşme kararı GSC sonrası.\n- Dijital Pazarlama: Reklam, SEO, GEO, web ve CRM'yi birlikte anlattığı için ana sayfa/ajans sayfasıyla örtüşme riski var. Entegre büyüme stratejisi kapsamına daraltma önerisi; kesin ayrım veya birleşme GSC sonrası.\n- Uluslararası Hasta Kazanımı: Dil yerelleştirme, yanıt süresi, satış hunisi ve CRM operasyonu vurgusu ayrı niyet potansiyeli taşır. Hasta edinimi süreci odağında koruma önerisi; header'a yeni üst hizmet ekleme önerisi uygulanmadı.\n- Reklam Yönetimi / Performans Pazarlama: MASTER_SERVICES içinde performans-pazarlama kaydının başlığı Sağlık Turizmi Reklam Yönetimi. İki farklı ana hizmet kaydı değil; bu URL reklam ailesinin mevcut merkezi adayıdır. Google Ads ve Meta sayfalarını alt hizmet olarak değerlendir.\n- Web & Landing Page ile Sağlık Turizmi Landing Page: İlki web/dönüşüm merkezi, ikincisi kampanya açılış sayfası alt hizmeti adayıdır. Otomatik birleştirme yok.\n- Kök hizmet alias'ları aynı ServicePageWrapper bileşenine ve /hizmetler/ canonical hedeflerine bağlı. Bu kaynak kod bulgusudur; canlı canonical ve GSC seçilen URL doğrulanmadan yeni yönlendirme yapılmaz.\n\n## Menü ile içerik kararının ayrılması\n\nMenü: Yeni hizmet ekleme yok; mevcut Navbar.tsx değişmedi. MASTER_SERVICES.map mevcut ${summary.services} kaydı masaüstü ve mobilde gösteriyor; “8 Temel Büyüme Hizmeti” metni kayıt sayısıyla uyuşmuyor. Bu bir NAV-04 inceleme bulgusudur, bu görevde düzeltilmedi.\n\nİçerik: Tüm mevcut URL'ler korunuyor. Üst merkez sütunundaki /hizmetler ve grup adları mimari öneridir; yeni sayfa veya NAV-02 çıktısı olarak uygulanmadı. /sektorler, /ulkeler ve /blog zaten route olarak mevcut. Sırf menü için URL taşıma/301/canonical değişikliği yapılmadı.\n\n## Açık kabul kriterleri\n\n- GSC son 3/16 ay sorgu–URL eşlemesi, gösterim, tıklama, CTR, pozisyon ve mümkünse ülke/cihaz verisi.\n- Sitemap'te olup veri/route kaynağıyla henüz sınıflandırılamayan URL'lerin eski blog/prerender içeriği kontrolü.\n- GSC sonuçlarıyla geçici niyet/rol/koruma kararlarının kesinleştirilmesi. TECH-01 ve TECH-06 tamamlandı olarak işaretlenmedi; NAV-01 de Done değildir.\n\n## Tam envanter\n\nHer URL'nin kaynak, canonical aday hedefi, kelime kümesi, rol, bağlantı konumu ve GSC/indeks veri durumu nav-01-inventory.json dosyasındadır.\n\n${table(inventory)}\n`;
const normalizedReport = report.replace("- Sitemap'te olup veri/route kaynağıyla henüz sınıflandırılamayan URL'lerin eski blog/prerender içeriği kontrolü.", "- Sitemap ve kaynak verisindeki URL'lerin canlı canonical/indeks durumunu GSC ile doğrulama. Sitemap'te /doktor-reklam-ajansi iki kez yer alıyor; TECH-01 için bulgu, bu görevde değiştirilmedi.");
if (new Set(inventory.map(r => r.url)).size !== inventory.length) throw new Error('Envanterde tekrarlanan URL var');
if (sitemap.some(url => !rows.has(url))) throw new Error('Sitemap URL kapsamı eksik');
if (inventory.some(r => !r.role || !r.intent || !r.parent || !r.placement)) throw new Error('Sınıflandırma alanı eksik');
fs.mkdirSync(path.join(root, 'docs/seo'), { recursive: true });
fs.writeFileSync(path.join(root, 'docs/seo/nav-01-inventory.json'), JSON.stringify({ summary, inventory }, null, 2) + '\n');
fs.writeFileSync(path.join(root, 'docs/seo/nav-01-classification.md'), normalizedReport);
fs.writeFileSync(path.join(root, 'docs/seo/nav-01-linear-summary.md'), normalizedReport.slice(0, normalizedReport.indexOf('## Tam envanter')));
console.log(JSON.stringify(summary, null, 2));
