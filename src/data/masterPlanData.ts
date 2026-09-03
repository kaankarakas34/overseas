export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  category: 'Görünürlük' | 'Dönüşüm' | 'Teknoloji' | 'İçerik';
  h1: string;
  seoTitle: string;
  metaDesc: string;
  fullDesc: string;
  highlights: string[];
  deliverables: string[];
  subChannels?: string[];
  faq: { q: string; a: string }[];
}

export interface CaseStudyItem {
  id: string;
  clinicType: 'Diş Kliniği' | 'Estetik Cerrahi' | 'Saç Ekimi' | 'Genel Hastane';
  country: string;
  title: string;
  summary: string;
  period: string;
  servicesGiven: string[];
  metrics: { label: string; value: string; note: string }[];
  image: string;
  approach: string;
}

export interface FaqItem {
  category: 'Genel' | 'Performans' | 'SEO & GEO' | 'CRM & AI' | 'Hukuk & Etik';
  question: string;
  answer: string;
}

export const MASTER_SERVICES: ServiceItem[] = [
  {
    id: 'performans-pazarlama',
    title: 'Sağlık Turizmi Reklam Yönetimi',
    shortDesc: 'Kliniğinizin uluslararası hastalara ulaşması için reklam kampanyalarını planlıyor, yönetiyor ve geliştiriyoruz.',
    iconName: 'TrendingUp',
    category: 'Görünürlük',
    h1: 'Sağlık Turizmi Reklam Yönetimi',
    seoTitle: 'Sağlık Turizmi Reklam Yönetimi | Overseas Marketing',
    metaDesc: 'Sağlık turizmi reklam ajansı Overseas Marketing olarak hedef ülkenize, hizmetlerinize ve bütçenize uygun dijital reklam stratejileri oluşturuyoruz.',
    fullDesc: 'Kliniğinizin uluslararası hastalara ulaşması için reklam kampanyalarınızı planlıyor, yönetiyor ve geliştiriyoruz. Sağlık turizmi reklam ajansı Overseas Marketing olarak hedef ülkenize, hizmetlerinize ve bütçenize uygun dijital reklam stratejileri oluşturuyoruz.',
    highlights: [
      'Google Ads Yönetimi (Sağlık aramalarında üst sırada listelenme)',
      'Meta Ads Yönetimi (Facebook ve Instagram görsel/video reklamları)',
      'Yandex Ads Yönetimi (BDT ve Rusya pazarına özel Rusça reklamlar)',
      'LinkedIn Ads Yönetimi (B2B sağlık turizmi ve aracı kurum hedefleme)',
      'TikTok Ads Yönetimi (Kısa video kreatifleri ve genç hedef kitle)'
    ],
    deliverables: [
      'Hedef Ülke & Reklam Bütçe Stratejisi',
      'Arama Ağı & Görsel Reklam Kurgusu',
      'Çok Dilli Reklam Metinleri Yazımı',
      'Dönüşüm Takibi & Form Entegrasyonları',
      'Haftalık Nitelikli Başvuru Optimizasyonu'
    ],
    subChannels: ['Google Ads', 'Meta Ads', 'Yandex Ads', 'LinkedIn Ads', 'TikTok Ads'],
    faq: [
      {
        q: 'Sağlık turizmi reklam yönetimi hizmetiniz neleri kapsıyor?',
        a: 'Hedef ülkenize, sunduğunuz sağlık hizmetlerine ve bütçenize uygun dijital reklam stratejilerinin oluşturulması, planlanması, yönetilmesi ve geliştirilmesi süreçlerini kapsar.'
      },
      {
        q: 'Overseas Marketing olarak hangi sağlık kurumlarına hizmet veriyorsunuz?',
        a: 'Diş klinikleri, saç ekimi merkezleri, estetik klinikleri ve hastaneler için özel sağlık turizmi reklam yönetimi sunuyoruz.'
      },
      {
        q: 'Sadece reklam kampanyaları mı açıyorsunuz?',
        a: 'Hayır, reklamlarınızı dönüşüm odaklı landing page’ler (açılış sayfaları) ve başvuru takibiyle destekleyerek, reklamdan hastayla iletişime uzanan tüm süreci birlikte geliştiriyoruz.'
      },
      {
        q: 'Hangi dijital reklam platformlarında hizmet veriyorsunuz?',
        a: 'Google Ads, Meta Ads (Facebook ve Instagram), Yandex Ads, LinkedIn Ads ve TikTok Ads platformlarında profesyonel reklam yönetimi yapıyoruz.'
      },
      {
        q: 'Reklam bütçemizi neye göre belirlemeliyiz?',
        a: 'Bütçeniz hedef ülkenize, rekabet durumuna ve tanıtmak istediğiniz sağlık hizmetinin kapsamına göre Overseas Marketing uzmanlarıyla birlikte stratejik olarak belirlenir.'
      },
      {
        q: 'Reklamlardan gelen hasta başvurularının kalitesini nasıl artırıyorsunuz?',
        a: 'Kampanyalarınızı düzenli olarak optimize ediyor, hasta başvurularının niteliğine ve kalitesine göre hedefleme ve metin stratejilerimizi sürekli geliştiriyoruz.'
      },
      {
        q: 'Uluslararası hastalara kendi dillerinde mi ulaşıyoruz?',
        a: 'Evet, reklam metinleri, anahtar kelimeler ve hedeflemeler, ulaşmak istediğiniz pazarın ana diline ve kültürel dinamiklerine uygun olarak hazırlanır.'
      },
      {
        q: 'Google Ads sağlık turizmi için neden önemlidir?',
        a: 'Sağlık hizmetlerinizi veya spesifik tedavileri (örneğin; "Türkiye saç ekimi") aktif olarak Google’da araştıran, niyeti yüksek kullanıcılara doğrudan ulaşmanızı sağlar.'
      },
      {
        q: 'Google Ads kampanyalarında anahtar kelime analizini nasıl yapıyorsunuz?',
        a: 'Hedef ülkedeki kullanıcıların sağlık hizmetlerinizi ararken kullandığı en alakalı ve dönüşüm oranı yüksek arama terimlerini tespit ederek yapıyoruz.'
      },
      {
        q: 'Google Ads\'de bütçe yönetimi hizmetinize dahil mi?',
        a: 'Evet, tıklama başı maliyetleri optimize ederek bütçenizin en yüksek getiriyi (hasta başvurusu) sağlayacak şekilde kullanılmasını yönetiyoruz.'
      },
      {
        q: 'Dönüşüm takibi nedir ve Google Ads\'de nasıl uyguluyorsunuz?',
        a: 'Hangi reklamın veya anahtar kelimenin form doldurma veya arama gibi bir "başvuruya" dönüştüğünü ölçüyoruz. Böylece bütçeyi en iyi performans gösteren alanlara kaydırıyoruz.'
      },
      {
        q: 'Instagram ve Facebook reklamları kliniğimize ne katar?',
        a: 'Görsel ve video ağırlıklı yapısıyla kliniğinizin marka bilinirliğini artırır, öncesi-sonrası (izin verilen ölçüde) veya klinik tanıtım görselleriyle potansiyel hastaların ilgisini çeker.'
      },
      {
        q: 'Meta Ads görsel ve video içeriklerini nasıl planlıyorsunuz?',
        a: 'Hedef pazarınızın beklentilerine ve klinik kimliğinize uygun, dikkat çekici görsel ve video reklam formatlarını sizinle birlikte planlıyoruz.'
      },
      {
        q: 'Meta platformlarında başvuru formları (Lead Ads) kullanıyor musunuz?',
        a: 'Evet, potansiyel hastaların platformdan çıkmadan kolayca bilgi bırakabilmesi için başvuru formlarını ve mesajlaşma akışlarını stratejik olarak kurguluyoruz.'
      },
      {
        q: 'Meta Ads hedeflemelerini nasıl yapıyorsunuz?',
        a: 'İlgi alanları, yaş, demografik özellikler ve kullanıcı davranışları baz alınarak doğrudan sağlık hizmetinizle ilgilenebilecek uluslararası hedef kitleleri belirliyoruz.'
      },
      {
        q: 'Yandex Ads yönetimi hangi ülkeler için gereklidir?',
        a: 'Özellikle Rusya, BDT (Bağımsız Devletler Topluluğu) ülkeleri ve Yandex arama motorunun yaygın kullanıldığı pazarlara ulaşmak isteyen klinikler için gereklidir.'
      },
      {
        q: 'Yandex reklam metinleri Rusça mı hazırlanıyor?',
        a: 'Evet, Yandex arama reklamları, anahtar kelimeler ve reklam metinleri hedef ülkenin diline (çoğunlukla Rusça) uzmanlıkla uyarlanarak hazırlanır.'
      },
      {
        q: 'Yandex kampanyalarında performansı nasıl ölçüyorsunuz?',
        a: 'Tıpkı diğer platformlarda olduğu gibi Yandex\'te de bütçe kullanımını ve gelen başvuru (lead) performansını anlık olarak takip edip raporluyoruz.'
      },
      {
        q: 'Sağlık turizminde LinkedIn Ads ne işe yarar?',
        a: 'Doğrudan hastaya ulaşmaktan ziyade, sağlık turizminde B2B (işletmeden işletmeye) pazarlama yapmak, aracı kuruluşlar ve sağlık acenteleriyle iş ortaklıkları kurmak için kullanılır.'
      },
      {
        q: 'LinkedIn reklamlarında kimleri hedefliyorsunuz?',
        a: 'Yurt dışındaki aracı kuruluşları, sağlık turizmi şirketlerini, sigorta firmalarını ve bu kurumlardaki ilgili karar vericileri (yöneticiler vb.) hedefliyoruz.'
      },
      {
        q: 'LinkedIn ile kurumsal bağlantılarımızı nasıl geliştirebiliriz?',
        a: 'Kurumunuzun güvenilirliğini ve hizmet kapasitesini ön plana çıkaran profesyonel kampanyalar planlayarak hedef ülkelerdeki doğru iş ortaklarının sizinle iletişime geçmesini sağlıyoruz.'
      },
      {
        q: 'TikTok sağlık sektörü için uygun bir reklam platformu mu?',
        a: 'Kesinlikle. Özellikle estetik ve diş klinikleri, kısa ve dinamik video içerikleriyle yeni nesil hedef kitlelerin dikkatini çekerek yüksek etkileşim elde edebilir.'
      },
      {
        q: 'TikTok reklam videoları nasıl olmalıdır?',
        a: 'Platformun doğal yapısına (trendler, müzikler, dinamik kurgular) uygun, dikey formatlı, bilgilendirici ama aynı zamanda eğlenceli/akıcı kısa videolar olmalıdır.'
      },
      {
        q: 'TikTok\'ta sağlık reklamları için kısıtlamalar var mı?',
        a: 'Evet, sağlık kategorisinin TikTok\'taki reklam politikaları sıkıdır. Biz, hedef ülkenin ve platformun sağlık reklam koşullarına tamamen uygun bir yayın planı oluşturuyoruz.'
      },
      {
        q: 'TikTok kampanyalarında hangi mesajlar veriliyor?',
        a: 'Kliniğinizi, doktorlarınızı ve hizmetlerinizi şeffaf, samimi ve güven verici bir dille anlatan mesajlar hazırlıyoruz.'
      },
      {
        q: 'Dönüşüm odaklı "Landing Page" nedir?',
        a: 'Reklama tıklayan kullanıcının, web sitenizin karmaşasında kaybolmadan doğrudan ilgilendiği tedaviyle ilgili bilgi aldığı ve hızlıca form doldurabileceği özel olarak tasarlanmış sayfalardır.'
      },
      {
        q: 'Landing page tasarımına destek oluyor musunuz?',
        a: 'Evet, reklam performansını doğrudan etkilediği için reklam stratejinize uygun, dönüşüm odaklı açılış sayfaları kurguluyoruz.'
      },
      {
        q: 'Sadece hasta formu (lead) toplamak yeterli mi?',
        a: 'Hayır, önemli olan o lead\'in hastaya dönüşmesidir. Bu yüzden "reklamdan iletişime uzanan süreci" önemsiyor, başvuru kalitesini sizin geri bildirimlerinizle optimize ediyoruz.'
      },
      {
        q: 'Farklı platformlardaki reklamları tek bir elden mi yönetiyorsunuz?',
        a: 'Evet, Overseas Marketing olarak Google, Meta, Yandex, TikTok ve LinkedIn reklamlarınızı bütüncül (omnichannel) bir stratejiyle tek merkezden yönetiyoruz.'
      },
      {
        q: 'Sağlık turizmi reklamlarında başarıyı ne belirler?',
        a: 'Doğru hedef ülke seçimi, yerelleştirilmiş (lokal) reklam metinleri, güven veren görsel/videolar, hızlı ve etkili hasta iletişimi ve sürekli optimizasyon belirler.'
      },
      {
        q: 'Mevcut reklam hesaplarımızı devralarak iyileştirme yapabiliyor musunuz?',
        a: 'Evet, hali hazırda yürüttüğünüz ancak verim alamadığınız kampanyaları inceleyerek revize ediyor ve performansı artıracak stratejileri uyguluyoruz.'
      },
      {
        q: 'Ulusal/uluslararası reklamlar için kendi içimizde bir çevirmene ihtiyacımız var mı?',
        a: 'Kampanya metinleri ve temel hedeflemeler ajansımız tarafından hedef dile uygun hazırlanır, ancak gelen formları arayıp hastayla konuşacak ana dil seviyesinde satış/iletişim personellerini kliniğinizin bünyesinde bulundurmanız gerekir.'
      }
    ]
  },
  {
    id: 'uluslararasi-seo-hizmeti',
    title: 'SEO Hizmeti (Hedef Ülkelerde Görünürlük)',
    shortDesc: 'Hedef ülkelerde ve hedef dillerde markanızı Google ve yapay zeka aramalarında üst sıralara taşıyan uluslararası SEO stratejileri.',
    iconName: 'Search',
    category: 'Görünürlük',
    h1: 'SEO Hizmeti: Hedef Ülkelerde ve Hedef Dillerde Daha Fazla Görünürlük',
    seoTitle: 'Uluslararası SEO Hizmeti | Overseas Marketing',
    metaDesc: 'Uluslararası SEO ve GEO stratejileri ile markanızı İngiltere, Avrupa, ABD ve hedef ülkelerde görünür yapın. On-Page, Teknik SEO, Off-Page ve Dijital PR.',
    fullDesc: 'Arama dünyası değişiyor. SEO artık sadece anahtar kelime sıralaması değildir. Kullanıcılar Google’da ve yapay zeka platformlarında (ChatGPT, Gemini, Perplexity) markanızı ararken, doğru ülkede, doğru dilde ve doğru arama niyetine sahip kullanıcıyı web sitenizle buluşturan bütüncül bir dijital görünürlük mimarisi inşa ediyoruz.',
    highlights: [
      'İngiltere, Almanya, Avrupa ve Global pazarlar için yerelleştirilmiş Uluslararası SEO',
      'On-Page SEO: Topic Cluster, Schema.org ve E-E-A-T uyumlu bilgi mimarisi',
      'Teknik SEO: Core Web Vitals, site hızı, taranabilirlik, canonical ve hreflang',
      'Off-Page SEO & Dijital PR: Kaliteli, sektörel ve otoriter bağlantı profili',
      'Sağlık Turizmi & B2B/Global markalara özel yüksek dönüşümlü anahtar kelime hedeflemesi'
    ],
    deliverables: [
      'Hedef Ülke & Rakip SEO Analiz Raporu',
      'Uluslararası Anahtar Kelime & Arama Niyeti Eşleme Haritası',
      'Kapsamlı Teknik SEO & Hreflang İnceleme Dosyası',
      'On-Page İçerik & Topic Cluster Mimarisi',
      'Dijital PR & Off-Page Otorite Takip Raporu'
    ],
    subChannels: ['Google Search', 'Technical SEO', 'International SEO', 'Digital PR', 'Local SEO & Maps'],
    faq: [
      { q: 'SEO nedir?', a: 'SEO yani Search Engine Optimization, web sitelerinin Google ve diğer arama motorlarında hedef anahtar kelimelerde daha görünür olması için yapılan teknik, içerik ve otorite çalışmalarının bütünüdür.' },
      { q: 'SEO hala önemli mi?', a: 'Evet. Yapay zeka tabanlı aramalar büyüyor olsa da Google ve klasik arama motorları halen çok büyük bir kullanıcı trafiğine sahiptir. Ayrıca güçlü SEO altyapısı GEO çalışmalarını da destekler.' },
      { q: 'SEO ve GEO arasındaki fark nedir?', a: 'SEO klasik arama motorlarında sıralama ve organik görünürlüğe odaklanırken GEO yapay zeka platformlarının markanızı anlamasını ve cevaplarında referans göstermesini hedefler.' },
      { q: 'SEO ve GEO birlikte yapılabilir mi?', a: 'Evet. Hatta güçlü bir dijital görünürlük stratejisinde SEO ve GEO birlikte ele alınmalıdır.' },
      { q: 'Uluslararası SEO nedir?', a: 'Uluslararası SEO bir web sitesinin farklı ülkelerde ve farklı dillerde arama sonuçlarında görünür olması için yapılan SEO çalışmalarına verilen isimdir.' },
      { q: 'Hedef ülkeye özel SEO yapılabilir mi?', a: 'Evet. İngiltere, Almanya, Fransa, Amerika veya farklı bir ülke için ayrı anahtar kelime, içerik ve rakip stratejisi oluşturulabilir.' },
      { q: 'SEO için içerikleri çevirmek yeterli mi?', a: 'Hayır. İçerikler hedef ülkenin diline, arama alışkanlıklarına ve anahtar kelimelerine göre lokalize edilmelidir.' },
      { q: 'On-Page SEO nedir?', a: 'On-Page SEO web sitesinin kendi içerisinde yapılan başlık, içerik, URL, internal link, schema ve benzeri optimizasyonları kapsar.' },
      { q: 'Off-Page SEO nedir?', a: 'Off-Page SEO web sitesi dışında yapılan backlink, dijital PR, marka mention ve otorite çalışmalarını kapsar.' },
      { q: 'Teknik SEO nedir?', a: 'Teknik SEO web sitesinin taranabilirlik, indexlenebilirlik, hız, mobil uyumluluk ve site mimarisi gibi teknik özelliklerinin optimize edilmesidir.' },
      { q: 'SEO sonuçları ne kadar sürede alınır?', a: 'SEO sonuçları sektörün rekabetine, web sitesinin mevcut otoritesine, hedef kelimelere ve yapılan çalışmaların kapsamına göre değişir. SEO orta ve uzun vadeli bir büyüme kanalıdır.' },
      { q: 'Sağlık turizmi için SEO yapılabilir mi?', a: 'Evet. Sağlık turizmi SEO çalışmalarında özellikle hedef ülkelerdeki yüksek ticari niyetli tedavi ve klinik aramalarına odaklanılabilir.' },
      { q: 'SEO ile hasta bulunabilir mi?', a: 'SEO doğrudan hasta garantisi vermez ancak tedavi veya klinik arayan yüksek niyetli kullanıcıların web sitenizi bulmasını sağlayarak yeni hasta adayları oluşturur.' },
      { q: 'Google Ads mi SEO mu?', a: 'İkisi birbirinin alternatifi değildir. Google Ads kısa vadeli görünürlük sağlarken SEO uzun vadeli organik görünürlük ve marka otoritesi oluşturur.' },
      { q: 'SEO çalışmasında backlink gerekli mi?', a: 'Birçok rekabetçi sektörde kaliteli ve ilgili backlinkler SEO otoritesinin oluşmasına katkı sağlar; kalite ve sektörel alaka üzerine kurulmalıdır.' }
    ]
  },
  {
    id: 'geo-generative-engine-optimization',
    title: 'GEO (Generative Engine Optimization)',
    shortDesc: 'GEO ve uluslararası SEO ile markanızı ChatGPT, Gemini, Google AI Overviews ve hedef ülke Google aramalarında görünür hale getirin.',
    iconName: 'Bot',
    category: 'Görünürlük',
    h1: 'GEO: Yapay Zeka Aramalarında ve Hedef Ülkelerde Görünür Olun',
    seoTitle: 'GEO Ajansı | Yapay Zeka Aramalarında ve Hedef Ülkelerde Görünürlük',
    metaDesc: 'GEO ve uluslararası SEO ile markanızı ChatGPT, Gemini, Google AI Overviews ve hedef ülke Google aramalarında görünür hale getirin. İngiltere, Avrupa ve global pazarlara özel GEO stratejileri.',
    fullDesc: 'Arama dünyası değişiyor. İnsanlar artık yalnızca Google’a birkaç kelime yazıp çıkan sonuçları incelemiyor. ChatGPT’ye hangi kliniği tercih etmesi gerektiğini soruyor, Gemini’den şehirdeki en iyi işletmeleri karşılaştırmasını istiyor, Google AI Overviews üzerinden araştırmasını yapıyor ve karar vermeden önce yapay zekadan fikir alıyor. Generative Engine Optimization (GEO) ile markanızı yapay zeka aramalarında bulunabilir, anlaşılabilir ve referans gösterilebilir bir kaynak haline getiriyoruz.',
    highlights: [
      'ChatGPT, Gemini, Copilot, Perplexity ve Google AI Overviews görünürlüğü',
      'İngiltere, Avrupa ve Global hedef pazarlara özel International GEO',
      'Entity SEO, Schema.org altyapısı ve dijital marka otoritesi inşası',
      'Arama niyeti + Prompt ve Soru Niyeti araştırması (Conversational Search)',
      'E-E-A-T uyumlu topical authority ve doktor/klinik güven sinyalleri'
    ],
    deliverables: [
      'GEO & AI Arama Görünürlük Analiz Raporu',
      'Hedef Ülke & Prompt/Soru Niyeti Haritası',
      'Topical Authority İçerik & Entity Mimarisi',
      'Teknik SEO & Multilingual Hreflang Yapılandırması',
      'Dijital PR & AI Citation (Referans Gösterilme) Takibi'
    ],
    subChannels: ['ChatGPT', 'Google Gemini', 'Google AI Overviews', 'Microsoft Copilot', 'Perplexity AI'],
    faq: [
      { q: 'GEO ile SEO arasındaki fark nedir?', a: 'SEO temel olarak web sayfalarının arama motorlarında bulunabilirliğini ve sıralama performansını geliştirmeye çalışır. GEO ise markanın yapay zeka tarafından oluşturulan cevaplarda bulunabilmesini, anlaşılabilmesini ve uygun durumlarda kaynak veya öneri olarak kullanılabilmesini hedefler. Güçlü bir GEO stratejisi çoğu durumda güçlü bir SEO altyapısına ihtiyaç duyar.' },
      { q: 'ChatGPT SEO nedir?', a: 'ChatGPT SEO olarak adlandırılan çalışmalar genellikle GEO kapsamındadır. Amaç yalnızca ChatGPT değildir. Gemini, Google AI Overviews, Copilot, Perplexity ve diğer generative search sistemleri de stratejinin parçasıdır.' },
      { q: 'ChatGPT\'de markamın çıkması garanti edilebilir mi?', a: 'Hayır. Hiçbir ajans belirli bir yapay zeka cevabında belirli bir markanın kesin olarak gösterileceğini garanti edemez. GEO çalışmaları markanın bulunabilirliğini, konu otoritesini, dijital footprint\'ini ve sistemlerin kullanabileceği bilgi kalitesini geliştirmeyi amaçlar.' },
      { q: 'GEO sağlık turizmi için kullanılabilir mi?', a: 'Evet. Sağlık turizmi GEO açısından en önemli alanlardan biridir çünkü hastalar tedavi ve klinik araştırmalarında giderek daha fazla yapay zeka araçlarından faydalanmaktadır. Klinik, doktor, tedavi, fiyat, lokasyon ve hasta deneyimi gibi birçok entity doğru şekilde yapılandırılabilir.' },
      { q: 'İngiltere\'den hasta almak için SEO nasıl yapılmalıdır?', a: 'İngiltere hedefleniyorsa yalnızca İngilizce içerik üretmek yeterli değildir. UK kullanıcılarının arama davranışları, kullandıkları kelimeler, fiyat beklentileri ve karar verme soruları analiz edilmelidir. “Dental implant Turkey”, “dental implants Istanbul” veya “best dental clinic in Istanbul for UK patients” gibi farklı arama niyetleri için ayrı içerik stratejileri oluşturulabilir.' },
      { q: 'Dental Implant Turkey gibi rekabetçi kelimelerde GEO faydalı olur mu?', a: 'Evet ancak yalnızca tek bir landing page oluşturmak yeterli değildir. Dental implant konusunun etrafında fiyat, süreç, implant markaları, klinik seçimi, güvenlik, seyahat, tedavi süreleri ve hasta soruları gibi geniş bir topical authority oluşturulmalıdır.' },
      { q: 'GEO için blog yazmak yeterli mi?', a: 'Hayır. Blog yalnızca içerik katmanlarından biridir. Teknik SEO, entity yapısı, structured data, internal linking, marka otoritesi, doktor veya uzman profilleri, dijital PR ve üçüncü taraf kaynakları da önemlidir.' },
      { q: 'GEO sonuçları nasıl ölçülür?', a: 'Klasik SEO tarafında Search Console üzerinden impression, click, query ve landing page verileri takip edilir. GEO tarafında ise marka mention\'ları, AI citation görünürlüğü, hedef prompt gruplarındaki görünürlük, AI kaynaklı referral trafik ve farklı yapay zeka platformlarında markanın nasıl temsil edildiği takip edilebilir.' },
      { q: 'GEO yalnızca sağlık turizmi şirketleri için mi kullanılabilir?', a: 'Hayır. SaaS, B2B, turizm, gayrimenkul, e-ticaret, finans, eğitim, profesyonel hizmetler ve global pazarlara ulaşmak isteyen birçok sektor için GEO stratejileri oluşturulabilir.' },
      { q: 'International SEO ile GEO birlikte yapılmalı mı?', a: 'Global pazarı hedefleyen markalar için en doğru yaklaşım budur. International SEO markanın hedef ülkenin klasik arama sonuçlarında bulunmasına yardımcı olurken GEO aynı dijital varlığın yapay zeka tabanlı araştırma sistemlerinde anlaşılmasını ve görünürlük kazanmasını hedefler.' },
      { q: 'Sağlık turizminde GEO nedir?', a: 'Sağlık turizminde GEO, bir hastane, klinik veya doktorun ChatGPT, Gemini, Google AI Overviews, Copilot ve Perplexity gibi yapay zeka tabanlı arama sistemlerinde daha görünür ve anlaşılır hale gelmesi için yapılan optimizasyon çalışmalarının bütünüdür.' },
      { q: 'Sağlık turizmi için GEO neden önemlidir?', a: 'Uluslararası hastalar artık yalnızca Google üzerinden araştırma yapmıyor. ChatGPT veya Gemini\'ye doğrudan "Türkiye\'de en iyi saç ekim kliniği hangisi?", "İstanbul\'daki en iyi diş klinikleri hangileri?", "Best dental clinic in Istanbul" gibi sorular yöneltebiliyor.' },
      { q: 'GEO sağlık turizminde hasta getirir mi?', a: 'GEO doğrudan hasta garantisi veren bir yöntem değildir ancak markanın karar verme aşamasındaki potansiyel hastalar tarafından keşfedilmesini kolaylaştırabilir.' },
      { q: 'Sağlık turizminde GEO ile SEO arasındaki fark nedir?', a: 'SEO web sitesinin Google ve diğer klasik arama motorlarındaki sıralamasını geliştirmeyi hedefler. GEO ise yapay zeka tarafından oluşturulan cevaplarda markanın bulunabilirliğini ve kaynak olarak kullanılabilirliğini artırmaya çalışır.' },
      { q: 'Sağlık turizminde GEO çalışması hangi ülkeler için yapılabilir?', a: 'İngiltere, Almanya, Fransa, Hollanda, Amerika Birleşik Devletleri, Kanada, İtalya, İspanya, İrlanda, Körfez ülkeleri ve sağlık turizmi açısından hedeflenen diğer tüm pazarlara yönelik GEO stratejileri oluşturulabilir.' },
      { q: 'İngiltere\'den hasta almak için GEO nasıl yapılır?', a: 'İngiltere pazarında kullanıcıların hangi tedavileri nasıl araştırdığı analiz edilir. "dental implants Turkey", "best dental clinic in Istanbul for UK patients" gibi sorgular değerlendirilirken kullanıcıların yapay zekaya yöneltebileceği sorular araştırılır.' },
      { q: 'Sağlık turizmi GEO çalışması yalnızca İngilizce mi yapılır?', a: 'Hayır. Hedef pazara göre İngilizce, Almanca, Fransızca, İtalyanca, İspanyolca, Arapça ve diğer dillerde GEO çalışmaları yapılabilir. İçeriğin hedef ülkenin dil kullanımına ve hasta psikolojisine göre lokalize edilmesi gerekir.' },
      { q: '“Best dental clinic in Istanbul” aramasında nasıl çıkılır?', a: 'Yalnızca web sitesinde "best dental clinic in Istanbul" yazmak yeterli değildir. Kliniğin uzmanlık alanları, doktorları, vaka deneyimi, hasta yorumları, lokasyonu, tedavi teknolojileri ve üçüncü taraf kaynaklardaki görünürlüğü birlikte yapılandırılmalıdır.' },
      { q: '“Best hair transplant clinic in Turkey” gibi aramalarda GEO yapılabilir mi?', a: 'Evet. Saç ekimi sağlık turizmi GEO çalışmalarının önemli alanlarından biridir. FUE, DHI, Sapphire FUE, greft sayısı, doktor deneyimi, hasta yolculuğu ve maliyetler etrafında geniş bir içerik ağı oluşturulabilir.' },
      { q: 'Estetik cerrahi için GEO yapılabilir mi?', a: 'Evet. Rhinoplasty, breast augmentation, facelift, tummy tuck, liposuction ve diğer estetik operasyonlar için hedef ülke bazlı GEO stratejileri oluşturulabilir.' },
      { q: 'Sağlık turizmi GEO için anahtar kelime araştırması yapılır mı?', a: 'Evet ancak klasik keyword research tek başına yeterli değildir. GEO çalışmalarında ayrıca kullanıcıların yapay zekaya nasıl soru sorabileceği (prompt araştırması) analiz edilir.' },
      { q: 'Prompt araştırması nedir?', a: 'Prompt araştırması kullanıcıların ChatGPT, Gemini ve benzeri sistemlere hizmetinizle ilgili hangi soruları yöneltebileceğini analiz etmektir.' },
      { q: 'ChatGPT\'de klinik çıkarmak mümkün mü?', a: 'Bir klinik veya hastanenin ChatGPT\'de belirli bir sorguda kesin olarak çıkması garanti edilemez. Ancak markanın web üzerindeki görünürlüğü, otoritesi, içerik kalitesi ve dijital kimliği geliştirilerek yapay zeka sistemlerinin markayı bulması kolaylaştırılabilir.' },
      { q: 'ChatGPT\'de ilk sırada çıkmak diye bir şey var mı?', a: 'Klasik Google sıralamasındaki gibi sabit bir birinci sıra mantığından bahsetmek doğru değildir. GEO\'da amaç ilgili konunun güvenilir kaynaklarından biri haline gelmektir.' },
      { q: 'Google AI Overviews sağlık turizminde önemli mi?', a: 'Evet. Google arama sonuçlarında giderek daha fazla sorgu yapay zeka tarafından oluşturulan özet cevaplarla karşılanmaktadır.' },
      { q: 'GEO için web sitesinde hangi içerikler bulunmalıdır?', a: 'Tedavi sayfaları, doktor profilleri, klinik bilgileri, hasta süreçleri, fiyatı etkileyen faktörler, tedavi süresi, kullanılan teknolojiler, sık sorulan sorular ve iyileşme süreci açık şekilde sunulmalıdır.' },
      { q: 'Doktor sayfaları GEO için önemli midir?', a: 'Evet. Sağlık alanında kullanıcılar yalnızca hastaneyi veya kliniği değil, işlemi gerçekleştirecek doktoru da araştırır. Doktorun uzmanlığı ve deneyimi doğrulanabilir biçimde sunulmalıdır.' },
      { q: 'Hasta yorumları GEO için önemli midir?', a: 'Hasta yorumları doğrudan GEO sıralama faktörü olmasa da markanın dijital güven yapısının ve otoritesinin önemli bir parçasıdır.' },
      { q: 'Google yorumları GEO\'yu etkiler mi?', a: 'Google yorumları lokal görünürlük ve marka güveni açısından değerlidir ve genel bilgi ekosisteminin bir parçasıdır.' },
      { q: 'Dijital PR GEO için neden önemlidir?', a: 'Bir kliniğin yalnızca kendi web sitesinde kendisini anlatması sınırlı bir güven sinyali oluşturur. Sektörel yayınlarda ve otoriter medyada marka hakkında içerik bulunması dijital otoriteyi geliştirir.' },
      { q: 'Backlink GEO için önemli midir?', a: 'Kaliteli backlinkler web otoritesinin bileşenlerinden biridir. Ancak GEO çalışmasında kaynağın güvenilirliği ve konu ilişkisi daha önemlidir.' },
      { q: 'Schema sağlık turizminde GEO için gerekli midir?', a: 'Schema tek başına GEO sonucu oluşturmaz ancak arama motorlarının web sitesindeki bilgileri daha iyi anlamasına yardımcı olur. Organization, LocalBusiness, Physician yapısı kullanılır.' },
      { q: 'Sağlık turizminde hreflang neden önemlidir?', a: 'Birden fazla ülke ve dil hedefleniyorsa arama motorlarının doğru sayfayı doğru ülkedeki kullanıcıya göstermesi için hreflang yapısı şarttır.' },
      { q: 'İngiltere için ayrı sayfa oluşturmak gerekir mi?', a: 'Evet. İngiltere\'deki hastaların fiyat, seyahat ve tedavi süresi beklentileri farklıdır; UK odaklı içerik kümeleri oluşturulmalıdır.' },
      { q: 'GEO için farklı ülkelere farklı içerik yazılmalı mı?', a: 'Evet. Almanya\'daki hastanın arama davranışı ile İngiltere\'deki hastanın arama davranışı aynı değildir; strateji lokalize edilmelidir.' },
      { q: 'Sağlık turizmi GEO için blog gerekli midir?', a: 'Blog önemli bir araçtır; ana tedavi sayfalarını desteklemeli ve topical authority oluşturmalıdır.' },
      { q: 'Topical authority sağlık turizminde ne demektir?', a: 'Topical authority bir web sitesinin belirli bir konu hakkında kapsamlı ve bağlantılı bilgi üretmesi anlamına gelir.' },
      { q: 'GEO\'da tedavi fiyatları yazılmalı mı?', a: 'Mümkün olan durumlarda fiyatı etkileyen faktörleri açık şekilde anlatmak güven ve dönüşüm sağlar.' },
      { q: 'Türkiye ve İngiltere fiyat karşılaştırmaları GEO için faydalı mı?', a: 'Evet. "Dental implant cost UK vs Turkey" gibi karşılaştırmalı içerikler güçlü ticari araştırma niyetlerine hitap eder.' },
      { q: 'GEO ile sağlık turizmi reklamları birlikte kullanılabilir mi?', a: 'Evet. Reklamlar kısa vadeli hasta edinimi sağlarken GEO ve SEO uzun vadeli organik dijital otorite oluşturur.' },
      { q: 'GEO Google Ads maliyetlerini düşürür mü?', a: 'Güçlü organik görünürlük ve kullanıcı güveni zaman içerisinde performans pazarlama çalışmalarının kalitesini destekler.' },
      { q: 'Sağlık turizminde GEO için sosyal medya önemli midir?', a: 'Sosyal medya markanın dijital varlığının ve güven yapısının bir parçası olarak marka otoritesini destekler.' },
      { q: 'YouTube GEO için kullanılabilir mi?', a: 'Evet. Tedavi videoları ve doktor anlatımları dijital varlığı genişletir.' },
      { q: 'GEO çalışmasında rakip analizi yapılır mı?', a: 'Evet. AI cevaplarında geçen rakipler ve konu boşlukları analiz edilir.' },
      { q: 'Sağlık turizmi GEO analizi nasıl yapılır?', a: 'Hedef ülkeler, tedaviler, arama kelimeleri ve yapay zeka promptları analiz edilerek GEO yol haritası oluşturulur.' },
      { q: 'GEO çalışmasının sonuçları nasıl ölçülür?', a: 'Search Console verilerinin yanında AI citation görünürlüğü, marka alıntıları ve AI kaynaklı referral trafik takip edilir.' },
      { q: 'Sağlık turizmi GEO ne kadar sürede sonuç verir?', a: 'Mevcut site otoritesi ve rekabete göre değişen sürekli geliştirilen bir dijital otorite çalışmasıdır.' },
      { q: 'Yeni açılan bir klinik GEO yapabilir mi?', a: 'Evet. Önce teknik ve kurumsal dijital temel atılır, ardından adım adım geliştirilir.' },
      { q: 'Hastane ve kliniklerin GEO stratejileri farklı mıdır?', a: 'Evet. Hastaneler çok branşlı, klinikler ise dar uzmanlık odaklı entity mimarisi kullanır.' },
      { q: 'Doktorlar bireysel olarak GEO çalışması yapabilir mi?', a: 'Evet. Uzman doktorlar için kişisel uzmanlık ve otorite entity\'si oluşturulabilir.' },
      { q: 'Sağlık turizmi GEO yalnızca İstanbul için mi yapılır?', a: 'Hayır. Antalya, İzmir, Ankara gibi tüm sağlık turizmi lokasyonları için yapılır.' },
      { q: 'İstanbul merkezli bir klinik İngiltere aramalarında çıkabilir mi?', a: 'Evet. Targeting ve International GEO stratejisiyle İngiltere\'deki aramalarda görünürlük hedeflenir.' },
      { q: 'GEO yalnızca yüksek hacimli kelimelere mi odaklanır?', a: 'Hayır. Düşük hacimli ama yüksek satın alma niyeti taşıyan uzun prompt sorguları son derece değerlidir.' },
      { q: 'Sağlık turizminde GEO\'nun temel amacı nedir?', a: 'Potansiyel hastanın araştırma yaptığı tüm dijital temas noktalarında markanın güvenilir, anlaşılır ve bulunabilir bir sağlık hizmeti sağlayıcısı olmasını sağlamaktır.' }
    ]
  },
  {
    id: 'web-sitesi-landing-page',
    title: 'Web Sitesi ve Landing Page Tasarımı',
    shortDesc: 'Sağlık turizmi ve global pazarlar için yüksek dönüşümlü, hızlı, SEO & GEO uyumlu, CRM entegreli web sitesi ve landing page tasarımı.',
    iconName: 'Layout',
    category: 'Dönüşüm',
    h1: 'Web Sitesi ve Landing Page Tasarımı',
    seoTitle: 'Dönüşüm Odaklı Web Sitesi ve Landing Page Tasarımı | Overseas',
    metaDesc: 'Sağlık turizmi ve global pazarlar için yüksek dönüşümlü, hızlı, SEO & GEO uyumlu, CRM entegreli web sitesi ve landing page tasarımı.',
    fullDesc: 'Bir web sitesi yalnızca güzel görünmek için yapılmamalı. Özellikle sağlık turizmi, ihracat, hizmet sektörü ve performans pazarlama tarafında web sitenizin asıl görevi ziyaretçiyi doğru şekilde yönlendirmek, güven oluşturmak ve potansiyel müşteriyi iletişime geçmeye teşvik etmektir. Overseas Marketing olarak dönüşüm oranı yüksek, hızlı, SEO & GEO uyumlu, CRM ve otomasyon sistemleriyle entegre web siteleri tasarlıyoruz.',
    highlights: [
      'Reklam ve kampanya odaklı yüksek dönüşümlü (High-Converting) Landing Page tasarımı',
      'Anında satış sürecini başlatan Otomatik CRM, WhatsApp ve Webhook Entegrasyonları',
      'Google Ads & Meta Ads kullanıcı davranışına özel kanal bazlı sayfa kurguları',
      'Mobil öncelikli (Mobile-First), ultra hızlı yüklenen Core Web Vitals optimizasyonu',
      'Arama motorları ve yapay zeka (SEO & GEO) ile tam uyumlu semantik içerik yapısı'
    ],
    deliverables: [
      'Kullanıcı Yolculuğu (UX) ve Özgün UI Web & Mobil Tasarımları',
      'Hızlı, Güvenli ve SEO/GEO Uyumlu Web Sitesi / Landing Page Kodlaması',
      'Çok Kanallı CRM, WhatsApp & E-posta Otomasyon Entegrasyonu',
      'Google Analytics 4, Tag Manager & Meta Pixel Dönüşüm Kurulumları',
      'A/B Test Altyapısı ve Performans İyileştirme Dokümantasyonu'
    ],
    subChannels: ['Landing Page UI/UX', 'Google Ads LP', 'Meta Ads LP', 'CRM Entegrasyonu', 'Analytics & Pixel'],
    faq: [
      { q: 'Dönüşüm odaklı web sitesi nedir?', a: 'Dönüşüm odaklı web sitesi ziyaretçilerin yalnızca içerik tüketmesini değil, form doldurma, WhatsApp mesajı gönderme, arama yapma veya teklif alma gibi belirlenen aksiyonları gerçekleştirmesini hedefleyen web sitesidir.' },
      { q: 'Landing page nedir?', a: 'Landing page reklam veya kampanyadan gelen kullanıcıyı belirli bir ürün, hizmet veya teklif hakkında bilgilendirerek tek bir ana aksiyona yönlendiren özel web sayfasıdır.' },
      { q: 'Web sitesi ile landing page arasındaki fark nedir?', a: 'Web sitesi markanın genel yapısını ve tüm hizmetlerini anlatırken landing page genellikle tek bir kampanya, hizmet veya hedef kitle için oluşturulur.' },
      { q: 'Google Ads için özel landing page gerekli mi?', a: 'Birçok kampanyada özel landing page kullanılması reklam mesajı ile web sayfası arasındaki uyumu artırabilir ve kullanıcı deneyimini geliştirebilir.' },
      { q: 'Meta Ads için landing page hazırlanabilir mi?', a: 'Evet. Facebook ve Instagram reklamlarından gelen kullanıcıların davranışına göre özel landing page yapıları hazırlanabilir.' },
      { q: 'Web sitesi CRM ile entegre edilebilir mi?', a: 'Evet. Web sitesi üzerinden gelen form, mesaj ve lead bilgileri kullanılan CRM altyapısına aktarılabilir.' },
      { q: 'Form dolduran kullanıcı otomatik olarak CRM\'e kaydedilebilir mi?', a: 'Uygun entegrasyon ile form doldurulduğu anda kullanıcı bilgileri CRM sistemine aktarılabilir ve otomatik iş akışları başlatılabilir.' },
      { q: 'WhatsApp web sitesine entegre edilebilir mi?', a: 'Evet. WhatsApp iletişim butonları, mesaj akışları ve uygun altyapılarda CRM entegrasyonları kullanılabilir.' },
      { q: 'Web sitesine chatbot eklenebilir mi?', a: 'Evet. Klasik chatbot veya yapay zeka destekli chatbot sistemleri web sitesine entegre edilebilir.' },
      { q: 'SEO uyumlu web sitesi nedir?', a: 'SEO uyumlu web sitesi arama motorlarının sayfaları daha kolay tarayıp anlayabilmesi için teknik altyapısı, site mimarisi, içerik hiyerarşisi ve performansı optimize edilmiş web sitesidir.' },
      { q: 'GEO uyumlu web sitesi nedir?', a: 'GEO uyumlu web sitesi yapay zeka tabanlı arama ve cevap sistemlerinin marka, hizmet ve içerikleri daha kolay anlayabileceği şekilde yapılandırılmış web sitesidir.' },
      { q: 'Web sitesi mobil uyumlu olur mu?', a: 'Evet. Tüm projelerde mobil kullanıcı deneyimi temel tasarım kriterlerinden biri olarak ele alınır.' },
      { q: 'Web sitesi hızlı olur mu?', a: 'Projelerde performans, görsel optimizasyonu, kod yapısı ve sunucu altyapısı dikkate alınarak hızlı yüklenen sayfalar oluşturulması hedeflenir.' },
      { q: 'Sağlık turizmi için landing page yapılabilir mi?', a: 'Evet. Diş tedavileri, saç ekimi, estetik cerrahi, tüp bebek, obezite cerrahisi ve farklı sağlık turizmi hizmetleri için özel landing page’ler hazırlanabilir.' },
      { q: 'Hedef ülkeye özel landing page yapılabilir mi?', a: 'Evet. İngiltere, Almanya, Fransa, Amerika veya farklı pazarlar için dil, içerik, tasarım ve mesaj yapısı özelleştirilebilir.' },
      { q: 'Web sitesindeki leadler otomatik takip edilebilir mi?', a: 'CRM ve otomasyon entegrasyonları sayesinde web sitesinden gelen leadler için otomatik bildirim, mesaj ve takip senaryoları oluşturulabilir.' },
      { q: 'Google Analytics ve dönüşüm takibi kurulabilir mi?', a: 'Evet. Google Analytics, Google Tag Manager, reklam dönüşüm kodları ve farklı event tracking sistemleri projeye entegre edilebilir.' }
    ]
  },
  {
    id: 'saglik-turizmi-crm-yazilimi',
    title: 'Sağlık Turizmi İçin Özel CRM Yazılımı',
    shortDesc: 'Sağlık turizminde lead kaybını önleyen, WhatsApp, Instagram ve AI otomasyonlarıyla entegre çalışan özel CRM yazılımı.',
    iconName: 'Database',
    category: 'Teknoloji',
    h1: 'Sağlık Turizmi İçin Özel CRM Yazılımı',
    seoTitle: 'Sağlık Turizmi İçin Özel CRM Yazılımı | Overseas Marketing',
    metaDesc: 'Sağlık turizminde lead kaybını önleyen, WhatsApp, Instagram ve AI otomasyonlarıyla entegre çalışan özel CRM yazılımı. Geleceğin sağlık turizmi teknolojisi.',
    fullDesc: 'Sağlık turizminde CRM yalnızca hasta bilgilerini kaydettiğiniz bir yazılım olmamalı. Google Ads, Meta Ads, Instagram, Facebook, WhatsApp, web sitesi, telefon aramaları ve farklı iletişim kanallarından gelen hasta verisini yalnızca saklayan değil; analiz eden, hatırlayan ve otomatik aksiyon alan özel bir altyapı inşa ediyoruz.',
    highlights: [
      'Kullanıcı/Kişi başı lisans ücreti olmadan ölçeklenen kuruma özel mimari',
      'WhatsApp, Instagram, Facebook ve Web Chat iletişimlerinin tek ekranda toplanması',
      'Yapay Zeka Destekli Hasta Konuşma Analizi & Niyet Değerlendirmesi',
      'Siz Hastayı Unutsanız Da Unutmayan 3 Ay / 6 Ay / 1 Yıl Otomatik Takip Senaryoları',
      'Telefon Görüşmesi Ses Kaydı, AI Analizi ve Satış Ekibi Dönüşüm Raporları'
    ],
    deliverables: [
      'Kuruma Özel CRM Veri Akış Mimarisi ve Panel Geliştirme',
      'Çok Kanallı WhatsApp, Meta & Webform Entegrasyonu',
      'Yapay Zekâ Konuşma Özetleme ve Niyet Değerlendirme Modülü',
      'Otomatik Görev, Hatırlatma ve Yeniden Kazanım Senaryoları',
      'Satış Ekibi Performans ve Kanal Gelir Raporlama Paneli'
    ],
    subChannels: ['WhatsApp CRM', 'Instagram DM', 'Meta Lead Ads', 'Call Recording AI', 'Custom Workflows'],
    faq: [
      { q: 'Sağlık turizmi CRM yazılımı nedir?', a: 'Sağlık turizmi CRM yazılımı uluslararası hasta adaylarının ilk iletişimden tedavi sonrası sürece kadar takip edilmesini sağlayan hasta ilişkileri yönetim sistemidir. Lead takibi, mesajlaşma, teklif süreçleri, satış yönetimi ve hasta iletişim geçmişi tek sistem üzerinden yönetilebilir.' },
      { q: 'Sağlık turizmi CRM sistemi WhatsApp ile entegre olabilir mi?', a: 'Evet. WhatsApp Business altyapısına ve kullanılan sisteme bağlı olarak WhatsApp görüşmeleri CRM içerisine aktarılabilir, hasta profilleriyle eşleştirilebilir ve otomatik mesaj senaryoları oluşturulabilir.' },
      { q: 'Instagram ve Facebook mesajları CRM\'e aktarılabilir mi?', a: 'Uygun Meta entegrasyonları kullanılarak Instagram ve Facebook üzerinden gelen lead ve mesajların CRM sistemine aktarılması mümkündür.' },
      { q: 'Sağlık turizmi CRM sistemi Google Ads leadlerini takip edebilir mi?', a: 'Evet. Web sitesi formları, landing page formları ve farklı entegrasyonlar üzerinden gelen Google Ads leadleri CRM içerisine aktarılabilir ve reklam kaynağıyla birlikte takip edilebilir.' },
      { q: 'Yapay zeka CRM içerisinde nasıl kullanılır?', a: 'Yapay zeka hasta konuşmalarının analiz edilmesi, görüşmelerin özetlenmesi, hasta niyetinin belirlenmesi, leadlerin önceliklendirilmesi ve yeniden iletişim kurulması gereken hastaların tespit edilmesi gibi süreçlerde kullanılır.' },
      { q: 'CRM otomatik olarak hastaya mesaj gönderebilir mi?', a: 'Evet. Belirlenen iş akışları ve izin verilen mesajlaşma altyapıları üzerinden otomatik takip mesajları ve hatırlatmalar oluşturulabilir.' },
      { q: 'Eski leadler tekrar değerlendirilebilir mi?', a: 'Evet. Geçmişte iletişime geçmiş ancak satışa dönüşmemiş hastalar filtrelenerek yeniden kazanım kampanyalarına dahil edilebilir.' },
      { q: 'Sağlık turizmi CRM sistemi satış ekibini takip eder mi?', a: 'CRM sistemi kullanıcı aktiviteleri, lead takibi, teklif süreçleri, dönüş süreleri ve satış sonuçları üzerinden satış ekibi performansının analiz edilmesine yardımcı olur.' },
      { q: 'Telefon görüşmeleri CRM\'e kaydedilebilir mi?', a: 'Kullanılan telefon ve VoIP altyapısına bağlı olarak görüşmeler CRM içerisinde hasta profiline bağlanabilir. Uygun altyapıda görüşme kayıtları yapay zeka tarafından analiz de edilebilir.' },
      { q: 'Sağlık turizmi CRM yazılımı özelleştirilebilir mi?', a: 'Evet. Overseas Marketing tarafından geliştirilen CRM altyapısı şirketinizin hasta yolculuğuna, satış süreçlerine, departmanlarına ve otomasyon ihtiyaçlarına göre özelleştirilebilir.' },
      { q: 'CRM kullanıcı başına ücretli mi?', a: 'Klasik CRM platformlarında kullanıcı başına aylık ücretlendirme oldukça yaygındır. Geliştirdiğimiz özel projelerde ise lisanslama ve altyapı modeli şirketin ihtiyacına göre planlanabilir.' },
      { q: 'CRM ile yapay zeka çağrı sistemi birlikte kullanılabilir mi?', a: 'Evet. AI Call Agent sistemi CRM ile entegre edilerek hastaları arayabilir, görüşme sonuçlarını CRM\'e aktarabilir ve satış ekibi için yeni görevler oluşturabilir.' },
      { q: 'Sağlık turizminde CRM neden önemlidir?', a: 'Çünkü sağlık turizmi satış süreci çoğu zaman haftalar veya aylar sürebilir. Hastaların doğru zamanda takip edilmesi, geçmiş iletişimlerin korunması ve hiçbir leadin unutulmaması satış dönüşümünü doğrudan etkiler.' }
    ]
  },
  {
    id: 'yapay-zeka-otomasyon',
    title: 'Yapay Zeka ve Otomasyon Çözümleri',
    shortDesc: 'AI Call Agent, WhatsApp/Instagram chatbot, e-posta botu ve CRM entegrasyonlu yapay zeka otomasyon çözümleri. 7/24 kesintisiz satış operasyonu.',
    iconName: 'Cpu',
    category: 'Teknoloji',
    h1: 'Yapay Zeka ve Otomasyon Çözümleri',
    seoTitle: 'Yapay Zeka ve Otomasyon Çözümleri | Overseas Marketing',
    metaDesc: 'AI Call Agent, WhatsApp/Instagram chatbot, e-posta botu ve CRM entegrasyonlu yapay zeka otomasyon çözümleri. 7/24 kesintisiz dijital satış operasyonu.',
    fullDesc: 'Yapay zeka artık yalnızca soru cevaplayan bir araç değil. Doğru kurgulandığında arama yapabilir, mesajlara cevap verebilir, leadleri takip edebilir, e-posta gönderebilir, CRM’e veri işleyebilir ve satış ekibiniz adına aksiyonları otomatik başlatabilir. Overseas Marketing olarak CRM ile entegre çalışan bütünleşik AI ve otomasyon sistemleri geliştiriyoruz.',
    highlights: [
      '24/7 Çok Dilli AI Call Agent (Telefonla sesli karşılama, bilgi alma & dış arama)',
      'WhatsApp, Instagram DM, Facebook Messenger & Web Chat Yapay Zeka Botları',
      'Yapay Zeka Destekli E-posta Botu & Otomatik Teklif Takip Akışları',
      'CRM ile Tam Entegre Lead Scoring (Puanlama) & Yapay Zeka Konuşma Analizi',
      'Gece-Gündüz Saat Farkı Olmadan 7/24 Kesintisiz Dijital Satış Operasyonu'
    ],
    deliverables: [
      'İş Süreçleri Otomasyon Haritası & Senaryo Tasarımı',
      'AI Call Agent Sesli Çağrı Altyapısı & Eğitim Modülü',
      'Çok Kanallı Chatbot (WhatsApp, Instagram, Web Chat) Entegrasyonları',
      'CRM Entegre Yapay Zeka Konuşma Analiz ve Özetleme Paneli',
      '7/24 Nöbetçi Bot & Otomatik Görev Atama Sistemleri'
    ],
    subChannels: ['AI Call Agent', 'WhatsApp AI Bot', 'Instagram DM Bot', 'Email AI Bot', 'Lead Scoring'],
    faq: [
      { q: 'AI Call Agent nedir?', a: 'AI Call Agent yapay zeka kullanarak gelen veya giden telefon görüşmelerini belirlenen senaryolar doğrultusunda yönetebilen otomatik çağrı sistemidir.' },
      { q: 'AI Call Agent müşterileri arayabilir mi?', a: 'Evet. Uygun altyapı ve senaryolarda yeni leadler, eski müşteriler, randevu hatırlatmaları veya takip süreçleri için dış arama yapılabilir.' },
      { q: 'Yapay zeka gelen çağrıları cevaplayabilir mi?', a: 'Evet. AI Call Agent gelen çağrıları karşılayabilir, kullanıcının ihtiyacını anlayabilir ve gerekli bilgileri CRM\'e aktarabilir.' },
      { q: 'AI Call Agent CRM ile entegre olabilir mi?', a: 'Evet. Görüşmeler CRM içerindeki müşteri kayıtlarıyla eşleştirilebilir ve görüşme sonuçları otomatik olarak sisteme işlenebilir.' },
      { q: 'WhatsApp chatbot CRM ile çalışabilir mi?', a: 'Evet. WhatsApp üzerinden gelen konuşmalar CRM içerisindeki müşteri veya lead kayıtlarıyla ilişkilendirilebilir.' },
      { q: 'Instagram chatbot kurulabilir mi?', a: 'Evet. Instagram üzerinden gelen mesajlar için otomatik cevaplama ve lead toplama senaryoları oluşturulabilir.' },
      { q: 'Facebook Messenger bot yapılabilir mi?', a: 'Evet. Facebook Messenger mesajları chatbot ve CRM sistemleriyle entegre edilebilir.' },
      { q: 'Web sitesine yapay zeka chatbot eklenebilir mi?', a: 'Evet. Web chat sistemi kullanıcıların sorularını cevaplayabilir, bilgilerini toplayabilir ve CRM kaydı oluşturabilir.' },
      { q: 'Yapay zeka e-posta cevaplayabilir mi?', a: 'Belirlenen kurallar ve onay mekanizmalarıyla gelen e-postalar analiz edilebilir, taslak cevaplar oluşturulabilir veya otomatik yanıt süreçleri başlatılabilir.' },
      { q: 'Chatbot bir müşteriyi satış danışmanına aktarabilir mi?', a: 'Evet. Belirlenen kriterler gerçekleştiğinde konuşma insan satış danışmanına aktarılabilir.' },
      { q: 'Yapay zeka farklı dillerde çalışabilir mi?', a: 'Kullanılan model ve entegrasyona bağlı olarak İngilizce, Almanca, Fransızca, Arapça, Rusça gibi dillerde chatbot ve call agent sistemleri oluşturulabilir.' },
      { q: 'Yapay zeka randevu oluşturabilir mi?', a: 'Takvim ve CRM entegrasyonu bulunan sistemlerde randevu oluşturma ve hatırlatma süreçleri otomatikleştirilebilir.' },
      { q: 'Yapay zeka eski leadleri tekrar takip edebilir mi?', a: 'Evet. CRM içerisinde bulunan eski leadler belirlenen kriterlere göre yeniden iletişim süreçlerine dahil edilebilir.' },
      { q: 'Yapay zeka satış ekibinin performansını analiz edebilir mi?', a: 'Telefon görüşmeleri, mesajlar ve CRM verileri analiz edilerek satış süreçlerine ilişkin raporlar ve içgörüler oluşturulabilir.' },
      { q: 'Lead scoring nedir?', a: 'Lead scoring potansiyel müşterilerin satın alma ihtimaline veya önem seviyesine göre puanlanması ve önceliklendirilmesidir.' },
      { q: 'Yapay zeka insan satış danışmanının yerini alır mı?', a: 'Hayır. Yapay zeka tekrarlayan operasyonları ve ilk iletişimi otomatikleştirerek satış ekibinin daha değerli görüşmelere odaklanmasını sağlar.' },
      { q: 'Yapay zeka otomasyon sistemleri 7/24 çalışabilir mi?', a: 'Evet. Chatbot, mail bot ve call agent otomasyonları günün her saatinde 7/24 çalışabilir.' },
      { q: 'Yapay zeka otomasyonu sağlık turizminde kullanılabilir mi?', a: 'Evet. Hasta leadlerinin karşılanması, ön bilgi toplanması, çok dilli iletişim, randevu hatırlatma ve takip süreçlerinde yapay zeka otomasyonları kullanılır.' }
    ]
  },
  {
    id: 'sosyal-medya-yonetimi',
    title: 'Sosyal Medya Yönetimi',
    shortDesc: 'Uluslararası hedef kitleye uygun stratejik içerik planı, hekim anlatımları ve mevzuata uygun yayıncılık.',
    iconName: 'Share2',
    category: 'İçerik',
    h1: 'Sağlık Turizmi İçin Sosyal Medya Yönetimi',
    seoTitle: 'Sağlık Turizmi Sosyal Medya Yönetimi | Overseas',
    metaDesc: 'Sağlık kuruluşları için stratejik sosyal medya yönetimi. İçerik planı, yerelleştirme, yayın onayı ve performans değerlendirmesi.',
    fullDesc: 'Sosyal medya hesaplarınızı yalnızca bir paylaşım takvimi olarak değil, uluslararası hastanın güven inşa sürecinin ana merkezi olarak ele alıyoruz. Kurum kimliği, hedef ülkelerin beklentileri ve mevzuat sınırlarını harmanlayan tutarlı bir yayın modeli sunuyoruz.',
    highlights: [
      'Hedef ülke diline ve kültürüne uygun yerelleştirilmiş içerik üretimi',
      'Hekim uzmanlığı, teknoloji ve klinik atmosferini yansıtan video kurguları',
      'Organik topluluk etkileşimi ve güvenli başvuru yönlendirmeleri',
      'Mevzuat (K8) ve platform etik kurallarına uygun yayın onayı',
      'Aylık erişim, profil ziyareti ve lead dönüşüm raporlaması'
    ],
    deliverables: [
      'Aylık Çok Dilli İçerik ve Görsel Yayın Takvimi',
      'Özel Post, Carousel ve Reels/Shorts Tasarımları',
      'Yayın Öncesi Kurumsal ve Hekim Onay Süreci Yönetimi',
      'Topluluk Yönetimi ve Doğru Kanala Yönlendirme Kılavuzu',
      'Dönemsel Sosyal Medya Etki Raporu'
    ],
    faq: [
      {
        q: 'Takipçi artışı garantisi veriyor musunuz?',
        a: 'Hayır. Satın alma veya sahte etkileşimler marka güvenine zarar verir. Nitelikli, gerçek ve hasta adayı olabilecek hedef kitleye organik ve sponsorlu stratejilerle ulaşırız.'
      }
    ]
  },
  {
    id: 'icerik-produksiyon',
    title: 'İçerik ve Prodüksiyon',
    shortDesc: 'Klinik çekimleri, profesyonel hekim röportajları, süreç rehberleri ve çok dilli video içerik üretimi.',
    iconName: 'Video',
    category: 'İçerik',
    h1: 'Sağlık Turizmi İçin İçerik ve Prodüksiyon',
    seoTitle: 'Sağlık Turizmi İçerik ve Video Prodüksiyonu | Overseas',
    metaDesc: 'Klinik ve hastaneler için yazılı içerik, hekim videoları, kurum çekimleri ve kampanya kreatifleri. Marka dilinize uygun içerik üretimi.',
    fullDesc: 'Web sitesi, sosyal medya ve reklam çalışmalarında kullanılacak metin, görsel ve video içerikleri baştan sona üretiyoruz. Aynı materyali kopyalamak yerine, hastanın sorularına net yanıt veren yüksek kaliteli bir prodüksiyon standardı sunuyoruz.',
    highlights: [
      'Klinik içi profesyonel 4K video ve fotoğraf çekimleri',
      'Hekim anlatımlı tedavi süreç videoları ve soru-cevap serileri',
      'Uluslararası dillerde altyazı, seslendirme ve yerel uyarlamalar',
      'Reklam kampanyaları için yüksek dönüşüm sağlayan Hook kreatifleri',
      'Klinik ve etik onay süreçlerine tam uyum'
    ],
    deliverables: [
      'Çekim Senaryosu ve Görsel Akış Planı',
      'Yerinde Profesyonel Prodüksiyon (Kamera, Işık, Ses)',
      'Kurgu, Renk Düzenleme, Hareketli Grafik ve Altyazılar',
      'Farklı Platform Formatları (16:9, 9:16, 1:1, 4:5)',
      'Tüm Ham ve İşlenmiş Medya Arşivi Teslimi'
    ],
    faq: [
      {
        q: 'Hekimlerimizin kamera karşısında deneyimi yoksa ne yapıyoruz?',
        a: 'Prodüksiyon ekibimiz çekim öncesi soru akışını hazırlar, prompter veya doğal röportaj teknikleriyle hekimlerimizin en rahat şekilde bilgi aktarmasını sağlar.'
      }
    ]
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'aurora-dental-london',
    clinicType: 'Diş Kliniği',
    country: 'İngiltere & İrlanda',
    title: 'Aurora Dental: Londra Pazarında %240 Nitelikli Hasta Talebi Artışı',
    summary: 'İngiltere ve İrlanda hedefli Google Ads + GEO + Çok Dilli Landing Page ve Özel CRM entegrasyonu ile 6 ayda rekor büyüme.',
    period: 'Ocak 2026 – Haziran 2026',
    servicesGiven: ['Performans Pazarlama', 'Landing Page', 'Özel CRM', 'GEO Optimizasyonu'],
    metrics: [
      { label: 'Geçerli Başvuru Artışı', value: '+%240', note: 'İzinli form ve WhatsApp' },
      { label: 'İlk Görüşmeye Geçiş', value: '%68', note: 'AI Call Agent sonrası' },
      { label: 'Tedavi Kabul Oranı', value: '%41', note: 'Teklif modülü ile' }
    ],
    image: '/images/dental_case_visual.jpg',
    approach: 'Londra ve Dublin\'de implant ve gülüş tasarımı arayan hastalara özel şeffaf süreç landing page\'i kurgulandı. AI Call Agent ile gelen aramalar ortalama 35 saniyede nitelikli hale getirilerek kliniğin danışmanlarına atandı.'
  },
  {
    id: 'elysium-aesthetic-germany',
    clinicType: 'Estetik Cerrahi',
    country: 'Almanya & İsviçre',
    title: 'Elysium Clinic: DACH Bölgesinde Doğrulanmış Cerrahi Hasta Akışı',
    summary: 'Almanca E-E-A-T uyumlu içerik mimarisi, Meta video kreatifleri ve GDPR uyumlu özel CRM kurgusu ile istikrarlı talep üretimi.',
    period: 'Ekim 2025 – Nisan 2026',
    servicesGiven: ['SEO & GEO', 'Performans Pazarlama', 'Prodüksiyon', 'Özel CRM'],
    metrics: [
      { label: 'Organik Talep Artışı', value: '+%185', note: 'Almanca SEO' },
      { label: 'Görüşme Randevusu', value: '412+', note: '6 aylık onaylı süre' },
      { label: 'CPA (Maliyet) Düşüşü', value: '-%38', note: 'Kreatif optimizasyonu' }
    ],
    image: '/images/aesthetic_case_visual.jpg',
    approach: 'Almanca konuşulan ülkeler için cerrahların uzmanlığını ve ameliyat öncesi/sonrası süreç güvenliğini şeffafça aktaran prodüksiyon videoları hazırlandı. ChatGPT ve Perplexity aramalarında klinik kaynak gösterimi optimize edildi.'
  }
];

