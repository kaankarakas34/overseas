// scripts/updateStage2Implementation.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const jsonPath = path.resolve(__dirname, '../src/data/seoArticlesData.json');
const tsPath = path.resolve(__dirname, '../src/data/seoArticlesData.ts');

const article1 = {
  id: "K087",
  slug: "yurt-disindan-hasta-nasil-bulunur",
  url: "/blog/yurt-disindan-hasta-nasil-bulunur",
  category: "Uluslararası Hasta Kazanımı",
  title: "Yurt Dışından Hasta Nasıl Bulunur? Uluslararası Hasta Kazanım Rehberi",
  h1: "Yurt Dışından Hasta Nasıl Bulunur? Uluslararası Hasta Kazanım Rehberi",
  seoTitle: "Yurt Dışından Hasta Nasıl Bulunur? | Overseas Marketing",
  metaDesc: "Yurt dışından hasta kazanımı için ülke seçimi, Google ve Meta reklamları, SEO, GEO, çok dilli sayfalar ve CRM takibini birlikte planlayın.",
  primaryKeyword: "yurt dışından hasta bulma",
  secondaryKeywords: [
    "yabancı hasta kazanımı",
    "uluslararası hasta kazanımı",
    "sağlık turizminde hasta bulma",
    "çok dilli pazarlama",
    "hasta iletişimi"
  ],
  searchIntent: "Bilgi + çözüm araştırma",
  funnel: "MOFU",
  readTime: "16 dk okuma",
  publishedDate: "9 Ekim 2026",
  author: "Overseas Marketing Editör Ekibi",
  reviewer: "Sağlık Turizmi Mevzuat Masası",
  quickAnswer: "Yurt dışından hasta bulma yalnızca reklam vermekten ibaret değildir. Sağlık kuruluşunun hizmet kapasitesi, doğru hedef pazar seçimi, anlaşılır ve güvenilir bilgi, çok dilli açılış sayfası ve başvuru sonrası CRM tabanlı hasta koordinasyonunun birlikte işletilmesini gerektirir.",
  sections: [
    {
      heading: "Giriş: Uluslararası hasta kazanımının kapsamı",
      paragraphs: [
        "Yurt dışından hasta bulma, hedef ülkedeki kişilere reklam göstermekten daha kapsamlı bir süreçtir. Sağlık kuruluşunun hizmet kapasitesi, doğru pazar seçimi, anlaşılır bilgi, güvenilir dijital kimlik ve başvuru sonrası iletişim birlikte çalışmalıdır. Reklam bir kişiyi sayfaya getirebilir; o kişinin gerçekten değerlendirme sürecine girmesi, planını anlaması ve Türkiye'ye gelmesi başka aşamaların sonucudur.",
        "Uluslararası hasta kazanımı; yabancı ülkelerde yaşayan kişilerin bir sağlık kuruluşunu bulması, hizmet hakkında bilgi edinmesi, yetkili ekiple görüşmesi ve uygun koşullarda sağlık hizmetine erişmesi için kurulan pazarlama ve iletişim sistemidir. Bu sistemin başarısı yalnızca gelen mesaj sayısıyla ölçülmez. Nitelikli başvuru, doğru bilgilendirme, görüşme, gerçekleşen hizmet ve hasta sonrası iletişim de takip edilir.",
        "Klinik ve hastane yöneticileri için başlangıç sorusu şudur: Hangi hizmeti, hangi ülkede yaşayan, hangi dili kullanan kişilere, hangi operasyonel kapasiteyle anlatabiliriz? Bu sorunun cevabı olmadan açılan kampanyalar çok sayıda düşük değerli başvuru üretebilir. Aynı şekilde iyi tasarlanmış bir kampanya, yanıt vermeyen iletişim ekibi nedeniyle sonuçsuz kalabilir."
      ]
    },
    {
      heading: "Hasta kazanımı neden tek kanal üzerinden yönetilemez?",
      paragraphs: [
        "Bir kişi Google'da araştırma yapabilir, sosyal medyada hekimi inceleyebilir, bir yapay zekâ aracına soru sorabilir ve ardından WhatsApp üzerinden iletişime geçebilir. İlk görülen kanal ile son başvurunun geldiği kanal aynı olmayabilir. Bu yüzden yalnızca son tıklamayı izlemek, karar sürecindeki diğer temasları görünmez hâle getirir.",
        "Her kanal farklı bir ihtiyaca hizmet eder. Arama reklamı mevcut talebe ulaşır. Eğitim amaçlı sosyal içerik hizmetin nasıl sunulduğunu anlatır. SEO, ayrıntılı soruların cevaplanmasına yardımcı olur. GEO çalışması kurum bilgilerinin ve kaynak içeriğinin yapay zekâ destekli araştırmalarda bulunabilmesini hedefler. CRM ise bütün bu temasların ardından gelen başvurunun kaybolmamasını sağlar.",
        "Bu kanalların etkisi birbirinden bağımsız değerlendirilmemelidir. Örneğin bir hasta reklama tıklamadan önce hekim profilini ve kliniğin konumunu araştırmış olabilir. Reklam panelinde iyi görünen bir sonuç, gerçekte güçlü organik güvenin de katkısını içerir. Bütçe kararları alınırken bu ilişki göz önünde tutulmalıdır."
      ]
    },
    {
      heading: "Önce hizmet ve iletişim kapasitesini tanımlayın",
      paragraphs: [
        "Hasta kazanım planı, kurumun gerçek kapasitesinden başlamalıdır. Haftalık görüşme sayısı, kullanılabilen diller, hekim değerlendirme düzeni, seyahat koordinasyonu ve takip hizmeti netleşmelidir. Pazarlama ekibi, kurumun sunamadığı bir hizmeti veya karşılayamayacağı bir iletişim hızını vaat etmemelidir.",
        "İlk çalışma dosyasında hangi kuruluşun sağlık hizmetini sunduğu, hangi tarafın koordinasyon yaptığı ve hangi tarafın pazarlama danışmanlığı verdiği açıkça yazılmalıdır. Aracı kuruluş ile sağlık tesisinin rolleri, hastanın karşısındaki sayfalarda da anlaşılır olmalıdır. Tanıtım koşulları için kuruluşun yetkisi, hedef ülke ve güncel resmî kurallar ayrıca kontrol edilmelidir.",
        "Dil kapasitesi yalnızca reklam metninin çevrilebilmesi değildir. Başvuruya yanıt verecek ekip, tedavi planını açıklayacak yetkili personel ve hizmet sonrası iletişim aynı dili yönetebilmelidir. Almanca bir reklamla başlayan deneyimin Türkçe bir otomatik mesajla devam etmesi, ilk temasta kurulan güveni zayıflatabilir.",
        "Kapasite planı ayrıca reklamın ne zaman azaltılacağını da tanımlamalıdır. Yeni başvurulara zamanında dönemeyen bir ekipte bütçeyi artırmak, daha fazla bekleyen kayıt üretir. Önce iletişim yükünün dengelenmesi, sonra talebin artırılması daha sağlıklı bir operasyon oluşturur."
      ]
    },
    {
      heading: "Hedef ülke seçimi nasıl yapılır?",
      paragraphs: [
        "Ülke seçimini sadece yüksek alım gücü veya duyulan başarı hikâyelerine göre yapmayın. Hizmetin araştırılma biçimini, dil kapasitesini, seyahat koşullarını, rekabeti ve kurumun geçmiş sonuçlarını birlikte değerlendirin. Veri yoksa ilk hedef, birkaç ülkeyi aynı anda büyütmek yerine bir pazarda süreci öğrenmek olabilir.",
        "İngiltere ve Almanya için aynı reklamın sadece ülke adını değiştirerek kullanılması yeterli değildir. Aranan kelimeler, terminoloji, iletişim dili ve kişinin ihtiyaç duyduğu bilgiler farklılaşabilir. Bu farklar araştırılmalı; ülkeye ilişkin varsayımlar hazır gerçekler gibi kullanılmamalıdır.",
        "Örneğin İngiltere pazarına giriş planında saat farkı, İngilizce görüşme kapasitesi ve hastanın seyahat öncesi soruları birlikte ele alınabilir. <a href=\"/ingiltere-saglik-turizmi-reklamlari\">İngiltere sağlık turizmi pazarlama yaklaşımı</a>, ülke çalışmasını genel hasta kazanım sistemiyle ilişkilendirmek için bir başlangıç noktasıdır."
      ],
      table: {
        headers: ["Değerlendirme başlığı", "Sorulacak soru", "Karara katkısı"],
        rows: [
          ["Arama ihtiyacı", "İlgili hizmet hangi sorgularla araştırılıyor?", "İçerik ve reklam dilini belirler"],
          ["İletişim", "Ekip bu dilde nitelikli görüşme yapabiliyor mu?", "Başvuru sonrası kaybı azaltır"],
          ["Seyahat", "Hastanın planlamasında hangi bilgiler gerekiyor?", "Sayfanın pratik sorularını belirler"],
          ["Rekabet", "Rakipler hangi hizmetleri ve süreçleri anlatıyor?", "Gerçek farklılıkları ortaya çıkarır"],
          ["Kapasite", "İlgili hizmet için yeterli değerlendirme ve takip imkânı var mı?", "Büyüme sınırını belirler"],
          ["Veri", "Geçmiş başvurularda görüşme ve gerçekleşme oranı nasıl?", "Sezgi yerine kurum verisiyle karar verir"]
        ]
      }
    },
    {
      heading: "Google Ads ile mevcut talebe ulaşmak",
      paragraphs: [
        "Google Ads arama kampanyaları, belirli bir hizmeti araştıran kişilere ilgili bir sayfa sunmak için kullanılabilir. Buradaki temel ayrım, bilgi arayan kullanıcı ile kurum veya değerlendirme süreci araştıran kullanıcı arasındadır. Her sorguyu aynı reklam grubuna toplamak, mesajın ve bütçenin odağını zayıflatır.",
        "Anahtar kelime listesi hazırlanırken sorgu niyeti yazılmalıdır. Hizmetin ne olduğunu soran sorgu, süreç hakkında bilgi veren bir rehbere uygun olabilir. Belirli bir konumdaki klinik seçeneklerini inceleyen sorgu ise kurum, hekim, iletişim ve değerlendirme sürecini açıklayan sayfaya ihtiyaç duyar.",
        "Negatif kelime çalışması da yalnızca bir defalık kurulum değildir. Gerçek arama terimleri incelenerek iş arayanlar, eğitim araştıranlar veya kurumun sunmadığı hizmetlere ilişkin sorgular ayıklanır. Bunun amacı olabildiğince çok trafik almak değil, sayfanın cevap verebildiği ihtiyaca ulaşmaktır.",
        "Kampanya sonuçları başvuru kalitesiyle birlikte okunmalıdır. Çok ucuz tıklama, yanlış niyetli kullanıcılar getiriyorsa toplam iletişim maliyetini artırabilir. Az sayıda fakat doğru bağlama sahip başvuru, daha düşük fiyatlı fakat karşılanamayan yüzlerce mesajdan daha değerli olabilir. Kanal yönetiminin bu yönü <a href=\"/hizmetler/performans-pazarlama\">performans pazarlama hizmeti</a> kapsamında ele alınır."
      ]
    },
    {
      heading: "Meta ve Instagram'ın hasta yolculuğundaki rolü",
      paragraphs: [
        "Sosyal platformlarda kullanıcı her zaman bir sağlık hizmeti arayışıyla bulunmaz. Bu nedenle reklamın veya içeriğin ilk görevi, bağlama uygun ve anlaşılır bilgi sunmaktır. Kurumun çalışma süreci, hekimlerin uzmanlık alanları ve hizmetin nasıl değerlendirildiği gibi konular güven oluşturan bir bilgi zemini sağlayabilir.",
        "İçerik planı, kişiye bir kusur atfetmeden ve sonuç garantisi vermeden hazırlanmalıdır. Kullanılan görseller, ifadeler, hedefleme ve sayfa içeriği birlikte kontrol edilmelidir. Bir metnin kabul edilmesi, her görselin veya her hedeflemenin aynı şekilde uygun olduğu anlamına gelmez.",
        "WhatsApp'a yönlendiren kampanyalarda tıklama ile gerçek görüşme ayrılmalıdır. Düğmeye basan kişinin mesaj gönderip göndermediği ve ekiple iletişime girip girmediği farklı olaylardır. Benzer biçimde formu dolduran herkes, görüşme yapmak isteyen veya doğru hizmeti araştıran bir kişi olmayabilir.",
        "Sosyal kampanya değerlendirmesinde başvuru kaynağına göre iletişim kurulabilen kişi sayısı, bilgi ihtiyacı ve görüşme ilerlemesi incelenmelidir. Hangi içeriklerin doğru beklenti oluşturduğu bu verilerden öğrenilebilir. Sadece video izlenmesini veya ucuz form maliyetini büyüme göstergesi saymak eksik bir değerlendirmedir."
      ]
    },
    {
      heading: "SEO ile araştırma sorularına cevap verin",
      paragraphs: [
        "SEO çalışmasının içerik tarafı, hastanın karar verirken sorduğu gerçek soruları anlaşılır biçimde cevaplamalıdır. Hizmetin kapsamı, değerlendirme süreci, hazırlık, hekim ve kurum kimliği, takip düzeni ve iletişim yolları birbirine bağlı bir bilgi yapısı oluşturmalıdır. Tıbbi açıklamalar ilgili sağlık uzmanının değerlendirmesinden geçmelidir.",
        "İçerik üretmek, aynı konuyu farklı kelimelerle defalarca yazmak değildir. Her sayfanın sahip olduğu bir soru olmalıdır. Genel hizmet rehberi süreç hakkında bilgi verirken, hekim sayfası kişiyi ve uzmanlık alanını, kurum sayfası kuruluşu ve konumu anlatmalıdır. Bu sayfalar arasında açıklayıcı bağlantılar kurulmalıdır.",
        "Çok dilli sitede çeviri kalitesi, teknik dil eşleşmeleri ve doğru iletişim akışı birlikte yönetilir. İngilizce içerikte Türkçe form hata mesajlarının kalması veya menünün başka dile dönmesi, deneyimi kesintiye uğratır. Dil seçimi, kullanıcının bulunduğu sayfanın uygun karşılığına götürmelidir.",
        "Kurum içindeki sık sorulan sorular içerik kaynağı olarak değerlidir. Ancak hasta mesajlarını kimlik bilgileriyle yayımlamak yerine sorular anonimleştirilmiş bir editoryal listeye dönüştürülmelidir. Böylece içerik gerçek bilgi ihtiyacından beslenirken özel görüşmeler korunur."
      ]
    },
    {
      heading: "GEO çalışmasını doğrulanabilir bilgi üzerine kurun",
      paragraphs: [
        "GEO, üretken yapay zekâ destekli araştırma deneyimlerinde bir kuruluşun veya içeriğinin doğru anlaşılmasını ve bulunabilmesini hedefleyen çalışmalar için kullanılan terimdir. Klinik kimliği, hekim profilleri, hizmet kapsamı ve kaynak içerikleri bu çalışmanın temel malzemesidir.",
        "Pratikte ilk adım, dijital bilgiler arasındaki tutarlılığı sağlamaktır. Kurum adı, adres, hekimlerin çalışma yeri ve sunulan hizmetler birbiriyle çelişmemelidir. Bir yapay zekâ sisteminin gösterebileceği kaynak sayfa, okuyucunun da doğrulayabileceği açık bilgiler içermelidir.",
        "Google'ın AI arama özellikleri için yayımladığı rehber, ek bir özel schema veya AI dosyası şartı koymuyor. Bu nedenle çalışma erişilebilir içerik, açık kurum bilgileri ve temel SEO üzerine kurulmalıdır. Bir metne belirli kelimeler eklemek veya schema kullanmak, herhangi bir sistemin kliniği önermesini garanti etmez.",
        "Görünürlük ölçümünde örnek soru seti, tarih, dil ve oturum koşulları kaydedilebilir. Bir cevapta kurumun anılması, kaynak bağlantısının gösterilmesi ve o bağlantıdan ziyaret gelmesi ayrı göstergelerdir. Tek bir olumlu cevabı bütün ülkeler için kalıcı görünürlük kanıtı saymayın. <a href=\"/hizmetler/geo-generative-engine-optimization\">GEO hizmet yaklaşımı</a> bu ölçüm sınırlarıyla anlatılmalıdır."
      ]
    },
    {
      heading: "Landing page hangi bilgileri vermeli?",
      paragraphs: [
        "Açılış sayfası, reklamın verdiği mesajı devam ettirmelidir. Kullanıcı neyi araştırıyorsa sayfa önce o soruyu cevaplamalıdır. Her reklamı kurumun genel ana sayfasına göndermek, kişiyi doğru bilgiyi yeniden aramak zorunda bırakabilir.",
        "Sayfanın üst bölümünde hizmetin ne olduğu, hangi kuruluş tarafından sunulduğu ve ilk iletişimin nasıl ilerlediği anlaşılmalıdır. Hekim bilgisi doğrulanabilir olmalı; unvanlar ve kurum ilişkileri açık yazılmalıdır. İletişim seçenekleri kolay bulunmalı fakat sayfa sadece tekrar eden düğmelerden oluşmamalıdır.",
        "Mobil deneyim özellikle kontrol edilmelidir. Formun klavyeyle kullanımı, ülke kodu, hata mesajı, gizlilik açıklaması ve başarılı gönderim sonrası yönlendirme gerçek cihazlarda denenmelidir. Kullanıcı, mesajının alınıp alınmadığını ve sonraki adımın ne olduğunu bilmelidir.",
        "Sayfada vaka, belge veya başka bir kanıt kullanılıyorsa gerçekliği ve yayımlanma uygunluğu doğrulanmalıdır. Görseldeki bir sertifika, hangi kuruluşa ve hangi kapsama ait olduğu açıklanmadan güven kanıtı sayılmamalıdır. Bu içerik ve teknik deneyim <a href=\"/hizmetler/web-sitesi-landing-page\">web sitesi ve landing page çalışmasının</a> birlikte ele alınması gereken parçalarıdır."
      ]
    },
    {
      heading: "WhatsApp ve CRM neden kritik?",
      paragraphs: [
        "Başvuruyu mesaj uygulamasında bırakmak, takip sorumluluğunu belirsiz hâle getirebilir. Aynı kişi farklı kanallardan yazdığında ayrı kayıt açılması, başka danışmana atanması veya önceki konuşmanın kaybolması mümkündür. CRM, kayıtları bir ilişki ve görev sistemi içinde toplamak için kullanılır.",
        "Her başvuruda tek sorumlu, bir sonraki işlem ve işlem zamanı bulunmalıdır. İlk cevap verilmiş olsa bile görüşme planı yapılmadıysa kayıt ilerlememiş olabilir. Otomatik karşılama ile nitelikli insan yanıtı ayrı zaman damgalarıyla ölçülmelidir.",
        "Başvuru aşamaları kurum içinde aynı anlamı taşımalıdır. Yeni başvuru, iletişim kuruldu, bilgi beklendi, yetkili değerlendirmeye iletildi, görüşme yapıldı ve süreç kapandı gibi durumların giriş kriterleri tanımlanmalıdır. Sağlık açısından uygunluk kararını satış skoru veya otomatik mesaj sistemi vermemelidir.",
        "<a href=\"/hizmetler/saglik-turizmi-crm-yazilimi\">Sağlık turizmi CRM altyapısı</a>, yalnızca kişi listesinin saklandığı ekran olarak düşünülmemelidir. Dil ataması, görev hatırlatması, kaynak takibi ve kayıp nedeni kaydı aynı süreçte çalışmalıdır. Bu düzen, reklam ekibinin de hangi başvuruların ilerlediğini anlayabilmesini sağlar."
      ]
    },
    {
      heading: "Başvuru ile gerçekleşen hasta arasındaki fark",
      paragraphs: [
        "Aşağıdaki sayılar tamamen örnek bir senaryodur; sektör ortalaması veya Overseas Marketing müşteri sonucu değildir.",
        "Bu örnekte başvurudan gerçekleşen hastaya oran yüzde 3'tür. Ancak tek bir orana bakmak, sorunun hangi aşamada olduğunu göstermez. İletişim kurulabilen kişi sayısı düşükse kaynak kalitesi ve yanıt süreci incelenir. Görüşmeden sonra kayıp varsa bilgi açıklığı, kapasite ve planlama engelleri değerlendirilir.",
        "Bu farkın finansal etkisini <a href=\"/blog/saglik-turizminde-hasta-kazanma-maliyeti\">hasta kazanma maliyeti rehberinde</a>, iletişim tarafını ise <a href=\"/blog/saglik-turizminde-lead-kalitesi\">lead kalitesi rehberinde</a> ayrıntılı inceleyebilirsiniz."
      ],
      table: {
        headers: ["Aşama", "Kişi sayısı", "Yorum"],
        rows: [
          ["Tekilleştirilmiş yeni başvuru", "100", "Aynı kişinin tekrar mesajları çıkarılmıştır"],
          ["İletişim kurulabilen", "60", "İki yönlü iletişim doğrulanmıştır"],
          ["Operasyonel olarak nitelikli", "30", "Hizmet, dil ve süreç beklentisi karşılanabilir görünür"],
          ["Görüşme yapılan", "10", "Yetkili ekip görüşmesi gerçekleşmiştir"],
          ["Planı teyit edilen", "4", "Kurumun tanımladığı teyit koşulu sağlanmıştır"],
          ["Gerçekleşen yeni hasta", "3", "Hizmete erişim kurum kayıtlarında doğrulanmıştır"]
        ]
      }
    },
    {
      heading: "İlk uygulama adımları",
      paragraphs: [
        "Başlangıçta tek hedef ülke ve tek hizmet kümesi seçin. İlgili sorguları, bilgi ihtiyacını ve kurum kapasitesini aynı dosyada toplayın. Bu seçimin gerekçesini yazın; böylece ileride sonuçlara göre neden devam edildiği veya yön değiştirildiği anlaşılır olur.",
        "İkinci adımda açılış sayfasını, formu ve CRM atamasını birlikte kurun. Reklam açılmadan önce örnek başvurunun doğru kişiye ulaştığını, cevaplandığını ve aşama değişikliklerinin raporda göründüğünü kontrol edin. Başvurunun alındığını gösteren ekran, arka planda kayıt oluştuğunun tek başına kanıtı değildir.",
        "Üçüncü adımda sınırlı bir kampanya testi başlatın. Hedef, ilk günlerde yüksek hacim göstermekten çok sorgu, mesaj ve iletişim akışını öğrenmektir. Yanlış beklenti üreten reklamları düzeltin. Sorulan soruları yeni içerik ve sayfa güncellemelerine dönüştürün.",
        "Sonraki kararlar aşama verisine dayanmalıdır. Bütçeyi, ekip kapasitesini ve nitelikli başvuru oranını birlikte değerlendirin. Verisi henüz olgunlaşmamış bir kampanyayı çok hızlı başarılı veya başarısız ilan etmeyin. Özellikle planlama süresi uzun başvuruların kapanması için gereken süreyi hesaba katın."
      ]
    },
    {
      heading: "Hasta koordinasyonu ve bilgi devri",
      paragraphs: [
        "Pazarlama ekibinden hasta koordinasyonuna aktarılan kayıt, sadece bir telefon numarası olmamalıdır. Kişinin hangi sayfadan geldiği, hangi dilde iletişim beklediği ve genel olarak hangi hizmeti araştırdığı yönlendirme için yeterli bir başlangıç bağlamı oluşturur. Böylece danışman ilk konuşmada başvurunun neden yapıldığını yeniden tahmin etmek zorunda kalmaz.",
        "Bilgi devri sırasında gereksiz ayrıntıların paylaşılması da önlenmelidir. Pazarlama raporunda kişinin tıbbi dosyasına ihtiyaç yoktur. Koordinasyon ve sağlık ekibi arasındaki gerekli veri akışı kurumun kendi yetkilendirme düzeninde ilerlemelidir. Hangi çalışanın hangi kaydı görebildiği ve hangi işlemi yapabildiği açıkça belirlenmelidir.",
        "Kişiye gönderilen bilgi, reklamdaki mesajla uyumlu olmalıdır. Reklam bir değerlendirme sürecine davet ediyorsa ilk görüşme aynı süreci açıklamalıdır. Kurumun sunmadığı transfer, konaklama veya takip hizmeti varmış gibi anlaşılmamalıdır. Birden fazla kuruluş sürece katılıyorsa görevler ve iletişim noktaları doğru aktarılmalıdır.",
        "Hizmet öncesi bilgilendirme, karar vermeyi kolaylaştıran bir açıklık taşımalıdır. Kişi sürecin hangi kısmında hekimle görüşeceğini, hangi bilgilerin değerlendirileceğini ve henüz kesinleşmemiş konuların hangileri olduğunu anlayabilmelidir. Klinik değerlendirme gerektiren sorular, satış diline çevrilerek kesin cevaplanmamalıdır.",
        "Hizmet sonrası iletişim de hasta kazanım planında yer almalıdır. Koordinasyonun tedavi günü sona erdiği bir deneyim, kişinin beklediği destekle örtüşmeyebilir. Kurumun takip kapsamı, sorumlu ekibi ve iletişim yolları başlangıçtan itibaren doğru anlatılmalıdır. Pazarlama bu kapsamı oluşturmaz; gerçek hizmeti doğru açıklamakla sorumludur."
      ]
    },
    {
      heading: "Yönetici için tek sayfalık başlangıç brifi",
      paragraphs: [
        "Çalışmaya başlarken hedef ülke, genel hizmet kümesi, dil kapasitesi, haftalık görüşme kapasitesi ve temel iletişim kanalı aynı sayfada yazılmalıdır. Bu bilgilerin yanına ilk ölçüm dönemi ve sorumlu kişiler eklenir. Doküman, reklam ekibinin kampanya planı ile kurumun operasyon planını ortak bir başlangıç noktasına taşır.",
        "Brifte başarı tanımı da bulunmalıdır. Örneğin yalnızca başvuru toplamak yerine iletişim kurulabilen ve doğru sürece yönlendirilmiş tekil kayıt sayısı izlenebilir. Gerçekleşen hizmetin teyidi kurum verisinden alınır. İlk dönemde bütün göstergeler için iddialı hedefler uydurmak yerine mevcut durum ölçülür ve sonraki kararlar bu ölçüme dayanır.",
        "Bu kısa dosya değişen koşulların kaydı için de kullanılır. Ekip dili, kapasite veya hizmet kapsamı değiştiğinde kampanya ve içerik aynı anda gözden geçirilir. Böylece pazarlama, kurumun geçmişte sunabildiği fakat artık sunamadığı bir deneyimi anlatmaya devam etmez."
      ]
    },
    {
      heading: "Sık yapılan hatalar",
      paragraphs: [
        "Aşağıdaki operasyonel tuzaklar sağlık turizminde en sık karşılaşılan kaynak israflarıdır:"
      ],
      bulletPoints: [
        "Aynı anda çok sayıda ülke açıp her pazarın verisini yetersiz bırakmak.",
        "Ucuz mesaj sayısını hasta kazanımı olarak raporlamak.",
        "Reklam, sayfa ve danışman konuşması arasında farklı beklentiler oluşturmak.",
        "Başvuruyu alan kişiyi ve sonraki işlem zamanını kaydetmemek.",
        "Tıbbi değerlendirmeyi ticari bir skorla otomatikleştirmek.",
        "Organik görünürlük veya yapay zekâ önerisi için kesin sonuç vaat etmek.",
        "Yeni bir başlık eklerken mevcut içerikle aynı arama niyetini tekrar hedeflemek."
      ]
    }
  ],
  faqs: [
    {
      q: "Yurt dışından hasta bulmak için yalnızca reklam yeterli mi?",
      a: "Reklam talebe ulaşmayı sağlar; başvuru sonrası iletişim, değerlendirme, bilgilendirme ve planlama süreci ayrıca yönetilmelidir. Bu aşamalar kopuksa reklam bütçesi beklenen sonuçları vermeyebilir."
    },
    {
      q: "Hangi ülkeyle başlanmalı?",
      a: "Kurumun dil kapasitesi, hizmeti, geçmiş başvuruları ve pazar araştırması birlikte değerlendirilmelidir. Her kuruluş için geçerli tek bir başlangıç ülkesi yoktur."
    },
    {
      q: "SEO mu, reklam mı önce yapılmalı?",
      a: "Teknik olarak çalışan bir site ve ölçüm düzeni başlangıç koşuludur. Reklam talep testinde, SEO ise araştırma sorularını ve sürekli bulunabilirliği geliştirmede kullanılabilir. Öncelik kurumun mevcut durumuna göre belirlenir."
    },
    {
      q: "ChatGPT'de görünmek hasta getirmeyi garanti eder mi?",
      a: "Hayır. Anılma, kaynak bağlantısı, ziyaret ve başvuru farklı aşamalardır. Görünürlük, doğru bilgiye erişim hedefiyle değerlendirilmelidir."
    },
    {
      q: "En önemli rapor hangisidir?",
      a: "Başvuru kaynağını CRM aşamaları ve gerçekleşen sonuçlarla birlikte gösteren rapordur. Reklam paneli tek başına bütün hasta kazanım sürecini açıklamaz."
    }
  ],
  officialSources: [
    { title: "Google Search Central — AI features and your website", url: "https://developers.google.com/search/docs/appearance/ai-features" },
    { title: "T.C. Sağlık Bakanlığı — Uluslararası Sağlık Turizmi Yönetmeliği", url: "https://shgmturizm.saglik.gov.tr" }
  ],
  internalLinks: [
    { title: "Performans Pazarlama Hizmeti", url: "/hizmetler/performans-pazarlama" },
    { title: "GEO Hizmet Yaklaşımı", url: "/hizmetler/geo-generative-engine-optimization" },
    { title: "Sağlık Turizmi CRM Yazılımı", url: "/hizmetler/saglik-turizmi-crm-yazilimi" },
    { title: "Web Sitesi ve Landing Page", url: "/hizmetler/web-sitesi-landing-page" },
    { title: "İngiltere Sağlık Turizmi Reklamları", url: "/ingiltere-saglik-turizmi-reklamlari" },
    { title: "Hasta Kazanma Maliyeti Rehberi", url: "/blog/saglik-turizminde-hasta-kazanma-maliyeti" },
    { title: "Lead Kalitesi ve CRM Rehberi", url: "/blog/saglik-turizminde-lead-kalitesi" }
  ]
};

