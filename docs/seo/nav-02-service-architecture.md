# NAV-02 — Altı hizmet ailesi ve merkez–alt hizmet ağacı

Tarih: 11 Ekim 2026. Çıktı: Mimari ve içerik brief’i. Sayfa, route veya header uygulaması bu görevin kapsamında yapılmadı.

## Kurallar ve veri sınırı

- Yeni hizmet eklemek için açık kullanıcı onayı gerekir; bu görev header veya MASTER_SERVICES değiştirmez.
- NAV-01 GSC doğrulaması açık. Rol ve içerik kararları kaynak koduna dayalı geçici mimaridir; birleşme/301/canonical kararı uygulanmaz.
- Yeni merkezler yalnızca öneridir. Hizmet ailelerinin tanımı başlık veya kelime varyasyonları için ayrı sayfa üretmez.
- Aşağıdaki kanıt alanları toplanacak/yayın öncesi doğrulanacak materyallerdir; mevcut başarı sonuçları veya izinler varsayılmaz.
- CTA metinleri içerik brief'idir. Uygulamada mevcut onOpenConsultation akışı kullanılabilir; hizmet bağlamı forma/CRM'e aktarılıp doğrulanmalıdır.

Kaynaklar: NAV-01 envanteri, src/data/masterPlanData.ts, src/App.tsx, ServiceDetailPage.tsx ve DoctorBrandingPage.tsx. Analiz yerel kaynaklara dayanır; canlı trafik veya arama hacmi iddiası içermez.

## Ana ağaç

Ana Sayfa → /hizmetler (yeni merkez önerisi; NAV-03)

| Aile | Merkez URL | Durum | Alt hizmetler / kapsam bölümleri |
| --- | --- | --- | --- |
| Performans Pazarlama | /hizmetler/performans-pazarlama | Mevcut URL korunur | /hizmetler/saglik-turizmi-google-ads<br>/hizmetler/saglik-turizmi-meta-reklamlari |
| Uluslararası SEO | /hizmetler/uluslararasi-seo-hizmeti | Mevcut URL korunur | Sağlık turizmi SEO (aynı merkezde bölüm)<br>Teknik SEO (aynı merkezde bölüm)<br>Çok dilli SEO (aynı merkezde bölüm) |
| GEO & AI Görünürlüğü | /hizmetler/geo-generative-engine-optimization | Mevcut URL korunur | ChatGPT / Gemini görünürlüğü (aynı merkezde bölüm)<br>AI Search stratejileri (aynı merkezde bölüm) |
| Web & Landing Page | /hizmetler/web-sitesi-landing-page | Mevcut URL korunur | /hizmetler/saglik-turizmi-landing-page<br>Sağlık turizmi web tasarımı (aynı merkezde bölüm) |
| CRM & Otomasyon | /hizmetler/crm-otomasyon | Yeni merkez önerisi; oluşturulmadı | /hizmetler/saglik-turizmi-crm-yazilimi<br>/hizmetler/yapay-zeka-otomasyon |
| İçerik & Marka | /hizmetler/icerik-marka-yonetimi | Yeni merkez önerisi; oluşturulmadı | /hizmetler/sosyal-medya-yonetimi<br>/hizmetler/icerik-produksiyon<br>/doktor-marka-yonetimi |

## Performans Pazarlama

Merkez: /hizmetler/performans-pazarlama

Özgün kapsam: Çok kanallı reklam bütçesi, hedef ülke/branş, kampanya koordinasyonu ve CRM ile nitelikli başvuru ölçümü. Sağlık Turizmi Reklam Yönetimi aynı mevcut merkez kaydıdır; ikinci bir merkez veya alt URL açılmaz.

Toplanacak kanıt: Anonimleştirilmiş medya planı, kanal bazlı CPL/nitelikli lead raporu, ölçüm yöntemi ve izinli reklam vaka örneği.

