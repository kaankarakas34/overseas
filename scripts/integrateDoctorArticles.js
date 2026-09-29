import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../src/data/seoArticlesData.json');
const tsPath = path.resolve(__dirname, '../src/data/seoArticlesData.ts');

const newDoctorArticles = [
  // 1. Doktor Reklam Yasağı 2026
  {
    id: "DOC26-01",
    slug: "doktor-reklam-yasagi-2026",
    url: "/blog/doktor-reklam-yasagi-2026",
    category: "Doktor Reklam Mevzuatı",
    title: "Doktor Reklam Yasağı 2026: Hekimler Neler Yapabilir?",
    h1: "Doktor Reklam Yasağı 2026: Hekimler İnternette Neler Yapabilir?",
    seoTitle: "Doktor Reklam Yasağı 2026: Hekimler Neler Yapabilir? | Overseas Marketing",
    metaDesc: "Doktor reklam yasağının kapsamını, web sitesi, Google ve sosyal medya tanıtım sınırlarını ve yurt dışı sağlık turizmi ayrımını güncel mevzuatla öğrenin.",
    primaryKeyword: "doktor reklam yasağı",
    secondaryKeywords: ["hekim reklam yasağı", "doktorlar reklam verebilir mi", "doktor tanıtım yönetmeliği", "12 kasım 2025 sağlık tanıtım yönetmeliği"],
    searchIntent: "Ana referans rehberi",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Hukuk ve Medikal İçerik Kurulu",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Türkiye'de doktorların dijital ortamda hiç görünemeyeceği düşüncesi de, isteyen hekimin istediği reklamı verebileceği düşüncesi de doğru bir başlangıç noktası değildir. 12 Kasım 2025 tarihli Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik, sağlık hizmetinde örtülü ve açık reklamı yasaklarken, tanıtım ve bilgilendirmeyi belirli sınırlar içinde düzenlemektedir. Hekimler tescilli unvanlarını, çalışma yeri ve saatlerini, bilimsel ve koruyucu sağlık bilgilerini mevzuat sınırları içinde paylaşabilir; ancak talep yaratıcı ve üstünlük iddialı reklamlardan kaçınmalıdır.",
    sections: [
      {
        heading: "Reklam ile bilgilendirme arasındaki fark nedir?",
        subheading: "Mevzuata göre tanıtım, talep yaratma ve üstünlük iddiası ayrımı",
        paragraphs: [
          "Yönetmeliğe göre hekimin uzmanlık alanı, akademik unvanı, hasta kabul ettiği yer ve zaman gibi doğrulanabilir mesleki bilgileri ile sunduğu sağlık alanına ilişkin koruyucu ve geliştirici bilgiler tanıtım ve bilgilendirme kapsamındadır. İçerik bir hekime veya sağlık tesisine talep yaratmak, onu üstün göstermek ya da hastayı belirli bir yere yönlendirmek için tasarlandığında sınır aşılabilir.",
          "Örneğin “Bu işlemin olası riskleri ve hekime sorulacak sorular nelerdir?” başlığıyla kaynaklı, dengeli bir açıklama farklıdır; “En başarılı ameliyatı biz yapıyoruz, hemen randevu alın” iddiası farklıdır. Metindeki bütün unsurlar birlikte değerlendirilir: başlık, görsel, çağrı, ücret, bağlantı ve yayımlandığı mecra. İçeriği “bilgilendirme” diye adlandırmak tek başına yeterli olmaz."
        ],
        table: {
          headers: ["Değerlendirme Kriteri", "Yasak Reklam Faaliyeti", "Yasal Tanıtım ve Bilgilendirme"],
          rows: [
            ["Temel Amaç", "Sağlık hizmetine talep yaratmak, hastayı belirli hekime yönlendirmek", "Hastayı doğru bilgilendirmek, koruyucu sağlık bilinci sağlamak"],
            ["Dil ve Üslup", "'En başarılı cerrah', 'garantili operasyon', 'sıfır risk vaadi'", "Kanıta dayalı, olası riskleri ve sınırları açıklayan tarafsız dil"],
            ["Fiyat ve Kampanya", "İndirim sayaçları, ücretsiz muayene, paket kampanyalar", "Her türlü indirim, kampanya, promosyon ve hediye yasaktır"],
            ["Görsel Kullanımı", "Filtreli, abartılı, etkileşime açık veya sponsorlu", "Açık rızalı, manipülasyonsuz, etkileşime kapalı, sponsorsuz"]
          ]
        }
      },
      {
        heading: "Doktorun web sitesi ve sosyal medya hesabı olabilir mi?",
        subheading: "Dijital varlıkta yasal künye, kaynak denetimi ve rıza şartları",
        paragraphs: [
          "Olabilir; ancak hesapta veya sitede yer alan içerikler yönetmelikteki sınırları taşımalıdır. Hekim kimliği, gerçek uzmanlık ve çalışma bilgileri açık yazılabilir. Sağlık bilgileri konusunda yetkili sağlık meslek mensubunun katkısı ve bilimsel kaynak denetimi önemlidir. İnternet sitesindeki bilgilerin son güncelleme tarihi ve editöre ulaşma bilgisi de görünür olmalıdır.",
          "Sosyal medyada “organik gönderi” etiketi içeriği kendiliğinden uygun hale getirmez. Hasta memnuniyeti paylaşımı, abartılı başarı iddiası, yanıltıcı cihaz üstünlüğü, kampanya veya indirim dili; metin sponsorlu olmasa da sorun doğurabilir. Hasta görseli kullanımı için ayrı görsel ve rıza hükümleri vardır."
        ],
        callout: {
          title: "Editoryal ve Hukuki Kural",
          text: "Başlıktaki 'reklam' kelimesi arama sorgusunu karşılar; metinler hekime yasağı dolanma yöntemi vaat etmez. Hekim içeriği daima bilimsel kanıt ve tıp deontolojisi çerçevesinde kalmalıdır.",
          type: "warning"
        }
      },
      {
        heading: "Google'da görünmek ile Google Ads vermek aynı mı?",
        subheading: "Organik arama motoru kaydı ile ücretli sponsorlu öne çıkarma farkı",
        paragraphs: [
          "Hayır. Arama motorunda ücretsiz bir profil kaydı veya hekimin sitesinin organik sonuçta bulunması ile ücret ödeyerek üstte gösterilmesi farklı faaliyetlerdir. Yönetmelik, sağlık meslek mensuplarının arama motoru ve sosyal platformlara <strong>ücretli sponsorlu ve öne çıkmaya yönelik olmadan</strong> kayıt yaptırabileceğini düzenler. Profilde kullanılan kelimeler ve görünen bilgiler de uygun olmalıdır. Ücretli reklam için yalnız platformun onayı değil, Türkiye'deki kural ve hedef ülke koşulları da dikkate alınır."
        ]
      },
      {
        heading: "Yurt dışındaki hastalar için kural değişir mi?",
        subheading: "Bakanlık yetkili sağlık tesisleri ve aracı kuruluşlar için sınır ötesi tanıtım",
        paragraphs: [
          "Yönetmeliğin uluslararası sağlık turizmi bölümü, <strong>Bakanlıkça yetkilendirilmiş sağlık tesisleri ve aracı kuruluşlar</strong> için özel tanıtım koşulları öngörür. Ayrı yabancı dilde site/hesap, yetki belgesinin gösterilmesi, yurt dışı hedefleme ve diğer yükümlülükler söz konusudur. Bu hüküm, herhangi bir hekimin kişisel hesabından sınırsız sponsorlu tedavi reklamı verebileceği anlamına gelmez. Hekimin bağlı olduğu kuruluşun hukuki statüsü ve kampanyanın kimin adına yayımlandığı belirleyicidir."
        ]
      },
      {
        heading: "Nasıl bir dijital plan kurulur?",
        subheading: "Hekim kimliği, nitelikli sağlık içeriği ve yasal kurum tanıtımı",
        paragraphs: [
          "Önce hekimin unvan, çalışma ve uzmanlık bilgilerinin doğruluğunu kontrol edin. Ardından web sitesindeki hizmet sayfalarını bilgilendirici bir dille hazırlayın; sık hasta sorularını dengeli, güncel ve mesleki incelemeden geçmiş içeriklerle yanıtlayın. Google'daki ücretsiz kurumsal kayıtları tutarlı tutun. Sağlık turizmi düşünülüyorsa yetkili sağlık tesisi veya aracı kuruluş düzeyinde ayrı bir uygunluk çalışması yapın.",
          "<strong>Sonuç:</strong> Reklam yasağı dijital görünürlüğün bittiği anlamına gelmez. Görünürlük, hekim kimliğini doğrulayan bilgiler, nitelikli sağlık içeriği ve kurallara uygun kurum tanıtımı üzerinden planlanmalıdır. Overseas Marketing, hekimin ve kuruluşun mevcut dijital varlığını bu çerçevede değerlendiren bir içerik ve görünürlük planı hazırlayabilir."
        ],
        bulletPoints: [
          "Hekim tescilli uzmanlık ve akademik unvanlarını tüm dijital kanallarda net ve tutarlı tutun.",
          "Tedavi sonuçlarına dair garanti veren veya üstünlük ima eden iddialardan kaçının.",
          "Hasta görseli paylaşımlarında yazılı açık rıza ve etkileşime kapatma şartlarını eksiksiz uygulayın.",
          "Sağlık turizmi tanıtımlarını yetkili sağlık tesisi veya aracı kuruluş çatısı altında organize edin."
        ]
      }
    ],
    faqs: [
      {
        q: "Doktor reklam yasağı neleri kapsar?",
        a: "12 Kasım 2025 tarihli yönetmelik uyarınca sağlık hizmetinde talep yaratıcı, yönlendirici veya yanıltıcı açık ya da örtülü her türlü reklam yasaktır. Ancak hekimler tescilli unvanlarını, çalışma yeri ve saatlerini ve koruyucu sağlık bilgilerini bilgilendirme amacıyla paylaşabilir."
      },
      {
        q: "Doktorlar sosyal medyada hesap açabilir mi?",
        a: "Evet, hekimler adlarına sosyal medya hesabı açabilir. Ancak içeriklerin koruyucu ve geliştirici sağlık bilgileri sınırında kalması, ticari kampanya veya yönlendirici çağrı içermemesi ve hasta görsellerinde yönetmelik şartlarına uyulması zorunludur."
      },
      {
        q: "Yurt dışındaki hastalar için doktor reklam verebilir mi?",
        a: "Yurt dışına yönelik tanıtım hakkı şahsi hekim hesaplarına değil; Sağlık Bakanlığı'ndan Uluslararası Sağlık Turizmi Yetki Belgesi almış sağlık tesisleri ve aracı kuruluşlara ayrı yabancı dilde hesap ve Türkiye dışı hedefleme şartıyla tanınmıştır."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği (md. 5, 7, 8)", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "TTB Tanıtım ve Bilgilendirme Kılavuzu", url: "https://ttb.org.tr/mevzuat_goster.php?Guid=b49dd386-5e58-11f0-8892-211508e979a1" }
    ],
    internalLinks: [
      { title: "Doktorlar Google Ads Verebilir mi?", url: "/blog/doktor-google-ads-verebilir-mi" },
      { title: "Doktorların Sosyal Medya Kuralları", url: "/blog/doktor-sosyal-medya-kurallari" },
      { title: "Doktor Marka Yönetimi", url: "/doktor-marka-yonetimi" },
      { title: "Doktor Reklam Ajansı", url: "/doktor-reklam-ajansi" }
    ]
  },

  // 2. Doktorlar Google Ads Reklamı Verebilir mi?
  {
    id: "DOC26-02",
    slug: "doktor-google-ads-verebilir-mi",
    url: "/blog/doktor-google-ads-verebilir-mi",
    category: "Arama Motoru Reklamcılığı",
    title: "Doktorlar Google Ads Reklamı Verebilir mi?",
    h1: "Doktorlar Google Ads Reklamı Verebilir mi? 2026 Reklam Kuralları",
    seoTitle: "Doktorlar Google Ads Verebilir mi? 2026 Reklam Kuralları | Overseas Marketing",
    metaDesc: "Hekimlerin Google Ads, organik arama ve ücretsiz Google kayıtları arasındaki farkı; sağlık turizmi için özel koşulları öğrenin.",
    primaryKeyword: "doktor Google Ads verebilir mi",
    secondaryKeywords: ["hekim Google reklamı", "doktor reklam yasağı Google", "doktor Google'da nasıl çıkar", "doktor arama ağı reklamı"],
    searchIntent: "Platform sorusu",
    funnel: "MOFU",
    readTime: "7 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Dijital Reklam ve Mevzuat Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Google'ın bir reklamı teknik olarak onaylaması, o reklamın Türkiye'deki sağlık tanıtım kurallarına uygun olduğu anlamına gelmez. Türkiye'de sağlık hizmetlerinde örtülü ve açık reklam yasaktır; hekimler arama motorlarına ücretli ve öne çıkarmaya yönelik olmadan kayıt yaptırabilir. Yurt dışı sağlık turizminde ise yalnızca Bakanlıkça yetkilendirilmiş sağlık tesisleri ve aracı kuruluşlar, hedef ülke politikalarına ve Türk mevzuatına uyarak sponsorlu Google Ads kampanyası yürütebilir.",
    sections: [
      {
        heading: "Türkiye'deki temel kural ve Google onayı ayrımı",
        subheading: "Teknik reklam onayı ile yasal mevzuat uygunluğu aynı şey değildir",
        paragraphs: [
          "“Google Ads hesabı açabiliyorum; o halde doktor olarak reklam verebilir miyim?” sorusunda iki farklı onay birbirine karışıyor. <strong>Google'ın bir reklamı teknik olarak kabul etmesi, o reklamın Türkiye'deki sağlık tanıtım kurallarına uygun olduğunu kanıtlamaz.</strong> Tersi de geçerlidir: Yerel çerçevede planlanan bir kampanya, Google'ın sağlık politikalarından ayrıca geçmek zorundadır.",
          "Sağlık hizmeti için örtülü veya açık reklam yasaktır; belirli koşullarda bilgilendirme yapılabilir. Yönetmelik, hekimlerin arama motorlarında ücretsiz ve öne çıkarma amacı taşımayan kayıt oluşturmasına imkân tanırken, kayıtta görünen bilgilerin de tanıtım ilkelerine uygun olmasını ister. Bu hükmü “doktor Google Ads açabilir” biçiminde okumamak gerekir.",
          "Bir hekimin adının, gerçek uzmanlığının, çalışma yerinin ve kabul saatlerinin organik aramada bulunması ayrı bir konudur. Sponsorlu arama sonucunda “Şehrin en iyi cerrahı”, “garantili sonuç” veya “bu hafta indirim” gibi ifadelerle hasta çekmeye çalışmak ayrı bir konudur. Başlık, reklam metni ve tıklama sonrası sayfa birlikte incelenir."
        ]
      },
      {
        heading: "Google'ın politikası neye bakar?",
        subheading: "Google Healthcare and Medicines kısıtlamaları ve doğrulama süreçleri",
        paragraphs: [
          "Google Ads'in sağlık ve ilaç politikası, reklamın ve açılış sayfasının ilgili yasa ve sektör standartlarına uymasını bekler. Bazı sağlık kategorileri yasaktır; bazıları yalnız belirli ülkelerde ve uygun onaylarla sunulabilir. Bu yüzden “Google sağlık reklamlarına genel izin veriyor” veya “Google bütün doktor reklamlarını yasaklıyor” cümlelerinin ikisi de eksiktir. Ürün, hizmet, reklamveren ve hedef ülke ayrı değerlendirilmelidir."
        ]
      },
      {
        heading: "Sağlık turizmi için bir istisna var mı?",
        subheading: "Yetkili sağlık tesisi ve aracı kuruluşların yurt dışı Google Ads hakları",
        paragraphs: [
          "2025 yönetmeliğinin uluslararası sağlık turizmi maddesi, Bakanlıkça yetkilendirilmiş <strong>sağlık tesisi ve aracı kuruluşlara</strong> yurt dışına yönelik ayrı yabancı dilde site veya sosyal medya hesabı üzerinden belirli şartlarla sponsorlu tanıtım olanağı tanır. Yetki belgesi, hedef ülke, Türkçe dışındaki dil, Türkiye'de yaşayanlara talep oluşturmama ve diğer yükümlülükler kontrol edilmelidir. Bu statü, hekimin şahsi Google Ads hesabına otomatik olarak taşınmaz. Ayrıca Google'ın hedef ülkedeki politika onayı gerekir."
        ]
      },
      {
        heading: "Reklam vermeden Google'da ne yapılabilir?",
        subheading: "Organik SEO, doğru profil optimizasyonu ve bilgilendirici içerik",
        paragraphs: [
          "Hekim ve çalışma yeri bilgilerini doğru ve tutarlı tutun. Yetki ve unvanı belgelenen bir profil oluşturun. Web sitesinde “tedavi garantisi” yerine işlemin kapsamı, olası riskleri ve hekime sorulacak sorular hakkında kaynaklı içerik yayımlayın. Arama sonuçlarındaki başlık ve açıklamaların da metnin içeriğiyle tutarlı olmasına dikkat edin. Organik SEO'nun sonuç sırası garantisi yoktur; fakat ücretli reklamdan farklı bir çalışma alanıdır.",
          "<strong>Pratik karar:</strong> Her kampanya için “reklamveren kim, yetkisi ne, hedef ülke hangisi, hangi hizmet tanıtılıyor, açılış sayfası kime ait?” sorularını yazılı yanıtlayın. Cevaplar netleşmeden bütçe ve anahtar kelime listesine geçmeyin."
        ],
        bulletPoints: [
          "Reklamveren yetki belgesini doğrulayın.",
          "Arama ağı reklam metinlerinde 'en iyi', 'indirim', 'garanti' ifadelerini tamamen kaldırın.",
          "Açılış sayfasının hekime/tesise ait yasal künyeyi içerdiğini teyit edin.",
          "Yurt dışı kampanyalarında Türkiye IP'lerini coğrafi olarak hariç tutun."
        ]
      }
    ],
    faqs: [
      {
        q: "Doktor Türkiye'de Google Ads reklamı verebilir mi?",
        a: "Türkiye'de sağlık hizmetlerinde açık ve örtülü reklam yasaktır. Yönetmelik yalnızca arama motorlarında ücretli öne çıkarma amacı taşımayan ücretsiz kurumsal kayıtlara izin vermektedir."
      },
      {
        q: "Google Ads hesabı onaylanırsa ceza alma riski biter mi?",
        a: "Hayır. Google platformunun teknik onayı Türkiye Cumhuriyeti mevzuatına ve Sağlık Bakanlığı denetimlerine karşı koruma sağlamaz; yerel hukuk kuralları bağlayıcıdır."
      },
      {
        q: "Yurt dışına Google Ads reklamını kimler verebilir?",
        a: "Yalnızca Sağlık Bakanlığı'ndan Uluslararası Sağlık Turizmi Yetki Belgesi almış sağlık tesisleri ve aracı kuruluşlar, hedef ülkenin dilinde ve Türkiye dışlanarak Google Ads verebilir."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 5 ve 8", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "Google Ads Sağlık ve İlaç Politikası", url: "https://support.google.com/adspolicy/answer/176031?hl=tr" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" },
      { title: "Doktorlar Yurt Dışına Reklam Verebilir mi?", url: "/blog/doktor-yurt-disina-reklam-verebilir-mi" },
      { title: "Sağlık Turizmi Performans Pazarlama", url: "/hizmetler/performans-pazarlama" },
      { title: "Reklam Vermeden Doktor Google'da Nasıl Görünür?", url: "/blog/reklam-vermeden-doktor-googleda-nasil-gorunur" }
    ]
  },

  // 3. Doktorlar Instagram'da Reklam Verebilir mi?
  {
    id: "DOC26-03",
    slug: "doktor-instagram-reklami-verebilir-mi",
    url: "/blog/doktor-instagram-reklami-verebilir-mi",
    category: "Sosyal Medya & Meta Reklamları",
    title: "Doktorlar Instagram'da Reklam Verebilir mi?",
    h1: "Doktorlar Instagram'da Reklam Verebilir mi? 2026 Kuralları",
    seoTitle: "Doktorlar Instagram'da Reklam Verebilir mi? 2026 Kuralları | Overseas Marketing",
    metaDesc: "Doktor Instagram hesabı, gönderi paylaşımı, sponsorlu içerik ve yurt dışı sağlık turizmi tanıtımı arasındaki farkları inceleyin.",
    primaryKeyword: "doktor Instagram reklamı",
    secondaryKeywords: ["hekim Instagram reklam yasağı", "doktor sponsorlu gönderi", "doktor Meta reklamı", "doktor Instagram reels kuralları"],
    searchIntent: "Platform sorusu",
    funnel: "MOFU",
    readTime: "7 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Sosyal Medya & Hukuk Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Doktorlar Instagram hesabı açabilir ve bilimsel sınırlar içinde koruyucu sağlık bilgilendirmesi yapabilir; ancak Türkiye'de yurt içi kitleye yönelik gönderi öne çıkarma veya sponsorlu reklam verilmesi yasaktır. Ayrıca Meta'nın sağlık politikaları kişisel sağlık durumunu ima eden reklamları engeller. Yurt dışı sağlık turizmi için ise yalnızca yetki belgeli sağlık tesisleri ve aracı kuruluşlar, yabancı dilde ve Türkiye dışı hedeflemeyle şartlı tanıtım yapabilir.",
    sections: [
      {
        heading: "Organik paylaşım hangi sınırlar içinde değerlendirilir?",
        subheading: "Hesap açmak, içerik üretmek ve bilgilendirme ilkeleri",
        paragraphs: [
          "Instagram'da bir doktor hesabı açmak, bir gönderi yayımlamak ve o gönderiyi ücret ödeyerek öne çıkarmak aynı işlem değildir. Hekimlerin en sık yaşadığı karışıklık burada başlıyor: “Bu yazı tıbben doğru, o zaman reklamını da verebilirim.” İçeriğin bilimsel doğruluğu önemli olsa da sponsorlu dağıtım için tek ölçüt değildir.",
          "Hekim kimliği, tescilli uzmanlık, çalışma yeri ve saatleri gibi doğrulanabilir bilgiler; ayrıca yetkili sağlık meslek mensubunca hazırlanan koruyucu ve geliştirici sağlık bilgileri yönetmelikte tanımlanan bilgilendirme çerçevesine girer. Buna karşılık sonuç garantisi, başka hekimlerle üstünlük karşılaştırması, hastayı belirli hekime yönlendiren bir çağrı, yanıltıcı teknoloji iddiası ve genel kapsamda fiyat/indirim/kampanya anlatımı risk oluşturur.",
          "“Organik” sözcüğünü serbest alan olarak görmeyin. Gönderinin metni, görseli, yorum ve beğeni ayarları, hastanın görüntüsü ve içerikteki bağlantılar birlikte ele alınmalıdır. Görsel içeriğe ilişkin yönetmelik, hasta rızası, gerçek görüntü kullanımı, bazı görsellerde uyarı metni ve etkileşime kapatma gibi ayrıntılı yükümlülükler düzenler."
        ]
      },
      {
        heading: "Gönderiyi öne çıkarmak neden farklı?",
        subheading: "Sponsorlu dağıtım kısıtı ve Meta reklam standartları",
        paragraphs: [
          "Ücretli dağıtım, içeriğin sponsorlu biçimde hedef kitleye gösterilmesidir. Yönetmeliğin genel kuralında hekim ve sağlık tesislerinin ücretli öne çıkarma konusunda sınırları vardır; görsel içeriklerin sponsorlu yayımlanmasına dair ayrıca hüküm bulunur. Meta'nın kendi reklam standartları da devreye girer: reklam, kişinin sağlık durumu gibi kişisel bir özelliğini bildiğini ima edemez. “Saç dökülmen yüzünden utanıyor musun?” gibi bir kurgu, bu nedenle platform açısından da sorunludur."
        ],
        callout: {
          title: "Meta Reklam İlkesi Uyarısı",
          text: "Meta, kullanıcının fiziksel veya zihinsel sağlık durumuna atıfta bulunarak utanç, kaygı veya yetersizlik hissi yaratan kreatifleri otomatik olarak reddeder.",
          type: "warning"
        }
      },
      {
        heading: "Yurt dışındaki hastalara yönelik sayfa açılabilir mi?",
        subheading: "Uluslararası sağlık turizmi için ayrı yabancı dilde hesap şartı",
        paragraphs: [
          "Uluslararası sağlık turizmi için özel düzenleme, Bakanlık yetki belgesine sahip sağlık tesisi veya aracı kuruluşun <strong>yurt dışına yönelik ayrı hesap veya site</strong> kullanması, sağlık turizmi hizmetini açıkça belirtmesi, yetki belgesini yayımlaması, Türkçe dışındaki resmî diller ve yurt dışı hedefleme gibi şartlar koyar. Sosyal mecrada yurt içi hedefleme seçilemez; otomatik hedef kitle tanımlamalarına ilişkin koşullar da uygulanır. Kişisel hekim hesabı ile yetkili kuruluş hesabını birbirine karıştırmamak gerekir."
        ]
      },
      {
        heading: "İçerik ekibi nasıl çalışmalı?",
        subheading: "Yayımdan önce 5 soruluk editoryal denetim",
        paragraphs: [
          "Her gönderiyi yayımlamadan önce beş soru sorun: Bilgiyi hangi yetkili meslek mensubu kontrol etti? Hangi iddia hangi kaynakla doğrulandı? Hasta görseli veya yorumu var mı? Bu içerik hangi hesaptan ve hangi ülkeye gösterilecek? Ücretli gösterim planlanıyor mu? Böylece sadece “güzel kreatif” değil, yayımlanabilir içerik hazırlanır."
        ],
        bulletPoints: [
          "Bilgiyi yetkili hekim kontrol etti mi?",
          "İddia bilimsel kaynakla destekleniyor mu?",
          "Hasta görseli varsa yazılı açık rıza ve etkileşim ayarı yapıldı mı?",
          "Yurt içi kitleye sponsorlu reklam çıkılmadığından emin olundu mu?",
          "Kuruluş ve hesap tipi mevzuata uygun mu?"
        ]
      }
    ],
    faqs: [
      {
        q: "Doktor Instagram Reels videolarını öne çıkarabilir mi?",
        a: "Türkiye'deki kitleye yönelik sağlık hizmeti içeriklerinin sponsorlu olarak öne çıkarılması yönetmelik uyarınca yasaktır. Paylaşımlar organik bilgilendirme niteliğinde kalmalıdır."
      },
      {
        q: "Instagram'da hekim hesabında hasta fotoğrafı paylaşılabilir mi?",
        a: "Yurt içinde cerrahi ve girişimsel fotoğraflar için açık rıza, filtre yasağı, standart çekim koşulu, uyarı metni ve yorum/beğeni etkileşimlerinin kapatılması zorunludur."
      },
      {
        q: "Kişisel hekim hesabı yurt dışına Instagram reklamı açabilir mi?",
        a: "Yurt dışı tanıtım hakkı şahsi hekim hesaplarına değil, Bakanlıkça yetkilendirilmiş sağlık tesisi ve aracı kuruluşlara ayrı yabancı dilde hesap üzerinden tanınmıştır."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 5, 7, 8", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "Meta Reklam Standartları", url: "https://transparency.meta.com/policies/ad-standards/" },
      { title: "Meta Kişisel Özellikler Politikası", url: "https://transparency.meta.com/policies/ad-standards/objectionable-content/privacy-violations-personal-attributes/" }
    ],
    internalLinks: [
      { title: "Doktorların Sosyal Medya Kuralları", url: "/blog/doktor-sosyal-medya-kurallari" },
      { title: "Öncesi–Sonrası Fotoğraf Kuralları", url: "/blog/doktor-oncesi-sonrasi-fotograf" },
      { title: "Doktorlar Yurt Dışına Reklam Verebilir mi?", url: "/blog/doktor-yurt-disina-reklam-verebilir-mi" },
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" }
    ]
  },

  // 4. Reklam Vermeden Doktor Google'da Nasıl Görünür?
  {
    id: "DOC26-04",
    slug: "reklam-vermeden-doktor-googleda-nasil-gorunur",
    url: "/blog/reklam-vermeden-doktor-googleda-nasil-gorunur",
    category: "Medikal SEO & Organik Görünürlük",
    title: "Reklam Vermeden Doktor Google'da Nasıl Görünür?",
    h1: "Reklam Vermeden Doktor Google'da Nasıl Görünür? 2026 Rehberi",
    seoTitle: "Reklam Vermeden Doktor Google'da Nasıl Görünür? | Overseas Marketing",
    metaDesc: "Hekimler için organik arama, doğru mesleki bilgiler, web sitesi ve bilgilendirici içerik üzerinden sürdürülebilir görünürlük planı.",
    primaryKeyword: "reklam vermeden doktor tanıtımı",
    secondaryKeywords: ["doktor Google'da nasıl görünür", "doktor SEO", "hekim web sitesi SEO", "doktor organik arama"],
    searchIntent: "Organik görünürlük",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Medikal SEO Ekibi",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Doktorlar reklam bütçesi harcamadan; tescilli uzmanlık ve akademik unvanlarını doğru göstererek, kullanıcıların tedavi ve semptom sorularına kanıta dayalı bilgilendirici makalelerle yanıt vererek, Google profil kayıtlarını güncel tutarak ve teknik SEO altyapısını güçlendirerek Google arama sonuçlarında organik olarak üst sıralarda yer alabilir.",
    sections: [
      {
        heading: "İlk adım: Hekim kimliğini ve mesleki profili netleştirin",
        subheading: "Farklı mecralarda tutarlı unvan, adres ve kabul bilgileri",
        paragraphs: [
          "Doktor reklam yasağı nedeniyle Google görünürlüğü yalnız ücretli reklamlardan ibaretmiş gibi düşünülmemeli. Bir hekimin adının arama motorunda bulunması, mesleki bilgilerinin doğru gösterilmesi ve sağlık sorularına nitelikli içeriklerle yanıt vermesi ayrı bir organik çalışmadır. Buradaki amaç arama sonucunu “satın almak” değil, doğrulanabilir bilgiyi erişilebilir kılmaktır.",
          "Ad ve soyadı, tescilli uzmanlık alanı, akademik unvan, hasta kabul yeri, çalışma günleri ve kuruma bağlılık farklı sayfalarda birbiriyle çelişmemeli. Doktorun kendi sitesi, çalıştığı kurumun hekim profili ve ücretsiz platform kayıtları tutarlı olmalıdır. Hekimin sahip olmadığı bir uzmanlığı ima etmek veya bir sertifikayı tescilli uzmanlık gibi göstermek görünürlük hedefiyle savunulamaz.",
          "Bu aşamada “her yere kayıt açalım” yaklaşımı yerine, gerçekten yönetilebilen hesapları seçin. Yönetmelik, arama motoru ve sosyal medya kaydının ücretli ve öne çıkmaya yönelik olmadan yapılabileceğini, arama sonuçlarında kullanılan bilgilerin de tanıtım ilkelerine uygun olmasını düzenler."
        ]
      },
      {
        heading: "Web sitesindeki sayfalar neyi anlatmalı?",
        subheading: "Hizmet değil, hastalık ve süreç bilgilendirmesi mimarisi",
        paragraphs: [
          "Hekim profili; gerçek mesleki geçmişi, unvanı, yayınları ve hasta kabul bilgilerini açıklayabilir. Hizmet alanındaki bilgilendirme sayfaları ise “kimler için değerlendirilir, olası yararlar ve riskler nedir, hangi sorular sorulmalı?” gibi dengeli sorulara yanıt vermelidir. İçerik, hastaya kişisel tanı koymamalı veya sonucu garanti etmemelidir.",
          "Her yazıda yazar/mesleki inceleyen, tarih, kaynak ve ilgili kurum bilgisi görünür olmalı. Eski bilgiyi yeni tarih atarak taze göstermeyin; gerçekten güncellendiğinde neyin değiştiğini not edin. Birinci el klinik bilgi kullanılıyorsa hasta mahremiyetini koruyun."
        ]
      },
      {
        heading: "Teknik SEO burada nasıl yardımcı olur?",
        subheading: "Hız, mobil uyumluluk, iç bağlantı kurgusu ve indeksleme",
        paragraphs: [
          "Hızlı ve mobil uyumlu sayfa, mantıklı başlık yapısı, indekslenebilir URL, düzgün iç bağlantılar ve aynı içeriğin birden fazla adreste tekrar etmemesi temel altyapıdır. Her uzmanlık başlığı için yüzlerce birbirinin aynı şehir sayfası üretmek yerine, hekimin gerçekten yetkili olduğu alanlarda kapsamlı ve anlaşılır sayfalar hazırlayın. Google'da kaçıncı sıraya çıkılacağı garanti edilemez; ölçülmesi gereken şey ilgili aramalarda gösterim, tıklama ve doğru sayfanın bulunmasıdır."
        ]
      },
      {
        heading: "ChatGPT ve diğer yapay zekâ aramaları için katkısı",
        subheading: "Generative Engine Optimization (GEO) ve güvenilir kaynak referansı",
        paragraphs: [
          "Tutarlı hekim kimliği, erişilebilir kaynaklar ve iyi açıklanmış kurum ilişkisi, yapay zekâ destekli aramalarda bilgilerin anlaşılmasına da yardımcı olabilir. Bunun belirli bir modelin hekimi önereceği anlamına geldiği söylenemez. Ayrı bir GEO değerlendirmesinde İngilizce ve Almanca gibi hedef dillerde örnek sorgularla kaynak gösterimi ölçülebilir."
        ],
        bulletPoints: [
          "Tescilli uzmanlık ve akademik unvanları tüm dizinlerde eşitleyin.",
          "Tedavi süreçlerini, riskleri ve hazırlık aşamalarını tarafsız dille anlatın.",
          "Sayfalarda yayın tarihi, editör ve bilimsel kaynak referanslarını açık tutun.",
          "Yapılandırılmış veri (Schema.org Physician/MedicalWebPage) işaretlemelerini kurun."
        ]
      }
    ],
    faqs: [
      {
        q: "SEO çalışmaları doktor reklam yasağına girer mi?",
        a: "Hayır. Doğrulanabilir mesleki bilgilerin, koruyucu sağlık rehberlerinin ve hekim künyesinin arama motorlarında indekslenmesi tanıtım ve bilgilendirme kapsamındadır; ticari reklam niteliği taşımaz."
      },
      {
        q: "Bir doktor web sitesinde nelere yer veremez?",
        a: "Fiyat, indirim, promosyon, 'en iyi cerrah' gibi üstünlük iddiaları, kesin tedavi garantisi ve izinsiz hasta verilerine web sitesinde yer verilemez."
      },
      {
        q: "Organik SEO ile Google'da ilk sıraya çıkmak garanti midir?",
        a: "Hiçbir profesyonel ajans arama motorlarında kesin sıra garantisi veremez. Başarı; kullanıcı sorgularına verilen doğru ve kaynaklı yanıtların niteliği ve teknik uyum ile ölçülür."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 5", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "Google Arama Kalite İlkeleri (E-E-A-T)", url: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" },
      { title: "Doktor Marka Yönetimi", url: "/doktor-marka-yonetimi" },
      { title: "GEO Hizmeti", url: "/hizmetler/geo-generative-engine-optimization" },
      { title: "Doktor ChatGPT'de Nasıl Görünür?", url: "/blog/doktor-chatgptde-nasil-gorunur" }
    ]
  },

  // 5. Doktorların Sosyal Medyada Paylaşabileceği İçerikler
  {
    id: "DOC26-05",
    slug: "doktor-sosyal-medya-kurallari",
    url: "/blog/doktor-sosyal-medya-kurallari",
    category: "Sosyal Medya Yönetimi",
    title: "Doktorların Sosyal Medyada Paylaşabileceği ve Paylaşamayacağı İçerikler",
    h1: "Doktorların Sosyal Medya Kuralları: Ne Paylaşılabilir?",
    seoTitle: "Doktorların Sosyal Medya Kuralları: Ne Paylaşılabilir? | Overseas Marketing",
    metaDesc: "Hekim sosyal medya hesabında mesleki bilgi, hasta görseli, yorum, tedavi anlatımı ve sponsorlu içerik için temel sınırları öğrenin.",
    primaryKeyword: "doktor sosyal medya kuralları",
    secondaryKeywords: ["hekim Instagram paylaşımı", "doktor tanıtım bilgilendirme", "doktor içerik örnekleri", "doktor sosyal medya yasağı"],
    searchIntent: "İçerik planlama",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas İçerik ve Mevzuat Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Doktorlar sosyal medyada; tescilli uzmanlıklarını, akademik yayınlarını, çalışma yerini ve genel koruyucu sağlık önerilerini paylaşabilir. Ancak kesin tedavi garantisi, başka hekimlerle üstünlük karşılaştırması, yönlendirici çağrılar, fiyat/indirim duyuruları ve izinsiz hasta hikâyeleri paylaşamazlar.",
    sections: [
      {
        heading: "Mesleki kimlik ve uzmanlık nasıl anlatılır?",
        subheading: "Tescilli unvanlar, çalışma yerleri ve abartısız iletişim",
        paragraphs: [
          "Bir doktorun sosyal medya hesabında sık sık paylaşım yapması tek başına sorun değildir; içeriğin amacı ve sunuluşu önemlidir. 2025 yönetmeliği hekimin tanıtım ve bilgilendirme yapabileceği alanları tanımlar, sağlık hizmeti reklamına sınır koyar ve görseller için ayrıca ayrıntılı kurallar getirir. Bu nedenle içerik takvimi, önce “haftada kaç gönderi?” sorusuyla değil, “hangi bilgi hangi koşulla paylaşılabilir?” sorusuyla kurulmalı.",
          "Gerçek uzmanlık alanı, akademik unvan, hasta kabul yeri ve zamanı, doğrulanabilir eğitim ve bilimsel yayın bilgileri sade biçimde açıklanabilir. Bir cihazı veya sertifikayı hekimden üstün sonuç garantisi çıkaracak biçimde sunmayın. “Türkiye'nin bir numarası”, “tek seansta kesin çözüm” gibi üstünlük ve sonuç iddiaları yerine hangi alanlarda çalışıldığını açıklayın."
        ]
      },
      {
        heading: "Sağlık bilgisini kim hazırlamalı?",
        subheading: "Tıbbi yorum yetkisi ve ajans-hekim iş birliği",
        paragraphs: [
          "Bir hastalığın belirtileri, bir işlemin olası riskleri veya korunma yolları hakkında içerik hazırlanabilir. Ancak sağlık hizmetiyle ilgili bilgilendirme yetkili sağlık meslek mensubunca yapılmalı; ajansın editörü tıbbi yorumu hekimin yerine üretmemelidir. Kısa video formatı da bu sorumluluğu değiştirmez. Bir dakikalık açıklamada önemli riskleri çıkarıp yalnız cazip sonucu bırakmak, metin teknik olarak doğru olsa bile yanıltıcı izlenim yaratabilir."
        ]
      },
      {
        heading: "Hasta hikâyesi ve teşekkür paylaşımı serbest mi?",
        subheading: "Memnuniyet ifadeleri ve hasta mahremiyeti sınırları",
        paragraphs: [
          "Genel tanıtım çerçevesinde hasta veya yakınının teşekkür ve memnuniyet ifadesini reklam mahiyetinde kullanmak uygun değildir. Hastanın görüntüsünün kullanılması ise ayrıca açık rıza ve görsel kurallarına bağlıdır; rıza belgesi bütün reklam sorunlarını otomatik çözmez. Yurt dışı sağlık turizmine ilişkin özel hüküm, <strong>yetkili sağlık tesisinin ayrı yabancı dildeki hesabı</strong> için şartlı bir düzenleme içerir. Hekimin kişisel hesabı ile tesis hesabının ayrımı korunmalıdır."
        ]
      },
      {
        heading: "Örnek içerik takvimi ve yayımdan önce kısa kontrol",
        subheading: "Aylık 4 temel içerik sütunu ve editoryal denetim",
        paragraphs: [
          "Bir ayda dört tür içerik dengelenebilir: doğrulanmış hekim/çalışma bilgisi güncellemesi; yaygın hasta sorusunun kaynaklı yanıtı; işlem öncesi hekime sorulabilecek sorular; ilgili alandaki bilimsel gelişmenin sınırlarıyla açıklanması. Bunlar birer içerik fikridir, otomatik yayımlanabilir şablon değildir. Her gönderi için metin, görsel, yorum ayarı, bağlantı ve olası sponsorlu kullanım ayrı kontrolden geçmelidir.",
          "<strong>Yayımdan önce kısa kontrol:</strong> Uzmanlık doğru mu? Sonuç iddiası var mı? Hasta verisi var mı? Görselin rızası ve gerekli bilgileri mevcut mu? Gönderi belirli hekime yönlendirme amacı taşıyor mu? Hedef ülke ve hesap tipi doğru mu?"
        ],
        table: {
          headers: ["İçerik Türü", "Paylaşılabilir Durum", "Yasak Olan Kurgu"],
          rows: [
            ["Hastalık & Belirti", "Semptomların bilimsel açıklaması ve risk faktörleri", "'Bu belirti varsa hemen bana gelin' çağrısı"],
            ["Cerrahi / İşlem", "Operasyonun aşamaları, olası riskler, iyileşme süreci", "'Ağrısız, sıfır riskli, 1 günde ayağa kaldıran ameliyat'"],
            ["Teknoloji / Cihaz", "Kullanılan cihazın teknik özellikleri ve tıp literatürü", "'Şehrin tek mucize cihazı ile gençleşin'"],
            ["Hasta İletişimi", "Randevu kanalları ve hasta kabul saatleri", "İndirimli ilk seans, çekiliş, bedava muayene duyurusu"]
          ]
        }
      }
    ],
    faqs: [
      {
        q: "Doktor sosyal medyada ameliyathaneden canlı yayın yapabilir mi?",
        a: "Hayır. Yönetmelik, ameliyat veya tıbbi girişim sırasında hastanın görüntüsünün genel ahlaka ve hasta haklarına aykırı biçimde yayımlanmasını ve gösteri haline getirilmesini kesinlikle yasaklar."
      },
      {
        q: "Hasta doktoruna yazdığı teşekkür mesajını paylaşabilir mi?",
        a: "Hastanın kendi profilinde paylaşması kişisel hakkıdır; ancak hekimin bu teşekkür mesajını alıp kendi profilinde reklam ve yönlendirme amacıyla yayımlaması tanıtım kurallarına aykırıdır."
      },
      {
        q: "Sosyal medyada hekim unvanları nasıl kullanılmalıdır?",
        a: "Yalnızca Sağlık Bakanlığı ve YÖK tarafından tescil edilmiş resmi uzmanlık ve akademik unvanlar kullanılabilir; kurs veya sertifikalardan türetilmiş unvanlar kullanılamaz."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 5, 7 ve 8", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" }
    ],
    internalLinks: [
      { title: "Doktorlar Instagram'da Reklam Verebilir mi?", url: "/blog/doktor-instagram-reklami-verebilir-mi" },
      { title: "Doktor Hasta Yorumlarını Paylaşabilir mi?", url: "/blog/doktor-hasta-yorumu-paylasabilir-mi" },
      { title: "Öncesi–Sonrası Fotoğraf Kuralları", url: "/blog/doktor-oncesi-sonrasi-fotograf" },
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" }
    ]
  },

  // 6. Öncesi–Sonrası Fotoğraf Kuralları
  {
    id: "DOC26-06",
    slug: "doktor-oncesi-sonrasi-fotograf",
    url: "/blog/doktor-oncesi-sonrasi-fotograf",
    category: "Görsel Mevzuatı & KVKK",
    title: "Doktor Öncesi–Sonrası Fotoğraf Paylaşabilir mi?",
    h1: "Doktor Öncesi–Sonrası Fotoğraf Paylaşabilir mi? 2026 Görsel Kuralları",
    seoTitle: "Doktor Öncesi–Sonrası Fotoğraf Paylaşabilir mi? 2026 | Overseas Marketing",
    metaDesc: "Doktorların işlem öncesi ve sonrası hasta görsellerinde rıza, çekim koşulları, tarihler, etkileşim ve sponsorlu kullanım kurallarını öğrenin.",
    primaryKeyword: "doktor önce sonra fotoğrafı",
    secondaryKeywords: ["doktor önce sonra fotoğrafı yasak mı", "hekim öncesi sonrası paylaşımı", "estetik doktoru görsel kuralları", "before after hasta rızası"],
    searchIntent: "Görsel politika sorusu",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas KVKK & Medikal Görsel Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Öncesi–sonrası fotoğraflarının paylaşımı katı kurallara tabidir. Hastadan özel yazılı açık rıza alınmalı, fotoğraflar aynı ortam/açı/ışıkta çekilmeli, filtre veya dijital rötuş kullanılmamalı, işlem ve çekim tarihleri belirtilmeli, yorum ve beğeni etkileşimleri kapatılmalı ve sponsorlu olarak yayınlanmamalıdır. Uluslararası sağlık turizminde ise yetkili sağlık tesisleri yabancı dildeki hesaplarında rızalı görselleri belirli şartlarla sunabilir.",
    sections: [
      {
        heading: "Hastanın rızası neyi kapsamalı?",
        subheading: "Görsel içerik onam formu, haklar ve rızayı geri çekme",
        paragraphs: [
          "Öncesi–sonrası fotoğrafları, estetik cerrahi, dermatoloji, diş hekimliği ve saç ekimi alanlarında çok aranıyor. Fakat hasta görüntüsünü paylaşma izni ile o görüntüyü dilediğiniz biçimde kullanma hakkı aynı şey değildir. 2025 yönetmeliği görsel içerikte açık rızadan çekim koşullarına, tarihlerden etkileşim ayarlarına kadar ayrı şartlar getirir. Üstelik genel tanıtım kuralları ile uluslararası sağlık turizmine yönelik özel hükümler birlikte değerlendirilmelidir.",
          "Hastaya ait görsel için hastanın; küçük veya kısıtlıysa ilgili veli ya da vasinin açık rızası gerekir. Yönetmelik bu rızanın kaydedilmesi için görsel içerik onam formunu düzenler. Hasta, paylaşılacak görseli önceden görebilmeli ve paylaşım iznini geri çekebilmelidir. İzin vermeyen hastanın tedavisi veya ücretlendirmesi bundan etkilenemez; izin karşılığında ödeme, indirim veya hediye de verilemez.",
          "Bu kurallar, görsel arşivini yalnız “çekim izni alındı” dosyası olarak tutmanın neden yetersiz olduğunu gösterir. Hangi görselin, hangi mecrada, hangi amaçla, hangi tarihte paylaşılabileceği takip edilmelidir. Hasta iznini geri çektiğinde içeriğin yayımlandığı yerler bulunup işlem yapılabilmelidir."
        ]
      },
      {
        heading: "Fotoğraflar nasıl hazırlanmalı?",
        subheading: "Standart çekim koşulu, manipülasyon yasağı ve etkileşime kapatma",
        paragraphs: [
          "Yönetmelik, görüntünün yanıltıcı biçimde düzenlenmemesini ve öncesi–sonrası görsellerinin aynı ortam ve teknik koşullarda çekilmesini ister. İşlemin ve görüntü çekiminin tarihleri belirtilmelidir. Makyaj, ışık, açı veya dijital düzeltme ile gerçekte olmayan bir fark yaratmak hem hastayı yanıltır hem de karşılaştırmayı anlamsızlaştırır. Fotoğraftaki kişinin gerçek hasta olup olmadığı ve görselin kaynağı açıklanmalıdır.",
          "Ameliyat veya tıbbi girişim sırasında hastanın görüntüsünün paylaşılması, mahrem bölgenin genel ahlaka aykırı biçimde sunulması ve işlemle ilgisiz görüntülerin eklenmesi konusunda da açık sınırlar vardır. Görsel gönderilerde yorum, beğeni ve yeniden paylaşım ayarlarına ilişkin hüküm dikkate alınmalıdır. Yurt içi cerrahi veya girişimsel görselinde yönetmelikte öngörülen sonuç değişkenliği uyarısı da ayrıca değerlendirilir."
        ],
        callout: {
          title: "Zorunlu Uyarı Metni",
          text: "Cerrahi veya girişimsel görsellerde 'Tedavi sonuçları kişiden kişiye değişkenlik gösterebilir' uyarısının açıkça yer alması ve gönderinin yoruma kapatılması mevzuat gereğidir.",
          type: "info"
        }
      },
      {
        heading: "Rıza varsa gönderiyi sponsorlu yapabilir miyiz?",
        subheading: "Sponsorlu yayım yasağı ve sağlık turizmi istisnasının sınırları",
        paragraphs: [
          "Rıza, sponsorlu yayıma otomatik izin değildir. Yönetmeliğin genel görsel hükmü sponsorlu veya ücretli yayına sınır koyar. Uluslararası sağlık turizmine ilişkin ayrı düzenleme ise yetki belgeli <strong>sağlık tesislerinin</strong> yurt dışına yönelik ayrı site veya sosyal medya hesaplarında, hedefleme ve diğer koşulları karşılayarak görsel sponsorlu tanıtımına dair özel hükümler içerir. Kampanya kimin hesabından açılacak, tesise ait yetki belgesi ve hastanın rızası nasıl belgelenecek, hedef ülkenin platform kuralları ne diye tek tek bakılmalıdır.",
          "<strong>Sonuç:</strong> Öncesi–sonrası içerik, yalnızca iki fotoğrafı yan yana koyma işi değildir. Onam, çekim standardı, yayın kaydı, metin, hesap sahibi ve dağıtım yöntemi birlikte planlanmalıdır. Overseas Marketing bu tür bir görsel içerik çalışmasında hekim/tesis onayı ve yayın kontrol listesiyle ilerlemelidir."
        ],
        bulletPoints: [
          "Fotoğraf çekim izni için yazılı Görsel İçerik Onam Formu düzenleyin.",
          "Öncesi ve sonrası karelerde ışık, açı ve mesafeyi birebir eşitleyin; Photoshop kullanmayın.",
          "İşlem tarihini ve fotoğraf çekim tarihini net olarak yazın.",
          "Paylaşımın altındaki yorum ve beğeni özelliklerini kapatın.",
          "Türkiye içindeki kullanıcılara sponsorlu reklam olarak çıkmayın."
        ]
      }
    ],
    faqs: [
      {
        q: "Önce-sonra fotoğrafında hastanın yüzünü buzlamak yeterli mi?",
        a: "Yalnızca yüzü gizlemek yeterli değildir; hastadan özel yazılı açık rıza alınması, çekim standartlarına uyulması ve etkileşimin kapatılması zorunludur."
      },
      {
        q: "Fotoğraf izni veren hastaya indirim yapılabilir mi?",
        a: "Hayır. Yönetmelik uyarınca görsel paylaşım izni karşılığında hastaya ücret indirimi, hediye veya maddi menfaat sağlanması kesinlikle yasaktır."
      },
      {
        q: "Hasta daha sonra fotoğrafının silinmesini isterse ne yapılır?",
        a: "Hasta rızasını dilediği an geri çekebilir. Bildirim yapıldığında hekim ve ajans ilgili görseli web sitesinden ve sosyal medya hesaplarından derhal silmekle yükümlüdür."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 7 ve 8", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "KVKK Sağlık Verileri Rehberi", url: "https://www.kvkk.gov.tr" }
    ],
    internalLinks: [
      { title: "Doktorların Sosyal Medya Kuralları", url: "/blog/doktor-sosyal-medya-kurallari" },
      { title: "Doktor Hasta Yorumlarını Paylaşabilir mi?", url: "/blog/doktor-hasta-yorumu-paylasabilir-mi" },
      { title: "Doktorlar Yurt Dışına Reklam Verebilir mi?", url: "/blog/doktor-yurt-disina-reklam-verebilir-mi" },
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" }
    ]
  },

  // 7. Doktor Hasta Yorumlarını Paylaşabilir mi?
  {
    id: "DOC26-07",
    slug: "doktor-hasta-yorumu-paylasabilir-mi",
    url: "/blog/doktor-hasta-yorumu-paylasabilir-mi",
    category: "Hasta Yorumları & İtibar",
    title: "Doktor Hasta Yorumlarını Paylaşabilir mi?",
    h1: "Doktor Hasta Yorumlarını Paylaşabilir mi? 2026 Kuralları",
    seoTitle: "Doktor Hasta Yorumlarını Paylaşabilir mi? 2026 Kuralları | Overseas Marketing",
    metaDesc: "Hekimlerin hasta teşekkürlerini, yorumlarını ve videolarını paylaşmasında genel tanıtım kuralı ile yurt dışı sağlık turizmi ayrımını öğrenin.",
    primaryKeyword: "doktor hasta yorumu paylaşımı",
    secondaryKeywords: ["doktor hasta yorumları paylaşabilir mi", "doktor teşekkür paylaşımı", "hekim hasta videosu", "hasta referansı sağlık turizmi"],
    searchIntent: "Yorum ve rıza sorusu",
    funnel: "MOFU",
    readTime: "7 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Hasta İletişimi Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Türkiye'deki genel tanıtım kurallarına göre hasta ve yakınlarının memnuniyet, teşekkür ve övgü ifadelerinin hekim tarafından reklam ve talep yaratma amacıyla paylaşılması yasaktır. Hasta izin vermiş veya ekran görüntüsü alınmış olsa dahi bu kural geçerlidir. Yurt dışı sağlık turizminde ise yetki belgeli sağlık tesisleri, açık rızası alınmış hastaların deneyimlerini ayrı yabancı dildeki mecralarında şartlı olarak paylaşabilir.",
    sections: [
      {
        heading: "Genel tanıtım kuralı ne diyor?",
        subheading: "Teşekkür mesajları, ekran görüntüleri ve üçüncü taraf paylaşımları",
        paragraphs: [
          "Bir hastanın doktora teşekkür etmesi olağandır. Ancak teşekkür mesajının bir klinik hesabında, doktorun Instagram sayfasında veya ücretli tanıtımda kullanılması başka bir faaliyettir. “Hasta zaten kendi isteğiyle yazdı” veya “paylaşıma izin verdi” cümleleri, reklam ve bilgilendirme kurallarını tek başına karşılamaz.",
          "2025 yönetmeliği, hasta veya yakınının sağlık hizmetine yönelik teşekkür ve memnuniyet ifadelerinin reklam mahiyetinde paylaşılmasına sınır koyar. Yasağı aşmak için yorumu ekran görüntüsü yapmak, hikâyede yeniden paylaşmak veya bir influencer aracılığıyla yayımlamak güvenli bir yöntem değildir. İçeriğin ilk olarak başka bir hesapta yayımlanmış olması da sağlık tesisi veya hekimin sorumluluğunu kendiliğinden ortadan kaldırmaz.",
          "Örneğin “Bu doktor hayatımı kurtardı, herkes ona gitsin” cümlesi bir tedavi bilgisi sunmaktan çok belirli bir hekime yönlendirme işlevi taşır. Bir yorumun gerçek olması, reklam mahiyetini yok etmez. Hastanın kimliği, tıbbi öyküsü ve görseli açığa çıkıyorsa ayrıca mahremiyet ve veri koruma yükümlülükleri doğar."
        ]
      },
      {
        heading: "Yurt dışı sağlık turizmi için ayrı düzenleme var mı?",
        subheading: "Uluslararası hasta deneyimi ve aracı kuruluş sınırları",
        paragraphs: [
          "Var. Yönetmeliğin uluslararası sağlık turizmi maddesi, yetki belgeli sağlık tesisinin yurt dışına yönelik oluşturduğu ayrı site veya sosyal medya hesabında, hastanın açık rızası belgelenmiş ve hakları gözetilmişse hasta hikâyesi, yorum veya teşekkür ifadesine yer verilmesine ilişkin özel düzenleme içerir. Bu hükmün hesabın sahibine, hedef kitleye ve içeriğin dağıtımına bağlı koşulları vardır. Bir doktorun kişisel hesabı veya Türkiye'ye yönelik paylaşımı aynı kapsamdaymış gibi sunulmamalıdır.",
          "Aracı kuruluş açısından da kendi faaliyet alanı ve sağlık tesisi izlenimi yaratmama şartları ayrıca incelenmelidir. Hastanın “X hastanesinde tedavi gördüm” anlatısını hangi kuruluşun, hangi sayfada, hangi amaçla kullandığı sonucu değiştirebilir."
        ]
      },
      {
        heading: "Yorumları hiç kullanmadan güven nasıl kurulur?",
        subheading: "Doğrulanabilir mesleki geçmiş, süreç şeffaflığı ve bilimsel otorite",
        paragraphs: [
          "Hekimin doğrulanabilir eğitimi ve tescilli uzmanlığı, kurumun yetki ve ruhsat bilgileri, açıklanmış hasta iletişim süreci, güncel sağlık bilgileri ve gerçek ekip tanıtımı daha sağlam bir temel oluşturur. “Yüzlerce mutlu hasta” gibi ispatlanmamış sayıların yerine süreç ve yetki şeffaflığı sağlayın. Yurt dışı hasta içeriğinde gerçek hastaya ait hikâye kullanılacaksa önce rıza, mahremiyet, yayın mecrası ve ülke hedeflemesi doğrulansın.",
          "<strong>Sonuç:</strong> Hasta yorumu aynı anda bir güven kanıtı, kişisel sağlık verisi ve reklam mesajı olabilir. Hekim hesabına gelen yorumu pazarlama varlığına çevirmeden önce hangi hukuki çerçevenin geçerli olduğunu belirlemek gerekir."
        ],
        bulletPoints: [
          "WhatsApp veya DM teşekkür ekran görüntülerini hekim profilinde paylaşmayın.",
          "Üçüncü taraf hesaplarda yayınlanan hasta övgülerini hekim hesabından repost yapmayın.",
          "Güven inşasını hasta yorumu yerine hekimin bilimsel yayınları ve süreç şeffaflığıyla kurun.",
          "Yurt dışı hasta videolarında uluslararası sağlık turizmi yetki belgesi ve açık rıza şartlarını sağlayın."
        ]
      }
    ],
    faqs: [
      {
        q: "Google Haritalar'daki hasta yorumlarını doktor sitesine ekleyebilir mi?",
        a: "Google Business profilindeki yorumlar platformun kendi alanında kalmalıdır; hekimin bunları web sitesine veya sosyal medyasına 'referans/övgü' olarak taşıması reklam yasağı kapsamına girer."
      },
      {
        q: "Hasta kendi isteğiyle teşekkür videosu çekerse paylaşılabilir mi?",
        a: "Yurt içi hastalara yönelik teşekkür ve övgü videolarının hekim veya klinik tarafından yayınlanması mevzuata aykırıdır; yalnızca yetkili sağlık tesislerinin yurt dışı sağlık turizmi hesaplarında özel rıza ile mümkündür."
      },
      {
        q: "Yorum yasağını ihlal etmenin yaptırımı nedir?",
        a: "İl Sağlık Müdürlükleri ve Ticaret Bakanlığı Reklam Kurulu tarafından idari para cezası ve içerik durdurma yaptırımları uygulanabilmektedir."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 5, 7 ve 8", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" },
      { title: "Öncesi–Sonrası Fotoğraf Kuralları", url: "/blog/doktor-oncesi-sonrasi-fotograf" },
      { title: "Doktorlar Yurt Dışına Reklam Verebilir mi?", url: "/blog/doktor-yurt-disina-reklam-verebilir-mi" },
      { title: "Doktorların Sosyal Medya Kuralları", url: "/blog/doktor-sosyal-medya-kurallari" }
    ]
  },

  // 8. Doktorlar Yurt Dışına Reklam Verebilir mi?
  {
    id: "DOC26-08",
    slug: "doktor-yurt-disina-reklam-verebilir-mi",
    url: "/blog/doktor-yurt-disina-reklam-verebilir-mi",
    category: "Sağlık Turizmi & Mevzuat",
    title: "Doktorlar Yurt Dışına Reklam Verebilir mi?",
    h1: "Doktorlar Yurt Dışına Reklam Verebilir mi? 2026 Sağlık Turizmi Kuralları",
    seoTitle: "Doktorlar Yurt Dışına Reklam Verebilir mi? 2026 Sağlık Turizmi Kuralları | Overseas Marketing",
    metaDesc: "Hekimlerin kişisel tanıtımı ile yetkili sağlık tesisi ve aracı kuruluşların yurt dışına yönelik sponsorlu tanıtım şartlarını karşılaştırın.",
    primaryKeyword: "doktor yurt dışına reklam",
    secondaryKeywords: ["doktor yurt dışına reklam verebilir mi", "hekim sağlık turizmi reklamı", "doktor İngiltere reklamı", "muayenehane sağlık turizmi reklamı"],
    searchIntent: "Hekim/tesis ayrımı",
    funnel: "BOFU",
    readTime: "9 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Sağlık Turizmi Mevzuat Masası",
    reviewer: "Hukuk ve Sağlık İletişimi Kurulu",
    quickAnswer: "Yurt dışına hedefleme yapmak tek başına reklam serbestliği sağlamaz. 12 Kasım 2025 yönetmeliğinin 8. maddesi ve 26 Nisan 2025 Uluslararası Sağlık Turizmi Yönetmeliği uyarınca; sponsorlu yurt dışı tanıtım hakkı yalnızca Bakanlıkça yetkilendirilmiş sağlık tesislerine ve yetkili aracı kuruluşlara tanınmıştır. Bireysel muayenehane hekiminin şahsi hesabından kontrolsüz tedavi reklamı çıkması hukuken geçersizdir.",
    sections: [
      {
        heading: "Yönetmeliğin özel hükmü kimlere yönelik?",
        subheading: "Yetkili sağlık tesisleri ve aracı kuruluşların tanıtım statüsü",
        paragraphs: [
          "“Reklamı Türkiye'ye göstermeyeceğiz; yalnız İngiltere'yi hedefleyeceğiz” cümlesi sağlık turizmi kampanyası için yeterli bir izin değildir. Türkiye'deki tanıtım kuralları, <strong>reklamı kimin yayımladığına</strong> ve o kuruluşun uluslararası sağlık turizmi yetkisine de bakar. Hekim, sağlık tesisi ve aracı kuruluş aynı tüzel/hukuki rolü taşımaz.",
          "12 Kasım 2025 yönetmeliğinin uluslararası sağlık turizmi maddesi, 26 Nisan 2025 tarihli sağlık turizmi düzenlemesi uyarınca Bakanlıkça yetki belgesi verilmiş <strong>sağlık tesisleri ve aracı kuruluşların</strong> tanıtım faaliyetlerini ele alır. Bu kuruluşlar için yurt dışına yönelik ayrı site veya sosyal hesap, sağlık turizmi hizmetinin açıkça belirtilmesi, yetki belgesinin yayımlanması ve Türkçe dışındaki resmî dillerde içerik gibi şartlar tanımlanır.",
          "Sosyal medyada yurt içi hedef kitle seçilemez ve otomatik hedef kitle tanımlamalarına ilişkin kısıt uygulanır. Sağlık tesisi için HealthTürkiye logosu ve kurum adı/URL ile ruhsat bilgisi uyumu gibi ek kurallar vardır. Aracı kuruluş yalnız kendi aracılık hizmeti çerçevesinde tanıtım yapmalı ve sağlık tesisi izlenimi vermemelidir."
        ]
      },
      {
        heading: "Doktorun şahsi hesabı bu hakka sahip mi?",
        subheading: "Bağımsız muayenehane, kurum hekimi ve aracı kuruluş ayrımı",
        paragraphs: [
          "Hekimin yabancı dilde bir kişisel profil açması, yetki belgeli sağlık tesisi statüsünü otomatik olarak kazandırmaz. Kampanyanın reklamvereni, ödeyeni, yönlendirdiği site ve sunduğu hizmetin sahibi net olmalıdır. Hekim bir yetkili tesiste çalışıyor olabilir; fakat bu, kişisel hesabından doğrudan her tedavi reklamını yayımlayabileceği şeklinde yorumlanamaz. Özellikle bağımsız muayenehane, tesis bünyesindeki hekim ve aracı kuruluş adına görünen hekim arasında ayrıca inceleme gerekir."
        ]
      },
      {
        heading: "Hedef ülkedeki platform politikası neden önemlidir?",
        subheading: "Google, Meta ve OpenAI Ads sağlık kısıtlamaları",
        paragraphs: [
          "Türk mevzuatının özel koşullarını sağlamak yalnızca ilk kapıdır. Google ve Meta reklamın hedef ülkesini, sağlık kategorisini, kullanılan görüntüyü, iddiayı ve açılış sayfasını kendi politikalarına göre inceler. Bir ülkede yayımlanabilen format diğerinde kısıtlanabilir. ChatGPT Ads ise başka bir platformdur; OpenAI'ın güncel tablosunda tıbbi işlemler tüm ülkelerde izin dışı görünmektedir. Google/Meta için hazırlanmış kampanyayı oraya kopyalayamazsınız."
        ]
      },
      {
        heading: "Kampanya öncesi dosyada ne olmalı?",
        subheading: "Yasal denetim klasörü ve kampanya kontrol bileşenleri",
        paragraphs: [
          "Kuruluşun yetki belgesi ve ruhsat bilgisi; reklam hesabının ve domainin gerçek sahibi; hedef ülke ve dil; yurt dışına özel sayfa; görsel ve hasta rızaları; hekim unvanları; platform politika kontrolü; kampanya yayına alınmadan sorumlu kişinin onayı. Böyle bir dosya, yalnız reklam reddini azaltmak için değil, kampanya gerekçesini sonradan açıklayabilmek için de gereklidir.",
          "<strong>Sonuç:</strong> Yurt dışı hedefleme bir pazarlama seçeneğidir; tek başına bir hukuki statü değildir. Doğru soru “doktor reklam verebilir mi?” kadar “hangi yetkili kuruluş, hangi hizmeti, hangi hesapla ve hangi ülkeye tanıtıyor?” sorusudur."
        ],
        bulletPoints: [
          "Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi doğrulanmalıdır.",
          "Yurt dışına özel ayrı web sitesi veya yabancı dilde sosyal medya hesabı açılmalıdır.",
          "Açılış sayfasında HealthTürkiye logosu ve Bakanlık ruhsat numaraları bulunmalıdır.",
          "Türkiye IP adresleri reklam panellerinden coğrafi olarak tamamen hariç tutulmalıdır.",
          "Reklamveren faturası ve hesap sahipliği yetkili tüzel kişiliğe ait olmalıdır."
        ]
      }
    ],
    faqs: [
      {
        q: "Muayenehanesi olan bir doktor yurt dışına reklam verebilir mi?",
        a: "Bağımsız muayenehaneler tek başlarına sağlık turizmi yetki belgesi alamadıklarından, doğrudan kendi adlarına yurt dışına sponsorlu tedavi reklamı çıkamazlar; yetkili bir sağlık tesisi veya aracı kuruluş protokolü gerekir."
      },
      {
        q: "Yurt dışı reklamlarında Türkçe kullanılabilir mi?",
        a: "Hayır. Yönetmelik uyarınca yurt dışı tanıtımlar hedef ülkenin resmî dilinde veya İngilizce hazırlanmalıdır; Türkiye'de yaşayanlara talep oluşturacak Türkçe reklamlar yasaktır."
      },
      {
        q: "HealthTürkiye logosu kullanmak zorunlu mu?",
        a: "Evet. 12 Kasım 2025 yönetmeliğinin 8. maddesi uyarınca yetkili sağlık tesislerinin yurt dışı web sitelerinde ve açılış sayfalarında HealthTürkiye logosuna yer verilmesi zorunludur."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği, md. 8", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" },
      { title: "26 Nisan 2025 Uluslararası Sağlık Turizmi Yönetmeliği", url: "https://resmigazete.gov.tr/eskiler/2025/04/20250426-2.htm" },
      { title: "OpenAI Sağlık Reklam Uygunluğu", url: "https://help.openai.com/en/articles/20001534-troubleshooting-common-onboarding-and-policy-issues" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" },
      { title: "Doktorlar Google Ads Verebilir mi?", url: "/blog/doktor-google-ads-verebilir-mi" },
      { title: "Sağlık Turizmi Performans Pazarlama", url: "/hizmetler/performans-pazarlama" },
      { title: "Sağlık Turizmi Reklam Mevzuatı 2026", url: "/blog/saglik-turizmi-reklam-mevzuati-2026" }
    ]
  },

  // 9. Reklam Yasağı İçinde Doktor Kişisel Markası
  {
    id: "DOC26-09",
    slug: "doktor-kisisel-marka-reklam-yasagi",
    url: "/blog/doktor-kisisel-marka-reklam-yasagi",
    category: "Doktor Marka Yönetimi",
    title: "Reklam Yasağı İçinde Doktor Kişisel Markası Nasıl Kurulur?",
    h1: "Doktor Kişisel Markası: Reklam Yasağı İçinde Görünürlük",
    seoTitle: "Doktor Kişisel Markası: Reklam Yasağı İçinde Görünürlük | Overseas Marketing",
    metaDesc: "Hekimin mesleki kimliği, web sitesi, bilimsel içerik, dijital itibar ve uluslararası görünürlüğü reklam iddiası kurmadan nasıl planlanır?",
    primaryKeyword: "doktor marka yönetimi",
    secondaryKeywords: ["doktor kişisel marka", "doktor dijital itibar", "hekim SEO ajansı", "doktor itibar yönetimi"],
    searchIntent: "Hizmet talebi",
    funnel: "BOFU",
    readTime: "8 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas Doktor Marka Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "Doktor kişisel marka yönetimi; yasak reklamların yerine alternatif aramak değil, tescilli uzmanlık, doğrulanabilir akademik geçmiş, bilimsel içerik üretimi ve kurumsal ilişkilerin şeffaf biçimde dijital ortama aktarılmasıdır. Satın alınmış övgüler veya garanti vaatleri yerine; hastaların sorularını yanıtlayan kaliteli içerik mimarisi ve teknik SEO ile kalıcı itibar inşa edilir.",
    sections: [
      {
        heading: "Başlangıç noktası: Gerçek mesleki profil ve E-E-A-T",
        subheading: "Tescilli uzmanlık, akademik yayınlar ve doğrulanabilir bilgi",
        paragraphs: [
          "Bir doktorun dijital dünyada tanınması yalnız reklam vermesiyle mümkün değildir. Mesleki kimliğinin anlaşılması, doğru ve erişilebilir bilgi sunması, gerçek uzmanlık alanında bilimsel katkılarının görünmesi daha uzun vadeli bir itibar oluşturur. Doktor marka yönetimi, “yasak reklamın yerine başka bir reklam kanalı” olarak değil, <strong>doğrulanabilir mesleki bilginin tutarlı sunumu</strong> olarak kurulmalıdır.",
          "Hekimin tescilli uzmanlık alanı, akademik unvanları, çalıştığı kurum, hasta kabul bilgileri, yayınları ve üyelikleri bir ana profil üzerinden kontrol edilir. Farklı platformlarda farklı unvanlar, güncel olmayan çalışma adresleri veya kanıtlanamayan “uluslararası uzman” gibi ifadeler güven kaybettirir. Profildeki her iddianın belgeyle desteklenmesi önemlidir.",
          "Örneğin bir cerrahın “hangi durumlarda cerrahi seçenek değerlendirilebilir?” sorusunu açıklayan uzmanlık içeriği, “en iyi cerrah benim” iddiasından daha değerlidir. İçerik üretimi hekimle birlikte yapılmalı; ajans tıbbi kanaat icat etmemeli veya belirli bir sonucun herkeste oluşacağını söylememelidir."
        ]
      },
      {
        heading: "Web sitesi ve içerik mimarisi nasıl olmalı?",
        subheading: "Hasta karar yolculuğuna uygun bilgi mimarisi",
        paragraphs: [
          "Hekim profili, çalışma yeri, uzmanlık alanına ilişkin tarafsız bilgilendirme, sık sorulan sorular ve iletişim bilgileri temel yapıdır. Yazıların tarihi, kaynağı ve mesleki incelemesi görünür olmalıdır. İşlem sayfalarında yalnız olumlu sonuçlardan söz etmek yerine kapsam, değerlendirme gerekliliği ve olası sınırlardan bahsedilmelidir. Hekimin yetkisi dışındaki branşları trafik için eklemeyin.",
          "Hastanın araması genellikle “en iyi doktor” gibi bir ifadeyle bitmez. İnsanlar süreç, uygunluk, iyileşme, risk ve ikinci görüş soruları sorar. Marka çalışmasının değeri, bu sorulara anlaşılır, dikkatli ve doğru yanıt veren bir bilgi yapısı kurmaktır. Bu içerik arama motorları tarafından bulunabilir; ancak organik sıralama sözü verilemez."
        ]
      },
      {
        heading: "Basın, sosyal medya ve yapay zekâ görünürlüğü",
        subheading: "Doğrulanabilir bilimsel itibar ve yapay zekâda anlaşılabilirlik",
        paragraphs: [
          "Bilimsel yayınlar, gerçek konferans katılımı, doğrulanabilir röportajlar ve uzmanlık açıklamaları hekim profilini destekleyebilir. Bir haber sitesine ücret karşılığı övgü yazısı yerleştirip bunu bağımsız gazetecilik gibi sunmak doğru bir yöntem değildir. Sosyal içeriklerde sağlık tanıtım sınırları, hasta görselleri ve yorumlar ayrıca incelenir.",
          "ChatGPT gibi sistemlerde hekim hakkında görünen bilgilerin doğruluğu ve kaynakları da ölçülebilir. Ancak hiçbir ajans modelin belirli hekimi tavsiye edeceğini garanti edemez; sponsorlu ChatGPT reklamı ile organik kaynak görünürlüğü farklı mekanizmalardır."
        ]
      },
      {
        heading: "Başarıyı neyle ölçeriz?",
        subheading: "Metrikler: Takipçi sayısı değil, doğru hasta ve itibar kalitesi",
        paragraphs: [
          "Hekim adıyla yapılan aramalarda güncel profilin bulunması, ilgili bilgilendirme sayfalarının görünürlüğü, yanlış bilgilerin düzeltilmesi, doğru kaynak bağlantıları ve gelen başvuruların niteliği izlenebilir. Sağlık turizmi varsa dil ve ülkeye göre ayrı ölçüm yapılır. Tek başına takipçi sayısı veya görüntülenme sayısı mesleki itibarın yeterli ölçüsü değildir.",
          "<strong>Sonuç:</strong> Hekim kişisel markası, satın alınmış övgü ve tedavi garantisi değil; doğrulanabilir uzmanlık, açık kurum ilişkisi ve tutarlı bilgi üretimidir. Overseas Marketing'in <a href=\"/doktor-marka-yonetimi\">doktor marka yönetimi</a> hizmeti bu kapsamda somut bir denetim, içerik ve ölçüm planı sunmalıdır."
        ],
        bulletPoints: [
          "Doğrulanabilir akademik ve mesleki künyeyi tek merkezden yönetin.",
          "Tıbbi bilgi içeren tüm sayfaları hekim incelemesi ve güncelleme tarihiyle yayınlayın.",
          "Yapay zekâ ve arama motorlarında hekimin otoritesini E-E-A-T sinyalleriyle güçlendirin.",
          "Hukuki risk taşıyan yanıltıcı övgü ve reklam kurgularından uzak durun."
        ]
      }
    ],
    faqs: [
      {
        q: "Doktor marka yönetimi ile reklam ajansı hizmeti arasındaki fark nedir?",
        a: "Reklam ajansı genellikle hızlı ve doğrudan talep yaratıcı ücretli kampanyalara odaklanır; doktor marka yönetimi ise mevzuat sınırlarında kalarak hekimin bilimsel otoritesini, dijital itibarını ve organik bulunabilirliğini inşa eder."
      },
      {
        q: "Doktor hakkında basında çıkan haberler mevzuata aykırı olabilir mi?",
        a: "Evet. Haber görüntüsü altında ücret karşılığı yayınlanan, üstünlük iddiaları ve talep yaratıcı ifadeler içeren örtülü reklamlar Bakanlık ve Reklam Kurulu tarafından cezalandırılmaktadır."
      },
      {
        q: "Kişisel marka çalışması ne kadar sürede sonuç verir?",
        a: "Kalıcı dijital itibar ve organik SEO görünürlüğü sabır gerektiren bir süreçtir; düzenli içerik üretimi ve teknik optimizasyon ile genellikle 3 ila 6 ay içinde güçlü bir otorite oluşur."
      }
    ],
    officialSources: [
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" }
    ],
    internalLinks: [
      { title: "Doktor Reklam Yasağı 2026", url: "/blog/doktor-reklam-yasagi-2026" },
      { title: "Reklam Vermeden Doktor Google'da Nasıl Görünür?", url: "/blog/reklam-vermeden-doktor-googleda-nasil-gorunur" },
      { title: "Doktor Marka Yönetimi Hizmet Sayfası", url: "/doktor-marka-yonetimi" },
      { title: "GEO Hizmeti", url: "/hizmetler/geo-generative-engine-optimization" }
    ]
  },

  // 10. Doktor ChatGPT'de Nasıl Görünür?
  {
    id: "DOC26-10",
    slug: "doktor-chatgptde-nasil-gorunur",
    url: "/blog/doktor-chatgptde-nasil-gorunur",
    category: "GEO & Yapay Zekâ Aramaları",
    title: "Doktor ChatGPT'de Nasıl Görünür? Reklam ve Organik Kaynak Farkı",
    h1: "Doktor ChatGPT'de Nasıl Görünür? Reklam mı GEO mu?",
    seoTitle: "Doktor ChatGPT'de Nasıl Görünür? Reklam mı GEO mu? | Overseas Marketing",
    metaDesc: "Hekimin ChatGPT'de organik olarak anlaşılması ile sponsorlu ChatGPT reklamı arasındaki farkı ve sağlık reklamı sınırlarını öğrenin.",
    primaryKeyword: "doktor ChatGPT görünürlük",
    secondaryKeywords: ["doktor ChatGPT'de nasıl görünür", "ChatGPT doktor reklamı", "hekim GEO", "ChatGPT'de doktor önerilmek"],
    searchIntent: "GEO ve Ads ayrımı",
    funnel: "MOFU",
    readTime: "8 dk okuma",
    publishedDate: "29 Eylül 2026",
    author: "Overseas GEO & Yapay Zekâ Masası",
    reviewer: "Sağlık Mevzuatı Danışma Masası",
    quickAnswer: "ChatGPT reklamları organik yanıtlardan bağımsız ve etiketli olarak sunulur; reklam vererek organik yanıtta önerilmek teknik olarak mümkün değildir. Ayrıca OpenAI'ın 29 Eylül 2026 güncel uygunluk tablosunda tıbbi işlemler tüm ülkelerde izin dışıdır. Hekimlerin ChatGPT ve üretken yapay zekâ motorlarında doğru anlaşılması için tutarlı mesleki profil, bilimsel kaynak bağlantıları ve Generative Engine Optimization (GEO) ilkeleri uygulanmalıdır.",
    sections: [
      {
        heading: "Sponsorlu reklam organik cevabı değiştirir mi?",
        subheading: "ChatGPT reklamları ve organik kaynak mimarisinin bağımsızlığı",
        paragraphs: [
          "Bir hasta ChatGPT'ye belirli bir tedavi hakkında soru sorduğunda, hekimin amacı yalnızca adının bir yanıtta görünmesi olmamalıdır. Daha temel mesele, internetteki mesleki bilgilerinin doğru, güncel ve güvenilir kaynaklarla doğrulanabilir olmasıdır. <strong>ChatGPT'de sponsorlu reklam vermek</strong> ile bir hekim hakkında <strong>organik yanıtlarda bilgi bulunması</strong> farklı konulardır.",
          "OpenAI, ChatGPT reklamlarının cevaplardan ayrı ve sponsorlu etiketle gösterildiğini; reklamverenlerin organik yanıtı satın alamadığını söylüyor. Dolayısıyla “ChatGPT'ye reklam verelim, model sizi en iyi doktor olarak önersin” vaadi doğru değil. Ücretli alanın gösterimi ile modelin bir web kaynağını kullanması birbirinden ayrıdır."
        ]
      },
      {
        heading: "Doktorlar ChatGPT Ads ile tedavi reklamı verebilir mi?",
        subheading: "OpenAI küresel sağlık politikası ve izin verilmeyen tıbbi kategoriler",
        paragraphs: [
          "29 Eylül 2026'da kontrol edilen OpenAI uygunluk tablosunda “medical procedures and experimental care” kategorisi bütün ülkelerde izin dışı; “hospitals and urgent care” ise ABD dışındaki ülkelerde izin dışı görünüyor. Bir işletmenin Ads Manager hesabı açabilmesi, tıbbi prosedür reklamının onaylandığı anlamına gelmez. Diş implantı, saç ekimi veya cerrahi tedavi için ChatGPT reklamı vaat eden tekliflere güncel politika üzerinden yaklaşılmalıdır. Politikaların ileride değişmesi mümkündür; bu nedenle yayımlanan sayfada son kontrol tarihi bulunmalıdır."
        ],
        callout: {
          title: "OpenAI Resmî Politika Notu (29 Eylül 2026 Kontrolü)",
          text: "'Medical procedures and experimental care' kategorisi ChatGPT reklamlarında küresel olarak izin dışıdır. Saç ekimi, plastik cerrahi veya diş implantı gibi tıbbi tedaviler için doğrudan ChatGPT Ads verilemez.",
          type: "warning"
        }
      },
      {
        heading: "Organik görünürlük için ne yapılabilir?",
        subheading: "GEO stratejisi: Yapılandırılmış veri, akademik kaynak ve tutarlı hekim künyesi",
        paragraphs: [
          "Öncelikle hekimin gerçek adı, tescilli uzmanlığı, çalıştığı kurum ve hasta kabul bilgileri farklı kaynaklarda tutarlı olmalı. Kurumun yetkisi ve hekim profili açıkça birbirine bağlanmalı. Hastanın sık sorduğu sorular, yalnız satış odaklı bir landing page'de değil, dengeli ve kaynaklı bilgilendirme sayfalarında yanıtlanmalı. Sağlık içeriğini yetkili meslek mensubu gözden geçirmeli ve güncelleme tarihi görünür olmalı.",
          "Yurt dışı sağlık turizmi hedefleniyorsa İngilizce ve Almanca sayfalarda çeviri doğruluğu ve yerel bağlam ayrıca kontrol edilir. Aynı Türkçe metni otomatik çevirip yüzlerce sayfaya dağıtmak hekim kimliğini güçlendirmez. Hekimin gerçekte sunmadığı bir hizmeti veya sahip olmadığı bir yetkiyi yabancı dilde eklemek de uygun değildir."
        ]
      },
      {
        heading: "GEO çalışması nasıl ölçülür?",
        subheading: "Sorgu testleri, kaynak referans takibi ve semantik görünürlük",
        paragraphs: [
          "Farklı ülkelerden hastaların sorabileceği örnek sorular listelenir; belirlenen aralıklarda cevaplarda hangi kaynakların yer aldığı, kurum/hekim bilgilerinin doğru aktarılıp aktarılmadığı ve rakiplerin hangi kanıtlardan beslendiği incelenir. Sonuçlar örneklem ve tarihle birlikte raporlanır. Bir defa kaynak gösterilmek kalıcı sıralama değildir; model yanıtları sorguya, bağlama ve zamana göre değişebilir.",
          "<strong>Sonuç:</strong> Doktorlar için ChatGPT stratejisinin ilk işi, platformun reklam panelini açmak değil, mesleki kimliği ve yetkili kurum bağını doğru sunmak ve görünürlüğü ölçmektir. Sponsorlu sağlık reklamının uygunluğu ayrıca ve güncel politika ile değerlendirilir."
        ],
        bulletPoints: [
          "Yapay zekâ modellerinin tarayabileceği açık, kaynaklı ve tarafsız tıbbi rehberler yayınlayın.",
          "Hekim ve klinik künyesini Schema.org standartlarıyla yapılandırın.",
          "ChatGPT Ads vaatlerine karşı OpenAI'ın güncel sağlık politikalarını referans alın.",
          "GEO performansını çok dilli hasta sorguları üzerinden periyodik olarak test edin."
        ]
      }
    ],
    faqs: [
      {
        q: "ChatGPT'de doktor olarak reklam vermek mümkün mü?",
        a: "29 Eylül 2026 itibarıyla OpenAI politikalarına göre cerrahi, diş ve medikal prosedürlerin reklamları tüm ülkelerde yasaktır; hastane ve acil servis reklamları ise yalnızca ABD içinde kısıtlı onaylara tabidir."
      },
      {
        q: "Generative Engine Optimization (GEO) doktorlar için ne sağlar?",
        a: "GEO, hekimin uzmanlık alanındaki doğrulanmış bilimsel içeriklerinin ChatGPT, Perplexity ve Google Gemini gibi yapay zekâ sistemleri tarafından güvenilir kaynak olarak taranmasını ve atıfta bulunulmasını sağlar."
      },
      {
        q: "ChatGPT'de hekim tavsiyesi satın alınabilir mi?",
        a: "Hayır. Yapay zekâ cevapları bağımsız dil modelleri tarafından üretilir; organik cevaplar ücret karşılığında satın alınamaz veya manipüle edilemez."
      }
    ],
    officialSources: [
      { title: "OpenAI Sağlık Reklamı Uygunluk Tablosu", url: "https://help.openai.com/en/articles/20001534-troubleshooting-common-onboarding-and-policy-issues" },
      { title: "OpenAI — Reklamların Cevaplardan Bağımsızlığı", url: "https://help.openai.com/en/articles/20001047-ads-in-chatgpt" },
      { title: "Sağlık Bakanlığı — 2025 Yönetmeliği", url: "https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html" }
    ],
    internalLinks: [
      { title: "Doktor Marka Yönetimi", url: "/doktor-marka-yonetimi" },
      { title: "GEO Hizmeti", url: "/hizmetler/geo-generative-engine-optimization" },
      { title: "Doktorlar Yurt Dışına Reklam Verebilir mi?", url: "/blog/doktor-yurt-disina-reklam-verebilir-mi" },
      { title: "Sağlık Turizminde ChatGPT Reklamı Verilebilir mi?", url: "/blog/saglik-turizminde-chatgpt-reklami-verilebilir-mi" }
    ]
  }
];

// Read existing JSON
const existingData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

// Filter out if already present (idempotent)
const existingMap = new Set(existingData.map(a => a.slug));
const articlesToAdd = newDoctorArticles.filter(a => !existingMap.has(a.slug));

console.log(`Eklenecek yeni makale sayısı: ${articlesToAdd.length}`);

// Prepend right after the newest 2026 regulations (e.g. index 2, after REG01 and GPT01)
const updatedData = [
  ...existingData.slice(0, 2),
  ...articlesToAdd,
  ...existingData.slice(2)
];

// Write updated JSON
fs.writeFileSync(jsonPath, JSON.stringify(updatedData, null, 2), 'utf-8');
console.log(`✅ ${jsonPath} güncellendi. Toplam makale sayısı: ${updatedData.length}`);

// Generate TypeScript file
const tsContent = `export interface SeoArticleSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  bulletPoints?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  callout?: {
    title: string;
    text: string;
    type?: 'info' | 'warning' | 'tip';
  };
}

export interface SeoArticleItem {
  id: string; // e.g. K001
  slug: string;
  url: string;
  category: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  funnel: 'BOFU' | 'MOFU' | 'TOFU';
  readTime: string;
  publishedDate: string;
  author: string;
  reviewer: string;
  quickAnswer: string;
  sections: SeoArticleSection[];
  faqs: { q: string; a: string }[];
  officialSources: { title: string; url: string }[];
  internalLinks: { title: string; url: string }[];
}

export const SEO_ARTICLES: SeoArticleItem[] = ${JSON.stringify(updatedData, null, 2)};
`;

fs.writeFileSync(tsPath, tsContent, 'utf-8');
console.log(`✅ ${tsPath} başarıyla üretildi.`);
