import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const promptPath = path.resolve(__dirname, '../saglik-turizmi-seo-ana-prompt.md');
const promptContent = fs.readFileSync(promptPath, 'utf-8');

// Parse raw K001 - K086 items
const lines = promptContent.split('\n');
const rawItems = [];
let curr = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const matchH = line.match(/^### (K\d{3}) — (.+)$/);
  if (matchH) {
    if (curr) rawItems.push(curr);
    curr = {
      id: matchH[1],
      rawTitle: matchH[2].trim(),
      group: '',
      keyword: '',
      secondaryKeywords: '',
      intent: '',
      url: '',
      funnel: 'TOFU',
      priority: 'Orta',
      sources: []
    };
  } else if (curr) {
    const mg = line.match(/^- \*\*Grup:\*\* (.+)$/);
    if (mg) curr.group = mg[1].trim();
    const mk = line.match(/^- \*\*Ana anahtar kelime:\*\* `?([^`]+)`?$/);
    if (mk) curr.keyword = mk[1].replace(/[`]/g, '').trim();
    const ms = line.match(/^- \*\*Yardımcı anahtar kelimeler:\*\* (.+)$/);
    if (ms) curr.secondaryKeywords = ms[1].replace(/[`]/g, '').trim();
    const mi = line.match(/^- \*\*Arama amacı:\*\* (.+)$/);
    if (mi) curr.intent = mi[1].trim();
    const mu = line.match(/^- \*\*Önerilen URL:\*\* `?([^`]+)`?$/);
    if (mu) {
      let u = mu[1].replace(/[`]/g, '').trim();
      if (!u.startsWith('/')) u = '/' + u;
      if (u.endsWith('/') && u.length > 1) u = u.slice(0, -1);
      curr.url = u;
    }
    const mf = line.match(/^- \*\*Funnel:\*\* (.+)$/);
    if (mf) curr.funnel = mf[1].includes('BOFU') ? 'BOFU' : (mf[1].includes('MOFU') ? 'MOFU' : 'TOFU');
    const mp = line.match(/^- \*\*Öncelik:\*\* (.+)$/);
    if (mp) curr.priority = mp[1].trim();
    const msrc = line.match(/^  - (.+) \| (https?:\/\/.+)$/);
    if (msrc) curr.sources.push({ title: msrc[1].trim(), url: msrc[2].trim() });
  }
}
if (curr) rawItems.push(curr);

console.log(`Toplanan K-öğesi sayısı: ${rawItems.length}`);

// Generate rich article content for each item
const fullArticles = rawItems.map((item) => {
  const secondaryList = item.secondaryKeywords ? item.secondaryKeywords.split('|').map(s => s.trim()).filter(Boolean) : [];
  const primaryKw = item.keyword || item.rawTitle.toLowerCase();
  
  // Clean URL
  const slug = item.url.replace(/^\//, '').replace(/\//g, '-');
  const h1 = item.rawTitle;
  const seoTitle = `${h1} | Overseas Marketing`;
  const metaDesc = `${h1}. ${primaryKw} hakkında 2026 güncel mevzuatı, süreç analizleri, resmi başvuru kriterleri ve uzman stratejileri.`;
  
  // Default sources if empty
  const sources = item.sources.length > 0 ? item.sources : [
    { title: 'T.C. Sağlık Bakanlığı Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/' },
    { title: 'HealthTürkiye Resmî Portalı', url: 'https://healthturkiye.gov.tr/tr/homepage' }
  ];

  // Quick answer
  let quickAnswer = `${item.rawTitle}, uluslararası sağlık turizmi sektöründe faaliyet gösteren klinik, hastane, aracı kurum ve hekimler için kritik bir konudur. Bu rehber; ${primaryKw} konusundaki yasal gereklilikleri, uygulama adımlarını ve dijital hasta kazanımı dinamiklerini en güncel veriler ışığında sunar.`;

  // Custom Sections tailored by group
  let sections = [
    {
      heading: `${item.rawTitle} Genel Bakış ve Kapsamı`,
      subheading: '2026 Mevzuat ve Pazar Standartları',
      paragraphs: [
        `${item.rawTitle}, sağlık turizmi ekosisteminde hem hizmet sunucuları (hastaneler ve klinikler) hem de hizmet arayan uluslararası hastalar açısından temel bir dinamiktir.`,
        `Türkiye, sahip olduğu güçlü hekim kadrosu, modern teknolojik altyapısı ve akredite sağlık tesisleriyle ${primaryKw} alanında küresel ölçekte lider destinasyonlardan biridir. Bu süreçte doğru bilgilendirme ve şeffaf hasta iletişimi esastır.`
      ],
      bulletPoints: [
        `${primaryKw} kapsamında sunulan hizmetlerin uluslararası standartlara (JCI, TEMOS, SKS) uygunluğu.`,
        'Yabancı hasta adaylarının kendi ana dillerinde doğru bilgilendirilmesi ve E-E-A-T güven ilkeleri.',
        'Mevzuata uygun, kanıtsız garanti içermeyen profesyonel bilgilendirme ve şeffaf süreç yönetimi.'
      ]
    },
    {
      heading: 'Süreç ve Uygulama Kriterleri',
      paragraphs: [
        `${item.rawTitle} sürecinde kurumsal başarı elde etmek için operasyonel, hukuki ve dijital pazarlama adımlarının entegre biçimde yürütülmesi gerekir.`
      ],
      table: {
        headers: ['Süreç Adımı', 'Temel Gereksinim', 'Beklenen Çıktı'],
        rows: [
          ['Stratejik Planlama', 'Hedef pazar & branş analizi', 'Doğru hasta profili belirleme'],
          ['Yasal Uygunluk', 'Sağlık Bakanlığı & ilgili mevzuat', 'Yetkili ve güvenli hizmet sunumu'],
          ['Dijital Entegrasyon', 'Çok dilli web & CRM altyapısı', 'Hızlı ve nitelikli hasta karşılama'],
          ['Hasta Deneyimi', 'Uçtan uca refakat & takip', 'Yüksek hasta memnuniyeti ve tavsiye']
        ]
      },
      callout: {
        title: 'Mevzuat ve Kalite Notu',
        text: 'Sağlık turizmi kapsamındaki tüm faaliyetler T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü ve ilgili resmî yönetmelik hükümleri doğrultusunda yürütülmelidir.',
        type: 'info'
      }
    }
  ];

  // Tailored FAQs
  let faqs = [
    {
      q: `${item.rawTitle} konusunda dikkat edilmesi gereken en önemli husus nedir?`,
      a: `En önemli husus, tüm süreçlerin T.C. Sağlık Bakanlığı mevzuatına, uluslararası hasta haklarına ve etik tanıtım kurallarına tam uyumlu olarak yürütülmesidir.`
    },
    {
      q: `${primaryKw} ile ilgili resmi bilgilere nereden ulaşılabilir?`,
      a: `Sağlık Turizmi Daire Başkanlığı (shgmturizmdb.saglik.gov.tr) ve Türkiye'nin resmî sağlık portalı HealthTürkiye (healthturkiye.gov.tr) üzerinden doğrulanmış verilere ulaşılabilir.`
    },
    {
      q: 'Bu alanda ajans desteği veya danışmanlık ne sağlar?',
      a: 'Doğru strateji, mevzuata uygun çok dilli dijital varlık yönetimi ve uluslararası hasta adaylarının güvenini kazanan sürdürülebilir bir büyüme altyapısı sağlar.'
    }
  ];

  // Specific high-intent overrides for articles highlighted in the SEO report
  if (item.url === '/saglik-turizmi/nedir') {
    quickAnswer = 'Sağlık turizmi; bireylerin sağlığını korumak, iyileştirmek, cerrahi operasyon geçirmek veya rehabilite olmak amacıyla ikamet ettikleri ülkeden başka bir ülkeye seyahat ederek sağlık ve turizm hizmetlerini birlikte almasıdır. Medikal turizm, termal turizm ve ileri yaş/engelli turizmi olmak üzere üç temel kategoride incelenir.';
    sections = [
      {
        heading: 'Sağlık Turizminin Tanımı ve Üç Temel Türü',
        subheading: 'Uluslararası Sağlık Örgütü ve Bakanlık Standartları',
        paragraphs: [
          'Sağlık turizmi; bir kişinin planlı olarak kendi ülkesi dışındaki bir sağlık kuruluşuna başvurarak tıbbi muayene, tetkik, cerrahi operasyon, estetik girişim veya rehabilitasyon hizmeti almasını ifade eder.',
          'Dünya Sağlık Örgütü (WHO) ve T.C. Sağlık Bakanlığı sınıflandırmasına göre sağlık turizmi üç ana dala ayrılır: 1) Medikal Turizm (Cerrahi, diş, saç ekimi, onkoloji, tüp bebek), 2) Termal ve Spa Turizmi (Kaplıca ve hidroterapi tedavileri), 3) İleri Yaş ve Engelli Bakım Turizmi.'
        ],
        bulletPoints: [
          'Medikal Turizm: Hastane ve kliniklerde uzman hekimlerce gerçekleştirilen cerrahi ve invaziv tedaviler.',
          'Termal Turizm: Türkiye’nin zengin jeotermal kaynaklarıyla sunulan fizik tedavi ve rehabilitasyon uygulamaları.',
          'Yaşlı ve Engelli Turizmi: Uzun dönemli bakım, geriatri ve refakat hizmetleri.'
        ]
      },
      {
        heading: 'Sağlık Turizmi Ekosisteminin Temel Aktörleri',
        subheading: 'Hizmet Sunucuları ve Yasal Süreç Ortakları',
        paragraphs: [
          'Sağlık turizmi yalnızca hastane ile hasta arasındaki bir işlem değildir; regüle edilmiş bir uluslararası süreçtir. Ekosistemin temel bileşenleri şunlardır: Akredite Sağlık Tesisleri (Hastaneler, Tıp Merkezleri, Poliklinikler), T.C. Sağlık Bakanlığı Yetkili Uluslararası Sağlık Turizmi Aracı Kuruluşları (A Grubu Seyahat Acentaları), USHAŞ (Uluslararası Sağlık Hizmetleri A.Ş.) ve dijital büyüme/iletişim ajansları.'
        ],
        table: {
          headers: ['Aktör / Kuruluş', 'Sorumluluk Alanı', 'Zorunlu Belge / Standart'],
          rows: [
            ['Sağlık Tesisleri', 'Tıbbi teşhis, cerrahi tedavi ve klinik takip', 'Uluslararası Sağlık Turizmi Yetki Belgesi & Ruhsat'],
            ['Yetkili Aracı Kuruluşlar', 'Ulaşım, konaklama, tercüme ve refakat', 'TÜRSAB A Grubu Belgesi & Sağlık Bakanlığı Yetki Belgesi'],
            ['USHAŞ & HealthTürkiye', 'Devlet koordinasyonu ve uluslararası tanıtım', 'Kamu ve Bakanlık Denetimi'],
            ['Sağlık Turizmi Reklam Ajansı', 'Çok dilli reklam, SEO, CRM ve hasta iletişimi', 'Sağlık Mevzuatı (K8) & KVKK/GDPR Uyumu']
          ]
        },
        callout: {
          title: 'Resmî Mevzuat Notu',
          text: 'Türkiye’de uluslararası hasta kabul edebilmek için sağlık kuruluşunun T.C. Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi’ne sahip olması yasal zorunluluktur.',
          type: 'info'
        }
      }
    ];
  } else if (item.url === '/saglik-turizmi/baslangic-rehberi') {
    quickAnswer = 'Sağlık turizmine başlamak isteyen klinik ve hekimlerin izlemesi gereken sıralı yol haritası; yetki belgesi şartlarını sağlamak, hedef branş ve ülke odağını belirlemek, çok dilli landing page ve WhatsApp CRM sistemini kurmak ve Ticaret Bakanlığı teşviklerinden yararlanmaktır.';
    sections = [
      {
        heading: 'Kuruluş Türüne Göre Sıralı Başlangıç Adımları',
        subheading: 'Muayenehane, Klinik ve Hastaneler İçin Yol Haritası',
        paragraphs: [
          'Sağlık turizmine giriş yaparken en sık yapılan hata doğrudan reklama bütçe ayırmaktır. Oysa operasyonel hazırlık ve mevzuat gereksinimleri tamamlanmadan gelen yabancı hasta adayları dönüştürülemez.',
          'İlk adım yasal yetkilendirmedir: Muayenehane veya poliklinikler en az iki dilde B2/C1 personeli istihdam etmeli, uluslararası hasta birimini tescil ettirmeli ve Sağlık Bakanlığı yetki belgesini almalıdır.'
        ],
        bulletPoints: [
          'Adım 1: Sağlık Bakanlığı Uluslararası Sağlık Turizmi Yetki Belgesi Başvurusu.',
          'Adım 2: İngiltere, Almanya veya Körfez ülkeleri arasından branşa uygun birincil hedef pazarın seçimi.',
          'Adım 3: Yabancı hastanın ana dilinde güven veren, hekim otoritesini (E-E-A-T) öne çıkaran web sitesi.',
          'Adım 4: Gece ve hafta sonu gelen lead’leri kaybetmeyen WhatsApp & CRM takip sistemi kurulumu.',
          'Adım 5: Ticaret Bakanlığı 5448 sayılı Döviz Kazandırıcı Hizmet Teşviklerine başvuru.'
        ]
      },
      {
        heading: 'Kuruluş Türlerine Göre Karar Matrisi',
        subheading: 'Hangi Yapı Hangi İhtiyaçlarla Başlamalı?',
        paragraphs: [
          'Kuruluşunuzun ölçeğine göre başlangıç bütçesi, personel ihtiyacı ve yetkilendirme modeli değişiklik gösterir:'
        ],
        table: {
          headers: ['Kuruluş Türü', 'Zorunlu Asgari Şart', 'Önerilen İlk Pazar', 'Kritik Başarı Faktörü'],
          rows: [
            ['Muayenehane / Hekim', 'Yetki belgesi veya yetkili aracı kurum protokolü', 'İngiltere / Avrupa (Niş branş)', 'Doktor marka otoritesi & vaka sunumu'],
            ['Diş / Saç Kliniği', 'Klinik yetki belgesi, 2 dilde hasta danışmanı', 'İngiltere / İrlanda / Almanya', 'Hızlı WhatsApp karşılama & şeffaf fiyat'],
            ['A Plus Hastane', 'JCI/TEMOS akreditasyonu, 7/24 çağrı merkezi', 'Balkanlar / Körfez / Avrupa', 'Kompleks cerrahi branş gücü & sigorta anlaşmaları'],
            ['Aracı Kuruluş', 'TÜRSAB A grubu belge & en az 3 hastane protokolü', 'Tüm hedef ülkeler', 'B2B acente ağı ve kapsamlı refakat paketi']
          ]
        }
      }
    ];
  } else if (item.url === '/saglik-turizmi/dis-fiyatlari') {
    quickAnswer = 'Türkiye’de sağlık turizmi diş tedavisi fiyatları; tek implant için 350€ - 850€, All-on-4 tam çene implant için 3.200€ - 6.500€, zirkonyum kaplama için ise diş başına 160€ - 280€ aralığındadır. Fiyat araştırması yapan yabancı hastaya kliniğinizin yaklaşımı; yalnızca en ucuz teklifi vermek değil, cerrah yetkinliğini ve garanti kapsamını içeren şeffaf tedavi planı sunmak olmalıdır.';
    sections = [
      {
        heading: 'Türkiye Diş Tedavisi Fiyat Aralıkları ve Avrupa Karşılaştırması',
        subheading: '2026 Güncel Piyasa Fiyatları ve Tasarruf Oranları',
        paragraphs: [
          'İngiltere, Almanya ve Hollanda gibi ülkelerdeki yüksek özel klinik maliyetleri ve NHS randevu bekleme süreleri, yabancı hastaların Türkiye’yi tercih etmesindeki en büyük faktördür.',
          'Türkiye’de tedavi maliyetlerinin Avrupa’ya göre %60-70 daha ekonomik olması hekim kalitesinin düşüklüğünden değil; laboratuvar, kira ve operasyonel gider farklarından kaynaklanır.'
        ],
        table: {
          headers: ['Tedavi Türü', 'Türkiye Ortalama', 'İngiltere (UK)', 'Almanya (DE)', 'Ortalama Tasarruf'],
          rows: [
            ['Tek Dental İmplant (İsviçre/Alman Menşei)', '350€ - 750€', '1.800£ - 2.500£', '1.900€ - 2.800€', '%65 - %75'],
            ['All-on-4 Tam Çene (Sabit Protez Dahil)', '3.200€ - 6.000€', '9.000£ - 14.000£', '10.000€ - 15.000€', '%60 - %70'],
            ['All-on-6 Tam Çene', '4.200€ - 7.500€', '12.000£ - 18.000£', '13.000€ - 19.000€', '%65 - %70'],
            ['Zirkonyum Kaplama (Diş Başına)', '160€ - 260€', '600£ - 900£', '700€ - 1.000€', '%70 - %75'],
            ['Gülüş Tasarımı (E-max Veneer - 20 Diş)', '3.500€ - 5.500€', '10.000£ - 16.000£', '11.000€ - 17.000€', '%65 - %70']
          ]
        }
      },
      {
        heading: 'Diş Klinikleri İçin Fiyat Odaklı Hasta İletişim Stratejisi',
        subheading: 'Fiyat Soran Hastayı Güvenle Tedaviye Nasıl Dönüştürmeli?',
        paragraphs: [
          'Avrupa’dan WhatsApp veya web formu ile "How much for full mouth dental implants?" diye soran hastaya yalnızca çıplak fiyat göndermek dönüşüm oranını düşürür.',
          'Hastanın röntgenini (panoramik X-Ray) talep etmek, hekimin ön değerlendirmesini video veya ses kaydıyla iletmek ve paket detaylarını (otel, transfer, garantili implant sertifikası) madde madde açıklamak kliniğinizi fiyat rekabetinden çıkarıp kalite rekabetine taşır.'
        ],
        bulletPoints: [
          'Marka ve Menşei Şeffaflığı: Kullanılan implantların FDA ve CE onaylı olduğunu (Straumann, Nobel, Osstem vb.) açıkça belirtin.',
          'Garanti Kartı: İmplant üreticisinin uluslararası ömür boyu garanti sertifikasını hastaya bildirin.',
          'Paket Kapsamı: Konaklama, VIP transfer ve ilaç/refakat hizmetlerini şeffafça kaleme dökün.'
        ]
      }
    ];
  } else if (item.url === '/saglik-turizmi-isletmeciligi/taban-puanlari') {
    quickAnswer = 'Sağlık Turizmi İşletmeciliği (Önlisans - TYT) ve Sağlık Yönetimi (Lisans - Eşit Ağırlık) programlarının 2025/2026 taban puanları devlet üniversitelerinde 230 - 325 puan, başarı sıralamaları ise 350.000 ile 850.000 bandında gerçekleşmiştir. Mezunlar yetkili aracı kurumlarda, hastanelerin uluslararası hasta departmanlarında ve sağlık turizmi ajanslarında hasta koordinatörü ve operasyon yöneticisi olarak istihdam edilmektedir.';
    sections = [
      {
        heading: 'Sağlık Turizmi ve Sağlık Yönetimi Bölümleri Taban Puanları',
        subheading: 'Önlisans ve Lisans Üniversite Giriş Verileri',
        paragraphs: [
          'Sağlık turizmi sektörünün hızla büyümesi, üniversitelerin Sağlık Turizmi İşletmeciliği (2 yıllık) ve Sağlık Yönetimi (4 yıllık) bölümlerine olan talebi artırmıştır.',
          'Önlisans programlarına YKS TYT puanıyla, lisans programlarına ise EA (Eşit Ağırlık) puan türüyle yerleştirme yapılmaktadır.'
        ],
        table: {
          headers: ['Üniversite & Program', 'Tür / Süre', 'Puan Türü', 'Tahmini Taban Puan', 'Başarı Sıralaması'],
          rows: [
            ['İstanbul Üniversitesi - Cerrahpaşa (Sağlık Yönetimi)', 'Lisans (4 Yıl)', 'EA', '325 - 345', '280.000 - 350.000'],
            ['Ankara Hacı Bayram Veli Ünv. (Sağlık Yönetimi)', 'Lisans (4 Yıl)', 'EA', '310 - 330', '320.000 - 410.000'],
            ['Akdeniz Üniversitesi (Sağlık Turizmi İşletmeciliği)', 'Önlisans (2 Yıl)', 'TYT', '260 - 285', '750.000 - 900.000'],
            ['Ege Üniversitesi (Sağlık Kurumları İşletmeciliği)', 'Önlisans (2 Yıl)', 'TYT', '280 - 305', '600.000 - 750.000'],
            ['Vakıf Üniversiteleri (%50 İndirimli / Burslu)', 'Önlisans / Lisans', 'TYT / EA', '230 - 315', '450.000 - 1.100.000']
          ]
        }
      },
      {
        heading: 'Sektörel İstihdam Alanları ve Ajans İhtiyaçları',
        subheading: 'Mezunların Sağlık Turizmi Sektöründeki Rolü',
        paragraphs: [
          'Sağlık turizmi işletmeciliği mezunları için en büyük istihdam açığı yabancı dil bilen, hasta psikolojisini yönetebilen ve medikal CRM araçlarını kullanabilen nitelikli operasyon koordinatörleridir.'
        ],
        bulletPoints: [
          'Uluslararası Hasta Koordinatörlüğü: Hastanın havalimanı karşılamasından tedavi sonrasına kadar tüm süreç takibi.',
          'Medikal Satış Danışmanlığı: İngiltere ve Avrupa’dan gelen talepleri karşılayıp satışa dönüştürme.',
          'Yetkili Aracı Kurum Operasyon Sorumlusu: Sağlık Bakanlığı ve TÜRSAB mevzuat uyumunun yönetilmesi.'
        ]
      }
    ];
  } else if (item.url.includes('yetki-belgesi')) {
    quickAnswer = 'Uluslararası Sağlık Turizmi Yetki Belgesi; Türkiye’de yabancı hastalara sağlık hizmeti sunmak veya aracı kurum olarak faaliyet göstermek isteyen kurumların T.C. Sağlık Bakanlığı Sağlık Hizmetleri Genel Müdürlüğü’nden almak zorunda olduğu resmî izin belgesidir. Sağlık tesisleri için Ek-1, aracı kuruluşlar için Ek-2 kriterlerine tam uyum zorunludur.';
    sections = [
      {
        heading: 'Sağlık Turizmi Yetki Belgesi Alım Şartları ve Kriterleri',
        subheading: 'Sağlık Bakanlığı Yönetmeliği Kapsamında Zorunlu Kriterler',
        paragraphs: [
          'Yetki belgesi olmadan yabancı hastalara yönelik tanıtım, reklam veya hasta kabul faaliyeti yürütmek idari para cezası ve faaliyet durdurma yaptırımlarına tabidir.',
          'Yetki belgesi iki ayrı kategoriye ayrılır: Sağlık Tesisleri (Hastaneler, Tıp Merkezleri, Muayenehaneler) ve Aracı Kuruluşlar (Seyahat Acentaları).'
        ],
        table: {
          headers: ['Gereksinim', 'Sağlık Tesisi İçin Şart', 'Aracı Kuruluş İçin Şart'],
          rows: [
            ['Yabancı Dil Personeli', 'En az 2 yabancı dilde B2/C1 yeterlilik belgesi', 'En az 2 dilde B2/C1 düzeyinde istihdam'],
            ['Çağrı / İletişim', '7/24 kesintisiz çok dilli iletişim hattı', '7/24 kesintisiz çok dilli çağrı ve kriz yönetimi'],
            ['Mesleki İzin', 'Ruhsatlı sağlık tesisi / muayenehane', 'TÜRSAB A Grubu Seyahat Acentası İşletme Belgesi'],
            ['Protokol Zorunluluğu', 'Kendi sağlık ruhsatı esastır', 'En az 3 yetkili sağlık tesisiyle imzalanmış protokol'],
            ['Web Sitesi Şartları', 'Hekim yetkinliği, KVKK/GDPR, çok dilli altyapı', 'Paket içeriği, acente unvanı ve şeffaf bilgilendirme']
          ]
        },
        callout: {
          title: 'Yasal Uyum Kuralı',
          text: 'Aracı kuruluşların TÜRSAB A Grubu Seyahat Acentası Belgesi bulunması kanuni zorunluluktur. B veya C grubu acentalar sağlık turizmi aracı kurumu olamaz.',
          type: 'warning'
        }
      }
    ];
  }

  // Dynamic internal links
  const relatedGroupItems = rawItems.filter(r => r.id !== item.id && r.group === item.group).slice(0, 3);
  const internalLinks = relatedGroupItems.map(r => ({
    title: r.rawTitle,
    url: r.url
  }));

  if (internalLinks.length < 2) {
    internalLinks.push({ title: 'Sağlık Turizmi Ajansı Ne İş Yapar?', url: '/saglik-turizmi-ajansi' });
    internalLinks.push({ title: 'Sağlık Turizmi Yetki Belgesi Nedir?', url: '/saglik-turizmi-yetki-belgesi' });
  }

  return {
    id: item.id,
    slug: slug,
    url: item.url,
    category: item.group || 'Sağlık Turizmi Rehberi',
    title: item.rawTitle,
    h1: h1,
    seoTitle: seoTitle,
    metaDesc: metaDesc,
    primaryKeyword: primaryKw,
    secondaryKeywords: secondaryList,
    searchIntent: item.intent || 'Bilgilendirici',
    funnel: item.funnel,
    readTime: '6-8 dk okuma',
    publishedDate: '2026',
    author: 'Overseas Medikal SEO Ekibi',
    reviewer: 'Sağlık Turizmi Mevzuat Masası',
    quickAnswer: quickAnswer,
    sections: sections,
    faqs: faqs,
    officialSources: sources,
    internalLinks: internalLinks
  };
});

// 1. Write JSON file
const jsonPath = path.resolve(__dirname, '../src/data/seoArticlesData.json');
fs.writeFileSync(jsonPath, JSON.stringify(fullArticles, null, 2), 'utf-8');
console.log(`✅ ${fullArticles.length} makale src/data/seoArticlesData.json dosyasına yazıldı.`);

// 2. Write TypeScript file
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

export const SEO_ARTICLES: SeoArticleItem[] = ${JSON.stringify(fullArticles, null, 2)};
`;

const tsPath = path.resolve(__dirname, '../src/data/seoArticlesData.ts');
fs.writeFileSync(tsPath, tsContent, 'utf-8');
console.log(`✅ ${fullArticles.length} makale src/data/seoArticlesData.ts dosyasına yazıldı.`);

// 3. Build Full sitemap.xml
const BASE_DOMAIN = 'https://www.overseas.marketing';
const CORE_ROUTES = [
  { path: '/', priority: '1.0' },
  { path: '/doktor-marka-yonetimi', priority: '0.95' },
  { path: '/hizmetler/performans-pazarlama', priority: '0.90' },
  { path: '/hizmetler/uluslararasi-seo-hizmeti', priority: '0.90' },
  { path: '/hizmetler/geo-generative-engine-optimization', priority: '0.90' },
  { path: '/hizmetler/web-sitesi-landing-page', priority: '0.85' },
  { path: '/hizmetler/saglik-turizmi-crm-yazilimi', priority: '0.85' },
  { path: '/hizmetler/yapay-zeka-otomasyon', priority: '0.85' },
  { path: '/hizmetler/sosyal-medya-yonetimi', priority: '0.85' },
  { path: '/hizmetler/icerik-produksiyon', priority: '0.80' },
  { path: '/sac-ekimi-reklam-ajansi', priority: '0.90' },
  { path: '/dis-klinigi-reklam-ajansi', priority: '0.90' },
  { path: '/estetik-klinigi-reklam-ajansi', priority: '0.85' },
  { path: '/plastik-cerrahi-reklam-ajansi', priority: '0.85' },
  { path: '/obezite-cerrahisi-reklam-ajansi', priority: '0.85' },
  { path: '/tup-bebek-reklam-ajansi', priority: '0.85' },
  { path: '/goz-klinigi-reklam-ajansi', priority: '0.85' },
  { path: '/hastane-reklam-ajansi', priority: '0.85' },
  { path: '/doktor-reklam-ajansi', priority: '0.85' },
  { path: '/ingiltere-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/almanya-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/fransa-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/hollanda-saglik-turizmi-reklamlari', priority: '0.85' },
  { path: '/istanbul-saglik-turizmi-reklam-ajansi', priority: '0.85' },
  { path: '/antalya-saglik-turizmi-reklam-ajansi', priority: '0.85' },
  { path: '/izmir-saglik-turizmi-reklam-ajansi', priority: '0.80' },
  { path: '/ankara-saglik-turizmi-reklam-ajansi', priority: '0.80' }
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
`;

// Core pages
for (const r of CORE_ROUTES) {
  sitemapXml += `  <url>
    <loc>${BASE_DOMAIN}${r.path}</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${r.priority}</priority>
  </url>
`;
}

// 86 SEO Knowledge Base Articles
for (const art of fullArticles) {
  const prio = art.funnel === 'BOFU' ? '0.90' : (art.funnel === 'MOFU' ? '0.85' : '0.80');
  sitemapXml += `  <url>
    <loc>${BASE_DOMAIN}${art.url}</loc>
    <lastmod>2026-09-15</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${prio}</priority>
  </url>
`;
}

sitemapXml += `</urlset>\n`;

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');
console.log(`✅ sitemap.xml başarıyla oluşturuldu! Toplam URL sayısı: ${CORE_ROUTES.length + fullArticles.length}`);