Önerilen CTA: Reklam büyüme planınızı görüşelim

### /hizmetler/saglik-turizmi-google-ads

Üst merkez: /hizmetler/performans-pazarlama. Mevcut URL korunur.

Özgün kapsam: Arama niyeti, hesap mimarisi, negatif kelimeler, hedef ülke/dil, offline dönüşüm ve reklam politikası kontrol süreci.

Toplanacak kanıt: İzinli/anonim arama terimleri örneği, negatif liste ve dönüşüm eşleme örneği; tarihlenmiş politika incelemesi.

Önerilen CTA: Google Ads hesabınızı değerlendirelim

### /hizmetler/saglik-turizmi-meta-reklamlari

Üst merkez: /hizmetler/performans-pazarlama. Mevcut URL korunur.

Özgün kapsam: Video kreatif, hedef kitle, form/WhatsApp akışı, kreatif testleri ve lead kalitesi; organik sosyal medya yönetiminden ayrılır.

Toplanacak kanıt: İzinli kreatif test matrisi, nitelikli lead karşılaştırması ve kaynak/örneklem açıklaması.

Önerilen CTA: Meta reklam ve lead kalitesi analizi alın

İlgili aileler: Web & Landing Page, CRM & Otomasyon, İçerik & Marka.

## Uluslararası SEO

Merkez: /hizmetler/uluslararasi-seo-hizmeti

Özgün kapsam: Hedef ülke/dil arama niyeti, teknik erişim, yerelleştirme, içerik kümeleri, organik görünürlük ve nitelikli dönüşüm. AI yanıt görünürlüğü yöntemi GEO merkezine bağlanır.

Toplanacak kanıt: Örnek sorgu–URL haritası, teknik denetim, hreflang matrisi ve tarih/aralık belirten izinli GSC/CRM vaka raporu.

Önerilen CTA: Uluslararası SEO fırsatlarınızı değerlendirelim

### Kapsam bölümü: Sağlık turizmi SEO

Klinik ve hastanelerde ülke/branş niyeti ve hasta kazanımı; mevcut /saglik-turizmi-seo route'u aynı hizmet bileşenini kullanır.

URL kararı: Mevcut SEO merkezinde bölüm. /saglik-turizmi-seo ayrı özgün hizmet sayfası kabul edilmez; alias olarak kaydedilir. Ayrı sayfa ancak GSC/SERP ayrışması ve özgün kanıtla değerlendirilir.

### Kapsam bölümü: Teknik SEO

Taranabilirlik, indeks, canonical, performans ve yapılandırılmış veri.

URL kararı: Mevcut merkezin teknik süreç bölümü; yeni URL yok.

### Kapsam bölümü: Çok dilli SEO

Dil/ülke eşleşmesi, hreflang, URL stratejisi ve gerçek yerelleştirme.

URL kararı: Mevcut merkezin uluslararası süreç bölümü; yeni URL yok.

İlgili aileler: GEO & AI Görünürlüğü, Web & Landing Page, İçerik & Marka.

## GEO & AI Görünürlüğü

Merkez: /hizmetler/geo-generative-engine-optimization

Özgün kapsam: AI sorgu envanteri, entity/kaynak tutarlılığı, erişilebilirlik, alıntılanabilir içerik ve tekrarlanabilir AI görünürlük ölçümü. SEO sıralama hizmetiyle kopya kapsam oluşturmaz.

Toplanacak kanıt: Tarihli prompt seti, motor/oturum/pazar yöntemi, mention/citation/entity benchmark'ı ve örneklem sınırları.

Önerilen CTA: AI görünürlük başlangıç analizinizi planlayalım

### Kapsam bölümü: ChatGPT / Gemini görünürlüğü

Motor bazında marka tanımı, mention ve citation gözlemleri.

URL kararı: Mevcut GEO sayfasındaki ölçüm bölümü; platform başına ayrı kopya URL yok.

