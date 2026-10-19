# OVERSEAS.MARKETING — GSC 53 SORGU MASTER SEO & GEO UYGULAMA PLANI
**Sürüm:** 19 Ekim 2026  
**Hedef:** `https://www.overseas.marketing`  
**Amaç:** Mevcut siteyi ve URL'leri bozmadan, 53 Search Console sorgusunu tekil arama niyetleriyle eşleştirerek güçlendirmek; kanibalizasyonu önlemek, teknik SEO ve GEO standartlarını 2026 resmî mevzuatıyla uygulamak.

---

## 1. DOKUNULMAZ ALANLAR VE MARKA AYRIMI

1. **Header / Menü Değişmezlik Kuralı:** `Navbar.tsx`, `headerNavigation.json` ve tüm header stilleri kesinlikle korunur (`diff = 0`). Menüye yeni link, yeni servis veya yeni buton eklenmez.
2. **Sabit Marka Ayrımı:** Overseas Marketing bir sağlık tesisi veya sağlık turizmi acentesi **değildir**. Sağlık tesislerine ve yetkili aracı kuruluşlara pazarlama, SEO, GEO, web, CRM ve otomasyon danışmanlığı sunar. Kendisi adına yetki belgesi veya acente unvanı iddia etmez.
3. **Altın Kural: Mevcut URL'yi Güçlendir:** Körlemesine 53 yeni blog açmak yasaktır. Envanterde aynı niyeti taşıyan mevcut URL varsa o URL revize edilir (`UPDATE`). Niyet tamamen bağımsızsa ve mevcut sayfalar yetersizse yeni içerik hazırlanır (`CREATE`). Zayıf duplike sayfalar birleştirilir (`MERGE`). B2B ticari değeri olmayan sorgular `HOLD/NOINDEX` tutulur.

---

## 2. 21 İÇERİK BRİFİ UYGULAMA VE KARAR TABLOSU