export const MASTER_FAQS: FaqItem[] = [
  {
    category: 'Genel',
    question: 'Overseas Marketing kimlerle çalışır?',
    answer: 'Sağlık turizmi alanında faaliyet gösteren klinikler, tıp merkezleri, hastaneler ve yetkili aracı kuruluşlarla çalışırız. İş birliğini kurumun altyapısı, hizmet kapasitesi ve çalışma uygunluğu üzerinden değerlendiririz.'
  },
  {
    category: 'Genel',
    question: 'Tüm hizmetleri birlikte almak zorunda mıyız?',
    answer: 'Hayır. İhtiyacınız tek bir hizmetle (örneğin sadece Performans Pazarlama veya Özel CRM) karşılanabiliyorsa bağımsız kapsam oluşturabiliriz.'
  },
  {
    category: 'Genel',
    question: 'Hasta sayısı veya ciro garantisi veriyor musunuz?',
    answer: 'Hayır. Şartnamemiz ve etik ilkelerimiz gereği doğrulanmamış hasta garantisi vermeyiz. Başvuru sayısı pazar, bütçe, hekim kalitesi ve kurumun hasta iletişim hızına bağlıdır. Ölçülebilir hedefler koyar ve şeffafça raporlarız.'
  },
  {
    category: 'Performans',
    question: 'Reklam bütçesi ajans hizmet ücretine dâhil midir?',
    answer: 'Teklifte açıkça aksi belirtilmedikçe medya bütçesi (Google, Meta vb. ödemeleri) ile ajans hizmet bedeli ayrı gösterilir. Reklam harcamaları doğrudan sizin kartınızdan platforma ödenir.'
  },
  {
    category: 'Performans',
    question: 'Yandex Ads ve TikTok Ads her klinik için uygun mudur?',
    answer: 'Her kurum için otomatik kanal değildir. Yandex Direct Rusya/BDT odaklı kurumlarda, TikTok ise izin verilen kategoriler ve uygun video kreatif kapasitesi varsa test bütçesiyle açılır.'
  },
  {
    category: 'SEO & GEO',
    question: 'GEO (Yapay Zekâ Arama Optimizasyonu) neden gereklidir?',
    answer: 'Uluslararası hastalar artık Google\'ın yanı sıra ChatGPT, Copilot ve Gemini gibi yapay zekâ asistanlarına "En iyi Türkiye kliniği hangisi?" sorusunu sormaktadır. GEO, kurumunuzun bu yanıtlarda güvenilir kaynak olarak geçmesini sağlar.'
  },
  {
    category: 'SEO & GEO',
    question: 'Site yenilenirken mevcut SEO sıralamalarımız kaybolur mu?',
    answer: 'Kapsamlı 301 yönlendirme haritası, URL envanteri ve yayın sonrası teknik kontroller ile trafik dalgalanma riskleri minimize edilir.'
  },
  {
    category: 'CRM & AI',
    question: 'Özel CRM ile Yapay Zekâ Otomasyonu arasındaki fark nedir?',
    answer: 'CRM, kurumun hasta verisini, temsilci rollerini ve aşamalarını yönettiği ana yönetim panelidir. Otomasyon ise bu panel üzerinde çalışan AI Call Agent, chatbot, otomatik WhatsApp bildirimleri ve zamanlanmış iş akışlarıdır.'
  },
  {
    category: 'CRM & AI',
    question: 'AI Call Agent telefon görüşmelerinde nasıl çalışır?',
    answer: 'Gece veya meşgul saatlerde arayan hastayı saniyeler içinde ana dilinde karşılar, kliniğin onaylı bilgilerini aktarır, hasta ihtiyacını kaydeder ve CRM\'e görev açarak danışmana randevu oluşturur.'
  },
  {
    category: 'Hukuk & Etik',
    question: 'Sağlık Bakanlığı 2025/2026 sağlık turizmi tanıtım yönetmeliğine uyum nasıl sağlanır?',
    answer: 'Tüm reklam metinleri, görseller ve landing page içerikleri mevzuat maddelerine (K8) uygun olarak denetlenir; yanıltıcı indirim, sahte tedavi garantisi veya gizli hasta verisi kullanılmaz.'
  }
];

