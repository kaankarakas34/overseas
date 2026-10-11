# NAV-04 — Header uygulaması ve kabul

11 Ekim 2026 · Overseas SEO · E4N-255

## Onay ve değişiklik

Kullanıcı öneri sonrasında “şuanki seo durumu değiştirmeyecek ve hiç bir linki 404 de bırakmayacak şekilde yap” talimatını verdi. Bu, dokümante edilen menü önerisinin mevcut URL ve SEO etiketlerini koruyarak uygulanmasına açık onay olarak alındı. Önceki onay kuralı gelecekteki yeni header eklemeleri için geçerlidir.

Ana navigasyon: Hizmetler, Uzmanlık Alanları, Hedef Ülkeler, Rehber, Referanslar, Hakkımızda. Hizmetler alt menüsü Tüm Hizmetler ve altı aileyi içerir. Mevcut 15 branş ve dört pazar kendi bölümlerinde yer alır; yeni hizmet/branş/pazar URL'si açılmadı. Rehber altında mevcut sözlük ve metodoloji, Referanslar altında başarı hikayeleri, Hakkımızda altında ekip, iletişim ve teklif yolları korunur.

React ve JavaScript gerektirmeyen statik header `src/data/headerNavigation.json` üzerinden aynı link hedeflerini kullanır. Hizmetlerin alt sayfaları mevcut merkez ve hizmetler dizini yoluyla erişilebilir. Desktop iki sütunlu hizmet menüsü ve mobil açılır bölümler aynı hiyerarşiyi taşır. 1280 px altı ekranlarda mobil menü kullanılır.

CTA `Büyüme Analizi Al` / `Get a Growth Analysis` mevcut danışmanlık formunu açar; statik CTA mevcut `/teklif-al` adresine gider. `header_navigation_select` ve `growth_analysis_open` kişisel veri içermeyen bölüm/yol/dil bilgileriyle çalışır. Analitik yokluğu gezinmeyi veya formu engellemez.

Mevcut danışmanlık modalında HTTP hata yanıtının başarı sayılması düzeltildi. Başarısız POST hata mesajı gösterir, veriler yeniden denemek için kalır ve generate_lead üretmez; başarılı yanıt sonrasında başarı ve lead olayı gösterilir. Testte endpoint yanıtları taklit edildi; gerçek lead/e-posta gönderilmedi.

## SEO ve URL koruması

- App.tsx route'ları, mevcut hizmet/branş/pazar verisi, sitemap, robots, canonical ve yönlendirme kuralları değiştirilmedi.
- Değişiklik öncesi 203 statik HTML dosyasından title, description, robots, canonical ve hreflang/alternate etiketleri alındı. Taze derleme sonrasında hepsi aynı kaldı; mevcut 203 sayfa korunur.
- 37 farklı yeni header hedefinin tümü gerçek statik HTML dosyasına sahiptir; statik header linkleri React veri kaynağıyla eşleşir.
- Yeni header hedefleri, önceki 14 hizmet adresi, doktor marka yönetimi ve ana sayfa dahil 49 URL gerçek tarayıcıda HTTP 200 ile açıldı. React 404 ekranı ve eksik canonical bulunmadı. Yalnız HTTP 200'e bakılarak soft 404 kabul edilmedi.
- Önceki alt hizmet URL'leri korunur. NAV-03'te belgelenen bazı alt hizmetlerin SPA route'u üzerinden çalışması bu teslimde yeni pre-render sayfalarıyla değiştirilmedi; genel render kapsamı NAV-11'e aittir.

Navigasyon değişikliği iç bağlantı dağılımını değiştirir. Bu kontroller arama sıralaması/trafik garantisi değildir. NAV-01 GSC doğrulaması açık; canlı arama performansı veya canlı GA raporu doğrulanmadı. Tüm sitenin bütün iç/dış bağlantılarının denetimi iddiası yoktur; kontrol eski/yeni header hedeflerini kapsar.

## Doğrulama

1. `npm run build`: TypeScript, Vite ve 203 sayfa pre-render PASS. Önceden mevcut büyük chunk uyarısı sürüyor.
2. `node scripts/verifyHeaderStatic.mjs output/playwright/nav-04-seo-before.json`: 203 dosyada etiket eşliği, altı aile, 37 statik hedef ve statik header link eşliği PASS. Baseline olmadan da hedef/eşlik kontrolü çalışır.
3. `node scripts/verifyHeaderBrowser.mjs <playwright-cli.js yolu> <preview URL>`: altı başlık, yedi hizmet bağlantısı; Enter/Space/Escape, odak dönüşü, dışarı tıklama ve route değişiminde kapanma; TR/EN, 390 px ve 1100 px taşma; CTA/analitik kapalı akış; mock 503/200 form akışı ve 49 URL PASS. Tarayıcı kontrolü npm kurulu Playwright CLI üzerinden yürütüldü.
4. NAV-03 statik dizin kontrolü PASS. Eski tarayıcı kontrolünün CTA seçicisi yeni header CTA'sından ayrılarak main kapsamına alındı; mevcut NAV-03 tarayıcı kontrolleri yeniden PASS.
5. React incelemesi: bileşenler render dışında tanımlı, navigation JSON sabit, olay dinleyicileri temizlenir, scroll passive, native details klavye destekli, aria-expanded/controls ve görünür odak vardır. Gerçek bağlantılar ve semantik nav kullanılır; özel ARIA menu klavye modeli eklenmedi.
6. `git diff --check` PASS.

Kanıt: [Masaüstü](nav-04-desktop.png), [Mobil](nav-04-mobile.png); yerel ayrıntı `output/playwright/nav-04-browser.log` ve `nav-04-seo-results.json`.

## Görev sınırı

NAV-05/NAV-06 merkezlerinin içerik güçlendirmesi henüz uygulanmadı. NAV-04 mevcut `/sektorler` ve `/ulkeler` merkezlerini ve gerçek route'ları kullanabildiğinden bu içerik işleri header teslimini artık engellemez; ilişkili bağımsız görevler olarak açık kalır. Sıradaki NAV-05 yalnız kullanıcı yeni devam talimatı verdiğinde başlatılır. Event4Network kapsamına dokunulmadı.
