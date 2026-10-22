# NAV-07: Çift Yönlü Hub–Alt Hizmet Linkleri, İlgili Rehber, Branş ve Pazar İlişkilerinin Entegrasyonu

## 1. Görev Özeti ve Amaç
- **Görev ID:** NAV-07 (Linear S11 Sprint)
- **Kapsam:** Hizmet sayfaları arasındaki iç link silolarını kırmak, alt hizmet sayfalarından (`/hizmetler/saglik-turizmi-google-ads`, `/hizmetler/saglik-turizmi-meta-reklamlari`, `/saglik-turizmi-landing-page`, `/doktor-marka-yonetimi` vb.) ana hub merkezlerine (`/hizmetler/performans-pazarlama`, `/hizmetler/web-sitesi-landing-page`, `/hizmetler/crm-otomasyon`, `/hizmetler/icerik-marka-yonetimi`) ve ters yönde güçlü çift yönlü bağlantı ağı (Mesh Linking) kurmak.
- **Entegre Hub Bağlantıları:** Her hizmet sayfasından ilgili Klinik Branşlar Merkezi (`/sektorler`) ve Hedef Pazarlar Merkezi (`/ulkeler`) ile stratejik blog rehberlerine çift yönlü bağlantı sağlamak.
- **Header Kuralı:** `src/components/Navbar.tsx` ve `src/data/headerNavigation.json` üzerinde hiçbir değişiklik yapılmamış (diff = 0 satır) ve header dokunulmazlığı korunmuştur.

---

## 2. Gerçekleştirilen Mimarî Değişiklikler

### A. Merkezi İlişki Matrisi (`src/data/serviceRelations.ts`)
- 14 `MASTER_SERVICES` kaydı ve `doktor-marka-yonetimi` için tam ilişkisel harita oluşturuldu:
  - `isHub`: Sayfanın üst merkez (Hub) olup olmadığını belirtir.
  - `parentHub`: Alt hizmetin ait olduğu ana hub merkezinin linki, başlığı ve açıklayıcı kart verisi.
  - `subServices`: Hub sayfalarında listelenen bağlı uzmanlık çözümleri.
  - `siblingServices`: Aynı hizmet ailesindeki paralel çözümler (örn: Google Ads ↔ Meta Ads).
  - `relatedFamilies`: Çapraz hizmet merkezleri (örn: Performans Pazarlama ↔ CRM & Otomasyon).
  - `relatedBranches`: Öncelikli klinik branşlar (`/sac-ekimi-reklam-ajansi`, `/dis-klinigi-reklam-ajansi`, vb.).
  - `relatedMarkets`: Öncelikli ülke koridorları (`/ingiltere-saglik-turizmi-reklamlari`, `/almanya-saglik-turizmi-reklamlari`, vb.).
  - `relatedArticles`: Hizmetle semantik örtüşen teknik rehber ve blog makaleleri.

### B. Hizmet Detay Bileşeni (`src/components/ServiceDetailPage.tsx`)
1. **Çift Kademeli Üst Breadcrumb:**
   - Alt hizmet sayfalarında: `Ana Sayfa / Hizmetler / [Üst Merkez Hub] / {Hizmet Başlığı}` formatı uygulandı.
   - Doğrudan üst hub'a tek tıkla dönüş imkanı sağlandı.
2. **"Üst Hizmet Ailesi" Tanıtım Rozeti:**
   - Alt hizmet sayfalarının üst bölümüne ana strateji merkezini tanıtan vurgulu bilgi kutusu eklendi.
3. **Hub Sayfalarında Alt Hizmet Grid'i:**
   - Hub sayfalarında bağlı alt çözümlerin başlık, açıklama ve doğrudan yönlendirme butonları listelendi.
4. **Kardeş Çözümler (Siblings) Navigasyonu:**
   - Aynı ailedeki diğer hizmetlere hızlı geçiş sağlandı.
