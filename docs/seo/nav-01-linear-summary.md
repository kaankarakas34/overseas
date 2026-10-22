# NAV-01 — URL ve sayfa rolü sınıflandırması

Tarih: 11 Ekim 2026. Durum: Kod/sitemap tabanlı ön çalışma; GSC doğrulaması bekleniyor.

## Kullanıcı kuralı

Yeni sayfa oluşturulabilir. Header'a yeni hizmet eklenmesi, veri listesi üzerinden dolaylı ekleme dahil, önceden açık kullanıcı onayı gerektirir. Header'a şu anda hiçbir şey eklenmeyecek. NAV-01 dışındaki görevler kullanıcı “devam” demeden başlamayacak.

## Kanıt ve sınırlar

Kaynaklar: App.tsx route'ları, MASTER_SERVICES/BRANCHES/MARKETS/CITIES, SEO_ARTICLES, DOCTOR_ARTICLES ve public/sitemap.xml. Site ana sayfasının sunucu tarafından sunulan metni de 11 Ekim 2026'da kontrol edildi: https://www.overseas.marketing/. Bu tam bir canlı crawl, render veya GSC indeks denetimi değildir. Rol ve kelime önerileri kaynak içeriklerinden yapılan çıkarımlardır; arama hacmi veya GSC verisi değildir.

233 URL; 14 hizmet kaydı; 17 hizmet alias route'u; 15 branş, 4 pazar, 4 şehir kaydı; 151 rehber kaydı. Sitemap: 217 kayıt / 216 tekil URL. İncelenmeli rolü: 0. Bu sayılar yerel çalışma ağacına aittir; Google indeks sayısı değildir.

## Hizmet URL karar tablosu

| URL | Rol | Ana niyet / kelime | Üst merkez | Link konumu |
| --- | --- | --- | --- | --- |
| /hizmetler/geo-generative-engine-optimization | Ana hizmet merkezi | GEO ve AI görünürlüğü hizmeti; GEO ajansı, sağlık turizmi GEO | /hizmetler [öneri; mevcut değil] | Hizmet merkezi; header kararı ayrı/onay gerekli |
| /hizmetler/icerik-produksiyon | Alt içerik hizmeti | Video ve prodüksiyon hizmeti; sağlık turizmi içerik prodüksiyon, doktor video çekimi | İçerik & Marka [gruplama önerisi; merkez URL kararı NAV-02] | İçerik merkezi + bağlamsal |
| /hizmetler/performans-pazarlama | Ana hizmet merkezi | Performans reklam yönetimi; sağlık turizmi reklam yönetimi, sağlık turizmi performans pazarlama | /hizmetler [öneri; mevcut değil] | Hizmet merkezi; header kararı ayrı/onay gerekli |
| /hizmetler/saglik-turizmi-crm-yazilimi | Ana teknoloji hizmeti | CRM ve lead takibi; sağlık turizmi CRM, hasta takip sistemi | CRM & Otomasyon [gruplama önerisi; merkez URL kararı NAV-02] | Teknoloji merkezi + bağlamsal |
| /hizmetler/saglik-turizmi-dijital-pazarlama | Entegre çözüm / alt hizmet (geçici) | Entegre dijital büyüme hizmeti; sağlık turizmi dijital pazarlama | /hizmetler [öneri; mevcut değil] | Merkez + bağlamsal |
| /hizmetler/saglik-turizmi-google-ads | Alt hizmet | Google Ads yönetimi; sağlık turizmi Google Ads | /hizmetler/performans-pazarlama | Merkez + rehber/branş/ülke |
| /hizmetler/saglik-turizmi-landing-page | Alt hizmet | Landing page tasarımı; sağlık turizmi landing page | /hizmetler/web-sitesi-landing-page | Merkez + bağlamsal |
| /hizmetler/saglik-turizmi-meta-reklamlari | Alt hizmet | Meta reklam yönetimi; sağlık turizmi Meta reklamları, Instagram reklam yönetimi | /hizmetler/performans-pazarlama | Merkez + rehber/branş/ülke |
| /hizmetler/saglik-turizmi-reklam-ajansi | Ana ticari giriş (örtüşme adayı) | Ajans seçimi; sağlık turizmi reklam ajansı | / | Merkez + bağlamsal; header için yeni ekleme yok |
| /hizmetler/sosyal-medya-yonetimi | Alt içerik hizmeti | Sosyal medya yönetimi; sağlık turizmi sosyal medya yönetimi | İçerik & Marka [gruplama önerisi; merkez URL kararı NAV-02] | İçerik merkezi + bağlamsal |
| /hizmetler/uluslararasi-hasta-kazanimi | Entegre çözüm / alt hizmet (geçici) | Hasta edinimi ve satış hunisi hizmeti; uluslararası hasta kazanımı, yabancı hasta kazanımı | /hizmetler [öneri; mevcut değil] | Merkez + branş/ülke + bağlamsal |
| /hizmetler/uluslararasi-seo-hizmeti | Ana hizmet merkezi | Uluslararası SEO hizmeti; uluslararası SEO, yurtdışı SEO, sağlık turizmi SEO | /hizmetler [öneri; mevcut değil] | Hizmet merkezi; header kararı ayrı/onay gerekli |
| /hizmetler/web-sitesi-landing-page | Ana hizmet merkezi | Web sitesi ve dönüşüm tasarımı; sağlık turizmi web tasarım, klinik web sitesi | /hizmetler [öneri; mevcut değil] | Hizmet merkezi; header kararı ayrı/onay gerekli |
| /hizmetler/yapay-zeka-otomasyon | Alt teknoloji hizmeti | AI Call Agent ve otomasyon; AI Call Agent, sağlık turizmi otomasyon | CRM & Otomasyon [gruplama önerisi; merkez URL kararı NAV-02] | Teknoloji merkezi + bağlamsal |

