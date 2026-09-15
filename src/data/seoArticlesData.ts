export interface SeoArticleSection {
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
  id: string; // e.g. K049
  slug: string; // e.g. 'saglik-turizmi-ajansi'
  url: string; // e.g. '/saglik-turizmi-ajansi'
  category: string;
  title: string;
  h1: string;
  seoTitle: string;
  metaDesc: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  funnel: 'BOFU' | 'MOFU';
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

export const SEO_ARTICLES: SeoArticleItem[] = [
  // 1. K049 — Sağlık Turizmi Ajansı Ne İş Yapar?
  {
    id: 'K049',
    slug: 'saglik-turizmi-ajansi',
    url: '/saglik-turizmi-ajansi',
    category: 'Ajans, Reklam & Dijital Büyüme',
    title: 'Sağlık Turizmi Ajansı Ne İş Yapar? Klinik ve Hastaneler İçin Rehber',
    h1: 'Sağlık Turizmi Ajansı Ne İş Yapar?',
    seoTitle: 'Sağlık Turizmi Ajansı Ne İş Yapar? | Overseas Marketing',
    metaDesc: 'Sağlık turizmi ajansı; klinik ve hastanelerin yurt dışından hasta kazanması için çok dilli reklam, uluslararası SEO, GEO, CRM ve web altyapısı kuran uzman kuruluştur.',
    primaryKeyword: 'sağlık turizmi ajansı',
    secondaryKeywords: ['sağlık turizmi reklam', 'sağlık turizmi danışmanlık', 'sağlık turizmi web sitesi'],
    searchIntent: 'Ticari Araştırma',
    funnel: 'BOFU',
    readTime: '6 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Strateji Ekibi',
    reviewer: 'Medikal Pazarlama Kurulu',
    quickAnswer: 'Sağlık turizmi ajansı; hastane, klinik, hekim ve aracı kuruluşların yurt dışı hedef pazarlardan (İngiltere, DACH, Avrupa vb.) nitelikli hasta başvurusu edinmesini sağlayan, çok dilli dijital pazarlama, Google/Meta reklam yönetimi, uluslararası SEO/GEO ve WhatsApp CRM altyapısını uçtan uca kurup yöneten uzman kuruluştur.',
    sections: [
      {
        heading: 'Klasik Reklam Ajansı ile Sağlık Turizmi Ajansı Arasındaki Farklar',
        paragraphs: [
          'Geleneksel reklam ajansları genel tüketici ürünlerine odaklanırken, sağlık turizmi ajansları medikal etik, uluslararası hasta psikolojisi ve Sağlık Bakanlığı tanıtım mevzuatına göre çalışmak zorundadır.',
          'Uluslararası hasta adayları kliniğinize gelmeden önce ortalama 3 ila 8 hafta boyunca araştırma yapar. Bu süreçte güvenilirlik (E-E-A-T), hekim uzmanlığı ve doğru dilde iletişim hayati önem taşır.'
        ],
        table: {
          headers: ['Hizmet Parametresi', 'Genel Reklam Ajansı', 'Sağlık Turizmi Ajansı'],
          rows: [
            ['Hedef Kitle', 'Yurtiçi genel tüketici', 'Yurtdışı tedavi arayan yabancı hasta'],
            ['Mevzuat Bilgisi', 'Genel tüketici kanunu', 'Uluslararası Sağlık Turizmi Yönetmeliği & KVKK/GDPR'],
            ['Dil & Lokalizasyon', 'Tek dilli (Türkçe)', 'Çok dilli (İngilizce, Almanca, Fransızca, Felemenkçe)'],
            ['Dönüşüm Takibi', 'Site ziyareti / Tıklama', 'Nitelikli WhatsApp/Form başvurusu ve vaka randevusu'],
            ['Teknoloji Entegrasyonu', 'Temel Google Analytics', 'Çok dilli CRM, AI Call Agent, Çağrı Kaydı']
          ]
        }
      },
      {
        heading: 'Bir Sağlık Turizmi Ajansının Sunduğu Temel Hizmetler',
        paragraphs: [
          'Kliniklerin sürdürülebilir biçimde büyümesini sağlayan sağlık turizmi ajansı hizmetleri 4 ana sütunda toplanır:'
        ],
        bulletPoints: [
          'Performans Pazarlama & Çok Dilli Reklam Yönetimi: İngiltere, DACH ve hedef pazarlarda arama niyeti yüksek Google Ads ve cerrahi güven odaklı Meta reklam kampanyaları.',
          'Uluslararası SEO & GEO (Yapay Zekâ Görünürlüğü): Kliniğinizin hem Google arama sonuçlarında hem ChatGPT, Perplexity ve Google AI Overviews gibi yapay zekâ motorlarında referans gösterilmesi.',
          'Dönüşüm Odaklı Web Sitesi & Landing Page: 3 saniyenin altında açılan, güven ve vaka kanıtlarını öne çıkaran, çok dilli mobil açılış sayfaları.',
          'Hasta İletişimi & WhatsApp CRM Altyapısı: Gelen başvuruların anında dillerine göre temsilcilere atanması ve AI destekli hızlı yanıt sistemleri.'
        ]
      },
      {
        heading: 'Mevzuat ve Etik Çerçeve',
        paragraphs: [
          'Sağlık turizmi reklamlarında kanıtsız başarı garantisi, yanıltıcı indirim veya aldatıcı öncesi/sonrası görseller kullanılamaz. Profesyonel bir sağlık turizmi ajansı, reklamları Türkiye ve hedef ülke mevzuatına tam uyumlu kurgular.'
        ],
        callout: {
          title: 'Mevzuat Notu',
          text: 'Sağlık kuruluşlarının tanıtım faaliyetleri 29 Temmuz 2023 tarihli Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Faaliyetleri Hakkında Yönetmelik hükümleri çerçevesinde yürütülmelidir.',
          type: 'info'
        }
      }
    ],
    faqs: [
      {
        q: 'Sağlık turizmi ajansı seçerken nelere dikkat edilmelidir?',
        a: 'Ajansın medikal terminolojiye hâkimiyeti, daha önce sağlık turizminde elde ettiği vaka deneyimleri, çok dilli içerik üretme kapasitesi ve mevzuat bilgisi sorgulanmalıdır.'
      },
      {
        q: 'Sağlık turizmi reklam ajansı doğrudan hasta garantisi verebilir mi?',
        a: 'Hayır. Sağlık mevzuatı gereği hiçbir etik ajans garanti hasta sayısı vadedemez; hedef pazarlardan yüksek kaliteli, nitelikli hasta talebi (lead) oluşturmayı ve dönüşüm sürecini optimize etmeyi hedefler.'
      },
      {
        q: 'Yurt dışı reklamlarında hangi diller tercih edilmeli?',
        a: 'Hedef pazara göre değişir. İngiltere için İngilizce; Almanya, Avusturya ve İsviçre için profesyonel Almanca; Fransa ve Benelüks için Fransızca ve Felemenkçe kullanılmalıdır.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye Resmî Portalı', url: 'https://healthturkiye.gov.tr/tr/homepage' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Reklamı Nasıl Yapılır?', url: '/saglik-turizmi-reklam' },
      { title: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı?', url: '/saglik-turizmi-web-sitesi' },
      { title: 'Sağlık Turizmi Yetki Belgesi Nedir?', url: '/saglik-turizmi-yetki-belgesi' },
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' }
    ]
  },

  // 2. K050 — Sağlık Turizmi Reklamı Nasıl Yapılır?
  {
    id: 'K050',
    slug: 'saglik-turizmi-reklam',
    url: '/saglik-turizmi-reklam',
    category: 'Ajans, Reklam & Dijital Büyüme',
    title: 'Sağlık Turizmi Reklamı Nasıl Yapılır? Strateji, Kanallar ve Mevzuat',
    h1: 'Sağlık Turizmi Reklamı Nasıl Yapılır?',
    seoTitle: 'Sağlık Turizmi Reklamı Nasıl Yapılır? | Overseas Marketing',
    metaDesc: 'Sağlık turizmi reklamı nasıl yapılır? Google Ads, Meta Ads hedeflemeleri, çok dilli açılış sayfaları, mevzuat kuralları ve dönüşüm optimizasyonu adımları.',
    primaryKeyword: 'sağlık turizmi reklam',
    secondaryKeywords: ['sağlık turizmi ajansı', 'sağlık turizmi hukuku', 'sağlık turizmi web sitesi'],
    searchIntent: 'Ticari',
    funnel: 'BOFU',
    readTime: '7 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Performans Ekibi',
    reviewer: 'Medikal Pazarlama Kurulu',
    quickAnswer: 'Sağlık turizmi reklamı; hedef ülkenin dilinde arama niyeti yüksek anahtar kelimelerle Google Ads kampanyaları kurgulamak, cerrahi güven ve hekim otoritesini pekiştiren video kreatiflerle Meta Ads yürütmek ve bu trafiği 3 saniyenin altında açılan yerelleştirilmiş landing page’lere yönlendirip WhatsApp CRM ile dönüştürmek suretiyle yapılır.',
    sections: [
      {
        heading: 'Sağlık Turizmi Reklamcılığının 5 Temel Aşaması',
        paragraphs: [
          'Başarılı bir sağlık turizmi reklam kampanyası yalnızca reklam paneline bütçe yüklemek değildir. Stratejik hazırlık ve operasyonel entegrasyon gerekir:'
        ],
        bulletPoints: [
          '1. Pazar ve Tedavi Odaklılığı: Her ülkeye her tedaviyi sunmak yerine (örn. İngiltere saç ekimi ve dental, Almanya göz ve ortopedi) pazar-tedavi eşleşmesi yapılır.',
          '2. Çok Dilli ve Kültürel Yerelleştirme: Metinler doğrudan tercüme edilmez; hedef ülkedeki hastanın sağlık sistemi kaygıları (NHS bekleme süreleri, maliyet farkı) ele alınır.',
          '3. Dönüşüm Odaklı Açılış Sayfası (Landing Page): Reklam tıklaması genel ana sayfaya değil, aranan tedaviye özel akredite bilgi içeren hızlı sayfaya yönlendirilir.',
          '4. Hızlı Hasta Karşılama (Lead Time): Reklamdan gelen WhatsApp veya form başvurusuna ilk 5 dakika içinde ana dilinde yanıt verilir.',
          '5. Düzenli Veri Analitiği: Tıklama başına maliyet (CPC) değil, nitelikli hasta randevusu başına maliyet (CPA) optimize edilir.'
        ]
      },
      {
        heading: 'Kanal Karşılaştırması: Google Ads vs. Meta Reklamları',
        paragraphs: [
          'Farklı kanallar hasta yolculuğunun (patient journey) farklı aşamalarına hitap eder:'
        ],
        table: {
          headers: ['Reklam Kanalı', 'Arama Niyeti', 'En Uygun Tedaviler', 'Temel Metrik'],
          rows: [
            ['Google Ads (Arama Ağı)', 'Yüksek (Aktif arayan hasta)', 'Diş İmplantı, Saç Ekimi, Obezite Cerrahisi', 'Tıklama Başı Maliyet & Form Oranı'],
            ['Meta Ads (Instagram & FB)', 'Orta (Farkındalık & Güven)', 'Estetik Cerrahi, Gülüş Tasarımı, Rinoplasti', 'Video İzleme & WhatsApp Başvurusu'],
            ['TikTok Ads', 'Erken Aşama (Keşif)', 'Saç Ekimi, Medikal Estetik', 'Etkileşim & Genç Hasta İlgisi'],
            ['SEO & GEO Organik', 'Kalıcı Otorite', 'Tüm Branşlar & Doktor Kişisel Markası', 'Sıfır Tıklama Maliyetiyle Güven']
          ]
        }
      }
    ],
    faqs: [
      {
        q: 'Sağlık turizmi reklamlarında hangi ifadelere izin verilmez?',
        a: '“Kesin sonuç garantili”, “en iyi klinik”, “sıfır risk” gibi yanıltıcı veya bilimsel kanıta dayanmayan süperlatif ifadelerin kullanımı hem Google politikalarına hem mevzuata aykırıdır.'
      },
      {
        q: 'Sağlık turizmi reklam bütçesi nasıl belirlenir?',
        a: 'Hedeflenen ülke, branş rekabeti ve kliniğin aylık operasyon kapasitesine göre belirlenir. Genellikle İngiltere ve Almanya pazarlarında test bütçesiyle başlanıp karlı kampanyalar ölçeklendirilir.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı Mevzuat', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye Portalı', url: 'https://healthturkiye.gov.tr/tr/homepage' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' },
      { title: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı?', url: '/saglik-turizmi-web-sitesi' },
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' }
    ]
  },

  // 3. K051 — Sağlık Turizmi Web Sitesi Nasıl Olmalı?
  {
    id: 'K051',
    slug: 'saglik-turizmi-web-sitesi',
    url: '/saglik-turizmi-web-sitesi',
    category: 'Ajans, Reklam & Dijital Büyüme',
    title: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı? Dönüşüm ve Hız Standartları',
    h1: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı?',
    seoTitle: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı? | Overseas Marketing',
    metaDesc: 'Sağlık turizmi web sitesi tasarımı nasıl olmalıdır? Çok dilli altyapı, mobil hız, hekim otoritesi, KVKK/GDPR uyumu ve yabancı hastayı randevuya dönüştüren UX rehberi.',
    primaryKeyword: 'sağlık turizmi web sitesi',
    secondaryKeywords: ['sağlık turizmi ajansı', 'sağlık turizmi reklam', 'sağlık turizmi fiyat listesi'],
    searchIntent: 'Ticari',
    funnel: 'BOFU',
    readTime: '6 dk okuma',
    publishedDate: '2026',
    author: 'Overseas UI/UX Ekibi',
    reviewer: 'Medikal Pazarlama Kurulu',
    quickAnswer: 'Sağlık turizmi web sitesi; 3 saniyenin altında yüklenen, mobil öncelikli, hedef ülkelerin ana dilinde profesyonelce yerelleştirilmiş, hekimin uzmanlık ve akreditasyon belgelerini şeffafça sunan, net WhatsApp/teklif formlarıyla hastayı tereddütsüz iletişime yönlendiren güven odaklı bir dijital vitrindir.',
    sections: [
      {
        heading: 'Yabancı Hastayı İkna Eden 6 Kritik Web Sitesi Kriteri',
        paragraphs: [
          'Yurt dışından gelen hastalar için web siteniz, kliniğinizin fiziksel kapısından farksızdır. İlk izlenim 5 saniye içinde güven veya güvensizlik yaratır.'
        ],
        bulletPoints: [
          'Hız ve Core Web Vitals: Sayfanın yurt dışı CDN sunucularından 2.5 saniyenin altında açılması, terk oranlarını yarı yarıya düşürür.',
          'Hekim Yetkinliği & E-E-A-T: Kliniğin soyut bir şirket gibi değil, operasyonu gerçekleştirecek hekimin diplomaları, uzmanlık alanı ve bilimsel geçmişiyle tanıtılması.',
          'Şeffaf Tedavi & Süreç Anlatımı: Hastanın ülkesinden çıkışından ameliyat gününe ve eve dönüşüne kadar olan 4 adımlı hasta yolculuğunun net görselleştirilmesi.',
          'Çok Dilli Profesyonel Metinler: Makine çevirisi (Google Translate eklentisi) yerine, medikal terminolojiye ve hedef pazarın kültürüne uygun yerel içerik.',
          'KVKK & GDPR Standart Formlar: Hastaların tıbbi verilerini paylaşırken endişe duymaması için veri güvenliği sertifikaları ve gizlilik politikaları.',
          'Kolay İletişim & WhatsApp Entegrasyonu: Her sayfada hastayı yormadan hekim ön değerlendirmesi veya tedavi planı talep etmesini sağlayan akıllı butonlar.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Web sitesinde fiyat listesi paylaşılmalı mı?',
        a: 'Sağlık mevzuatı ve tedavi kişiye özel planlandığı için doğrudan net fiyat yerine, tedavi paketinin neleri kapsadığını (transfer, konaklama, kontrol) belirten tahmini fiyat aralıkları veya ücretsiz teklif butonu kullanılmalıdır.'
      },
      {
        q: 'Otomatik çeviri eklentileri (Google Translate) sağlık turizmi için yeterli mi?',
        a: 'Kesinlikle yetersizdir. Tıbbi terimlerin yanlış çevrilmesi hastada güven kaybına yol açar ve uluslararası SEO sıralamalarında cezalandırılabilir. İçerikler profesyonel tıp çevirmenlerince hazırlanmalıdır.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye Akredite Tesisler', url: 'https://healthturkiye.gov.tr/tr/hospitals-list' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' },
      { title: 'Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır?', url: '/saglik-turizmi-fiyat-listesi' },
      { title: 'Sağlık Turizmi Yetki Belgesi Şartları', url: '/saglik-turizmi-yetki-belgesi/sartlari' }
    ]
  },

  // 4. K052 — Sağlık Turizmi Firmaları İçin SEO ve GEO Stratejisi
  {
    id: 'K052',
    slug: 'saglik-turizmi/seo-geo-stratejisi',
    url: '/saglik-turizmi/seo-geo-stratejisi',
    category: 'Ajans, Reklam & Dijital Büyüme',
    title: 'Sağlık Turizmi İçin SEO ve GEO Stratejisi: Yapay Zekâ Aramalarında Öne Çıkın',
    h1: 'Sağlık Turizmi Firmaları İçin SEO ve GEO Stratejisi',
    seoTitle: 'Sağlık Turizmi SEO ve GEO Stratejisi | Overseas Marketing',
    metaDesc: 'Sağlık turizminde SEO ve GEO (Generative Engine Optimization). ChatGPT, Perplexity ve Google AI aramalarında kliniğinizi tavsiye edilen kaynak yapma rehberi.',
    primaryKeyword: 'sağlık turizmi ajansı',
    secondaryKeywords: ['sağlık turizmi web sitesi', 'sağlık turizmi reklam', 'sağlık turizmi firmaları'],
    searchIntent: 'Ticari Araştırma',
    funnel: 'BOFU',
    readTime: '8 dk okuma',
    publishedDate: '2026',
    author: 'Overseas SEO & GEO Ekibi',
    reviewer: 'Medikal Pazarlama Kurulu',
    quickAnswer: 'Sağlık turizmi SEO ve GEO stratejisi; kliniğinizi geleneksel Google organik aramalarında üst sıralara taşırken, ChatGPT, Perplexity ve Google AI Overviews gibi yapay zekâ yanıt motorlarında kliniğinizin ve hekiminizin otorite olarak önerilmesini sağlayan semantik, teknik ve E-E-A-T odaklı büyüme modelidir.',
    sections: [
      {
        heading: 'Geleneksel SEO’dan GEO (Generative Engine Optimization) Çağına Geçiş',
        paragraphs: [
          'Günümüzde yurt dışındaki hastalar sadece "hair transplant Istanbul" diye arama yapmıyor; ChatGPT veya Perplexity’ye "Almanya’da yaşayan bir hasta için Türkiye’de en güvenilir All-on-4 diş kliniği hangisidir ve süreç nasıl işler?" gibi uzun ve kompleks sorular soruyor.',
          'GEO (Üretken Motor Optimizasyonu), yapay zekâ algoritmalarının web sitenizi, hekim makalelerinizi ve akademik kaynaklarınızı tarayıp yanıtlarında birincil referans olarak göstermesini sağlar.'
        ],
        table: {
          headers: ['Optimizasyon Kriteri', 'Geleneksel SEO', 'GEO (Yapay Zekâ Optimizasyonu)'],
          rows: [
            ['Hedef Platform', 'Google & Yandex Arama Motorları', 'ChatGPT, Perplexity, Google Gemini, Claude'],
            ['İçerik Yapısı', 'Anahtar kelime yoğunluğu odaklı', 'Doğrudan soru-cevap, semantik veri & istatistik'],
            ['Güvenilirlik Sinyali', 'Geri bağlantılar (Backlinks)', 'Hekim kimliği, tıp dernek üyelikleri, doğrulanabilir kaynaklar'],
            ['Kullanıcı Çıktısı', '10 mavi bağlantı listesi', 'Özet yanıt içinde doğrudan klinik veya hekim tavsiyesi']
          ]
        }
      }
    ],
    faqs: [
      {
        q: 'GEO çalışmalarının sonuç vermesi ne kadar sürer?',
        a: 'Yapay zekâ veri tabanlarının güncellenmesi ve arama motorlarının yapay zekâ özetlerine (AI Overviews) girmesi genellikle tutarlı semantik yayın ve E-E-A-T altyapısıyla 3-6 ay içinde belirginleşir.'
      },
      {
        q: 'SEO çalışması sağlık turizmi reklam maliyetlerini düşürür mü?',
        a: 'Evet. Organik aramalardan ve AI önerilerinden gelen hastaların tıklama maliyeti sıfırdır. Bu durum genel hasta edinme maliyetinizi (CAC) önemli ölçüde düşürür.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye', url: 'https://healthturkiye.gov.tr/tr/homepage' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' },
      { title: 'Sağlık Turizmi Reklamı Nasıl Yapılır?', url: '/saglik-turizmi-reklam' },
      { title: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı?', url: '/saglik-turizmi-web-sitesi' }
    ]
  },

  // 5. K058 — Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır?
  {
    id: 'K058',
    slug: 'saglik-turizmi-fiyat-listesi',
    url: '/saglik-turizmi-fiyat-listesi',
    category: 'Ajans, Reklam & Dijital Büyüme',
    title: 'Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır? Şeffaflık ve Paketleme',
    h1: 'Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır?',
    seoTitle: 'Sağlık Turizmi Fiyat Listesi Nasıl Hazırlanır? | Overseas Marketing',
    metaDesc: 'Sağlık turizmi fiyat listesi hazırlama rehberi. Tedavi paketleme stratejisi, transfer, konaklama, medikal maliyetler ve mevzuata uygun şeffaf fiyatlandırma.',
    primaryKeyword: 'sağlık turizmi fiyat listesi',
    secondaryKeywords: ['sağlık turizmi web sitesi', 'sağlık turizmi reklam', 'dental sağlık turizmi'],
    searchIntent: 'Ticari',
    funnel: 'BOFU',
    readTime: '6 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Fiyatlandırma Danışmanlığı',
    reviewer: 'Medikal Pazarlama Kurulu',
    quickAnswer: 'Sağlık turizmi fiyat listesi; tedavinin kendisi, hekim ücreti, VIP havalimanı transferi, otel konaklaması, tercüman desteği ve ameliyat sonrası takip süreçlerini kapsayan "her şey dahil" paket mimarisiyle, gizli maliyet barındırmayacak şekilde şeffaf ve anlaşılır biçimde hazırlanır.',
    sections: [
      {
        heading: 'Paket Fiyatlandırmada Bulunması Gereken Bileşenler',
        paragraphs: [
          'Uluslararası hastalar için en büyük endişe kaynağı Türkiye’ye geldikten sonra beklenmedik ek masraflarla karşılaşmaktır. Paket mimarisi bu endişeyi ortadan kaldırır.'
        ],
        bulletPoints: [
          'Medikal İşlem & Tetkikler: Ameliyat öncesi kan tahlilleri, anestezi, cerrahi operasyon, protez/implant veya ilaç maliyetleri.',
          'Hastanede Yatış ve Refakatçi: Gereken gece sayısı kadar özel oda ve refakatçi ağırlama detayları.',
          'Konaklama (4 veya 5 Yıldızlı Otel): Kliniğe yakın otellerde belirlenen gün sayısı kadar kahvaltı dahil konaklama.',
          'VIP Transfer Hizmeti: Havalimanı - Otel - Hastane arasındaki tüm ulaşımın özel araçla karşılanması.',
          'Ana Dilinde Tercüman & Hasta Asistanı: Konsültasyondan taburcu olana kadar hastaya eşlik eden tercüman desteği.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Web sitesinde sabit fiyat vermek hukuken uygun mu?',
        a: 'Sağlık Bakanlığı tanıtım yönetmeliğine göre tedavi öncesi muayene olmadan net ve bağlayıcı fiyat vermek uygun değildir; ancak paket kapsamını açıklayan tahmini aralıklar ve teklif seçenekleri sunulabilir.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye Hizmet Standartları', url: 'https://healthturkiye.gov.tr/tr/homepage' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Web Sitesi Nasıl Olmalı?', url: '/saglik-turizmi-web-sitesi' },
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' }
    ]
  },

  // 6. K026 — Sağlık Turizmi Yetki Belgesi Nedir?
  {
    id: 'K026',
    slug: 'saglik-turizmi-yetki-belgesi',
    url: '/saglik-turizmi-yetki-belgesi',
    category: 'Yetki Belgesi, Yönetmelik & Hukuk',
    title: 'Sağlık Turizmi Yetki Belgesi Nedir? Kimler Alabilir, Neden Zorunludur?',
    h1: 'Sağlık Turizmi Yetki Belgesi Nedir?',
    seoTitle: 'Sağlık Turizmi Yetki Belgesi Nedir? | Overseas Marketing',
    metaDesc: 'Sağlık turizmi yetki belgesi nedir? T.C. Sağlık Bakanlığı tarafından verilen uluslararası sağlık turizmi yetki belgesinin kapsamı, yasal zorunlulukları ve avantajları.',
    primaryKeyword: 'sağlık turizmi yetki belgesi',
    secondaryKeywords: ['sağlık turizmi belgesi', 'sağlık bakanlığı sağlık turizmi yetki belgesi', 'sağlık turizmi yetki belgesi şartları'],
    searchIntent: 'Bilgilendirici / Mevzuat',
    funnel: 'MOFU',
    readTime: '7 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Mevzuat Masası',
    reviewer: 'Hukuk & Akreditasyon Danışmanlığı',
    quickAnswer: 'Sağlık turizmi yetki belgesi; T.C. Sağlık Bakanlığı tarafından Türkiye’de uluslararası hastalara teşhis, tedavi ve aracı sağlık hizmeti sunmak isteyen sağlık tesislerine (hastane, tıp merkezi, poliklinik, muayenehane) ve A grubu seyahat acentalarına verilen resmî izin ve kalite belgesidir.',
    sections: [
      {
        heading: 'Yetki Belgesi Olmadan Sağlık Turizmi Yapılabilir mi?',
        paragraphs: [
          'Hayır. 2017 yılında yayımlanan ve yürürlükte olan Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik gereğince, yetki belgesi bulunmayan hiçbir sağlık tesisi veya aracı kurum yurt dışından hasta kabul edemez, sağlık turizmi reklamı yapamaz ve devlet teşviklerinden yararlanamaz.',
          'Yetki belgesiz faaliyet gösteren veya yurt dışına yetkisiz sağlık reklamı veren kuruluşlar hakkında idari para cezaları ve faaliyet durdurma yaptırımları uygulanmaktadır.'
        ]
      },
      {
        heading: 'Yetki Belgesi Kimlere Verilir?',
        paragraphs: [
          'Mevzuata göre yetki belgesi iki farklı kurumsal kategoriye verilir:'
        ],
        bulletPoints: [
          '1. Uluslararası Sağlık Turizmi Sağlık Tesisi Yetki Belgesi: Ruhsatlı özel veya kamu hastaneleri, tıp merkezleri, poliklinikler ve hekim muayenehaneleri.',
          '2. Uluslararası Sağlık Turizmi Aracı Kuruluş Yetki Belgesi: TÜRSAB üyesi A Grubu Seyahat Acentası işletme belgesine sahip olan ve en az 3 yetkili sağlık tesisiyle sözleşmesi bulunan acentalar.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Yetki belgesi almak ne kadar sürer?',
        a: 'Gerekli şartlar ve evraklar eksiksiz tamamlandığında, İl Sağlık Müdürlüğü denetimi ve Bakanlık onay süreci ortalama 4 ila 8 hafta arasında sonuçlanmaktadır.'
      },
      {
        q: 'Yetki belgesi olmayan klinik reklam verebilir mi?',
        a: 'Hayır. Google ve Meta, Türkiye merkezli sağlık turizmi reklam hesaplarında Sağlık Bakanlığı Yetki Belgesi ve HealthTürkiye onayını talep etmektedir.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı Resmî Sayfası', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Yetkili Sağlık Tesisleri Listesi', url: 'https://shgmturizmdb.saglik.gov.tr/TR-76664/yetkili-saglik-tesisleri.html' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır?', url: '/saglik-turizmi-yetki-belgesi/nasil-alinir' },
      { title: 'Sağlık Turizmi Yetki Belgesi Şartları', url: '/saglik-turizmi-yetki-belgesi/sartlari' },
      { title: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir?', url: '/saglik-turizmi/gerekli-belgeler' }
    ]
  },

  // 7. K027 — Sağlık Turizmi Yetki Belgesi Nasıl Alınır?
  {
    id: 'K027',
    slug: 'saglik-turizmi-yetki-belgesi/nasil-alinir',
    url: '/saglik-turizmi-yetki-belgesi/nasil-alinir',
    category: 'Yetki Belgesi, Yönetmelik & Hukuk',
    title: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır? Adım Adım Başvuru Kılavuzu',
    h1: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır?',
    seoTitle: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır? 2026 Başvuru Rehberi',
    metaDesc: 'Sağlık turizmi yetki belgesi nasıl alınır? Sağlık tesisleri ve acentalar için başvuru aşamaları, İl Sağlık Müdürlüğü denetimleri ve onay süreci adımları.',
    primaryKeyword: 'sağlık turizmi yetki belgesi nasıl alınır',
    secondaryKeywords: ['uluslararası sağlık turizmi yetki belgesi nasıl alınır', 'sağlık turizmi için gerekli belgeler', 'sağlık turizmi yetki belgesi şartları'],
    searchIntent: 'İşlem Araştırması',
    funnel: 'BOFU',
    readTime: '8 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Mevzuat Ekibi',
    reviewer: 'Sağlık Hukuku Danışmanlığı',
    quickAnswer: 'Sağlık turizmi yetki belgesi almak için; asgari Sağlıkta Kalite Standartları (SKS) puanı sağlanmalı, yabancı dil bilen personel ve 7/24 çağrı altyapısı kurulmalı, gerekli başvuru evrakları hazırlanarak İl Sağlık Müdürlüğü’ne başvurulmalı ve yerinde yapılacak fiziki denetimi başarıyla tamamlanmalıdır.',
    sections: [
      {
        heading: 'Başvuru ve Onay Sürecinin 5 Aşaması',
        paragraphs: [
          'Başvuru sürecinin eksiksiz ve hızlı tamamlanması için aşağıdaki adımlar titizlikle takip edilmelidir:'
        ],
        bulletPoints: [
          'Aşama 1 — Ön Şartların Sağlanması: Sağlık tesisinin ruhsatlı olması, son SKS (Sağlıkta Kalite Standartları) denetiminden en az 85 puan almış olması (veya Bakanlıkça muayenehane/poliklinikler için aranan muafiyet/kriterlerin karşılanması).',
          'Aşama 2 — Personel ve Altyapı Hazırlığı: Yabancı dil yeterlilik belgesine sahip (YDS en az 65 veya eşdeğeri) personel istihdamı ve 7/24 uluslararası hasta iletişim hattı kurulumu.',
          'Aşama 3 — Dosya Hazırlığı ve Resmî Başvuru: Başvuru dilekçesi, taahhütname, web sitesi alan adı kaydı ve personelin dil belgelerinin bulunduğu dosyanın İl Sağlık Müdürlüğü Sağlık Turizmi Birimine sunulması.',
          'Aşama 4 — İl Sağlık Müdürlüğü Saha Denetimi: Yetkili komisyonun sağlık tesisini veya acenta ofisini yerinde ziyaret ederek kriterleri fiziken denetlemesi.',
          'Aşama 5 — Bakanlık Onayı ve Belge Tanzimi: Denetim raporunun Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü Sağlık Turizmi Daire Başkanlığına iletilmesi ve yetki belgesinin düzenlenmesi.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Başvuru ücreti var mıdır?',
        a: 'İl Sağlık Müdürlükleri ve Bakanlıkça her yıl ilan edilen resmî belge harcı veya inceleme giderleri haricinde fahiş resmî ücretler bulunmamaktadır; ancak danışmanlık ve personel istihdam maliyetleri kurumca planlanmalıdır.'
      },
      {
        q: 'Eksik evrak çıkarsa ne olur?',
        a: 'İl Sağlık Müdürlüğü eksikliklerin giderilmesi için kuruma yasal süre tanır. Bu sürede tamamlanmayan başvurular iptal edilerek dosya iade edilir.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı Başvuru Rehberi', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Yetkili Sağlık Tesisleri Sorgulama', url: 'https://shgmturizmdb.saglik.gov.tr/TR-76664/yetkili-saglik-tesisleri.html' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Şartları', url: '/saglik-turizmi-yetki-belgesi/sartlari' },
      { title: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir?', url: '/saglik-turizmi/gerekli-belgeler' },
      { title: 'Uluslararası Sağlık Turizmi Yetki Belgesi Başvuru Rehberi', url: '/uluslararasi-saglik-turizmi-yetki-belgesi' }
    ]
  },

  // 8. K028 — Sağlık Turizmi Yetki Belgesi Şartları
  {
    id: 'K028',
    slug: 'saglik-turizmi-yetki-belgesi/sartlari',
    url: '/saglik-turizmi-yetki-belgesi/sartlari',
    category: 'Yetki Belgesi, Yönetmelik & Hukuk',
    title: 'Sağlık Turizmi Yetki Belgesi Şartları: 2026 Kriterler ve Altyapı',
    h1: 'Sağlık Turizmi Yetki Belgesi Şartları',
    seoTitle: 'Sağlık Turizmi Yetki Belgesi Şartları Nelerdir? | 2026',
    metaDesc: 'Sağlık turizmi yetki belgesi şartları. SKS puanı, yabancı dil bilen personel kriterleri, 7/24 çağrı hattı ve klinik altyapı zorunlulukları tablosu.',
    primaryKeyword: 'sağlık turizmi yetki belgesi şartları',
    secondaryKeywords: ['sağlık turizmi yetki belgesi', 'sağlık turizmi için gerekli belgeler', 'sağlık turizmi yapmak için gerekli şartlar'],
    searchIntent: 'İşlem Araştırması',
    funnel: 'BOFU',
    readTime: '7 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Mevzuat Ekibi',
    reviewer: 'Hukuk Danışmanlığı',
    quickAnswer: 'Sağlık turizmi yetki belgesi şartları; sağlık tesisinin geçerli ruhsatı, Sağlıkta Kalite Standartları (SKS) denetim puanı yeterliliği, yabancı dil bilen en az bir kayıtlı sağlık turizmi personeli, 7/24 kesintisiz iletişim altyapısı ve mevzuata uygun çok dilli web sitesine sahip olunmasını zorunlu kılar.',
    sections: [
      {
        heading: 'Sağlık Tesisleri İçin Asgari Şartlar Tablosu',
        paragraphs: [
          'Hastaneler, poliklinikler ve muayenehaneler için mevzuatta belirlenmiş asgari kriterler:'
        ],
        table: {
          headers: ['Şart Alanı', 'Hastaneler & Tıp Merkezleri', 'Poliklinik & Muayenehaneler'],
          rows: [
            ['Ruhsat Durumu', 'Bakanlıkça verilmiş faaliyet izin belgesi', 'Geçerli muayenehane/poliklinik uygunluk belgesi'],
            ['SKS Kalite Puanı', 'Asgari 85 puan alma zorunluluğu', 'Muayenehaneler için kalite değerlendirme şartı aranmaz'],
            ['Yabancı Dil Personeli', 'YDS 65+ veya dengi sertifikalı en az 1 personel', 'Yabancı dil yeterliliğine sahip hekim veya çalışan'],
            ['İletişim Altyapısı', '7/24 uluslararası çağrı ve kayıt sistemi', '7/24 erişilebilir yabancı dil çağrı hattı'],
            ['Web Sitesi', 'Çok dilli, hekim bilgisi ve izin belgeli site', 'Mevzuata uygun, tanıtım sınırlarına riayet eden site']
          ]
        }
      }
    ],
    faqs: [
      {
        q: 'Hekimin kendisi yabancı dil biliyorsa personel şartı kalkar mı?',
        a: 'Muayenehanelerde hekimin kendisinin YDS veya eşdeğer uluslararası sınav (TOEFL, IELTS) belgesi sunması durumunda ek personel şartı aranmamaktadır.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı Kriterler', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Yetkili Sağlık Tesisleri Resmî Sayfası', url: 'https://shgmturizmdb.saglik.gov.tr/TR-76664/yetkili-saglik-tesisleri.html' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır?', url: '/saglik-turizmi-yetki-belgesi/nasil-alinir' },
      { title: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir?', url: '/saglik-turizmi/gerekli-belgeler' }
    ]
  },

  // 9. K029 — Uluslararası Sağlık Turizmi Yetki Belgesi Başvuru Rehberi
  {
    id: 'K029',
    slug: 'uluslararasi-saglik-turizmi-yetki-belgesi',
    url: '/uluslararasi-saglik-turizmi-yetki-belgesi',
    category: 'Yetki Belgesi, Yönetmelik & Hukuk',
    title: 'Uluslararası Sağlık Turizmi Yetki Belgesi Başvuru Rehberi',
    h1: 'Uluslararası Sağlık Turizmi Yetki Belgesi Başvuru Rehberi',
    seoTitle: 'Uluslararası Sağlık Turizmi Yetki Belgesi | 2026 Rehber',
    metaDesc: 'Uluslararası sağlık turizmi yetki belgesi nedir, nasıl alınır? Sağlık tesisleri ve aracı kuruluşlar için resmî başvuru adımları ve mevzuat yükümlülükleri.',
    primaryKeyword: 'uluslararası sağlık turizmi yetki belgesi',
    secondaryKeywords: ['uluslararası sağlık turizmi yetki belgesi nasıl alınır', 'sağlık turizmi yetki belgesi', 'sağlık bakanlığı sağlık turizmi yetki belgesi'],
    searchIntent: 'İşlem Araştırması',
    funnel: 'BOFU',
    readTime: '7 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Mevzuat Masası',
    reviewer: 'Akreditasyon Kurulu',
    quickAnswer: 'Uluslararası sağlık turizmi yetki belgesi; yabancı uyruklu hastaların Türkiye’de güvenli, akredite ve denetimli sağlık hizmeti almasını temin etmek üzere Sağlık Bakanlığı tarafından verilen resmî onay sertifikasıdır. Bu belge olmadan yurt dışı reklam ve hasta transferi yapılamaz.',
    sections: [
      {
        heading: 'Uluslararası Yetki Belgesinin Sağladığı Ticari ve Hukuki Avantajlar',
        paragraphs: [
          'Uluslararası Sağlık Turizmi Yetki Belgesi yalnızca yasal bir zorunluluk değil, sağlık tesisinin büyümesi için temel kaldıraçtır:'
        ],
        bulletPoints: [
          'Google ve Meta Reklam Onayı: Belgesi olmayan kurumlar yurt dışı sağlık reklam hesaplarında onay alamazken, yetkili kurumlar sorunsuz reklam verir.',
          'Ticaret Bakanlığı Teşviklerine Erişim: Reklam, acenta komisyonu, tercüman maaşı ve yurt dışı ofis desteklerinden yararlanmanın ön koşuludur.',
          'HealthTürkiye Portalında Listelenme: Türkiye’nin resmî sağlık portalı üzerinde global hastaların doğrudan erişimine açılma imkânı sağlar.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Yetki belgesinin geçerlilik süresi ne kadardır?',
        a: 'Yetki belgesi süresiz olarak düzenlenir; ancak sağlık tesisinin ruhsat şartlarını koruması ve periyodik Bakanlık denetimlerinden başarıyla geçmesi gerekmektedir.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye Resmî Hastaneler Listesi', url: 'https://healthturkiye.gov.tr/tr/hospitals-list' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Nedir?', url: '/saglik-turizmi-yetki-belgesi' },
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' }
    ]
  },

  // 10. K033 — Sağlık Turizmi İçin Gerekli Belgeler Nelerdir?
  {
    id: 'K033',
    slug: 'saglik-turizmi/gerekli-belgeler',
    url: '/saglik-turizmi/gerekli-belgeler',
    category: 'Yetki Belgesi, Yönetmelik & Hukuk',
    title: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir? Başvuru Evrak Listesi',
    h1: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir?',
    seoTitle: 'Sağlık Turizmi İçin Gerekli Belgeler Nelerdir? | 2026 Liste',
    metaDesc: 'Sağlık turizmi yetki belgesi için gerekli evraklar ve başvuru belgeleri listesi. Tesis ruhsatı, personel dil belgeleri, taahhütnameler ve protokoller.',
    primaryKeyword: 'sağlık turizmi için gerekli belgeler',
    secondaryKeywords: ['sağlık turizmi yapmak için gerekli şartlar', 'sağlık turizmi yetki belgesi şartları', 'sağlık turizmi belgesi'],
    searchIntent: 'İşlem Araştırması',
    funnel: 'BOFU',
    readTime: '6 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Mevzuat Ekibi',
    reviewer: 'Sağlık Hukuku Kurulu',
    quickAnswer: 'Sağlık turizmi için gerekli belgeler; sağlık tesisinin faaliyet izin belgesi (ruhsat), SKS denetim puanı belgesi, yabancı dil yeterlilik sertifikaları (YDS vb.), 7/24 çağrı altyapısı taahhütnamesi, web sitesi alan adı tescil belgesi ve yetkili imza sirküleridir.',
    sections: [
      {
        heading: 'Sağlık Tesisleri İçin Başvuru Dosyası Kontrol Listesi',
        paragraphs: [
          'Başvuru dosyasında bulunması zorunlu olan resmî evraklar:'
        ],
        bulletPoints: [
          '1. Başvuru Dilekçesi: Sağlık tesisi yetkilisince kaşelenmiş ve imzalanmış resmî talep yazısı.',
          '2. Sağlık Tesisi Ruhsat ve Faaliyet İzin Belgesi örneği.',
          '3. Sağlıkta Kalite Standartları (SKS) Denetim Sonuç Belgesi (Hastaneler için min. 85 puan).',
          '4. Sağlık Turizmi Birim Sorumlusu ve personelinin yabancı dil yeterlilik belgeleri (ÖSYM YDS veya eşdeğer uluslararası sınav sonuçları).',
          '5. Uluslararası Hasta İletişim Hattı Sözleşmesi veya 7/24 çağrı merkezi altyapı beyanı.',
          '6. Kurumsal Web Sitesi Bilgileri ve çok dilli içerik beyanı.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Dil belgesi olarak üniversite mezuniyet diploması geçerli midir?',
        a: 'İngilizce eğitim veren üniversitelerden mezun olanların durumu İl Sağlık Müdürlüğünce incelenmekte olup, en garanti yol ÖSYM YDS veya eşdeğerliği tanınan uluslararası sınav belgesi sunmaktır.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı Evrak Listesi', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Yetkili Sağlık Tesisleri Resmî Veritabanı', url: 'https://shgmturizmdb.saglik.gov.tr/TR-76664/yetkili-saglik-tesisleri.html' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Nasıl Alınır?', url: '/saglik-turizmi-yetki-belgesi/nasil-alinir' },
      { title: 'Sağlık Turizmi Yetki Belgesi Şartları', url: '/saglik-turizmi-yetki-belgesi/sartlari' }
    ]
  },

  // 11. K037 — Sağlık Turizmi Yönetmeliği: Kurumların Bilmesi Gerekenler
  {
    id: 'K037',
    slug: 'saglik-turizmi-yonetmeligi',
    url: '/saglik-turizmi-yonetmeligi',
    category: 'Yetki Belgesi, Yönetmelik & Hukuk',
    title: 'Sağlık Turizmi Yönetmeliği: Klinik ve Hastanelerin Bilmesi Gerekenler',
    h1: 'Sağlık Turizmi Yönetmeliği: Kurumların Bilmesi Gerekenler',
    seoTitle: 'Sağlık Turizmi Yönetmeliği ve Hukuki Şartlar | 2026',
    metaDesc: 'Uluslararası sağlık turizmi yönetmeliği maddeleri, hasta hakları, reklam sınırları, yetki belgesi zorunluluğu ve sağlık kuruluşlarının yasal sorumlulukları.',
    primaryKeyword: 'sağlık turizmi yönetmeliği',
    secondaryKeywords: ['uluslararası sağlık turizmi ve turistin sağlığı hakkında yönetmelik', 'sağlık turizmi hukuku', 'sağlık turizmi yetki belgesi'],
    searchIntent: 'Bilgilendirici / Mevzuat',
    funnel: 'MOFU',
    readTime: '8 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Hukuk Departmanı',
    reviewer: 'Medikal Hukuk Danışmanlığı',
    quickAnswer: 'Sağlık turizmi yönetmeliği (Uluslararası Sağlık Turizmi ve Turistin Sağlığı Hakkında Yönetmelik); Türkiye’de uluslararası sağlık turizmi faaliyetlerinin yürütülmesi, yetki belgelerinin verilmesi, aracı kurumların denetlenmesi, tanıtım sınırları ve hasta haklarının korunmasını düzenleyen temel mevzuattır.',
    sections: [
      {
        heading: 'Yönetmeliğin Kurumlara Getirdiği Temel Yükümlülükler',
        paragraphs: [
          'Yönetmelik hükümleri sağlık tesisleri ve aracı kuruluşlar için açık sınırlar çizer:'
        ],
        bulletPoints: [
          'Yetkisiz Faaliyet Yasağı: Bakanlık yetki belgesi olmadan hiçbir gerçek veya tüzel kişi sağlık turizmi faaliyeti yürütemez.',
          'Tanıtım ve Bilgilendirme Sınırları: Yalnızca bilgilendirme amacıyla tanıtım yapılabilir; talep yaratıcı, yanıltıcı ve garanti içeren reklamlar yapılamaz.',
          'Kayıt ve Bildirim Zorunluluğu: Tedavi edilen yabancı hastaların verileri Bakanlığın Sağlık Turizmi Yönetim Sistemi’ne (SYS) düzenli bildirilmek zorundadır.',
          'Aracı Kuruluş Sözleşmeleri: Sağlık tesisleri yalnızca yetki belgesi bulunan TÜRSAB A Grubu acentalarla yazılı protokol imzalayarak çalışabilir.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Yönetmelik ihlalinde uygulanan cezalar nelerdir?',
        a: 'Uyarı, idari para cezası ve ihlalin tekrarı veya ağırlığı durumunda yetki belgesinin askıya alınması veya tamamen iptali yaptırımları uygulanır.'
      }
    ],
    officialSources: [
      { title: 'Mevzuat Bilgi Sistemi — Resmî Yönetmelik Metni', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Nedir?', url: '/saglik-turizmi-yetki-belgesi' },
      { title: 'Sağlık Turizmi Reklamı Nasıl Yapılır?', url: '/saglik-turizmi-reklam' }
    ]
  },

  // 12. K042 — Sağlık Turizmi Teşvikleri Nelerdir?
  {
    id: 'K042',
    slug: 'saglik-turizmi-tesvikleri',
    url: '/saglik-turizmi-tesvikleri',
    category: 'Teşvikler, Destekler & Vergi',
    title: 'Sağlık Turizmi Teşvikleri Nelerdir? 2026 Devlet Destekleri ve Oranlar',
    h1: 'Sağlık Turizmi Teşvikleri Nelerdir?',
    seoTitle: 'Sağlık Turizmi Teşvikleri Nelerdir? | 2026 Devlet Destekleri',
    metaDesc: 'Sağlık turizmi teşvikleri nelerdir? T.C. Ticaret Bakanlığı 5448 sayılı karar kapsamında reklam, acenta komisyonu, yabancı dil personeli ve ofis destek oranları.',
    primaryKeyword: 'sağlık turizmi teşvikleri nelerdir',
    secondaryKeywords: ['sağlık turizmi teşvikleri', 'sağlık turizmi devlet teşvikleri', 'sağlık turizmi devlet destekleri'],
    searchIntent: 'Bilgilendirici / Teşvik',
    funnel: 'MOFU',
    readTime: '9 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Teşvik Danışmanlığı',
    reviewer: 'Mali Müşavirlik & Teşvik Kurulu',
    quickAnswer: 'Sağlık turizmi teşvikleri; T.C. Ticaret Bakanlığı tarafından yetkili sağlık tesislerine ve acentalara sunulan, yurt dışı reklam harcamaları (%60-70), acenta komisyonları (%60), yabancı dil personeli maaşları, yurt dışı ofis kiraları ve hasta yol masraflarını geri ödeyen kapsamlı devlet hibe programlarıdır.',
    sections: [
      {
        heading: '2026 Sağlık Turizmi Devlet Destekleri Kalemleri ve Oranları',
        paragraphs: [
          'Ticaret Bakanlığı 5448 sayılı "Hizmet İhracatının Tanımlanması, Sınıflandırılması ve Desteklenmesi Hakkında Karar" kapsamında sağlanan temel teşvikler:'
        ],
        table: {
          headers: ['Destek Kalemi', 'Destek Oranı', 'Yıllık Azami Limit', 'Kapsam'],
          rows: [
            ['Pazara Giriş & Reklam Desteği', '%60 - %70', 'Yıllık belirlenen üst limit', 'Google Ads, Meta, SEO, TV/Açık Hava reklamları'],
            ['Acente Komisyon Desteği', '%60', 'Yıllık belirlenen üst limit', 'Yurtdışı acentalara ödenen hasta komisyonları'],
            ['Tercüman & Personel İstihdamı', '%60', 'Personel başına aylık limit', 'En fazla 5 yabancı dil bilen personel maaşı'],
            ['Yurt Dışı Birim (Ofis/Klinik) Kirası', '%60', 'Birim başına yıllık limit', 'Yurt dışında açılan irtibat ofislerinin kira bedeli'],
            ['Uluslararası Belgelendirme & Akreditasyon', '%60', 'Belge başına belirlenen limit', 'JCI, TEMOS, ISO ve yetki belgesi harçları'],
            ['Hasta Yol ve Ulaşım Desteği', '%60', 'Hasta başına belirlenen limit', 'Tedavi amacıyla Türkiye’ye gelen hastanın uçak bileti']
          ]
        },
        callout: {
          title: 'Önemli Uyarı',
          text: 'Teşvik oranları ve parasal üst limitler her takvim yılı başında Resmî Gazete ve Ticaret Bakanlığı tebliğleriyle güncellenir. Başvuru öncesinde güncel mevzuat teyit edilmelidir.',
          type: 'warning'
        }
      }
    ],
    faqs: [
      {
        q: 'Teşviklerden kimler yararlanabilir?',
        a: 'Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi’ne sahip hastaneler, tıp merkezleri, poliklinikler, muayenehaneler ve yetkili A grubu seyahat acentaları yararlanabilir.'
      },
      {
        q: 'Reklam harcamalarının parası ne zaman geri ödenir?',
        a: 'Harcama yapılıp fatura, banka dekontu ve reklam ekran görüntüleriyle Bakanlığa başvurulduktan sonra inceleme süreci tamamlanarak hibe tutarı doğrudan banka hesabına aktarılır.'
      }
    ],
    officialSources: [
      { title: 'T.C. Ticaret Bakanlığı Hizmet İhracatı Portalı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Sağlık Turizmi Daire Başkanlığı Teşvik Bilgisi', url: 'https://shgmturizmdb.saglik.gov.tr/' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır?', url: '/saglik-turizmi/devlet-tesvikleri' },
      { title: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır?', url: '/saglik-turizmi-tesvik-basvurusu' },
      { title: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir?', url: '/saglik-turizmi-tesvik-danismanligi' }
    ]
  },

  // 13. K044 — Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır?
  {
    id: 'K044',
    slug: 'saglik-turizmi/devlet-tesvikleri',
    url: '/saglik-turizmi/devlet-destekleri-nasil-alinir',
    category: 'Teşvikler, Destekler & Vergi',
    title: 'Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır? Başvuru Şartları',
    h1: 'Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır?',
    seoTitle: 'Sağlık Turizmi Devlet Teşvikleri Nasıl Alınır? 2026 Kılavuzu',
    metaDesc: 'Sağlık turizmi devlet teşvikleri nasıl alınır? Ticaret Bakanlığı DYS (Destek Yönetim Sistemi) kaydı, evrak hazırlığı ve harcamaların hibeye dönüştürülmesi rehberi.',
    primaryKeyword: 'sağlık turizmi devlet teşvikleri',
    secondaryKeywords: ['sağlık turizmi teşvikleri', 'sağlık turizmi devlet destekleri', 'sağlık turizmi teşvik başvurusu nasıl yapılır'],
    searchIntent: 'İşlem Araştırması',
    funnel: 'BOFU',
    readTime: '8 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Teşvik Masası',
    reviewer: 'Mali Müşavirlik Kurulu',
    quickAnswer: 'Sağlık turizmi devlet teşviklerini almak için; öncelikle Sağlık Bakanlığı yetki belgesi alınmalı, Ticaret Bakanlığı Destek Yönetim Sistemi’ne (DYS) kurum kaydı yapılmalı, harcamalar şirket resmî banka hesabından yapılmalı ve harcama tarihinden itibaren en geç 6 ay içinde evraklarla DYS üzerinden başvuru gerçekleştirilmelidir.',
    sections: [
      {
        heading: 'Teşvik Alma Sürecinin 4 Temel Kuralı',
        paragraphs: [
          'Hibe başvurularının reddedilmemesi için şu kurallara harfiyen uyulması gerekir:'
        ],
        bulletPoints: [
          '1. DYS (Destek Yönetim Sistemi) Kaydı ve KEP Adresi: Başvuru sahibi şirketin DYS sisteminde tanımlı olması ve kurumsal KEP (Kayıtlı Elektronik Posta) adresine sahip olması şarttır.',
          '2. Bankacılık Kanalıyla Ödeme: Nakit veya şahsi kartlarla yapılan ödemeler destek kapsamı dışındadır. Tüm faturalar şirket banka hesabından veya şirket kredi kartıyla ödenmelidir.',
          '3. 6 Aylık Başvuru Hak Düşürücü Süre: Fatura ve ödeme tarihinden itibaren 6 ay içerisinde evraklar DYS sistemine yüklenmelidir.',
          '4. Fatura Detayları ve Türkçe Tercüme: Yurt dışından kesilen yabancı dildeki reklam ve hizmet faturalarının içeriği açıkça belirtilmeli ve gerektiğinde yeminli tercümesi eklenmelidir.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Şahıs şirketleri teşvik alabilir mi?',
        a: 'Sağlık turizmi teşviklerinden yararlanmak için ticaret unvanı bulunan sermaye şirketi (Limited veya Anonim Şirket) olmak veya mevzuata uygun muayenehane statüsünde bulunmak gerekmektedir.'
      }
    ],
    officialSources: [
      { title: 'T.C. Ticaret Bakanlığı DYS Sistemi', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' },
      { title: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır?', url: '/saglik-turizmi-tesvik-basvurusu' }
    ]
  },

  // 14. K046 — Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır?
  {
    id: 'K046',
    slug: 'saglik-turizmi-tesvik-basvurusu',
    url: '/saglik-turizmi-tesvik-basvurusu',
    category: 'Teşvikler, Destekler & Vergi',
    title: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır? Adım Adım DYS Rehberi',
    h1: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır?',
    seoTitle: 'Sağlık Turizmi Teşvik Başvurusu Nasıl Yapılır? | 2026 DYS',
    metaDesc: 'Sağlık turizmi teşvik başvurusu nasıl yapılır? DYS sistemine evrak yükleme, fatura-dekont eşleştirmeleri, inceleme ve ödeme aşamaları rehberi.',
    primaryKeyword: 'sağlık turizmi teşvik başvurusu nasıl yapılır',
    secondaryKeywords: ['sağlık turizmi teşvikleri', 'sağlık turizmi devlet teşvikleri', 'sağlık turizmi teşvik danışmanlığı'],
    searchIntent: 'İşlem Araştırması',
    funnel: 'BOFU',
    readTime: '7 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Teşvik Ekibi',
    reviewer: 'Mali Müşavirlik Kurulu',
    quickAnswer: 'Sağlık turizmi teşvik başvurusu; Ticaret Bakanlığı Destek Yönetim Sistemi (DYS) üzerinden e-imza ile giriş yapılarak, harcama kalemine uygun başvuru formunun doldurulması, fatura, banka onaylı dekont, reklam ekran görüntüleri ve sözleşmelerin yüklenmesiyle tamamen dijital ortamda yapılır.',
    sections: [
      {
        heading: 'DYS Üzerinden Başvuru Adımları',
        paragraphs: [
          'Başvurunun onaylanıp ödeme aşamasına geçmesi için izlenecek teknik süreç:'
        ],
        bulletPoints: [
          'Adım 1: DYS sistemine e-Devlet veya e-İmza ile yetkili kullanıcı girişi yapılması.',
          'Adım 2: İlgili destek türünün (örneğin "Pazara Giriş ve Reklam Desteği") seçilmesi.',
          'Adım 3: Harcama faturası, satıcı bilgileri ve ödemeyi teyit eden banka dekontunun sisteme yüklenmesi.',
          'Adım 4: Reklam faaliyetini kanıtlayan raporlar (Google Ads/Meta fatura detayları ve reklam görselleri) eklenmesi.',
          'Adım 5: Başvurunun İncelemeci Kuruluşa (Hizmet İhracatçıları Birliği - HİB) e-imza ile iletilmesi.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Başvuru ne kadar sürede sonuçlanır?',
        a: 'Evraklarda eksiklik olmaması durumunda HİB incelemesi ve Bakanlık onay süreci ortalama 2 ila 4 ay içerisinde tamamlanıp ödeme listesine alınmaktadır.'
      }
    ],
    officialSources: [
      { title: 'T.C. Ticaret Bakanlığı DYS', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' },
      { title: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir?', url: '/saglik-turizmi-tesvik-danismanligi' }
    ]
  },

  // 15. K047 — Sağlık Turizmi Teşvik Danışmanlığı Nedir?
  {
    id: 'K047',
    slug: 'saglik-turizmi-tesvik-danismanligi',
    url: '/saglik-turizmi-tesvik-danismanligi',
    category: 'Teşvikler, Destekler & Vergi',
    title: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir? Kliniklere Faydaları',
    h1: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir?',
    seoTitle: 'Sağlık Turizmi Teşvik Danışmanlığı Nedir? | Overseas Marketing',
    metaDesc: 'Sağlık turizmi teşvik danışmanlığı nedir? Klinik ve acentaların devlet desteklerinden sıfır hata ve maksimum hibe oranıyla yararlanmasını sağlayan profesyonel hizmet.',
    primaryKeyword: 'sağlık turizmi teşvik danışmanlığı',
    secondaryKeywords: ['sağlık turizmi teşvikleri', 'sağlık turizmi teşvik başvurusu nasıl yapılır', 'sağlık turizmi devlet destekleri'],
    searchIntent: 'Ticari Araştırma',
    funnel: 'BOFU',
    readTime: '6 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Teşvik Yönetimi',
    reviewer: 'Mali Müşavirlik Kurulu',
    quickAnswer: 'Sağlık turizmi teşvik danışmanlığı; sağlık kuruluşlarının ve acentaların Ticaret Bakanlığı hibe ve teşviklerinden eksiksiz, mevzuata uygun ve hak kaybı yaşamadan en üst limitlerden yararlanabilmesi için DYS kaydından evrak hazırlığına, harcama planlamasından hibe tahsilatına kadar süreci yöneten profesyonel danışmanlık hizmetidir.',
    sections: [
      {
        heading: 'Neden Profesyonel Teşvik Danışmanlığı Alınmalıdır?',
        paragraphs: [
          'Devlet teşvikleri oldukça titiz bürokratik kurallara tabidir. En küçük usul hatası veya süresi geçen evrak, yüz binlerce liralık harcamanın hibe kapsamı dışı kalmasına neden olabilir.'
        ],
        bulletPoints: [
          'Hibe Kaybını Önleme: Harcama öncesi fatura ve sözleşmelerin Bakanlık kriterlerine uygun düzenlenmesini sağlama.',
          'Hak Düşürücü Süreleri Takip: 6 aylık yasal süre dolmadan evrakların DYS sistemine kusursuz yüklenmesi.',
          'Nakit Akışı Yönetimi: Geri ödemelerin ne zaman hesaba geçeceğinin öngörülmesi ve reklam bütçelerinin hibe desteğiyle büyütülmesi.'
        ]
      }
    ],
    faqs: [
      {
        q: 'Teşvik danışmanlığı ücret modeli nasıldır?',
        a: 'Genellikle aylık dosya yönetim bedeli ve/veya başarıya bağlı olarak kurumun hesabına yatan hibe tutarı üzerinden belirlenen başarı primi modeliyle çalışılır.'
      }
    ],
    officialSources: [
      { title: 'Ticaret Bakanlığı Hizmet Sektörü Destekleri', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' },
      { title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' }
    ]
  },

  // 16. K018 — Sağlık Turizmi Acentası Açmak İçin Gerekenler
  {
    id: 'K018',
    slug: 'saglik-turizmi-acentesi-acmak',
    url: '/saglik-turizmi-acentesi-acmak',
    category: 'İşletmecilik, Acenta & Danışmanlık',
    title: 'Sağlık Turizmi Acentası Açmak İçin Gerekenler: Şartlar ve Maliyetler',
    h1: 'Sağlık Turizmi Acentası Açmak İçin Gerekenler',
    seoTitle: 'Sağlık Turizmi Acentası Açmak İçin Gerekenler | 2026 Rehber',
    metaDesc: 'Sağlık turizmi acentası nasıl açılır? TÜRSAB A grubu işletme belgesi, Sağlık Bakanlığı yetki belgesi şartları, anlaşmalı klinik protokolleri ve sermaye gereksinimleri.',
    primaryKeyword: 'sağlık turizmi acentası açmak',
    secondaryKeywords: ['sağlık turizmi acentaları', 'sağlık turizmi acenteleri', 'sağlık turizmi için gerekli belgeler'],
    searchIntent: 'Ticari Araştırma',
    funnel: 'BOFU',
    readTime: '9 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Acenta Kuruluş Masası',
    reviewer: 'TÜRSAB & Sağlık Hukuku Danışmanlığı',
    quickAnswer: 'Sağlık turizmi acentası açmak için; bir limited veya anonim şirket kurulmalı, TÜRSAB onaylı A Grubu Seyahat Acentası İşletme Belgesi alınmalı, en az 3 yetkili sağlık tesisiyle resmî hizmet protokolü imzalanmalı, yabancı dil bilen personel ve 7/24 çağrı merkezi altyapısı kurularak Sağlık Bakanlığı’ndan Uluslararası Sağlık Turizmi Aracı Kuruluş Yetki Belgesi alınmalıdır.',
    sections: [
      {
        heading: 'Acenta Kuruluşunun 4 Ana Adımı',
        paragraphs: [
          'Yasal olarak yabancı hasta getirebilen bir aracı kuruluş olmak için izlenecek süreç:'
        ],
        bulletPoints: [
          '1. Şirket Kuruluşu & TÜRSAB Belgesi: Şirket ana sözleşmesinde seyahat acentacılığı ve sağlık turizmi faaliyetleri tanımlanarak Kültür ve Turizm Bakanlığı / TÜRSAB nezdinde A Grubu Seyahat Acentası unvanı alınır.',
          '2. Yetkili Sağlık Tesisleriyle Protokol: Bakanlık yetki belgesine sahip en az 3 farklı sağlık kuruluşu (hastane, tıp merkezi, diş veya saç ekimi kliniği) ile hasta kabul ve transfer protokolü imzalanır.',
          '3. Sağlık Bakanlığı Aracı Kuruluş Yetki Belgesi Başvurusu: İl Sağlık Müdürlüğü’ne TÜRSAB belgesi, klinik protokolleri ve yabancı dil personel evraklarıyla başvurularak yerinde denetimden geçilir.',
          '4. Çok Dilli Dijital Pazarlama ve CRM Kurulumu: Yurt dışından hasta akışını başlatmak için hedef pazarlara uygun web sitesi, reklam kampanyaları ve WhatsApp CRM altyapısı devreye alınır.'
        ]
      }
    ],
    faqs: [
      {
        q: 'TÜRSAB belgesi olmadan sağlık turizmi aracı kurumu olunabilir mi?',
        a: 'Hayır. Uluslararası Sağlık Turizmi Yönetmeliği gereğince aracı kuruluşların Kültür ve Turizm Bakanlığı’ndan A Grubu Seyahat Acentası İşletme Belgesi’ne sahip olması kanunen zorunludur.'
      },
      {
        q: 'Acentalar devlet teşviklerinden yararlanabilir mi?',
        a: 'Evet. Yetki belgesi olan sağlık turizmi acentaları da yurt dışı reklam desteği (%60), personel desteği ve ofis kirası teşviklerinden faydalanabilmektedir.'
      }
    ],
    officialSources: [
      { title: 'Sağlık Turizmi Daire Başkanlığı Aracı Kuruluş Şartları', url: 'https://shgmturizmdb.saglik.gov.tr/' },
      { title: 'HealthTürkiye Yetkili Acentalar Listesi', url: 'https://healthturkiye.gov.tr/tr/agency' }
    ],
    internalLinks: [
      { title: 'Sağlık Turizmi Yetki Belgesi Nedir?', url: '/saglik-turizmi-yetki-belgesi' },
      { title: 'Sağlık Turizmi Teşvikleri Nelerdir?', url: '/saglik-turizmi-tesvikleri' },
      { title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' }
    ]
  }
];
