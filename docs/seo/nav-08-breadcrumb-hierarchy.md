# NAV-08: Breadcrumb Hiyerarşisi ve Şema Entegrasyonunun Standardizasyonu

## 1. Görev Özeti ve Kapsam
- **Görev ID:** NAV-08 (Linear S11 Sprint)
- **Kapsam:** Tüm site genelinde (Hizmetler, Alt Hizmetler, Branşlar, Pazarlar, Şehirler, Sözlük ve Bilgi Merkezi) Breadcrumb navigasyonunu ve schema.org `BreadcrumbList` JSON-LD yapılandırılmış veri işaretlemelerini NAV-02 mimari ağacına tam uyumlu olacak şekilde standardize etmek.
- **Header Kuralı:** `src/components/Navbar.tsx` ve `src/data/headerNavigation.json` üzerinde hiçbir değişiklik yapılmamış (`diff = 0`) ve header dokunulmazlığı korunmuştur.

---

## 2. Standartlaştırılmış Hiyerarşi Modeli

| Sayfa Tipi | Kademe 1 | Kademe 2 | Kademe 3 | Kademe 4 |
| :--- | :--- | :--- | :--- | :--- |
| **Hizmet Hub Sayfası** (örn: `/hizmetler/performans-pazarlama`) | Ana Sayfa | Hizmetler (`/hizmetler`) | Performans Pazarlama | - |
| **Alt Hizmet Sayfası** (örn: `/saglik-turizmi-google-ads`) | Ana Sayfa | Hizmetler (`/hizmetler`) | Performans Pazarlama (`/hizmetler/performans-pazarlama`) | Google Ads Yönetimi |
| **Hizmet Ailesi Hub** (örn: `/hizmetler/crm-otomasyon`) | Ana Sayfa | Hizmetler (`/hizmetler`) | CRM & Otomasyon | - |
| **Doktor Marka Yönetimi** (`/doktor-marka-yonetimi`) | Ana Sayfa | Hizmetler (`/hizmetler`) | İçerik & Marka Yönetimi (`/hizmetler/icerik-marka-yonetimi`) | Doktor Marka Yönetimi |
| **Klinik Branş Detay** (örn: `/sac-ekimi-reklam-ajansi`) | Ana Sayfa | Uzmanlık Alanları (`/sektorler`) | Saç Ekimi Reklam Ajansı | - |
| **Doktor Reklam Ajansı** (`/doktor-reklam-ajansi`) | Ana Sayfa | Uzmanlık Alanları (`/sektorler`) | Doktor Reklam Ajansı | - |
| **Hedef Pazar Detay** (örn: `/ingiltere-saglik-turizmi-reklamlari`) | Ana Sayfa | Hedef Pazarlar (`/ulkeler`) | İngiltere (UK) Pazarı | - |
| **Şehir Detay** (örn: `/istanbul-saglik-turizmi-reklam-ajansi`) | Ana Sayfa | Hizmetler (`/hizmetler`) | İstanbul Sağlık Turizmi Reklam Ajansı | - |
| **Sözlük** (`/sozluk`) | Ana Sayfa | Bilgi Merkezi (`/blog`) | Sağlık Turizmi Sözlüğü | - |
| **Rehber / Makale** (örn: `/blog/...`) | Ana Sayfa | Bilgi Merkezi (`/blog`) | {Makale Başlığı} | - |

---

## 3. Gerçekleştirilen Teknik Değişiklikler

1. **Merkezi Veri Ayrıştırması (`src/data/serviceRelationsData.json` & `serviceRelations.ts`):**
   - İlişki matrisi hem TypeScript hem de ESM/Node ortamında doğrudan okunabilecek JSON standardına geçirildi; kod kopyalama engellendi.
2. **Evrensel JSON-LD Şema Bileşeni (`src/components/JsonLdSchema.tsx`):**
   - `SERVICE_RELATIONS` matrisiyle dinamik entegrasyon sağlandı.
   - `rel.parentHub` olan tüm alt hizmetlere otomatik 4 kademeli schema üretimi tanımlandı.
   - `doctor-branding` için 4 kademeli (`Ana Sayfa` -> `Hizmetler` -> `İçerik & Marka` -> `Doktor Marka Yönetimi`) kurgusu eklendi.
   - `customBreadcrumbs` prop desteği eklenerek özel dizinler için esneklik sağlandı.