## Kapsam örtüşmesi kararları

- Ana sayfa ve Sağlık Turizmi Reklam Ajansı: İkisinde de ajans seçimi ve entegre hasta kazanımı kapsamı var. Ana sayfa marka/ajans girişidir; hizmet sayfasını B2B hizmet kapsamı, süreç ve vaka kanıtıyla farklılaştırma adayı olarak koru. Birleşme kararı GSC sonrası.
- Dijital Pazarlama: Reklam, SEO, GEO, web ve CRM'yi birlikte anlattığı için ana sayfa/ajans sayfasıyla örtüşme riski var. Entegre büyüme stratejisi kapsamına daraltma önerisi; kesin ayrım veya birleşme GSC sonrası.
- Uluslararası Hasta Kazanımı: Dil yerelleştirme, yanıt süresi, satış hunisi ve CRM operasyonu vurgusu ayrı niyet potansiyeli taşır. Hasta edinimi süreci odağında koruma önerisi; header'a yeni üst hizmet ekleme önerisi uygulanmadı.
- Reklam Yönetimi / Performans Pazarlama: MASTER_SERVICES içinde performans-pazarlama kaydının başlığı Sağlık Turizmi Reklam Yönetimi. İki farklı ana hizmet kaydı değil; bu URL reklam ailesinin mevcut merkezi adayıdır. Google Ads ve Meta sayfalarını alt hizmet olarak değerlendir.
- Web & Landing Page ile Sağlık Turizmi Landing Page: İlki web/dönüşüm merkezi, ikincisi kampanya açılış sayfası alt hizmeti adayıdır. Otomatik birleştirme yok.
- Kök hizmet alias'ları aynı ServicePageWrapper bileşenine ve /hizmetler/ canonical hedeflerine bağlı. Bu kaynak kod bulgusudur; canlı canonical ve GSC seçilen URL doğrulanmadan yeni yönlendirme yapılmaz.

## Menü ile içerik kararının ayrılması

Menü: Yeni hizmet ekleme yok; mevcut Navbar.tsx değişmedi. MASTER_SERVICES.map mevcut 14 kaydı masaüstü ve mobilde gösteriyor; “8 Temel Büyüme Hizmeti” metni kayıt sayısıyla uyuşmuyor. Bu bir NAV-04 inceleme bulgusudur, bu görevde düzeltilmedi.

İçerik: Tüm mevcut URL'ler korunuyor. Üst merkez sütunundaki /hizmetler ve grup adları mimari öneridir; yeni sayfa veya NAV-02 çıktısı olarak uygulanmadı. /sektorler, /ulkeler ve /blog zaten route olarak mevcut. Sırf menü için URL taşıma/301/canonical değişikliği yapılmadı.

## Açık kabul kriterleri

- GSC son 3/16 ay sorgu–URL eşlemesi, gösterim, tıklama, CTR, pozisyon ve mümkünse ülke/cihaz verisi.
- Sitemap ve kaynak verisindeki URL'lerin canlı canonical/indeks durumunu GSC ile doğrulama. Sitemap'te /doktor-reklam-ajansi iki kez yer alıyor; TECH-01 için bulgu, bu görevde değiştirilmedi.
- GSC sonuçlarıyla geçici niyet/rol/koruma kararlarının kesinleştirilmesi. TECH-01 ve TECH-06 tamamlandı olarak işaretlenmedi; NAV-01 de Done değildir.

