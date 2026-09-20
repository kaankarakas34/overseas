export interface DictionaryTerm {
  slug: string;
  termTr: string;
  termEn: string;
  category: 'Strateji & Pazarlama' | 'Performans & Metrik' | 'Teknoloji & CRM' | 'SEO & Yapay Zekâ';
  shortAnswer: string; // 40-80 words Direct Answer format
  whyImportant: string; // Clinic and hospital perspective
  howMeasuredOrApplied: string; // Practical measurement or implementation
  relatedTerms: { term: string; slug: string }[];
  relatedService: { title: string; url: string; anchorText: string };
}

export const DICTIONARY_TERMS: DictionaryTerm[] = [
  {
    slug: 'saglik-turizmi-pazarlamasi',
    termTr: 'Sağlık Turizmi Pazarlaması',
    termEn: 'Medical Tourism Marketing',
    category: 'Strateji & Pazarlama',
    shortAnswer: 'Sağlık turizmi pazarlaması; klinik, hastane ve hekimlerin uluslararası hasta adaylarına ulaşmak, medikal uzmanlıklarını sınır ötesi pazarlarda tanıtmak ve çok dilli iletişim kanallarıyla nitelikli tedavi randevusu oluşturmak amacıyla yürüttüğü stratejik dijital büyüme, reklam ve marka faaliyetlerinin bütünüdür. Yasal mevzuatlara, tıbbi deontolojiye ve hedef ülke regülasyonlarına tam uyum gerektirir.',
    whyImportant: 'Uluslararası hasta edinimi yüksek maliyetli ve güven temelli bir süreçtir. Doğru yapılandırılmış bir sağlık turizmi pazarlaması, kliniklerin sadece genel talep toplamasını değil, hedeflenen branş ve ülkelerde yüksek niyetli, bütçesi uygun ve tedaviye hazır hastalara ulaşmasını sağlayarak yatırım getirisini (ROI) maksimize eder.',
    howMeasuredOrApplied: 'Hedef pazar araştırması (İngiltere, DACH, Körfez), çok dilli Google Ads ve Meta Ads kampanyaları, yerel arama niyetine göre kurgulanmış medikal SEO ve çok dilli hasta iletişim ekiplerinin entegre edildiği CRM hatları üzerinden uçtan uca uygulanır ve hasta edinme maliyeti (CPPA) ile ölçülür.',
    relatedTerms: [
      { term: 'Uluslararası Hasta Kazanımı', slug: 'uluslararasi-hasta-kazanimi' },
      { term: 'Sağlık CRM\'i', slug: 'saglik-crm' },
      { term: 'Medikal SEO', slug: 'medikal-seo' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi Reklam Ajansı Hizmeti',
      url: '/saglik-turizmi-reklam-ajansi',
      anchorText: 'Sağlık turizmi reklam ajansı çözümlerimizi inceleyin'
    }
  },
  {
    slug: 'uluslararasi-hasta-kazanimi',
    termTr: 'Uluslararası Hasta Kazanımı',
    termEn: 'International Patient Acquisition',
    category: 'Strateji & Pazarlama',
    shortAnswer: 'Uluslararası hasta kazanımı, sınır ötesinden tedavi arayışında olan hastaların çok dilli dijital kanallarda keşif aşamasından randevu oluşturma, konsültasyon, kliniğe kabul ve tedavi sonrası takibe kadar geçen tüm basamaklarının planlı, ölçülebilir ve mevzuata uygun biçimde yönetilmesidir.',
    whyImportant: 'Sadece web form veya mesaj toplamak hasta kazanmak anlamına gelmez. Sağlık turizminde hastalar yabancı bir ülkeye seyahat kararı aldığından, güven inşası, hekim referansları ve hızlı ana dil desteği sunulmadığında edinilen adayların randevuya dönüşme oranı düşer.',
    howMeasuredOrApplied: 'Çok kanallı performans pazarlaması (Google Ads, Meta Ads), akıllı lead scoring (aday puanlama) ve 5 dakikada çok dilli dönüş sağlayan çağrı merkezi / AI karşılayıcılar aracılığıyla uygulanır; Edinilen Hasta Başına Maliyet (CPPA) ve Hasta Ömür Boyu Değeri (LTV) metrikleriyle takip edilir.',
    relatedTerms: [
      { term: 'Hasta Yolculuğu (Patient Journey)', slug: 'hasta-yolculugu' },
      { term: 'Nitelikli Hasta Adayı', slug: 'nitelikli-hasta-adayi' },
      { term: 'CPPA (Hasta Edinme Maliyeti)', slug: 'cppa' }
    ],
    relatedService: {
      title: 'Uluslararası Hasta Kazanımı Stratejimiz',
      url: '/uluslararasi-hasta-kazanimi',
      anchorText: 'Uluslararası hasta kazanımı stratejimizi keşfedin'
    }
  },
  {
    slug: 'saglikta-lead',
    termTr: 'Sağlıkta Lead (Potansiyel Hasta)',
    termEn: 'Healthcare Lead',
    category: 'Performans & Metrik',
    shortAnswer: 'Sağlıkta lead; belirli bir tedavi, klinik branş veya hekim hakkında bilgi almak, fiyat veya tedavi planı öğrenmek amacıyla dijital reklamlar, web formları, WhatsApp hatları veya telefon aramaları üzerinden iletişim bilgilerini bırakan potansiyel hasta adayıdır.',
    whyImportant: 'Lead sayısı tek başına klinik başarısını kanıtlamaz. Sağlık sektöründe yüksek hacimli ancak düşük niyetli ve tıbbi uygunluğu olmayan lead akışı, kliniğin hasta temsilcilerini yorar, zaman kaybına ve yüksek reklam israfına neden olur.',
    howMeasuredOrApplied: 'Web form doldurma, WhatsApp buton tıklaması, doğrudan telefon araması veya CRM webhook entegrasyonuyla sayılır. Kampanya optimizasyonunda maliyeti (CPL - Cost per Lead) hesaplanarak verimlilik analizi yapılır.',
    relatedTerms: [
      { term: 'Nitelikli Hasta Adayı', slug: 'nitelikli-hasta-adayi' },
      { term: 'CPL (Hasta Adayı Başına Maliyet)', slug: 'cpl' },
      { term: 'Lead Scoring', slug: 'lead-scoring' }
    ],
    relatedService: {
      title: 'Performans Pazarlama & Lead Üretimi',
      url: '/saglik-turizmi-performans-pazarlama',
      anchorText: 'Performans odaklı reklam modellerimize göz atın'
    }
  },
  {
    slug: 'nitelikli-hasta-adayi',
    termTr: 'Nitelikli Hasta Adayı (Qualified Patient Lead)',
    termEn: 'Qualified Patient Lead (MQL/SQL)',
    category: 'Performans & Metrik',
    shortAnswer: 'Nitelikli hasta adayı; kliniğin sunduğu spesifik cerrahi veya medikal prosedüre tıbbi olarak uygun olan, pasaport ve seyahat engeli bulunmayan, operasyon bütçesi tedavi maliyetiyle örtüşen ve belirli bir zaman aralığında tedavi olma kararlılığı taşıyan ön filtreden geçmiş hasta adayıdır.',
    whyImportant: 'Kliniklerin satış ve sağlık danışmanlığı ekiplerinin verimliliği nitelikli aday oranına bağlıdır. Ham lead yerine nitelikli adaya odaklanmak, hekim görüşmelerinin randevuya ve fiili ameliyat/tedaviye dönüşüm oranını 3 ila 5 kat artırır.',
    howMeasuredOrApplied: 'Açılış sayfalarındaki filtreleyici soru setleri (tedavi zamanı, tıbbi geçmiş özeti, bütçe aralığı) ve CRM üzerinde otomatik lead scoring kuralları uygulanarak filtrelenir. Metrik: Nitelikli Lead Oranı = (Nitelikli Aday / Toplam Lead) * 100.',
    relatedTerms: [
      { term: 'Lead Scoring', slug: 'lead-scoring' },
      { term: 'Sağlık CRM\'i', slug: 'saglik-crm' },
      { term: 'Dönüşüm Oranı', slug: 'donusum-orani' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi CRM ve Filtreleme Sistemleri',
      url: '/saglik-turizmi-crm',
      anchorText: 'Özel sağlık CRM ve aday kalifikasyon çözümlerimizi inceleyin'
    }
  },
  {
    slug: 'hasta-yolculugu',
    termTr: 'Hasta Yolculuğu (Patient Journey)',
    termEn: 'Patient Journey',
    category: 'Strateji & Pazarlama',
    shortAnswer: 'Hasta yolculuğu; uluslararası bir hastanın semptom veya estetik ihtiyacını ilk fark ettiği andan itibaren tedavi yöntemlerini araştırması, klinikleri karşılaştırması, ilk temas kurması, hekim konsültasyonu alması, tedavi için seyahat etmesi ve operasyon sonrası ülkesine dönüp iyileşme sürecini tamamlamasına kadar olan uçtan uca deneyim döngüsüdür.',
    whyImportant: 'Uluslararası hasta karar verme döngüsü acil olmayan cerrahilerde 2 ila 8 hafta sürebilir. Bu döngünün her aşamasında doğru bilgi, hekim güveni, şeffaf süreç anlatımı ve hızlı iletişim sunulmadığında hasta adayları rakip kliniklere yönelir.',
    howMeasuredOrApplied: 'Farkındalık (SEO/GEO), Değerlendirme (Landing Page & Hekim Videoları), Karar (WhatsApp/CRM danışmanlığı) ve Sadakat (Post-op takip) adımları CRM pipeline üzerinde aşama aşama modellenerek dönüşüm süreleri optimize edilir.',
    relatedTerms: [
      { term: 'Uluslararası Hasta Kazanımı', slug: 'uluslararasi-hasta-kazanimi' },
      { term: 'Sağlık CRM\'i', slug: 'saglik-crm' },
      { term: 'Aday İlişkilendirme', slug: 'aday-iliskilendirme' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi Dijital Pazarlama Stratejisi',
      url: '/saglik-turizmi-dijital-pazarlama',
      anchorText: 'Hasta yolculuğu mimarimizi inceleyin'
    }
  },
  {
    slug: 'lead-scoring',
    termTr: 'Lead Scoring (Aday Puanlama)',
    termEn: 'Patient Lead Scoring',
    category: 'Teknoloji & CRM',
    shortAnswer: 'Lead scoring; reklamlar veya organik kanallardan gelen hasta adaylarının form yanıtlarına, bütçe uygunluklarına, seyahat hazırlığına, tıbbi geçmişine ve web sitesindeki davranışlarına göre otomatik olarak sayısal bir değerle (1-100) derecelendirilmesidir.',
    whyImportant: 'Çok dilli satış ekiplerinin en yüksek tedavi potansiyeli taşıyan "sıcak" hasta adaylarına ilk 5 dakika içinde odaklanmasını sağlar. Zaman kaybettiren veya henüz araştırma aşamasında olan adaylara ise otomatik bilgilendirme e-postaları veya WhatsApp dizileri iletilir.',
    howMeasuredOrApplied: 'Sağlık CRM\'inde kurgulanan kurallar ile uygulanır. Örneğin: "Bütçesi hazır" (+30 puan), "Pasaportu var ve 30 gün içinde gelmek istiyor" (+25 puan), "Fotoğraf/tetkik yükledi" (+20 puan). Toplam skoru 70 üzeri olan adaylar anında kıdemli danışmana atanır.',
    relatedTerms: [
      { term: 'Nitelikli Hasta Adayı', slug: 'nitelikli-hasta-adayi' },
      { term: 'Sağlık CRM\'i', slug: 'saglik-crm' },
      { term: 'Dönüşüm Oranı', slug: 'donusum-orani' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi CRM Yazılımı',
      url: '/saglik-turizmi-crm',
      anchorText: 'Akıllı lead scoring altyapımızı keşfedin'
    }
  },
  {
    slug: 'cpl',
    termTr: 'CPL (Hasta Adayı Başına Maliyet)',
    termEn: 'Cost Per Lead (CPL)',
    category: 'Performans & Metrik',
    shortAnswer: 'CPL (Cost Per Lead), reklam kampanyalarında elde edilen her bir potansiyel hasta adayı (lead) başına harcanan reklam bütçesini ifade eden temel performans metriğidir. Toplam reklam harcamasının üretilen toplam lead sayısına bölünmesiyle hesaplanır.',
    whyImportant: 'Kampanyaların erken aşamadaki maliyet verimliliğini gösterir. Ancak tek başına başarı kriteri değildir; düşük CPL yüksek kâr anlamına gelmez çünkü kalitesiz lead\'ler satış ekibinin vaktini boşa harcar. CPL mutlaka kalifikasyon oranıyla birlikte değerlendirilmelidir.',
    howMeasuredOrApplied: 'Formül: CPL = Toplam Reklam Harcaması / Toplam Lead Sayısı. Örnek: 1.000 GBP harcama ile 50 form toplanmışsa CPL = 20 GBP\'dir. Google Ads ve Meta Ads panellerinde dönüşüm takibiyle anlık izlenir.',
    relatedTerms: [
      { term: 'CPPA (Edinilen Hasta Maliyeti)', slug: 'cppa' },
      { term: 'Dönüşüm Oranı', slug: 'donusum-orani' },
      { term: 'Sağlıkta Lead', slug: 'saglikta-lead' }
    ],
    relatedService: {
      title: 'Performans Pazarlama & Reklam Yönetimi',
      url: '/saglik-turizmi-performans-pazarlama',
      anchorText: 'CPL optimizasyon süreçlerimizi inceleyin'
    }
  },
  {
    slug: 'cppa',
    termTr: 'CPPA (Edinilen Hasta Başına Maliyet)',
    termEn: 'Cost Per Patient Acquisition (CPPA)',
    category: 'Performans & Metrik',
    shortAnswer: 'CPPA (Cost Per Patient Acquisition), bir hastanın kliniğe gelerek tedavisini fiilen yaptırmasını sağlamak için harcanan toplam pazarlama ve reklam maliyetidir. Sağlık turizmi yatırımlarının gerçek kârlılığını (ROI) belirleyen en kritik finansal göstergedir.',
    whyImportant: 'Kliniklerin asıl hedefi form toplamak değil, tedaviye gelen hasta kazanmaktır. Düşük CPL ile toplanan 100 lead hiç hasta getirmezse CPPA sonsuzdur. Yüksek CPL ile toplanan 10 nitelikli lead 3 tedaviye dönüşürse CPPA son derece kârlı olabilir.',
    howMeasuredOrApplied: 'Formül: CPPA = Toplam Pazarlama & Reklam Gideri / Tedavi Olan Gerçek Hasta Sayısı. Örnek: 5.000 € reklam bütçesiyle 5 saç ekimi veya obezite cerrahisi hastası kazanılmışsa CPPA = 1.000 €\'dur. CRM ve finans entegrasyonuyla hesaplanır.',
    relatedTerms: [
      { term: 'CPL (Hasta Adayı Başına Maliyet)', slug: 'cpl' },
      { term: 'Lead Scoring', slug: 'lead-scoring' },
      { term: 'Aday İlişkilendirme', slug: 'aday-iliskilendirme' }
    ],
    relatedService: {
      title: 'Uluslararası Hasta Kazanımı Hizmeti',
      url: '/uluslararasi-hasta-kazanimi',
      anchorText: 'CPPA odaklı hasta kazanım modelimizi görün'
    }
  },
  {
    slug: 'saglik-crm',
    termTr: 'Sağlık CRM\'i (Healthcare CRM)',
    termEn: 'Healthcare CRM',
    category: 'Teknoloji & CRM',
    shortAnswer: 'Sağlık CRM\'i; uluslararası hasta adaylarının ilk temasından konsültasyona, teklif sunumundan seyahat planlamasına ve tedavi sonrası takibe kadar tüm iletişim, doküman ve satış aşamalarını KVKK ve GDPR uyumlu şekilde yöneten sağlık turizmine özel müşteri ilişkileri yazılımıdır.',
    whyImportant: 'Genel amaçlı B2B/e-ticaret CRM yazılımları medikal dosya transferi, çok dilli pasaport ve uçuş takibi, hekim konsültasyon notları ve sağlık tanıtım regülasyonları için yetersiz kalır. Özel sağlık CRM\'i hasta kaybını önler ve dönüşüm hızını artırır.',
    howMeasuredOrApplied: 'Reklam kanallarından (Meta, Google, Web) gelen formlar anında CRM\'e düşer; dil bazlı danışmana atanır, otomatik WhatsApp ve SMS bildirimleri tetiklenir, teklif PDF\'leri üretilir ve çağrı kayıtları hasta kartında saklanır.',
    relatedTerms: [
      { term: 'Lead Scoring', slug: 'lead-scoring' },
      { term: 'Call Tracking', slug: 'call-tracking' },
      { term: 'Hasta Yolculuğu', slug: 'hasta-yolculugu' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi CRM Yazılımı',
      url: '/saglik-turizmi-crm',
      anchorText: 'Sağlık turizmine özel CRM çözümlerimizi inceleyin'
    }
  },
  {
    slug: 'medikal-seo',
    termTr: 'Medikal SEO',
    termEn: 'Medical SEO',
    category: 'SEO & Yapay Zekâ',
    shortAnswer: 'Medikal SEO; klinik ve hastanelerin web sitelerini Google ve diğer arama motorlarında hedeflenen yabancı dillerde ve ülkelerde üst sıralara taşımak amacıyla uygulanan; E-E-A-T (Uzmanlık, Deneyim, Yetkinlik, Güvenilirlik), tıbbi içerik doğruluğu ve teknik optimizasyon kurallarını kapsayan arama motoru optimizasyonudur.',
    whyImportant: 'Google, sağlık içeriklerini "YMYL" (Your Money or Your Life) kategorisinde en sıkı denetime tabi tutar. Hekim onayı olmayan, referanssız veya yanıltıcı vaatler içeren medikal siteler ceza alır. Doğru medikal SEO kliniğe sürdürülebilir, sıfır reklam maliyetli organik hasta akışı sağlar.',
    howMeasuredOrApplied: 'Hekim biyografileri, MedicalWebPage ve FAQPage schema işaretlemeleri, uluslararası hreflang etiketleri, semantik içerik kümeleri ve hedef ülke yerel arama niyetine göre optimize edilmiş rehberler ile uygulanır. Organik oturum ve organik lead sayısı ile ölçülür.',
    relatedTerms: [
      { term: 'GEO (Generative Engine Optimization)', slug: 'geo' },
      { term: 'Hreflang', slug: 'hreflang' },
      { term: 'Landing Page', slug: 'landing-page' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi SEO Hizmeti',
      url: '/saglik-turizmi-seo',
      anchorText: 'Uluslararası medikal SEO stratejilerimizi öğrenin'
    }
  },
  {
    slug: 'geo',
    termTr: 'GEO (Generative Engine Optimization)',
    termEn: 'Generative Engine Optimization (GEO)',
    category: 'SEO & Yapay Zekâ',
    shortAnswer: 'GEO (Generative Engine Optimization); yapay zekâ destekli arama motorları ve dil modellerinin (ChatGPT Search, Perplexity, Google Gemini, Copilot) klinik ve hekim marka varlıklarını anlamasını, otoriter bir bilgi kaynağı olarak tanımasını ve tedavi aramalarında kaynak (citation) olarak önermesini sağlayan yeni nesil optimizasyon disiplinidir.',
    whyImportant: 'Uluslararası hastalar artık sadece Google arama sonuçlarına tıklamak yerine, "Türkiye\'de saç ekimi için en güvenilir klinik nasıl seçilir?" gibi karmaşık soruları doğrudan yapay zekâ asistanlarına sormaktadır. GEO yapmayan klinikler yapay zekâ cevaplarında tamamen görünmez kalır.',
    howMeasuredOrApplied: 'Direct Answer formatında net tanımlar, kurumsal şeffaflık (yayın ilkeleri, hekim künyesi), llms.txt dosyası, yapılandırılmış veri (Schema.org @graph) ve tarafsız istatistiksel karşılaştırma tabloları ile uygulanır. AI alıntılanma payı (Share of Model) ile takip edilir.',
    relatedTerms: [
      { term: 'Medikal SEO', slug: 'medikal-seo' },
      { term: 'Hreflang', slug: 'hreflang' },
      { term: 'Sağlık Turizmi Pazarlaması', slug: 'saglik-turizmi-pazarlamasi' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi GEO Çözümleri',
      url: '/saglik-turizmi-geo',
      anchorText: 'Yapay zekâ arama optimizasyonu (GEO) modelimizi inceleyin'
    }
  },
  {
    slug: 'hreflang',
    termTr: 'Hreflang',
    termEn: 'Hreflang Tags',
    category: 'SEO & Yapay Zekâ',
    shortAnswer: 'Hreflang; çok dilli ve çok bölgeli web sitelerinde arama motorlarına belirli bir sayfanın hangi dilde ve hangi coğrafi hedef kitleye yönelik olduğunu bildiren HTML meta etiketidir. Örneğin Türkçe konuşan bir kullanıcıya tr, İngiltere\'deki bir kullanıcıya en-GB içerik sunulmasını sağlar.',
    whyImportant: 'Sağlık turizminde aynı tedaviyi hem İngiltere (en-GB) hem Almanya (de-DE) hem de Türkiye (tr-TR) için sunarken arama motorlarının içeriği "kopya içerik" (duplicate content) olarak algılamasını önler ve doğru ülkede doğru para birimi/dil eşleşmesini sağlar.',
    howMeasuredOrApplied: 'HTML `<head>` etiketine veya XML sitemap dosyasına `rel="alternate" hreflang="en-GB" href="..."` ve varsayılan `hreflang="x-default"` biçiminde karşılıklı (bidirectional) olarak eklenir. Google Search Console Uluslararası Hedefleme denetimleriyle doğrulanır.',
    relatedTerms: [
      { term: 'Medikal SEO', slug: 'medikal-seo' },
      { term: 'Landing Page', slug: 'landing-page' },
      { term: 'GEO', slug: 'geo' }
    ],
    relatedService: {
      title: 'Uluslararası Web Tasarım & Teknik SEO',
      url: '/saglik-turizmi-web-tasarim',
      anchorText: 'Teknik ve çok dilli web mimarimizi inceleyin'
    }
  },
  {
    slug: 'donusum-orani',
    termTr: 'Dönüşüm Oranı (Conversion Rate)',
    termEn: 'Conversion Rate (CR)',
    category: 'Performans & Metrik',
    shortAnswer: 'Dönüşüm oranı; bir sağlık turizmi web sitesini veya açılış sayfasını ziyaret eden kullanıcıların yüzde kaçının hedeflenen aksiyonu (iletişim formu doldurma, WhatsApp hattına yazma veya telefonla arama) gerçekleştirdiğini gösteren orandır.',
    whyImportant: 'Dönüşüm oranı %2 olan bir klinik, web sitesini optimize ederek oranı %4\'e çıkardığında aynı reklam harcamasıyla iki kat daha fazla potansiyel hasta adayı elde eder. Bu da hasta edinme maliyetlerini doğrudan yarıya düşürür.',
    howMeasuredOrApplied: 'Formül: CR (%) = (Dönüşüm Sayısı / Toplam Ziyaretçi Sayısı) * 100. A/B testleri, sayfa açılış hızı iyileştirmeleri, güven unsurları ve yalın mobil form tasarımlarıyla optimize edilir.',
    relatedTerms: [
      { term: 'Landing Page', slug: 'landing-page' },
      { term: 'CPL (Hasta Adayı Başına Maliyet)', slug: 'cpl' },
      { term: 'Nitelikli Hasta Adayı', slug: 'nitelikli-hasta-adayi' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi Landing Page Tasarımı',
      url: '/saglik-turizmi-landing-page',
      anchorText: 'Dönüşüm artıran landing page çözümlerimiz'
    }
  },
  {
    slug: 'landing-page',
    termTr: 'Landing Page (Açılış Sayfası)',
    termEn: 'Medical Landing Page',
    category: 'Strateji & Pazarlama',
    shortAnswer: 'Landing page (açılış sayfası); dijital reklam kampanyalarından gelen hasta adaylarının karşılandığı, dikkat dağıtıcı genel menülerden arındırılmış, yalnızca belirli bir medikal tedaviye ve güven verici hasta aksiyonuna odaklanan tek sayfalık dönüşüm arayüzüdür.',
    whyImportant: 'Reklam trafiğini kliniğin ana sayfasına göndermek ziyaretçilerin kaybolmasına ve çıkış yapmasına yol açar. İyi tasarlanmış bir medikal landing page; hekim uzmanlığı, tedavi süreci, hasta yorumları ve net bir iletişim çağrısıyla (CTA) dönüşüm oranını katlar.',
    howMeasuredOrApplied: '3 saniyenin altında mobil açılış hızı, hekim sertifikaları, şeffaf tedavi adımları ve tek tıkla WhatsApp/Form bağlantısı içerecek şekilde kodlanır. Ziyaretçi-lead dönüşüm oranı (CR) ve sıçrama oranı (Bounce Rate) ile ölçülür.',
    relatedTerms: [
      { term: 'Dönüşüm Oranı', slug: 'donusum-orani' },
      { term: 'Medikal SEO', slug: 'medikal-seo' },
      { term: 'Sağlıkta Lead', slug: 'saglikta-lead' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi Web Sitesi & Landing Page',
      url: '/saglik-turizmi-landing-page',
      anchorText: 'Dönüşüm odaklı medikal landing page tasarımımızı inceleyin'
    }
  },
  {
    slug: 'call-tracking',
    termTr: 'Call Tracking (Arama Takibi)',
    termEn: 'Healthcare Call Tracking',
    category: 'Teknoloji & CRM',
    shortAnswer: 'Call tracking; hastaların web sitesinde gördükleri telefon numaralarını aradıklarında, bu aramanın hangi reklam kanalından, hangi anahtar kelimeden ve hangi ülkeden geldiğini dinamik telefon numaraları (DNI) kullanarak tespit eden analitik teknolojisidir.',
    whyImportant: 'Özellikle yüksek bütçeli cerrahi ve diş tedavilerinde uluslararası hastalar doğrudan telefonla aramayı tercih edebilir. Call tracking olmadan telefonla gelen hastaların hangi reklam bütçesinden kazanıldığı bilinemez ve bütçe yanlış optimize edilir.',
    howMeasuredOrApplied: 'Web sitesine yerleştirilen dinamik script ile Google Ads, Meta Ads veya SEO ziyaretçilerine farklı sanal numaralar gösterilir. Görüşme süresi, ses kaydı ve kaynak verisi CRM\'e hasta kartı olarak işlenir.',
    relatedTerms: [
      { term: 'Aday İlişkilendirme', slug: 'aday-iliskilendirme' },
      { term: 'Sağlık CRM\'i', slug: 'saglik-crm' },
      { term: 'CPL', slug: 'cpl' }
    ],
    relatedService: {
      title: 'Sağlık Turizmi CRM ve Takip Sistemleri',
      url: '/saglik-turizmi-crm',
      anchorText: 'Call tracking entegreli CRM mimarimiz'
    }
  },
  {
    slug: 'aday-iliskilendirme',
    termTr: 'Aday İlişkilendirme (Attribution Modeling)',
    termEn: 'Patient Attribution Modeling',
    category: 'Performans & Metrik',
    shortAnswer: 'Aday ilişkilendirme; bir hastanın kliniğe gelene kadar temas ettiği tüm pazarlama temas noktalarının (Google arama, Instagram videosu, retargeting reklamı, e-posta bülteni) nihai tedavi kararına olan katkısını matematiksel olarak paylaştıran analitik yöntemdir.',
    whyImportant: 'Sağlık turizmi hastaları ilk gördükleri reklama tıklayıp hemen ameliyat satın almazlar. Sadece "son tıklama"ya (last-click) odaklanmak, hastanın güven duymasını sağlayan ilk YouTube videosunu veya hekim röportajını değersiz göstererek bütçenin yanlış kesilmesine neden olur.',
    howMeasuredOrApplied: 'Veri odaklı ilişkilendirme (Data-Driven Attribution) veya çok kanallı temas modelleri (W-Shaped, Time-Decay) CRM ve Google Analytics 4 (GA4) entegrasyonuyla kurgulanır. Hangi kanalın farkındalık, hangisinin kapanış sağladığı şeffaflaşır.',
    relatedTerms: [
      { term: 'Hasta Yolculuğu', slug: 'hasta-yolculugu' },
      { term: 'CPPA (Edinilen Hasta Maliyeti)', slug: 'cppa' },
      { term: 'Call Tracking', slug: 'call-tracking' }
    ],
    relatedService: {
      title: 'Performans Pazarlama & Uçtan Uca Analitik',
      url: '/saglik-turizmi-performans-pazarlama',
      anchorText: 'İlişkilendirme ve analitik modelimizi keşfedin'
    }
  }
];
