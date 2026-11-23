# CRO-001 — Kod Tabanı, Sayfa, CTA ve Entegrasyon Envanteri

> **Tarih:** 23 Kasım 2026  
> **Durum:** `verified` (kod tabanı doğrudan incelendi; tarayıcı render doğrulaması `CRO-002` kapsamında yapılır)  
> **Proje:** Overseas Marketing (`https://www.overseas.marketing/`)

---

## 1. Teknik Mimari ve Deploy Yapısı (`verified`)

| Katman | Teknoloji / Dosya | Doğrulama Durumu |
|---|---|---|
| Frontend Framework | React `19.2.8` + TypeScript `~6.0.2` + Vite `8.2.2` | `verified` (`package.json`) |
| Routing | `react-router-dom` `7.18.3` (SPA + `lazy()` code splitting) | `verified` (`src/App.tsx`) |
| Styling & Animasyon | Tailwind CSS `4.3.3` + `framer-motion` `13.1.1` + `lucide-react` | `verified` (`package.json`) |
| SEO / Meta / Schema | `react-helmet-async` (`SEOHead.tsx`, `JsonLdSchema.tsx`) + `scripts/prerender.js` | `verified` |
| Prerender Build | `npm run build` → `tsc && vite build && node scripts/prerender.js` | `verified` (`package.json`) |
| Backend / API | Vercel Serverless Function: `api/contact.ts` (`vercel.json` rewrite: `/api/contact`) | `verified` |
| E-posta Teslimi | `nodemailer` `9.1.0` (SMTP: `mail.kurumsaleposta.com`) | `verified` (`api/contact.ts`) |
| CRM Entegrasyonu | **Mevcut değil** (yalnızca SMTP e-posta gönderimi var) | `verified` (`api/contact.ts`) |
| Çevre Değişkenleri | `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `RECIPIENT_EMAIL` | `verified` (`.env.example`) |
| Güvenlik Notu | `api/contact.ts:49` ve `.env.example:6` içinde hardcoded SMTP şifre fallback'i var | `verified` (P0 bulgu) |

---

## 2. Form ve API Teslim Envanteri (`verified`)

Sitede **`/api/contact`** endpoint'ine istek atan **10 ayrı form bileşeni** tespit edildi. İkinci bir API endpoint'i yoktur.

| # | Route / Konum | Bileşen | Gönderilen Alanlar | Backend Uyumu (`api/contact.ts`) | Hata / Sahte Başarı Durumu | Mevcut Analytics Event |
|---:|---|---|---|---|---|---|
| 1 | `/teklif-al` | `src/components/GetQuotePage.tsx` | `fullName`, `institution`, `phone`, `email`, `specialty`, `targetCountry`, `monthlyBudget`, `notes`, `sourcePage` | **BOZUK** (`institution`, `specialty`, `targetCountry`, `monthlyBudget`, `notes` sunucuda okunmuyor → veri kaybı) | **KRİTİK P0:** `res.ok` kontrolü yok; `catch` bloğunda `setStatus('success')` (sahte başarı) | `gtag('generate_lead')` (sahte başarıda tetiklenmez ama 500 yanıtında tetiklenir!) |
| 2 | `/iletisim` | `src/components/ContactPage.tsx` | `fullName`, `institution`, `email`, `phone`, `serviceNeed`, `targetMarket`, `message`, `sourcePage` | **BOZUK** (`institution`, `serviceNeed`, `targetMarket` sunucuda okunmuyor → veri kaybı) | **KRİTİK P0:** `catch` bloğunda `setStatus('success')` (sahte başarı) | `gtag('generate_lead')` (yalnızca `res.ok` ise) |
| 3 | `/` (`#iletisim`) | `src/components/ContactSection.tsx` | `fullName`, `clinicName`, `email`, `phone`, `selectedServices`, `targetCountries`, `message`, `formType` | Uyumlu | **KRİTİK P0:** `finally` bloğunda her durumda `setSubmitted(true)` + konfeti (sahte başarı) | **Yok** |
| 4 | Global Modal | `src/components/ConsultationModal.tsx` | `fullName`, `clinicName`, `email`, `phone`, `organizationType`, `authorizationStatus`, `branch`, `targetMarket`, `monthlyBudget`, `message`, `formType` | **Kısmi kayıp** (`organizationType`, `authorizationStatus`, `branch`, `targetMarket`, `monthlyBudget` sunucuda okunmuyor) | Doğru (`!response.ok` → `submitError`) | `gtag('generate_lead')` |
| 5 | `/hizmetler/:id` ve pillar route'lar | `src/components/ServiceDetailPage.tsx` | `fullName`, `clinicName`, `email`, `phone`, `message`, `serviceInterest`, `formType` | Uyumlu | **KRİTİK P0:** `finally` bloğunda her durumda `setFormSubmitted(true)` + konfeti (sahte başarı) | **Yok** |
| 6 | Branş sayfaları (`/:branchSlug`) | `src/components/BranchDetailPage.tsx` | `fullName`, `clinicName`, `email`, `phone`, `message`, `formType` | Uyumlu | `data.success` kontrolü var ancak erişilemez `alert()` kullanıyor | **Yok** |
| 7 | Pazar sayfaları (`/:marketSlug`) | `src/components/MarketDetailPage.tsx` | `fullName`, `clinicName`, `email`, `phone`, `message`, `formType` | Uyumlu | `data.success` kontrolü var ancak erişilemez `alert()` kullanıyor | **Yok** |
| 8 | Şehir sayfaları (`/:citySlug`) | `src/components/CityDetailPage.tsx` | `fullName`, `clinicName`, `email`, `phone`, `message`, `formType` | Uyumlu | `data.success` kontrolü var ancak erişilemez `alert()` kullanıyor | **Yok** |
| 9 | `/doktor-reklam-ajansi` | `src/components/DoctorAdvertisingAgencyPage.tsx` | `fullName`, `clinicName`, `email`, `phone`, `selectedServices`, `message`, `formType` | Uyumlu | **KRİTİK P0:** `catch` bloğunda `setSubmitted(true)` (sahte başarı) | **Yok** |
| 10 | `/b2b-linkedin-outreach` | `src/components/B2BOutreachLandingPage.tsx` | `fullName`, `clinicName`, `email`, `phone`, `selectedServices`, `targetCountries`, `message`, `formType` | Uyumlu | **KRİTİK P0:** `finally` bloğunda her durumda `setSubmitted(true)` (sahte başarı) | **Yok** |