3. **Doktor Reklam Ajansı Düzeltmesi (`src/components/DoctorAdvertisingAgencyPage.tsx`):**
   - Breadcrumb schema ve görsel navigasyondaki `Sağlık Pazarlaması` referansı standartlaştırıldı; `/sektorler` (Uzmanlık Alanları) ile senkronize edildi.
4. **Hizmetler Dizin Sayfası (`src/components/ServicesDirectoryPage.tsx`):**
   - `JsonLdSchema` ve `customBreadcrumbs` entegre edilerek hem `/hizmetler` kök dizininde hem de aile hub sayfalarında tam uyumlu yapılandırılmış veri sağlandı.
5. **Sözlük Sayfası (`src/components/DictionaryPage.tsx`):**
   - `BreadcrumbList` schema'sı eklendi; görsel breadcrumb'daki `Bilgi Merkezi` metni `/blog` sayfasına tıklanabilir bağlantıya dönüştürüldü.
6. **Statik Prerender Katmanı (`scripts/prerender.js`):**
   - `generateBreadcrumbSchema` motoru eklendi.
   - Derlenen 225 sayfanın tamamının `<head>` bloğuna tarayıcı ve LLM/Search motoru botlarının JS çalıştırmadan okuyabileceği `BreadcrumbList` JSON-LD şeması basıldı.

---

## 4. Test ve Doğrulama Raporu
- Test Betiği: `scripts/verifyBreadcrumbHierarchy.mjs`
- Test Çıktısı:
  ```text
  ✅ src/components/JsonLdSchema.tsx mevcut
  ✅ JsonLdSchema SERVICE_RELATIONS import ediyor
  ✅ Alt hizmetlerde 4 kademeli breadcrumb desteği mevcut
  ✅ Doktor Marka Yönetimi için 4 kademeli breadcrumb desteği mevcut
  ✅ customBreadcrumbs desteği mevcut
  ✅ DoctorAdvertisingAgencyPage JSON-LD Uzmanlık Alanları içeriyor
  ✅ DoctorAdvertisingAgencyPage görsel breadcrumb /sektorler linki içeriyor
  ✅ ServicesDirectoryPage JsonLdSchema kullanıyor
  ✅ ServicesDirectoryPage customBreadcrumbs tanımlıyor
  ✅ DictionaryPage BreadcrumbList şeması içeriyor
  ✅ DictionaryPage görsel breadcrumb /blog linki içeriyor
  ✅ prerender.js generateBreadcrumbSchema fonksiyonu içeriyor
  ✅ prerender.js serviceRelationsData.json okuyor
  ✅ prerender.js statik head içine JSON-LD şeması enjekte ediyor
  ✅ dist klasörü mevcut
  ✅ dist/saglik-turizmi-google-ads/index.html mevcut
  ✅ Google Ads statik HTML 4 kademeli BreadcrumbList içeriyor
  ✅ dist/.../performans-pazarlama/index.html mevcut
  ✅ Performans Pazarlama statik HTML 3 kademeli BreadcrumbList içeriyor
  ✅ dist/doktor-marka-yonetimi/index.html mevcut
  ✅ Doktor Marka Yönetimi statik HTML 4 kademeli BreadcrumbList içeriyor
  ✅ dist/sac-ekimi-reklam-ajansi/index.html mevcut
  ✅ Saç Ekimi statik HTML Uzmanlık Alanları kademeli BreadcrumbList içeriyor
  ✅ dist/ingiltere-saglik-turizmi-reklamlari/index.html mevcut
  ✅ İngiltere statik HTML Hedef Pazarlar kademeli BreadcrumbList içeriyor
  ✅ dist/sozluk/index.html mevcut
  ✅ Sözlük statik HTML Bilgi Merkezi kademeli BreadcrumbList içeriyor
  ✅ Navbar.tsx dosyasında 0 değişiklik var (Header dokunulmazlığı)
  ✅ headerNavigation.json dosyasında 0 değişiklik var (Header dokunulmazlığı)
  🎉 NAV-08 tüm testleri ve statik HTML çıktısı başarıyla GEÇTİ!
  ```
- `npm run build`: 1877 modül, 225 statik sayfa ve 217 URL'li sitemap.xml hatasız üretildi.