| Kod | Hedef Başlık & Niyet | EXISTING_URL | STATUS | REASON | PRIMARY_QUERY | INTERNAL_LINKS | LEGAL_CHECK |
|---|---|---|---|---|---|---|---|
| **B01** | Sağlık Turizmi Yetki Belgesi Nasıl Alınır? 2026 Başvuru Rehberi | `/saglik-turizmi-yetki-belgesi` (K026) | **UPDATE** | 7 rakip yetki URL'si yerine tek büyük Master Hub olarak güçlendirilecek. K027/K029/K030 konsolide edilecek. | sağlık turizmi yetki belgesi | B02, B03, B07, B08, B09, P2 | 26.04.2025 Yönetmeliği md. 4-9; EK-1/A ve EK-1/B farkı doğrulandı. |
| **B02** | Sağlık Turizmi Aracı Kuruluş Yetki Belgesi: Şartlar ve USHAŞ Başvurusu | `/blog/saglik-turizmi-araci-kurulus-yetki-belgesi` | **CREATE** | Aracı kuruluş mevzuatı sağlık tesisinden tamamen farklı; USHAŞ başvuru ve kriterleri bağımsız niyet. | sağlık turizmi aracı kuruluş yetki belgesi | B01, B05, B06, B07, P2, B20 | 2025 Yönetmelik md. 6; USHAŞ aracı kuruluş başvuru kriterleri. |
| **B03** | Sağlık Turizmi Yapmak İçin Gerekli Şartlar ve Belgeler (2026) | `/saglik-turizmi/gerekli-belgeler` (K033) | **UPDATE** | Mevcut K033 sayfası zayıf şablon durumunda; 2026 tesis ve acente evrak matrisi olarak güncellenecek. | sağlık turizmi için gerekli belgeler | B01, B02, B07, B09, B10 | EK-1/A ve EK-1/B kontrol listeleri doğrulanmış resmî maddelerle hazırlandı. |
| **B04** | Sağlık Turizmi Şirketi Kurmak: İş Modeli, Belge ve Pazarlama | `/blog/saglik-turizmi-sirketi-kurmak` | **CREATE** | Şirket kuruluşu ticari araştırma aşamasındaki kurucular için bağımsız niyet; acente açma ile birleştirilmez. | sağlık turizmi şirketi kurmak | B01, B02, B05, B06, B18, P2 | Ticaret Sicil, TÜRSAB ve USHAŞ aşamaları ayrı ayrı ayrıştırıldı. |
| **B05** | Sağlık Turizmi Acentası Nasıl Kurulur? Adım Adım Belgeler | `/saglik-turizmi-acentesi-acmak` (K018) | **UPDATE** | Mevcut K018 URL'si 2026 adım adım acente rehberine dönüştürülecek. | sağlık turizmi acentası nasıl kurulur | B02, B04, B06, B07, P2, B20 | 1618 Sayılı Kanun ve 2025 Sağlık Turizmi Yönetmeliği md. 6(2) ayrımı. |
| **B06** | TÜRSAB Sağlık Turizmi Belgesi Var mı? Seyahat Acentesi ve USHAŞ Farkı | `/blog/tursab-saglik-turizmi-belgesi-farki` | **CREATE** | TÜRSAB'ın sağlık yetkisi verdiği yanılgısını gideren çok aranan kavramsal rehber. | türsab sağlık turizmi belgesi | B02, B05, B01, B07 | TÜRSAB İşletme Belgesi vs USHAŞ Yetki Belgesi ayrımı kanıtlandı. |
| **B07** | Sağlık Turizmi Yetki Belgesi Başvuru Formu: EK-1/A, EK-1/B ve EK-3 Farkı | `/blog/saglik-turizmi-yetki-belgesi-basvuru-formlari` | **CREATE** | GSC'deki "EK-3 başvuru formu" aramasındaki yanılgıyı aydınlatan teknik rehber. | sağlık turizmi yetki belgesi başvuru formu | B01, B02, B03, B08 | EK-1 başvuru formu, EK-3 ise düzenlenen belge örneğidir; ayrım yapıldı. |
| **B08** | Sağlık Turizmi Yetki Belgesi Ücreti 2026: Maliyet Kalemleri | `/blog/saglik-turizmi-yetki-belgesi-ucreti` | **CREATE** | Maliyet sorgusunda uydurma rakam vermeden USHAŞ, TÜRSAB ve operasyon gider kalemlerini açıklayan rehber. | sağlık turizmi yetki belgesi ücreti | B01, B02, B06, B07 | Uydurma harç/ücret yazılmadı; resmi teyit mekanizması açıklandı. |
| **B09** | Sağlık Bakanlığı Sağlık Turizmi Mevzuatı 2026: Yürürlükteki Yönetmelikler | `/blog/saglik-bakanligi-saglik-turizmi-mevzuati-2026` | **CREATE** | 26 Nisan 2025 sağlık turizmi ve 12 Kasım 2025 tanıtım yönetmeliklerini özetleyen kurumsal uyum rehberi. | sağlık bakanlığı sağlık turizmi | E1, B01, B02, B18, P3 | 2023 tanıtım yönetmeliğinin mülga olduğu teyit edildi. |
| **B10** | Sağlık Turizmi Sertifikası ile Yetki Belgesi Aynı mı? | `/saglik-turizmi-sertifikasi` (K035) | **UPDATE** | Mevcut K035 sayfası kurs/eğitim sertifikası ile yasal yetki belgesi farkını anlatacak şekilde güncellenecek. | sağlık turizmi sertifikası nasıl alınır | B01, B03, B09 | TÜSKA akreditasyonu ile Sağlık Bakanlığı yetki belgesi ayrıştırıldı. |
| **B11** | Türkiye'de Sağlık Turizmi 2026: Alanlar, Modeller ve Sektörün Yapısı | `/blog/turkiyede-saglik-turizmi` | **CREATE** | Türkiye genel sektör yapısı, medikal, dental, termal ve saç ekimi alanları analizi. | türkiye'de sağlık turizmi | B12, B13, B17, B18, B01 | Sağlık Bakanlığı ve USHAŞ verileri çerçevesinde hazırlandı. |
| **B12** | Sağlık Turizmi Merkezleri ve Türkiye’de Yapıldığı Yerler | `/blog/turkiyede-saglik-turizmi-merkezleri` | **CREATE** | Destinasyon bazında sağlık tesislerinin doğrulanması ve aranması rehberi. | sağlık turizmi merkezleri | B11, B13, B17, B01 | HealthTürkiye yetkili merkez sorgulama metodolojisi eklendi. |
| **B13** | Antalya Sağlık Turizmi: Branşlar, Hedef Pazarlar ve Büyüme | `/antalya-saglik-turizmi` (K061) | **UPDATE** | Mevcut K061 sayfası Antalya'nın dental/estetik pazar gücünü anlatan kapsamlı ekosistem rehberine dönüştürülecek. | antalya sağlık turizmi | P1, B14, B15, B16, B18 | Antalya İl Sağlık ve HealthTürkiye kayıtları referans alındı. |
| **B14** | Antalya Sağlık Turizmi Acentaları: Yetki Kontrolü ve Seçim | `/antalya-saglik-turizmi/acentalari` (K063) | **UPDATE** | Mevcut K063 sayfası Antalya'daki yetkili aracı kuruluşları doğrulama rehberi olarak güçlendirilecek. | antalya sağlık turizmi acentaları | B13, B17, B02, P2, P1 | Sahte "en iyi acenta" sıralaması yapılmadı; resmi teyit yöntemi verildi. |
| **B15** | Antalya Sağlık Turizmi Danışmanlığı: Mevzuat ve Pazarlama Farkları | `/blog/antalya-saglik-turizmi-danismanligi` | **CREATE** | Antalya klinikleri için danışmanlık modellerini ve Overseas Marketing'in pazarlama kapsamını açıklayan rehber. | antalya sağlık turizmi danışmanlığı | P1, P2, B13, B18, B01 | Hukuk/ruhsat ile büyüme/pazarlama danışmanlığı net ayrıldı. |
| **B16** | Antalya Sağlık Turizmi Web Sitesi: Çok Dilli SEO ve KVKK | `/blog/antalya-saglik-turizmi-web-sitesi` | **CREATE** | Antalya klinikleri için dönüşüm odaklı, çok dilli ve mevzuata uygun web sitesi mimarisi rehberi. | antalya sağlık turizmi web sitesi | P1, P4, P5, B13, B20 | KVKK hasta veri güvenliği ve Google web standartları doğrulandı. |
| **B17** | Türkiye'de Sağlık Turizmi Yapan Acentalar: Yetki Doğrulama | `/blog/turkiyede-saglik-turizmi-yapan-acentalar` | **CREATE** | Türkiye geneli yetkili aracı kuruluş sicilini HealthTürkiye ve USHAŞ üzerinden kontrol etme rehberi. | türkiye'de sağlık turizmi yapan acentalar | B14, B02, B05, B11, P2 | Reklam ajansı listeye acente olarak sokulmadı. |
| **B18** | Sağlık Turizmi Pazarlaması 2026: SEO, GEO, Reklam ve CRM Stratejisi | `/blog/saglik-turizmi-pazarlamasi-nasil-yapilir` (K089) | **UPDATE** | Mevcut K089 sayfası 2026 entegre TOFU-MOFU-BOFU pazarlama ana strateji rehberine dönüştürülecek. | sağlık turizmi pazarlaması | P0, P3, P4, P5, P2, B19, B20, E1 | 12 Kasım 2025 tanıtım sınırları ve Google/Meta politikaları işlendi. |
| **B19** | Sağlık Turizmi Performans Pazarlama: CPL, CAC ve Kampanya Ölçümü | `/blog/saglik-turizmi-performans-pazarlama` | **CREATE** | Performans reklamcılığının matematiksel formülleri, CPL, MQL, SQL ve hasta kabul CAC hesabı. | sağlık turizmi performans pazarlama | P3, B18, P2, B20, E1 | Google Ads & Meta Ads sağlık politikaları ve GA4 uyumu kontrol edildi. |
| **B20** | Sağlık Turizminde Chatbot ve AI Call Agent: Randevu, Dil ve KVKK | `/blog/saglik-turizminde-chatbot` | **CREATE** | 7/24 çok dilli hasta karşılama, WhatsApp CRM ve özel nitelikli sağlık verisi KVKK sınırları rehberi. | sağlık turizminde chatbot | P2, B18, B19, P5, B16 | KVKK Kurumu ilke kararları ve tıbbi teşhis koymama kuralı işlendi. |
| **B21** | Sağlık Turizmi Maaşları ve Uzmanı Maaşları | `/saglik-turizmi/maaslari` (K017) | **HOLD** | B2B ticari değeri zayıf; kullanıcı niyetini karşılar ancak noindex durumu korunarak uydurma rakam girilmez. | sağlık turizmi maaşları | B20, B11 | Uydurma ücret yayınlanmayacak; metodoloji şartı arandı. |

