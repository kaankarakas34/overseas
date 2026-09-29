import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  ShieldCheck, 
  Bot, 
  Building2, 
  Globe2,
  FileCheck2,
  ArrowUpRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const NewArticlesSlider: React.FC = () => {
  const { isEn } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);

  const newArticles = [
    {
      id: 'reg-2026',
      title: isEn 
        ? "Healthcare Tourism Advertising Regulations 2026: Cross-Border Rules" 
        : "Sağlık Turizmi Reklam Mevzuatı 2026: Yurt Dışına Tanıtım Şartları",
      url: "/blog/saglik-turizmi-reklam-mevzuati-2026",
      badge: isEn ? "New Guide • 2026 Regulation" : "Yeni Rehber • 2026 Mevzuat",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      desc: isEn
        ? "12 Nov 2025 promotion decree, authorization certificate mandates, HealthTürkiye badge, patient consent, and publisher compliance matrix."
        : "12 Kasım 2025 tanıtım yönetmeliği, Bakanlık yetki belgesi şartları, HealthTürkiye logosu, hasta açık rızası ve yasal kontrol matrisi.",
      readTime: "10 dk okuma",
      date: "29 Eylül 2026",
      category: isEn ? "Legal & Regulations" : "Mevzuat & Tanıtım"
    },
    {
      id: 'chatgpt-ads',
      title: isEn 
        ? "Can Healthcare Clinics Run ChatGPT Ads? 2026 Policy Breakdown" 
        : "Sağlık Turizminde ChatGPT Reklamı Verilebilir mi? 2026 Politika Rehberi",
      url: "/blog/saglik-turizminde-chatgpt-reklami-verilebilir-mi",
      badge: isEn ? "New Analysis • OpenAI Policy" : "Yeni Analiz • OpenAI Politikası",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      icon: <Bot className="w-5 h-5 text-[#446CB5]" />,
      desc: isEn
        ? "OpenAI official policy breakdown: why medical procedures are disallowed globally, hospital rules, and the compliant organic GEO alternative."
        : "OpenAI resmî uygunluk tablosu: tıbbi işlemlerin küresel izin dışılığı, hastane şartları ve organik GEO alternatifi.",
      readTime: "9 dk okuma",
      date: "29 Eylül 2026",
      category: isEn ? "AI & Policy" : "Yapay Zekâ & Politika"
    },
    {
      id: 'doctor-agency',
      title: isEn
        ? "Doctor Advertising Agency: Compliant Authority & Digital PR"
        : "Doktor Reklam Ajansı: Hekimler İçin Mevzuata Uygun Görünürlük",
      url: "/doktor-reklam-ajansi",
      badge: isEn ? "Strategic Master Guide" : "Hekim Otorite Rehberi",
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      icon: <Building2 className="w-5 h-5 text-indigo-600" />,
      desc: isEn
        ? "Physician personal branding, organic medical SEO, and YouTube/LinkedIn thought leadership without advertising ban penalties."
        : "1219 sayılı Kanun ve Sağlık Bakanlığı tanıtım yönetmeliğine uygun organik SEO, GEO ve hekim itibar yönetimi modeli.",
      readTime: "12 dk okuma",
      date: "2026 Güncel",
      category: isEn ? "Physician Branding" : "Hekim Markası"
    },
    {
      id: 'uk-ads',
      title: isEn
        ? "United Kingdom Healthcare Tourism Advertising: UK Patient Journey"
        : "İngiltere Sağlık Turizmi Reklamları: UK Hasta Karar Yolculuğu",
      url: "/ingiltere-saglik-turizmi-reklamlari",
      badge: isEn ? "Market Blueprint" : "Hedef Pazar Analizi",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-200",
      icon: <Globe2 className="w-5 h-5 text-amber-600" />,
      desc: isEn
        ? "NHS waitlist relief, GBP currency arbitrage, UK ASA advertising compliance, and dental/hair transplant search intent."
        : "NHS bekleme süreleri, sterlin arbitrajı, ASA reklam kuralları ve diş implantı/saç ekimi talep haritası.",
      readTime: "8 dk okuma",
      date: "2026 Güncel",
      category: isEn ? "Target Markets" : "Hedef Pazarlar"
    },
    {
      id: 'geo-service',
      title: isEn
        ? "Generative Engine Optimization (GEO): AI Search Visibility"
        : "GEO (Generative Engine Optimization): Yapay Zekâ Aramalarında Görünürlük",
      url: "/hizmetler/geo-generative-engine-optimization",
      badge: isEn ? "Next-Gen SEO" : "Yeni Nesil Optimizasyon",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      icon: <FileCheck2 className="w-5 h-5 text-purple-600" />,
      desc: isEn
        ? "How clinics get cited as authoritative sources in ChatGPT, Gemini, and Perplexity with verifiable entity structure."
        : "Klinik bilgilerinin erişilebilirliğini ve kaynak gösterilmeye uygunluğunu geliştirir; görünürlüğü düzenli sorgularla ölçeriz.",
      readTime: "7 dk okuma",
      date: "2026 Güncel",
      category: isEn ? "AI Search" : "Yapay Zekâ SEO"
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 380;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white border-b border-[#DDE2E8] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header with Title and Nav Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5]">
              <Sparkles className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>{isEn ? "Newly Published Knowledge & Policy Analysis" : "Yeni Yayımlanan Rehberler & Politika Analizleri"}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E] tracking-tight">
              {isEn ? "Featured Research & Regulatory Briefs" : "Öne Çıkan Güncel İçerikler & Mevzuat Masası"}
            </h2>
            <p className="text-xs sm:text-sm text-[#595F69]">
              {isEn
                ? "Recent strategic publications covering OpenAI health advertising policies, 2026 Turkish promotion laws, and cross-border acquisition models."
                : "OpenAI sağlık reklam politikaları, 2026 tanıtım mevzuatı ve sınır ötesi hasta edinimi hakkında en son yayımladığımız karar verici rehberler."}
            </p>
          </div>

          {/* Slider Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => scroll('left')}
              aria-label={isEn ? "Previous article" : "Önceki yazı"}
              className="p-2.5 rounded-xl border border-[#DDE2E8] bg-white hover:bg-[#F8FAFC] text-[#16202E] transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label={isEn ? "Next article" : "Sonraki yazı"}
              className="p-2.5 rounded-xl border border-[#DDE2E8] bg-white hover:bg-[#F8FAFC] text-[#16202E] transition-colors cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#EEF3FB] hover:bg-[#DDE8F8] text-xs font-bold text-[#446CB5] transition-colors ml-2"
            >
              <span>{isEn ? "All Guides" : "Tüm Yazılar"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Scrollable Slider Cards Container */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {newArticles.map((art) => (
            <div
              key={art.id}
              className="min-w-[310px] sm:min-w-[360px] max-w-[360px] snap-start rounded-3xl bg-[#F8FAFC] border border-[#DDE2E8] hover:border-[#446CB5]/40 hover:bg-white hover:shadow-lg transition-all p-6 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${art.badgeColor}`}>
                    {art.badge}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center shadow-2xs">
                    {art.icon}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-[#64748B] block">
                    {art.category} • {art.date}
                  </span>
                  <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors line-clamp-2 leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#595F69] leading-relaxed line-clamp-3">
                    {art.desc}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-[#64748B] font-medium text-[11px]">
                  <Clock className="w-3 h-3 text-[#94A3B8]" />
                  <span>{art.readTime}</span>
                </span>

                <Link
                  to={art.url}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] group-hover:underline cursor-pointer"
                >
                  <span>{isEn ? "Read Article" : "Rehberi Oku"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
