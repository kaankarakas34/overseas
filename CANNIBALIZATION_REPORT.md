# OVERSEAS.MARKETING — ANAHTAR KELİME KANİBALİZASYON VE NİYET AYRIŞTIRMA RAPORU
**Tarih:** 19 Ekim 2026  
**Kapsam:** 53 GSC Sorgusu, Mevcut 128 Rehber Envanteri ve Ticari Sayfalar

---

## 1. YÜRÜTME ÖZETİ VE RİSK TESPİTİ

Yapılan derin envanter denetiminde sitede aynı arama niyetine (Search Intent) hitap eden, birbirinin arama sonuçlarındaki sıralamasını bölen ve Google nezdinde otorite kaybına yol açan 4 ana kanibalizasyon kümesi tespit edilmiştir:
1. **Yetki Belgesi Kümeleri (7 Rakip URL):** `/saglik-turizmi-yetki-belgesi` (K026), `/saglik-turizmi-yetki-belgesi/nasil-alinir` (K027), `/saglik-turizmi-yetki-belgesi/sartlari` (K028), `/uluslararasi-saglik-turizmi-yetki-belgesi` (K029), `/uluslararasi-saglik-turizmi-yetki-belgesi/nasil-alinir` (K030), `/saglik-bakanligi-saglik-turizmi-yetki-belgesi` (K031), `/saglik-turizmi-belgesi` (K032).
2. **Antalya Ekosistemi ve Ticari Sayfa Rekabeti:** P1 ticari landing (`/antalya-saglik-turizmi-reklam-ajansi`) ile bilgilendirici rehberlerin (`/antalya-saglik-turizmi`, `/antalya-saglik-turizmi/acentalari`) sınırlarının belirsizliği.
3. **Aracı Kuruluş ve Acente Ayrımı:** P2 ticari B2B sayfası (`/saglik-turizmi-araci-kurulus-pazarlama`) ile kuruluş rehberlerinin (`/saglik-turizmi-acentesi-acmak`, `/saglik-turizmi/acentalari`) birbirini tekrar etmesi.
4. **Pazarlama ve Performans Ölçümü:** Ticari servis sayfası P3 (`/hizmetler/performans-pazarlama`) ile blog rehberleri arasındaki ayrımın netleştirilmesi.

---

## 2. KANİBALİZASYON KÜMELERİ VE ÇÖZÜM MATRİSİ

### Küme 1: Yetki Belgesi ve Başvuru Sorguları (P0 / B01)
*İlgili Sorgular:* 9, 10, 11, 12, 22, 23, 34, 39, 40, 51, 53.

| URL | Mevcut Durum | Kanibalizasyon Riski | Karar / Çözüm Stratejisi |
|---|---|---|---|
| `/saglik-turizmi-yetki-belgesi` (K026) | Zayıf şablon içerik (~180 kelime) | YÜKSEK | **MASTER HUB (B01):** 2026 Resmî Yönetmelik (26.04.2025 md. 4-9) doğrultusunda tek büyük yetki otorite rehberi olarak baştan sona güncellenecek. |
| `/saglik-turizmi-yetki-belgesi/nasil-alinir` (K027) | Zayıf şablon içerik | KRİTİK | **KONSOLİDE ET:** Ayrı sayfa olarak Google'da K026 ile yarışması engellenecek. İçerik ve süreç adımları K026 ana rehberi H2'sine taşınacak. |
| `/uluslararasi-saglik-turizmi-yetki-belgesi` (K029) | Zayıf şablon içerik | KRİTİK | **KONSOLİDE ET:** Terim farkı K026 içinde doğal semantik varyasyon olarak işlenecek. |
| `/uluslararasi-saglik-turizmi-yetki-belgesi/nasil-alinir` (K030) | Zayıf şablon içerik | KRİTİK | **KONSOLİDE ET:** K026 Master Hub'a yönlendirilecek. |
| `/saglik-turizmi-belgesi` (K032) | Zayıf şablon içerik | ORTA | **KONSOLİDE ET:** "Yetki Belgesi vs Belge" kavramı K026 ve B10 (Sertifika farkı) içinde çözülecek. |
| `/saglik-turizmi-yetki-belgesi/sartlari` (K028) | Zayıf şablon içerik | ORTA | **B03 ŞARTLAR ALT SAYFASI:** Klinik ve aracı kuruluş şartlar matrisi olarak K026'ya bağlı alt otorite sayfası olarak tutulacak. |
| `/saglik-bakanligi-saglik-turizmi-yetki-belgesi` (K031) | Zayıf şablon içerik | ORTA | **B09 BAKANLIK MEVZUATI:** 12 Kasım 2025 tanıtım ve 26 Nisan 2025 sağlık turizmi yönetmeliklerinin Bakanlık denetim çerçevesi olarak konumlandırılacak. |

---

### Küme 2: Antalya Ticari Landing vs Bilgi İçerikleri (P1 / B13 / B14 / B15 / B16)
*İlgili Sorgular:* 1, 2, 3, 4, 5, 6, 13, 19.

