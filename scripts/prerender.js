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
const BASE_DOMAIN = 'https://www.overseas.marketing';

// 27 Core Route definitions with rich static SEO content for non-JS bots (AI & Search Engines)
const ROUTES = [
  // 1. Ana Sayfa
  {
    path: '/',
    title: 'Sağlık Turizmi Reklam Ajansı | Overseas Marketing',
    description: 'Sağlık turizminde performans pazarlama, SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları. Büyümenizi birlikte planlayalım.',
    h1: 'Sağlık Turizmi İçin Reklam, SEO ve CRM Çözümleri',
    content: `
      <section>
        <h2>Sağlık Turizminde Entegre Büyüme ve Hasta Edinimi Modeli</h2>
        <p>Overseas Marketing; sağlık turizminde klinik, hastane ve hekimlerin İngiltere, Almanya ve Avrupa pazarlarından sürdürülebilir yabancı hasta başvurusu elde etmesini sağlayan entegre performans pazarlama, uluslararası SEO, GEO ve yapay zekâ ajansıdır.</p>
        <p>Google Ads arama niyetleri, Meta video kreatifleri, çok dilli açılış sayfaları ve özel WhatsApp CRM altyapısı tek çatı altında sunulur. Sağlık Bakanlığı tanıtım mevzuatına (K8) tam uyumlu kurumsal büyüme mimarisi kuruyoruz.</p>
      </section>
      <section style="margin-top: 30px;">
        <h2>Temel Büyüme Hizmetlerimiz</h2>
        <ul style="line-height: 1.8;">
          <li><a href="/hizmetler/performans-pazarlama"><strong>Sağlık Turizmi Performans Pazarlama:</strong></a> İngiltere ve Avrupa hedefli çok dilli Google Ads & Meta reklam yönetimi.</li>
          <li><a href="/hizmetler/uluslararasi-seo-hizmeti"><strong>Uluslararası SEO Hizmeti:</strong></a> Çok dilli arama motoru optimizasyonu ve E-E-A-T içerik stratejisi.</li>
          <li><a href="/hizmetler/geo-generative-engine-optimization"><strong>Generative Engine Optimization (GEO):</strong></a> ChatGPT, Perplexity ve Google AI aramalarında tavsiye edilme.</li>
          <li><a href="/hizmetler/web-sitesi-landing-page"><strong>Dönüşüm Odaklı Web Sitesi & Landing Page:</strong></a> Yabancı hastayı randevuya dönüştüren hızlı açılış sayfaları.</li>
          <li><a href="/hizmetler/saglik-turizmi-crm-yazilimi"><strong>Sağlık Turizmi CRM Yazılımı:</strong></a> WhatsApp entegrasyonlu çok dilli satış ve teklif takip sistemi.</li>
          <li><a href="/hizmetler/yapay-zeka-otomasyon"><strong>Yapay Zekâ ve Otomasyon (AI Call Agent):</strong></a> 7/24 kesintisiz çok dilli sesli ve yazılı hasta karşılama.</li>
          <li><a href="/hizmetler/sosyal-medya-yonetimi"><strong>Sosyal Medya Yönetimi:</strong></a> Estetik ve cerrahi güven odaklı profesyonel sosyal medya yönetimi.</li>
          <li><a href="/hizmetler/icerik-produksiyon"><strong>İçerik ve Prodüksiyon:</strong></a> Klinik içi 4K video çekimleri ve hasta deneyim videoları.</li>
        </ul>
      </section>
      <section style="margin-top: 30px;">
        <h2>Öne Çıkan Tedavi Branşları</h2>
        <p>Özelleştirilmiş reklam kurguları ve yabancı hasta süreçleriyle yönettiğimiz branşlar:</p>
        <p>
          <a href="/sac-ekimi-reklam-ajansi">Saç Ekimi</a> | 
          <a href="/dis-klinigi-reklam-ajansi">Diş Kliniği & Dental Turizm</a> | 
          <a href="/estetik-klinigi-reklam-ajansi">Estetik Kliniği</a> | 
          <a href="/plastik-cerrahi-reklam-ajansi">Plastik Cerrahi</a> | 
          <a href="/obezite-cerrahisi-reklam-ajansi">Obezite Cerrahisi</a> | 
          <a href="/tup-bebek-reklam-ajansi">Tüp Bebek (IVF)</a> | 
          <a href="/goz-klinigi-reklam-ajansi">Göz Cerrahisi</a> | 
          <a href="/hastane-reklam-ajansi">A Plus Hastane</a> | 
          <a href="/doktor-reklam-ajansi">Hekim Muayenehane</a>
        </p>
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
        <p>Kişisel web sitesi, hedef ülke odaklı dijital PR çalışmaları, Google Arama Ağı hekim aramaları ve E-E-A-T uyumlu vaka sunumları tek elden koordine edilir.</p>
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
        <p>İngiltere, Almanya, Hollanda, Fransa ve Körfez ülkelerinde ana dilinde hazırlanan kreatifler ile tıklama başı maliyetler (CPC) optimize edilir, nitelikli hasta başvurusu (CPL) maksimize edilir.</p>
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
        <p>Uluslararası SEO hizmetimiz; teknik denetim, hreflang mimarisi, hedef dillerde medikal makale üretimi, dijital PR ve yerel otorite inşasını kapsar.</p>
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
  {
    path: '/b2b-linkedin-outreach',
    title: 'B2B LinkedIn Outreach & Müşteri Edinimi | Overseas Marketing',
    description: 'Hedef pazarınızdaki karar vericilere (CEO, Kurucu, C-Level) doğrudan ulaşan, soğuk mesajları nitelikli B2B toplantılarına dönüştüren otomatik LinkedIn Outreach büyüme sistemi.',
    h1: 'Hedef Müşterilerinize Doğrudan Ulaşın, Takviminizi Nitelikli B2B Toplantılarla Doldurun.',
    content: `
      <section>
        <h2>LinkedIn B2B Outreach ve Otomatik Müşteri Edinimi</h2>
        <p>Overseas Marketing B2B büyüme birimi; teknoloji, SaaS, ihracat ve kurumsal hizmet firmalarının hedef pazar karar vericilerine (CEO, CMO, Kurucu Ortak, Satın Alma Direktörü) doğrudan ulaşmasını sağlayan kişiselleştirilmiş LinkedIn outreach mimarisi kurar.</p>
        <p>Resmi çözüm partnerimiz <a href="https://www.b2blinkedin.marketing/linkedin-outreach/" target="_blank" rel="noopener noreferrer">b2blinkedin.marketing</a> ile entegre yürütülen süreçte spam şablonlar yerine, hesap güvenliğini %100 koruyan ve ayda 15-40 arası onaylı satış toplantısı üreten outbound sistemler inşa ediyoruz.</p>
      </section>
      <section style="margin-top: 30px;">
        <h2>B2B LinkedIn Outreach Sisteminin Temel Avantajları</h2>
        <ul style="line-height: 1.8;">
          <li><strong>Hassas ICP ve Karar Verici Segmentasyonu:</strong> Sales Navigator ve gelişmiş filtreleme ile doğrudan bütçe sahibi yöneticileri hedefleyin.</li>
          <li><strong>Doğal ve Değer Odaklı İletişim Akışları:</strong> Sektöre özel acı noktalarını çözen, robotik olmayan 3-4 adımlı takip mesajları.</li>
          <li><strong>Otomatik Takvim Entegrasyonu:</strong> Yanıt veren potansiyel müşterilerin doğrudan satış ekibinizin takvimine randevu olarak düşmesi.</li>
          <li><strong>Güvenli ve Algoritma Dostu Altyapı:</strong> Günlük limitleri aşmayan, hesap askıya alma riski barındırmayan bulut tabanlı otomasyon.</li>
        </ul>
      </section>
    `
  }
];

// Load all 86 SEO Knowledge Base Articles dynamically from src/data/seoArticlesData.json
const seoArticlesJsonPath = path.resolve(__dirname, '../src/data/seoArticlesData.json');
if (fs.existsSync(seoArticlesJsonPath)) {
  const seoArticles = JSON.parse(fs.readFileSync(seoArticlesJsonPath, 'utf-8'));
  for (const art of seoArticles) {
    let sectionsHtml = '';
    if (art.sections && art.sections.length > 0) {
      for (const sec of art.sections) {
        sectionsHtml += `
          <div style="margin-top: 24px;">
            <h3 style="font-size: 20px; color: #16202E; margin-bottom: 8px;">${sec.heading}</h3>
            ${sec.subheading ? `<p style="color: #595F69; font-size: 14px; margin-bottom: 12px;">${sec.subheading}</p>` : ''}
            ${sec.paragraphs ? sec.paragraphs.map(p => `<p style="line-height: 1.6; margin-bottom: 12px; color: #334155;">${p}</p>`).join('') : ''}
            ${sec.bulletPoints && sec.bulletPoints.length > 0 ? `
              <ul style="line-height: 1.7; margin-bottom: 16px; padding-left: 20px;">
                ${sec.bulletPoints.map(bp => `<li style="color: #334155; margin-bottom: 6px;">${bp}</li>`).join('')}
              </ul>
            ` : ''}
            ${sec.table ? `
              <div style="overflow-x: auto; margin: 16px 0;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px; text-align: left;">
                  <thead>
                    <tr style="background: #16202E; color: #ffffff;">
                      ${sec.table.headers.map(h => `<th style="padding: 10px 12px;">${h}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${sec.table.rows.map((row, rIdx) => `
                      <tr style="background: ${rIdx % 2 === 0 ? '#ffffff' : '#f8fafc'}; border-bottom: 1px solid #dde2e8;">
                        ${row.map((c, cIdx) => `<td style="padding: 10px 12px; color: #334155;">${cIdx === 0 ? `<strong>${c}</strong>` : c}</td>`).join('')}
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : ''}
          </div>
        `;
      }
    }

    let faqsHtml = '';
    if (art.faqs && art.faqs.length > 0) {
      faqsHtml = `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dde2e8;">
          <h3 style="font-size: 20px; color: #16202E; margin-bottom: 16px;">Sıkça Sorulan Sorular</h3>
          ${art.faqs.map(f => `
            <div style="margin-bottom: 16px;">
              <h4 style="font-size: 16px; color: #16202E; margin-bottom: 4px;">${f.q}</h4>
              <p style="color: #595F69; font-size: 14px; line-height: 1.6;">${f.a}</p>
            </div>
          `).join('')}
        </div>
      `;
    }

    let internalLinksHtml = '';
    if (art.internalLinks && art.internalLinks.length > 0) {
      internalLinksHtml = `
        <div style="margin-top: 30px; padding: 16px; background: #f8fafc; border-radius: 12px; border: 1px solid #dde2e8;">
          <h4 style="font-size: 15px; color: #16202E; margin-bottom: 10px;">İlgili Sağlık Turizmi Rehberleri</h4>
          <ul style="padding-left: 20px; line-height: 1.8;">
            ${art.internalLinks.map(l => `<li><a href="${l.url}" style="color: #446CB5; text-decoration: none;"><strong>${l.title}</strong></a></li>`).join('')}
          </ul>
        </div>
      `;
    }

    ROUTES.push({
      path: art.url,
      title: art.seoTitle,
      description: art.metaDesc,
      h1: art.h1,
      isArticle: true,
      content: `
        <article>
          <div style="padding: 16px; background: #EEF3FB; border-radius: 12px; border-left: 4px solid #446CB5; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 15px; color: #16202E; line-height: 1.6;"><strong>Özet / Doğrudan Cevap:</strong> ${art.quickAnswer}</p>
          </div>
          ${sectionsHtml}
          ${faqsHtml}
          ${internalLinksHtml}
        </article>
      `
    });
  }
}

console.log('🚀 2026 Statik Pre-rendering (Zengin Retrieval & Mesh Katmanı) Başlatılıyor...');

// Navigation Header HTML for rich discovery
const navHeaderHtml = `
  <header style="padding: 16px 24px; border-bottom: 1px solid #dde2e8; background: #ffffff;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px;">
      <a href="/" style="font-weight: 800; font-size: 18px; text-decoration: none; color: #16202E;">Overseas Marketing</a>
      <nav style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 14px;">
        <a href="/" style="color: #16202E; text-decoration: none;">Ana Sayfa</a>
        <a href="/doktor-marka-yonetimi" style="color: #16202E; text-decoration: none;">Doktor Marka Yönetimi</a>
        <a href="/hizmetler/performans-pazarlama" style="color: #16202E; text-decoration: none;">Performans Pazarlama</a>
        <a href="/hizmetler/uluslararasi-seo-hizmeti" style="color: #16202E; text-decoration: none;">Uluslararası SEO</a>
        <a href="/hizmetler/saglik-turizmi-crm-yazilimi" style="color: #16202E; text-decoration: none;">Sağlık Turizmi CRM</a>
        <a href="/hizmetler/geo-generative-engine-optimization" style="color: #16202E; text-decoration: none;">GEO</a>
        <a href="/sac-ekimi-reklam-ajansi" style="color: #16202E; text-decoration: none;">Saç Ekimi</a>
        <a href="/dis-klinigi-reklam-ajansi" style="color: #16202E; text-decoration: none;">Diş Kliniği</a>
        <a href="/ingiltere-saglik-turizmi-reklamlari" style="color: #16202E; text-decoration: none;">İngiltere Pazarı</a>
      </nav>
    </div>
  </header>
`;

// Footer Link Matrix for full internal link mesh
const navFooterHtml = `
  <footer style="margin-top: 60px; padding: 40px 24px; background: #16202E; color: #ffffff; font-family: sans-serif;">
    <div style="max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px; font-size: 13px;">
      <div>
        <h4 style="font-size: 15px; margin-bottom: 12px; color: #60A5FA;">Büyüme Hizmetleri</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="/hizmetler/performans-pazarlama" style="color: #94A3B8; text-decoration: none;">Performans Pazarlama</a></li>
          <li><a href="/hizmetler/uluslararasi-seo-hizmeti" style="color: #94A3B8; text-decoration: none;">Uluslararası SEO</a></li>
          <li><a href="/hizmetler/geo-generative-engine-optimization" style="color: #94A3B8; text-decoration: none;">GEO Optimizasyonu</a></li>
          <li><a href="/hizmetler/web-sitesi-landing-page" style="color: #94A3B8; text-decoration: none;">Web Sitesi & Landing Page</a></li>
          <li><a href="/hizmetler/saglik-turizmi-crm-yazilimi" style="color: #94A3B8; text-decoration: none;">Sağlık Turizmi CRM</a></li>
          <li><a href="/hizmetler/yapay-zeka-otomasyon" style="color: #94A3B8; text-decoration: none;">Yapay Zekâ & AI Call Agent</a></li>
        </ul>
      </div>
      <div>
        <h4 style="font-size: 15px; margin-bottom: 12px; color: #60A5FA;">Klinik Branşları</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="/sac-ekimi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Saç Ekimi Ajansı</a></li>
          <li><a href="/dis-klinigi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Diş Kliniği Ajansı</a></li>
          <li><a href="/estetik-klinigi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Estetik Kliniği Ajansı</a></li>
          <li><a href="/plastik-cerrahi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Plastik Cerrahi Ajansı</a></li>
          <li><a href="/obezite-cerrahisi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Obezite Cerrahisi Ajansı</a></li>
          <li><a href="/tup-bebek-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Tüp Bebek (IVF) Ajansı</a></li>
        </ul>
      </div>
      <div>
        <h4 style="font-size: 15px; margin-bottom: 12px; color: #60A5FA;">Hedef Pazarlar & Şehirler</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 2;">
          <li><a href="/ingiltere-saglik-turizmi-reklamlari" style="color: #94A3B8; text-decoration: none;">İngiltere (UK) Pazarı</a></li>
          <li><a href="/almanya-saglik-turizmi-reklamlari" style="color: #94A3B8; text-decoration: none;">Almanya (DACH) Pazarı</a></li>
          <li><a href="/fransa-saglik-turizmi-reklamlari" style="color: #94A3B8; text-decoration: none;">Fransa Pazarı</a></li>
          <li><a href="/hollanda-saglik-turizmi-reklamlari" style="color: #94A3B8; text-decoration: none;">Hollanda Pazarı</a></li>
          <li><a href="/istanbul-saglik-turizmi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">İstanbul Ajansı</a></li>
          <li><a href="/antalya-saglik-turizmi-reklam-ajansi" style="color: #94A3B8; text-decoration: none;">Antalya Ajansı</a></li>
        </ul>
      </div>
      <div>
        <h4 style="font-size: 15px; margin-bottom: 12px; color: #60A5FA;">Kurumsal & İletişim</h4>
        <p style="color: #94A3B8; line-height: 1.6; margin-bottom: 8px;">Overseas Marketing; sağlık turizminde klinik ve hekimler için büyüme stratejileri tasarlar.</p>
        <p style="color: #94A3B8; line-height: 1.6; margin-bottom: 8px;"><strong>Telefon:</strong> 0536 319 76 97</p>
        <p style="color: #64748B; font-size: 11px; margin-top: 12px; line-height: 1.5;">Overseas Marketing bir sağlık hizmeti sunucusu veya aracı kuruluş değildir. Pazarlama ve teknoloji danışmanlığı sağlar.</p>
      </div>
    </div>
  </footer>
`;

let generatedCount = 0;

for (const route of ROUTES) {
  const canonicalUrl = `${BASE_DOMAIN}${route.path === '/' ? '' : route.path}`;

  // Replace Title with data-rh="true"
  let pageHtml = templateHtml.replace(
    /<title.*?>.*?<\/title>/i,
    `<title data-rh="true">${route.title}</title>`
  );

  // Replace Description with data-rh="true"
  pageHtml = pageHtml.replace(
    /<meta[^>]*?name=["']description["'][^>]*?>/i,
    `<meta data-rh="true" name="description" content="${route.description}" />`
  );

  // Replace Canonical with data-rh="true" and www
  pageHtml = pageHtml.replace(
    /<link[^>]*?rel=["']canonical["'][^>]*?>/i,
    `<link data-rh="true" rel="canonical" href="${canonicalUrl}" />`
  );

  // Replace Open Graph Title & Description
  pageHtml = pageHtml.replace(
    /<meta[^>]*?property=["']og:title["'][^>]*?>/i,
    `<meta data-rh="true" property="og:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta[^>]*?property=["']og:description["'][^>]*?>/i,
    `<meta data-rh="true" property="og:description" content="${route.description}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta[^>]*?property=["']og:url["'][^>]*?>/i,
    `<meta data-rh="true" property="og:url" content="${canonicalUrl}" />`
  );

  // Replace Twitter Title & Description
  pageHtml = pageHtml.replace(
    /<meta[^>]*?name=["']twitter:title["'][^>]*?>/i,
    `<meta data-rh="true" name="twitter:title" content="${route.title}" />`
  );
  pageHtml = pageHtml.replace(
    /<meta[^>]*?name=["']twitter:description["'][^>]*?>/i,
    `<meta data-rh="true" name="twitter:description" content="${route.description}" />`
  );

  // Remove hero image preload on subpages to optimize LCP and bandwidth
  if (route.path !== '/') {
    pageHtml = pageHtml.replace(
      /<link rel="preload" as="image" href="\/images\/hero_health_tech\.jpg" fetchpriority="high" \/>\s*/i,
      ''
    );
  }

  // Inject Static Machine-Scannable Crawl Body inside <div id="root">
  const staticCrawlBody = `
    <div id="root">
      ${navHeaderHtml}
      <main style="max-width: 1200px; margin: 0 auto; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <h1 style="font-size: 32px; color: #16202E; margin-bottom: 16px; line-height: 1.2;">${route.h1}</h1>
        <p style="font-size: 16px; color: #595F69; line-height: 1.6; margin-bottom: 24px;">${route.description}</p>
        <div style="margin-top: 24px; line-height: 1.6; color: #222222;">
          ${route.content}
        </div>
      </main>
      ${navFooterHtml}
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

// Generate 404.html for Vercel and web servers
const notFoundHtml = templateHtml
  .replace(/<title.*?>.*?<\/title>/i, '<title data-rh="true">404 - Sayfa Bulunamadı | Overseas Marketing</title>')
  .replace(/<meta[^>]*?name=["']description["'][^>]*?>/i, '<meta data-rh="true" name="description" content="Aradığınız sayfa bulunamadı. Overseas Marketing ana sayfasına dönerek sağlık turizmi büyüme çözümlerini inceleyebilirsiniz." />')
  .replace(/<meta[^>]*?name=["']robots["'][^>]*?>/i, '<meta data-rh="true" name="robots" content="noindex, follow" />')
  .replace(/<link[^>]*?rel=["']canonical["'][^>]*?>/i, `<link data-rh="true" rel="canonical" href="${BASE_DOMAIN}/404" />`)
  .replace(/<link rel="preload" as="image" href="\/images\/hero_health_tech\.jpg" fetchpriority="high" \/>\s*/i, '')
  .replace(
    /<div id="root"><\/div>/i,
    `
    <div id="root">
      ${navHeaderHtml}
      <main style="max-width: 800px; margin: 0 auto; padding: 60px 20px; text-align: center; font-family: sans-serif;">
        <h1 style="font-size: 56px; color: #16202E; margin-bottom: 8px;">404</h1>
        <h2 style="font-size: 24px; color: #16202E; margin-bottom: 16px;">Sayfa Bulunamadı</h2>
        <p style="color: #595F69; font-size: 16px; margin-bottom: 24px;">Aradığınız sayfa taşınmış veya silinmiş olabilir. Aşağıdaki bağlantıları kullanarak ana sayfaya dönebilirsiniz.</p>
        <a href="/" style="display: inline-block; padding: 12px 24px; background: #446CB5; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: bold;">Ana Sayfaya Dön</a>
      </main>
      ${navFooterHtml}
    </div>
    `.trim()
  );

fs.writeFileSync(path.resolve(distDir, '404.html'), notFoundHtml, 'utf-8');
console.log('✅ dist/404.html başarıyla üretildi!');

console.log(`✅ ${generatedCount} adet sayfa için zengin statik HTML retrieval dosyası başarıyla üretildi!`);