---

## 3. TİCARİ SAYFALARIN GÜÇLENDİRME PLANI (P1, P2, P3)

### P1 — Antalya Sağlık Turizmi Reklam Ajansı (`/antalya-saglik-turizmi-reklam-ajansi`)
- H1 ve URL korunacak: `Antalya Diş ve Estetik Klinikleri İçin Reklam ve Pazarlama`.
- Sayfa gövdesine:
  1. Antalya dental turizm (İngiltere/Avrupa all-on-4, zirkonyum) hasta kazanım kurguları.
  2. Antalya estetik ve saç ekimi hasta yolculuğu ve tatil+tedavi mevzuat bilgilendirme çerçevesi.
  3. Antalya'da ajans ile aracı kuruluş farkı (Overseas'in acente olmadığı, pazarlama teknolojisi sunduğu).
  4. Yerel klinik yetki doğrulama ve HealthTürkiye uyum kontrolü.
  5. B13, B14, B15, B16'dan bağlamsal iç linkler.

### P2 — Sağlık Turizmi Aracı Kuruluş Pazarlama (`/saglik-turizmi-araci-kurulus-pazarlama`)
- H1 ve URL korunacak: `Yetkili Sağlık Turizmi Aracı Kuruluşları ve Acenteler İçin Büyüme Ajansı`.
- Sayfa gövdesine:
  1. 2025 Sağlık Turizmi Yönetmeliği uyarınca aracı kuruluşların hasta kazanım dinamikleri.
  2. Çok dilli WhatsApp CRM ve 7/24 çağrı merkezi performans entegrasyonu.
  3. Seyahat acentelerine özel yurt dışı Google Ads ve Meta Ads kampanya yapılandırması.
  4. B02, B05, B17'den gelen ticari akış.

