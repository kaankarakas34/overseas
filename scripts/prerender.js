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
  }
];

console.log('🚀 2026 Statik Pre-rendering (Retrieval Katmanı) Derlemesi Başlatılıyor...');

let generatedCount = 0;

for (const route of ROUTES) {
  const canonicalUrl = `https://overseasmarketing.com.tr${route.path === '/' ? '' : route.path}`;

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
