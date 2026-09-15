import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('❌ dist/index.html bulunamadı! Önce vite build çalıştırın.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templatePath, 'utf-8');

// 27 Route definitions with rich static SEO content for non-JS bots (AI & Search Engines)
const ROUTES = [
  // 1. Ana Sayfa
  {
    path: '/',
    title: 'Sağlık Turizmi Reklam Ajansı | Overseas Marketing',
    description: 'Sağlık turizminde performans pazarlama, SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları. Büyümenizi birlikte planlayalım.',
    h1: 'Sağlık Turizminde Küresel Büyüme ve Hasta Edinimi',
    content: `
      <section>
        <h2>Sağlık Turizmi Dijital Büyüme Modeli</h2>
        <p>Overseas Marketing; sağlık turizminde klinik ve hekimlerin İngiltere, Almanya ve Avrupa pazarlarından sürdürülebilir yabancı hasta başvurusu elde etmesini sağlayan entegre performans pazarlama, uluslararası SEO, GEO ve yapay zekâ ajansıdır.</p>
        <p>Google Ads arama niyetleri, Meta video kreatifleri, çok dilli açılış sayfaları ve özel WhatsApp CRM altyapısı tek çatı altında sunulur.</p>
      </section>
    `
  },

  // 2. Doktor Marka Yönetimi
  {
    path: '/doktor-marka-yonetimi',
    title: 'Doktor Marka Yönetimi & Dijital İtibar | Overseas Marketing',
    description: 'Doktorlar için kişisel marka konumlama, dijital PR, uluslararası hasta görünürlüğü ve özel içerik yönetimi hizmetleri.',
    h1: 'Doktor Marka Yönetimi ve Uluslararası Dijital Otorite',
    content: `
      <section>
        <h2>Hekimler İçin E-E-A-T ve Dijital İtibar Mimarisi</h2>
        <p>Uluslararası sağlık turizminde hastalar kliniğe değil, hekime güvenir. Doktor marka yönetimi; hekimin bilimsel yetkinliğini, vaka başarılarını ve cerrahi uzmanlığını hedef ülkelerdeki hastaların dilinde dijital otoriteye dönüştürür.</p>
      </section>
    `
  },

  // 3. Hizmetler (8 Hizmet)
  {
    path: '/hizmetler/performans-pazarlama',
    title: 'Sağlık Turizmi Performans Pazarlama | Google Ads & Meta Reklamları',
    description: 'İngiltere, Almanya ve Avrupa hedefli çok dilli Google Ads ve Meta reklam yönetimi. Yüksek niyetli yabancı hasta kazanımı.',
    h1: 'Sağlık Turizmi Performans Pazarlama',
    content: `
      <section>
        <h2>Hedef Odaklı Uluslararası Reklam Yönetimi</h2>
        <p>Google Ads arama ağında yüksek tedavi niyetli sorgular (Search Intent) yakalanırken, Meta ve Instagram kanallarında estetik ve sağlık güvenini pekiştiren video kreatifler ile yabancı hasta talebi oluşturulur.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/uluslararasi-seo-hizmeti',
    title: 'Sağlık Turizmi Uluslararası SEO Hizmeti | Çok Dilli Organik Büyüme',
    description: 'İngilizce, Almanca ve hedef dillerde klinik ve doktorlar için uluslararası SEO mimarisi, teknik altyapı ve E-E-A-T içerik stratejisi.',
    h1: 'Uluslararası Sağlık Turizmi SEO Hizmeti',
    content: `
      <section>
        <h2>Çok Dilli Global Organik Büyüme</h2>
        <p>Klinik web sitenizi İngiltere, DACH ve Avrupa arama motorlarında üst sıralara taşıyan semantik içerik ve teknik SEO altyapısı kuruyoruz.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/geo-generative-engine-optimization',
    title: 'GEO - Generative Engine Optimization | Yapay Zekâ Arama Optimizasyonu',
    description: 'ChatGPT, Perplexity ve Google AI Overviews aramalarında kliniğinizin tavsiye edilmesini sağlayan yeni nesil GEO optimizasyonu.',
    h1: 'Generative Engine Optimization (GEO)',
    content: `
      <section>
        <h2>Yapay Zekâ Arama Motorlarında Kliniğinizi Kaynak Göstertin</h2>
        <p>Hastalar artık doğrudan ChatGPT ve Perplexity'ye 'Türkiye'de en iyi saç ekimi kliniği hangisi?' diye soruyor. GEO stratejimizle kliniğinizi yapay zekânın kaynak veri tabanına entegre ediyoruz.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/web-sitesi-landing-page',
    title: 'Sağlık Turizmi Web Sitesi & Landing Page Tasarımı | Dönüşüm Odaklı',
    description: 'Yabancı hastalar için özel tasarlanmış, çok dilli, hızlı ve yüksek dönüşüm oranlı sağlık turizmi açılış sayfaları.',
    h1: 'Sağlık Turizmi Web Sitesi ve Landing Page',
    content: `
      <section>
        <h2>Yabancı Hastayı Randevuya Dönüştüren Sayfalar</h2>
        <p>3 saniyenin altında açılan, güven unsurları ve hekim yetkinliğini öne çıkaran çok dilli landing page tasarımları.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/saglik-turizmi-crm-yazilimi',
    title: 'Sağlık Turizmi CRM Yazılımı | Çok Dilli Hasta Takip Sistemi',
    description: 'WhatsApp entegrasyonlu, çok dilli satış ekibi için optimize edilmiş ve teklif yönetimli özel sağlık turizmi CRM sistemi.',
    h1: 'Sağlık Turizmi CRM Yazılımı',
    content: `
      <section>
        <h2>Kayıp Lead'leri Sıfırlayan Hasta Yönetim Sistemi</h2>
        <p>WhatsApp, form ve çağrı kanallarından gelen başvuruları tek panelde toplayan ve satış danışmanlarının dönüşüm hızını artıran özel CRM.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/yapay-zeka-otomasyon',
    title: 'Sağlık Turizminde Yapay Zekâ ve Otomasyon | AI Call Agent',
    description: '7/24 çok dilli yapay zekâ sesli asistanları, otomatik lead kalifikasyonu ve akıllı randevu otomasyonları.',
    h1: 'Sağlık Turizmi Yapay Zekâ ve Otomasyon',
    content: `
      <section>
        <h2>Gece Gelen Hastayı Anında Karşılayan AI Sistemleri</h2>
        <p>Saat farkı olan ülkelerden gelen aramaları ve mesajları ana dilinde karşılayıp ön nitelikten geçiren yapay zekâ asistanları.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/sosyal-medya-yonetimi',
    title: 'Sağlık Turizmi Sosyal Medya Yönetimi | Uluslararası İtibar',
    description: 'Hekim ve klinik markaları için estetik ve cerrahi güven odaklı profesyonel sosyal medya içerik yönetimi.',
    h1: 'Sağlık Turizmi Sosyal Medya Yönetimi',
    content: `
      <section>
        <h2>Uluslararası Hasta Güveni Oluşturan İçerikler</h2>
        <p>Instagram ve TikTok platformlarında ameliyat öncesi/sonrası, hasta deneyimleri ve uzman hekim anlatımları.</p>
      </section>
    `
  },
  {
    path: '/hizmetler/icerik-produksiyon',
    title: 'Sağlık Turizmi İçerik ve Prodüksiyon | Klinik Çekimleri',
    description: 'Klinik içi profesyonel 4K video çekimleri, cerrahi operasyon anlatımları ve uluslararası hasta röportajları.',
    h1: 'Sağlık Turizmi İçerik ve Prodüksiyon',
    content: `
      <section>
        <h2>Kliniğinizin Kalitesini Gösteren Profesyonel Prodüksiyon</h2>
        <p>Yabancı hastanın Türkiye'ye gelmeden kliniği hissetmesini sağlayan sinematik çekimler ve hekim güven videoları.</p>
      </section>
    `
  },

  // 4. Branşlar (9 Branş)
  {
    path: '/sac-ekimi-reklam-ajansi',
    title: 'Saç Ekimi Reklam Ajansı | İngiltere ve Avrupa Hasta Kazanımı',
    description: 'Saç ekimi klinikleri için Google Ads, Meta Lead Ads, çok dilli açılış sayfaları ve WhatsApp CRM entegrasyonu.',
    h1: 'Saç Ekimi Reklam Ajansı',
    content: `
      <section>
        <h2>Saç Ekimi Kliniklerine Özel Hasta Büyüme Sistemi</h2>
        <p>İngiltere, İtalya, İspanya ve DACH pazarlarında greft şeffaflığı ve cerrah güvencesiyle yüksek dönüşümlü hasta başvurusu oluşturuyoruz.</p>
      </section>
    `
  },
  {
    path: '/dis-klinigi-reklam-ajansi',
    title: 'Diş Kliniği Reklam Ajansı | Dental Turizm Pazarlaması',
    description: 'İmplant, All-on-4 ve gülüş tasarımı tedavilerinde İngiltere ve Avrupa hastalarına yönelik performans pazarlama ajansı.',
    h1: 'Diş Kliniği Reklam Ajansı',
    content: `
      <section>
        <h2>Dental Turizmde Yüksek Katma Değerli Hasta Akışı</h2>
        <p>İmplant ve All-on-4 tedavilerinde İngiltere bekleme süreleri ve fiyat avantajını vurgulayan çok dilli kampanyalar.</p>
      </section>
    `
  },
  {
    path: '/estetik-klinigi-reklam-ajansi',
    title: 'Estetik Kliniği Reklam Ajansı | Medikal Estetik Pazarlaması',
    description: 'Medikal estetik ve klinik uygulamaları için hedefe yönelik uluslararası reklam yönetimi ve hasta kazanımı.',
    h1: 'Estetik Kliniği Reklam Ajansı',
    content: `
      <section>
        <h2>Medikal Estetikte Güven ve Görünürlük</h2>
        <p>Dolgu, botoks ve cilt tedavilerinde yabancı hastaların tercih ettiği klinik markasını inşa ediyoruz.</p>
      </section>
    `
  },
  {
    path: '/plastik-cerrahi-reklam-ajansi',
    title: 'Plastik Cerrahi Reklam Ajansı | Estetik Cerrahi Pazarlama',
    description: 'Rinoplasti, meme estetiği ve liposuction cerrahları için E-E-A-T uyumlu, yüksek bütçeli uluslararası reklam yönetimi.',
    h1: 'Plastik Cerrahi Reklam Ajansı',
    content: `
      <section>
        <h2>Plastik Cerrahlar İçin Uluslararası Hasta Edinimi</h2>
        <p>Rinoplasti ve kombine vücut şekillendirme operasyonlarında cerrahın imzasını öne çıkaran video prodüksiyon ve reklam mimarisi.</p>
      </section>
    `
  },
  {
    path: '/obezite-cerrahisi-reklam-ajansi',
    title: 'Obezite Cerrahisi Reklam Ajansı | Bariatrik Cerrahi Pazarlama',
    description: 'Tüp mide ve gastrik bypass cerrahisi için İngiltere ve İrlanda hastalarına yönelik güven odaklı reklam yönetimi.',
    h1: 'Obezite Cerrahisi Reklam Ajansı',
    content: `
      <section>
        <h2>Bariatrik Cerrahide Yüksek Nitelikli Hasta Akışı</h2>
        <p>İngiltere NHS bekleme sürelerini aşmak isteyen bariatrik cerrahi adaylarına yönelik şeffaf ve güvenli hasta süreci kurguluyoruz.</p>
      </section>
    `
  },
  {
    path: '/tup-bebek-reklam-ajansi',
    title: 'Tüp Bebek Reklam Ajansı | IVF Sağlık Turizmi Pazarlaması',
    description: 'Tüp bebek (IVF) ve üreme sağlığı merkezleri için etik, mevzuata uygun ve yüksek hassasiyetli uluslararası reklam yönetimi.',
    h1: 'Tüp Bebek (IVF) Reklam Ajansı',
    content: `
      <section>
        <h2>Tüp Bebek Tedavilerinde Şefkat ve Güven Odaklı İletişim</h2>
        <p>Uluslararası hasta adaylarının yasal ve tıbbi soru işaretlerini gideren şeffaf IVF pazarlama stratejisi.</p>
      </section>
    `
  },
  {
    path: '/goz-klinigi-reklam-ajansi',
    title: 'Göz Kliniği Reklam Ajansı | Lazer & Akıllı Lens Pazarlaması',
    description: 'No-touch lazer, akıllı lens ve katarakt ameliyatlarında Almanya ve Avrupa pazarlarına yönelik reklam yönetimi.',
    h1: 'Göz Kliniği Reklam Ajansı',
    content: `
      <section>
        <h2>Göz Cerrahisinde Avrupa'dan Hasta Çeken Kampanyalar</h2>
        <p>Almanya, Avusturya ve İsviçre hastalarına yönelik son teknoloji göz tedavilerini tanıtan çok dilli performans reklamları.</p>
      </section>
    `
  },
  {
    path: '/hastane-reklam-ajansi',
    title: 'Hastane Reklam Ajansı | A Plus Sağlık Grubu Pazarlaması',
    description: 'Büyük ölçekli genel hastaneler ve sağlık grupları için çok branşlı uluslararası hasta kazanım yönetimi.',
    h1: 'Hastane Reklam Ajansı',
    content: `
      <section>
        <h2>A Plus Hastaneler İçin Kurumsal Sağlık Turizmi Yönetimi</h2>
        <p>Kardiyoloji, onkoloji ve cerrahi branşlarda yabancı sigorta ve özel hasta akışını yöneten entegre ajans desteği.</p>
      </section>
    `
  },
  {
    path: '/doktor-reklam-ajansi',
    title: 'Doktor Reklam Ajansı | Hekimlere Özel Sağlık Pazarlaması',
    description: 'Kendi muayenehanesi olan hekimler için kişisel marka, Google Ads ve hasta iletişim yönetimi.',
    h1: 'Doktor Reklam Ajansı',
    content: `
      <section>
        <h2>Hekimler İçin Bağımsız Hasta Kazanım Sistemi</h2>
        <p>Muayenehane ve klinik sahibi hekimlerin aracı kurumlara bağımlı olmadan kendi yabancı hastasını edinmesini sağlayan model.</p>
      </section>
    `
  },

  // 5. Hedef Pazarlar (4 Ülke)
  {
    path: '/ingiltere-saglik-turizmi-reklamlari',
    title: 'İngiltere Sağlık Turizmi Reklamları | UK Hasta Kazanımı',
    description: 'Londra, Manchester, Birmingham ve tüm Birleşik Krallık pazarında saç ekimi, diş ve estetik hastalarına ulaşma stratejisi.',
    h1: 'İngiltere Sağlık Turizmi Reklamları',
    content: `
      <section>
        <h2>Birleşik Krallık (UK) Pazarında Hasta Edinme Rehberi</h2>
        <p>NHS bekleme süreleri ve yüksek özel klinik maliyetleri nedeniyle Türkiye'yi tercih eden İngiliz hastalar için yerel kampanya yönetimi.</p>
      </section>
    `
  },
  {
    path: '/almanya-saglik-turizmi-reklamlari',
    title: 'Almanya Sağlık Turizmi Reklamları | DACH Bölgesi Pazarlaması',
    description: 'Almanya, Avusturya ve İsviçre pazarlarında güven, akreditasyon ve Almanca dilinde sağlık turizmi reklam yönetimi.',
    h1: 'Almanya Sağlık Turizmi Reklamları',
    content: `
      <section>
        <h2>DACH Bölgesinde Alman Hastalara Ulaşma Stratejisi</h2>
        <p>JCI akreditasyonu ve tıbbi garanti arayan Alman hastalar için GDPR uyumlu, Almanca E-E-A-T kampanyaları.</p>
      </section>
    `
  },
  {
    path: '/fransa-saglik-turizmi-reklamlari',
    title: 'Fransa Sağlık Turizmi Reklamları | Fransızca Kampanyalar',
    description: 'Fransa, Belçika ve frankofon ülkelerden estetik ve diş tedavileri için hasta kazanım stratejileri.',
    h1: 'Fransa Sağlık Turizmi Reklamları',
    content: `
      <section>
        <h2>Fransa Pazarından Sağlık Turisti Çekme</h2>
        <p>Fransız hastaların estetik ve saç ekimi tercihlerine uygun Fransızca kreatifler ve yerel iletişim yönetimi.</p>
      </section>
    `
  },
  {
    path: '/hollanda-saglik-turizmi-reklamlari',
    title: 'Hollanda Sağlık Turizmi Reklamları | Benelüks Pazarlaması',
    description: 'Hollanda ve Flaman bölgesinde diş, saç ekimi ve göz operasyonları için hedefe yönelik reklam yönetimi.',
    h1: 'Hollanda Sağlık Turizmi Reklamları',
    content: `
      <section>
        <h2>Hollanda ve Benelüks Pazarında Hasta Büyümesi</h2>
        <p>Felemenkçe ve İngilizce dillerinde yüksek satın alma gücüne sahip Hollandalı hastaları kliniğinize bağlayan sistem.</p>
      </section>
    `
  },

  // 6. Şehirler (4 Şehir)
  {
    path: '/istanbul-saglik-turizmi-reklam-ajansi',
    title: 'İstanbul Sağlık Turizmi Reklam Ajansı | Küresel Merkez Stratejisi',
    description: 'İstanbul merkezli klinikler için havalimanı ve hastane altyapısını avantaja dönüştüren sağlık turizmi reklam ajansı.',
    h1: 'İstanbul Sağlık Turizmi Reklam Ajansı',
    content: `
      <section>
        <h2>İstanbul Sağlık Turizmi Ekosisteminde Öne Çıkın</h2>
        <p>İki uluslararası havalimanı ve 30+ JCI hastaneyle dünyanın sağlık başkenti olan İstanbul'da rekabet üstünlüğü sağlayan reklam stratejileri.</p>
      </section>
    `
  },
  {
    path: '/antalya-saglik-turizmi-reklam-ajansi',
    title: 'Antalya Sağlık Turizmi Reklam Ajansı | Dental & Estetik Tatil',
    description: 'Antalya klinik ve hekimleri için Avrupa direkt uçuşlarını ve medikal turizmi birleştiren reklam yönetimi.',
    h1: 'Antalya Sağlık Turizmi Reklam Ajansı',
    content: `
      <section>
        <h2>Antalya'da Tedavi ve Tatili Birleştiren Hasta Modeli</h2>
        <p>Özellikle diş tedavisi ve saç ekiminde Avrupa'dan doğrudan turist çeken Antalya odaklı dijital büyüme yönetimi.</p>
      </section>
    `
  },
  {
    path: '/izmir-saglik-turizmi-reklam-ajansi',
    title: 'İzmir Sağlık Turizmi Reklam Ajansı | Butik Klinik Pazarlaması',
    description: 'İzmir ve Ege bölgesindeki butik klinikler, cerrahlar ve hastaneler için özel sağlık turizmi büyüme ajansı.',
    h1: 'İzmir Sağlık Turizmi Reklam Ajansı',
    content: `
      <section>
        <h2>İzmir ve Ege Bölgesinde Butik Sağlık Turizmi</h2>
        <p>Kişiye özel ilgi ve yüksek hasta memnuniyetini öne çıkaran İzmir merkezli uluslararası reklam kurgusu.</p>
      </section>
    `
  },
  {
    path: '/ankara-saglik-turizmi-reklam-ajansi',
    title: 'Ankara Sağlık Turizmi Reklam Ajansı | Akademik & İleri Cerrahi',
    description: 'Ankara üniversite hastaneleri, profesörler ve ileri cerrahi merkezleri için uluslararası hasta pazarlaması.',
    h1: 'Ankara Sağlık Turizmi Reklam Ajansı',
    content: `
      <section>
        <h2>Ankara'nın Akademik Cerrahi Gücünü Dünyaya Taşıyın</h2>
        <p>Kompleks vakalar ve ileri cerrahi tedavilerde Ankara'daki tıp fakülteleri ve uzman hekimleri global hastalarla buluşturan ajans modeli.</p>
      </section>
    `
  },

  // 7. Sağlık Turizmi SEO & Mevzuat Rehberi (16 BOFU/MOFU Sayfa)
  {
    path: '/saglik-turizmi-ajansi',
    title: 'Sağlık Turizmi Ajansı Ne İş Yapar? | Overseas Marketing',
    description: 'Sağlık turizmi ajansı; klinik ve hastanelerin yurt dışından hasta kazanması için çok dilli reklam, uluslararası SEO, GEO, CRM ve web altyapısı kuran uzman kuruluştur.',
    h1: 'Sağlık Turizmi Ajansı Ne İş Yapar?',
    content: `
      <section>
        <h2>Sağlık Turizmi Ajansı Hizmet Kapsamı</h2>
        <p>Sağlık turizmi ajansı; hastane, klinik ve hekimlerin İngiltere, DACH ve Avrupa pazarlarından sürdürülebilir yabancı hasta edinmesini sağlayan çok dilli reklam, SEO/GEO ve CRM altyapısı kurar.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-reklam',
    title: 'Sağlık Turizmi Reklamı Nasıl Yapılır? | Overseas Marketing',
    description: 'Sağlık turizmi reklamı nasıl yapılır? Google Ads, Meta Ads hedeflemeleri, çok dilli açılış sayfaları, mevzuat kuralları ve dönüşüm optimizasyonu adımları.',
    h1: 'Sağlık Turizmi Reklamı Nasıl Yapılır?',
    content: `
      <section>
        <h2>Uluslararası Sağlık Turizmi Reklam Yönetimi</h2>
        <p>Google Ads arama niyetleri, cerrahi güven pekiştiren video kreatifler ve 3 saniyenin altında açılan çok dilli landing page mimarisiyle yurt dışı hasta edinimi.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-web-sitesi',
    title: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı? | Overseas Marketing',
    description: 'Sağlık turizmi web sitesi tasarımı nasıl olmalıdır? Çok dilli altyapı, mobil hız, hekim otoritesi, KVKK/GDPR uyumu ve yabancı hastayı randevuya dönüştüren UX rehberi.',
    h1: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı?',
    content: `
      <section>
        <h2>Yabancı Hastayı Randevuya Dönüştüren Web Sitesi Mimarisi</h2>
        <p>Mobil öncelikli, 3 saniyenin altında açılan, hekim yetkinliği ve E-E-A-T unsurlarını şeffafça sunan yüksek dönüşümlü sağlık turizmi web siteleri.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi/seo-geo-stratejisi',
    title: 'Sağlık Turizmi SEO ve GEO Stratejisi | Overseas Marketing',
    description: 'Sağlık turizminde SEO ve GEO (Generative Engine Optimization). ChatGPT, Perplexity ve Google AI aramalarında kliniğinizi tavsiye edilen kaynak yapma rehberi.',
    h1: 'Sağlık Turizmi Firmaları İçin SEO ve GEO Stratejisi',
    content: `
      <section>
        <h2>Yapay Zekâ Motorlarında Kliniğinizi Tavsiye Ettirin</h2>
        <p>Geleneksel Google sıralamalarının ötesinde ChatGPT, Perplexity ve Google AI Overviews aramalarında kliniğinizi referans kaynak haline getiren semantik GEO mimarisi.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-fiyat-listesi',
    title: 'Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır? | Overseas Marketing',
    description: 'Sağlık turizmi fiyat listesi hazırlama rehberi. Tedavi paketleme stratejisi, transfer, konaklama, medikal maliyetler ve mevzuata uygun şeffaf fiyatlandırma.',
    h1: 'Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır?',
    content: `
      <section>
        <h2>Uluslararası Hasta İçin Şeffaf Tedavi Paketleme</h2>
        <p>Tedavi, otel konaklaması, VIP transfer ve refakatçi süreçlerini kapsayan güvenilir her şey dahil sağlık turizmi fiyatlandırma modeli.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-yetki-belgesi',
    title: 'Sağlık Turizmi Yetki Belgesi Nedir? | Overseas Marketing',
    description: 'Sağlık turizmi yetki belgesi nedir? T.C. Sağlık Bakanlığı tarafından verilen uluslararası sağlık turizmi yetki belgesinin kapsamı, yasal zorunlulukları ve avantajları.',
    h1: 'Sağlık Turizmi Yetki Belgesi Nedir?',
    content: `
      <section>
        <h2>Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi</h2>
        <p>Türkiye'de uluslararası hastalara teşhis, tedavi ve aracılık hizmeti sunmak isteyen sağlık tesisleri ve seyahat acentaları için zorunlu yasal izin belgesi.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-yetki-belgesi/nasil-alinir',
    title: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır? 2026 Başvuru Rehberi',
    description: 'Sağlık turizmi yetki belgesi nasıl alınır? Sağlık tesisleri ve acentalar için başvuru aşamaları, İl Sağlık Müdürlüğü denetimleri ve onay süreci adımları.',
    h1: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır?',
    content: `
      <section>
        <h2>Yetki Belgesi Başvuru ve Denetim Aşamaları</h2>
        <p>SKS puanı, yabancı dil personeli istihdamı, 7/24 çağrı altyapısı ve İl Sağlık Müdürlüğü fiziki denetim süreçleriyle yetki belgesi alma rehberi.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-yetki-belgesi/sartlari',
    title: 'Sağlık Turizmi Yetki Belgesi Şartları Nelerdir? | 2026',
    description: 'Sağlık turizmi yetki belgesi şartları. SKS puanı, yabancı dil bilen personel kriterleri, 7/24 çağrı hattı ve klinik altyapı zorunlulukları tablosu.',
    h1: 'Sağlık Turizmi Yetki Belgesi Şartları',
    content: `
      <section>
        <h2>Yetki Belgesi İçin Asgari Şartlar ve Kriterler</h2>
        <p>Hastaneler, tıp merkezleri, poliklinikler ve hekim muayenehaneleri için mevzuatta belirlenmiş asgari kalite, personel ve altyapı şartları.</p>
      </section>
    `
  },
  {
    path: '/uluslararasi-saglik-turizmi-yetki-belgesi',
    title: 'Uluslararası Sağlık Turizmi Yetki Belgesi | 2026 Rehber',
    description: 'Uluslararası sağlık turizmi yetki belgesi nedir, nasıl alınır? Sağlık tesisleri ve aracı kuruluşlar için resmî başvuru adımları ve mevzuat yükümlülükleri.',
    h1: 'Uluslararası Sağlık Turizmi Yetki Belgesi Başvuru Rehberi',
    content: `
      <section>
        <h2>Uluslararası Sağlık Turizmi Belgesi ve Sağladığı Avantajlar</h2>
        <p>Google/Meta reklam izinleri, Ticaret Bakanlığı hibe teşvikleri ve HealthTürkiye portalında listelenme için zorunlu resmî onay sertifikası.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi/gerekli-belgeler',
    title: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir? | 2026 Liste',
    description: 'Sağlık turizmi yetki belgesi için gerekli evraklar ve başvuru belgeleri listesi. Tesis ruhsatı, personel dil belgeleri, taahhütnameler ve protokoller.',
    h1: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir?',
    content: `
      <section>
        <h2>Yetki Belgesi Başvuru Evrak Listesi</h2>
        <p>Faaliyet izin belgesi, SKS sonuç belgesi, personel yabancı dil yeterlilik sertifikaları ve başvuru taahhütnameleri kontrol listesi.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-yonetmeligi',
    title: 'Sağlık Turizmi Yönetmeliği ve Hukuki Şartlar | 2026',
    description: 'Uluslararası sağlık turizmi yönetmeliği maddeleri, hasta hakları, reklam sınırları, yetki belgesi zorunluluğu ve sağlık kuruluşlarının yasal sorumlulukları.',
    h1: 'Sağlık Turizmi Yönetmeliği: Kurumların Bilmesi Gerekenler',
    content: `
      <section>
        <h2>Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik</h2>
        <p>Sağlık turizmi faaliyetleri, tanıtım sınırları, yabancı hasta hakları ve cezai yaptırımları düzenleyen temel mevzuat hükümleri.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-tesvikleri',
    title: 'Sağlık Turizmi Teşvikleri Nelerdir? | 2026 Devlet Destekleri',
    description: 'Sağlık turizmi teşvikleri nelerdir? T.C. Ticaret Bakanlığı 5448 sayılı karar kapsamında reklam, acenta komisyonu, yabancı dil personeli ve ofis destek oranları.',
    h1: 'Sağlık Turizmi Teşvikleri Nelerdir?',
    content: `
      <section>
        <h2>Ticaret Bakanlığı Sağlık Turizmi Hibe ve Teşvikleri</h2>
        <p>Yurt dışı reklam harcamalarında %60-70 geri ödeme, acente komisyon desteği, tercüman maaş desteği ve yurt dışı ofis kira hibeleri.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi/devlet-destekleri-nasil-alinir',
    title: 'Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır? 2026 Kılavuzu',
    description: 'Sağlık turizmi devlet teşvikleri nasıl alınır? Ticaret Bakanlığı DYS (Destek Yönetim Sistemi) kaydı, evrak hazırlığı ve harcamaların hibeye dönüştürülmesi rehberi.',
    h1: 'Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır?',
    content: `
      <section>
        <h2>DYS Üzerinden Devlet Desteklerinden Yararlanma</h2>
        <p>Yetki belgesi şartı, kurumsal DYS kaydı, bankacılık ödeme kuralları ve 6 aylık hak düşürücü süre yönetimi.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-tesvik-basvurusu',
    title: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır? | 2026 DYS',
    description: 'Sağlık turizmi teşvik başvurusu nasıl yapılır? DYS sistemine evrak yükleme, fatura-dekont eşleştirmeleri, inceleme ve ödeme aşamaları rehberi.',
    h1: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır?',
    content: `
      <section>
        <h2>Adım Adım Teşvik Başvuru Süreci</h2>
        <p>DYS e-imza girişi, fatura ve banka onaylı dekont eşleştirmesi, reklam kanıtları ve HİB inceleme aşamaları.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-tesvik-danismanligi',
    title: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir? | Overseas Marketing',
    description: 'Sağlık turizmi teşvik danışmanlığı nedir? Klinik ve acentaların devlet desteklerinden sıfır hata ve maksimum hibe oranıyla yararlanmasını sağlayan profesyonel hizmet.',
    h1: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir?',
    content: `
      <section>
        <h2>Maksimum Hibe Oranı ve Sıfır Evrak Hatası</h2>
        <p>Sağlık kuruluşlarının hak kaybı yaşamadan tüm reklam ve tanıtım harcamalarını devlet desteğiyle geri almasını sağlayan uçtan uca teşvik danışmanlığı.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-acentesi-acmak',
    title: 'Sağlık Turizmi Acentası Açmak İçin Gerekenler | 2026 Rehber',
    description: 'Sağlık turizmi acentası nasıl açılır? TÜRSAB A grubu işletme belgesi, Sağlık Bakanlığı yetki belgesi şartları, anlaşmalı klinik protokolleri ve sermaye gereksinimleri.',
    h1: 'Sağlık Turizmi Acentası Açmak İçin Gerekenler',
    content: `
      <section>
        <h2>Uluslararası Sağlık Turizmi Aracı Kuruluşu Kurma Kılavuzu</h2>
        <p>TÜRSAB A Grubu seyahat acentası belgesi, en az 3 sağlık tesisiyle resmî protokol ve Sağlık Bakanlığı aracı kuruluş yetki belgesi alma süreci.</p>
      </section>
    `
  }
];

console.log('🚀 2026 Statik Pre-rendering (Retrieval Katmanı) Derlemesi Başlatılıyor...');

let generatedCount = 0;

for (const route of ROUTES) {
  const canonicalUrl = `https://overseas.marketing${route.path === '/' ? '' : route.path}`;

  // Replace Title
  let pageHtml = templateHtml.replace(
    /<title>.*?<\/title>/i,
    `<title>${route.title}</title>`
  );

  // Replace Description
  pageHtml = pageHtml.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${route.description}" />`
  );

  // Replace Canonical
  pageHtml = pageHtml.replace(
    /<link rel="canonical" href=".*?" \/>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph Title & Description
  pageHtml = pageHtml.replace(
    /<meta property="og:title" content=".*?" \/>/i,
    `<meta property="og:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta property="og:description" content=".*?" \/>/i,
    `<meta property="og:description" content="${route.description}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta property="og:url" content=".*?" \/>/i,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter Title & Description
  pageHtml = pageHtml.replace(
    /<meta name="twitter:title" content=".*?" \/>/i,
    `<meta name="twitter:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta name="twitter:description" content=".*?" \/>/i,
    `<meta name="twitter:description" content="${route.description}" />`
  );

  // Inject Static Machine-Scannable Crawl Body inside <div id="root">
  const staticCrawlBody = `
    <div id="root">
      <header style="padding: 20px; border-bottom: 1px solid #dde2e8;">
        <a href="/" style="font-weight: bold; text-decoration: none; color: #16202E;">Overseas Marketing</a>
      </header>
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: sans-serif;">
        <h1 style="font-size: 32px; color: #16202E; margin-bottom: 16px;">${route.h1}</h1>
        <p style="font-size: 16px; color: #595F69; line-height: 1.6;">${route.description}</p>
        <div style="margin-top: 30px; line-height: 1.6; color: #222222;">
          ${route.content}
        </div>
      </main>
    </div>
  `.trim();

  pageHtml = pageHtml.replace(
    /<div id="root"><\/div>/i,
    staticCrawlBody
  );

  // Target directory & file
  if (route.path === '/') {
    fs.writeFileSync(path.resolve(distDir, 'index.html'), pageHtml, 'utf-8');
  } else {
    const routeDir = path.resolve(distDir, route.path.replace(/^\//, ''));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageHtml, 'utf-8');
  }

  generatedCount++;
}

console.log(`✅ ${generatedCount} adet sayfa için statik HTML retrieval dosyası başarıyla üretildi!`);