### `/teklif-al` Statik Metin Dökümünde Formun Görünmeme Nedeni (`verified`)
- `scripts/prerender.js` (satır 771) `/teklif-al` için statik SEO HTML'i üretirken yalnızca başlık ve açıklayıcı paragraflar (`content`) üretiyor; `<form>` etiketi prerender çıktısında yok.
- Gerçek form React client-side render (`GetQuotePage.tsx`) ile yükleniyor. Tarayıcıda render durumu `CRO-002`'de canlı olarak doğrulanacaktır.

---

## 3. CTA Haritası (`source route → component → target route/action`) (`verified`)

| Kaynak Route | Bileşen | CTA Metni (TR) | Mevcut Hedef / Aksiyon | Notlar |
|---|---|---|---|---|
| Global (tüm sayfalar) | `Navbar.tsx` (Desktop `sm+`) | `Büyüme Analizi Al` | `ConsultationModal` açar | `<640px` mobilde gizli (`hidden sm:inline-flex`). Prerender HTML'de `<a href="/teklif-al">` olarak görünüyor (tutarsız). **Header kuralı: onaysız değiştirilmez.** |
| Global (Mobil Menü) | `Navbar.tsx` | `0536 319 76 97` & `Büyüme Analizi Al` | `tel:05363197697` / `ConsultationModal` | Hamburger menü içinde |
| Global (Hakkımızda alt menü) | `headerNavigation.json` | `Teklif Al` / `İletişim` | `/teklif-al` / `/iletisim` | 2 tık derinlikte |
| Global (Sağ alt sabit) | `WhatsAppFloatingButton.tsx` | WhatsApp ikonu | `https://wa.me/905363197697?text=...` | `fixed bottom-6 right-6 z-50`; `whatsapp_click` eventi atıyor |
| Global (Footer) | `Footer.tsx` | `Teklif Al` / `İletişim` / Modal CTA | `/teklif-al`, `/iletisim`, `ConsultationModal` | — |
| `/` (Hero) | `Hero.tsx` | Primary CTA / Secondary CTA | `ConsultationModal` / Hizmetlere scroll | — |
| `/` (Bölümler) | `ServicesSection`, `DoctorBrandingSection`, `GrowthWorkflow`, `SpecialtiesSection`, `AboutSection`, `BlogSection` | Çeşitli CTA'lar | `ConsultationModal` veya hizmet/branş linki | Bağlam (hizmet/branş) modala taşınmıyor |
| `/hizmetler` | `ServicesDirectoryPage.tsx` | CTA | `ConsultationModal` + detay linkleri | — |
| `/hizmetler/:serviceId` | `ServiceDetailPage.tsx` | Inline form + Modal CTA | `/api/contact` / `ConsultationModal` | Inline formda sahte başarı hatası var |
| `/:branchSlug`, `/:marketSlug`, `/:citySlug` | `BranchDetailPage`, `MarketDetailPage`, `CityDetailPage` | Inline form + Modal CTA | `/api/contact` / `ConsultationModal` | `alert()` ile hata gösterimi, event yok |
| `/basari-hikayeleri`, `/referanslar` | `CaseStudiesPage.tsx`, `ReferencesPage.tsx` | Genel `onOpenConsultation` | `ConsultationModal` | Vaka ID'si (`case_study_id`) taşınmıyor |
| `/blog/*` | `SeoArticlePage.tsx` | `onOpenConsultation` | `ConsultationModal` | Makale/hizmet bağlamı taşınmıyor |

