import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Stethoscope,
  ShieldCheck,
  Scale,
  HelpCircle,
  ChevronDown,
  Globe2,
  TrendingUp,
  Layers,
  Search,
  MessageSquare,
  Activity,
  ArrowUpRight
} from 'lucide-react';
import { MASTER_BRANCHES } from '../data/masterPlanData';
import { MASTER_BRANCHES_EN } from '../i18n/masterPlanData.en';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface SectorsPageProps {
  onOpenConsultation: () => void;
}

type BranchCategoryKey = 'all' | 'surgery' | 'dental' | 'aesthetic' | 'specialized' | 'institutional';

export const SectorsPage: React.FC<SectorsPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();
  const branches = isEn ? MASTER_BRANCHES_EN : MASTER_BRANCHES;
  const [activeCategory, setActiveCategory] = useState<BranchCategoryKey>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Categorization mapping
  const categoryMap: Record<BranchCategoryKey, string[]> = {
    all: branches.map(b => b.slug),
    surgery: [
      'sac-ekimi-reklam-ajansi',
      'plastik-cerrahi-reklam-ajansi',
      'obezite-cerrahisi-reklam-ajansi',
      'ortopedi-reklam-ajansi',
      'goz-klinigi-reklam-ajansi'
    ],
    dental: [
      'dis-klinigi-reklam-ajansi'
    ],
    aesthetic: [
      'estetik-klinigi-reklam-ajansi',
      'medikal-estetik-reklam-ajansi',
      'dermatoloji-reklam-ajansi'
    ],
    specialized: [
      'tup-bebek-reklam-ajansi',
      'fizik-tedavi-reklam-ajansi'
    ],
    institutional: [
      'hastane-reklam-ajansi',
      'doktor-reklam-ajansi',
      'klinik-reklam-ajansi',
      'saglik-turizmi-araci-kurulus-pazarlama'
    ]
  };

  const categories = [
    { key: 'all' as BranchCategoryKey, label: isEn ? 'All Specialties (15)' : 'Tüm Branşlar (15)' },
    { key: 'surgery' as BranchCategoryKey, label: isEn ? 'Surgical & Invasive (5)' : 'Cerrahi & İnvaziv (5)' },
    { key: 'dental' as BranchCategoryKey, label: isEn ? 'Dental & Oral Health (1)' : 'Dental & Ağız Sağlığı (1)' },
    { key: 'aesthetic' as BranchCategoryKey, label: isEn ? 'Aesthetic & Dermatology (3)' : 'Estetik & Dermatoloji (3)' },
    { key: 'specialized' as BranchCategoryKey, label: isEn ? 'Specialized Treatments (2)' : 'Özelleşmiş Tedaviler (2)' },
    { key: 'institutional' as BranchCategoryKey, label: isEn ? 'Hospitals & Agencies (4)' : 'Kurumsal Sağlık & Acenteler (4)' }
  ];

  const filteredBranches = branches.filter(b => categoryMap[activeCategory].includes(b.slug));

  // Benchmark / Decision Matrix Data
  const benchmarkRows = [
    {
      specialty: isEn ? 'Hair Transplant' : 'Saç Ekimi',
      slug: 'sac-ekimi-reklam-ajansi',
      markets: isEn ? 'United Kingdom, Spain, Italy' : 'İngiltere, İspanya, İtalya',
      decisionTime: isEn ? '7 – 21 Days' : '7 – 21 Gün',
      trustBarrier: isEn ? 'Graft transparency & Doctor involvement' : 'Greft şeffaflığı ve Hekim katılımı',
      funnel: isEn ? 'Meta Lead Ads + Multi-step WhatsApp AI' : 'Meta Lead Ads + Çok Aşamalı WhatsApp AI'
    },
    {
      specialty: isEn ? 'Dental Clinic' : 'Diş Kliniği & Gülüş Tasarımı',
      slug: 'dis-klinigi-reklam-ajansi',
      markets: isEn ? 'UK, Ireland, Germany, Switzerland' : 'İngiltere, İrlanda, Almanya, İsviçre',
      decisionTime: isEn ? '14 – 30 Days' : '14 – 30 Gün',
      trustBarrier: isEn ? 'Implant brand, Material guarantee & X-Ray analysis' : 'İmplant markası, Malzeme garantisi & Röntgen analizi',
      funnel: isEn ? 'Google Ads Search + Rapid X-Ray Review' : 'Google Ads Arama + Hızlı Röntgen Analizi'
    },
    {
      specialty: isEn ? 'Bariatric Surgery' : 'Obezite Cerrahisi',
      slug: 'obezite-cerrahisi-reklam-ajansi',
      markets: isEn ? 'United Kingdom, Ireland, Netherlands' : 'İngiltere, İrlanda, Hollanda',
      decisionTime: isEn ? '30 – 60 Days' : '30 – 60 Gün',
      trustBarrier: isEn ? 'Surgeon complication rate & Post-op nutritionist' : 'Cerrah komplikasyon oranı & Ameliyat sonrası diyetisyen',
      funnel: isEn ? 'E-E-A-T Video SEO + 12-Month Care Guarantee' : 'E-E-A-T Video SEO + 12 Ay Takip Garantisi'
    },
    {
      specialty: isEn ? 'Plastic & Aesthetic Surgery' : 'Plastik & Estetik Cerrahi',
      slug: 'plastik-cerrahi-reklam-ajansi',
      markets: isEn ? 'Germany, France, UK, Gulf' : 'Almanya, Fransa, İngiltere, Körfez',
      decisionTime: isEn ? '21 – 45 Days' : '21 – 45 Gün',
      trustBarrier: isEn ? 'Board certification & Natural aesthetic results' : 'Uzmanlık belgesi & Doğal estetik sonuçlar',
      funnel: isEn ? 'Instagram Cinematic Video + Video Consultation' : 'Instagram Sinematik Video + Görüntülü Hekim Ön Görüşmesi'
    },
    {
      specialty: isEn ? 'IVF & Fertility' : 'Tüp Bebek (IVF)',
      slug: 'tup-bebek-reklam-ajansi',
      markets: isEn ? 'Germany, United Kingdom, MENA' : 'Almanya, İngiltere, MENA',
      decisionTime: isEn ? '45 – 90 Days' : '45 – 90 Gün',
      trustBarrier: isEn ? 'Lab technology, Embryologist credentials & Success stats' : 'Embriyoloji laboratuvarı & Şeffaf başarı oranı',
      funnel: isEn ? 'Educational GEO / Search + Nurse Case Manager' : 'Eğitici GEO / Arama + Hemşire Vaka Yöneticisi'
    },
    {
      specialty: isEn ? 'Medical Tourism Agencies' : 'Yetkili Aracı Kuruluşlar & Acenteler',
      slug: 'saglik-turizmi-araci-kurulus-pazarlama',
      markets: isEn ? 'Global & Regional Focus' : 'Global & Çok Pazar Odaklı',
      decisionTime: isEn ? '10 – 30 Days' : '10 – 30 Gün',
      trustBarrier: isEn ? 'USHAŞ & TÜRSAB Accreditation, Hospital contracts' : 'USHAŞ & TÜRSAB Akreditasyonu, Tesis protokolleri',
      funnel: isEn ? 'Integrated Cross-specialty Paid Ads + Multi-lingual CRM' : 'Çok Branşlı Reklam Ağı + Çok Dilli Çağrı Merkezi'
    }
  ];

  // Core Service Hubs for Cross-linking
  const coreServices = [
    {
      title: isEn ? 'Performance Marketing' : 'Performans Pazarlama',
      url: '/hizmetler/performans-pazarlama',
      desc: isEn ? 'High-intent Google Ads & Meta video funnels optimized for low CPL and verified leads.' : 'Düşük CPL ve nitelikli hasta başvurusu için optimize edilmiş Google Ads ve Meta reklamları.'
    },
    {
      title: isEn ? 'International SEO' : 'Uluslararası SEO',
      url: '/hizmetler/uluslararasi-seo-hizmeti',
      desc: isEn ? 'Multilingual organic visibility across UK, DACH, and European healthcare search corridors.' : 'İngiltere, DACH ve Avrupa sağlık arama koridorlarında çok dilli organik otorite.'
    },
    {
      title: isEn ? 'GEO & AI Visibility' : 'GEO & Yapay Zekâ Görünürlüğü',
      url: '/hizmetler/geo-generative-engine-optimization',
      desc: isEn ? 'Ensure your clinic is cited as the primary recommendation in ChatGPT, Perplexity, and Gemini.' : 'Kliniğinizin ChatGPT, Perplexity ve Gemini aramalarında birincil öneri olarak alıntılanması.'
    },
    {
      title: isEn ? 'Web & Landing Page' : 'Web Tasarım & Landing Page',
      url: '/hizmetler/web-sitesi-landing-page',
      desc: isEn ? 'High-converting medical landing pages built for foreign patient confidence and rapid conversion.' : 'Yabancı hasta psikolojisine ve hızlı randevu dönüşümüne uygun çok dilli açılış sayfaları.'
    },
    {
      title: isEn ? 'CRM & AI Call Agent' : 'CRM & Yapay Zekâ Otomasyonu',
      url: '/hizmetler/crm-otomasyon',
      desc: isEn ? '7/24 multilingual WhatsApp response, lead scoring, and automated appointment workflows.' : '7/24 çok dilli WhatsApp karşılama, potansiyel hasta skorlama ve randevu takip otomasyonu.'
    },
    {
      title: isEn ? 'Content & Brand Production' : 'İçerik Prodüksiyon & Marka',
      url: '/hizmetler/icerik-marka-yonetimi',
      desc: isEn ? 'Doctor video production, clinical storytelling, and 2026 compliant ethical medical media.' : 'Hekim video prodüksiyonu, klinik güven hikayeleri ve 2026 mevzuatına tam uyumlu medikal içerik.'
    }
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: isEn 
        ? "Why can't the same marketing strategy be applied across different medical specialties?" 
        : "Sağlık turizminde farklı branşlar için neden aynı pazarlama modeli uygulanamaz?",
      a: isEn
        ? "A patient seeking hair restoration or cosmetic dentistry typically decides within 1 to 3 weeks, whereas families considering bariatric surgery or IVF take 2 to 3 months of rigorous research. Patient anxieties, medical proof requirements (dental X-Rays vs. hormone lab tests), and average treatment values differ radically. Generic marketing funnels produce low-quality leads and waste ad spend."
        : "Saç ekimi veya diş tedavisi arayan bir hastanın karar süresi 1 ila 3 hafta iken; obezite cerrahisi, tüp bebek veya ortopedi operasyonu düşünen bir hasta 2 ila 3 ay boyunca derin tıbbi araştırma yapar. Hastanın güven bariyerleri, sunduğu veriler (panoramik röntgen vs. laboratuvar tahlili) ve tedavi maliyetleri taban tabana zıttır. Tek tip şablon pazarlama niteliksiz lead üretir ve bütçe israfına neden olur."
    },
    {
      q: isEn
        ? "How does the 2026 Turkish Healthcare Advertising Regulation apply to clinical specialties?"
        : "2026 Sağlık Turizmi ve Tanıtım Mevzuatı klinik branşlarda nasıl uygulanır?",
      a: isEn
        ? "Under the official regulation dated 12 November 2025 (Official Gazette No. 33075) and the International Health Tourism Regulation dated 26 April 2025 (Official Gazette No. 32882); medical advertising must remain strictly educational and factual. Commercial promotions, discounts, lotteries, and misleading promises are banned. Overseas marketing campaigns must be geographically targeted solely to foreign territories and adhere strictly to medical doctor certifications and HealthTürkiye registrations."
        : "12 Kasım 2025 tarihli 33075 sayılı Resmî Gazete Tanıtım Yönetmeliği ve 26 Nisan 2025 tarihli 32882 sayılı Sağlık Turizmi Yönetmeliği uyarınca; yurt dışı tanıtımlar eğitici, bilgilendirici ve tıbbi doğruluğu kanıtlanmış nitelikte olmalıdır. Ticari indirim, paket kampanya, çekiliş ve yanıltıcı başarı garantileri kesinlikle yasaktır. Reklamlar yalnızca hedef yabancı ülkelere gösterilmeli, hekim unvanları ve HealthTürkiye akreditasyonları şeffafça belirtilmelidir."
    },
    {
      q: isEn
        ? "Which digital channel yields the highest ROI for dental clinics?"
        : "Diş klinikleri için uluslararası hasta kazanımında en verimli kanal hangisidir?",
      a: isEn
        ? "In the UK, Ireland, and DACH markets, Google Ads Search campaigns capturing high-intent keywords (such as 'implant turkey', 'all on 4 clinic Istanbul') combined with a dedicated dental landing page and instant WhatsApp panoramic X-Ray evaluation funnel deliver the highest patient conversion rates."
        : "İngiltere, İrlanda ve Almanya pazarlarında Google Ads Arama Ağı üzerinden yüksek niyetli kelimeleri hedefleyen kampanyalar, lokalize dental landing page ve WhatsApp üzerinden hızlı panoramik röntgen analizi sunan entegre CRM akışı en yüksek dönüşüm oranını sağlamaktadır."
    },
    {
      q: isEn
        ? "How do you lower Cost Per Lead (CPL) for hair transplant centers in competitive markets?"
        : "Saç ekimi merkezlerinde CPL maliyetleri nasıl düşürülür ve başvuru kalitesi nasıl artırılır?",
      a: isEn
        ? "Instead of generic single-page lead forms, we deploy multi-step interactive graft calculators, separate campaigns for Sapphire FUE vs. DHI techniques, transparent VIP package breakdowns, and instant 24/7 AI Call Agent callback within 60 seconds to eliminate non-serious inquiries and multiply lead-to-consultation rates."
        : "Tek sayfalık standart formlar yerine; çok adımlı greft hesaplayıcı, Sapphire FUE ve DHI teknik ayrımı, şeffaf paket içerikleri ve 7/24 AI Call Agent ile gece gelen başvuruların 1 dakika içinde geri aranması niteliksiz talepleri eler ve randevu dönüşüm oranını 3 kata kadar artırır."
    },
    {
      q: isEn
        ? "Is Overseas Marketing a healthcare provider or a medical tourism agency?"
        : "Overseas Marketing bir sağlık tesisi veya sağlık turizmi acentesi midir?",
      a: isEn
        ? "No. Overseas Marketing is neither a healthcare provider nor a medical travel agency. We are a B2B growth and technology marketing agency providing digital marketing, international SEO, GEO, bespoke CRM software, and performance advertising consultancy exclusively to licensed healthcare facilities and certified medical tourism agencies."
        : "Hayır. Overseas Marketing bir sağlık kuruluşu veya aracı kuruluş (acente) değildir. Yetkili sağlık tesislerine ve Sağlık Bakanlığı/USHAŞ tescilli aracı kuruluşlara performans pazarlama, uluslararası SEO, GEO, CRM yazılımı ve yapay zekâ altyapısı sunan bir B2B büyüme ve teknoloji danışmanlığı ajansıdır."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-24 pb-20">
      <SEOHead
        title={isEn ? "Healthcare Sectors & Clinical Specialties | Overseas Marketing" : "Hizmet Verdiğimiz Sağlık Branşları ve Sektörler | Overseas Marketing"}
        description={isEn
          ? "Specialized medical tourism marketing models across 15+ healthcare sectors: Dental, hair transplant, plastic surgery, bariatric, IVF, and hospitals."
          : "Diş klinikleri, saç ekimi, plastik cerrahi, tüp bebek, obezite, göz ve hastaneler için özel sağlık turizmi pazarlama çözümleri ve 15 branş rehberi."}
        canonicalUrl="https://www.overseas.marketing/sektorler"
      />
      <JsonLdSchema 
        customTitle={isEn ? "Healthcare Sectors & Clinical Specialties" : "Hizmet Verdiğimiz Sağlık Branşları ve Sektörler"}
        customUrl="https://www.overseas.marketing/sektorler"
        faqs={faqs}
      />

      {/* 1. BREADCRUMBS & HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 mb-16 text-left">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-xs text-[#595F69]">
            <li>
              <Link to="/" className="hover:text-[#446CB5] transition-colors">
                {isEn ? "Home" : "Ana Sayfa"}
              </Link>
            </li>
            <li className="text-slate-400">/</li>
            <li className="text-[#16202E] font-semibold">
              {isEn ? "Sectors & Clinical Specialties" : "Uzmanlık Alanları & Branşlar"}
            </li>
          </ol>
        </nav>

        {/* Hero Badge & H1 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-5">
          <Building2 className="w-4 h-4" />
          <span>{isEn ? "Specialty Directory & Patient Acquisition Hub" : "Klinik Branşları ve Uzmanlık Alanları Merkezi"}</span>
        </div>

        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#16202E] tracking-tight leading-[1.15] mb-6 max-w-5xl">
          {isEn ? (
            <>Specialized international patient acquisition models tailored for <span className="text-[#446CB5]">15+ clinical sectors</span>.</>
          ) : (
            <>Sağlık turizminde 15 klinik branşı için <span className="text-[#446CB5]">özelleştirilmiş hasta kazanım mimarisi</span>.</>
          )}
        </h1>

        <p className="text-base sm:text-lg text-[#595F69] max-w-4xl leading-relaxed mb-8">
          {isEn
            ? "Dental tourism differs radically from hair restoration, bariatric surgery, or IVF. Patient anxieties, medical documentation requirements, decision timelines, and acquisition channels require distinct growth models. Discover our compliant, high-performing growth funnels for each specialty."
            : "Sağlık turizminde saç ekimi veya implant arayan bir hastanın karar süreci ile tüp mide cerrahisi, tüp bebek veya onkoloji tedavisi düşünen bir ailenin psikolojisi, risk algısı ve güven eşiği taban tabana zıttır. Tek tip şablon pazarlama bütçe israfına yol açar. Overseas Marketing; hekim E-E-A-T profiline, medikal içerik mevzuatına ve pazar dinamiklerine uygun branş odaklı büyüme hunileri kurar."}
        </p>

        {/* Quick KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#DDE2E8] shadow-xs">
          <div className="border-r border-slate-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#446CB5]">15</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Clinical Specialties" : "Özel Klinik Branşı"}</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#16202E]">4+</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Target Market Corridors" : "Uluslararası Pazar Koridoru"}</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#446CB5]">%100</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "2026 Regulatory Compliance" : "2026 Mevzuat Uyumu"}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#16202E]">Multi</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Channel & Multilingual Funnels" : "Çok Dilli Entegre Huni"}</div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TABS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-left">
        <div className="flex flex-wrap gap-2.5 pb-2 border-b border-[#DDE2E8]">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-[#446CB5] text-white shadow-sm'
                  : 'bg-white text-[#595F69] hover:bg-[#EEF3FB] hover:text-[#446CB5] border border-[#DDE2E8]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. SPECIALTIES CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBranches.map((b) => (
            <div
              key={b.slug}
              className="p-8 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold">
                    {b.heroBadge || (isEn ? "Clinical Specialty" : "Branş Uzmanlığı")}
                  </span>
                  <Activity className="w-4 h-4 text-slate-300 group-hover:text-[#446CB5] transition-colors" />
                </div>

                <h2 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors mb-3 leading-snug">
                  {b.title}
                </h2>

                <p className="text-sm text-[#595F69] leading-relaxed mb-6">
                  {b.shortDesc || b.metaDesc}
                </p>

                {b.highlights && b.highlights.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      {isEn ? "Strategic Pillars:" : "Öne Çıkan Büyüme Adımları:"}
                    </div>
                    <ul className="space-y-2 text-xs text-[#595F69]">
                      {b.highlights.slice(0, 3).map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#DDE2E8] flex items-center justify-between mt-4">
                <Link
                  to={`/${b.slug}`}
                  className="font-bold text-sm text-[#446CB5] group-hover:text-[#345999] flex items-center gap-1.5 transition-colors"
                >
                  <span>{isEn ? "View Specialty Architecture" : "Branş Detayını İncele"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENCHMARK DECISION MATRIX TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#DDE2E8] shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>{isEn ? "Patient Decision & Market Corridors" : "Hasta Karar Döngüsü ve Pazar Matrisi"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E] mb-3">
            {isEn ? "Specialty Comparison: Patient Timeline, Trust Barrier & Optimal Funnel" : "Branş Bazında Hasta Karar Süresi, Güven Bariyeri ve Kanal Matrisi"}
          </h2>
          <p className="text-sm text-[#595F69] max-w-3xl mb-8 leading-relaxed">
            {isEn
              ? "Each clinical area has unique patient decision psychology. Understanding the primary foreign target markets, average inquiry-to-treatment cycle, and critical proof factors is essential for marketing efficiency."
              : "Her tıbbi branşın yurt dışı hasta profili farklı dinamiklerle hareket eder. Hedef pazarların beklentileri, karar alma süreleri ve ikna eşikleri doğru kanalla eşleştirildiğinde reklam maliyeti (CPL) düşer, randevu oranı yükselir."}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-[#F8FAFC] text-slate-700">
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Specialty" : "Klinik Branşı"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Primary Markets" : "Öncelikli Pazarlar"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Decision Timeline" : "Ort. Karar Süresi"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Critical Trust Factor" : "Kritik Güven Unsuru"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Optimal Channel Strategy" : "Önerilen Huni Modeli"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {benchmarkRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#16202E]">
                      <Link to={`/${row.slug}`} className="text-[#446CB5] hover:underline flex items-center gap-1">
                        {row.specialty} <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{row.markets}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{row.decisionTime}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.trustBarrier}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{row.funnel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. 2026 REGULATORY COMPLIANCE FRAMEWORK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="bg-[#16202E] text-white p-8 sm:p-12 rounded-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#60A5FA] text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{isEn ? "Ethical & Legal Advertising Framework (2026)" : "2026 Resmî Mevzuat ve Tanıtım İlkeleri"}</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold mb-4">
            {isEn ? "Compliant Healthcare Marketing for Turkish Clinics & Certified Agencies" : "Mevzuata Tam Uyumlu Sağlık Turizmi ve Klinik Tanıtım Standartları"}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed mb-8">
            {isEn
              ? "Overseas Marketing strictly adheres to the official regulations governing healthcare promotion in Turkey (Official Gazette dated 12.11.2025 No. 33075 and 26.04.2025 No. 32882). All specialty campaigns are deployed within verified legal frameworks:"
              : "Overseas Marketing, Türkiye'de sağlık hizmetlerinin tanıtımını düzenleyen 12 Kasım 2025 tarihli 33075 sayılı Tanıtım Yönetmeliği ve 26 Nisan 2025 tarihli 32882 sayılı Sağlık Turizmi Yönetmeliği hükümlerine %100 uyumlu stratejiler geliştirir:"}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">1. Bilgilendirici İçerik</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "Strictly educational, procedure-focused content. No deceptive promises, artificial urgency, or misleading medical claims." : "Yalnızca tedavi yöntemini, olası riskleri ve süreci açıklayan hekim onaylı eğitici içerik. Talep yaratıcı ticari vaatler yasaktır."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">2. Yetki Belgesi Zorunluluğu</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "Marketing campaigns exclusively serve certified facilities and agencies accredited by the Ministry of Health and USHAŞ." : "Kampanyalar yalnızca Sağlık Bakanlığı ve USHAŞ tarafından tescilli yetki belgesine sahip kurumlar adına yürütülür."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">3. Fiyat ve İndirim Yasağı</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "No deceptive discount slogans, seasonal sales, or commercial lottery packages that commodify medical services." : "Sağlık hizmetlerinde promosyon, çekiliş, indirim kuponu ve yanıltıcı fiyat rekabeti içeren reklamlar kesinlikle uygulanmaz."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">4. Coğrafi Hedefleme Kuralı</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "Foreign patient campaigns are geographically geofenced exclusively to target destination countries and never shown domestically." : "Uluslararası hasta kazanım reklamları IP bazında yalnızca hedef yabancı ülkelere gösterilir; yurt içi kullanıcılara gösterilemez."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INTEGRATION WITH 6 CORE SERVICE FAMILIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{isEn ? "Growth Infrastructure" : "Entegre Büyüme Altyapısı"}</span>
        </div>
        <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E] mb-3">
          {isEn ? "How We Power Each Specialty with 6 Core Growth Services" : "Klinik Branşlarını Güçlendiren 6 Temel Büyüme Hizmeti"}
        </h2>
        <p className="text-sm text-[#595F69] max-w-3xl mb-8 leading-relaxed">
          {isEn
            ? "A clinical specialty cannot scale on ads alone. We orchestrate performance campaigns, multilingual SEO, AI search visibility, high-converting web infrastructure, CRM, and video content into a single engine."
            : "Yalnızca reklam açarak kalıcı yabancı hasta akışı sağlanamaz. Overseas Marketing; her branş için performans reklamı, uluslararası SEO, GEO, dönüşüm odaklı web altyapısı, CRM ve video prodüksiyonunu tek bir sistem olarak birleştirir."}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((srv, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all group">
              <h3 className="font-bold text-base text-[#16202E] group-hover:text-[#446CB5] transition-colors mb-2">
                {srv.title}
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed mb-4">
                {srv.desc}
              </p>
              <Link to={srv.url} className="text-xs font-bold text-[#446CB5] hover:underline flex items-center gap-1">
                {isEn ? "Explore Service Family" : "Hizmet Merkezini İncele"} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isEn ? "FAQ" : "Merak Edilenler"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E]">
            {isEn ? "Frequently Asked Questions About Specialty Marketing" : "Sağlık Turizmi Branş Pazarlaması Sıkça Sorulan Sorular"}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, fIdx) => (
            <div key={fIdx} className="bg-white rounded-2xl border border-[#DDE2E8] overflow-hidden">
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === fIdx ? null : fIdx)}
                className="w-full p-5 sm:p-6 text-left font-bold text-[#16202E] flex justify-between items-center gap-4 text-sm sm:text-base cursor-pointer"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${openFaqIndex === fIdx ? 'rotate-180 text-[#446CB5]' : ''}`} />
              </button>
              {openFaqIndex === fIdx && (
                <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-[#595F69] leading-relaxed border-t border-slate-100 bg-[#F8FAFC]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. CTA CONVERSION BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#16202E] to-[#1E2D42] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#446CB5]/30 text-[#8BB2F9] text-xs font-semibold mb-4 border border-[#446CB5]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? "Custom Specialty Proposal" : "Branşa Özel Büyüme Analizi"}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold mb-3">
              {isEn ? "Ready to scale international patient inquiries for your clinic?" : "Kliniğinizin branşına özel hasta kazanım planını birlikte başlatalım"}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isEn
                ? "Contact our healthcare growth strategists. We evaluate your target markets, calculate realistic CPL benchmarks, and build a compliant growth roadmap."
                : "Hedef pazar koridorlarınızı analiz edelim, tahmini hasta edinme maliyetlerini (CPL) hesaplayalım ve kliniğinize özel büyüme stratejisini hayata geçirelim."}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#446CB5]/25 flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <span>{isEn ? "Get Custom Specialty Proposal" : "Branşa Özel Teklif Alın"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