### P3 — Performans Pazarlama (`/hizmetler/performans-pazarlama`)
- İngiltere, DACH ve Avrupa pazarlarında Google Ads Arama Ağı & Meta video dönüşüm hunisi.
- CPL, CAC ve kohort analiziyle nitelikli lead yönetimi.
- B18 ve B19 ile iki yönlü iç bağlantı mimarisi.

---

## 4. İÇ LİNK MİMARİSİ (HUB → CLUSTER → MONEY PAGE)

`INTERNAL_LINKS.csv` dosyası oluşturulacak ve her iç link şu ilkeleri takip edecek:
- Asla 404, noindex veya redirect hedefe link verilmez.
- Tam eşleşen spam anchor tekrarı yapılmaz; bağlamsal ve doğal cümle içi linkler kullanılır.
- Her bilgi rehberinde en fazla 1 ticari para sayfasına (`P1`, `P2`, `P3`, `P4`, `P5`) doğal geçiş CTA'sı yerleştirilir.
- Header ve menülere tek bir link dahi eklenmez.

---

## 5. TEST, DERLEME VE YAYIN KONTROLÜ

Her güncelleme sonrasında:
1. `npx tsc --noEmit` ile TypeScript derleme doğrulaması.
2. `npm run build` ile Vite ve prerender retrieval kontrolü.
3. Git commit: Türkçe, profesyonel formatta (`feat: ...`, `fix: ...`, `docs: ...`) ve uzak sunucuya otomatik senkronizasyon.