### Kapsam bölümü: AI Search stratejileri

Soru niyeti, özgün kanıt, entity, dijital PR ve periyodik karşılaştırma.

URL kararı: Mevcut GEO strateji bölümü. Görünürlük veya hasta garantisi verilmeyecek.

İlgili aileler: Uluslararası SEO, İçerik & Marka.

## Web & Landing Page

Merkez: /hizmetler/web-sitesi-landing-page

Özgün kapsam: Kurumsal çok dilli web sitesi, hizmet/içerik mimarisi, güven unsurları, kullanılabilirlik, ölçüm ve CRM bağlantısı.

Toplanacak kanıt: İzinli ekran/akış örnekleri, dil matrisi, mobil performans ölçümü ve dönüşüm olay planı.

Önerilen CTA: Web sitesi ve dönüşüm ihtiyaçlarınızı görüşelim

### /hizmetler/saglik-turizmi-landing-page

Üst merkez: /hizmetler/web-sitesi-landing-page. Mevcut URL korunur.

Özgün kapsam: Tek kampanya veya branş için açılış sayfası, mobil form/WhatsApp akışı, mesaj uyumu ve CRO deneyleri; kurumsal site kapsamının tamamını tekrar etmez.

Toplanacak kanıt: Anonimleştirilmiş wireframe, form hunisi ve başlangıç/değişiklik/değerlendirme koşulu belirtilmiş test örneği.

Önerilen CTA: Kampanyanız için landing page brief'i hazırlayalım

### Kapsam bölümü: Sağlık turizmi web tasarımı

Çok dilli klinik/hastane kurumsal sitesi ve bilgi mimarisi.

URL kararı: Mevcut merkezde bölüm; /saglik-turizmi-web-tasarim aynı bileşene bağlı alias, yeni alt hizmet sayfası değildir.

İlgili aileler: Performans Pazarlama, Uluslararası SEO, CRM & Otomasyon.

## CRM & Otomasyon

Merkez: /hizmetler/crm-otomasyon

Özgün kapsam: Başvurudan satış fırsatına operasyon akışı, CRM–AI veri geçişi, görev/randevu takibi ve insan devri. CRM yazılımının modüllerini veya AI ürününün senaryolarını tümüyle kopyalamaz.

Toplanacak kanıt: Anonim veri akış şeması, CRM/AI entegrasyon örneği, insan devri ve lead durum geçişleri.

Önerilen CTA: Hasta iletişim ve takip akışınızı değerlendirelim

### /hizmetler/saglik-turizmi-crm-yazilimi

Üst merkez: /hizmetler/crm-otomasyon. Mevcut URL korunur.

Özgün kapsam: CRM modülleri, çok dilli lead kayıtları, teklif/satış takibi, ekip görevleri ve kaynak ilişkilendirmesi.

Toplanacak kanıt: İzinli/anonim gerçek ürün ekranı, lead durum örneği, rol/erişim ve attribution akışı.

Önerilen CTA: CRM demo ve ihtiyaç görüşmesi planlayın

### /hizmetler/yapay-zeka-otomasyon

Üst merkez: /hizmetler/crm-otomasyon. Mevcut URL korunur.

Özgün kapsam: AI Call Agent, WhatsApp/chat karşılama, CRM kayıtları, senaryo sınırları ve insan denetimi.

Toplanacak kanıt: Sentetik/izinli demo senaryosu, test logları, insan devri ve veri işleme sınırları.

Önerilen CTA: AI Agent demo senaryonuzu planlayalım

İlgili aileler: Performans Pazarlama, Web & Landing Page.

## İçerik & Marka

Merkez: /hizmetler/icerik-marka-yonetimi

Özgün kapsam: Marka konumlandırma, editoryal yön, sosyal yayın ve prodüksiyonun birbiriyle ilişkisi. Ücretli Meta kampanya yönetimi Performans Pazarlama altında kalır.

