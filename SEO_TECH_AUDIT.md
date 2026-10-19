# OVERSEAS.MARKETING — TEKNİK SEO, İNDEKSLEME VE PERFORMANS DENETİM RAPORU
**Tarih:** 19 Ekim 2026  
**Analiz Edilen Ortam:** Vite + React + TypeScript + Prerender Retrieval Mimarisi  
**Host / Domain:** `https://www.overseas.marketing`

---

## 1. TARAMA VE İNDEKSLEME DENETİMİ

| Denetim Unsuru | Mevcut Durum | Tespit & Analiz | Eylem / Durum |
|---|---|---|---|
| **Host & Protokol** | `https://www.overseas.marketing` | www ve HTTPS tekilleştirilmiş, canonical etiketleri `https://www.overseas.marketing` prefiksini taşımaktadır. | ✅ KORUNDU |
| **Robots.txt** | `/public/robots.txt` | `User-agent: *`, `Allow: /`, `User-agent: OAI-SearchBot`, `Allow: /`, `Sitemap: https://www.overseas.marketing/sitemap.xml` tanımlı. | ✅ DOĞRULANDI |
| **Sitemap.xml** | `/public/sitemap.xml` | 127 adet URL listelenmektedir. Tüm URL'ler 200 dönen canonical formatındadır. | ✅ DOĞRULANDI (Güncellenecek) |
| **Noindex Listesi** | `prerender.js` içinde tanımlı | 8 adet akademik/öğrenci/maaş sayfası (`/taban-puanlari`, `/dgs`, `/cumhuriyet-universitesi-...`, `/slayt`, `/tezleri`, `/is-ilanlari`, `/maaslari`) `noindex, follow` ile işaretlenmiştir. Bu durum sitenin B2B arama kalitesini korumaktadır. | ✅ MÜKEMMEL |
| **HTML Retrieval (Prerender)** | `scripts/prerender.js` | Arama motoru ve yapay zekâ botları için JS çalıştırmadan taranabilir statik HTML gövdesi `<div id="root">` içine enjekte edilmektedir. | ✅ AKTİF |
| **404 Hata Yönetimi** | `dist/404.html` | Özel statik 404 sayfası `noindex, follow` ve ana sayfaya dönüş linkiyle mevcuttur. | ✅ TAMAM |

---

## 2. ON-PAGE & SEMANTİK DENETİM

1. **Title & Meta Description:** Sitedeki tüm ana sayfalar, hizmetler ve blog yazıları tekil `<title>` ve `<meta name="description">` etiketlerine sahiptir. Karakter uzunlukları 50-65 karakter (title) ve 120-160 karakter (description) bandındadır.
2. **H1 Başlık Hiyerarşisi:** Her sayfada yalnızca TEK BİR `<h1>` etiketi bulunmakta, ardından gelen alt başlıklar katı `<h2>` ve `<h3>` semantik sırasını izlemektedir.
3. **OpenGraph & Twitter Cards:** `og:title`, `og:description`, `og:url`, `og:image`, `twitter:card`, `twitter:title`, `twitter:description` meta verileri mevcuttur.
4. **Görsel Optimizasyonu:** Kahraman (Hero) görseli ana sayfada `preload` ve `fetchpriority="high"` ile yüklenmekte; alt sayfalarda bant genişliği tasarrufu için bu preload kodu kaldırılmaktadır.

---

## 3. YAPILANDIRILMIŞ VERİ (JSON-LD SCHEMA) DENETİMİ

- **Organization / ProfessionalService:** `src/components/JsonLdSchema.tsx` içinde Overseas Marketing'in tüzel kişiliği, resmi sitesi, logosu ve hizmet alanları semantik olarak tanımlanmıştır. Sahte yerel adres veya sahte harita bilgisi bulunmamaktadır.
- **Article / BlogPosting Schema:** `src/components/SeoArticlePage.tsx` içinde her blog yazısı için `@type: 'Article'`, `headline`, `author`, `datePublished`, `dateModified`, `publisher` alanları eksiksizdir.
- **BreadcrumbList Schema:** Kullanıcının bulunduğu hiyerarşik konumu gösteren JSON-LD haritası mevcuttur.
- **FAQPage Schema:** SSS bölümleri için FAQPage şeması mevcuttur. *Teknik Not:* Google'ın Ağustos 2023 politikasından bu yana ticari ajans siteleri için FAQ rich snippet garantisi bulunmamaktadır; bu nedenle şema semantik anlama için tutulmakta, ancak zengin sonuç vaadi verilmemektedir.

---

## 4. CORE WEB VITALS & HIZ KRİTERLERİ

- **Dynamic Code-Splitting (React.lazy):** `src/App.tsx` içinde tüm alt sayfalar (`ServiceDetailPage`, `DoctorBrandingPage`, `BranchDetailPage`, `CityDetailPage`, `SeoArticlePage` vb.) `React.lazy` ve `Suspense` ile dinamik olarak ayrılmıştır. İlk bundle boyutu minimumda tutulmaktadır.
- **Font Display:** Google Fonts (Inter Tight) `display=swap` parametresiyle yüklenmekte, font render-blocking oluşturmamaktadır.
- **CLS (Cumulative Layout Shift):** Görsel alanlarında `min-h` tanımları ve rezerv alanlar sayesinde sayfa kayması önlenmiştir.
- **Hedef Eşikler:** 75. persentilde LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 hedefleriyle uyumlu mimari.

---

## 5. ULUSLARARASI SEO & HREFLANG YÖNETİMİ

- `src/i18n/translations.ts` ve `src/i18n/masterPlanData.en.ts` dosyalarında Türkçe ve İngilizce varyantlar mevcuttur.
- Karşılığı olmayan diller için yapay veya kırık hreflang etiketleri kesinlikle eklenmemiştir.
- Sitenin birincil dili Türkçe olup, uluslararası hizmet sayfalarında dil geçişi bağlamsal olarak yönetilmektedir.

---

## 6. ANALİTİK, ÖLÇÜM VE KVKK SAĞLIK VERİSİ GÜVENLİĞİ

- **KVKK & Hassas Veri:** GA4 olaylarında veya URL parametrelerinde hiçbir hasta adı, tıbbi teşhis, reçete veya özel nitelikli kişisel sağlık verisi (PII) taşınmamaktadır. Formlar doğrudan güvenli backend API'ye iletilmektedir.
- **Olay Takibi (Events):** `growth_analysis_open`, `header_navigation_select`, `consultation_modal_submit` gibi dönüşüm hunisi metrikleri ölçülmektedir.
- **GSC İzleme:** 53 sorgunun gösterim, tıklama ve ortalama pozisyon takibi için Search Console performans filtreleri belirlenmiştir.

---

## 7. HEADER & MENÜ DEĞİŞİKLİK DENETİMİ (DIFF = 0)

- `src/components/Navbar.tsx` ve `src/data/headerNavigation.json` dosyaları kesinlikle değiştirilmemiştir (`diff = 0`).
- Masaüstü, mobil hamburger menü ve mega menü yapısı tamamen orijinal halinde korunmuştur.