export const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Analiz & Keşif',
    desc: 'Mevcut reklam hesapları, web sitesi, hedef pazarlar (UK, DACH, Gulf) ve operasyonel darboğazlar incelenir.',
    duration: '1. - 2. Hafta'
  },
  {
    step: '02',
    title: 'Strateji & Mimar Planı',
    desc: 'Çok dilli içerik haritası, KPI hedefleri, CRM iş akışları ve kampanya kreatif senaryoları onaylanır.',
    duration: '3. - 4. Hafta'
  },
  {
    step: '03',
    title: 'Kurulum & Entegrasyon',
    desc: 'Çok dilli landing page\'ler, reklam kampanyaları, AI Call Agent ve CRM modülleri canlıya alınır.',
    duration: '5. - 6. Hafta'
  },
  {
    step: '04',
    title: 'Ölçüm & Büyüme İyileştirmesi',
    desc: 'Başvuru kalitesi, görüşme oranları ve ROI verileri izlenerek haftalık optimizasyonlar uygulanır.',
    duration: 'Sürekli Döngü'
  }
];

// --- BRANŞ KÜMESİ (BRANCHES) ---
export interface BranchItem {
  id: string;
  slug: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDesc: string;
  shortDesc: string;
  heroBadge: string;
  overview: string;
  highlights: string[];
  deliverables: string[];
  keywordsCovered: string[];
  faq: { q: string; a: string }[];
}

