# NAV-04 — Header için onay önerisi

11 Ekim 2026 · Overseas SEO · E4N-255 · Uygulama öncesi öneri

## Onay durumu

Kullanıcı SEO görevlerine devam edilmesini istedi. Header'a şu anda hiçbir şey eklememe ve yeni hizmet eklemeden açık onay alma kuralı geçerli. Bu teslim yalnız öneriyi somutlaştırır; Navbar, MASTER_SERVICES ve statik header değiştirilmedi. NAV-04 tamamlanmış değildir. NAV-05 ve NAV-06, Linear'da bu görevin açık bağımlılıklarıdır; burada uygulanmadılar.

## Önerilen görünüm

Logo | Hizmetler | Uzmanlık Alanları | Hedef Ülkeler | Rehber | Referanslar | Hakkımızda | Dil | Büyüme Analizi Al

| Ana başlık | Merkez hedef | Açılan bölüm |
| --- | --- | --- |
| Hizmetler | `/hizmetler` | Tüm Hizmetler ve aşağıdaki altı aile |
| Uzmanlık Alanları | `/sektorler` | Doğrulanmış mevcut branşlar; NAV-05 tamamlandıktan sonra |
| Hedef Ülkeler | `/ulkeler` | Doğrulanmış mevcut pazarlar; NAV-06 tamamlandıktan sonra |
| Rehber | `/blog` | Rehber & Bilgi Merkezi, `/metodoloji` |
| Referanslar | `/referanslar` | Referanslar, `/basari-hikayeleri` |
| Hakkımızda | `/hakkimizda` | Hakkımızda, `/ekibimiz`, `/iletisim` |

Merkez bağlantısı gerçek bir link olacak; yanındaki ayrı düğme alt menüyü açacak. Alt menüye gitmek için fareyle üzerine gelmek gerekmeyecek. Mobilde aynı sıra ve hedefler, açılır bölümler halinde kullanılacak. İletişim bağlantısı Hakkımızda bölümünde korunacak; telefon bağlantısı uygun ekran genişliğinde kalacak.

### Hizmetler alt menüsü

| Görünen bağlantı | Hedef |
| --- | --- |
| Tüm Hizmetler | `/hizmetler` |
| Performans Pazarlama | `/hizmetler/performans-pazarlama` |
| Uluslararası SEO | `/hizmetler/uluslararasi-seo-hizmeti` |
| GEO & AI Görünürlüğü | `/hizmetler/geo-generative-engine-optimization` |
| Web & Landing Page | `/hizmetler/web-sitesi-landing-page` |
| CRM & Otomasyon | `/hizmetler/crm-otomasyon` |
| İçerik & Marka | `/hizmetler/icerik-marka-yonetimi` |

CRM & Otomasyon ve İçerik & Marka sayfaları NAV-03'te oluşturuldu; bu iki aileyi header'a almak özellikle kullanıcı onayına tabidir. Var olan CRM, AI otomasyon, sosyal medya ve prodüksiyon gibi alt hizmetler aile merkezlerinden erişilir. Kaynak `src/data/serviceFamilies.json`; header için MASTER_SERVICES listesine yeni kayıt eklenmesi önerilmiyor. Masaüstü, mobil ve pre-render header aynı veriye dayanmalı.

## Header'dan çıkan bağlantıların erişimi

- Google Ads ve Meta: Performans Pazarlama merkezinin alt hizmet bağlantıları.
- Sağlık turizmi landing page: Web & Landing Page merkezinin alt hizmet bağlantısı.
- CRM yazılımı ve AI otomasyon: CRM & Otomasyon merkezi.
- Sosyal medya, içerik prodüksiyonu ve `/doktor-marka-yonetimi`: İçerik & Marka merkezi.
- Diğer mevcut hizmet/çözüm URL'leri: Tüm Hizmetler merkezindeki mevcut çözüm ve alt hizmet bağlantıları. URL silme, yönlendirme veya canonical değişikliği önerilmiyor.
- Metodoloji, başarı hikayeleri, ekip, iletişim ve teklif sayfası: Yukarıdaki bölümler ve mevcut merkez/footer yolları. Statik çıktıdaki erişim de uygulamada kontrol edilecek.

## CTA ve ölçüm

Buton metni TR `Büyüme Analizi Al`, EN `Get a Growth Analysis`. Mevcut danışmanlık modalı açılacak; JavaScript olmadan mevcut `/teklif-al` form sayfasına gidilecek. Yeni randevu servisi veya dış hedef eklenmeyecek.

Önerilen olaylar: `header_navigation_select` (bölüm ve hedef yol) ve `growth_analysis_open` (kaynak: header, dil, sayfa yolu). Kişisel veri ve URL sorgu parametreleri gönderilmeyecek. Analitik yoksa menü ve modal çalışacak. Mevcut form `/api/contact` adresine POST yapıyor ve `generate_lead` kullanıyor. Kaynak incelemesinde formun HTTP başarı durumunu kontrol etmeden başarı/lead olayına ilerleyebildiği görüldü; gerçek başarı ve hata yanıtı ayrımı NAV-04 uygulamasının dönüşüm doğrulamasında giderilmeli. Mevcut endpoint'in canlı teslimi bu öneride test edilmedi, gerçek lead gönderilmedi.

## Uygulama kabul kontrolü

1. NAV-05 ve NAV-06 merkez/branş/pazar eşlemeleri doğrulandıktan ve açık header onayı geldikten sonra öneriyi uygula.
2. Masaüstü tıklama, Tab/Enter/Space/Escape, dışarı tıklama ve route değişiminde kapanma; `aria-expanded`, `aria-controls` ve görünür odak.
3. Mobil dokunma, aynı hiyerarşi, menü kapatma ve odak dönüşü; 390 px ve ara ekran genişliğinde taşma kontrolü.
4. TR/EN başlıklar ve mevcut dil akışı; React ve pre-render linklerinin aynı hedefleri vermesi.
5. Header'dan çıkan tüm URL'lerin merkez veya bağlamsal yollarla erişimi; tekil bağlantı hedeflerinin route ve statik çıktı kontrolü.
6. CTA modal/form hedefi, başarı ve hata yanıtları, analitik kapalıyken işleyiş; canlı GA paneli ve GSC doğrulaması ayrı açık kalır.
7. Tip/build ve odaklı tarayıcı doğrulaması geçmeden görevi Done yapma.

## Bu teslimin doğrulaması

Önerilen altı aile URL'si mevcut aile verisiyle; altı ana merkez URL'si App.tsx route'larıyla karşılaştırıldı. Navbar'ın MASTER_SERVICES'i masaüstü ve mobilde doğrudan listelediği, pre-render'ın ayrı navHeaderHtml tuttuğu doğrulandı. Bu doküman çalışma zamanı davranışını değiştirmez; uygulama testleri henüz yapılmadı. NAV-01 GSC kontrolü açık kalır.