const article2 = {
  id: "K091",
  slug: "saglik-turizminde-hasta-kazanma-maliyeti",
  url: "/blog/saglik-turizminde-hasta-kazanma-maliyeti",
  category: "Pazarlama Ekonomisi & CAC",
  title: "Sağlık Turizminde Hasta Kazanma Maliyeti Nasıl Hesaplanır? CPL ve CAC Rehberi",
  h1: "Sağlık Turizminde Hasta Kazanma Maliyeti Nasıl Hesaplanır? CPL ve CAC Rehberi",
  seoTitle: "Sağlık Turizminde Hasta Kazanma Maliyeti: CPL ve CAC | Overseas Marketing",
  metaDesc: "Sağlık turizminde hasta kazanma maliyetini CPL ve CAC ayrımıyla hesaplayın. Örnek huni, bütçe dağılımı ve CRM raporlamasını inceleyin.",
  primaryKeyword: "sağlık turizmi hasta kazanma maliyeti",
  secondaryKeywords: [
    "sağlık turizmi CPL",
    "hasta edinme maliyeti",
    "sağlık turizmi CAC",
    "reklam bütçesi",
    "dönüşüm oranı"
  ],
  searchIntent: "Hesaplama + bütçe kararı",
  funnel: "BOFU",
  readTime: "15 dk okuma",
  publishedDate: "9 Ekim 2026",
  author: "Overseas Marketing Editör Ekibi",
  reviewer: "Finans ve Pazarlama Masası",
  quickAnswer: "Sağlık turizminde hasta kazanma maliyeti yalnızca reklam bütçesinin gelen form sayısına bölünmesiyle hesaplanmaz. Medya CPL (başvuru maliyeti), Medya CPQL (nitelikli başvuru maliyeti) ve Tam CAC (tüm edinim ve koordinasyon giderleri dahil hasta maliyeti) birbirinden ayrılmalıdır.",
  sections: [
    {
      heading: "Giriş: Maliyet raporunun üç katmanı",
      paragraphs: [
        "Sağlık turizmi hasta kazanma maliyeti, yalnızca reklam bütçesinin gelen mesaj sayısına bölünmesiyle hesaplanmaz. Mesaj, form veya arama bir başvurudur. Bu kişinin iletişime girmesi, yetkili değerlendirme sürecinden geçmesi, planını teyit etmesi ve hizmete erişmesi farklı aşamalardır. Finansal sonuç bu aşamaların hangisinin tamamlandığına göre değişir.",
        "Klinik ve hastane yöneticilerinin aynı raporda üç maliyeti görmesi gerekir: yeni başvuru maliyeti, nitelikli başvuru maliyeti ve gerçekleşen yeni hasta maliyeti. İlk gösterge reklamın talep toplama verimliliğini, ikincisi başvuruların karşılanabilirliğini, üçüncüsü ise pazarlama ve iletişim sisteminin ekonomik sonucunu anlatır.",
        "Bu rehberdeki tüm rakamlar hesaplama yöntemini açıklayan varsayımsal örneklerdir. Sektör ortalaması, önerilen bütçe, piyasa fiyatı veya Overseas Marketing müşteri sonucu değildir. Kurumun gerçek kararları kendi maliyetleri, kayıtları ve olgunlaşmış başvuru grupları üzerinden verilmelidir."
      ]
    },
    {
      heading: "CPL ve CAC arasındaki fark nedir?",
      paragraphs: [
        "CPL, bir başvurunun elde edilmesi için harcanan reklam maliyetidir. CAC ise yeni bir hastayı kazanmak için tanımlanan pazarlama ve satış kapsamındaki toplam maliyetin, gerçekleşen yeni hasta sayısına bölünmesidir. Kurum hangi harcamaları CAC kapsamına aldığını raporda açıkça yazmalıdır.",
        "Medya bazlı hasta maliyetine tam CAC adı verilmemelidir. Ajans, içerik, yazılım ve iletişim ekibi maliyetleri dışarıda bırakıldıysa rapor bu sınırı belirtmelidir. Aksi durumda kurum gerçek harcamasını olduğundan düşük görebilir.",
        "CPL düşükken CAC yüksek olabilir. Bunun nedeni yanlış talep, zayıf iletişim, değerlendirme kapasitesi veya çok sayıda iptal olabilir. Tersine, daha pahalı bir başvuru kaynağı daha yüksek gerçekleşme oranıyla toplam maliyeti azaltabilir. Bu nedenle kanal seçimi sadece ilk temas fiyatına göre yapılmaz."
      ],
      table: {
        headers: ["Gösterge", "Önerilen hesap", "Cevapladığı soru"],
        rows: [
          ["Medya CPL", "Reklam harcaması / yeni tekil başvuru", "Bir başvuruyu toplamak ne kadara mal oluyor?"],
          ["Medya CPQL", "Reklam harcaması / nitelikli başvuru", "Karşılanabilir başvuruya ne kadar harcıyoruz?"],
          ["Medya bazlı hasta maliyeti", "Reklam harcaması / gerçekleşen yeni hasta", "Reklam harcamasının hasta başına payı nedir?"],
          ["Tam CAC", "Tanımlı toplam edinim maliyeti / gerçekleşen yeni hasta", "Bütün edinim sisteminin hasta başına maliyeti nedir?"]
        ]
      }
    },
    {
      heading: "Önce paydadaki sonucu tanımlayın",
      paragraphs: [
        "Bir raporda hasta sayısı rezervasyon, başka bir raporda ödeme, üçüncü raporda gerçekleşen hizmet olarak sayılıyorsa karşılaştırma yapılamaz. Hasta kazanma maliyetini hesaplamadan önce hangi olayın gerçekleşen yeni hasta sayılacağını yazılı olarak belirleyin.",
        "Bu rehberin örneklerinde gerçekleşen yeni hasta, kurumun hizmete eriştiğini doğruladığı yeni kişidir. Bir kişinin aynı dönemde birden fazla işlem yaptırması birden fazla yeni hasta olarak sayılmaz. Önceki hastanın yeniden başvurusu da yeni edinim maliyetine otomatik eklenmez.",
        "Rezervasyon ayrı bir ara sonuç olarak izlenebilir. Fakat rezervasyon iptal edilebilir veya ilerleyen dönemde gerçekleşebilir. Aynı şekilde ön ödeme alınması, hizmetin tamamlandığı anlamına gelmez. Ekonomik ve operasyonel raporların hangi aşamayı esas aldığı görünür olmalıdır.",
        "Payda sıfırsa maliyeti sıfır göstermek yanlış olur. Henüz gerçekleşen hasta yoksa sonuç 'hesaplanamıyor' olarak raporlanmalı, harcama ve açık başvuru sayısı ayrıca gösterilmelidir. İlk günlerde bu durum kampanyanın otomatik olarak başarısız olduğunu da kanıtlamaz; karar süresi henüz tamamlanmamış olabilir."
      ]
    },
    {
      heading: "Örnek hasta kazanım hunisi",
      paragraphs: [
        "Aşağıdaki senaryoda 60.000 TL reklam harcamasıyla 100 tekil başvuru elde edildiğini varsayalım. Aynı başvuru grubunun takip sonucunda 30 nitelikli başvuru, 10 görüşme, 4 teyit ve 3 gerçekleşen yeni hasta ürettiğini kabul edelim.",
        "Bu tablo başvuru maliyetinin 600 TL olduğunu, fakat gerçekleşen hasta başına reklam maliyetinin 20.000 TL'ye ulaştığını gösterir. Sonuçlar farklı sorulara cevap verir; biri diğerinin yerine kullanılmamalıdır.",
        "Huniyi <a href=\"/blog/yurt-disindan-hasta-nasil-bulunur\">yurt dışından hasta kazanım rehberiyle</a> birlikte değerlendirmek yararlıdır. Maliyet yüksekse çözüm her zaman daha ucuz trafik değildir. Kayıp, başvuru ile görüşme arasında oluşuyorsa iletişim veya ön bilgilendirme tarafında olabilir."
      ],
      table: {
        headers: ["Aşama", "Sayı", "Hesaplanan maliyet"],
        rows: [
          ["Tekil başvuru", "100", "60.000 / 100 = 600 TL medya CPL"],
          ["Nitelikli başvuru", "30", "60.000 / 30 = 2.000 TL medya CPQL"],
          ["Görüşme", "10", "60.000 / 10 = 6.000 TL medya bazlı görüşme maliyeti"],
          ["Teyit", "4", "60.000 / 4 = 15.000 TL medya bazlı teyit maliyeti"],
          ["Gerçekleşen yeni hasta", "3", "60.000 / 3 = 20.000 TL medya bazlı hasta maliyeti"]
        ]
      }
    },
    {
      heading: "Tam CAC hangi maliyetleri içerir?",
      paragraphs: [
        "Kapsam kurumun muhasebe ve yönetim ihtiyacına göre belirlenir. Ancak hangi kalemin dahil edildiği açıklanmalı ve zaman içinde aynı yöntem korunmalıdır. Reklam harcaması dışındaki edinim giderlerini tamamen unutmak, yeni hasta kazanımının sürdürülebilirliğini yanlış değerlendirebilir.",
        "Varsayımsal başvuru grubu için aşağıdaki maliyetleri kullanalım:",
        "Üç gerçekleşen yeni hasta için tam CAC, 90.000 / 3 = 30.000 TL'dir. Bu sonuç medya bazlı 20.000 TL hasta maliyetinden farklıdır. Aradaki 10.000 TL, bu örnekte hasta başına düşen diğer edinim giderlerini gösterir.",
        "Tedavinin doğrudan sunum maliyetini CAC içine ekleyip daha sonra katkı hesabında yeniden düşmeyin. Aynı giderin iki kez sayılmasını önlemek için edinim gideri ile hizmet sunum gideri ayrı tanımlanmalıdır. Kuruluşun muhasebe sınıflandırması farklıysa hesap mantığı ve kapsamı raporda açıklanır."
      ],
      table: {
        headers: ["Maliyet kalemi", "Ayrılan tutar"],
        rows: [
          ["Reklam harcaması", "60.000 TL"],
          ["Reklam yönetimi için ayrılan pay", "12.000 TL"],
          ["İçerik ve kreatif üretimi payı", "6.000 TL"],
          ["CRM ve iletişim yazılımı payı", "3.000 TL"],
          ["Hasta koordinasyon ekibinin edinim faaliyeti payı", "9.000 TL"],
          ["Toplam edinim maliyeti", "90.000 TL"]
        ]
      }
    },
    {
      heading: "Ortak giderleri nasıl dağıtmalısınız?",
      paragraphs: [
        "Aynı ekip birden fazla ülke veya hizmet için çalışıyorsa ortak maliyetin dağıtılması gerekir. Her kanala toplam giderin tamamını yüklemek de, hiçbirine yüklememek de yanlış bir karşılaştırma oluşturur. Seçilen dağıtım anahtarı baştan yazılmalıdır.",
        "Hasta koordinasyon gideri için çalışma süresi, aktif kayıt sayısı veya görüşme yükü kullanılabilir. İçerik gideri, kullanım dönemi veya ilgili ülke kümesine ayrılan payla dağıtılabilir. Kurumun elinde ayrıntılı veri yoksa yaklaşık yöntem kullanılabilir; fakat yaklaşık olduğu açıkça belirtilmelidir.",
        "Sadece reklam harcamasına göre gider dağıtmak pratik olabilir, ancak her durumda en doğru yöntem değildir. Bir kanal daha fazla iletişim yükü oluşturuyorsa koordinasyon maliyeti aynı oranda artmayabilir. Raporlarda hassasiyet analizi yaparak farklı dağıtım varsayımlarının sonucu ne kadar değiştirdiği görülebilir.",
        "Önemli olan kusursuz görünen bir rakam üretmek değil, yönetim kararlarını tutarlı bir hesapla desteklemektir. Maliyet dağıtım yöntemini her ay değiştirmek, performans değişiminin gerçekten kampanyadan mı yoksa muhasebe yönteminden mi geldiğini belirsizleştirir."
      ]
    },
    {
      heading: "Başvuru ayı ile tedavi ayını karıştırmayın (Kohort Takibi)",
      paragraphs: [
        "Ekimde gelen başvuru kasımda hizmete erişebilir. Ekim reklam harcamasını ekimde tedavi edilen bütün yeni hastalara bölmek, başka aylarda kazanılmış kişileri aynı hesapta toplayabilir. Bu durum özellikle karar süresi uzun hizmetlerde sonucu önemli ölçüde değiştirir.",
        "Çözüm, başvuruları başlangıç dönemine göre bir grup olarak izlemektir. Buna kohort takibi denir. Ekimde ilk kez başvuran kişiler aynı grupta tutulur; bu grubun ilerleyen haftalarda görüşmeye, teyide ve gerçekleşen hizmete dönüşümü takip edilir.",
        "Olgunlaşmamış bir kohortun sonuçları geçicidir. Her hizmet için kapanma süresini kurumun geçmiş verisiyle belirleyin. Otuz günlük gözlem penceresi bazı kurumlarda anlamlı olabilir, bazı hizmetlerde daha uzun süre gerekir. Bu süre sektör geneli için sabit kabul edilmemelidir."
      ],
      table: {
        headers: ["Rapor", "Amaç", "Okuma biçimi"],
        rows: [
          ["Takvim dönemi raporu", "O ayki harcama ve hizmet yükünü görmek", "Nakit ve kapasite yönetimi"],
          ["Başvuru kohortu raporu", "Aynı başlangıç grubunun sonucunu görmek", "Kanal ve edinim verimliliği"],
          ["Açık kayıt raporu", "Henüz kapanmamış fırsatları görmek", "Takip ve belirsizlik yönetimi"]
        ]
      }
    },
    {
      heading: "İki kampanyayı nasıl karşılaştırırsınız?",
      paragraphs: [
        "Varsayımsal iki kampanyanın aynı gözlem süresi ve aynı hasta tanımıyla ölçüldüğünü düşünelim. Her ikisi 30.000 TL reklam harcasın. A kampanyası 100 başvuru ve 2 hasta, B kampanyası 50 başvuru ve 3 hasta getirsin.",
        "Yalnızca CPL'ye bakılırsa A daha iyi görünür. Gerçekleşen yeni hasta maliyetine bakıldığında B daha verimlidir. Ancak iki ve üç hasta gibi küçük sayılarla kesin bir performans hükmü verilmemelidir. Bu tablo yöntemi gösterir; kalıcı üstünlüğü kanıtlamaz.",
        "Karşılaştırmada hizmet kapsamı ve iletişim koşulları da eşit olmalıdır. A kampanyası farklı bir ülkeye, başka bir branşa veya sınırlı kapasite dönemine aitse sonuçları doğrudan eşitlemek yanıltıcı olabilir. Kanal raporunun yanında operasyon notları bulunmalıdır."
      ],
      table: {
        headers: ["Gösterge", "Kampanya A", "Kampanya B"],
        rows: [
          ["Reklam harcaması", "30.000 TL", "30.000 TL"],
          ["Tekil başvuru", "100", "50"],
          ["Medya CPL", "300 TL", "600 TL"],
          ["Gerçekleşen yeni hasta", "2", "3"],
          ["Medya bazlı hasta maliyeti", "15.000 TL", "10.000 TL"]
        ]
      }
    },
    {
      heading: "Hedef CAC nasıl belirlenir?",
      paragraphs: [
        "Hedef CAC için hizmet gelirine bakmak tek başına yeterli değildir. Hizmetin değişken giderleri, kurumun sürdürülebilirlik ihtiyacı ve edinim sonrası kalan katkı dikkate alınmalıdır. Yüksek ciro, yüksek kâr anlamına gelmeyebilir.",
        "Örnek bir hizmette tahsil edilen net gelirin 120.000 TL, değişken hizmet giderlerinin 70.000 TL olduğunu varsayalım. Edinim öncesi katkı 50.000 TL olur. Kurumun bu işlemden edinim gideri sonrası en az 25.000 TL katkı bırakmak istediğini düşünelim. Bu varsayımlarda hedef CAC üst sınırı 25.000 TL'dir.",
        "Bu örnek basitleştirilmiştir; vergi, genel gider, finansman, iade veya farklı risk kalemleri kurumun hesabına göre ayrıca ele alınabilir. Buradaki 25.000 TL evrensel kabul edilebilir hasta maliyeti değildir. Hizmet ekonomisi değiştiğinde eşik de değişir.",
        "Geçmiş hastaların tekrar hizmet kullanımı veya yönlendirme katkısı varsa ayrıca izlenebilir. Henüz gözlenmemiş gelecekteki gelirleri bugünkü bütçeyi haklı çıkarmak için kesin varsaymayın. Gerçekleşmiş sonuç ile öngörü aynı raporda ayrı gösterilmelidir."
      ]
    },
    {
      heading: "Hasta hedefinden reklam bütçesine geçiş",
      paragraphs: [
        "'Hedef hasta × hedef CAC' hesabı toplam edinim bütçesi için bir başlangıçtır. Bu sonuç doğrudan Google veya Meta bütçesi değildir. Reklam dışındaki giderler çıkarılmalı, kalan tutarın hedefi destekleyip desteklemediği dönüşüm verisiyle kontrol edilmelidir.",
        "Ayda 10 yeni hasta ve 25.000 TL hedef tam CAC varsayımıyla toplam edinim bütçesi 250.000 TL olur. Reklam dışı edinim giderleri 70.000 TL ise medya için kalan tutar 180.000 TL'dir. Bu ayrım, toplam bütçenin tamamının reklam paneline aktarılması gibi bir hatayı önler.",
        "Başvurudan gerçekleşen yeni hastaya oran yüzde 5 varsayılırsa, 10 hasta için yaklaşık 200 tekil başvuru gerekir. 180.000 TL medya bütçesiyle bu planın karşılayabildiği medya CPL 900 TL'dir. Dönüşüm oranı yüzde 2,5 olursa ihtiyaç 400 başvuruya çıkar ve karşılanabilir CPL 450 TL'ye düşer.",
        "Bu değişim, bütçe planının iletişim ve dönüşüm varsayımlarına ne kadar bağlı olduğunu gösterir. Hedefi sadece başvuru sayısı üzerinden büyütmek yerine <a href=\"/blog/saglik-turizminde-lead-kalitesi\">lead kalitesini ve takip sürecini</a> geliştirmek, aynı bütçenin verimliliğini etkileyebilir."
      ]
    },
    {
      heading: "CRM'de hangi alanlar bulunmalı ve hassas veri sınırları",
      paragraphs: [
        "Maliyet hesabı için ilk başvuru zamanı, kaynak, kampanya referansı, tekil kayıt anahtarı, aşama tarihleri ve gerçekleşen sonuç gerekir. Dil, ülke ve sorumlu kişi operasyonun açıklanmasına yardımcı olur. Bir kişinin farklı kanallardaki mesajları mümkün olduğunca tek ilişki kaydında birleştirilmelidir.",
        "İlk temas kaynağı ve son temas kaynağı ayrı tutulabilir. Hasta koordinatörünün kaydı farklı bir kaynağa taşıması, önceki temas bilgisini silmemelidir. Düzenli kayıt tutulmazsa kampanyanın hangi sonucu ürettiğini geriye dönük güvenilir biçimde hesaplamak zorlaşır.",
        "Hasta kayıtları ile kurumun B2B ajans teklif kayıtları aynı dönüşüm tanımını kullanmamalıdır. Overseas Marketing'in kurumsal formuna gelen klinik yöneticisi talebi ile bir kliniğe gelen tedavi başvurusu farklı ürünlerin ve farklı veri sorumluluklarının parçasıdır.",
        "Hassas sağlık hizmeti dönüşümlerini enhanced conversions'a yüklemek standart bir çözüm olarak önerilmemelidir. Google'ın müşteri verisi politikası bu kategoriler için kısıtlar içerir. Kurum içi CRM raporu ile reklam platformuna aktarılabilecek veri ayrı tasarlanmalıdır. Hashleme, verinin niteliğini veya paylaşım koşullarını tek başına ortadan kaldırmaz."
      ]
    },
    {
      heading: "Aylık maliyet raporu nasıl okunmalı?",
      paragraphs: [
        "Raporun ilk satırında kapsam ve gözlem dönemi bulunmalıdır. Ardından reklam harcaması, diğer edinim giderleri, tekil başvurular, nitelikli başvurular ve gerçekleşen yeni hasta sayısı gösterilir. Açık başvuruların sayısı ve olgunlaşma durumu da aynı ekranda görünmelidir.",
        "Kayıp nedenlerini maliyet tablosuyla birlikte inceleyin. Bir ülkede kapasite yüzünden görüşme yapılamadıysa sorun reklam talebinin zayıflığı olmayabilir. Başvuru maliyeti yükselmiş ama nitelikli başvuru oranı da artmışsa, toplam ekonomik sonuç olumlu olabilir.",
        "Kurum ve ajans aynı aşama tanımlarını kullanmalıdır. Ajansın 100 form gönderimi raporladığı yerde kurumun 70 tekil başvuru sayması mümkün olabilir. Bu fark önce tekilleştirme, spam ve kayıt kapsamıyla açıklanmalı; ardından performans kararı verilmelidir.",
        "Bu raporlama düzeni <a href=\"/hizmetler/saglik-turizmi-crm-yazilimi\">sağlık turizmi CRM sisteminin</a> ve <a href=\"/hizmetler/performans-pazarlama\">performans pazarlama yönetiminin</a> ortak çalışma alanıdır. Finans, iletişim ve reklam ekipleri farklı sayı sözlükleriyle çalışmamalıdır."
      ]
    },
    {
      heading: "Varsayımları üç senaryoda test edin",
      paragraphs: [
        "Tek bir bütçe hesabı, değişken dönüşüm oranlarını saklayabilir. Daha sağlam bir plan için düşük, orta ve yüksek gerçekleşme senaryosu hazırlayın. Bu senaryolar bir satış vaadi değildir; aynı medya maliyetinin farklı operasyonel sonuçlarla nasıl değişebileceğini göstermek içindir.",
        "Her senaryoda 100.000 TL medya harcaması, 40.000 TL diğer edinim gideri ve 100 tekil başvuru olduğunu varsayalım. Gerçekleşen yeni hasta sayısı sırasıyla 2, 4 ve 5 olsun. Medya CPL her üç durumda da 1.000 TL kalır; fakat hasta kazanım maliyetleri değişir.",
        "Bu tablo, aynı reklam başvuru maliyetinin farklı ekonomik sonuçlar üretebildiğini gösterir. Aradaki farkın nedeni mutlaka danışmanın performansı değildir. Başvurunun niteliği, hekim değerlendirmesi, hizmet kapasitesi, kişinin planı veya seyahat zamanı sonucu etkileyebilir. Yönetim kararı verilmeden önce aşama verisi incelenmelidir.",
        "Sabit giderlerin arttığı bir senaryo da ayrıca hesaplanabilir. Örneğin yeni bir dil ekibi için ek maliyet doğduğunda aynı medya bütçesiyle toplam CAC yükselir. Ancak bu ekip daha önce karşılanamayan başvuruların ilerlemesini sağlıyorsa ilerleyen dönemde farklı bir sonuç oluşabilir. Başlangıç yatırımını kalıcı giderle aynı şekilde yorumlamamak gerekir."
      ],
      table: {
        headers: ["Senaryo", "Gerçekleşen yeni hasta", "Medya bazlı hasta maliyeti", "Tam CAC"],
        rows: [
          ["Düşük gerçekleşme", "2", "50.000 TL", "70.000 TL"],
          ["Orta gerçekleşme", "4", "25.000 TL", "35.000 TL"],
          ["Yüksek gerçekleşme", "5", "20.000 TL", "28.000 TL"]
        ]
      }
    },
    {
      heading: "Kur ve tahsilat farkını görünür tutun",
      paragraphs: [
        "Gelirin yabancı para, giderin TL olduğu bir kurumda dönemler karşılaştırılırken kullanılan kur açıkça belirtilmelidir. Bir ayın maliyetiyle başka bir ayın gelirini farklı kur mantıklarıyla karşılaştırmak, gerçek performans değişimini gölgeleyebilir. Finans ekibi ortak bir raporlama para birimi ve dönüşüm yöntemi belirlemelidir.",
        "Teklif edilen tutar, tahsil edilen tutar ve hizmete ilişkin net gelir aynı şey değildir. Maliyet raporunu teklif toplamıyla ilişkilendirmek, gerçekleşmeyen veya değişen planları gelir gibi gösterebilir. Tahsilat, iade ve iptal bilgileri kurumun finans kayıtlarından doğrulanmalıdır.",
        "Ajans raporunda tedavi gelirinin henüz teyit edilmediği durumlar açıkça gösterilir. Kayıt aşaması 'plan teyit edildi' ise bu durum 'gelir gerçekleşti'ye çevrilmez. Böylece pazarlama raporu finansal sonucun yerine geçmeden, finans ekibinin doğruladığı verilerle ilişkilendirilir.",
        "Yeni bütçe önerisi bu belirsizlikleri içermelidir. Bekleyen kayıt sayısı yüksekse sonraki dönemin sonucunun değişebileceği belirtilir. Bütçeyi azaltma veya artırma kararı, yalnızca bir ayın geçici maliyet oranına dayanmaz. Olgunlaşmış veri, hizmet katkısı ve kapasite birlikte ele alınır."
      ]
    },
    {
      heading: "Sık yapılan hesaplama hataları",
      paragraphs: [
        "Yöneticilerin bütçe kararlarında en sık düştüğü yanılgılar şunlardır:"
      ],
      bulletPoints: [
        "WhatsApp düğmesi tıklamasını gerçekleşen hasta saymak.",
        "Aynı kişinin tekrar mesajlarını yeni başvuru olarak çoğaltmak.",
        "Medya bazlı hasta maliyetini tam CAC diye adlandırmak.",
        "Tedavi ayı ile başvuru ayını eşleştirmeden oran üretmek.",
        "Kapasite kaybını reklam başarısızlığı olarak yorumlamak.",
        "İade, iptal ve gerçekleşmeyen teyitleri sonuç tablosunda saklamak.",
        "Çok küçük örneklemden kesin bütçe kararı çıkarmak.",
        "Her kanala ortak maliyetin tamamını yüklemek.",
        "Hasta olmayan bir dönemde CAC değerini sıfır göstermek."
      ]
    }
  ],
  faqs: [
    {
      q: "Sağlık turizminde iyi CPL kaç TL'dir?",
      a: "Tek bir geçerli rakam yoktur. Ülke, hizmet, rekabet, başvuru tanımı ve dönüşüm oranı birlikte değerlendirilmelidir. CPL'nin kurum için kabul edilebilirliği hasta başına maliyet ve hizmet katkısıyla anlaşılır."
    },
    {
      q: "Reklam bütçesi CAC hesabında yeterli mi?",
      a: "Medya bazlı maliyet için yeterlidir. Tam CAC hesabı ise kurumun tanımladığı reklam dışı pazarlama ve edinim giderlerini de içerir."
    },
    {
      q: "SEO'dan gelen hasta ücretsiz midir?",
      a: "Tıklama için reklam ücreti ödenmeyebilir; ancak içerik, teknik çalışma ve ekip maliyeti vardır. Organik edinimi maliyetsiz kabul etmek, kanal ekonomisini eksik gösterir."
    },
    {
      q: "Rezervasyon maliyetiyle hasta maliyeti aynı mı?",
      a: "Hayır. Rezervasyon ara aşamadır. Gerçekleşen hizmete dönüşmeyen rezervasyonlar ayrıca izlenmelidir."
    },
    {
      q: "Bütçe ne zaman artırılmalı?",
      a: "Olgunlaşmış sonuçlar, katkı, iletişim kapasitesi ve kayıp nedenleri birlikte değerlendirilmelidir. Ucuz başvuru tek başına artırma gerekçesi değildir."
    }
  ],
  officialSources: [
    { title: "Google Ads — Customer data policies & Enhanced conversions", url: "https://support.google.com/adspolicy/answer/7475709?hl=en" },
    { title: "Google Analytics — Avoid sending PII", url: "https://support.google.com/analytics/answer/6366371?hl=en" }
  ],
  internalLinks: [
    { title: "Yurt Dışından Hasta Nasıl Bulunur?", url: "/blog/yurt-disindan-hasta-nasil-bulunur" },
    { title: "Lead Kalitesi ve CRM Rehberi", url: "/blog/saglik-turizminde-lead-kalitesi" },
    { title: "Performans Pazarlama Hizmeti", url: "/hizmetler/performans-pazarlama" },
    { title: "Sağlık Turizmi CRM Yazılımı", url: "/hizmetler/saglik-turizmi-crm-yazilimi" }
  ]
};