export const MASTER_BRANCHES: BranchItem[] = [
  {
    id: 'sac-ekimi-reklam-ajansi',
    slug: 'sac-ekimi-reklam-ajansi',
    title: 'Saç Ekimi Reklam Ajansı',
    h1: 'Saç Ekimi Klinikleri İçin Dijital Pazarlama ve Yabancı Hasta Kazanımı',
    seoTitle: 'Saç Ekimi Reklam Ajansı | Yabancı Hasta Reklam & SEO | Overseas',
    metaDesc: 'Saç ekimi kliniklerine özel Google Ads, Meta reklamları, SEO, GEO ve dönüşüm odaklı açılış sayfalarıyla İngiltere, Avrupa ve Körfez ülkelerinden hasta akışı sağlıyoruz.',
    shortDesc: 'Saç ekim merkezlerinin uluslararası hastalara ulaşması için FUE, DHI ve Sapphire tekniklerine özel Google Ads, Meta ve GEO kampanyaları.',
    heroBadge: 'Saç Ekimi Özel Stratejisi',
    overview: 'Saç ekimi sağlık turizminin en rekabetçi alanlarından biridir. Yalnızca reklam açmak yetmez; greft maliyeti algısını kıran şeffaf içerikler, doktor güveni, WhatsApp karşılama hızı ve ülke bazlı kreatifler gereklidir.',
    highlights: [
      'İngiltere, İspanya, İtalya ve Almanya odaklı yerelleştirilmiş saç ekim kampanyaları',
      'Google Ads Arama Ağı (Search) & Meta Ads (Instagram/Facebook) Lead Ads kurgusu',
      'GEO & ChatGPT Optimizasyonu: "Best hair transplant clinic in Turkey" aramalarında yer alma',
      'WhatsApp AI Call Agent ile gece gelen saç ekimi başvurularını anında yanıtlama',
      'Greft ve VIP paket odaklı yüksek dönüşümlü Landing Page tasarımları'
    ],
    deliverables: [
      'Hedef Ülke & Greft Maliyet Stratejisi',
      'Çok Dilli Reklam Görselleri & Metinleri',
      'Saç Ekimi Landing Page & Form Entegrasyonu',
      'WhatsApp Otomasyonu & Danışman Takibi',
      'Haftalık CPL & Nitelikli Başvuru Raporu'
    ],
    keywordsCovered: [
      'saç ekimi reklam ajansı', 'saç ekimi dijital pazarlama', 'saç ekim merkezi reklam ajansı',
      'saç ekimi hasta bulma', 'yurtdışı saç ekimi reklamları', 'saç ekimi Google Ads',
      'hair transplant marketing Turkey', 'saç ekimi yabancı hasta kazanımı'
    ],
    faq: [
      { q: 'Saç ekimi reklamlarında müşteri başı maliyetleri (CPL) nasıl düşürüyorsunuz?', a: 'Tıklama niyetini optimize eden reklam metinleri, şeffaf paket detayları sunan landing page\'ler ve WhatsApp hızlı yanıt otomasyonları ile kalitesiz başvuruları eleyerek maliyetleri optimize ediyoruz.' },
      { q: 'İngiltere ve İspanya pazarlarında saç ekimi aramaları farklı mıdır?', a: 'Evet. İngiliz hastalar paket içeriği ve garanti sertifikasına önem verirken İspanyol hastalar hekim tecrübesi ve teknik detaylara (DHI vs Sapphire) odaklanır. Kampanyalarımızı ülkelere göre yerelleştiriyoruz.' }
    ]
  },
  {
    id: 'dis-klinigi-reklam-ajansi',
    slug: 'dis-klinigi-reklam-ajansi',
    title: 'Diş Kliniği Reklam Ajansı',
    h1: 'Diş Klinikleri İçin Uluslararası Dijital Pazarlama ve Hasta Kazanımı',
    seoTitle: 'Diş Kliniği Reklam Ajansı | Dental Marketing Turkey | Overseas',
    metaDesc: 'Diş kliniklerine özel Hollywood Smile, Implant ve Zirkonyum tedavilerinde İngiltere, İrlanda ve Avrupa ülkelerinden hasta kazandıran dijital pazarlama ajansı.',
    shortDesc: 'İmplant, All-on-4, Hollywood Smile ve Gülüş Tasarımı aramalarında uluslararası hasta kazanımı sağlayan özel dental pazarlama.',
    heroBadge: 'Dental Pazarlama Uzmanlığı',
    overview: 'Dental sağlık turizminde hastanın en büyük kaygısı tedavi kalitesi, malzeme markası ve ulaşım lojistiğidir. Diş kliniklerine özel landing page ve reklam stratejilerimizle güven bariyerini aşıyoruz.',
    highlights: [
      'Londra, Dublin, Berlin ve Zürih odaklı Dental Google Ads & Instagram reklamları',
      'Implant, All-on-4 ve Hollywood Smile spesifik landing page tasarımları',
      'Dental SEO & GEO: "Best dental clinic in Istanbul for UK patients" arama hedeflemesi',
      'CRM entegrasyonu ile dental röntgen (X-Ray) gönderen hastaların anlık takibi',
      'İngilizce ve Almanca konuşan satış ekipleri için potansiyel hasta skorlama'
    ],
    deliverables: [
      'Dental Pazarlama & Tedavi Paket Stratejisi',
      'Arama Ağı & Görsel Reklam Kurgusu',
      'Dental Landing Page & Form Entegrasyonları',
      'CRM Danışman Performans Takibi'
    ],
    keywordsCovered: [
      'diş kliniği reklam ajansı', 'diş kliniği dijital pazarlama', 'dental reklam ajansı',
      'dental marketing agency Turkey', 'diş kliniği SEO', 'yurtdışı diş hastası bulma',
      'sağlık turizmi diş reklamları'
    ],
    faq: [
      { q: 'Diş hastaları internet üzerinden tedavi kararı nasıl verir?', a: 'Öncesi/sonrası gülüş fotoğrafları, hekim videoları, açık fiyat aralıkları ve şeffaf transfer-otel bilgilendirmesi içeren açılış sayfalarımız güven aşamasını tamamlar.' }
    ]
  },
  {
    id: 'estetik-klinigi-reklam-ajansi',
    slug: 'estetik-klinigi-reklam-ajansi',
    title: 'Estetik Kliniği Reklam Ajansı',
    h1: 'Medikal Estetik Klinikleri İçin Reklam ve Dijital Marka Yönetimi',
    seoTitle: 'Estetik Kliniği Reklam Ajansı | Medikal Estetik Pazarlama | Overseas',
    metaDesc: 'Medikal estetik kliniklerine özel botoks, dolgu, cilt gençleştirme ve ameliyatsız estetik uygulamalarında dijital reklam ve marka yönetimi.',
    shortDesc: 'Medikal estetik, ameliyatsız yüz gençleştirme ve medikal dermatoloji uygulamalarında nitelikli randevu akışı.',
    heroBadge: 'Medikal Estetik Stratejisi',
    overview: 'Medikal estetik hastaları estetik görünüm, güvenilirlik ve hekim tecrübesine öncelik verir. Video ağırlıklı kreatifler ve sosyal kanıtlarla dönüşümü artırıyoruz.',
    highlights: [
      'Instagram, Facebook ve TikTok odaklı estetik video reklam yönetimi',
      'Lokasyon bazlı hedefleme ile yurt içi ve yurt dışı estetik hastaları',
      'Hekim kişisel markalama ve klinik güven sinyallerini öne çıkarma',
      'Medikal estetik yönetmeliklerine uygun reklam dili'
    ],
    deliverables: [
      'Sosyal Medya Reklam Kurgusu',
      'Hekim Tanıtım Prodüksiyon Stratejisi',
      'Nitelikli Randevu Takip Modülü'
    ],
    keywordsCovered: [
      'estetik kliniği reklam ajansı', 'medikal estetik reklam ajansı', 'estetik kliniği dijital pazarlama', 'estetik merkezi reklamları'
    ],
    faq: [
      { q: 'Medikal estetik reklamlarında kısıtlamalar nasıl aşılır?', a: 'Platformların (Meta, Google) yayın politikalarına ve mevzuat kurallarına tam uyumlu, bilgilendirici ve güven veren kreatif dili kullanıyoruz.' }
    ]
  },
  {
    id: 'plastik-cerrahi-reklam-ajansi',
    slug: 'plastik-cerrahi-reklam-ajansi',
    title: 'Plastik Cerrahi Reklam Ajansı',
    h1: 'Plastik Cerrahi Klinikleri ve Cerrahlar İçin Uluslararası Pazarlama',
    seoTitle: 'Plastik Cerrahi Reklam Ajansı | Estetik Cerrahi Pazarlama | Overseas',
    metaDesc: 'Rinoplasti, meme estetiği, liposuction ve vücut şekillendirme ameliyatları için İngiltere, Avrupa ve Körfez ülkelerinden cerrahi hasta kazanımı.',
    shortDesc: 'Burun estetiği (Rhinoplasty), meme cerrahisi ve Liposuction operasyonlarında yüksek değerli cerrahi hasta akışı.',
    heroBadge: 'Cerrahi Operasyon Uzmanlığı',
    overview: 'Cerrahi operasyonlar yüksek bütçeli ve derin güven gerektiren kararlardır. Cerrahın eğitimi, hastane standartları ve ameliyat sonrası bakım garantisi pazarlamanın merkezindedir.',
    highlights: [
      'Rhinoplasty, Breast Augmentation ve Liposuction özel açılış sayfaları',
      'İngiltere ve Almanya pazarında E-E-A-T uyumlu uzman cerrah otoritesi',
      'Cerrahi vakalar için özel hazırlanmış güven odaklı video prodüksiyonlar',
      'Özel CRM ile ilk konsültasyondan ameliyat gününe kadar hasta takibi'
    ],
    deliverables: [
      'Cerrahi Ameliyat Reklam Stratejisi',
      'Cerrah Kişisel Marka İtibar Yönetimi',
      'Çok Dilli Cerrahi Landing Page'
    ],
    keywordsCovered: [
      'plastik cerrahi reklam ajansı', 'estetik cerrahi reklam ajansı', 'rhinoplasty marketing Turkey', 'meme estetiği hasta kazanımı'
    ],
    faq: [
      { q: 'Cerrahi hastalarda ikna süreci ne kadar sürer?', a: 'Cerrahi hastalar ortalama 2-6 hafta araştırma yapar. CRM yeniden pazarlama (Retargeting) ve otomatik bilgi serileri ile hastanın karar verme sürecinde yanında oluyoruz.' }
    ]
  },
  {
    id: 'obezite-cerrahisi-reklam-ajansi',
    slug: 'obezite-cerrahisi-reklam-ajansi',
    title: 'Obezite Cerrahisi Reklam Ajansı',
    h1: 'Tüp Mide ve Bariatrik Cerrahi Klinikleri İçin Pazarlama Stratejisi',
    seoTitle: 'Obezite Cerrahisi Reklam Ajansı | Bariatrik Pazarlama | Overseas',
    metaDesc: 'Tüp mide (Sleeve Gastrectomy), gastric bypass ve bariatrik cerrahi operasyonlarında İngiltere ve İrlanda hastalarına ulaşan reklam ve SEO ajansı.',
    shortDesc: 'Tüp mide, bariatrik cerrahi ve kilo verme operasyonlarında İngiltere ve Avrupa odaklı nitelikli hasta kazanımı.',
    heroBadge: 'Bariatrik Cerrahi Uzmanlığı',
    overview: 'Bariatrik cerrahide hastalar ameliyat öncesi BMI kriterleri, ameliyat ekibi ve beslenme desteği hakkında kapsamlı bilgi arar. Güven ve sağlık takibi odaklı pazarlama kurguluyoruz.',
    highlights: [
      'İngiltere NHS bekleme sürelerini analiz eden hedefli Google Ads kampanyaları',
      'Bariatrik cerrahiye özel BMI hesaplayıcılı etkileşimli landing page\'ler',
      'Diyetisyen ve psikolog destek paketlerini öne çıkaran reklam metinleri'
    ],
    deliverables: [
      'Bariatrik Cerrahi Pazarlama Planı',
      'BMI Odaklı Landing Page Kurgusu',
      'İngiltere / İrlanda Odaklı PPC Kampanyaları'
    ],
    keywordsCovered: ['obezite cerrahisi reklam ajansı', 'tüp mide reklamları', 'bariatric surgery marketing Turkey', 'yabancı bariatrik hasta bulma'],
    faq: [{ q: 'İngiltere bariatrik hastaları için en etkili kanal hangisidir?', a: 'NHS bekleme sürelerinden dolayı Google Ads Arama Ağı ve TikTok üzerindeki gerçek hasta değişim hikayeleri en yüksek dönüşümü sağlar.' }]
  },
  {
    id: 'tup-bebek-reklam-ajansi',
    slug: 'tup-bebek-reklam-ajansi',
    title: 'Tüp Bebek Reklam Ajansı',
    h1: 'Tüp Bebek (IVF) Merkezleri İçin Hassas ve İtibarlı Dijital Pazarlama',
    seoTitle: 'Tüp Bebek Reklam Ajansı | IVF Marketing Turkey | Overseas',
    metaDesc: 'Tüp bebek (IVF) ve genetik taramalı tüp bebek tedavilerinde etik, duyarlı ve uluslararası hasta kazandıran pazarlama stratejileri.',
    shortDesc: 'IVF, yumurta dondurma ve ileri tüp bebek tedavilerinde etik, güven odaklı ve yüksek empatiye sahip pazarlama.',
    heroBadge: 'IVF & Tüp Bebek Stratejisi',
    overview: 'Tüp bebek tedavisi duygusal hassasiyeti yüksek bir süreçtir. Reklam dili etik, umut verici ancak gerçekçi; teknolojik altyapı ve lab başarısı odaklı olmalıdır.',
    highlights: [
      'Avrupa ve BDT ülkeleri odaklı tüp bebek bilgilendirme kampanyaları',
      'Genetik tanı (PGD/PGS) ve laboratuvar teknolojilerini öne çıkaran içerikler',
      'Gizlilik esaslı hasta kayıt ve iletişim altyapısı'
    ],
    deliverables: ['IVF İletişim & Pazarlama Kurgusu', 'Etik Reklam Metinleri', 'Uluslararası IVF Hasta Rehberi'],
    keywordsCovered: ['tüp bebek reklam ajansı', 'IVF marketing Turkey', 'tüp bebek hasta bulma', 'uluslararası IVF pazarlama'],
    faq: [{ q: 'Tüp bebek pazarlamasında etik kurallar nasıl korunur?', a: 'Gerçekçi başarı oranları, laboratuvar standartları ve doktor biyografileri şeffafça sunulur; kesin gebelik vaatlerinden kaçınılır.' }]
  },
  {
    id: 'goz-klinigi-reklam-ajansi',
    slug: 'goz-klinigi-reklam-ajansi',
    title: 'Göz Kliniği Reklam Ajansı',
    h1: 'Göz Hastalıkları ve No-Touch Laser Klinikleri İçin Reklam Yönetimi',
    seoTitle: 'Göz Kliniği Reklam Ajansı | Lazer Göz Cerrahisi Pazarlama | Overseas',
    metaDesc: 'Akıllı mercek, No-Touch Laser ve katarakt ameliyatlarında Avrupa ve Almanya hastalarına ulaşan dijital pazarlama ajansı.',
    shortDesc: 'No-Touch Laser, Akıllı Mercek (Multifocal) ve katarakt cerrahisinde Almanya ve Avrupa odaklı hasta kazanımı.',
    heroBadge: 'Göz Sağlığı Uzmanlığı',
    overview: 'Göz cerrahisinde hastalar kısa iyileşme süresi ve ağrısız lazer teknolojilerini araştırır. Alman ve Avrupa pazarına özel teknoloji odaklı kampanyalar yapıyoruz.',
    highlights: [
      'Almanya ve Hollanda odaklı No-Touch Laser arama kampanyaları',
      'Akıllı mercek (Trifokal) ameliyatı bilgilendirici landing page tasarımı'
    ],
    deliverables: ['Göz Lazer Reklam Stratejisi', 'Almanca / İngilizce Landing Page'],
    keywordsCovered: ['göz kliniği reklam ajansı', 'lazer göz reklamları', 'akıllı mercek pazarlama', 'eye surgery Turkey marketing'],
    faq: [{ q: 'Göz ameliyatlarında en çok talep gelen ülkeler hangileridir?', a: 'Özellikle Almanya, Avusturya ve İsviçre lazer göz ve akıllı mercek tedavileri için yüksek talep gösterir.' }]
  },
  {
    id: 'hastane-reklam-ajansi',
    slug: 'hastane-reklam-ajansi',
    title: 'Hastane Reklam Ajansı',
    h1: 'Tam Teşekküllü Hastaneler ve Tıp Merkezleri İçin Uluslararası Pazarlama',
    seoTitle: 'Hastane Reklam Ajansı | Genel Hastane Pazarlaması | Overseas',
    metaDesc: 'A Sınıfı hastaneler ve tıp merkezleri için çok branşlı uluslararası pazarlama, B2B acente ağları ve medikal turizm stratejileri.',
    shortDesc: 'Genel hastaneler, onkoloji, kardiyoloji ve ortopedi branşlarında küresel sağlık pazarlaması ve kurumsal B2B ağları.',
    heroBadge: 'Kurumsal Hastane Pazarlaması',
    overview: 'Hastaneler çok branşlı yapılardır. Hem B2C doğrudan hasta kazanımı hem de B2B acente/sigorta iş ortaklıkları için entegre stratejiler yürütürüz.',
    highlights: [
      'Çok dilli uluslararası hasta departmanı (IPC) dijital entegrasyonu',
      'LinkedIn B2B acente ve sigorta şirketi hedefli kurumsal kampanyalar',
      'JCI akreditasyonu ve teknolojik altyapı otorite iletişimi'
    ],
    deliverables: ['Kurumsal Hastane Pazarlama Mimarısı', 'B2B & B2C Reklam Kampanyaları', 'Özel CRM Çoklu Branş Modülü'],
    keywordsCovered: ['hastane reklam ajansı', 'hastane pazarlama stratejisi', 'medikal turizm hastane reklamları', 'B2B sağlık turizmi'],
    faq: [{ q: 'Hastaneler için tek bir reklam kampanyası yeterli midir?', a: 'Hayır, hastane pazarlaması branş bazlı B2C kampanyalar ve kurumsal B2B acente kampanyaları olarak ikiye ayrılmalıdır.' }]
  },
  {
    id: 'doktor-reklam-ajansi',
    slug: 'doktor-reklam-ajansi',
    title: 'Doktor Reklam Ajansı',
    h1: 'Hekimler İçin Kişisel Marka Yönetimi ve Uluslararası Dijital İtibar',
    seoTitle: 'Doktor Reklam Ajansı | Hekim Kişisel Marka Yönetimi | Overseas',
    metaDesc: 'Uzman hekimler ve cerrahlar için kişisel marka konumlama, dijital PR, YouTube/Instagram prodüksiyonu ve uluslararası hasta kazanımı.',
    shortDesc: 'Cerrahlar ve uzman hekimler için kişisel otorite inşası, dijital PR, bilimsel yayın iletişimi ve hasta akışı.',
    heroBadge: 'Doktor Marka Yönetimi',
    overview: 'Hastalar kurumlardan önce ameliyatı yapacak hekime güvenir. Doktorlarımızın bilimsel kimliğini ve hekim yaklaşımını uluslararası alanda markalaştırıyoruz.',
    highlights: [
      'Hekim kişisel web sitesi & E-E-A-T uyumlu içerik mimarisi',
      'YouTube ve Instagram için profesyonel klinik içi video çekimleri',
      'Google AI Overviews ve ChatGPT\'de hekim adı aratıldığında otoriter görünürlük'
    ],
    deliverables: ['Hekim Kişisel Marka Stratejisi', 'Prodüksiyon & Medya Yönetimi', 'SEO & GEO Hekim İtibar Yapısı'],
    keywordsCovered: ['doktor reklam ajansı', 'doktor dijital pazarlama', 'hekim marka yönetimi', 'doktor hasta bulma'],
    faq: [{ q: 'Doktor reklam ajansı ile genel reklam ajansı arasındaki fark nedir?', a: 'Hekim etiğine, medikal terimlere ve hasta psikolojisine hakim, hekimin itibarını zedelemeden hasta kazandıran özel bir uzmanlıktır.' }]
  }
];