5. **Entegre Ekosistem Bağlantıları (3 Sütunlu Grid):**
   - **Sütun 1 - Öncelikli Klinik Branşlar:** İlgili branş sayfalarına ve `/sektorler` merkezine yönlendirme.
   - **Sütun 2 - Hedef Ülke Koridorları:** İlgili pazar sayfalarına ve `/ulkeler` merkezine yönlendirme.
   - **Sütun 3 - İlgili Merkez & Rehberler:** Teknik blog rehberlerine ve kardeş merkezlere yönlendirme.

### C. Doktor Marka Yönetimi (`src/components/DoctorBrandingPage.tsx`)
- Breadcrumb: `Ana Sayfa / Hizmetler / İçerik & Marka / Doktor Marka Yönetimi` olarak güncellendi.
- Üst Hub: `/hizmetler/icerik-marka-yonetimi` merkezine bağlandı.
- Klinik Branş: `/doktor-reklam-ajansi` sayfasına doğrudan çift yönlü bağlantı kuruldu.
- Entegre Ekosistem: `/sektorler` ve `/ulkeler` bağlantıları yerleştirildi.

### D. Hizmetler Dizin Sayfaları (`src/components/ServicesDirectoryPage.tsx` ve `scripts/serviceDirectoryRoutes.mjs`)
- `/hizmetler`, `/hizmetler/crm-otomasyon` ve `/hizmetler/icerik-marka-yonetimi` sayfalarında `/sektorler` ve `/ulkeler` merkezlerine açık linkler eklendi.

### E. Statik Prerender Katmanı (`scripts/prerender.js`)
- Non-JS botlar, LLM/GEO tarayıcıları ve arama motorları için 12 kritik hizmet rotasının statik HTML çıktısına breadcrumb, üst merkez linki, alt hizmetler, branş ve pazar linkleri gömüldü.

---

## 3. Doğrulama ve Test Sonuçları
- Doğrulama betiği: `scripts/verifyBidirectionalLinks.mjs`
- Test Çıktısı:
  ```text
  ✅ src/data/serviceRelations.ts dosyası mevcut
  ✅ SERVICE_RELATIONS haritası tanımlı
  ✅ Performans Pazarlama hub kaydı mevcut
  ✅ Google Ads alt hizmet kaydı mevcut
  ✅ Meta Ads alt hizmet kaydı mevcut
  ✅ Doktor Marka Yönetimi kaydı mevcut
  ✅ ServiceDetailPage SERVICE_RELATIONS import ediyor
  ✅ Alt hizmetlerde parentHub blok kurgusu mevcut
  ✅ Hub sayfalarında subServices listesi kurgusu mevcut
  ✅ Klinik branşlar (/sektorler) entegrasyonu mevcut
  ✅ Hedef pazarlar (/ulkeler) entegrasyonu mevcut
  ✅ Hizmetler ana dizin linki breadcrumb içinde mevcut
  ✅ Doktor Marka Yönetimi üst hub linki içeriyor
  ✅ Doktor Reklam Ajansı branş linki içeriyor
  ✅ ServicesDirectoryPage /sektorler linki içeriyor
  ✅ ServicesDirectoryPage /ulkeler linki içeriyor
  ✅ prerender.js performans pazarlama hub linki içeriyor
  ✅ prerender.js google ads linki içeriyor
  ✅ prerender.js meta reklamları linki içeriyor
  ✅ prerender.js web & landing page hub linki içeriyor
  ✅ prerender.js crm-otomasyon hub linki içeriyor
  ✅ prerender.js icerik-marka-yonetimi hub linki içeriyor
  ✅ Navbar.tsx dosyasında 0 değişiklik var (Header dokunulmazlığı)
  ✅ headerNavigation.json dosyasında 0 değişiklik var (Header dokunulmazlığı)
  🎉 NAV-07 tüm kriterleri başarıyla GEÇTİ!
  ```
- `npm run build`:
  - 1876 modül hatasız derlendi.
  - 225 statik sayfa üretildi.
  - 217 URL'li sitemap.xml güncellendi.
