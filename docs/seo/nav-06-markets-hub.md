# NAV-06 — Hedef Ülkeler merkezi: uygulama ve kabul kaydı

24 Kasım 2026 · [E4N-257 / Overseas SEO / S11](https://linear.app/e4n/issue/E4N-257).
Agent Hub: `acf413cd-e98e-427b-acd3-4d99446e8411`; ana ajan uygulaması, ayrı model/çalışan çağrısı yok.

Bu kayıt 22 Ekim raporundaki koşulsuz **Done** ifadesinin yerini alır. Linear başlangıçta Backlog idi; mevcut sayfa yeniden incelendi. Kod ve yerel teknik kabul tamamlandı. Kullanıcı aynı konuşmada bekleyen değişiklikleri yayınlama talimatı verdi; üretim commit/dağıtım ve canlı kabul kanıtı bu rapora bağlı Linear kaydına eklenecek. Bağımsız insan editör incelemesi ve GA4/GSC sonucu beklediği için görev In Progress kalır.

## Önceki sorun ve değişiklik

Canlı `/ulkeler` ve React/statik kaynaklar; tarihsiz NHS 7.6M+, paket fiyatları, 2–8 hafta karar süreleri, yüzde 70 dönüşüm kaybı, ülkeye göre hasta psikolojisi genellemeleri, yüksek ROI ve yüzde yüz mevzuat uyumu iddiaları içeriyordu. Bunlara kaynak/dönem/ölçüm/izin kanıtı bulunmadı. Eski doğrulayıcı header dosyalarını okuyup karşılaştırma yapmadan “intact” yazıyordu.

Merkezdeki bu ifadeler kaldırıldı. Hedef kitle klinik sahipleri, hastane yöneticileri ve uluslararası hasta ekipleri olarak açıklandı; pazarlama/teknoloji ajansı ile sağlık hizmeti/aracılık rolleri ayrıldı. Ülke kartları, planlama tablosu, ön yayın değerlendirmesi, branş bağlantıları, ayrı hizmet bölümü ve beş FAQ mevcut açık renk/mavi sayfa diliyle düzenlendi.

- İngiltere: İngilizce sorgu–sayfa–başvuru eşliği; Birleşik Krallık içinde ülke/şehir ölçümü ve teklif sunumu incelemesi.
- Almanya: Almanca içerik ile ekip kapasitesi; Avusturya/İsviçre için ayrı değerlendirme.
- Fransa: Fransızca reklam, sayfa, form ve danışman yanıtının aynı kapsamı anlatması.
- Hollanda: Felemenkçe/İngilizce deneyimlerin ölçümü; Belçika için ayrı ülke/dil değerlendirmesi.

Bunlar talep, fiyat, tedavi tercihi veya sonuç benchmark'ı değildir. Diğer ülkeler için yalnız araştırma çerçevesi vardır; yeni ülke URL'si/şablon sayfa üretilmedi. Ülke detay sayfalarının mevcut metinleri bu merkez görevi kapsamında yeniden yazılmadı; özellikle İngiltere ayrıntılı içerik kanıtı MONEY-04 kapsamındadır.

## URL kararı ve kapsam

**GÜNCELLE / KORU:** `/ulkeler` ülke planlama merkezi; mevcut dört pazar URL'si korunur:

| Mevcut URL | Merkezdeki sınıf |
| --- | --- |
| `/ingiltere-saglik-turizmi-reklamlari` | İngiltere / Birleşik Krallık rehberi |
| `/almanya-saglik-turizmi-reklamlari` | Almanya rehberi; DACH otomatik aynı pazar sayılmaz |
| `/fransa-saglik-turizmi-reklamlari` | Fransa rehberi |
| `/hollanda-saglik-turizmi-reklamlari` | Hollanda rehberi; Benelüks otomatik aynı ülke sayılmaz |

TR/EN ülke kayıtları mevcut MASTER_MARKETS listeleriyle birebir eşlenir. İrlanda, İtalya, İspanya, Belçika, Avusturya, İsviçre ve Körfez için ayrı rehber eklenmedi.

Kartlarda iki branş planlama örneği vardır: toplam yedi benzersiz mevcut branş URL'si. Bunlar ülkede talep/başarı kanıtı olarak sunulmaz. Ayrıca `/sektorler`, altı mevcut hizmet ailesi ve `/teklif-al` taranabilir bağlantılarla erişilir: toplam 19 benzersiz hedef, merkezle birlikte 20 HTTP kontrolü. Pazar kartları hizmet kataloğundan ayrıdır. Merkezden tüm ülke rehberlerine ve breadcrumb üzerinden geri dönüş yolu bulunur. EN merkez çıkış bağlantıları `?lang=en` seçimini korur.

TR/EN title ve description, canonical/hreflang/robots davranışı, route, sitemap ve yönlendirmeler korundu. Yeni TR H1: “Kliniğiniz için hedef ülkeye göre sağlık turizmi pazarlaması”. Header, Navbar, menü veri listeleri, MASTER_SERVICES/MASTER_MARKETS, App ve Vercel yapılandırmasına dokunulmadı.

## Teknik uygulama

`src/data/marketsHub.json`, React ve TR JavaScript kapalı HTML'nin ortak kaynağıdır. `scripts/marketsHubHtml.mjs` HTML karakterlerini ve JSON-LD `<` karakterini kaçırır. `scripts/prerender.js` içinde yalnız `/ulkeler` içerik tanımı ve ilgili import değişti. Mevcut breadcrumb üreticisi korundu. FAQ görünür cevapları ile FAQPage ortak veriden gelir; zengin sonuç garantisi yoktur.

FAQ butonları Enter/Space ile açılır, `aria-expanded`/`aria-controls`/etiketli bölge kullanır. Karşılaştırma tablosu küçük ekranda kendi alanında kayar. İki CTA mevcut danışma modalını açar; `growth_analysis_open` yalnız `source: markets_hub`, `page_path: /ulkeler`, `language` taşır. Analitik yokluğu/hatası modalı engellemez. Statik fallback gerçek `/teklif-al` bağlantısıdır.

## Yürütülen kontroller

| Kontrol | Gerçek sonuç ve sınır |
| --- | --- |
| `npm run build` | PASS: TypeScript, Vite, 225 statik route çıktısı; mevcut 500 kB üstü ana chunk uyarısı sürer. |
| `verifyMarketsHub.mjs` | PASS: TR/EN mevcut 4 kayıt, 19 gerçek statik hedef, tek H1/canonical, robots, metin eşliği, 5 FAQ/schema ve ülke/merkez breadcrumb'ları. Eski kaynaksız iddialar için regresyon kontrolü. |
| Önce/sonra envanter | PASS: 224 `index.html` dosyasında title/description/robots/canonical/alternates ve statik header birebir aynı. 404 çıktısı bu index.html sayımına dahil değildir. |
| Korunan kaynaklar | PASS: başlangıç `06cdb0919cc4253c30e81f93eca26946671b1eea` tabanına göre Navbar/headerNavigation/TR-EN master veri/App/sitemap/vercel diff'i boş. |
| NAV-05 / NAV-03 / header | PASS: mevcut uzmanlık merkezi, hizmet merkezleri ve dört ana menü/altı aile/16 statik menü hedefi regresyonu. |
| Chromium | TR/EN × 1440/390; 4 ülke kartı, 7 benzersiz branş hedefi, 6 hizmet, 4 tablo satırı, klavye FAQ/schema, 2 CTA, kişisel verisiz olay ve analitik hata kontrolü. Kanıt: `output/playwright/nav-06-browser-local.log`. |
| Gezinme ve HTTP | 20 üretilen HTML'de HTTP 200/canonical/soft404; dört EN ülke rehberine gidiş/breadcrumb dönüşü ve CRM merkezine gezinme. |
| JavaScript kapalı | Üretilen `/ulkeler/index.html` içinde H1, 19 bağlantı ve teklif CTA'sı. |
| Görsel inceleme | TR masaüstü ve EN mobil tam sayfa çıktıları incelendi; sayfa yatay taşması yok, tablo kendi alanında kayar. Fiziksel cihaz/ekran okuyucu denemesi değildir. |
| Kod temizliği | `git diff --check`; bağımsız lint komutu yok, N/A. |

Vite preview Vercel clean URL davranışını birebir taklit etmez. Yerel HTTP/no-JS testleri doğrudan üretilen `/index.html` üzerinden alınır; üretim testi gerçek `/ulkeler` URL'sini kullanır. Yerel kabul GSC indeks kontrolü sayılmaz. Tarayıcı testinde gerçek form gönderimi engellenir ve uzak analitik bloklanır; buna bağlı kaynak hataları beklenir. Mevcut kullanılmayan global hero preload uyarısı merkez kapsamı dışında tutuldu. Yakalanmamış uygulama hatası kabul edilmez.

Yeniden çalıştırma:

```powershell
npm run build
node scripts/verifyMarketsHub.mjs output/playwright/nav-06-baseline.json 06cdb0919cc4253c30e81f93eca26946671b1eea
node scripts/verifySpecialtiesHub.mjs
node scripts/verifyHeaderStatic.mjs
node scripts/verifyServicesDirectory.mjs
node node_modules/vite/bin/vite.js preview --host 127.0.0.1 --port 5201 --strictPort
node scripts/verifyMarketsHubBrowser.mjs '<kurulu playwright-cli.js yolu>' http://127.0.0.1:5201
```

`nav-06-baseline.json` ve tarayıcı logları yerel/ignore edilen kanıtlardır. Review görselleri: `docs/seo/nav-06-desktop.png` ve `nav-06-mobile.png`. Üretim canlı kontrolü aynı tarayıcı komutuna `https://www.overseas.marketing` verilerek çalıştırılır ve ayrı `nav-06-browser-live.log` üretir. Güncel dağıtım/commit/PR bilgisi Linear'dadır.

## Açık kabul kapıları

- Kullanıcı yayın talimatı mevcut; commit/PR, üretim READY ve canlı HTTP/tarayıcı doğrulaması Linear'a kaydedilecek.
- Bağımsız insan editörün TR/EN metni incelemesi: VERIFY MANUALLY.
- Canlı GA4 teslimi, CRM lead sonucu ve GSC render/indeks: erişim/ölçüm yok, VERIFY MANUALLY; NAV-01/NAV-11 açık kalır.
- Yeni hukuk onayı veya mevzuat hükmü doğrulaması iddia edilmez; kesin uyum vaatleri merkezden kaldırılmıştır.

NAV-07 bu turda başlatılmaz; sıradaki göreve geçmek için kullanıcı devam talimatı gerekir.

Kaynaklar: mevcut repo, kullanıcının 23 Kasım master briefi, [24 Kasım canlı merkez başlangıç incelemesi](https://www.overseas.marketing/ulkeler), [Google taranabilir bağlantı kılavuzu](https://developers.google.com/search/docs/crawling-indexing/links-crawlable).
