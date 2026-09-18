import { SeoArticleItem } from './seoArticlesData';

export const DOCTOR_ARTICLES: SeoArticleItem[] = [
  // 1. Doktor Reklam Yasağı
  {
    id: "DOC-001",
    slug: "doktor-reklam-yasagi",
    url: "/doktor-reklam-yasagi",
    category: "Doktor İletişim Mevzuatı",
    title: "Doktor Reklam Yasağı 2026: Doktorlar Neleri Paylaşabilir?",
    h1: "Doktor Reklam Yasağı: Doktorlar İçin Güncel Tanıtım ve Bilgilendirme Sınırları",
    seoTitle: "Doktor Reklam Yasağı 2026: Doktorlar Neleri Paylaşabilir? | Overseas Marketing",
    metaDesc: "Doktor reklam yasağı neyi kapsıyor? Web sitesi, sosyal medya, hasta görseli, fiyat, yorum ve sağlık turizmi için güncel kuralları öğrenin.",
    primaryKeyword: "doktor reklam yasağı",
    secondaryKeywords: ["doktorlar için reklam yasağı", "hekim reklam yasağı", "sağlık tanıtım kuralları", "doktor sosyal medya yasağı"],
    searchIntent: "Bilgilendirici",
    funnel: "MOFU",
    readTime: "7 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Hukuki ve Medikal İçerik Kurulu",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Türkiye’de 12 Kasım 2025 tarihli Resmî Gazete’de yayımlanan yönetmelik uyarınca sağlık hizmet sunumunda açık veya örtülü reklam yapılması ve yaptırılması kesin olarak yasaktır. Ancak hekimler; tescilli ana ve yan dal uzmanlıklarını, akademik unvanlarını, çalışma yeri ve saatlerini ile uzmanlık alanlarına ilişkin sağlığı koruyucu ve geliştirici genel bilgileri mevzuat sınırları içinde paylaşabilir.",
    sections: [
      {
        heading: "Doktor Reklam Yasağı Nedir ve Kapsamı Nelerdir?",
        subheading: "12 Kasım 2025 Tarihli Yönetmeliğin Temel Çerçevesi",
        paragraphs: [
          "Doktor reklam yasağı; sağlık hizmetlerinin sıradan bir ticari emtia gibi talep yaratıcı, yönlendirici veya yanıltıcı yöntemlerle pazarlanmasını önlemek amacıyla konulmuş emredici bir hukuk kuralıdır.",
          "12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete’de yayımlanan Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik, 29 Temmuz 2023 tarihli eski yönetmeliği tamamen yürürlükten kaldırmıştır. Yeni yönetmeliğin temel ilkesi şudur: Sağlık hizmetlerinde açık veya örtülü reklam yapılması ve yaptırılması yasaktır.",
          "Bu kural hekimin internette tamamen sessiz kalması gerektiği anlamına gelmez. Hekimler; tıbbi deontolojiye ve meslek etiğine uygun olarak tescilli unvanlarını, çalışma yeri/saatlerini ve koruyucu sağlık bilgilerini kamuoyuyla paylaşabilir."
        ],
        callout: {
          title: "Önemli Hukuki Hatırlatma",
          text: "Mevzuat 'yasağı aşma' ya da 'boşluk bulma' girişimlerini değil; bilimin, uzmanlığın ve kamu yararının etik biçimde paylaşılmasını destekler. Bizim amacımız yasağı delmek değil, mevzuatın izin verdiği bilgilendirme sınırlarında hekimin otoritesini kurmaktır.",
          type: "warning"
        }
      },
      {
        heading: "Reklam ile Tanıtım ve Bilgilendirme Arasındaki Fark",
        subheading: "Hangi Eylem Reklam Sayılır, Hangisi Yasal Bilgilendirmedir?",
        paragraphs: [
          "Bir paylaşımın yasal bilgilendirme mi yoksa yasak bir reklam mı olduğunu ayırt etmek için şu kriterler değerlendirilir:",
          "Eğer bir içerik doğrudan hastayı belirli bir sağlık kuruluşuna veya hekime yönlendirmeyi amaçlıyorsa, fiyat/kampanya belirtiyorsa, 'en iyi', 'garantili', 'mucizevi' gibi üstünlük iddiaları içeriyorsa reklam niteliğindedir.",
          "Buna karşılık genel hastalık belirtileri, koruyucu yaşam tarzı önerileri ve klinik süreçlerin tarafsızca anlatılması tanıtım ve bilgilendirme kapsamında değerlendirilir."
        ],
        table: {
          headers: ["Özellik", "Yasak Reklam Faaliyeti", "Mevzuata Uygun Bilgilendirme"],
          rows: [
            ["Temel Amaç", "Sağlık hizmetine talep yaratmak ve yönlendirmek", "Toplumu koruyucu sağlık konusunda bilinçlendirmek"],
            ["Dil ve Üslup", "'En başarılı', 'garantili', 'sıfır risk' gibi vaatler", "Bilimsel, kanıta dayalı ve tarafsız anlatım"],
            ["Fiyat / İndirim", "Ücret, kampanya, çekiliş, promosyon sunmak", "Her türlü fiyat, indirim ve hediye yasaktır"],
            ["Hasta Görselleri", "Etkileşime açık, filtreli, sponsorlu paylaşımlar", "Açık rızalı, gerçekçi, etkileşime kapalı, sponsorsuz"],
            ["Dağıtım Biçimi", "Yurt içi kitleye sponsorlu / ücretli öne çıkarma", "Organik arama (SEO), web sitesi ve bilgi serileri"]
          ]
        }
      },
      {
        heading: "Doktorların Paylaşmaması Gereken Riskli İçerikler",
        subheading: "Denetimlerde En Sık Ceza Alan Paylaşım Türleri",
        paragraphs: [
          "Bakanlık ve İl Sağlık Müdürlükleri Denetim Komisyonları tarafından tespit edilen ihlallerin başında şunlar gelmektedir:",
          "1. Üstünlük ve Garanti İfadeleri: 'Türkiye’nin bir numaralı uzmanı', 'kesin iyileşme', 'ağrısız acısız kesin operasyon' gibi ifadeler kesinlikle yasaktır.",
          "2. Hasta Yorumları ve Teşekkür Mesajları: Hastaların veya yakınlarının memnuniyet ve teşekkür ifadeleri üzerinden tanıtım yapılamaz.",
          "3. Bilimsel Olarak Kanıtlanmamış Yöntemler: T.C. Sağlık Bakanlığı'nca onaylanmamış veya yerleşik tıbbi kılavuzlarda bulunmayan yöntemler anlatılamaz.",
          "4. Fiyat ve İndirim Duyuruları: 'İlk muayene ücretsiz', 'yüzde 20 indirim' gibi ifadeler ağır idari yaptırım sebebidir."
        ],
        bulletPoints: [
          "Sertifika eğitimlerinin tescilli uzmanlık gibi kullanılması yasaktır.",
          "Yurt içi hastalara yönelik ücretli sponsorlu reklam çıkılması sınırlandırılmıştır.",
          "Hasta görsellerinin etkileşime (yorum/beğeni/paylaşım) açık bırakılması yasaktır."
        ]
      }
    ],
    faqs: [
      {
        q: "Doktor reklam yasağı sosyal medyayı kapsar mı?",
        a: "Evet. 12 Kasım 2025 tarihli yönetmelik; web siteleri, Instagram, YouTube, TikTok, LinkedIn dahil tüm dijital mecraları ve sosyal medya platformlarını doğrudan kapsamaktadır."
      },
      {
        q: "Doktorlar kendi web sitelerinde hangi bilgileri verebilir?",
        a: "Doktorlar tescilli uzmanlıklarını, akademik unvanlarını, muayenehane veya hastane adreslerini, çalışma saatlerini ve koruyucu sağlık rehberlerini sunabilir. Sitede son güncelleme tarihi ve editör iletişim bilgisi zorunludur."
      },
      {
        q: "Hasta ile çekilen önce-sonra fotoğrafları paylaşılabilir mi?",
        a: "Yurt içinde cerrahi ve girişimsel görsel paylaşımları çok sıkı şartlara tabidir. Yazılı açık rıza, filtre kullanılmaması, aynı ortam/açı şartı, zorunlu uyarı metni ve yorum-beğeni etkileşimlerinin kapatılması zorunludur. Sponsorlu yayınlanamaz."
      }
    ],
    officialSources: [
      { title: "Resmî Gazete 12 Kasım 2025 Tarihli Yönetmelik", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" },
      { title: "Sağlık Bakanlığı Tanıtım ve Bilgilendirme Yönetmeliği", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "KVKK Özel Nitelikli Kişisel Veriler Kılavuzu", url: "https://www.kvkk.gov.tr/Icerik/2051/Ozel-Nitelikli-Kisisel-Veriler" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı Ana Sayfası", url: "/doktor-reklam-ajansi" },
      { title: "Doktor Reklam Yönetmeliği Detayları", url: "/doktor-reklam-yonetmeligi" },
      { title: "Doktor Reklamı Nasıl Yapılır?", url: "/doktor-reklami-nasil-yapilir" }
    ]
  },

  // 2. Doktor Reklam Yönetmeliği
  {
    id: "DOC-002",
    slug: "doktor-reklam-yonetmeligi",
    url: "/doktor-reklam-yonetmeligi",
    category: "Doktor İletişim Mevzuatı",
    title: "Doktor Reklam Yönetmeliği 2026: Güncel Maddeler ve Açıklamalar",
    h1: "Doktor Reklam Yönetmeliği: 2026 İçin Güncel ve Uygulamalı Rehber",
    seoTitle: "Doktor Reklam Yönetmeliği 2026: Güncel Maddeler ve Açıklamalar | Overseas Marketing",
    metaDesc: "12 Kasım 2025 tarihli doktor reklam yönetmeliği ne getiriyor? Sosyal medya, hasta görseli, sponsorlu içerik ve sağlık turizmi hükümleri.",
    primaryKeyword: "doktor reklam yönetmeliği",
    secondaryKeywords: ["sağlık tanıtım yönetmeliği", "doktor sosyal medya yönetmeliği", "12 kasım 2025 yönetmelik", "sağlık bakanlığı tanıtım kuralları"],
    searchIntent: "Hukuki / Bilgilendirici",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Hukuki ve Medikal İçerik Kurulu",
    reviewer: "Sağlık Hukuku Masası",
    quickAnswer: "12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete'de yayımlanan yönetmelik; hekimlerin, kliniklerin ve sağlık tesislerinin tüm dijital tanıtım ve bilgilendirme faaliyetlerini düzenleyen temel mevzuattır. Madde 5 temel ilkeleri, Madde 6 hasta mahremiyeti ve KVKK şartlarını, Madde 7 görsel paylaşımları, Madde 8 ise uluslararası sağlık turizmi istisnalarını belirler.",
    sections: [
      {
        heading: "Yönetmeliğin 5. Maddesi: Temel Tanıtım ve Bilgilendirme İlkeleri",
        subheading: "Açık ve Örtülü Reklam Yasağının Ayrıntıları",
        paragraphs: [
          "Yönetmeliğin 5. maddesi gereğince sağlık hizmetlerinde açık veya örtülü reklam yapılması ve yaptırılması yasaktır. Sağlık hizmetiyle ilgili bilgilendirme yalnızca konusunda yetkili sağlık meslek mensupları tarafından yapılabilir.",
          "Yetkisiz uzmanlık alanı izlenimi verilmesi yasaktır. Sertifikalar tescilli uzmanlık unvanı gibi kullanılamaz. Örneğin 'Bakanlıkça tescil edilmemiş unvanlar' ile kendini tanıtmak yönetmeliğe aykırıdır.",
          "Ayrıca arama motorlarında ve sosyal medyada ücretli/sponsorlu olarak öne çıkmaya yönelik faaliyetler kısıtlanmıştır; arama sonuçlarında kullanılan anahtar kelimeler yönetmelik ilkelerine uymak zorundadır."
        ]
      },
      {
        heading: "Yönetmeliğin 6. ve 7. Maddeleri: KVKK ve Görsel Paylaşımlar",
        subheading: "Hasta Mahremiyeti, Onam Formları ve Etkileşim Kısıtları",
        paragraphs: [
          "6. Madde uyarınca tanıtım ve bilgilendirme; 6698 sayılı KVKK, Hasta Hakları Yönetmeliği ve Kişisel Sağlık Verileri Yönetmeliğine tam uyumlu yürütülmelidir. Yüzün kapatılması hastayı anonim kılmaya yetmeyebilir.",
          "7. Madde görsel içerik kurallarını düzenler: Hasta görseli için Bakanlık formatına uygun yazılı/elektronik açık rıza şarttır. Hasta iznini istediği an geri çekebilir. İzin karşılığında indirim, hediye veya ücret avantajı sunulamaz.",
          "Önemli kural: Görsel paylaşımlar sponsorlu yayınlanamaz. Paylaşımların altındaki yorum, beğeni ve yeniden paylaşım gibi etkileşimler kapatılmalıdır."
        ],
        callout: {
          title: "Zorunlu Web Sitesi Yükümlülüğü",
          text: "Yönetmelik gereğince sağlık meslek mensubunun internet sitesinde her tıbbi bilginin 'son güncelleme tarihi' ve 'site editörüne ulaşılabilecek iletişim bilgisi' açıkça yer almalıdır.",
          type: "tip"
        }
      },
      {
        heading: "Yönetmeliğin 8. Maddesi: Uluslararası Sağlık Turizmi İstisnası",
        subheading: "Yurt Dışı Hedefli Reklamlarda Aranan Şartlar",
        paragraphs: [
          "Uluslararası sağlık turizmi yetki belgesine sahip sağlık tesisleri ve aracı kuruluşlar için yurt dışı hedefli reklamlar serbest bırakılmıştır.",
          "Ancak bunun için: 1) Yurt dışına yönelik ayrı yabancı dilde web sitesi veya sosyal medya hesabı kullanılmalı, 2) Türkçe dışındaki resmî dillerde yayın yapılmalı, 3) Türkiye içi hedeflemeler ve otomatik kitle genişletme kapatılmalı, 4) HealthTürkiye logosu ve yetki belgesi açıkça sergilenmelidir."
        ]
      }
    ],
    faqs: [
      {
        q: "Yeni yönetmelik eski 2023 yönetmeliğini iptal etti mi?",
        a: "Evet. 12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete'de yayımlanan yönetmeliğin 14. maddesiyle 29 Temmuz 2023 tarihli eski yönetmelik yürürlükten kaldırılmıştır."
      },
      {
        q: "İl Sağlık Müdürlükleri denetimi nasıl yürütür?",
        a: "İl Sağlık Müdürlüğü bünyesindeki Sağlıkta Bilgilendirme Tanıtım Faaliyetleri İl Değerlendirme Komisyonu; internet sitelerini, sosyal medya hesaplarını ve basını resen veya şikâyet üzerine düzenli olarak tarar."
      }
    ],
    officialSources: [
      { title: "T.C. Resmî Gazete 33075 Sayılı Yönetmelik Metni", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" },
      { title: "Sağlık Hizmetleri Genel Müdürlüğü Yönetmelik Duyurusu", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "Uluslararası Sağlık Turizmi Yönetmeliği", url: "https://shgmturizmdb.saglik.gov.tr/TR-108367/yeni-saglik-turizmi-yonetmeligi.html" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı Çözümlerimiz", url: "/doktor-reklam-ajansi" },
      { title: "Doktor Reklam Cezası ve Yaptırımlar", url: "/doktor-reklam-cezasi" },
      { title: "Sağlık Turizmi Reklamı Nasıl Verilir?", url: "/saglik-turizmi-reklami-nasil-verilir" }
    ]
  },

  // 3. Doktor Reklamı Yasak mı?
  {
    id: "DOC-003",
    slug: "doktor-reklami-yasak-mi",
    url: "/doktor-reklami-yasak-mi",
    category: "Doktor İletişim Mevzuatı",
    title: "Doktor Reklamı Yasak mı? 2026 Güncel ve Kısa Cevap",
    h1: "Doktor Reklamı Yasak mı? Doktorlar Neleri Yapabilir, Neleri Yapamaz?",
    seoTitle: "Doktor Reklamı Yasak mı? 2026 Güncel ve Kısa Cevap | Overseas Marketing",
    metaDesc: "Doktorlar reklam verebilir mi? Türkiye’de doktor reklamı, sosyal medya, Google, SEO ve sağlık turizmi için güncel kuralları anlaşılır biçimde okuyun.",
    primaryKeyword: "doktor reklamı yasak mı",
    secondaryKeywords: ["doktorlar reklam verebilir mi", "doktor reklam verebilir mi", "hekim reklam yasağı var mı", "doktor tanıtımı yasal mı"],
    searchIntent: "Soru / Cevap",
    funnel: "TOFU",
    readTime: "5 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas İçerik Ekibi",
    reviewer: "Sağlık Mevzuatı Masası",
    quickAnswer: "Evet, Türkiye’de sağlık hizmet sunumunda açık veya örtülü reklam yapılması ve yaptırılması kanunen ve yönetmelikle yasaktır. Ancak bu, doktorun dijital dünyada bulunamayacağı anlamına gelmez. Hekimler; tescilli uzmanlıklarını, akademik unvanlarını ve uzmanlık alanlarıyla ilgili sağlığı koruyucu bilimsel bilgileri mevzuatın çizdiği çerçevede paylaşabilir.",
    sections: [
      {
        heading: "Doktorlar İnternette Neleri Yapabilir, Neleri Yapamaz?",
        subheading: "Bilgilendirme Serbest, Ticari Reklam ve Talep Yaratma Yasak",
        paragraphs: [
          "Temel ayrım son derece basittir: Doktorun varlığı, branşı ve kamuya yararlı bilimsel açıklamaları serbesttir; ancak hastayı ameliyata veya tedaviye ikna etmeye yönelik her türlü ticari çağrı reklam sayılır.",
          "Doktorlar bir web sitesine sahip olabilir, organik arama motoru optimizasyonu (SEO) yapabilir, YouTube'da bilgilendirici videolar yayınlayabilir ve LinkedIn'de makaleler paylaşabilir.",
          "Yasak olan eylemler; indirim, kampanya, çekiliş, hasta tavsiyeleriyle övünme, rakipleri küçümseme ve yurt içi kitleye sponsorlu doğrudan reklam basmaktır."
        ],
        bulletPoints: [
          "YAPILABİLİR: Tescilli uzmanlık alanında hastalık belirtilerini ve korunma yollarını anlatmak.",
          "YAPILABİLİR: Web sitesinde muayenehane adresi, telefon ve randevu çalışma saatlerini belirtmek.",
          "YAPILAMAZ: 'Ay sonuna kadar dolguda %30 indirim' gibi ticari promosyonlar yapmak.",
          "YAPILAMAZ: 'En iyi burun cerrahı benim, kesin sonuç garanti' şeklinde iddialarda bulunmak.",
          "YAPILAMAZ: Hasta teşekkür videolarını sponsorlu reklam olarak Instagram'da öne çıkarmak."
        ]
      }
    ],
    faqs: [
      {
        q: "Doktorlar Google Ads ile reklam verebilir mi?",
        a: "Yurt içi hastalara yönelik ücretli sponsorlu öne çıkma faaliyetleri yönetmelikle sınırlandırılmıştır. Ancak organik SEO çalışmaları ve arama motoru rehber içerikleri yönetmelik kurallarına uyulduğu sürece serbesttir."
      },
      {
        q: "Yurt dışından hasta getirmek için reklam vermek yasak mı?",
        a: "Hayır. Uluslararası sağlık turizmi yetki belgesine sahip kuruluşlar, yabancı dilde ve Türkiye dışını hedefleyerek sponsorlu sağlık turizmi reklamı verebilir."
      }
    ],
    officialSources: [
      { title: "T.C. Sağlık Bakanlığı Tanıtım ve Bilgilendirme Yönetmeliği", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "Resmî Gazete Yönetmelik Eki", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktor Reklamı Nasıl Yapılır?", url: "/doktor-reklami-nasil-yapilir" }
    ]
  },

  // 4. Doktor Reklamı Nasıl Yapılır?
  {
    id: "DOC-004",
    slug: "doktor-reklami-nasil-yapilir",
    url: "/doktor-reklami-nasil-yapilir",
    category: "Uygulama Rehberleri",
    title: "Doktor Reklamı Nasıl Yapılır? Yasağa Takılmadan Doğru Tanıtım",
    h1: "Doktorlar İçin Reklam Yasağına Takılmadan Tanıtım Nasıl Yapılır?",
    seoTitle: "Doktor Reklamı Nasıl Yapılır? Yasağa Takılmadan Doğru Tanıtım | Overseas Marketing",
    metaDesc: "Doktorlar için reklam yasağına takılmadan tanıtım nasıl yapılır? SEO, GEO, YouTube, Instagram, LinkedIn ve PR için adım adım rehber.",
    primaryKeyword: "doktor reklamı nasıl yapılır",
    secondaryKeywords: ["doktor reklamı nasıl verilir", "reklam yasağına takılmadan tanıtım", "hekim dijital pazarlama", "doktor içerik stratejisi"],
    searchIntent: "Uygulamalı Rehber",
    funnel: "BOFU",
    readTime: "9 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Büyüme Stratejistleri",
    reviewer: "Sağlık Mevzuatı Masası",
    quickAnswer: "Doktor reklamı; yasağı delmeye çalışarak değil, mevzuatın izin verdiği organik SEO, GEO (yapay zekâ görünürlüğü), YouTube eğitici video serileri, LinkedIn düşünce liderliği ve saygın basın kuruluşlarında editoryal PR görüşleri sunularak yapılır. Bu sistem hekimi reklamsız olarak Google'da ve AI arama motorlarında bir numaralı güvenilir uzman haline getirir.",
    sections: [
      {
        heading: "Yasağa Takılmadan Doktor Görünürlüğü Kurmanın 10 Adımı",
        subheading: "Sürdürülebilir, Etik ve Yüksek Hasta Dönüşümlü Sistem",
        paragraphs: [
          "1. Uzmanlık ve Yetki Sınırını Netleştirin: Tescilli ana ve yan dal unvanlarınız dışında mevzuatta yeri olmayan yakıştırma unvanlar kullanmayın.",
          "2. Kullanıcı Sorularından İçerik Haritası Çıkarın: Hastaların Google ve ChatGPT'de sorduğu gerçek belirti ve süreç sorularını tespit edin.",
          "3. E-E-A-T Uyumlu Web Sitesi Kurun: Tıbbi doğruluk, yazar kimliği, kaynakça ve son güncelleme tarihi içeren kapsamlı rehberler yayınlayın.",
          "4. GEO (Generative Engine Optimization) Altyapısı: İçeriklerinizi ChatGPT, Perplexity ve Google AI Overviews'ın doğrudan kaynak gösterebileceği yapılandırılmış veri ve kısa cevap bloklarıyla donatın.",
          "5. YouTube Bilgilendirme Motoru: Ayda 2-4 derinlemesine video çekerek hem YouTube aramalarında üst sıralara çıkın hem de sosyal medya kanallarınızı besleyin.",
          "6. Instagram Bilgi Serileri: Hasta görseli yerine tıbbi kavram kartları, diyagramlar ve 60 saniyelik hekim anlatımları yayınlayın.",
          "7. LinkedIn Otoritesi: Kongre sunumları, klinik araştırmalar ve mesleki analizlerle sektör ve basın nezdinde otorite kurun.",
          "8. Editoryal Basın ve PR: AA, TRT, NTV gibi kurumlarda kamu sağlığına yönelik uzman görüşü vererek yüksek prestijli referanslar edinin.",
          "9. Bilgi Odaklı Ölçülü CTA Kullanımı: 'Hemen randevu al hayatın değişsin' yerine 'Detaylı klinik değerlendirme için randevu oluşturabilirsiniz' ifadesini tercih edin.",
          "10. Yayın Öncesi Hukuk ve Tıp Onayı: Her içeriği yayına almadan önce yönetmelik kontrol listesinden geçirin."
        ]
      }
    ],
    faqs: [
      {
        q: "Performans reklamı vermeden hasta kazanılabilir mi?",
        a: "Kesinlikle evet. Sağlık alanında en yüksek niyetli hastalar 'doktor reklamı' arayanlar değil; rahatsızlığının belirtilerini, ameliyat sürecini ve risklerini araştıran organik arama kullanıcılarıdır. SEO ve GEO bu hastaları doğrudan hekime ulaştırır."
      }
    ],
    officialSources: [
      { title: "Resmî Gazete 12 Kasım 2025 Yönetmelik", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktorlar İçin SEO ve GEO Rehberi", url: "/doktorlar-icin-seo-ve-geo" }
    ]
  },

  // 5. Doktor Reklam Cezası
  {
    id: "DOC-005",
    slug: "doktor-reklam-cezasi",
    url: "/doktor-reklam-cezasi",
    category: "Doktor İletişim Mevzuatı",
    title: "Doktor Reklam Cezası 2026: Hangi İhlale Hangi Yaptırım?",
    h1: "Doktor Reklam Cezası: İhlal Türleri, Denetim ve Riskten Korunma",
    seoTitle: "Doktor Reklam Cezası 2026: Hangi İhlale Hangi Yaptırım? | Overseas Marketing",
    metaDesc: "Doktor reklam yasağı ihlalinde hangi yaptırımlar uygulanabilir? Hekim, sağlık tesisi, sağlık turizmi ve KVKK risklerini güncel çerçevede öğrenin.",
    primaryKeyword: "doktor reklam cezası",
    secondaryKeywords: ["doktor reklam yasağı cezası", "sağlık reklamı cezası", "tabip odası reklam cezası", "sağlık bakanlığı reklam denetimi"],
    searchIntent: "Risk / Hukuki",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Mevzuat ve Hukuk Masası",
    reviewer: "Sağlık Hukuku Danışmanı",
    quickAnswer: "Doktor reklam cezası tek bir sabit para cezası değildir. İhlalin niteliğine göre 1219 sayılı Kanun kapsamında hekimlere disiplin ve idari para cezaları, 3359 sayılı Temel Kanun ve Ek-2 İdari Yaptırım Formu uyarınca klinik ve hastanelere idari para ve faaliyet durdurma cezaları, KVKK kapsamında ise özel nitelikli sağlık verisi ihlalinden ötürü milyonlarca liralık yaptırımlar uygulanabilir.",
    sections: [
      {
        heading: "Hangi Davranışlar Reklam Cezası Riski Doğurur?",
        subheading: "Mevzuat Kapsamında Denetlenen Başlıca Unsurlar",
        paragraphs: [
          "Bakanlık ve İl Değerlendirme Komisyonları tarafından en sık uygulanan yaptırımlar şu ihlallerden kaynaklanır:",
          "1. Açık veya örtülü reklam yapmak, hekimi diğer hekimlerden üstün göstermek.",
          "2. Bilimsel olarak kanıtlanmamış yöntemleri tedavi vaadiyle sunmak.",
          "3. Fiyat, indirim, promosyon veya çekiliş duyurusu yapmak.",
          "4. Hastanın açık rızası olmadan fotoğraf/video paylaşmak veya ameliyat anı görüntülerini yayınlamak.",
          "5. Hasta görsellerini etkileşime açık (yorum/beğeni) ve sponsorlu olarak yayınlamak.",
          "6. Yurt içi hastalara sağlık turizmi kisvesi altında reklam göstermek."
        ]
      },
      {
        heading: "Yaptırım Mercii ve Denetim Mekanizmaları",
        subheading: "Kimler Ceza Kesebilir?",
        paragraphs: [
          "Sağlık Bakanlığı ve İl Sağlık Müdürlükleri: Resen tarama yaparak veya şikâyet üzerine idari yaptırım uygular.",
          "Türk Tabipleri Birliği (TTB) ve Tabip Odaları: Tıbbi Deontoloji Tüzüğü ve Hekimlik Meslek Etiği Kuralları gereği para ve meslekten geçici men cezası verebilir.",
          "Ticaret Bakanlığı Reklam Kurulu: Tüketiciyi yanıltıcı sağlık reklamlarına yüzbinlerce liralık idari para ve erişim engeli cezası uygular.",
          "Kişisel Verileri Koruma Kurumu (KVKK): Sağlık verisinin izinsiz paylaşılması durumunda en üst sınırda idari para cezaları tesis eder."
        ]
      }
    ],
    faqs: [
      {
        q: "Sayfayı silmek veya arşive almak ceza riskini ortadan kaldırır mı?",
        a: "Hayır. Denetim ekipleri dijital arşivler, ekran kayıtları ve reklam kütüphanesi (Meta Ad Library) kayıtlarını delil olarak kullanmaktadır. Bu nedenle proaktif olarak tüm hesapların taranıp mevzuata uygun hale getirilmesi şarttır."
      }
    ],
    officialSources: [
      { title: "T.C. Resmî Gazete Yönetmelik Eki", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" },
      { title: "KVKK Kanun Metni ve Özel Nitelikli Veri Kılavuzu", url: "https://www.kvkk.gov.tr/Icerik/2051/Ozel-Nitelikli-Kisisel-Veriler" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktor Reklam Yasağı", url: "/doktor-reklam-yasagi" }
    ]
  },

  // 6. Sağlık Turizmi Reklamı Nasıl Verilir?
  {
    id: "DOC-006",
    slug: "saglik-turizmi-reklami-nasil-verilir",
    url: "/saglik-turizmi-reklami-nasil-verilir",
    category: "Uluslararası Sağlık Turizmi",
    title: "Sağlık Turizmi Reklamı Nasıl Verilir? 2026 Güncel Rehber",
    h1: "Sağlık Turizmi Reklamı Nasıl Verilir? Yetki, Hedefleme ve Kampanya Rehberi",
    seoTitle: "Sağlık Turizmi Reklamı Nasıl Verilir? 2026 Güncel Rehber | Overseas Marketing",
    metaDesc: "Sağlık turizmi reklamı için yetki belgesi, yabancı dil sitesi, yurt dışı hedefleme, HealthTürkiye logosu ve hasta görseli kurallarını öğrenin.",
    primaryKeyword: "sağlık turizmi reklamı nasıl verilir",
    secondaryKeywords: ["yurtdışı hasta reklamı", "sağlık turizmi reklam mevzuatı", "sağlık turizmi google ads", "sağlık turizmi meta reklamları"],
    searchIntent: "Ticari / Bilgilendirici",
    funnel: "BOFU",
    readTime: "10 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Uluslararası Sağlık Turizmi Departmanı",
    reviewer: "Sağlık Turizmi Mevzuat Kurulu",
    quickAnswer: "Sağlık turizmi reklamı; T.C. Sağlık Bakanlığı onaylı Uluslararası Sağlık Turizmi Yetki Belgesi’ne sahip sağlık tesisleri ve aracı kuruluşlar tarafından, yurt dışına yönelik ayrı yabancı dilde bir internet sitesi/hesabı üzerinden, Türkçe dışındaki dillerde ve Türkiye konumu negatiflenerek (otomatik hedeflemeler kapatılarak) verilebilir. HealthTürkiye logosu ve yetki belgesi yayınlanmak zorundadır.",
    sections: [
      {
        heading: "Sağlık Turizmi Reklamı Açarken Uyulması Zorunlu 6 Kriter",
        subheading: "Mevzuata Uygun Yurt Dışı Kampanya Kurulumu",
        paragraphs: [
          "1. Yetki Belgesinin Doğrulanması: Reklam yapacak kurumun Bakanlıkça verilmiş yetki belgesi olmalı ve reklam açılış sayfasında belgenin taranmış kopyası veya karekodu yer almalıdır.",
          "2. Ayrı Yurt Dışı Dijital Varlığı: Yurt içi hesapta ara sıra İngilizce paylaşım yapmak yetmez; münhasıran yurt dışına yönelik ayrı hesap ve web sitesi kullanılmalıdır.",
          "3. Dil Şartı: Sponsorlu reklamlar Türkçe hariç diğer resmî dillerde (İngilizce, Almanca, Fransızca, Arapça, Rusça vb.) hazırlanmalıdır.",
          "4. Kesin Coğrafi Dışlama: Türkiye’de yaşayan kişilere talep yaratacak reklamlar yasaktır. Meta ve Google Ads üzerinde Türkiye konumu kesin olarak hariç tutulmalı, Advantage/otomatik kitle genişletme kapatılmalıdır.",
          "5. HealthTürkiye Logosu: Resmi sağlık turizmi portalı olan HealthTürkiye logosu ve bağlantısı web sitesinde yer almalıdır.",
          "6. Hasta Görselleri: Yurt dışı varlıklarda açık rızalı hasta hikâyelerine yer verilebilir; ancak gerçeğe aykırı filtre ve yanıltıcı montajlar yasaktır."
        ]
      }
    ],
    faqs: [
      {
        q: "Aracı kuruluş sağlık tesisi gibi reklam yapabilir mi?",
        a: "Hayır. Uluslararası sağlık turizmi aracı kuruluşları kendilerini hastane veya klinik gibi gösteremez; aracı rolünü ve hizmetin hangi yetkili sağlık tesisinde verileceğini açıkça belirtmek zorundadır."
      }
    ],
    officialSources: [
      { title: "Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik", url: "https://shgmturizmdb.saglik.gov.tr/TR-108367/yeni-saglik-turizmi-yonetmeligi.html" },
      { title: "HealthTürkiye Resmi Portalı", url: "https://www.healthturkiye.gov.tr/" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Sağlık Turizmi Reklam Ajansı Çözümleri", url: "/saglik-turizmi-reklam-ajansi" }
    ]
  },

  // 7. Doktorlar İçin SEO ve GEO
  {
    id: "DOC-007",
    slug: "doktorlar-icin-seo-ve-geo",
    url: "/doktorlar-icin-seo-ve-geo",
    category: "Kanal Stratejileri",
    title: "Doktorlar İçin SEO ve GEO | Google ve Yapay Zekâ Görünürlüğü",
    h1: "Doktorlar İçin SEO ve GEO: Google’da ve Yapay Zekâ Cevaplarında Güvenilir Görünürlük",
    seoTitle: "Doktorlar İçin SEO ve GEO | Google ve Yapay Zekâ Görünürlüğü | Overseas Marketing",
    metaDesc: "Doktor SEO ve GEO stratejisi: uzmanlık sayfaları, içerik kümeleri, kaynaklar, yapılandırılmış veri ve yapay zekâ cevaplarında görünürlük.",
    primaryKeyword: "doktor SEO",
    secondaryKeywords: ["doktor GEO", "doktorlar için SEO", "hekim SEO ajansı", "yapay zekâ görünürlüğü", "hekim E-E-A-T"],
    searchIntent: "Ticari / Bilgilendirici",
    funnel: "BOFU",
    readTime: "9 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas SEO & AI Araştırma Ekibi",
    reviewer: "Medikal Arama Algoritmaları Masası",
    quickAnswer: "Doktor SEO ve GEO (Generative Engine Optimization); hekimin uzmanlık alanına ilişkin bilimsel bilgilerin Google algoritmaları, ChatGPT, Perplexity ve Gemini gibi yapay zekâ cevap motorları tarafından güvenilir kaynak olarak taranmasını, anlaşılmasını ve kullanıcılara birincil referans olarak önerilmesini sağlayan etik arama optimizasyonudur.",
    sections: [
      {
        heading: "Doktor SEO ve GEO Neden En Güvenli Büyüme Modelidir?",
        subheading: "Reklam Yasağını İhlal Etmeden Sürekli Hasta Başvurusu Kazanmak",
        paragraphs: [
          "Organik SEO ve GEO arama motorlarına para ödeyerek sponsorlu öne çıkma yöntemi değildir. Tam aksine kullanıcının gerçek sağlık endişelerine kanıta dayalı, doğru ve mevzuata uygun cevaplar sunarak hak edilmiş bir organik otorite kazanmaktır.",
          "Google'ın sağlık aramalarındaki YMYL (Your Money Your Life) ve E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik) algoritmaları; doğrulanabilir hekim unvanlarını, bilimsel kaynakları ve güncel tıbbi makaleleri ödüllendirir.",
          "GEO ile hazırlanan içerikler; ChatGPT veya Google AI Overviews'da 'X hastalığında en güncel tanı yöntemleri nelerdir?' sorusuna doğrudan doktorun makalesini kaynak göstererek hekimin adını yanıtın merkezine yerleştirir."
        ]
      }
    ],
    faqs: [
      {
        q: "GEO (Generative Engine Optimization) nedir?",
        a: "GEO; içeriklerin yapay zekâ ve üretken cevap motorları tarafından alıntılanabilmesi için yapılandırılmış veri (schema), net tanımlar, birincil bilimsel kaynaklar ve şeffaf yazar bilgileriyle optimize edilmesidir."
      }
    ],
    officialSources: [
      { title: "Google Health Search & E-E-A-T Yönergeleri", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktor Reklamı Nasıl Yapılır?", url: "/doktor-reklami-nasil-yapilir" }
    ]
  },

  // 8. Doktorlar İçin YouTube ve Instagram
  {
    id: "DOC-008",
    slug: "doktorlar-icin-youtube-instagram-icerik-pazarlamasi",
    url: "/doktorlar-icin-youtube-instagram-icerik-pazarlamasi",
    category: "Kanal Stratejileri",
    title: "Doktorlar İçin YouTube ve Instagram İçerik Pazarlaması",
    h1: "Doktorlar İçin YouTube ve Instagram İçerik Pazarlaması",
    seoTitle: "Doktorlar İçin YouTube ve Instagram İçerik Pazarlaması | Overseas Marketing",
    metaDesc: "Doktorlar için YouTube ve Instagram stratejisi: konu seçimi, video formatı, mevzuat kontrolü, içerik çoğaltma ve ölçüm rehberi.",
    primaryKeyword: "doktor içerik pazarlaması",
    secondaryKeywords: ["doktor YouTube", "doktor Instagram yönetimi", "hekim video prodüksiyon", "sağlık sosyal medya ajansı"],
    searchIntent: "Ticari",
    funnel: "BOFU",
    readTime: "8 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Medya ve Prodüksiyon Masası",
    reviewer: "Sağlık İletişimi Uzmanı",
    quickAnswer: "Doktorlar için YouTube derinlemesine arama ömrü ve bilimsel güven inşa ederken, Instagram doğru yapılandırıldığında geniş kitlelerde hekim bilinirliği sağlar. Ayda bir kez yapılacak 4 saatlik çekimle 2-4 ana YouTube videosu, 15+ dikey kısa video (Reels/Shorts) ve carousel kartları üretilerek tüm kanallar deontoloji kurallarına uygun biçimde beslenir.",
    sections: [
      {
        heading: "Deontolojiye Uygun Video İçerik Sütunları",
        subheading: "Yanıltıcı Vaatler Olmadan Güven İnşa Eden Formatlar",
        paragraphs: [
          "1. Koruyucu Sağlık ve Erken Teşhis: Hastalığın ilk belirtileri ve ne zaman bir uzmana görünmek gerektiği.",
          "2. Süreç Açıklamaları: Cerrahi operasyonun veya tetkikin aşamaları, öncesi hazırlık ve sonrası genel yaşam tarzı.",
          "3. Mit ve Yanlış Bilgi Kırma: Sosyal medyada yayılan kulaktan dolma tehlikeli sağlık mitlerinin bilimsel dille düzeltilmesi.",
          "4. Araştırma ve Kongre Yorumları: Yeni yayımlanan hakemli bir çalışmanın ne anlama geldiğinin tarafsız özeti."
        ]
      }
    ],
    faqs: [
      {
        q: "Video başlıklarında nelere dikkat edilmelidir?",
        a: "Korku salan, mucize vaat eden veya kesin sonuç bildiren sansasyonel başlıklar yerine; 'Diz ağrısında hangi belirtiler uzman kontrolü gerektirir?' gibi soru odaklı ve tarafsız başlıklar seçilmelidir."
      }
    ],
    officialSources: [
      { title: "Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği Madde 7", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktor Reklam Yönetmeliği", url: "/doktor-reklam-yonetmeligi" }
    ]
  },

  // 9. Doktorlar İçin LinkedIn Pazarlaması
  {
    id: "DOC-009",
    slug: "doktorlar-icin-linkedin-pazarlamasi",
    url: "/doktorlar-icin-linkedin-pazarlamasi",
    category: "Kanal Stratejileri",
    title: "Doktorlar İçin LinkedIn Pazarlaması ve Kişisel Marka Yönetimi",
    h1: "Doktorlar İçin LinkedIn Pazarlaması: Uzmanlık, Ağ ve Düşünce Liderliği",
    seoTitle: "Doktorlar İçin LinkedIn Pazarlaması ve Kişisel Marka Yönetimi | Overseas Marketing",
    metaDesc: "Doktor LinkedIn stratejisi: profil optimizasyonu, bilimsel içerik, profesyonel ağ, medya ve konuşma fırsatları için uygulamalı rehber.",
    primaryKeyword: "doktor LinkedIn yönetimi",
    secondaryKeywords: ["doktor LinkedIn pazarlaması", "hekim kişisel marka", "doktor dijital itibar", "hekim düşünce liderliği"],
    searchIntent: "Ticari",
    funnel: "BOFU",
    readTime: "7 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas B2B İletişim Masası",
    reviewer: "Akademik İletişim Danışmanı",
    quickAnswer: "Doktorlar için LinkedIn doğrudan hasta çekme mecrası değil; meslektaşlar, hastane yöneticileri, sağlık gazetecileri ve akademi nezdinde hekimin düşünce liderliğini inşa eden en prestijli platformdur. Düzenli paylaşılan vaka analizleri, kongre notları ve sağlık politikası değerlendirmeleri hekime ulusal medya röportajları ve kurumsal ortaklıklar kazandırır.",
    sections: [
      {
        heading: "LinkedIn’de Güçlü Hekim Markası Oluşturmanın Temelleri",
        subheading: "Hasta Aramayan, Uzmanlık Arayan Kitleye Seslenmek",
        paragraphs: [
          "LinkedIn'de doğrudan 'şu tedaviyi bende olun' gibi reklam vari çağrılar hekimin saygınlığını zedeler. Bunun yerine:",
          "Profil Başlığı: Tescilli uzmanlık, klinik rol ve bilimsel çalışma odakları net yazılmalıdır.",
          "Hakkında Kısmı: Hekimin tıbbi felsefesi, cerrahi vizyonu ve bilimsel ilgi alanları özetlenmelidir.",
          "İçerikler: Klinik kılavuz güncellemeleri, uluslararası kongre sunumları, multidisipliner ekip yaklaşımları ve etik tartışmalar paylaşılmalıdır."
        ]
      }
    ],
    faqs: [
      {
        q: "LinkedIn doktor aramalarına katkı sağlar mı?",
        a: "Evet. LinkedIn profilleri Google'da hekimin ismi arandığında en üst sırada listelenen son derece güçlü otorite sinyalleridir."
      }
    ],
    officialSources: [
      { title: "Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktor PR ve Medya Tanıtımı", url: "/doktor-pr-medya-tanitimi" }
    ]
  },

  // 10. Doktor PR ve Medya Tanıtımı
  {
    id: "DOC-010",
    slug: "doktor-pr-medya-tanitimi",
    url: "/doktor-pr-medya-tanitimi",
    category: "Kanal Stratejileri",
    title: "Doktor PR ve Medya Tanıtımı | Gazete, Dergi ve TV Stratejisi",
    h1: "Doktor PR ve Medya Tanıtımı: Reklam Değil, Editoryal Uzmanlık Görünürlüğü",
    seoTitle: "Doktor PR ve Medya Tanıtımı | Gazete, Dergi ve TV Stratejisi | Overseas Marketing",
    metaDesc: "Doktorlar için PR stratejisi: haber değeri, uzman görüşü, basın dosyası, gazete, dergi, TV ve podcast görünürlüğünü mevzuata uygun yönetin.",
    primaryKeyword: "doktor PR",
    secondaryKeywords: ["doktor medya tanıtımı", "doktor basın danışmanlığı", "hekim televizyon programı", "sağlık haberleri uzman görüşü"],
    searchIntent: "Ticari",
    funnel: "BOFU",
    readTime: "8 dk okuma",
    publishedDate: "18 Eylül 2026",
    author: "Overseas Basın ve Halkla İlişkiler Masası",
    reviewer: "Medya İlişkileri Masası",
    quickAnswer: "Doktor PR çalışması; ücret ödeyerek haber sitelerinde övgü dolu reklam metinleri bastırmak değildir. Gerçek sağlık PR’ı; toplum sağlığını ilgilendiren güncel bir riske, yeni bir araştırmaya veya mevsimsel bir tehlikeye ilişkin hekimin tarafsız uzman görüşünü AA, TRT, NTV gibi saygın ulusal mecralara editoryal değer olarak sunmaktır.",
    sections: [
      {
        heading: "Haber Değeri Taşıyan Sağlık PR Konuları",
        subheading: "Gazetecilerin Dikkatini Çeken ve Kamu Yararı Taşıyan Başlıklar",
        paragraphs: [
          "Medyada yer almak için 'ben harika bir doktorum' demek haber değeri taşımaz. Bunun yerine:",
          "1. Veri ve Araştırma Odaklı: 'Son 5 yılda gençlerde artan kalp rahatsızlıklarına dair bilimsel veriler ve korunma yolları.'",
          "2. Mevsimsel Riskler: 'Sıcak havalarda tansiyon hastalarının dikkat etmesi gereken 5 kritik nokta.'",
          "3. Yanlış Bilgi Düzeltme: 'Sosyal medyada yayılan popüler diyet takviyesinin böbrekler üzerindeki kanıtlanmış zararları.'",
          "4. Teknoloji ve Gelecek: 'Yapay zekâ cerrahide hekime nasıl destek oluyor, sınırları nelerdir?'"
        ]
      }
    ],
    faqs: [
      {
        q: "TV ve radyo programlarına katılırken yönetmelik ne şart koşar?",
        a: "12 Kasım 2025 tarihli yönetmelik uyarınca, radyo ve TV programlarına katılan hekimlerin program öncesinde ilgili taahhütnameyi imzalaması ve canlı yayında ticari yönlendirme yapmaması zorunludur."
      }
    ],
    officialSources: [
      { title: "Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği Madde 5 ve 10", url: "https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" },
      { title: "Doktorlar İçin LinkedIn Pazarlaması", url: "/doktorlar-icin-linkedin-pazarlamasi" }
    ]
  }
];