| Kod | URL | Arama Niyeti | Kanibalizasyon Önleme Kuralı |
|---|---|---|---|
| **P1** | `/antalya-saglik-turizmi-reklam-ajansi` | Ticari (Ajans Arayışı) | **Asla "Antalya sağlık turizmi ajansı" isimli yeni bir blog açılmayacak.** P1 tek ticari landing olarak kalacak. Antalya dental & estetik vaka kurguları, hedef ülke araştırması ve mevzuat sınırları landing gövdesine eklenecek. |
| **B13** | `/antalya-saglik-turizmi` (K061) | Bilgilendirici (Ekosistem) | Antalya'nın direkt uçuşları, iklim avantajı, branş dağılımı ve pazar yapısı anlatılacak. Ticari talep için tek doğal linkle P1'e bağlanacak. |
| **B14** | `/antalya-saglik-turizmi/acentalari` (K063) | Liste & Doğrulama | Resmî USHAŞ/HealthTürkiye yetkili aracı kuruluş listesi doğrulama yöntemleri anlatılacak. Overseas kendisini acente listesine eklemeyecek. P2 ve B02'ye bağlanacak. |
| **B15** | `/blog/antalya-saglik-turizmi-danismanligi` | Bilgilendirici Danışmanlık | Hukuki/ruhsat danışmanlığı ile operasyon ve pazarlama danışmanlığı ayrılacak. P1 ticari landing'i ile çatışmadan P1'e B2B pas atılacak. |
| **B16** | `/blog/antalya-saglik-turizmi-web-sitesi` | Teknik Bilgilendirici | Çok dilli web sitesi, mobil hız, KVKK uyumlu hasta formları ve uluslararası SEO kontrol listesi verilecek. P1 ve P4'e bağlanacak. |

---

### Küme 3: Aracı Kuruluş B2B Sayfası vs Acente Açma Rehberi (P2 / B02 / B05 / B17)
*İlgili Sorgular:* 7, 14, 15, 16, 17, 18, 20, 21, 45, 46, 49.

| Kod | URL | Niyet ve Rol | Kanibalizasyon Önleme Kuralı |
|---|---|---|---|
| **P2** | `/saglik-turizmi-araci-kurulus-pazarlama` | Ticari B2B (Acente Pazarlama) | **Overseas kendisi sağlık turizmi aracı kuruluşu veya seyahat acentesi değildir.** Yetkili aracı kuruluşlara çok dilli reklam, CRM ve hasta büyüme danışmanlığı sunar. Bilgi sorguları için B02 ve B05'e link verir. |
| **B02** | `/blog/saglik-turizmi-araci-kurulus-yetki-belgesi` | Mevzuat (Aracı Belgesi) | USHAŞ yetki belgesi şartları, EK-1/B evrakları ve 7/24 çok dilli çağrı merkezi yükümlülükleri anlatılır. |
| **B05** | `/saglik-turizmi-acentesi-acmak` (K018) | Kuruluş Rehberi (Adım Adım) | Şirket kuruluşu, TÜRSAB A grubu seyahat acentesi işletme belgesi ile USHAŞ sağlık turizmi yetkisi arasındaki fark adım adım açıklanır. |
| **B06** | `/blog/tursab-saglik-turizmi-belgesi-farki` | Kavram Yanılgısı Giderme | "TÜRSAB sağlık turizmi belgesi verir mi?" sorusu yanıtlanır; KTB seyahat yetkisi ile Sağlık Bakanlığı/USHAŞ yetkisi karşılaştırılır. |
| **B17** | `/blog/turkiyede-saglik-turizmi-yapan-acentalar` | Liste / Doğrulama | Resmî kayıt sorgulama adımları; iddia ve sahte sıralama yapılmaz. |

---

### Küme 4: Pazarlama Stratejisi vs Performans Reklamcılığı (P3 / B18 / B19 / K091)
*İlgili Sorgular:* 29, 30.

| Kod | URL | Kapsam | Ayrım Kriteri |
|---|---|---|---|
| **P3** | `/hizmetler/performans-pazarlama` | Ticari Hizmet Sayfası | Google Ads & Meta kampanya yönetimi hizmet teklifi. |
| **B18** | `/blog/saglik-turizmi-pazarlamasi-nasil-yapilir` (K089) | Bütünsel Strateji (TOFU/MOFU) | Pazar araştırması, SEO, GEO, reklam ve CRM entegrasyonu genel çerçevesi. |
| **B19** | `/blog/saglik-turizmi-performans-pazarlama` | Taktiksel Ölçüm & Kampanya | CPL, CAC, MQL/SQL metrikleri, negatif kelimeler, bütçe matematik modeli. |
| **K091** | `/blog/saglik-turizminde-hasta-kazanma-maliyeti` | Maliyet Hesaplama Rehberi | Kohort takibi, tam CAC formülü, harcama kalemleri analizi. |

---

## 3. UYGULAMA KURALLARI VE CANONICAL HİYERARŞİSİ

1. **Tek Birincil Canonical Kuralı:** 53 sorgudan her biri yalnızca TEK BİR canonical hedefe yönlendirilir. Aynı sorgu varyasyonları farklı alt başlıklar (H2/H3) ve FAQ içinde doğal olarak eritilir.
2. **Körlemesine Yeni Sayfa Yasağı:** Mevcut envanterde URL'si bulunan konular için asla yeni URL türetilmez; mevcut URL güncellenir.
3. **İç Link Gücü:** Zayıf veya birleştirilen sayfalar, iç link matrisiyle Master Hub sayfalara (`B01`, `P1`, `P2`, `P3`) otorite aktaracak şekilde yapılandırılır.