const article3 = {
  id: "K095",
  slug: "saglik-turizminde-lead-kalitesi",
  url: "/blog/saglik-turizminde-lead-kalitesi",
  category: "CRM & İletişim Operasyonu",
  title: "Sağlık Turizminde Lead Kalitesi Nasıl Artırılır? CRM ve İletişim Rehberi",
  h1: "Sağlık Turizminde Lead Kalitesi Nasıl Artırılır? CRM ve İletişim Rehberi",
  seoTitle: "Sağlık Turizminde Lead Kalitesi Nasıl Artırılır? | Overseas Marketing",
  metaDesc: "Sağlık turizminde lead kalitesini ülke, kampanya, iletişim ve CRM verileriyle artırın. Operasyonel skor ve takip örneklerini inceleyin.",
  primaryKeyword: "sağlık turizmi lead kalitesi",
  secondaryKeywords: [
    "nitelikli hasta başvurusu",
    "sağlık turizmi CRM",
    "lead scoring",
    "WhatsApp başvuru takibi",
    "hasta iletişim süreci"
  ],
  searchIntent: "Problem çözme + CRM araştırma",
  funnel: "MOFU",
  readTime: "16 dk okuma",
  publishedDate: "9 Ekim 2026",
  author: "Overseas Marketing Editör Ekibi",
  reviewer: "Uluslararası Hasta Koordinasyonu Masası",
  quickAnswer: "Sağlık turizmi lead kalitesi; başvuran kişinin telefonunun geçerli olmasından öte, hizmet kapsamı uyumu, iletişim kurulabilirliği, dil desteği ve bir sonraki adımın yönetilebilirliğidir. Operasyonel kalite ile sağlık profesyonelinin yetkisindeki tıbbi uygunluk kesinlikle birbirinden ayrılmalıdır.",
  sections: [
    {
      heading: "Giriş: Lead kalitesinin gerçek tanımı",
      paragraphs: [
        "Sağlık turizmi lead kalitesi, başvuran kişinin yalnızca telefon numarasının geçerli olması veya fiyat sormasıyla değerlendirilmez. Başvurunun kurumun hizmet kapsamıyla ilişkisi, iletişim kurulabilmesi, dil kapasitesi, bilgi ihtiyacı ve bir sonraki adımın yönetilebilirliği birlikte ele alınır. Sağlık açısından uygunluk ise yetkili sağlık ekibinin değerlendirmesidir; pazarlama skoru bu kararın yerine geçmez.",
        "Sağlık turizmi lead'i, bir kişinin sağlık hizmeti veya hizmete erişim süreci hakkında bilgi almak için kurumla iletişime geçmesidir. Nitelikli başvuru, kurumun tanımladığı operasyonel kriterlerle anlamlı bir sonraki adıma ilerleyebilen kayıttır. Bu tanım, satın alma garantisi veya tıbbi uygunluk onayı anlamına gelmez.",
        "Klinik ve hastane yöneticilerinin sık karşılaştığı sorun, reklam panelinde yüzlerce başvuru görülürken iletişim ekibinin bunların çok azıyla görüşebilmesidir. Bu farkın nedeni bazen yanlış hedefleme, bazen reklamın yarattığı beklenti, bazen de kurum içi takip düzenidir. Sorunu çözmek için bu ihtimaller ayrı ölçülmelidir."
      ]
    },
    {
      heading: "Lead kalitesi nerede başlar?",
      paragraphs: [
        "Kalite, başvuru formu doldurulduktan sonra ortaya çıkan bir özellik değildir. Kullanıcıya gösterilen mesaj, yönlendirildiği sayfa ve karşılaştığı iletişim süreci başvurunun niteliğini şekillendirir. Reklamda bir hizmet, sayfada başka bir kapsam anlatılıyorsa kişi yanlış beklentiyle iletişime geçebilir.",
        "Başvuru kalitesini artırmanın ilk adımı, kurumun gerçekten sunduğu hizmeti ve ilk görüşmenin amacını açıkça anlatmaktır. Bir bilgi talebinin otomatik olarak kesin fiyat veya tedavi planı üretmeyeceği anlaşılmalıdır. Hangi bilgilerin ne zaman ve kim tarafından değerlendirileceği de süreçte belirgin olmalıdır.",
        "İkinci adım, reklam ve içerik dilini iletişim ekibiyle eşleştirmektir. Danışmanların sık karşılaştığı yanlış anlamalar, yeni kreatif ve sayfa düzenlemelerine geri dönmelidir. Böylece reklam ekibi yalnızca daha çok başvuru toplamaya değil, daha doğru bilgiyle gelen başvuruları artırmaya çalışır.",
        "Üçüncü adım ölçümdür. Nitelikli başvuru tanımı yazılmadan 'kalite arttı' demek öznel bir değerlendirmedir. Aynı kriterlerin bütün kaynaklara uygulanması, ülkelerin ve kampanyaların karşılaştırılmasını mümkün kılar."
      ]
    },
    {
      heading: "Operasyonel kalite ile tıbbi uygunluğu ayırın",
      paragraphs: [
        "Operasyonel kalite, kurumun başvuruyla nasıl ilerleyebileceğini anlatır. İletişim kurulabiliyor mu, kurum bu hizmeti sunuyor mu, kullanılan dil destekleniyor mu, kişi görüşme yapmak istiyor mu gibi sorular bu kapsamdadır. Bu soruların cevapları iş akışına yardımcı olur.",
        "Tıbbi uygunluk ise kişinin sağlık durumu, talep ettiği hizmet ve değerlendirme bulgularıyla ilgilidir. Bu karar sağlık profesyonelinin yetki ve sorumluluk alanındadır. Bir kişinin yüksek ticari skor alması, tedaviye uygun olduğu anlamına gelmez.",
        "CRM'de bu iki alan ayrı tutulmalıdır. Operasyonel nitelik alanı iletişim ekibince tanımlı kriterlerle güncellenebilir. Tıbbi değerlendirme durumu ise yetkili sağlık ekibinin sürecini yansıtır. Otomatik skor tıbbi uygunluk durumunu değiştirmemelidir.",
        "Bu ayrım yapay zekâ kullanımında da önemlidir. Bir asistan ilk iletişimi alabilir, dil tespiti yapabilir ve görüşme isteğini kaydedebilir. Ancak kurumun belirlediği sınırlar içinde çalışmalı; kişiyi tanı koyarak veya uygunluk kararı vererek yönlendirmemelidir."
      ]
    },
    {
      heading: "Reklam hedeflemesini kalite verisiyle değerlendirin",
      paragraphs: [
        "Kampanya hedeflemesi ülke, dil ve arama niyetiyle tutarlı olmalıdır. Sayfaya gelen kişinin kurumun iletişim kapasitesi dışında bir dil kullanması veya sunulmayan hizmeti araştırması, ek iş yükü yaratabilir. Bu kayıtlar kayıp nedeni olarak işaretlenmelidir.",
        "Arama kampanyalarında gerçek sorgular düzenli incelenir. İlgili hizmet hakkında eğitim, iş veya malzeme arayan kullanıcılar ile hizmete erişim araştıran kişiler ayrılmalıdır. Bütün bilgi aramalarını değersiz saymak da yanlış olur; fakat her niyet aynı hedef sayfaya gönderilmemelidir.",
        "Sosyal kampanyalarda kreatifin verdiği bilgi özellikle önemlidir. Çok genel bir mesaj, kuruma uygun olmayan geniş bir talep oluşturabilir. Hizmetin kapsamını ve bilgi alma sürecini açık anlatan içerikler, kişilerin daha bilinçli başvurmasına yardımcı olabilir.",
        "Kampanya başına sadece CPL değil, iletişim kurulabilen başvuru oranı ve operasyonel nitelik oranı izlenmelidir. Bu yaklaşım <a href=\"/hizmetler/performans-pazarlama\">performans pazarlama yönetimini</a> CRM verisiyle ilişkilendirir. Kayıtlar tamamlanmadan reklam kalitesi hakkında kesin hüküm verilmemelidir."
      ]
    },
    {
      heading: "Landing page yanlış beklentiyi nasıl azaltır?",
      paragraphs: [
        "Sayfada hizmeti sunan kuruluş, hekim bilgisi, değerlendirme süreci ve iletişim seçenekleri net olmalıdır. Kullanıcı ne için başvurduğunu anlayabilmelidir. Belirsiz 'bilgi alın' çağrısı yerine ilk görüşmede hangi konuların ele alınacağı açıklanabilir.",
        "Başvuru sonrası adım da sayfada anlatılmalıdır. Mesajın kim tarafından değerlendirileceği, hangi dilde iletişim kurulabileceği ve ek bilgi gerekiyorsa bunun nasıl isteneceği bilinmelidir. Böylece otomatik cevap ile kişisel değerlendirme birbirine karışmaz.",
        "Form alanları ihtiyaç kadar tutulmalıdır. İletişim dili, yaşanılan ülke, genel hizmet ilgisi ve uygun görüşme zamanı gibi operasyonel bilgiler yönlendirmeyi kolaylaştırabilir. İlk pazarlama formunda tıbbi dosya, ayrıntılı sağlık geçmişi veya gereksiz özel bilgi istenmemelidir. Sağlık belgelerinin toplanması gerekiyorsa yetkili kurumun ayrı ve uygun süreci kullanılmalıdır.",
        "Formun uzunluğu tek başına kalite göstergesi değildir. Çok fazla soru, doğru başvuruların da terk etmesine yol açabilir. Hangi alanın gerçekten atama veya iletişim kararını iyileştirdiği ölçülmelidir. <a href=\"/hizmetler/web-sitesi-landing-page\">Landing page çalışması</a> bu nedenle tasarım, içerik ve iş akışı birlikte düşünülerek yapılmalıdır."
      ]
    },
    {
      heading: "Başvuruları tekilleştirin",
      paragraphs: [
        "Bir kişi Instagram reklamından form doldurup daha sonra WhatsApp'tan yazabilir. İki kanal olayı iki yeni kişi olarak sayılırsa hem CPL hem kalite oranı yanlış çıkar. CRM, aynı kişinin ilişkili başvurularını birleştirebilecek bir düzene sahip olmalıdır.",
        "Telefon veya e-posta eşleşmeleri birleştirme için yardımcı olabilir; ancak otomatik eşleşmeler dikkatle yönetilmelidir. Aile üyeleri aynı iletişim bilgisini kullanabilir. Yanlış birleştirmeleri düzeltme imkânı ve değişiklik kaydı bulunmalıdır.",
        "Tekilleştirme yapıldığında kanal olayları silinmemelidir. Bir kişinin ilk formu, sonraki mesajı ve görüşmesi aynı ilişki altında ayrı temaslar olarak kalabilir. Böylece kişi sayısı doğru tutulurken karar yolculuğu da görülebilir.",
        "Spam, bot, iş başvurusu ve satış amaçlı mesajlar ayrı kategorilerde işaretlenmelidir. Bu kayıtları sağlık hizmeti talebi gibi raporlamak iletişim ekibinin gerçek yükünü ve reklamın ilgili talep oranını belirsizleştirir."
      ]
    },
    {
      heading: "CRM aşamalarını açık kriterlerle tanımlayın",
      paragraphs: [
        "Bir danışmanın 'sıcak' dediği kayıt ile başka bir danışmanın aynı kelimeyle tanımladığı kayıt farklı olabilir. Öznel etiketler yerine gözlenebilir aşama kriterleri kullanılmalıdır. Aşama değişikliği bir duyguya değil, gerçekleşen olaya dayanmalıdır.",
        "<a href=\"/hizmetler/saglik-turizmi-crm-yazilimi\">Sağlık turizmi CRM sistemi</a>, bu aşamalar üzerinden görev ve hatırlatma üretmelidir. CRM'yi yalnızca yeni mesaj bildiren bir ekran olarak kullanmak, takip işinin önemli bölümünü yine kişilerin hafızasına bırakır."
      ],
      table: {
        headers: ["Aşama", "Giriş kriteri", "Sonraki işlem"],
        rows: [
          ["Yeni", "Tekil kayıt oluştu", "Dil ve sorumlu ataması"],
          ["İletişim denendi", "Tanımlı kanaldan yanıt gönderildi", "Uygun zamanda takip"],
          ["İletişim kuruldu", "İki yönlü iletişim gerçekleşti", "Bilgi ihtiyacını netleştirme"],
          ["Operasyonel nitelikli", "Hizmet, dil ve görüşme isteği kriterleri sağlandı", "Yetkili sürece yönlendirme"],
          ["Yetkili değerlendirme bekleniyor", "Gerekli yönlendirme tamamlandı", "Sağlık ekibi sürecini takip"],
          ["Görüşme gerçekleşti", "Planlanan görüşme tamamlandı", "Sonraki adımı kaydetme"],
          ["Plan teyit edildi", "Kurumun teyit kriteri sağlandı", "Koordinasyon"],
          ["Gerçekleşen hizmet", "Kurum hizmete erişimi doğruladı", "Takip süreci"],
          ["Kapanan kayıt", "Geçerli kapanış nedeni kaydedildi", "Raporlama"]
        ]
      }
    },
    {
      heading: "Lead scoring nasıl kurulmalı?",
      paragraphs: [
        "Lead scoring, başvuruların belirli operasyonel sinyallere göre önceliklendirilmesidir. Amaç, kimin sağlık hizmetine uygun olduğuna karar vermek değil, iletişim ekibinin hangi kayıtta hangi adımı atacağını düzenlemektir. Skor, insan değerlendirmesiyle ve açık durum bilgisiyle birlikte kullanılmalıdır.",
        "Aşağıdaki model bir başlangıç örneğidir. Gerçek sonuçlarla kalibre edilmemiştir; sektör standardı değildir. Hassas sağlık geçmişi, tahmini gelir, etnik köken veya benzeri kişisel çıkarımlar kullanılmaz.",
        "Yüksek skor, satın alma garantisi değildir. Düşük skor da kişinin değersiz olduğu anlamına gelmez. Dil desteği bulunmayan bir kayıt alternatif bir ekip ataması gerektirebilir; görüşme zamanı paylaşmayan bir kişi henüz bilgi aşamasında olabilir.",
        "Tıbbi risk veya aciliyet sinyali skorun dışında bir yönlendirme kuralıdır. Böyle bir kayıt ticari öncelik sırasına bırakılmamalı; kurumun sağlık ve acil durum prosedürüne göre yetkili kişiye iletilmelidir. Otomatik asistanın kendi başına klinik karar üretmesi bu modelin kapsamı değildir."
      ],
      table: {
        headers: ["Operasyonel sinyal", "Örnek puan", "Kullanım gerekçesi"],
        rows: [
          ["İki yönlü iletişim doğrulandı", "20", "Kayıtla ilerleme imkânı var"],
          ["Genel hizmet ilgisi kurum kapsamıyla eşleşiyor", "20", "Doğru birime yönlendirilebilir"],
          ["Talep edilen iletişim dili destekleniyor", "15", "Uygun danışman atanabilir"],
          ["Görüşme isteği açıkça belirtildi", "20", "Bir sonraki adım tanımlı"],
          ["Uygun görüşme zamanı paylaşıldı", "15", "Planlama yapılabilir"],
          ["Bir sonraki adıma ilişkin mesaj yanıtlandı", "10", "Takip süreci devam ediyor"],
          ["Toplam", "100", "Yalnızca iletişim önceliği göstergesi"]
        ]
      }
    },
    {
      heading: "Yanıt hızını doğru ölçün",
      paragraphs: [
        "Otomatik karşılama mesajı ile anlamlı insan yanıtı aynı gösterge değildir. Bir sistem birkaç saniyede 'mesajınızı aldık' diyebilir; fakat kişi sorusuna saatler sonra cevap alabilir. Her iki süre ayrı ölçülmelidir.",
        "Yanıt süresi için kayıt oluşma zamanı, otomatik yanıt zamanı, ilk nitelikli yanıt ve ilk iki yönlü iletişim zamanı tutulabilir. Çalışma saatleri ve hedef ülkenin yerel saati de raporun yorumlanmasına katkı sağlar. Gece gelen başvuruları gündüz kapasitesiyle aynı şekilde değerlendirmek eksik olabilir.",
        "Kurum kendi kapasitesine göre bir yanıt hedefi tanımlamalıdır. Evrensel bir dakika eşiği kullanmak yerine ekip düzeni, kullanılan dil ve açık çalışma saatleri dikkate alınır. Otomasyon, gerçek kapasitenin sunamadığı kesintisiz uzman değerlendirme vaadini oluşturmamalıdır.",
        "Yanıt hızının tek başına dönüşümü açıkladığı varsayılmamalıdır. Hızlı ama ilgisiz bir cevap, kişinin bilgi ihtiyacını karşılamaz. Süreyle birlikte cevap kalitesi, dil tutarlılığı ve bir sonraki adımın açıklığı değerlendirilmelidir."
      ]
    },
    {
      heading: "Takip akışını baskı oluşturmadan kurun",
      paragraphs: [
        "İlk mesaj, başvurunun alındığını ve sürecin nasıl ilerleyeceğini açıklamalıdır. Ardından uygun danışman kişinin sorduğu soruya cevap verir ve gerekiyorsa görüşme planlar. Aynı kişiye farklı ekiplerin tekrar tekrar genel mesaj göndermesi önlenmelidir.",
        "Takip mesajı, önceki konuşmaya dayanmalıdır. Bilgi isteyen kişiye hemen rezervasyon baskısı yapmak yerine eksik soruyu cevaplamak daha anlamlı olabilir. Görüşme planlayan kişiye de genel tanıtım mesajını yeniden göndermek yerine planı teyit etmek gerekir.",
        "İletişim tercihi ve iletişimi durdurma isteği süreçte dikkate alınmalıdır. Yanıt alınmayan her kayda sınırsız otomatik mesaj göndermek bir takip stratejisi değildir. Deneme sayısı, zaman aralığı ve kapanış kriteri kurum içinde tanımlanmalıdır.",
        "Görev tamamlandıktan sonra yeni işlem açıkça kaydedilmelidir. 'Arandı' notu tek başına yeterli olmaz. Görüşmenin sonucu, beklenen bilgi, sorumlu kişi ve sonraki işlem zamanı görünmelidir. Bu düzen, danışman değişse bile sürecin devam etmesini kolaylaştırır."
      ]
    },
    {
      heading: "Kayıp nedenlerini kalite analizine dönüştürün",
      paragraphs: [
        "'İlgisiz' veya 'satış olmadı' gibi genel etiketler, iyileştirme için yeterli bilgi vermez. Kayıp nedenleri kurumun değiştirebileceği ve değiştiremeyeceği etkenleri ayırmalıdır. Böylece reklam ekibi ile iletişim ekibi aynı sorunu farklı biçimde tarif etmez.",
        "Kayıp nedeni kişiye ilişkin küçümseyici bir etiket olmamalıdır. Örneğin 'bütçesi yok' yerine fiyat beklentisi veya zamanlama uyuşmazlığı gibi gözlenen durumlar tanımlanabilir. Tahmini alım gücü üzerinden insanlara değer biçen bir sistem kurulmaz.",
        "Her neden için aksiyon sahibi belirlenmelidir. Sunulmayan hizmet başvuruları artıyorsa reklam ve içerik incelenir. Dil kaynaklı kayıp artıyorsa ekip veya hedefleme düzenlenir. Kapasite kaynaklı kayıp varsa daha fazla bütçe harcamak sorunu büyütebilir."
      ],
      table: {
        headers: ["Kayıp nedeni", "İncelenecek alan"],
        rows: [
          ["Sunulmayan hizmet", "Sorgu, kreatif ve hizmet kapsamı"],
          ["Desteklenmeyen dil", "Hedefleme ve ekip kapasitesi"],
          ["İletişim kurulamadı", "İletişim bilgisi, saat ve takip denemeleri"],
          ["Yanlış süreç beklentisi", "Reklam ve sayfa açıklaması"],
          ["Görüşme kapasitesi yok", "Operasyon ve bütçe zamanlaması"],
          ["Bilgi eksik kaldı", "İlk yanıt ve değerlendirme akışı"],
          ["Zamanlama ertelendi", "Uygun takip tarihi"],
          ["Yetkili değerlendirme sonucu ilerlenmedi", "Sağlık ekibinin süreci; reklam hedefi olarak kullanılmaz"]
        ]
      }
    },
    {
      heading: "Küçük bir kalite deneyi nasıl yapılır?",
      paragraphs: [
        "Önce tek bir hipotez yazın. Örneğin 'İlk sayfa bölümünde değerlendirme sürecini açıklamak, yanlış beklenti nedeniyle kapanan kayıt oranını azaltabilir.' Bu hipotez hem değişikliği hem beklenen etkiyi tarif eder.",
        "Aynı anda hedeflemeyi, formu, reklam metnini ve iletişim ekibini değiştirmek hangi etkenin sonucu etkilediğini belirsizleştirir. Mümkün olduğunca benzer koşullarda bir değişiklik test edilir. Test dönemi, başvuru sayısı ve açık kayıtlar raporda belirtilir.",
        "Örnek olarak bir dönemde 100 tekil başvurunun 20'sinin operasyonel nitelikli olduğunu, sonraki benzer dönemde 80 başvurunun 24'ünün nitelikli olduğunu varsayalım. Oran yüzde 20'den yüzde 30'a çıkar; nitelikli başvuru sayısı da 20'den 24'e yükselir. Ham başvurunun azalması bu senaryoda tek başına olumsuzluk değildir.",
        "Bu rakamlar varsayımsaldır ve nedenselliği kanıtlamaz. Mevsim, kapasite, ülke karması ve karar süresi sonucu etkileyebilir. Deneyin ekonomik etkisi <a href=\"/blog/saglik-turizminde-hasta-kazanma-maliyeti\">hasta kazanma maliyeti hesabıyla</a> birlikte okunmalıdır. Kalite artışı yüksek bir toplam giderle geliyorsa katkı hesabı ayrıca gerekir."
      ]
    },
    {
      heading: "Pazarlama ve koordinasyon ekipleri nasıl çalışmalı?",
      paragraphs: [
        "Ortak bir haftalık değerlendirme, yeni başvuruları, açık kayıtları ve kayıp nedenlerini incelemelidir. Toplantının amacı hangi ekibin suçlu olduğunu bulmak değil, sistemin hangi aşamasının düzenleneceğini belirlemektir. Her değişiklik bir veri veya gözleme dayanmalıdır.",
        "Reklam ekibi kampanya ve sorgu bağlamını, koordinasyon ekibi iletişim ve beklenti bağlamını getirir. Kurum yöneticisi kapasite ve hizmet kısıtlarını açıklar. Sağlık ekibi tıbbi değerlendirme sürecinin işleyişine ilişkin gerekli operasyon bilgisini paylaşır; özel hasta ayrıntıları genel pazarlama toplantısına taşınmaz.",
        "Toplantı sonunda en fazla birkaç net aksiyon belirlemek yeterlidir. Yanlış hizmet sorgularını düzeltmek, desteklenmeyen dil trafiğini azaltmak veya form sonrası atamayı iyileştirmek gibi işler bir sorumluya ve tarihe bağlanır. Sonraki değerlendirmede değişikliğin etkisi aynı kriterlerle ölçülür.",
        "Bu çalışma <a href=\"/blog/yurt-disindan-hasta-nasil-bulunur\">uluslararası hasta kazanım sisteminin</a> düzenli öğrenme döngüsüdür. Kaliteyi yalnızca reklam platformunun çözeceği bir mesele gibi görmek, kurumun süreç içindeki etkisini gözden kaçırır."
      ]
    },
    {
      heading: "Kalite raporunda sayılar kadar tanımlar da bulunmalı",
      paragraphs: [
        "Bir kalite panosu, kaç başvurunun geldiğini gösterirken bu sayıların nasıl üretildiğini de açıklamalıdır. 'İletişim kuruldu' iki yönlü yazışma anlamına geliyorsa bütün danışmanlar aynı kuralı uygulamalıdır. Otomatik mesaj gönderilen kayıtları bu aşamaya almak, iletişim başarısını olduğundan yüksek gösterir.",
        "Panelde toplam kayıt, tekil başvuru, spam dışı başvuru, iki yönlü iletişim ve operasyonel nitelik ayrı satırlarda tutulabilir. Bu ayrım, ham verinin hangi adımlarla yönetilebilir bir talebe dönüştüğünü gösterir. Bir aşamadaki oran hesaplanırken paydanın önceki aşama mı yoksa bütün başvurular mı olduğu yazılmalıdır.",
        "Örneğin 100 tekil başvurunun 60'ıyla iletişim kurulduğunu, bunların 30'unun operasyonel kriterleri karşıladığını varsayalım. Bütün başvurulara göre nitelik oranı yüzde 30'dur. İletişim kurulan başvurulara göre oran ise yüzde 50'dir. İki hesap doğrudur fakat farklı sorulara cevap verir. Payda belirtilmeden 'kalite yüzde 50' ifadesi raporu yanıltıcı hâle getirebilir.",
        "Danışman karşılaştırmalarında atanan kayıtların koşulları da incelenmelidir. Bir ekip gündüz ve desteklenen dilde gelen başvuruları, başka bir ekip gece ve zor ulaşılan kayıtları yönetiyorsa oranları doğrudan sıralamak adil veya açıklayıcı olmayabilir. Atama kuralları raporda görünür olmalıdır."
      ]
    },
    {
      heading: "Skoru gerçek sonuçlarla gözden geçirin",
      paragraphs: [
        "Başlangıçta verilen puanlar bir çalışma hipotezidir. Belirli aralıklarla yüksek ve düşük skor gruplarının hangi aşamalara ilerlediği kontrol edilir. Yüksek skorla ilerlemeyen kayıtlar varsa sinyallerin gerçekten işe yarayıp yaramadığı incelenir. Bir alanı paylaşan kişilere otomatik yüksek puan vermek, gereksiz form doldurmalarını ödüllendiren bir modele dönüşmemelidir.",
        "Skor güncellendiğinde eski sonuçların hangi modelle üretildiği kaydedilmelidir. Yeni puanlama geçmiş kayıtları sessizce değiştirirse dönemler arasındaki kalite farkı anlaşılmaz. Model sürümü, kural değişikliği ve değişiklik tarihi tutulmalıdır.",
        "Skor ayrıca insan devrini kolaylaştırmalıdır. Danışman puanın neden oluştuğunu görebilmeli, yanlış eşleşmeyi düzeltebilmeli ve gerekçesini kaydedebilmelidir. Açıklanamayan tek bir sayı yerine sinyal listesi, mevcut aşama ve sonraki görev birlikte gösterildiğinde sistem günlük çalışmada daha yararlı olur."
      ]
    },
    {
      heading: "Uygulama kontrol listesi",
      paragraphs: [
        "Operasyonel kaliteyi sürdürülebilir kılmak için kontrol edilmesi gereken kritik maddeler:"
      ],
      bulletPoints: [
        "Nitelikli başvuru tanımı gözlenebilir kriterlerle yazıldı.",
        "Tekil kişi ile kanal olayı ayrıldı.",
        "Her kayıtta sorumlu ve sonraki işlem zamanı var.",
        "Otomatik yanıt ile nitelikli yanıt ayrı ölçülüyor.",
        "Sağlık değerlendirmesi operasyonel skordan ayrı tutuluyor.",
        "Kayıp nedenleri için sorumlu ekip ve düzeltme adımı belirleniyor.",
        "Hasta verileri reklam ve analitik sistemlerine kontrolsüz gönderilmiyor.",
        "Kalite oranı, nitelikli başvuru sayısı ve edinim maliyeti birlikte izleniyor."
      ]
    }
  ],
  faqs: [
    {
      q: "Çok sayıda lead gelmesi iyi performans anlamına gelir mi?",
      a: "Tek başına gelmez. Tekil ve ilgili başvuru sayısı, iletişim kurulabilmesi, görüşme ilerlemesi ve gerçekleşen sonuç birlikte değerlendirilmelidir."
    },
    {
      q: "Formu uzatmak kaliteyi artırır mı?",
      a: "Her zaman artırmaz. Gereksiz alanlar doğru kişilerin de başvurmaktan vazgeçmesine neden olabilir. Her sorunun operasyonel faydası test edilmelidir."
    },
    {
      q: "Lead scoring tedaviye uygunluğu belirleyebilir mi?",
      a: "Hayır. Operasyonel skor iletişim önceliği için kullanılır. Sağlık açısından uygunluk yetkili sağlık profesyonelinin değerlendirmesidir."
    },
    {
      q: "Fiyat soran başvuru düşük kaliteli midir?",
      a: "Hayır. Fiyat, karar sürecinin doğal bir sorusu olabilir. Başvurunun kapsamı ve ihtiyacı anlaşılmadan düşük kalite etiketi kullanılmamalıdır."
    },
    {
      q: "Yapay zekâ asistanı CRM takibine yardımcı olabilir mi?",
      a: "Dil yönlendirmesi, ilk karşılama, görev oluşturma ve görüşme isteği kaydı gibi tanımlı işlerde yardımcı olabilir. Yetki sınırları, insan devri ve veri akışı açık olmalıdır."
    }
  ],
  officialSources: [
    { title: "Google Analytics — Avoid sending PII", url: "https://support.google.com/analytics/answer/6366371?hl=en" },
    { title: "Google Ads — Customer data policies", url: "https://support.google.com/adspolicy/answer/7475709?hl=en" }
  ],
  internalLinks: [
    { title: "Yurt Dışından Hasta Nasıl Bulunur?", url: "/blog/yurt-disindan-hasta-nasil-bulunur" },
    { title: "Hasta Kazanma Maliyeti Rehberi", url: "/blog/saglik-turizminde-hasta-kazanma-maliyeti" },
    { title: "Sağlık Turizmi CRM Yazılımı", url: "/hizmetler/saglik-turizmi-crm-yazilimi" },
    { title: "Performans Pazarlama Hizmeti", url: "/hizmetler/performans-pazarlama" },
    { title: "Web Sitesi ve Landing Page", url: "/hizmetler/web-sitesi-landing-page" }
  ]
};