Toplanacak kanıt: İzinli marka/içerik brief'i, kanal planı, onay süreci ve farklı formatlarda örnek teslimler.

Önerilen CTA: İçerik ve marka yol haritanızı görüşelim

### /hizmetler/sosyal-medya-yonetimi

Üst merkez: /hizmetler/icerik-marka-yonetimi. Mevcut URL korunur.

Özgün kapsam: Organik yayın takvimi, yerelleştirme, topluluk yönetimi ve içerik onayı; reklam satın alma kapsamı değildir.

Toplanacak kanıt: İzinli yayın takvimi ve onay akışı, dönem tanımlı organik etkileşim/lead raporu.

Önerilen CTA: Sosyal medya içerik planınızı değerlendirelim

### /hizmetler/icerik-produksiyon

Üst merkez: /hizmetler/icerik-marka-yonetimi. Mevcut URL korunur.

Özgün kapsam: Çekim, hekim röportajı, senaryo, kurgu, altyazı ve platform formatları; yayın yönetiminden ayrı üretim teslimleri.

Toplanacak kanıt: İzinli reel/portfolio, çekim brief'i, teslim formatı ve kullanım izni kaydı.

Önerilen CTA: Prodüksiyon brief'inizi görüşelim

### /doktor-marka-yonetimi

Üst merkez: /hizmetler/icerik-marka-yonetimi. Mevcut URL korunur.

Özgün kapsam: Hekim konumlandırması, biyografi, itibar ve uzmanlık anlatımı; doktor reklam ajansı branş sayfasından ayrı danışmanlık kapsamı.

Toplanacak kanıt: İzinli hekim profil/marka çalışması, doğrulanmış unvanlar ve editoryal onay süreci.

Önerilen CTA: Doktor marka stratejisi görüşmesi planlayın

İlgili aileler: Performans Pazarlama, Uluslararası SEO, GEO & AI Görünürlüğü.

## Aileler arası çözüm sayfaları

Bu üç sayfa yedinci hizmet ailesi veya yeni header öğesi değildir. Mevcut URL’leri koruyarak ilgili aile merkezlerine bağlanır; kesin farklılaştırma/birleştirme NAV-01 GSC doğrulaması ve NAV-10 kapsamında değerlendirilir.

### /hizmetler/saglik-turizmi-reklam-ajansi

Ajans seçimi ve hizmet kapsamı. Ana sayfa ile örtüşme GSC sonrası değerlendirilecek.

İlgili aileler: Performans Pazarlama, Uluslararası SEO, GEO & AI Görünürlüğü, Web & Landing Page, CRM & Otomasyon, İçerik & Marka.

Kanıt: İzinli çok hizmetli vaka, ekip ve süreç kanıtı. CTA: Ajans ihtiyaçlarınızı görüşelim.

### /hizmetler/saglik-turizmi-dijital-pazarlama

Kanalların birlikte büyüme stratejisi; her hizmet sayfasının içeriğini tekrarlamaz.

İlgili aileler: Performans Pazarlama, Uluslararası SEO, GEO & AI Görünürlüğü, Web & Landing Page, CRM & Otomasyon, İçerik & Marka.

Kanıt: Kanal katkı ve ölçüm planı; izinli entegre vaka. CTA: Entegre büyüme planınızı görüşelim.

### /hizmetler/uluslararasi-hasta-kazanimi

Hasta yolculuğu, satış hunisi, yanıt süresi ve çok dilli operasyon. Tedavi sunucusu rolü üstlenmez.

İlgili aileler: Performans Pazarlama, Web & Landing Page, CRM & Otomasyon.

Kanıt: Anonimleştirilmiş hasta adayı takip hunisi ve yöntem açıklaması. CTA: Hasta kazanım huninizi değerlendirelim.

## Alternatif hizmet adresleri