---

## 4. Analytics, Pixel, Consent ve Spam Koruması Envanteri (`verified`)

| Bileşen / Araç | Durum | Konum & Bulgu |
|---|---|---|
| Google Analytics 4 (`G-VT6D7HPR64`) | Kurulu | `index.html:6-13` — doğrudan yükleniyor, consent kapısı yok |
| Meta Pixel (`992450110536224`) | Kurulu | `index.html:15-26` — yalnızca `PageView`, consent kapısı yok |
| Google Tag Manager (GTM) | **Yok** | `verified` |
| PostHog / OpenReplay / Clarity | **Yok** | `verified` |
| Consent Manager (KVKK Çerez Paneli) | **Yok** | `verified` (`index.html` ve `src/` tarandı) |
| Spam Koruması (Honeypot / Rate Limit / Turnstile) | **Yok** | `verified` (`api/contact.ts`) |
| Idempotency / Duplicate Önleme | **Yok** | `verified` (`api/contact.ts`) |
| UTM / Referrer / Landing Attribution | **Yok** | `verified` (`src/` tarandı) |
| Mevcut Özel Event'ler | Parçalı | `generate_lead` (3 form), `whatsapp_click` (floating button), `header_navigation_select`, `growth_analysis_open`, `ServicesDirectoryPage` & `SectorsPage` click event'leri. `MEASUREMENT_PLAN.md` içindeki `b2b_form_submit` kodda yok. |

---

## 5. SEO/GEO Koruma Referans Noktası (`verified`)

- Mevcut doğrulama scriptleri korunacak ve her faz sonunda regresyon kapısı olarak çalıştırılacaktır:
  - `scripts/verifySeoAudit.js`
  - `scripts/verifyHeaderStatic.mjs`
  - `scripts/verifyBreadcrumbHierarchy.mjs`
  - `scripts/verifyBidirectionalLinks.mjs`
- `vercel.json` içindeki 23 adet 301 kalıcı yönlendirme ve `cleanUrls: true` / `trailingSlash: false` ayarlarına dokunulmayacaktır.

---

## 6. Test Ortamı, Mock ve Rollback Stratejisi

- **Yerel/Staging Test:** Vite dev/preview (`http://localhost:4173`) + Playwright route intercept (`page.route('**/api/contact', ...)`) ile production SMTP/CRM'e **sıfır test kaydı** düşürerek uçtan uca test.
- **Backend Unit/Integration Test:** `api/contact.ts` için `DRY_RUN=true` / mock transporter & webhook test modu.
- **Rollback:** Her faz ayrı küçük commit/PR olarak ilerler; kritik UI değişiklikleri feature flag (env/query) ile kontrol edilir ve `git revert` ile tek adımda geri alınabilir.