// --- HEDEF ÜLKE KÜMESİ (MARKETS) ---
export interface MarketItem {
  id: string;
  slug: string;
  countryName: string;
  flagEmoji: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDesc: string;
  overview: string;
  insights: string[];
  recommendedChannels: string[];
  faq: { q: string; a: string }[];
}

export const MASTER_MARKETS: MarketItem[] = [
  {
    id: 'ingiltere-saglik-turizmi-reklamlari',
    slug: 'ingiltere-saglik-turizmi-reklamlari',
    countryName: 'İngiltere (UK)',
    flagEmoji: '🇬🇧',
    title: 'İngiltere Sağlık Turizmi Reklamları',
    h1: 'İngiltere Pazarı İçin Sağlık Turizmi Reklam ve Hasta Kazanım Stratejileri',
    seoTitle: 'İngiltere Sağlık Turizmi Reklamları | UK Patient Acquisition | Overseas',
    metaDesc: 'İngiltere (UK) pazarından diş, saç ekimi ve estetik hastası çekmek için Google Ads, Meta reklamları, GBP Sterlin fiyatlandırması ve CRM stratejileri.',
    overview: 'İngiltere sağlık turizminde Türkiye\'nin 1 numaralı hedef pazarıdır. NHS bekleme süreleri, yüksek özel klinik fiyatları ve uçuş kolaylığı İngiliz hastaları Türkiye\'ye yönlendirir.',
    insights: [
      'İngiliz hastalar için Sterlin (£) bazlı şeffaf paket içeriği kritik önem taşır.',
      'Google Ads Arama Ağı (Search) en yüksek ticari niyete sahip kanaldır.',
      'WhatsApp üzerinden hızlı ve aksansız İngilizce karşılama dönüşümü %40 artırır.'
    ],
    recommendedChannels: ['Google Ads Search', 'Meta Video Ads', 'GEO / ChatGPT Optimization', 'WhatsApp Automation'],
    faq: [
      { q: 'İngiltere hastaları en çok hangi tedavileri tercih ediyor?', a: 'Diş (Dental Implants & Veneers), Saç Ekimi ve Obezite Cerrahisi (Tüp Mide) İngiltere pazarının lider tedavileridir.' }
    ]
  },
  {
    id: 'almanya-saglik-turizmi-reklamlari',
    slug: 'almanya-saglik-turizmi-reklamlari',
    countryName: 'Almanya (DACH)',
    flagEmoji: '🇩🇪',
    title: 'Almanya Sağlık Turizmi Reklamları',
    h1: 'Almanya ve DACH Bölgesi İçin Sağlık Turizmi Reklam Stratejileri',
    seoTitle: 'Almanya Sağlık Turizmi Reklamları | DACH Bölgesi Pazarlama | Overseas',
    metaDesc: 'Almanya, Avusturya ve İsviçre pazarı için Almanca yerelleştirilmiş sağlık turizmi reklamları, SEO, E-E-A-T ve GDPR uyumlu CRM altyapısı.',
    overview: 'Almanca konuşulan ülkeler (DACH) kaliteye, sertifikalara (JCI, ISO) ve doktor tecrübesine en çok dikkat eden pazardır.',
    insights: [
      'Almanca reklam metinleri ve landing page kullanımı zorunludur.',
      'Avrupa KVKK (GDPR) kurallarına tam uyum veri güvenliği algısını güçlendirir.'
    ],
    recommendedChannels: ['Almanca Google Ads', 'Meta Lead Ads', 'E-E-A-T SEO & GEO'],
    faq: [
      { q: 'Almanya pazarında gurbetçiler mi yoksa Almanlar mı hedeflenmeli?', a: 'Her ikisi de ayrı stratejidir. Alman vatandaşları için Almanca içerik ve medikal sertifikalar; gurbetçiler için Türkçe/Almanca karışık kampanyalar kurulmalıdır.' }
    ]
  },
  {
    id: 'fransa-saglik-turizmi-reklamlari',
    slug: 'fransa-saglik-turizmi-reklamlari',
    countryName: 'Fransa',
    flagEmoji: '🇫🇷',
    title: 'Fransa Sağlık Turizmi Reklamları',
    h1: 'Fransa Pazarı İçin Sağlık Turizmi Reklam Yönetimi',
    seoTitle: 'Fransa Sağlık Turizmi Reklamları | Fransızca Hasta Kazanımı | Overseas',
    metaDesc: 'Fransa pazarına özel Fransızca reklam kampanyaları, saç ekimi ve estetik cerrahi hasta kaynağı oluşturma çözümleri.',
    overview: 'Fransız hastalar estetik görselliğe son derece önem verir. Fransızca ana dil seviyesinde reklam dili ve satış desteği şarttır.',
    insights: [
      'Fransızca konuşan satış danışmanı altyapısı olmayan kliniklerde dönüşüm düşer.',
      'Instagram ve TikTok video içerikleri Fransa pazarında oldukça etkilidir.'
    ],
    recommendedChannels: ['Fransızca Meta Ads', 'TikTok Ads', 'Google Ads'],
    faq: [{ q: 'Fransa pazarında en popüler tedaviler hangileridir?', a: 'Saç ekimi, rinoplasti ve estetik diş tedavileri Fransız hastaların en çok talep gösterdiği alanlardır.' }]
  },
  {
    id: 'hollanda-saglik-turizmi-reklamlari',
    slug: 'hollanda-saglik-turizmi-reklamlari',
    countryName: 'Hollanda',
    flagEmoji: '🇳🇱',
    title: 'Hollanda Sağlık Turizmi Reklamları',
    h1: 'Hollanda ve Belçika İçin Sağlık Turizmi Pazarlaması',
    seoTitle: 'Hollanda Sağlık Turizmi Reklamları | Benelux Pazarlama | Overseas',
    metaDesc: 'Hollanda ve Belçika pazarlarından hasta kazanmak için Felemenkçe ve İngilizce sağlık turizmi reklamları ve SEO çözümleri.',
    overview: 'Benelüks ülkelerinde yaşayan hastalar uçuş mesafesi yakınlığı nedeniyle Türkiye\'yi sıkça tercih eder.',
    insights: ['Felemenkçe ve İngilizce çift dilli kampanya kurgusu en yüksek verimi sağlar.'],
    recommendedChannels: ['Google Ads Search', 'Meta Ads', 'WhatsApp Automation'],
    faq: [{ q: 'Hollanda pazarı için Felemenkçe şart mıdır?', a: 'Felemenkçe reklam dili dönüşüm oranını hissedilir derecede artırır.' }]
  }
];

