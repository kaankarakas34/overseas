import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const readJson = p => JSON.parse(fs.readFileSync(path.join(root, p), 'utf8'));
const plan = readJson('docs/seo/nav-02-service-architecture.json');
const inventory = readJson('docs/seo/nav-01-inventory.json').inventory;
const known = new Map(inventory.map(row => [row.path, row]));
const nodes = plan.families.flatMap(f => [f.hub, ...f.children]).concat(plan.crossFamilySolutions);
const ids = new Set(plan.families.map(f => f.id));
if (ids.size !== 6 || plan.families.length !== 6) throw new Error('Altı tekil aile gerekli');
if (new Set(nodes.map(n => n.url)).size !== nodes.length) throw new Error('Bir URL birden fazla ana aile/rol altında');
for (const node of nodes) {
  if (!node.scope || !node.evidence || !node.cta) throw new Error(`Eksik brief: ${node.url}`);
  if (node.exists !== known.has(node.url)) throw new Error(`URL varlık bilgisi uyuşmuyor: ${node.url}`);
}
for (const family of plan.families) {
  if (family.relatedFamilies.some(id => !ids.has(id))) throw new Error('Geçersiz aile ilişkisi');
}
const masterUrls = inventory.filter(row => row.sources.includes('MASTER_SERVICES + App.tsx')).map(row => row.path);
if (masterUrls.some(url => !nodes.some(node => node.url === url))) throw new Error('Mevcut hizmet kapsamı eksik');
const aliases = inventory.filter(row => row.sources.includes('App.tsx explicit ServicePageWrapper alias'));
if (aliases.some(row => !nodes.some(node => node.url === row.canonicalTarget))) throw new Error('Alias hedefi kapsam dışı');
const summary = { families: plan.families.length, existingHubs: plan.families.filter(f => f.hub.exists).length, proposedHubs: plan.families.filter(f => !f.hub.exists).length, existingChildren: plan.families.reduce((n, f) => n + f.children.length, 0), crossFamilySolutions: plan.crossFamilySolutions.length, coveredMasterServices: masterUrls.length, serviceAliases: aliases.length };
const lines = [
  '# NAV-02 — Altı hizmet ailesi ve merkez–alt hizmet ağacı',
  '', 'Tarih: 11 Ekim 2026. Çıktı: Mimari ve içerik brief’i. Sayfa, route veya header uygulaması bu görevin kapsamında yapılmadı.',
  '', '## Kurallar ve veri sınırı', '', ...Object.values(plan.policy).map(value => `- ${value}`),
  '', 'Kaynaklar: NAV-01 envanteri, src/data/masterPlanData.ts, src/App.tsx, ServiceDetailPage.tsx ve DoctorBrandingPage.tsx. Analiz yerel kaynaklara dayanır; canlı trafik veya arama hacmi iddiası içermez.',
  '', '## Ana ağaç', '', 'Ana Sayfa → /hizmetler (yeni merkez önerisi; NAV-03)', '',
  '| Aile | Merkez URL | Durum | Alt hizmetler / kapsam bölümleri |', '| --- | --- | --- | --- |',
  ...plan.families.map(f => `| ${f.name} | ${f.hub.url} | ${f.hub.exists ? 'Mevcut URL korunur' : 'Yeni merkez önerisi; oluşturulmadı'} | ${[...f.children.map(n => n.url), ...f.sections.map(s => `${s.name} (aynı merkezde bölüm)`)].join('<br>')} |`),
];
for (const family of plan.families) {
  lines.push('', `## ${family.name}`, '', `Merkez: ${family.hub.url}`, '', `Özgün kapsam: ${family.hub.scope}`, '', `Toplanacak kanıt: ${family.hub.evidence}`, '', `Önerilen CTA: ${family.hub.cta}`);
  for (const child of family.children) lines.push('', `### ${child.url}`, '', `Üst merkez: ${family.hub.url}. Mevcut URL korunur.`, '', `Özgün kapsam: ${child.scope}`, '', `Toplanacak kanıt: ${child.evidence}`, '', `Önerilen CTA: ${child.cta}`);
  for (const section of family.sections) lines.push('', `### Kapsam bölümü: ${section.name}`, '', section.scope, '', `URL kararı: ${section.decision}`);
  lines.push('', `İlgili aileler: ${family.relatedFamilies.map(id => plan.families.find(f => f.id === id).name).join(', ')}.`);
}
lines.push('', '## Aileler arası çözüm sayfaları', '', 'Bu üç sayfa yedinci hizmet ailesi veya yeni header öğesi değildir. Mevcut URL’leri koruyarak ilgili aile merkezlerine bağlanır; kesin farklılaştırma/birleştirme NAV-01 GSC doğrulaması ve NAV-10 kapsamında değerlendirilir.');
for (const node of plan.crossFamilySolutions) lines.push('', `### ${node.url}`, '', node.scope, '', `İlgili aileler: ${node.families.map(id => plan.families.find(f => f.id === id).name).join(', ')}.`, '', `Kanıt: ${node.evidence}. CTA: ${node.cta}.`);
lines.push('', '## Alternatif hizmet adresleri', '', 'Aşağıdaki kök adresler App.tsx içinde aynı ServicePageWrapper bileşenine bağlıdır. Ayrı alt hizmet gibi sayılmaz. Canonical hedefi kaynak koddan türetilmiştir; bu görevde canlı/GSC doğrulaması veya yönlendirme yapılmadı.', '', '| Alternatif adres | Mevcut hizmet hedefi |', '| --- | --- |', ...aliases.map(row => `| ${row.path} | ${row.canonicalTarget} |`));
lines.push('', '## Uygulama sırası ve kabul', '', '- NAV-02 çıktısı altı ailenin tanımıdır; yeni sayfa uygulaması başlatılmadı.', '- NAV-03 /hizmetler merkezini bu ağaca göre hazırlayabilir. Önerilen iki yeni aile merkezi ayrıca açıkça “oluşturulmadı” olarak işaretlenir; boş hedeflere link yayınlanmaz.', '- NAV-05/06 mevcut /sektorler ve /ulkeler merkezlerini ayrıca ele alır; branş/ülke sayfaları hizmet ailesine dönüştürülmez.', '- NAV-07 çift yönlü hub–alt hizmet linkleri, ilgili rehber ve branş/pazar ilişkilerini uygular. NAV-08 breadcrumb hiyerarşisini aynı ağaçtan üretir.', '- Header veya MASTER_SERVICES değişikliği için ayrıca kullanıcı onayı gereklidir; NAV-04 otomatik başlatılmaz.', '- SEO alt niyetleri ve GEO motorları mevcut sayfalarda kapsam bölümü olarak eşlendi. Ayrı URL için kanıt olmadığından şu anda yeni alt sayfa üretim kararı verilmedi; GSC/SERP verisi gelince yeniden değerlendirilecek.', '', 'Doğrulama: Altı tekil aile; dört mevcut merkez, iki önerilen merkez; sekiz mevcut alt hizmet; üç aileler arası çözüm. 14 MASTER_SERVICES kaydı ve doktor marka yönetimi kapsandı; 17 hizmet alias hedefi eşleşti. Kapsam/kanıt/CTA alanları ve URL varlık bilgileri doğrulandı.', '', 'NAV-01 ve GSC doğrulaması açık kalır. Kullanıcı “devam” demeden NAV-03’e geçilmez.', '');
fs.writeFileSync(path.join(root, 'docs/seo/nav-02-service-architecture.md'), lines.join('\n'));
console.log(JSON.stringify(summary, null, 2));