Aşağıdaki kök adresler App.tsx içinde aynı ServicePageWrapper bileşenine bağlıdır. Ayrı alt hizmet gibi sayılmaz. Canonical hedefi kaynak koddan türetilmiştir; bu görevde canlı/GSC doğrulaması veya yönlendirme yapılmadı.

| Alternatif adres | Mevcut hizmet hedefi |
| --- | --- |
| /saglik-reklam-ajansi | /hizmetler/saglik-turizmi-reklam-ajansi |
| /saglik-turizmi-crm | /hizmetler/saglik-turizmi-crm-yazilimi |
| /saglik-turizmi-dijital-pazarlama | /hizmetler/saglik-turizmi-dijital-pazarlama |
| /saglik-turizmi-geo | /hizmetler/geo-generative-engine-optimization |
| /saglik-turizmi-google-ads | /hizmetler/saglik-turizmi-google-ads |
| /saglik-turizmi-icerik-pazarlamasi | /hizmetler/icerik-produksiyon |
| /saglik-turizmi-landing-page | /hizmetler/saglik-turizmi-landing-page |
| /saglik-turizmi-meta-ads | /hizmetler/saglik-turizmi-meta-reklamlari |
| /saglik-turizmi-meta-reklamlari | /hizmetler/saglik-turizmi-meta-reklamlari |
| /saglik-turizmi-otomasyon | /hizmetler/yapay-zeka-otomasyon |
| /saglik-turizmi-performans-pazarlama | /hizmetler/performans-pazarlama |
| /saglik-turizmi-reklam-ajansi | /hizmetler/saglik-turizmi-reklam-ajansi |
| /saglik-turizmi-seo | /hizmetler/uluslararasi-seo-hizmeti |
| /saglik-turizmi-sosyal-medya-yonetimi | /hizmetler/sosyal-medya-yonetimi |
| /saglik-turizmi-web-tasarim | /hizmetler/web-sitesi-landing-page |
| /saglik-turizminde-yapay-zeka | /hizmetler/yapay-zeka-otomasyon |
| /uluslararasi-hasta-kazanimi | /hizmetler/uluslararasi-hasta-kazanimi |

## Uygulama sırası ve kabul

- NAV-02 çıktısı altı ailenin tanımıdır; yeni sayfa uygulaması başlatılmadı.
- NAV-03 /hizmetler merkezini bu ağaca göre hazırlayabilir. Önerilen iki yeni aile merkezi ayrıca açıkça “oluşturulmadı” olarak işaretlenir; boş hedeflere link yayınlanmaz.
- NAV-05/06 mevcut /sektorler ve /ulkeler merkezlerini ayrıca ele alır; branş/ülke sayfaları hizmet ailesine dönüştürülmez.
- NAV-07 çift yönlü hub–alt hizmet linkleri, ilgili rehber ve branş/pazar ilişkilerini uygular. NAV-08 breadcrumb hiyerarşisini aynı ağaçtan üretir.
- Header veya MASTER_SERVICES değişikliği için ayrıca kullanıcı onayı gereklidir; NAV-04 otomatik başlatılmaz.
- SEO alt niyetleri ve GEO motorları mevcut sayfalarda kapsam bölümü olarak eşlendi. Ayrı URL için kanıt olmadığından şu anda yeni alt sayfa üretim kararı verilmedi; GSC/SERP verisi gelince yeniden değerlendirilecek.

Doğrulama: Altı tekil aile; dört mevcut merkez, iki önerilen merkez; sekiz mevcut alt hizmet; üç aileler arası çözüm. 14 MASTER_SERVICES kaydı ve doktor marka yönetimi kapsandı; 17 hizmet alias hedefi eşleşti. Kapsam/kanıt/CTA alanları ve URL varlık bilgileri doğrulandı.

NAV-01 ve GSC doğrulaması açık kalır. Kullanıcı “devam” demeden NAV-03’e geçilmez.