// --- ŞEHİR KÜMESİ (CITIES) ---
export interface CityItem {
  id: string;
  slug: string;
  cityName: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDesc: string;
  overview: string;
  localAdvantages: string[];
  faq: { q: string; a: string }[];
}

export const MASTER_CITIES: CityItem[] = [
  {
    id: 'istanbul-saglik-turizmi-reklam-ajansi',
    slug: 'istanbul-saglik-turizmi-reklam-ajansi',
    cityName: 'İstanbul',
    title: 'İstanbul Sağlık Turizmi Reklam Ajansı',
    h1: 'İstanbul Klinikleri ve Hastaneleri İçin Dijital Pazarlama Ajansı',
    seoTitle: 'İstanbul Sağlık Turizmi Reklam Ajansı | Overseas Marketing',
    metaDesc: 'İstanbul merkezli diş klinikleri, saç ekim merkezleri ve hastaneler için uluslararası hasta kazandıran performans pazarlama, SEO ve CRM çözümleri.',
    overview: 'İstanbul, dünya sağlık turizminin başkentidir. Havalimanı erişimi, otel kapasitesi ve klinik sayısı ile devasa bir ekosisteme sahiptir. Rekabetin en yüksek olduğu şehirde fark yaratan ajans stratejileri sunuyoruz.',
    localAdvantages: [
      'İstanbul havalimanları erişim kolaylığı algısının reklamlarda işlenmesi',
      'İstanbul\'daki yüksek rekabette CPA (tıklama başı maliyet) optimizasyonu',
      'Yerinde prodüksiyon ve klinik içi video çekim imkanı'
    ],
    faq: [{ q: 'İstanbul\'daki yoğun klinik rekabetinde nasıl öne çıkabiliriz?', a: 'Klasik reklam metinleri yerine branş spesifik landing page, hekim E-E-A-T otoritesi ve yapay zeka WhatsApp otomasyonu ile öne çıkıyoruz.' }]
  },
  {
    id: 'antalya-saglik-turizmi-reklam-ajansi',
    slug: 'antalya-saglik-turizmi-reklam-ajansi',
    cityName: 'Antalya',
    title: 'Antalya Sağlık Turizmi Reklam Ajansı',
    h1: 'Antalya Diş ve Estetik Klinikleri İçin Reklam ve Pazarlama',
    seoTitle: 'Antalya Sağlık Turizmi Reklam Ajansı | Dental & Estetik | Overseas',
    metaDesc: 'Antalya\'daki diş klinikleri ve estetik merkezleri için tatil+tedavi konseptli uluslararası reklam yönetimi, İngiltere ve Avrupa hasta akışı.',
    overview: 'Antalya, özellikle dental (diş) ve estetik alanında "Tatil ve Tedavi" konseptini dünyada en iyi uygulayan şehirdir. Avrupa ve İngiltere uçuş hatları çok güçlüdür.',
    localAdvantages: [
      'Dental & Tatil konseptini birleştiren görsel landing page kurguları',
      'İngiltere, Rusya ve Almanya uçuş sezonlarına özel dinamik reklam bütçeleri'
    ],
    faq: [{ q: 'Antalya diş klinikleri için en etkili reklam mesajı nedir?', a: 'Hem yüksek standartlarda tedavi hem de Akdeniz tatili deneyimini sunan konsept reklamlar en yüksek form oranını verir.' }]
  },
  {
    id: 'izmir-saglik-turizmi-reklam-ajansi',
    slug: 'izmir-saglik-turizmi-reklam-ajansi',
    cityName: 'İzmir',
    title: 'İzmir Sağlık Turizmi Reklam Ajansı',
    h1: 'İzmir Sağlık Turizmi Klinikleri İçin Dijital Büyüme Ajansı',
    seoTitle: 'İzmir Sağlık Turizmi Reklam Ajansı | Overseas Marketing',
    metaDesc: 'İzmir ve Ege bölgesindeki hastaneler ve klinikler için Avrupa hedefli dijital pazarlama, SEO, GEO ve yapay zekâ çözümleri.',
    overview: 'İzmir, butik klinik hizmetleri ve Ege atmosferi ile Avrupa pazarında hızla yükselen bir sağlık turizmi destinasyonudur.',
    localAdvantages: ['Butik klinik ve yüksek hasta memnuniyeti odaklı E-E-A-T stratejileri'],
    faq: [{ q: 'İzmir klinikleri hangi pazarlara odaklanmalıdır?', a: 'Almanya, Hollanda ve İngiltere direkt uçuş imkanlarıyla İzmir için öncelikli pazarlardır.' }]
  },
  {
    id: 'ankara-saglik-turizmi-reklam-ajansi',
    slug: 'ankara-saglik-turizmi-reklam-ajansi',
    cityName: 'Ankara',
    title: 'Ankara Sağlık Turizmi Reklam Ajansı',
    h1: 'Ankara Hastane ve Tıp Merkezleri İçin Sağlık Turizmi Pazarlaması',
    seoTitle: 'Ankara Sağlık Turizmi Reklam Ajansı | Overseas Marketing',
    metaDesc: 'Ankara\'daki akademisyen doktorlar, genel hastaneler ve tıp merkezleri için uluslararası hasta pazarlaması ve B2B acente iletişimi.',
    overview: 'Ankara, akademik hekim kadroları, obezite ve ileri cerrahi branşlarıyla bilinen kurumsal sağlık turizmi merkezidir.',
    localAdvantages: ['Akademik hekim unvanları ve hastane teknolojik donanım iletişimi'],
    faq: [{ q: 'Ankara sağlık turizminde hangi branşlar öne çıkar?', a: 'Obezite cerrahisi, tüp bebek, göz ve genel cerrahi Ankara\'da en yüksek potansiyele sahiptir.' }]
  }
];

