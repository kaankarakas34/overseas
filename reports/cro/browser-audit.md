# CRO-002 — Gerçek Tarayıcıda Görev Temelli UX ve Form Akışı Denetimi

> **Tarih:** 23 Kasım 2026  
> **Ortam:** Chrome (Playwright, headless), yerel Vite dev sunucusu (`http://127.0.0.1:5190`)  
> **Test Scripti:** `scripts/croBrowserAudit.mjs`  
> **Ham Çıktı & Ekran Görüntüleri:** `reports/cro/browser-audit-raw.json`, `reports/cro/screenshots/*.png`  
> **Durum:** `verified` (gerçek tarayıcıda 6 rota × 5 viewport + mock `500` form testi + axe-core WCAG 2.2 AA tamamlandı)

---

## 1. Kritik Kesinleştirme: `/teklif-al` ve `/iletisim` Formlarının Durumu

| Rota | Form DOM'da Var mı? | İlk Ekranda Görünür mü? | Mock `HTTP 500` Sonucu | Payload / Backend Uyumu | Durum |
|---|---|---|---|---|---|
| `/teklif-al` | **Evet** (`formCount: 1`) | **Evet** (Desktop `y=491px`, Mobile 390 `y=446px`) | **BAŞARISIZ (P0):** `falseSuccessOn500: true`, `errorAlertVisibleOn500: false` | **BOZUK (P0):** `institution`, `specialty`, `targetCountry`, `monthlyBudget`, `notes` sunucuda okunmuyor | `verified` |
| `/iletisim` | **Evet** (`formCount: 1`) | **Evet** (Desktop `y=574px`, Mobile 390 `y=669px`) | **BAŞARISIZ (P0):** `falseSuccessOn500: true`, `errorAlertVisibleOn500: false` | **BOZUK (P0):** `institution`, `serviceNeed`, `targetMarket` sunucuda okunmuyor | `verified` |

> **Hipotez Kapatıldı:** Brifteki *"statik erişilebilir metinde `/teklif-al` form alanları görünmedi"* gözlemi **gerçek tarayıcıda formun var olduğu** şeklinde kesinleştirildi (`verified`). Statik dökümde görünmemesinin nedeni `scripts/prerender.js`'nin prerender HTML'inde `<form>` üretmemesiydi.

---

## 2. Viewport, Taşma ve CTA Görünürlüğü Özeti (30 Kombinasyon)

Test edilen viewport'lar: `1440×900`, `1024×768`, `768×1024`, `390×844`, `360×800`.

| Rota | Yatay Taşma (5 VP) | JS `pageErrors` | İlk Form Derinliği (1440px / 390px) | WhatsApp Butonu | Gözlem |
|---|---|---|---|---|---|
| `/` | `0 / 5` (Yok) | `0` | `16470px` / `32352px` | Görünür | Sayfa içi form çok aşağıda; üst akış yalnızca modal CTA'ya bağlı |
| `/teklif-al` | `0 / 5` (Yok) | `0` | `491px` / `446px` | Görünür | Form ilk ekranda erişilebilir; ancak 500 hatasında sahte başarı ve `select-name` erişilebilirlik hatası var |
| `/iletisim` | `0 / 5` (Yok) | `0` | `574px` / `669px` | Görünür | Form erişilebilir; ancak 500 hatasında sahte başarı ve `select-name` erişilebilirlik hatası var |
| `/hizmetler` | `0 / 5` (Yok) | `0` | Form yok (`0`) | Görünür | Teklif/modal yönlendirmesi tek tip |
| `/hizmetler/performans-pazarlama` | `0 / 5` (Yok) | `0` | `8843px` / `14728px` | Görünür | Çok uzun hizmet sayfasında form çok derinde; orta/üst bağlamsal `ServiceLeadCTA` gerekli |
| `/basari-hikayeleri` | `0 / 5` (Yok) | `0` | Form yok (`0`) | Görünür | Vaka detayından bağlamsal teklif geçişi (`case_study_id`) yok |

*Not: `consoleErrors` listesindeki 2 adet `net::ERR_FAILED` kaydı, test scriptinin üçüncü taraf analitik/pixel isteklerini (`googletagmanager`, `facebook.net`) kasıtlı olarak `route.abort()` ile engellemesinden kaynaklanır; uygulama hatası değildir.*

---

## 3. Erişilebilirlik Denetimi (axe-core WCAG 2.2 AA — `verified`)

| Rota | Toplam İhlal | Critical Bulgular | Serious Bulgular | Bağlı CRO Görevi |
|---|---:|---|---|---|
| `/` | 1 | — | `color-contrast` (4 eleman) | `CRO-025` |
| `/teklif-al` | 2 | **`select-name` (3 `<select>` etiketsiz)** | `color-contrast` (1 eleman) | **`CRO-004`, `CRO-010`, `CRO-025`** |
| `/iletisim` | 2 | **`select-name` (2 `<select>` etiketsiz)** | `color-contrast` (6 eleman) | **`CRO-011`, `CRO-025`** |
| `/hizmetler` | 1 | — | `color-contrast` (1 eleman) | `CRO-025` |
| `/hizmetler/performans-pazarlama` | 1 | — | `color-contrast` (1 eleman) | `CRO-025` |
| `/basari-hikayeleri` | 1 | — | `color-contrast` (9 eleman) | `CRO-025` |

---

## 4. Tespit Edilen Sorunlar ve Görev Eşleştirmesi

1. **[P0 — `verified`]** `/teklif-al` ve `/iletisim` formları sunucu `500` hatasında sahte başarı ekranı gösteriyor, hata uyarısı (`role="alert"`) yok → **`CRO-004`, `CRO-006`**
2. **[P0 — `verified`]** `/teklif-al` ve `/iletisim` payload alanları `api/contact.ts` ile eşleşmiyor (veri kaybı) → **`CRO-004`, `CRO-005`**
3. **[P0/P1 — `verified`]** `/teklif-al` (3) ve `/iletisim` (2) sayfalarındaki `<select>` elemanlarında erişilebilir `id`/`htmlFor` veya `aria-label` eksik (`axe-core: select-name`, Critical) → **`CRO-004`, `CRO-010`, `CRO-025`**
4. **[P1 — `verified`]** `/hizmetler/performans-pazarlama` sayfasında ilk form desktop'ta `8843px`, mobilde `14728px` aşağıda; arada bağlamsal CTA şablonu yok → **`CRO-014`**
5. **[P1 — `verified`]** 6 sayfada `color-contrast` serious bulguları mevcut → **`CRO-025`**

---

## 5. Ekran Görüntüsü Kanıtları

- `reports/cro/screenshots/home-desktop-1440.png` & `home-mobile-390.png`
- `reports/cro/screenshots/teklif-al-desktop-1440.png` & `teklif-al-mobile-390.png`
- `reports/cro/screenshots/iletisim-desktop-1440.png` & `iletisim-mobile-390.png`
- `reports/cro/screenshots/hizmetler-desktop-1440.png` & `hizmetler-mobile-390.png`
- `reports/cro/screenshots/performans-pazarlama-desktop-1440.png` & `performans-pazarlama-mobile-390.png`
- `reports/cro/screenshots/basari-hikayeleri-desktop-1440.png` & `basari-hikayeleri-mobile-390.png`
