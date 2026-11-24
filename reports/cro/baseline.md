# CRO-003 — Mevcut Ölçüm Doğrulama ve Başlangıç Çizgisi (Baseline)

> **Tarih:** 23 Kasım 2026  
> **Durum:** `verified` (kod tabanı ölçüm kurulumu) / `not measured` (canlı GA4 & CRM dönüşüm sayıları — erişim/veri dışa aktarımı bekleniyor)  
> **İlgili Belgeler:** `MEASUREMENT_PLAN.md`, `reports/cro/site-inventory.md`

---

## 1. Kurulu Analitik ve Piksel Doğrulaması (`verified`)

| Araç | Durum | Konum | Çift Kurulum Riski | Consent / KVKK Durumu |
|---|---|---|---|---|
| **GA4 (`G-VT6D7HPR64`)** | Aktif (`index.html`) | `index.html:6-13` | İkinci `gtag` eklenmemeli; mevcut `window.gtag` üzerinden merkezi `trackCROEvent()` çalışmalı | **Risk:** Consent kapısı yok; sayfa açılır açılmaz yükleniyor |
| **Meta Pixel (`992450110536224`)** | Aktif (`index.html`) | `index.html:15-26` | Yalnızca `PageView` var; `Lead` dönüşümü eklenmeden önce consent + backend başarısı şart | **Risk:** Consent kapısı yok |
| **GTM / PostHog / OpenReplay** | Kurulu değil | — | Yok | — |

---

## 2. Mevcut Event ve Dönüşüm Tutarsızlıkları (`verified`)

1. **`form_submit_success` / Backend Uyuşmazlığı (Kritik P0):**
   - `GetQuotePage.tsx:46-51`: `fetch('/api/contact')` yanıtının `res.ok` olup olmadığına bakılmaksızın `gtag('event', 'generate_lead')` gönderiyor! Yani sunucu `500` veya `400` dönse bile GA4 bunu **başarılı lead** sayıyor.
   - `ContactSection.tsx`, `ServiceDetailPage.tsx`, `BranchDetailPage.tsx`, `MarketDetailPage.tsx`, `CityDetailPage.tsx`, `DoctorAdvertisingAgencyPage.tsx`, `B2BOutreachLandingPage.tsx`: Bu 7 formda **hiçbir GA4 event'i yok**.
2. **`MEASUREMENT_PLAN.md` ile Kod Uyumsuzluğu:**
   - Mevcut SEO ölçüm planında tanımlanan `b2b_form_submit`, `internal_cluster_click`, `official_source_click`, `scroll_deep_reading` event'leri kodda hiç uygulanmamış.
   - Uygulanan event'ler: `generate_lead` (3 form), `whatsapp_click` (`WhatsAppFloatingButton`), `header_navigation_select` & `growth_analysis_open` (`Navbar`), `ServicesDirectoryPage` / `SectorsPage` tıklama event'leri.
3. **Mikro vs Makro Dönüşüm Ayrımı:**
   - `whatsapp_click` veya `growth_analysis_open` (modal açılışı) gerçek lead değildir; yalnızca mikro dönüşüm / etkileşim olarak sınıflandırılmalıdır.
   - Gerçek site lead dönüşümü yalnızca backend/SMTP/CRM tarafından kabul edilen tekil `form_submit_success` olayı olmalıdır.

---

## 3. Başlangıç Çizgisi (Baseline) Metrik Tablosu

> **Kural:** Doğrulanmış canlı GA4 / CRM verisi olmadan sayısal baseline uydurulmaz. Aşağıdaki metrikler `CRO-007` (event instrumentasyonu) ve GA4/CRM erişimi sonrası doldurulacaktır.

| Metrik | Durum | Mevcut Değer | Ölçüm Kaynağı / Filtre |
|---|---|---|---|
| Uygun Web Oturumu (`eligible_session`) | `not measured` | — | GA4 (`G-VT6D7HPR64`), bot & iç trafik hariç |
| CTA Gösterim → Tıklama Oranı (`CTA CTR`) | `not measured` | — | `cta_click / cta_impression` (`CRO-007` sonrası) |
| Form Görüntüleme → Başlama (`Form Start Rate`) | `not measured` | — | `form_start / form_view` (`CRO-007` sonrası) |
| Form Tamamlama (`Form Completion Rate`) | `not measured` | — | `form_submit_success / form_start` (`CRO-007` sonrası) |
| Website Lead CVR | `not measured` | — | Tekil `form_submit_success / eligible_session` |
| CRM Teslim Bütünlüğü (`Lead Delivery Integrity`) | `not measured` | — | Kabul edilen CRM/SMTP kaydı / `form_submit_success` |
| Nitelikli Lead Oranı (`Qualified Lead Rate`) | `not measured` | — | CRM `qualified` / geçerli tekil lead (`CRO-021` sonrası) |

---

## 4. Bot, İç Trafik, Test ve Dedup Filtre Planı

1. **Test / Staging Trafiği Hariç Tutma:**
   - `127.0.0.1`, `localhost`, `*.vercel.app` preview URL'leri ve `?cro_test=1` veya `example.invalid` test e-postaları GA4/CRM dönüşüm raporlarından hariç tutulacak (`debug_mode: true` veya tracking devre dışı).
2. **Event Migration / Dedup Planı (`CRO-007`):**
   - Mevcut `generate_lead` event'i GA4'te mevcut bir rapor/reklam bağlantısına sahipse kırılmaması için yalnızca **doğrulanmış backend `200 OK` sonrası** yeni standart `form_submit_success` ile birlikte (veya dedup `submission_id_hash` ile) gönderilecek; başarısız isteklerde **asla** tetiklenmeyecek.
   - `whatsapp_click` mevcut adıyla korunurken standart `contact_method_click` (`method: 'whatsapp'`) ile uyumlu hale getirilecek.
   - Kişisel veri (PII: ad, telefon, e-posta, mesaj içeriği, raw query) hiçbir event payload'ına yazılmayacak.
