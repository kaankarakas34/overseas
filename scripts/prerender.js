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

const NOINDEX_URLS = new Set([
  '/saglik-turizmi-isletmeciligi/taban-puanlari',
  '/saglik-turizmi-isletmeciligi/dgs',
  '/cumhuriyet-universitesi-saglik-turizmi-isletmeciligi',
  '/saglik-turizmi-slayt',
  '/saglik-turizmi-tezleri',
  '/saglik-turizmi-is-ilanlari',
  '/saglik-turizmi-isletmeciligi/maaslari',
  '/saglik-turizmi/maaslari'
]);

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

  // 2b. Doktor Reklam Ajansı
  {
    path: '/doktor-reklam-ajansi',
    title: 'Doktor Reklam Ajansı | SEO, GEO, YouTube, LinkedIn ve PR | Overseas Marketing',
    description: 'Doktorlar için mevzuata uygun SEO, GEO, YouTube, Instagram, LinkedIn ve PR stratejileri. Reklam yasağını gözeten, ceza riski olmayan sürdürülebilir hekim görünürlüğü.',
    h1: 'Doktor Reklam Ajansı: Mevzuata Uygun Dijital Görünürlük ve Uzmanlık İletişimi',
    content: `
      <section>
        <h2>Mevzuata Uygun Hekim Tanıtımı ve Dijital Otorite Modeli</h2>
        <p>Türkiye’de 12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete’de yayımlanan yönetmelik uyarınca sağlık hizmetlerinde açık veya örtülü reklam kesinlikle yasaktır. Overseas Marketing; yasağı delmek yerine mevzuatın izin verdiği organik SEO, GEO, YouTube eğitici serileri, LinkedIn düşünce liderliği ve saygın basında kamu yararına uzman görüşü sunarak hekiminizi ceza riski olmadan arama motorlarında ve yapay zekâ cevaplarında bir numaralı güvenilir uzman konumuna taşır.</p>
        <p>1219 sayılı Kanun, 3359 sayılı Temel Kanun ve 6698 sayılı KVKK standartlarına tam uyumlu yayın öncesi çift göz denetimi ile çalışıyoruz.</p>
      </section>
      <section style="margin-top: 30px;">
        <h2>Doktorlar İçin 6 Temel Hizmet Sütunumuz</h2>
        <ul style="line-height: 1.8;">
          <li><a href="/doktorlar-icin-seo-ve-geo"><strong>Doktor SEO ve GEO Hizmeti:</strong></a> Google ve yapay zekâ cevaplarında (ChatGPT, Gemini, Perplexity, AI Overviews) birincil kaynak olarak alıntılanma.</li>
          <li><a href="/doktorlar-icin-youtube-instagram-icerik-pazarlamasi"><strong>YouTube ve Instagram İçerik Yönetimi:</strong></a> Deontolojiye uygun hasta bilgilendirme serileri ve mit kırma formatları.</li>
          <li><a href="/doktorlar-icin-linkedin-pazarlamasi"><strong>LinkedIn Düşünce Liderliği:</strong></a> Akademi, meslektaşlar ve sağlık yöneticileri nezdinde hekim kişisel marka yönetimi.</li>
          <li><a href="/doktor-pr-medya-tanitimi"><strong>Doktor Medya PR ve Basın Danışmanlığı:</strong></a> AA, TRT, NTV gibi ulusal kanallarda editoryal uzman görüşü sunma.</li>
          <li><a href="/saglik-turizmi-reklami-nasil-verilir"><strong>Uluslararası Sağlık Turizmi Tanıtımı:</strong></a> Yetki belgesi şartıyla çok dilli yurt dışı reklam kurulumu.</li>
        </ul>
      </section>
    `
  },

  // 2c. Sağlık Turizmi Reklamı Nasıl Verilir?
  {
    path: '/saglik-turizmi-reklami-nasil-verilir',
    title: 'Sağlık Turizmi Reklamı Nasıl Verilir? Meta, Google Ads ve CRM Rehberi | Overseas Marketing',
    description: 'Sağlık turizmi nasıl reklam verilir? Meta reklamları tek ülke stratejisi, Google Ads anahtar kelime eşleme türleri, form soruları ve sağlık turizmi CRM entegrasyonu rehberi.',
    h1: 'Sağlık Turizmi Reklamı Nasıl Verilir? Meta Ads, Google Ads ve CRM İle Hasta Kazanımı',
    content: `
      <section>
        <h2>Uluslararası Sağlık Turizmi Reklam Stratejisi</h2>
        <p>Sağlık turizmi reklamı; yetki belgeli sağlık kuruluşları tarafından münhasıran yurt dışına yönelik yabancı dildeki varlıklar üzerinden yürütülür. Başarılı bir uluslararası hasta kazanımı; Meta Ads üzerinde tek ülke ve niş kitle hedeflemesi, Google Ads üzerinde long-tail hasta niyetli sorgular, saat dilimi filtreli formlar ve özel bir sağlık turizmi CRM yazılımı ile mümkündür.</p>
      </section>
      <section style="margin-top: 30px;">
        <h2>Meta Reklamlarında Tek Ülke ve Niş Kitleler</h2>
        <p>Bütün Avrupa'yı tek seferde hedeflemek Meta algoritmasının öğrenme sürecini bozar. İngiltere, Almanya veya Fransa için ayrı ayrı kampanyalar kurulmalı, yerel dilde aksansız video kreatifler kullanılmalı ve eldeki geçmiş hasta verisiyle Lookalike (benzer kitleler) üretilmelidir.</p>
        <p><a href="/hizmetler/saglik-turizmi-meta-reklamlari">Sağlık Turizmi Meta Reklamları</a> hizmetimizi inceleyebilirsiniz.</p>
      </section>
      <section style="margin-top: 30px;">
        <h2>Google Ads Eşleme Türleri ve Negatif Stratejisi</h2>
        <p>Jenerik tekil kelimeler yerine 'hair transplant in Istanbul' gibi long-tail cerrahi aramalara odaklanılmalı; sıralı eşleme ve tam eşleme dengesi kurulmalıdır. 'Ücretsiz', 'bedava', 'iş ilanları' ve kamu hastaneleri gibi alakasız aramalar negatif anahtar kelimeler ile elenmelidir.</p>
        <p><a href="/hizmetler/saglik-turizmi-google-ads">Sağlık Turizmi Google Ads Yönetimi</a> ve <a href="/hizmetler/saglik-turizmi-crm-yazilimi">Sağlık Turizmi CRM Yazılımı</a> sayfalarımızdan detaylı bilgi alabilirsiniz.</p>
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
  },
  // --- 7. Temel Kurumsal, Güven & Dönüşüm Merkezleri ---
  {
    path: '/hakkimizda',
    title: 'Hakkımızda | Overseas Marketing Sağlık Turizmi Reklam Ajansı',
    description: 'Overseas Marketing: Sağlık turizminde performans pazarlama, uluslararası SEO, özel CRM ve yapay zekâ otomasyonlarını birleştiren büyüme ajansı.',
    h1: 'Sağlık Turizminde Büyüme ve Hasta Kazanım Ortaklığı',
    content: `
      <section>
        <h2>Overseas Marketing Yaklaşımı ve İlkeleri</h2>
        <p>Overseas Marketing; sağlık turizminde klinik, hastane ve cerrahların İngiltere, DACH ve Avrupa pazarlarından sürdürülebilir yabancı hasta başvurusu elde etmesini sağlayan entegre büyüme ajansıdır.</p>
        <p>Sağlık Bakanlığı tanıtım mevzuatına tam uyumlu, şeffaf metrikler ve veri odaklı hasta kazanım mimarisi inşa ediyoruz.</p>
      </section>
    `
  },
  {
    path: '/ekibimiz',
    title: 'Ekibimiz ve Uzman Kadromuz | Overseas Marketing',
    description: 'Overseas Marketing\'in sağlık turizmi stratejistleri, medikal SEO uzmanları ve CRM mühendisleriyle tanışın. E-E-A-T uyumlu profesyonel kadro.',
    h1: 'Sağlık Turizmi Uzman ve Strateji Ekibimiz',
    content: `
      <section>
        <h2>E-E-A-T Medikal Büyüme Ekibi</h2>
        <p>Hekim etiğine, medikal terminolojiye ve uluslararası hasta psikolojisine hakim büyüme direktörleri, teknik SEO mühendisleri ve prodüksiyon ekibimizle hizmet veriyoruz.</p>
      </section>
    `
  },
  {
    path: '/referanslar',
    title: 'Referanslarımız ve Sağlık Kuruluşları | Overseas Marketing',
    description: 'Overseas Marketing ile uluslararası hasta edinimini büyüten doğrulanabilir klinik, hastane ve hekim referansları.',
    h1: 'Birlikte Büyüdüğümüz Sağlık Markaları ve Referanslarımız',
    content: `
      <section>
        <h2>Doğrulanabilir Sağlık Kuruluşu İş Ortaklıkları</h2>
        <p>Türkiye\'nin yetkili diş klinikleri, saç ekim merkezleri, estetik cerrahları ve hastaneleriyle yürüttüğümüz uluslararası hasta büyüme referanslarımız.</p>
      </section>
    `
  },
  {
    path: '/basari-hikayeleri',
    title: 'Sağlık Turizmi Başarı Hikayeleri ve Vaka Analizleri | Overseas Marketing',
    description: 'Hospitadent, Metropolmed, Fertijin, Çevredent, Global Medical Care, Klinik Artı, Nova Diş ve Pro Klinik: Sağlık turizmi vaka analizleri ve ölçülebilir büyüme hikayeleri.',
    h1: 'Sağlık Turizmi Başarı Hikayeleri ve Ölçülebilir Sonuçlar',
    content: `
      <section>
        <h2>Sorun → Strateji → Ölçülebilir Sonuç Modeli</h2>
        <p>Hospitadent, Metropolmed, Fertijin, Çevredent, Global Medical Care, Klinik Artı, Nova Diş ve Pro Klinik ile elde edilen rekor lead, CPL düşüşü ve uluslararası hasta büyümesi.</p>
        <ul>
          <li><strong>Hospitadent:</strong> Tümleşik satış yapısı, PR ve referans hasta kurgusuyla aylık 2.000+ lead ve %48 satış artışı.</li>
          <li><strong>Metropolmed:</strong> Saç ekimi ve estetikte 360° sosyal medya yönetimi ve aylık 2.000+ lead.</li>
          <li><strong>Fertijin:</strong> Tüp bebekte hekim marka otoritesi ve Avrupa'dan %210 hasta artışı.</li>
          <li><strong>Çevredent:</strong> Kurumsal kimlik, CRO odaklı web sitesi ve dental SEO dominasyonu.</li>
          <li><strong>Global Medical Care:</strong> İspanya, UK, Fransa ve İsviçre'de SEO dominasyonu ve aylık 1.400+ lead.</li>
          <li><strong>Klinik Artı:</strong> İngiltere'de 1.000+ lead, 2 yeni marka lansmanı ve aylık 5.000+ lead.</li>
          <li><strong>Nova Diş:</strong> Birleşik Krallık dental SEO liderliği ve İngiltere'den aylık 2.000+ lead.</li>
          <li><strong>Pro Klinik:</strong> Avrupa SEO dominasyonu, MENA Arapça açılımı ve aylık 500+ cerrahi lead.</li>
        </ul>
      </section>
    `
  },
  {
    path: '/iletisim',
    title: 'İletişim | Overseas Marketing Sağlık Turizmi Reklam Ajansı',
    description: 'Overseas Marketing ile iletişime geçin: Sağlık turizmi strateji toplantısı planlayın, ajans telefon, e-posta, WhatsApp ve adres bilgileri.',
    h1: 'Kliniğinizin Uluslararası Büyüme Stratejisini Birlikte Planlayalım',
    content: `
      <section>
        <h2>Doğrudan İletişim & Strateji Görüşmesi</h2>
        <p>Telefon: 0536 319 76 97 | E-posta: info@overseas.marketing</p>
        <p>Maslak Mah. Büyükdere Cad. No:255, Sarıyer / İstanbul</p>
      </section>
    `
  },
  {
    path: '/teklif-al',
    title: 'Sağlık Turizmi Teklif Al | Bütçe ve CPL Analizi | Overseas Marketing',
    description: 'Kliniğinize özel sağlık turizmi pazarlama teklifi alın: Tahmini lead başı maliyet (CPL), hedef ülke büyüme planı ve reklam bütçe simülasyonu.',
    h1: 'Kliniğinize Özel Sağlık Turizmi Pazarlama Teklifi ve Bütçe Planı',
    content: `
      <section>
        <h2>24 Saatte Hazırlanan Kişiselleştirilmiş Büyüme Teklifi</h2>
        <p>Branşınızı ve hedef pazarınızı seçin; rakiplerinizi ve tahmini başvuru maliyetlerinizi analiz ederek özel büyüme yol haritanızı iletelim.</p>
      </section>
    `
  },
  {
    path: '/metodoloji',
    title: 'Sağlık Turizmi Büyüme Metodolojimiz | Overseas Marketing',
    description: 'Overseas Marketing\'in 6 aşamalı sağlık turizmi büyüme metodolojisi: Analiz, strateji, dönüşüm altyapısı, çok kanallı reklam, CRM ve yapay zekâ ölçekleme.',
    h1: 'İlk Aramadan Ameliyata: 6 Aşamalı Bilimsel Büyüme Metodolojisi',
    content: `
      <section>
        <h2>Süreç Mühendisliği ile Hasta Kazanımı</h2>
        <p>1. Klinik Analizi → 2. Strateji & Funnel → 3. Teknik Altyapı & CRM → 4. Çok Kanallı Reklam → 5. Satış Geri Bildirimi & CRO → 6. Yapay Zekâ Ölçekleme.</p>
      </section>
    `
  },
  {
    path: '/sektorler',
    title: 'Hizmet Verdiğimiz Sağlık Branşları ve Sektörler | Overseas Marketing',
    description: 'Diş klinikleri, saç ekimi, plastik cerrahi, tüp bebek, obezite, göz ve hastaneler için özel sağlık turizmi pazarlama çözümleri.',
    h1: 'Her Klinik Branşı İçin Özelleştirilmiş Hasta Edinme Çözümleri',
    content: `
      <section>
        <h2>15+ Sağlık Branşı ve Klinik Çözümü</h2>
        <p>Diş, saç ekimi, estetik cerrahi, tüp bebek, obezite, göz, ortopedi, dermatoloji ve hastaneler için özelleştirilmiş pazarlama modelleri.</p>
      </section>
    `
  },
  {
    path: '/ulkeler',
    title: 'Hedef Ülkeler ve Uluslararası Sağlık Turizmi Pazarları | Overseas Marketing',
    description: 'İngiltere, Almanya, Fransa, Hollanda ve Körfez pazarlarında sağlık turizmi reklam yönetimi, hasta profilleri ve pazar dinamikleri rehberi.',
    h1: 'Hedef Pazarlar: Avrupa ve Birleşik Krallık\'ta Hasta Kazanımı',
    content: `
      <section>
        <h2>Uluslararası Pazar Dinamikleri ve Sağlık Koridorları</h2>
        <p>İngiltere NHS bekleme süreleri, Alman JCI akreditasyon beklentisi ve Körfez VIP hasta talepleri doğrultusunda yerelleştirilmiş stratejiler.</p>
      </section>
    `
  },
  {
    path: '/blog',
    title: 'Sağlık Turizmi Rehberi ve Bilgi Merkezi | Overseas Marketing',
    description: 'Sağlık turizmi pazarlaması, SEO, GEO, Google Ads reklamları, mevzuat, yetki belgeleri ve hasta kazanımı hakkında kapsamlı rehberler.',
    h1: 'Sağlık Turizmi Bilgi Merkezi ve Strateji Kütüphanesi',
    content: `
      <section>
        <h2>10 Temel Konu Kümesinde Derinlemesine Rehberler</h2>
        <p>Mevzuat, teşvikler, Google Ads, Meta video kreatifleri, SEO, GEO ve CRM otomasyonları hakkında uzmanlarımızca hazırlanan sektörel rehberler.</p>
      </section>
    `
  },
  {
    path: '/kaynaklar',
    title: 'Sağlık Turizmi Kaynakları ve Analiz Merkezi | Overseas Marketing',
    description: 'Sağlık turizmi büyüme rehberleri, mevzuat analizleri ve performans pazarlama kılavuzları kütüphanesi.',
    h1: 'Sağlık Turizmi Kaynakları ve Analiz Merkezi',
    content: `
      <section>
        <h2>Sektörel Raporlar ve Araştırma Kılavuzları</h2>
        <p>Uluslararası hasta ediniminde klinik ve hekimlerin başvurabileceği kapsamlı bilgi arşivi.</p>
      </section>
    `
  },
  {
    path: '/yazarlar',
    title: 'Editoryal Kadro ve Yazarlarımız | Overseas Marketing',
    description: 'Overseas Marketing rehberlerinin, vaka analizlerinin ve mevzuat içeriklerinin arkasındaki editoryal kadro ve sağlık turizmi stratejistleri.',
    h1: 'Editoryal Kadromuz ve Sağlık Turizmi Stratejistlerimiz',
    content: `
      <section>
        <h2>E-E-A-T Otorite ve Editoryal Şeffaflık</h2>
        <p>Sağlık turizmi rehberlerimizin ve pazar analizlerimizin arkasındaki uzman yazar kadrosu ve kaynak doğrulama politikalarımız.</p>
      </section>
    `
  },
  {
    path: '/kvkk',
    title: 'KVKK Aydınlatma Metni | Overseas Marketing',
    description: '6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni ve veri güvenliği bildirimi.',
    h1: 'Kişisel Verilerin Korunması (KVKK) Aydınlatma Metni',
    content: `
      <section>
        <h2>Veri Güvenliği ve Gizlilik Politikası</h2>
        <p>Overseas Marketing veri sorumlusu sıfatıyla kişisel verilerinizin gizliliğine ve güvenliğine azami hassasiyet göstermektedir.</p>
      </section>
    `
  },
  {
    path: '/gizlilik-politikasi',
    title: 'Gizlilik Politikası | Overseas Marketing',
    description: 'Overseas Marketing web sitesi gizlilik ilkeleri ve kullanıcı hakları bildirimi.',
    h1: 'Gizlilik Politikası ve Güvenlik Standartları',
    content: `
      <section>
        <h2>Gizlilik Bildirimi</h2>
        <p>Kullanıcı verilerinin işlenmesi, korunması ve çerez kullanım prensipleri hakkında yasal bilgilendirme.</p>
      </section>
    `
  },
  {
    path: '/cerez-politikasi',
    title: 'Çerez Politikası (Cookie Policy) | Overseas Marketing',
    description: 'Web sitemizde kullanılan çerezler, analitik araçlar ve tercihlerinizi yönetme rehberi.',
    h1: 'Çerez Politikası (Cookie Policy)',
    content: `
      <section>
        <h2>Çerez Kullanımı ve Tercihler</h2>
        <p>Web sitemizin performansını artırmak ve analitik ölçüm sağlamak amacıyla kullanılan çerezlere dair bilgilendirme.</p>
      </section>
    `
  },
  {
    path: '/aydinlatma-metni',
    title: 'Aydınlatma Metni | Overseas Marketing',
    description: 'İletişim formları ve teklif talepleri kapsamında işlenen kişisel verilere ilişkin aydınlatma bildirimi.',
    h1: 'Aydınlatma Metni ve Açık Rıza Bildirimi',
    content: `
      <section>
        <h2>Aydınlatma Metni</h2>
        <p>Form ve teklif taleplerinde paylaştığınız kişisel verilerin işlenme kapsamı ve haklarınız.</p>
      </section>
    `
  },

  // --- 8. Yeni Branş Sayfaları (6 Branş) ---
  {
    path: '/klinik-reklam-ajansi',
    title: 'Klinik Reklam Ajansı | Özel Klinik Dijital Pazarlama | Overseas',
    description: 'Özel poliklinikler, tıp merkezleri ve butik klinikler için Google Ads, Meta reklamları, yerel SEO ve hasta randevu otomasyonu sunan dijital büyüme ajansı.',
    h1: 'Klinik Reklam Ajansı: Özel Klinikler ve Tıp Merkezleri İçin Büyüme',
    content: `
      <section>
        <h2>Özel Klinik ve Polikliniklere Özel Hasta Kazanım Modeli</h2>
        <p>Hekim uzmanlığını ve kliniğin konforunu öne çıkaran çok branşlı reklam mimarisi, WhatsApp randevu otomasyonu ve yerel SEO çalışmaları.</p>
      </section>
    `
  },
  {
    path: '/dermatoloji-reklam-ajansi',
    title: 'Dermatoloji Reklam Ajansı | Cilt Kliniği Dijital Pazarlama | Overseas',
    description: 'Dermatoloji uzmanları ve cilt sağlığı klinikleri için akne, leke, lazer tedavileri ve medikal dermatolojide etik ve mevzuata uygun hasta kazanım yönetimi.',
    h1: 'Dermatoloji Reklam Ajansı: Cilt Klinikleri İçin Hasta Kazanımı',
    content: `
      <section>
        <h2>Dermatoloji ve Cilt Sağlığında E-E-A-T Odaklı Büyüme</h2>
        <p>Akne, leke ve lazer tedavilerinde hekimin uzmanlığını ve bilimsel yetkinliğini öne çıkaran etik sağlık pazarlaması.</p>
      </section>
    `
  },
  {
    path: '/medikal-estetik-reklam-ajansi',
    title: 'Medikal Estetik Reklam Ajansı | Botoks & Dolgu Pazarlaması | Overseas',
    description: 'Medikal estetik hekimleri için botoks, dolgu, gençlik aşısı ve ameliyatsız yüz germe işlemlerinde Meta reklamları ve hasta randevu yönetimi.',
    h1: 'Medikal Estetik Reklam Ajansı: Ameliyatsız Tedavi Pazarlaması',
    content: `
      <section>
        <h2>Medikal Estetikte Güven ve Doğal Sonuç Odaklı İletişim</h2>
        <p>Instagram Reels ve TikTok video kreatifleri, tek tıkla WhatsApp randevu akışı ve hasta sadakat sistemleri.</p>
      </section>
    `
  },
  {
    path: '/fizik-tedavi-reklam-ajansi',
    title: 'Fizik Tedavi Reklam Ajansı | FTR Pazarlama & Hasta Edinimi | Overseas',
    description: 'Robotik rehabilitasyon, nörolojik ve ortopedik fizik tedavi merkezleri için Avrupa, Körfez ve BDT ülkelerinden uzun dönemli hasta kazanımı.',
    h1: 'Fizik Tedavi Reklam Ajansı: Rehabilitasyon Merkezleri İçin Pazarlama',
    content: `
      <section>
        <h2>Robotik Rehabilitasyon ve FTR Sağlık Turizmi</h2>
        <p>İnme, omurilik ve nörolojik rehabilitasyon gerektiren uluslararası hastalara yönelik teknoloji ve refakatçi odaklı hasta kurgusu.</p>
      </section>
    `
  },
  {
    path: '/ortopedi-reklam-ajansi',
    title: 'Ortopedi Reklam Ajansı | Ortopedik Cerrahi Pazarlaması | Overseas',
    description: 'Robotik diz ve kalça protezi, omurga cerrahisi ve spor cerrahisinde İngiltere ve Avrupa hastalarına ulaşan performans ve SEO ajansı.',
    h1: 'Ortopedi Reklam Ajansı: Eklem Protezi ve Cerrahi Hasta Kazanımı',
    content: `
      <section>
        <h2>İngiltere NHS Bekleme Sürelerini Fırsata Dönüştüren Model</h2>
        <p>Robotik diz ve kalça protezinde cerrah tecrübesini ve şeffaf iyileşme paketlerini öne çıkaran arama ağı reklamları.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-araci-kurulus-pazarlama',
    title: 'Sağlık Turizmi Aracı Kuruluş Pazarlama | Acente Büyüme Ajansı | Overseas',
    description: 'Sağlık Bakanlığı yetki belgeli aracı kuruluşlar ve sağlık turizmi acenteleri için çok dilli Google Ads, Meta reklamları, CRM ve operasyonel büyüme yönetimi.',
    h1: 'Sağlık Turizmi Aracı Kuruluş Pazarlama ve Acente Büyüme Yönetimi',
    content: `
      <section>
        <h2>Yetkili Aracı Kuruluşlar İçin Küresel Hasta Ağları</h2>
        <p>Anlaşmalı hastane ağlarını, VIP transfer ve otel paketlerini şeffafça sunan yüksek dönüşümlü acente büyüme altyapısı.</p>
      </section>
    `
  },

  // --- 9. Yeni Hizmet Pillar Sayfaları (Google Ads, Meta, Landing Page vb.) ---
  {
    path: '/saglik-turizmi-google-ads',
    title: 'Sağlık Turizmi Google Ads Ajansı | Klinik Google Reklamları | Overseas',
    description: 'Diş, saç ekimi ve cerrahi kliniklerine özel çok dilli Google Ads arama kampanyaları, negatif anahtar kelime filtreleri ve offline dönüşüm takibi.',
    h1: 'Sağlık Turizmi Google Ads Ajansı ve Uluslararası Arama Reklamları',
    content: `
      <section>
        <h2>Yüksek Niyetli Arama Trafiğini Hastaya Dönüştürün</h2>
        <p>Google Ads arama ağında yüksek tedavi niyetli sorgular (Search Intent), negatif kelime optimizasyonu ve CRM offline dönüşüm entegrasyonu.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-meta-reklamlari',
    title: 'Sağlık Turizmi Meta Reklam Ajansı | Instagram Klinik Reklamları | Overseas',
    description: 'Klinik ve cerrahlar için Instagram ve Facebook video reklamları, çok dilli hedef kitle segmentasyonu ve doğrudan WhatsApp lead akışı.',
    h1: 'Sağlık Turizmi Meta Reklamları: Instagram ve Facebook Hasta Edinimi',
    content: `
      <section>
        <h2>Görsel Güven ve Video Prodüksiyon Odaklı Meta Reklamları</h2>
        <p>Avrupa ve İngiltere hastaları için ameliyat öncesi/sonrası süreç anlatımları, hekim güveni ve doğrudan WhatsApp sohbet reklamları.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-landing-page',
    title: 'Sağlık Turizmi Landing Page Tasarımı | Hasta Dönüşüm Sayfası | Overseas',
    description: 'Yabancı hastaların güven bariyerini aşan, çok dilli, hızlı ve yüksek dönüşüm oranlı sağlık turizmi açılış sayfaları ve CRO optimizasyonu.',
    h1: 'Sağlık Turizmi İçin Dönüşüm Odaklı Landing Page Tasarımı',
    content: `
      <section>
        <h2>2 Saniyenin Altında Açılan Hızlı ve Yüksek Dönüşümlü Sayfalar</h2>
        <p>UX araştırması, şeffaf tedavi aşamaları, E-E-A-T rozetleri ve sürtünmesiz lead formlarıyla yabancı ziyaretçileri randevuya dönüştürün.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-reklam-ajansi',
    title: 'Sağlık Turizmi Reklam Ajansı | Overseas Marketing',
    description: 'Sağlık turizminde performans pazarlama, SEO, GEO, dönüşüm odaklı web siteleri, özel CRM ve yapay zekâ otomasyonları. Büyümenizi birlikte planlayalım.',
    h1: 'Sağlık Turizmi Reklam Ajansı: Performans, SEO ve CRM Çözümleri',
    content: `
      <section>
        <h2>Entegre Sağlık Turizmi Büyüme Modeli</h2>
        <p>Google Ads, Meta reklamları, uluslararası SEO, GEO, WhatsApp CRM ve yapay zekâ hasta karşılama botları tek büyüme çatısı altında.</p>
      </section>
    `
  },
  {
    path: '/saglik-reklam-ajansi',
    title: 'Sağlık Reklam Ajansı | Medikal Pazarlama ve Klinik Reklamları | Overseas',
    description: 'Klinikler, hastaneler ve doktorlar için mevzuata uygun medikal reklam yönetimi, dijital pazarlama ve hasta edinim altyapısı.',
    h1: 'Sağlık Reklam Ajansı: Klinikler ve Doktorlar İçin Medikal Pazarlama',
    content: `
      <section>
        <h2>Medikal Etik ve Mevzuat Uyumlu Sağlık Pazarlaması</h2>
        <p>Sağlık sektörüne özel pazarlama dinamikleri, hekim itibar yönetimi ve kanıta dayalı hasta kazanım stratejileri.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-seo',
    title: 'Sağlık Turizmi SEO Ajansı | Çok Dilli Organik Büyüme | Overseas',
    description: 'Klinikler ve doktorlar için İngiltere, DACH ve Avrupa odaklı uluslararası SEO mimarisi, teknik altyapı ve E-E-A-T içerik stratejisi.',
    h1: 'Sağlık Turizmi SEO Ajansı: Uluslararası Organik Hasta Büyümesi',
    content: `
      <section>
        <h2>Çok Dilli Medikal SEO ve Hreflang Mimarisi</h2>
        <p>Hedef ülkelerin arama motorlarında üst sıralara çıkaran semantik içerik kurgusu, teknik denetim ve yerel otorite inşası.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-geo',
    title: 'Sağlık Turizmi GEO Ajansı | Generative Engine Optimization | Overseas',
    description: 'ChatGPT, Perplexity ve Google AI Overviews aramalarında kliniğinizin tavsiye edilmesini sağlayan yeni nesil GEO optimizasyonu.',
    h1: 'Generative Engine Optimization (GEO): AI Aramalarında Görünürlük',
    content: `
      <section>
        <h2>Yapay Zekâ Arama Motorlarında Kliniğinizi Kaynak Göstertin</h2>
        <p>Doğrudan cevap blokları, yapılandırılmış sağlık verisi ve entity ilişkileriyle yapay zekâ modellerinin kliniğinizi önermesini sağlayın.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-crm',
    title: 'Sağlık Turizmi CRM Yazılımı | Çok Dilli Hasta Takip Sistemi | Overseas',
    description: 'WhatsApp entegrasyonlu, çok dilli satış ekibi için optimize edilmiş ve teklif yönetimli özel sağlık turizmi CRM sistemi.',
    h1: 'Sağlık Turizmi CRM Yazılımı: Kayıp Lead\'leri Sıfırlayan Sistem',
    content: `
      <section>
        <h2>Satış Danışmanlarının Dönüşüm Hızını Artıran Altyapı</h2>
        <p>WhatsApp, form ve çağrı kanallarından gelen başvuruları tek panelde toplayan ve lead skorlama sunan özel sağlık CRM\'i.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-otomasyon',
    title: 'Sağlık Turizmi Otomasyonu | WhatsApp & Lead Takip Otomasyonu | Overseas',
    description: 'Hasta lead\'lerine saniyeler içinde dönüş sağlayan WhatsApp otomasyonları, akıllı randevu hatırlatıcıları ve CRM webhook\'ları.',
    h1: 'Sağlık Turizmi Otomasyonu: WhatsApp ve Satış Süreci Otomasyonları',
    content: `
      <section>
        <h2>Lead Dönüşüm Hızını Katlayan Otomasyon Kurguları</h2>
        <p>İlk karşılama, fotoğraf talep etme, doktor ön konsültasyon formu ve no-show önleme hatırlatıcıları.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizminde-yapay-zeka',
    title: 'Sağlık Turizminde Yapay Zekâ | AI Call Agent & Chatbot | Overseas',
    description: '7/24 çok dilli sesli yapay zekâ asistanları, AI hasta karşılama botları ve otomatik lead nitelik skorlaması.',
    h1: 'Sağlık Turizminde Yapay Zekâ Çözümleri ve AI Çağrı Asistanı',
    content: `
      <section>
        <h2>Gece ve Hafta Sonu Gelen Aramaları Anında Karşılayın</h2>
        <p>İngilizce, Almanca, Fransızca ve Arapça konuşan sesli yapay zekâ asistanlarıyla lead kayıplarını sonlandırın.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-web-tasarim',
    title: 'Sağlık Turizmi Web Tasarım Ajansı | Klinik Web Siteleri | Overseas',
    description: 'Yabancı hastalar için özel tasarlanmış, çok dilli, hızlı ve yüksek dönüşüm oranlı sağlık turizmi web siteleri ve açılış sayfaları.',
    h1: 'Sağlık Turizmi Web Tasarım Ajansı: Dönüşüm Odaklı Klinik Siteleri',
    content: `
      <section>
        <h2>Yabancı Hastayı Randevuya Dönüştüren Hızlı Web Siteleri</h2>
        <p>Modern arayüz, E-E-A-T hekim profilleri, çok dilli dil seçici ve mobil uyumlu randevu altyapısı.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-performans-pazarlama',
    title: 'Sağlık Turizmi Performans Pazarlama | Google Ads & Meta Reklamları | Overseas',
    description: 'İngiltere, Almanya ve Avrupa hedefli çok dilli Google Ads ve Meta reklam yönetimi. Yüksek niyetli yabancı hasta kazanımı.',
    h1: 'Sağlık Turizmi Performans Pazarlama: Uluslararası Hasta Kazanımı',
    content: `
      <section>
        <h2>Ölçülebilir CPL ve Yüksek ROI Odaklı Kampanyalar</h2>
        <p>Search Intent, video kreatifler, çok dilli açılış sayfaları ve satış CRM entegrasyonu.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-sosyal-medya-yonetimi',
    title: 'Sağlık Turizmi Sosyal Medya Yönetimi | Uluslararası İtibar | Overseas',
    description: 'Hekim ve klinik markaları için estetik ve cerrahi güven odaklı profesyonel sosyal medya içerik yönetimi.',
    h1: 'Sağlık Turizmi Sosyal Medya Yönetimi: Güven ve İtibar İnşası',
    content: `
      <section>
        <h2>Avrupa Hastasının Güvenini Kazanan İçerik Stratejisi</h2>
        <p>Instagram ve TikTok için cerrahi operasyon anlatımları, hasta deneyimleri ve hekim açıklamaları.</p>
      </section>
    `
  },
  {
    path: '/saglik-turizmi-icerik-pazarlamasi',
    title: 'Sağlık Turizmi İçerik Pazarlaması | Medikal Prodüksiyon | Overseas',
    description: 'Klinik içi profesyonel 4K video çekimleri, cerrahi operasyon anlatımları ve uluslararası hasta röportajları.',
    h1: 'Sağlık Turizmi İçerik Pazarlaması ve Klinik Prodüksiyonu',
    content: `
      <section>
        <h2>Kliniğinizi Dünya Standartlarında Gösteren Video Prodüksiyon</h2>
        <p>4K klinik çekimleri, cerrah güven videoları ve çok dilli hasta röportajları.</p>
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
  const isNoindex = NOINDEX_URLS.has(route.path);
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

  // Handle Noindex if low-intent or academic
  if (isNoindex) {
    pageHtml = pageHtml.replace(
      /<meta[^>]*?name=["']robots["'][^>]*?>/i,
      '<meta data-rh="true" name="robots" content="noindex, follow" />'
    );
  }

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
