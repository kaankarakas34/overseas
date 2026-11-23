# NAV-05 — Uzmanlık Alanları merkezi: uygulama ve kabul kaydı

Tarih: 23 Kasım 2026. Linear: [E4N-256](https://linear.app/e4n/issue/E4N-256). Proje: Overseas SEO / S11.
Agent Hub: `0a2ca282-e79d-4491-9b52-853fd3a07098` (ana ajan uygulaması; ayrı çalışan/model çağrısı yok).

Durum: Kod ve yerel kabul tamamlandı; insan editör incelemesi, üretim yayını ve canlı doğrulama bekleniyor. Linear In Progress kalır. Bu kayıt, 22 Ekim tarihli eski rapordaki koşulsuz Done ifadesinin yerini alır.

## Problem ve değişiklik

`3ccd9fb` ile oluşturulmuş `/sektorler` merkezi repoda vardı; Linear kaydı Backlog kalmıştı. Canlı sayfanın 23 Kasım incelemesinde de kaynak gösterilmeyen karar süreleri ve bakım/performans vaatleri görülüyordu. Önceki kontrol betiği header dosyalarını yalnız okuyor, değişmediklerini doğrulamadan PASS yazıyordu.

Bu görevde mevcut merkez korundu. Branş ve kurum türleri açıkça ayrıldı; içerik klinik/hastane karar vericisinin reklam, SEO, dil, içerik ve CRM planına odaklandı. Yerel kayıtların varlığı gerçek müşteri referansı, vaka sonucu veya belgelenmiş branş yetkinliği olarak sunulmaz.

- Ortalama karar süreleri, öncelikli pazar sıralamaları, üç kat dönüşüm, bir dakikada geri arama, bakım garantisi, AI'da birincil öneri ve yüzde yüz mevzuat uyumu ifadeleri merkezden kaldırıldı.
- Eski benchmark yerine branşa göre planlama sorusu ve incelenecek veri tablosu getirildi. Sonuç veya talep büyüklüğü iddiası içermez.
- Hukuki kesin hükümler yerine kurum rolü, iddia/kaynak, hedef ülke/platform ve iletişim verisi için yayın öncesi değerlendirme süreci anlatıldı. Mevzuat maddelerinin doğrulandığı veya hukuk onayının alındığı iddia edilmedi.
- `specialtiesHub.json` React ve JavaScript olmadan sunulan TR içeriğinin ortak kaynağı oldu. Beş FAQ cevabı görünür içerik ile FAQPage verisinde eşleşir; zengin sonuç garantisi yoktur.
- Altı hizmet ailesi mevcut `serviceFamilies.json` verisinden okunur. Header menüsünün kullandığı listelere kayıt eklenmedi.
- Filtreler `aria-pressed`, sonuç sayacı ve klavye kontrolü; FAQ `aria-expanded`/`aria-controls` ile çalışır. Filtrelenen kartlar DOM'da kalır, gizlenen linkler odak sırasından çıkar.
- Üst ve alt CTA mevcut görüşme modalını açar. `growth_analysis_open` olayı yalnız `source`, `page_path`, `language` taşır; analitik yoksa veya hata verirse modal açılır. Statik içerikte `/teklif-al` bağlantısı bulunur.

## URL ve sayfa rolü

Karar: **GÜNCELLE / URL'Yİ KORU**. `/sektorler` B2B branş/kurum rehber merkezidir. Ana niyet: kurum türüne ve klinik branşına göre sağlık turizmi pazarlama planlaması. Hasta tedavi rehberi veya sağlık hizmeti sayfası değildir.

15 mevcut hedef, beş grupta eşlendi:

| Grup | Mevcut hedefler |
| --- | --- |
| Cerrahi (5) | `/sac-ekimi-reklam-ajansi`, `/plastik-cerrahi-reklam-ajansi`, `/obezite-cerrahisi-reklam-ajansi`, `/ortopedi-reklam-ajansi`, `/goz-klinigi-reklam-ajansi` |
| Dental (1) | `/dis-klinigi-reklam-ajansi` |
| Estetik/dermatoloji (3) | `/estetik-klinigi-reklam-ajansi`, `/medikal-estetik-reklam-ajansi`, `/dermatoloji-reklam-ajansi` |
| Diğer uzmanlıklar (2) | `/tup-bebek-reklam-ajansi`, `/fizik-tedavi-reklam-ajansi` |
| Kurumlar/hekimler (4) | `/hastane-reklam-ajansi`, `/doktor-reklam-ajansi`, `/klinik-reklam-ajansi`, `/saglik-turizmi-araci-kurulus-pazarlama` |

Altı mevcut hizmet merkezine bağlantı vardır: Performans Pazarlama, Uluslararası SEO, GEO, Web, CRM/Otomasyon, İçerik/Marka. EN bağlantıları mevcut `?lang=en` seçimini korur. Mevcut branş sayfasından merkeze dönüş yolu tarayıcıda test edildi.

Title, TR meta description, self canonical, hreflang/robots, route, sitemap ve yönlendirme kararları korundu. Yeni H1: “Klinik branşlarına ve kurum türüne göre sağlık turizmi pazarlaması”. Ayrıntı başlıkları: branş/kurum rehberleri, veri tablosu, yayın öncesi kontrol, hizmetler, FAQ ve analiz CTA'sı.

## Gerçekte yürütülen doğrulama

| Kontrol | Sonuç ve sınır |
| --- | --- |
| `npm run build` | PASS: TypeScript + Vite + 225 statik HTML. Mevcut büyük chunk uyarısı sürüyor. |
| `node scripts/verifySpecialtiesHub.mjs output/playwright/nav-05-baseline.json` | PASS: mevcut MASTER_BRANCHES ile 15/15 eşleme; 5 kategori; 6 aile ve teklif hedefi; tek H1/canonical, robots, FAQ/schema, breadcrumb, kaynak iddia regresyonu. |
| Önce/sonra 225 sayfa | PASS: title/description/robots/canonical/alternate etiketleri ve statik header birebir aynı. H1 ve gövde değişimi yalnız merkez kapsamında. |
| Korunan dosyalar | PASS: Navbar, headerNavigation, MASTER_SERVICES içeren TR/EN verisi, App route'ları ve sitemap için `git diff HEAD` boş. |
| `node scripts/verifyHeaderStatic.mjs` | PASS: mevcut dört ana menü, altı aile, 16 gerçek statik menü hedefi ve header eşliği. |
| `node scripts/verifyServicesDirectory.mjs` | PASS: mevcut üç merkezde metadata/canonical/sitemap/CTA ve altı aile regresyonu. |
| Tarayıcı kabulü | PASS: Chromium, TR/EN × 1440/390 px; beş filtre/reset, görünür kart sayısı, gizli linkler, Enter/Space FAQ, FAQ şeması, iki CTA konumu, kişisel verisiz olay ve analitik arızası. |
| Gezinme/HTTP | PASS: 21 üretilen hedef HTML için HTTP 200 + hedef canonical + soft404 kontrolü; EN diş rehberi ve merkeze dönüş, CRM merkezine gezinme. |
| JavaScript kapalı | PASS: üretilen `/sektorler/index.html` içinde 15 branş linki ve gerçek teklif CTA'sı. |
| Görsel kontrol | TR masaüstü ve EN mobil tam sayfa çıktıları incelendi; sayfa genelinde yatay taşma yok, tablo kendi alanında kayar. Bu fiziksel cihaz veya ekran okuyucu testi değildir. |
| `git diff --check` | PASS. Projede bağımsız lint komutu yok; lint N/A. |
| Impeccable detector | Yeni SectorsPage için bulgu yok. Prerender dosyasının değişmeyen diğer içeriklerinde iki mevcut `border-left: 4px` uyarısı var; NAV-05 dışı. |

Yeniden çalıştırma:

```powershell
npm run build
node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 5197 --strictPort
node scripts/verifySpecialtiesHub.mjs
node scripts/verifyHeaderStatic.mjs
node scripts/verifyServicesDirectory.mjs
node scripts/verifySpecialtiesHubBrowser.mjs '<kurulu playwright-cli.js yolu>' http://127.0.0.1:5197
```

Tarayıcı kanıtları: `output/playwright/nav-05-browser.log`, `nav-05-{tr,en}-{1440,390}.png`. İlk örnek: `nav-05-before.png`. Bunlar yerel/ignore edilen çıktılardır; review görselleri `docs/seo/nav-05-desktop.png` ve `docs/seo/nav-05-mobile.png` olarak sürümlenir.

Vite preview Vercel `cleanUrls` davranışını birebir taklit etmez. `/sektorler` gibi bazı uzantısız istekler preview'da ana sayfa HTML'ine düşer; React sonradan doğru sayfayı açar. Bu nedenle JavaScript kapalı ve HTTP kanıtları doğrudan üretilen `.../index.html` dosyalarında alındı. Bu yerel kontrol, production clean URL veya Google indeks doğrulaması sayılmaz. `vercel.json` değiştirilmedi.

## Açık kabul kapıları ve sonraki adım

- [x] Mevcut 15 branş/kurum hedefi eşlendi.
- [x] Merkez sayfa B2B odakla güçlendirildi; hizmetler ayrı bölümde kaldı.
- [x] Branşlar ve hizmet merkezleri için taranabilir bağlantılar doğrulandı.
- [x] Kaynaksız iddia ve kesin uyum metinleri merkez kapsamında temizlendi.
- [ ] İnsan editörün yeni TR/EN metni incelemesi.
- [ ] Kullanıcının üretim yayın onayı; merge/deploy sonrası gerçek `/sektorler` URL'si ve bağlı yolların canlı kontrolü.
- [ ] Canlı GA4 olay teslimi ve GSC kontrolü: erişim/ölçüm yok, VERIFY MANUALLY. NAV-01 ve NAV-11 kapsamları açık kalır.

Gerçek lead/e-posta gönderilmedi; hukuk onayı, sıralama, trafik veya dönüşüm kazanımı beyan edilmedi. Diğer branş detay sayfalarının içerik/iddia denetimi bu merkez görevinin dışında kaldı.

Kod `codex/nav05-brans-merkezi-kabul` dalında review için teslim edilir; üretim dalına merge/yayın yapılmaz. Sıradaki NAV-06 bu turda başlatılmadı.

Kaynaklar: mevcut repo ve geçmiş `3ccd9fb` değişikliği; kullanıcının 23 Kasım master briefi; [canlı merkez başlangıç incelemesi](https://www.overseas.marketing/sektorler); [Google taranabilir bağlantı kılavuzu](https://developers.google.com/search/docs/crawling-indexing/links-crawlable). Canlı sayfanın başlangıç gözlemi, yeni kodun canlıda olduğu anlamına gelmez.