// 1. Read existing JSON
const existingArticles = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
console.log(`Mevcut JSON makale sayısı: ${existingArticles.length}`);

// Replace or add K087, K091, K095
const newItems = [article1, article2, article3];
const updatedArticles = existingArticles.map(art => {
  if (art.id === 'K087') return article1;
  if (art.id === 'K091') return article2;
  if (art.id === 'K095') return article3;
  return art;
});

// Also check if any of newItems was not in existing
newItems.forEach(item => {
  if (!updatedArticles.some(a => a.id === item.id)) {
    updatedArticles.push(item);
  }
});

// Update internal links across existing articles if they linked to /blog/saglik-turizminde-lead-kalitesi-nasil-artirilir
updatedArticles.forEach(art => {
  if (art.internalLinks) {
    art.internalLinks.forEach(link => {
      if (link.url === '/blog/saglik-turizminde-lead-kalitesi-nasil-artirilir') {
        link.url = '/blog/saglik-turizminde-lead-kalitesi';
      }
    });
  }
});

// Save JSON
fs.writeFileSync(jsonPath, JSON.stringify(updatedArticles, null, 2), 'utf-8');
console.log(`✅ ${jsonPath} güncellendi.`);

// Update TS
const tsHeader = `export interface SeoArticleSection {
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

export const SEO_ARTICLES: SeoArticleItem[] = ${JSON.stringify(updatedArticles, null, 2)};
`;

fs.writeFileSync(tsPath, tsHeader, 'utf-8');
console.log(`✅ ${tsPath} güncellendi.`);
