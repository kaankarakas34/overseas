import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp,
  Scale,
  Building2,
  Layers,
  HelpCircle,
  ChevronDown,
  Sparkles,
  ArrowUpRight,
  Plane,
  Clock,
  Coins,
  ShieldAlert
} from 'lucide-react';
import { MASTER_MARKETS } from '../data/masterPlanData';
import { MASTER_MARKETS_EN } from '../i18n/masterPlanData.en';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface MarketsPageProps {
  onOpenConsultation: () => void;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();
  const markets = isEn ? MASTER_MARKETS_EN : MASTER_MARKETS;
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Emerging high-potential corridors
  const emergingCorridors = [
    {
      countryName: isEn ? "Gulf Cooperation Council (GCC)" : "Körfez Ülkeleri (BAE, Suudi Arabistan, Katar)",
      flagEmoji: "🇦🇪",
      slug: "hastane-reklam-ajansi",
      desc: isEn
        ? "High-ticket aesthetic surgery, robotic joint replacement, executive check-ups, and IVF with native Arabic concierge support."
        : "Yüksek bütçeli estetik cerrahi, robotik ameliyatlar, VIP check-up ve tüp bebek için Arapça medikal konsiyerj modeli.",
      status: isEn ? "High-Ticket Segment" : "VIP Hasta Segmenti",
      topTreatments: isEn ? "Robotic Surgery, Executive Checkup, IVF" : "Robotik Cerrahi, VIP Check-up, Tüp Bebek"
    },
    {
      countryName: isEn ? "Ireland & Celtic Corridor" : "İrlanda (Dublin Koridoru)",
      flagEmoji: "🇮🇪",
      slug: "dis-klinigi-reklam-ajansi",
      desc: isEn
        ? "Rapidly growing demand for dental implants, All-on-4, and bariatric surgery driven by extreme domestic dental costs."
        : "Yüksek yerel diş tedavi fiyatları ve obezite cerrahisi bekleme süreleri nedeniyle Dublin'den doğrudan hasta akışı.",
      status: isEn ? "High Dental ROI" : "Yüksek Dental ROI",
      topTreatments: isEn ? "All-on-4, Zirconia, Bariatrics" : "All-on-4, Zirkonyum, Tüp Mide"
    },
    {
      countryName: isEn ? "Italy & Southern Europe" : "İtalya ve Güney Avrupa",
      flagEmoji: "🇮🇹",
      slug: "sac-ekimi-reklam-ajansi",
      desc: isEn 
        ? "High hair restoration and cosmetic dentistry intent from Rome and Milan supported by native Italian medical consultants."
        : "Roma ve Milano odaklı saç ekimi (Sapphire/DHI) ve estetik diş talebi; İtalyanca hasta iletişim altyapısı.",
      status: isEn ? "Active Hair Corridor" : "Aktif Saç Ekimi Koridoru",
      topTreatments: isEn ? "Sapphire FUE, Hollywood Smile" : "Safir FUE, Hollywood Smile"
    },
    {
      countryName: isEn ? "Spain & Iberia" : "İspanya ve İberya Pazarı",
      flagEmoji: "🇪🇸",
      slug: "sac-ekimi-reklam-ajansi",
      desc: isEn
        ? "Madrid and Barcelona hair transplant inquiries backed by localized Spanish Meta ad creatives and WhatsApp funnels."
        : "Madrid ve Barselona saç ekimi aramaları için İspanyolca kreatif ve WhatsApp konsültasyon kurgusu.",
      status: isEn ? "Expanding Demand" : "Genişleyen Talep",
      topTreatments: isEn ? "DHI Hair Transplant, Rhinoplasty" : "DHI Saç Ekimi, Rinoplasti"
    },
    {
      countryName: isEn ? "Switzerland & Austria" : "İsviçre ve Avusturya (Alp Bölgesi)",
      flagEmoji: "🇨🇭",
      slug: "almanya-saglik-turizmi-reklamlari",
      desc: isEn
        ? "Zürich, Geneva, and Vienna high-income patients seeking certified dental restorations and laser eye surgery."
        : "Zürih, Cenevre ve Viyana'dan akredite implant, gülüş tasarımı ve No-Touch lazer göz tedavisi arayan yüksek gelir grubu.",
      status: isEn ? "Premium Quality" : "A+ Gelir Grubu",
      topTreatments: isEn ? "Premium Implants, Laser Eye Surgery" : "Premium İmplant, No-Touch Lazer"
    }
  ];

  // Benchmark / Decision Matrix Data
  const marketMatrix = [
    {
      market: isEn ? 'United Kingdom (UK)' : 'İngiltere (UK)',
      slug: 'ingiltere-saglik-turizmi-reklamlari',
      flag: '🇬🇧',
      treatments: isEn ? 'Dental Implants, Hair Transplant, Gastric Sleeve' : 'Diş İmplantı, Saç Ekimi, Tüp Mide',
      currency: 'GBP (£) · £2,500 – £6,500',
      decisionTime: isEn ? '2 – 4 Weeks' : '2 – 4 Hafta',
      trustBarrier: isEn ? 'NHS waiting comparison & Surgeon credentials' : 'NHS bekleme kıyası & Cerrah tecrübesi',
      funnel: isEn ? 'Google Ads Search + Rapid WhatsApp in native English' : 'Google Ads Arama + Aksansız İngilizce WhatsApp'
    },
    {
      market: isEn ? 'Germany & DACH' : 'Almanya (DACH)',
      slug: 'almanya-saglik-turizmi-reklamlari',
      flag: '🇩🇪',
      treatments: isEn ? 'Implantology, Laser Eye, Rhinoplasty, Hair' : 'İmplantoloji, Lazer Göz, Rinoplasti, Saç Ekimi',
      currency: 'EUR (€) · €3,000 – €8,500',
      decisionTime: isEn ? '4 – 8 Weeks' : '4 – 8 Hafta',
      trustBarrier: isEn ? 'JCI/TÜV Accreditation, CE Brand certification, GDPR' : 'JCI/TÜV Belgesi, CE Malzeme sertifikası, DSGVO',
      funnel: isEn ? 'E-E-A-T Medical SEO + Native German Treatment Plan' : 'E-E-A-T Medikal SEO + Detaylı Almanca Maliyet Planı'
    },
    {
      market: isEn ? 'France' : 'Fransa',
      slug: 'fransa-saglik-turizmi-reklamlari',
      flag: '🇫🇷',
      treatments: isEn ? 'DHI Hair Transplant, Ultrasonic Rhinoplasty, Breast' : 'DHI Saç Ekimi, Piezo Rinoplasti, Meme Estetiği',
      currency: 'EUR (€) · €2,800 – €7,000',
      decisionTime: isEn ? '3 – 6 Weeks' : '3 – 6 Hafta',
      trustBarrier: isEn ? 'Natural aesthetic results, Native French communication' : 'Doğal estetik sonuçlar, Kusursuz Fransızca iletişim',
      funnel: isEn ? 'Cinematic Video Ads + Dedicated French Medical Coordinator' : 'Sinematik Video Reklamları + Fransızca Medikal Koordinatör'
    },
    {
      market: isEn ? 'Netherlands & Belgium' : 'Hollanda & Belçika (Benelüks)',
      slug: 'hollanda-saglik-turizmi-reklamlari',
      flag: '🇳🇱',
      treatments: isEn ? 'Dental Restorations, Hair Restoration, Bariatrics' : 'Gülüş Tasarımı, Saç Ekimi, Bariyatrik Cerrahi',
      currency: 'EUR (€) · €2,500 – €6,000',
      decisionTime: isEn ? '3 – 5 Weeks' : '3 – 5 Hafta',
      trustBarrier: isEn ? 'Transparent all-inclusive pricing, Hospital hygiene' : 'Gizli maliyetsiz şeffaf paket, Klinik hijyen kanıtı',
      funnel: isEn ? 'Bilingual Dutch/English Search + Transparent Packages' : 'Felemenkçe/İngilizce Arama Ağı + Şeffaf Teklif Modülü'
    },
    {
      market: isEn ? 'Gulf (GCC / MENA)' : 'Körfez Ülkeleri (BAE, Suudi Arabistan)',
      slug: 'hastane-reklam-ajansi',
      flag: '🇦🇪',
      treatments: isEn ? 'Robotic Surgery, Executive Checkup, IVF, Aesthetics' : 'Robotik Cerrahi, VIP Check-up, Tüp Bebek, Estetik',
      currency: 'USD / AED · $8,000 – $25,000+',
      decisionTime: isEn ? '2 – 6 Weeks' : '2 – 6 Hafta',
      trustBarrier: isEn ? 'Hospital brand reputation & 5-Star VIP Concierge' : 'Hastane marka itibarı & 5 Yıldızlı VIP Konsiyerj',
      funnel: isEn ? 'Arabic Performance Video Ads + Dedicated VIP Concierge' : 'Arapça Video Reklamları + Özel VIP Koordinasyon Masası'
    }
  ];

  // 6 Core Service Hubs for Cross-linking
  const coreServices = [
    {
      title: isEn ? 'Performance Marketing' : 'Performans Pazarlama',
      url: '/hizmetler/performans-pazarlama',
      desc: isEn ? 'Target country Google Ads & Meta video funnels with localized ad copy and geofenced IP tracking.' : 'Hedef ülkeye özel para birimi, dil ve IP filtreleme ile optimize edilmiş Google & Meta reklamları.'
    },
    {
      title: isEn ? 'International SEO' : 'Uluslararası SEO',
      url: '/hizmetler/uluslararasi-seo-hizmeti',
      desc: isEn ? 'Hreflang, localized keyword clusters, and high-authority backlinks in UK, DACH, and French markets.' : 'İngiltere, Almanya ve Fransa yerel arama motorlarında organik otorite ve çok dilli SEO.'
    },
    {
      title: isEn ? 'GEO & AI Search' : 'GEO & Yapay Zekâ Görünürlüğü',
      url: '/hizmetler/geo-generative-engine-optimization',
      desc: isEn ? 'Win AI citations in ChatGPT and Gemini for cross-border searches like "best clinics in Turkey for UK patients".' : 'ChatGPT, Perplexity ve Gemini aramalarında hedef ülkeden yapılan sorgularda birincil öneri olma.'
    },
    {
      title: isEn ? 'Web & Landing Page' : 'Web Tasarım & Landing Page',
      url: '/hizmetler/web-sitesi-landing-page',
      desc: isEn ? 'Fast, mobile-responsive multilingual landing pages customized with target country currencies (£, €).' : 'Hedef pazarın para birimi (£, €) ve dilinde tasarlanmış yüksek dönüşümlü iniş sayfaları.'
    },
    {
      title: isEn ? 'CRM & AI Call Agent' : 'CRM & Çok Dilli WhatsApp AI',
      url: '/hizmetler/crm-otomasyon',
      desc: isEn ? 'Instant multi-language WhatsApp answering and lead routing in native English, German, French, and Arabic.' : 'İngilizce, Almanca, Fransızca ve Arapça anlık WhatsApp karşılama ve 7/24 randevu yönetimi.'
    },
    {
      title: isEn ? 'Content & Brand Production' : 'İçerik Prodüksiyon & Marka',
      url: '/hizmetler/icerik-marka-yonetimi',
      desc: isEn ? 'Subtitled 4K doctor interview videos and authentic patient journey storytelling for target markets.' : 'Hedef ülke dillerine altyazılı hekim video çekimleri ve şeffaf yabancı hasta başarı hikayeleri.'
    }
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      q: isEn
        ? "Which European country should a Turkish clinic enter first?"
        : "Türkiye'deki bir sağlık tesisi veya klinik öncelikle hangi ülkeye odaklanmalıdır?",
      a: isEn
        ? "The optimal entry market depends on clinical specialty and language capacity. The United Kingdom is the largest and fastest-converting market for dental, hair restoration, and bariatric surgery due to 7.6M+ NHS waiting lists. However, clinics with fluent German coordinators achieve superior margins in Germany and DACH, while plastic surgery practices find high natural affinity in France."
        : "Hedef pazar seçimi kliniğin branşına ve çok dilli iletişim kapasitesine göre belirlenmelidir. İngiltere (UK); NHS'teki 7.6 milyonu aşan bekleme süreleri nedeniyle diş, saç ekimi ve tüp mide cerrahisinde en yüksek hacimli pazardır. Ancak Almanca bilen hekim ve hasta danışmanına sahip klinikler DACH bölgesinde (Almanya, İsviçre) çok daha yüksek kar marjı elde eder. Plastik cerrahi ve rinoplastide ise Fransa doğal estetik algısıyla öne çıkar."
    },
    {
      q: isEn
        ? "How do healthcare advertising regulations differ between the UK and Germany?"
        : "İngiltere ve Almanya sağlık turizmi reklam mevzuatları arasında ne gibi farklar vardır?",
      a: isEn
        ? "In the UK, campaigns must adhere strictly to the Advertising Standards Authority (ASA) codes—avoiding medical guarantees, countdown discount timers, or trivializing surgery. In Germany, the Heilmittelwerbegesetz (HWG) and strict DSGVO (GDPR) privacy rules apply, requiring rigorous credential disclosures, transparent material certification (CE marks), and formal privacy consent."
        : "İngiltere'de reklamlar ASA (Advertising Standards Authority) kurallarına tabidir; cerrahiyi hafife alan indirim sayaçları, sahte garanti vaatleri yasaktır. Almanya'da ise Heilmittelwerbegesetz (HWG) ve son derece katı DSGVO (GDPR) veri gizliliği kuralları geçerlidir; hekim uzmanlık belgeleri, kullanılan malzeme sertifikaları (CE) ve şifreli veri aktarımı şeffafça sunulmalıdır."
    },
    {
      q: isEn
        ? "Why do English campaigns fail in the French and DACH markets?"
        : "İngilizce hazırlanan reklamlar Almanya ve Fransa pazarlarında neden başarısız olur?",
      a: isEn
        ? "Healthcare is deeply personal. While Europeans may speak conversational English, medical diagnoses and surgical choices require native-level trust. German and French patients expect landing pages, doctor videos, written treatment estimates, and WhatsApp chats in their mother tongue. Generic English funnels in these regions suffer up to a 70% drop in lead-to-consultation conversion."
        : "Sağlık son derece kişisel ve hassas bir karardır. Hastalar günlük hayatta İngilizce konuşsa dahi, cerrahi operasyon ve sağlık yatırımı kararlarında ana dillerinde iletişim kurmayı şart koşarlar. Almanya ve Fransa'da İngilizce açılan reklamlar ve iniş sayfaları %70'e varan güven ve dönüşüm kaybı yaşatır. Reklam metninden WhatsApp karşılama ve teklif dökümüne kadar tüm süreç ana dilde olmalıdır."
    },
    {
      q: isEn
        ? "How is cross-border patient data protected under GDPR and Turkish KVKK?"
        : "Uluslararası hasta verileri GDPR ve KVKK kapsamında nasıl korunmalıdır?",
      a: isEn
        ? "Overseas Marketing enforces strict end-to-end data encryption. WhatsApp leads, medical reports, and X-Rays are routed into HIPAA/GDPR-compliant CRM environments. Patient consent is collected via explicit double opt-in disclosures, and campaigns never expose sensitive medical conditions in unencrypted ad pixels."
        : "Overseas Marketing, tüm veri toplama süreçlerinde uçtan uca şifreleme ve GDPR/KVKK uyumlu CRM protokolleri uygular. WhatsApp başvuruları, hasta formları ve medikal röntgenler güvenli veri tabanlarında işlenir; reklam piksellerinde özel nitelikli kişisel sağlık verisi kesinlikle barındırılmaz ve açık rıza metinleri zorunlu tutulur."
    },
    {
      q: isEn
        ? "What is the average foreign patient decision cycle across European corridors?"
        : "Avrupa ülkelerinden gelen hastaların operasyon karar verme süresi ne kadardır?",
      a: isEn
        ? "Decision timelines vary by procedure complexity. Dental and hair transplant candidates in the UK and Netherlands decide within 2 to 4 weeks. Major surgical procedures like bariatrics, mommy makeovers, and IVF in Germany and France require 4 to 8 weeks of continuous educational nurturing, video consultations, and post-op guarantee reviews."
        : "Karar süresi branşın cerrahi riskine göre değişir. İngiltere ve Hollanda'da diş ve saç ekimi hastaları 2 ila 4 hafta içinde operasyon kararı alırken; bariyatrik cerrahi, kombine estetik ameliyatlar ve tüp bebekte Almanya ve Fransa hastalarının karar süresi 4 ila 8 haftayı bulur. Bu süreçte sürekli eğitici içerik ve online doktor ön görüşmesi kritik rol oynar."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-24 pb-20">
      <SEOHead
        title={isEn ? "Target Countries & International Medical Markets | Overseas Marketing" : "Hedef Ülkeler ve Uluslararası Sağlık Turizmi Pazarları | Overseas Marketing"}
        description={isEn
          ? "Cross-border healthcare marketing strategies across the UK, Germany, France, Netherlands, and GCC with localized patient acquisition funnels."
          : "İngiltere, Almanya, Fransa, Hollanda ve Körfez pazarlarında sağlık turizmi reklam yönetimi, hasta profilleri ve pazar dinamikleri rehberi."}
        canonicalUrl="https://www.overseas.marketing/ulkeler"
      />
      <JsonLdSchema 
        customTitle={isEn ? "Target Countries & International Medical Markets" : "Hedef Ülkeler ve Uluslararası Sağlık Turizmi Pazarları"}
        customUrl="https://www.overseas.marketing/ulkeler"
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
              {isEn ? "Target Countries & Markets" : "Hedef Ülkeler & Pazarlar"}
            </li>
          </ol>
        </nav>

        {/* Hero Badge & H1 */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-5">
          <Globe2 className="w-4 h-4" />
          <span>{isEn ? "Cross-Border Market Intelligence & Patient Corridors" : "Uluslararası Pazar İstihbaratı ve Sağlık Koridorları"}</span>
        </div>

        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#16202E] tracking-tight leading-[1.15] mb-6 max-w-5xl">
          {isEn ? (
            <>Targeting high-purchasing power patients across <span className="text-[#446CB5]">Europe & Global Corridors</span>.</>
          ) : (
            <>Sağlık turizminde 4 temel Avrupa pazarı ve <span className="text-[#446CB5]">küresel sağlık koridorları</span>.</>
          )}
        </h1>

        <p className="text-base sm:text-lg text-[#595F69] max-w-4xl leading-relaxed mb-8">
          {isEn
            ? "Every country has distinct healthcare insurance waiting times, currency dynamics, and trust barriers. Discover our proven target market strategies for the UK, DACH, France, Benelux, and high-ticket GCC medical corridors."
            : "İngiltere NHS bekleme süreleri, Alman Krankenkassen kapsam dışı tedavileri ve JCI akreditasyon beklentisi, Fransızca dil hassasiyeti ve Körfez ülkelerinin VIP konsiyerj talepleri... Her pazarın hasta arama niyetini, yasal reklam sınırlarını ve satın alma psikolojisini yerinde analiz ediyoruz."}
        </p>

        {/* Quick KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-[#DDE2E8] shadow-xs">
          <div className="border-r border-slate-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#446CB5]">4 Ana</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Core European Markets" : "Birincil Odak Pazar"}</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#16202E]">7.6M+</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "UK NHS Waiting Patients" : "NHS Bekleme Listesi (UK)"}</div>
          </div>
          <div className="border-r border-slate-100 last:border-0 pr-4">
            <div className="text-2xl sm:text-3xl font-extrabold text-[#446CB5]">%100</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "GDPR, DSGVO & ASA Compliance" : "GDPR & ASA Mevzuat Uyumu"}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#16202E]">7/24</div>
            <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Native Language WhatsApp AI" : "Çok Dilli Hasta Karşılama"}</div>
          </div>
        </div>
      </section>

      {/* 2. CORE MARKETS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
              {isEn ? "Primary Target Markets in Europe" : "Birincil Odak Avrupa Pazarlarımız"}
            </h2>
            <p className="text-xs sm:text-sm text-[#595F69] mt-1">
              {isEn ? "Full-funnel marketing architectures tailored to national healthcare behaviors and regulations." : "Ülkelerin ulusal sağlık dinamiklerine, sigorta yapılarına ve reklam mevzuatlarına özel pazarlama kurguları."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {markets.map((m) => (
            <div
              key={m.slug}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="text-4xl">{m.flagEmoji || "🌍"}</div>
                  <span className="px-3.5 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold border border-[#446CB5]/20">
                    {m.badge || (isEn ? "Active Market" : "Aktif Pazar")}
                  </span>
                </div>

                <h3 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors mb-3">
                  {m.title}
                </h3>

                <p className="text-sm text-[#595F69] leading-relaxed mb-6">
                  {m.metaDesc || m.overview}
                </p>

                {/* Hero Stats Mini Grid */}
                {m.heroStats && m.heroStats.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100">
                    {m.heroStats.slice(0, 2).map((st, sIdx) => (
                      <div key={sIdx}>
                        <div className="text-base font-bold text-[#16202E]">{st.value}</div>
                        <div className="text-[11px] text-[#595F69] leading-tight">{st.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Market Insights */}
                {m.insights && m.insights.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                      {isEn ? "Pazar Dinamikleri:" : "Kritik Pazar Dinamikleri:"}
                    </div>
                    <ul className="space-y-2 text-xs text-[#595F69]">
                      {m.insights.slice(0, 3).map((ins, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5] shrink-0 mt-0.5" />
                          <span>{ins}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-[#DDE2E8] flex items-center justify-between mt-4">
                <Link
                  to={`/${m.slug}`}
                  className="font-bold text-sm text-[#446CB5] group-hover:text-[#345999] flex items-center gap-1.5 transition-colors"
                >
                  <span>{isEn ? "Explore Country Architecture" : "Ülke Stratejisini İncele"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* 3. EMERGING HIGH-POTENTIAL CORRIDORS */}
        <div className="mb-8">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
            {isEn ? "High-Potential Emerging Medical Corridors" : "Yüksek Potansiyelli Sağlık Koridorları"}
          </h2>
          <p className="text-xs sm:text-sm text-[#595F69] mt-1">
            {isEn ? "Strategic regions with growing demand for specialized surgical, dental, and executive healthcare." : "Yüksek bütçeli medikal turizm, cerrahi ve diş tedavilerinde hızla yükselen bölgesel koridorlar."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergingCorridors.map((am, idx) => (
            <div key={idx} className="p-7 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs flex flex-col justify-between transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{am.flagEmoji}</span>
                  <span className="text-[11px] font-bold text-[#446CB5] bg-[#EEF3FB] px-3 py-1 rounded-full border border-[#446CB5]/20">
                    {am.status}
                  </span>
                </div>
                <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] mb-2">
                  {am.countryName}
                </h3>
                <p className="text-xs text-[#595F69] leading-relaxed mb-4">
                  {am.desc}
                </p>
                <div className="p-3 bg-[#F8FAFC] rounded-xl border border-slate-100 mb-4 text-[11px] text-slate-600">
                  <strong className="text-slate-800">{isEn ? "Top Demands: " : "Öne Çıkan Branşlar: "}</strong>
                  {am.topTreatments}
                </div>
              </div>
              <button
                onClick={onOpenConsultation}
                className="text-xs font-bold text-[#446CB5] hover:text-[#345999] flex items-center gap-1 self-start pt-2 cursor-pointer"
              >
                <span>{isEn ? "Discuss Corridor Plan" : "Koridor Stratejisini Görüşün"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. BENCHMARK DECISION MATRIX TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#DDE2E8] shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>{isEn ? "Country Comparison Matrix" : "Ülke Karşılaştırma ve Harcama Matrisi"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E] mb-3">
            {isEn ? "Market Comparison: Decision Cycles, Spending Power & Trust Drivers" : "Hedef Pazar Bazında Tedavi Tercihleri, Bütçe ve Güven Dinamikleri"}
          </h2>
          <p className="text-sm text-[#595F69] max-w-3xl mb-8 leading-relaxed">
            {isEn
              ? "Every medical travel corridor presents distinct patient acquisition economics. Review average treatment values, inquiry timelines, and channel requirements across core destination markets."
              : "Her ülkenin hasta edinim maliyeti, karar alma süresi ve güven faktörü farklıdır. Birleşik Krallık, DACH, Fransa, Benelüks ve Körfez pazarlarının temel dinamiklerini inceleyin."}
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200 bg-[#F8FAFC] text-slate-700">
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Market Corridor" : "Hedef Pazar Koridoru"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Top Clinical Demands" : "Popüler Tedaviler"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Currency & Package Value" : "Para Birimi & Paket Değeri"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Decision Cycle" : "Ort. Karar Süresi"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Critical Trust Factor" : "Kritik Güven Unsuru"}</th>
                  <th className="py-3.5 px-4 font-bold">{isEn ? "Optimal Funnel Strategy" : "Önerilen Huni Modeli"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {marketMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#16202E]">
                      <Link to={`/${row.slug}`} className="text-[#446CB5] hover:underline flex items-center gap-1.5">
                        <span>{row.flag}</span> <span>{row.market}</span> <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">{row.treatments}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{row.currency}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.decisionTime}</td>
                    <td className="py-3.5 px-4 text-slate-600">{row.trustBarrier}</td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">{row.funnel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. 2026 INTERNATIONAL REGULATORY & ADVERTISING COMPLIANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="bg-[#16202E] text-white p-8 sm:p-12 rounded-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#60A5FA] text-xs font-bold mb-4">
            <ShieldCheck className="w-4 h-4" />
            <span>{isEn ? "International Healthcare Advertising Framework (2026)" : "2026 Uluslararası Reklam Mevzuatı ve Küresel Uyumluluk"}</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold mb-4">
            {isEn ? "Cross-Border Regulatory Compliance Across Global Markets" : "Hedef Ülkelerde Yasal, Etik ve Mevzuata Tam Uyumlu Reklam Standartları"}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed mb-8">
            {isEn
              ? "Overseas Marketing guarantees full compliance with both destination country advertising standards (UK ASA, EU GDPR / DSGVO) and Turkish Ministry of Health healthcare promotion regulations (12.11.2025 and 26.04.2025 decrees):"
              : "Overseas Marketing; hem hedef ülkelerin yerel reklam standartlarına (Birleşik Krallık ASA, AB GDPR / Almanya DSGVO) hem de Türkiye Sağlık Bakanlığı'nın uluslararası sağlık turizmi tanıtım yönetmeliklerine %100 uyumlu çalışır:"}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">1. UK ASA Standartları</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "UK campaigns follow ASA guidelines: strictly no misleading countdown timers, false surgical guarantees, or non-medical claims." : "İngiltere'de ASA reklam kurallarına tam uyum; sahte indirim sayaçları veya cerrahiyi basitleştiren yanıltıcı vaatler kesinlikle kullanılmaz."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">2. DSGVO / GDPR Güvenliği</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "Patient records, forms, and panoramic X-Rays are processed in encrypted, GDPR-compliant CRM environments." : "Almanya ve Avrupa'da hasta bilgileri, formlar ve tıbbi belgeler uçtan uca şifreli ve GDPR/DSGVO onaylı sistemlerde işlenir."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">3. Yurt Dışı Coğrafi IP Kuralı</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "2026 Turkish regulation mandates that foreign patient ads must be strictly geofenced outside Turkey and never served locally." : "2026 Sağlık Turizmi Yönetmeliği gereği reklamlar IP bazında yalnızca hedef yabancı ülkelere yayınlanır, Türkiye içine gösterilemez."}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm font-bold text-[#60A5FA] mb-2">4. Sağlık Tesis Tescili</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn ? "Campaigns strictly represent licensed healthcare providers and agencies accredited under USHAŞ and HealthTürkiye." : "Tüm kampanyalar yalnızca Sağlık Bakanlığı ve USHAŞ yetki belgesine sahip akredite tesis ve aracı kuruluşlar adına yönetilir."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CROSS-LINKING TO SPECIALTY CLINICAL DIRECTORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DDE2E8] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>{isEn ? "Specialty Integration" : "Branş Mimarisi Entegrasyonu"}</span>
            </div>
            <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E] mb-2">
              {isEn ? "Explore 15 Clinical Specialties Tailored to These Markets" : "Bu Pazarlara Yönelik 15 Klinik Branş Mimarisini İnceleyin"}
            </h3>
            <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
              {isEn
                ? "Every country has specific specialty demands. Discover our dedicated patient funnels for hair restoration, dental clinics, bariatrics, IVF, and hospitals."
                : "Her ülkenin öne çıkan tedavi talepleri farklıdır. Diş, saç ekimi, obezite cerrahisi, plastik cerrahi, tüp bebek ve hastaneler için özel kurgulanmış 15 branş merkezimizi inceleyin."}
            </p>
          </div>
          <Link
            to="/sektorler"
            className="px-6 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shrink-0 shadow-md shadow-[#446CB5]/20"
          >
            <span>{isEn ? "View Clinical Specialties" : "Uzmanlık Alanlarını İncele"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 7. INTEGRATION WITH 6 CORE SERVICE FAMILIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>{isEn ? "Full-Funnel Infrastructure" : "Uluslararası Büyüme Altyapısı"}</span>
        </div>
        <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E] mb-3">
          {isEn ? "Powering Target Markets with 6 Core Growth Services" : "Hedef Pazarlarda Hasta Kazanımı Sağlayan 6 Temel Büyüme Hizmeti"}
        </h2>
        <p className="text-sm text-[#595F69] max-w-3xl mb-8 leading-relaxed">
          {isEn
            ? "Launching target market campaigns requires orchestrated paid media, native multilingual SEO, AI engine visibility, and 24/7 WhatsApp response."
            : "Yurt dışı pazarlarda başarı; yalnızca reklam açmakla değil, yerelleştirilmiş SEO, GEO, çok dilli CRM ve yüksek dönüşümlü web sayfaları ile mümkündür."}
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

      {/* 8. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-left">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isEn ? "FAQ" : "Merak Edilenler"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E]">
            {isEn ? "Frequently Asked Questions About Target Market Strategy" : "Uluslararası Sağlık Turizmi Pazarları Sıkça Sorulan Sorular"}
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

      {/* 9. CTA CONVERSION BOX */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#16202E] to-[#1E2D42] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#446CB5]/30 text-[#8BB2F9] text-xs font-semibold mb-4 border border-[#446CB5]/40">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? "Target Market Analysis" : "Pazar Seçim Analizi"}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold mb-3">
              {isEn ? "Which country holds the highest ROI for your clinic?" : "Kliniğiniz için en yüksek getirili hedef ülkeyi birlikte belirleyelim"}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {isEn
                ? "Let our healthcare growth consultants benchmark your clinical specialties against UK, DACH, France, and Gulf market dynamics."
                : "Kliniğinizin branşlarını, hekim dillerinizi ve bütçenizi analiz ederek İngiltere, Almanya, Fransa veya Körfez pazarlarında en karlı büyüme rotasını çizelim."}
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-4 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#446CB5]/25 flex items-center gap-2 cursor-pointer hover:scale-[1.02]"
            >
              <span>{isEn ? "Request Market Selection Analysis" : "Pazar Seçim Analizi Talep Edin"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
