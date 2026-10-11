# NAV-03 — Hizmetler merkez sayfası

11 Ekim 2026 · E4N-254 · Overseas SEO / S11

## Teslim

`/hizmetler`, altı hizmet ailesini ve hangi sorunda hangi aileden başlanacağını açıklar. Taranabilir merkez bağlantıları, mevcut Büyüme Analizi formu ve footer erişimi vardır.

| Aile | Merkez |
| --- | --- |
| Performans Pazarlama | /hizmetler/performans-pazarlama |
| Uluslararası SEO | /hizmetler/uluslararasi-seo-hizmeti |
| GEO & AI Görünürlüğü | /hizmetler/geo-generative-engine-optimization |
| Web & Landing Page | /hizmetler/web-sitesi-landing-page |
| CRM & Otomasyon | /hizmetler/crm-otomasyon — yeni |
| İçerik & Marka | /hizmetler/icerik-marka-yonetimi — yeni |

İki yeni merkez, NAV-02 mimarisinin mevcut alt hizmetlerini bir araya getirir; her birinin farklı süreç, çıktı ve kapsam açıklamaları vardır. MASTER_SERVICES listesine eklenmediler. Yeni hizmet veya merkez header'a eklenmedi. NAV-04 başlatılmadı.

## SEO ve render

- Üç sayfada özgün title, tek H1, meta description, self canonical, dil alternatifi ve index/follow vardır.
- TR içerik, aile/alt hizmet bağlantıları ve CTA, JavaScript olmadan statik HTML'de bulunur. JavaScript etkin sayfa mevcut danışmanlık modalını açar; statik CTA mevcut `/teklif-al` sayfasına gider.
- Üç URL sitemap'e tekil olarak eklendi. Footer hem React hem statik çıktıda merkezi keşfedilebilir kılar.
- React 19 başlangıç HTML'inin SEO etiketleri ile çalışma zamanı etiketlerini birlikte bırakıyordu. `src/main.tsx` statik meta/link kopyalarını React başlamadan kaldırır; teslim edilen HTML'deki etiketler JavaScript kullanmayan istemciler için korunur. Yedi mevcut/yeni sayfada tek canonical ve description doğrulandı.
- Build 203 sayfa üretir. Mevcut bazı alt hizmetler (Google Ads, Meta ve sağlık turizmi landing page canonical yolları) henüz ayrı statik HTML üretmez; React route'ları mevcuttur. Bunların genel render/indeks kapsamı NAV-11'de ele alınmalı; bu görevde eski URL veya canonical kararları değiştirilmedi.

## Analitik

Mevcut GA tag üzerinden üç olay: `service_directory_view`, `service_family_select`, `growth_analysis_open`. Parametreler yalnız `service_family`, `page_path` ve `language`. Form alanları, URL sorgusu ve kişisel veri gönderilmez. StrictMode yinelenen ilk görüntüleme olayını önlemek için görünüm anahtarı tutulur. Analitik yokluğu/hatası gezinmeyi veya formu engellemez.

Yerel doğrulamada Google/Meta ağ istekleri engellendi; GA olay kuyruğu ve form açılması kontrol edildi. Canlı GA panelindeki teslim/rapor, dönüşüm yapılandırması ve GSC indeks/performans doğrulaması yapılmadı. NAV-01 GSC kontrolü açık kalır; bu teslim arama trafiği veya indeks sonucu iddiası değildir.

## Kanıt ve tekrar

1. `npm run build`: TypeScript, Vite ve pre-render başarılı. Mevcut büyük chunk uyarısı sürüyor.
2. `node scripts/verifyServicesDirectory.mjs`: üç statik sayfanın meta/H1/canonical/indexability/sitemap/CTA, altı merkez hedefinin statik varlığı ve ana sayfa footer erişimi başarılı. Bu kontrol taze build sonrasında çalıştırılır; pre-render betiği tek başına mevcut pre-render çıktısı üzerinde tekrar çalıştırılmamalı.
3. Yerel Vite sunucusu ve kurulu Playwright CLI ile `node scripts/verifyServicesDirectoryBrowser.mjs <playwright-cli.js yolu> <yerel URL>`: altı kart, CRM ve içerik merkezi, gerçek modal, analitik olaylar, EN self canonical, 390 px mobil taşma/form kontrolü başarılı.
4. Ek tarayıcı kontrolü: ana sayfa, dört mevcut merkez ve iki yeni merkezde tek self canonical ve description; `gtag` kaldırıldığında CTA çalışır.
5. `git diff --check`: başarılı. Navbar, TR/EN MASTER_SERVICES ve statik `navHeaderHtml` değişmedi.

Görseller: [Masaüstü](nav-03-desktop.png), [Mobil](nav-03-mobile.png).

Sonraki görev NAV-04 (E4N-255). Kullanıcının yeni “devam” talimatı olmadan başlatılmayacak. Header'a yeni hizmet eklemek için ayrıca açık onay gerekir.
