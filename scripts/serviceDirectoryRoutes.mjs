import fs from 'node:fs';
const families = JSON.parse(fs.readFileSync(new URL('../src/data/serviceFamilies.json', import.meta.url), 'utf8'));
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const p = value => `<p>${escape(value)}</p>`;
const list = (items, ordered = false) => `<${ordered ? 'ol' : 'ul'}>${items.map(item => `<li>${escape(item.tr)}</li>`).join('')}</${ordered ? 'ol' : 'ul'}>`;
const link = (url, label) => `<a href="${escape(url)}">${escape(label)}</a>`;
const ecosystemLinks = `<section><h2>Entegre Ekosistem: Klinik Branşlar ve Hedef Pazarlar</h2><p>Hizmetlerimiz; hedeflediğiniz klinik branş ve coğrafi pazar regülasyonlarına göre uçtan uca uyarlanır.</p><p>${link('/sektorler', 'Klinik Branşlar Merkezi (15 Branş)')} | ${link('/ulkeler', 'Hedef Pazarlar ve Ülke Koridorları')} | ${link('/blog', 'Bilgi Merkezi ve Rehberler')}</p></section>`;
const analysis = `<section><h2>Kurumunuzun başlangıç noktasını birlikte belirleyelim</h2>${p('Hedef pazarlarınızı, mevcut kanallarınızı ve başvuru takip sürecinizi paylaşın. Mevcut durumunuza göre hizmet kapsamını ve öncelikleri birlikte değerlendirelim.')}${link('/teklif-al', 'Büyüme Analizi Al')}</section>`;
export const serviceDirectoryRoutes = [
  {
    path: '/hizmetler',
    title: 'Dijital Pazarlama ve Büyüme Hizmetleri | Overseas Marketing',
    description: 'Performans pazarlama, uluslararası SEO, GEO, web, CRM otomasyonu ve içerik-markayı altı hizmet ailesinde inceleyin. Kurumunuz için doğru başlangıç alanını seçin.',
    h1: 'Dijital pazarlama ve büyüme hizmetleri',
    content: `${p('Kurumunuzun çözmek istediği soruna göre başlangıç alanını seçin. Reklam, arama görünürlüğü, web, iletişim akışları ve içerik aynı büyüme planının birbirine bağlı parçalarıdır.')}<section><h2>Altı hizmet ailesi, ortak büyüme planı</h2>${families.map(family => `<article data-service-family="${family.id}"><h3>${escape(family.name.tr)}</h3>${p(family.description.tr)}${p('Buradan başlayın: '+family.need.tr)}${link(family.url, family.name.tr+' merkezini incele')}</article>`).join('')}</section><section><h2>Doğru çalışma kapsamını nasıl seçiyoruz?</h2>${p('Kanal seçmeden önce kurumunuzu, hedef ülkeleri ve mevcut başvuru sürecini birlikte değerlendiririz. CRM takibindeki bir sorun ile reklam erişimindeki bir sorun farklı müdahaleler gerektirir.')}<ol><li>Hedef kitleyi, dilleri ve hedef pazarları netleştirin.</li><li>Görünürlük, başvuru ve takip arasındaki darboğazı belirleyin.</li><li>Seçilen hizmetler için öncelik, sorumluluk ve ölçüm planını oluşturun.</li></ol></section>${ecosystemLinks}${analysis}`,
  },
  ...families.filter(family => family.hub).map(family => ({
    path: family.url,
    title: `${family.name.tr} Hizmetleri | Overseas Marketing`,
    description: family.description.tr,
    h1: family.name.tr,
    content: `${link('/hizmetler', 'Tüm hizmet aileleri')}${p(family.hub.intro.tr)}<section><h2>Çalışmayı nasıl kurguluyoruz?</h2>${list(family.hub.steps,true)}</section><section><h2>Birlikte planladığımız çıktılar</h2>${list(family.hub.outputs)}</section><section><h2>İlgili alt hizmetleri inceleyin</h2><ul>${family.links.map(item => `<li>${link(item.url,item.label.tr)}</li>`).join('')}</ul></section><section><h2>Kapsam ve çalışma sınırları</h2>${p(family.hub.boundary.tr)}</section>${ecosystemLinks}${analysis}`,
  })),
];
