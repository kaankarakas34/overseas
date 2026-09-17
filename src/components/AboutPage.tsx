import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Globe2
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "E-E-A-T & Regulatory Compliance" : "Mevzuat ve Etik Uyum",
      desc: isEn 
        ? "We strictly adhere to Turkish Ministry of Health and target country advertising regulations without misleading claims." 
        : "Sağlık Bakanlığı tanıtım yönetmeliğine ve hedef ülke reklam regülasyonlarına tam uyumla, yanıltıcı vaatlerden uzak çalışırız."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Integrated Performance & Technology" : "Entegre Pazarlama & Teknoloji",
      desc: isEn
        ? "We fuse paid acquisition (Google & Meta Ads) with proprietary CRM and AI agents so no patient inquiry is lost."
        : "Google Ads ve Meta reklamlarını özel WhatsApp CRM ve sesli yapay zekâ asistanlarıyla birleştirerek sıfır kayıp lead hedefliyoruz."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Target Market Localization" : "Hedef Pazar Yerelleştirmesi",
      desc: isEn
        ? "Native copywriting and patient journey optimization in English, German, French, Arabic, and Dutch."
        : "İngiltere, Almanya, Fransa, Hollanda ve Körfez pazarlarında doğrudan ana dilinde ve kültürel dinamiklere uygun hasta iletişimi."
    },
    {
      icon: <Award className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Verifiable Case Documentation" : "Ölçülebilir & Şeffaf Sonuçlar",
      desc: isEn
        ? "Real performance data: CPL, qualified consultation rates, and actual patient conversion attribution."
        : "Nitelikli hasta başvuru maliyetleri (CPL), randevu gerçekleşme oranları ve net ciro katkısı üzerinden haftalık şeffaf raporlama."
    }
  ];

  const milestones = [
    { year: "2021", title: isEn ? "Foundation & Medical Focus" : "Kuruluş ve Medikal Odak", desc: isEn ? "Established exclusively for healthcare cross-border growth." : "Yalnızca sağlık turizmi ve hekim büyümesi odaklı ajans modeli kuruldu." },
    { year: "2023", title: isEn ? "Proprietary CRM & Automation" : "Özel CRM ve WhatsApp Altyapısı", desc: isEn ? "Launched dedicated multilingual WhatsApp lead qualification CRM." : "Çok dilli satış ekiplerine özel sağlık turizmi CRM altyapısı geliştirildi." },
    { year: "2025", title: isEn ? "GEO & AI Search Integration" : "GEO ve Yapay Zekâ Entegrasyonu", desc: isEn ? "Pioneered Generative Engine Optimization for ChatGPT and Perplexity." : "ChatGPT, Perplexity ve Google AI Overviews için GEO optimizasyon katmanı açıldı." },
    { year: "2026", title: isEn ? "Global Patient Growth Engine" : "Entegre Küresel Hasta Motoru", desc: isEn ? "Managing 15+ specialties across 12 countries with 360° growth stack." : "15'i aşkın klinik branşında İngiltere ve Avrupa genelinde tam kapsamlı büyüme yönetimi." }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "About Us | Overseas Marketing Health Tourism Agency" : "Hakkımızda | Overseas Marketing Sağlık Turizmi Reklam Ajansı"}
        description={isEn
          ? "Learn about Overseas Marketing: Our medical growth methodology, team, clinical principles, and international patient acquisition stack."
          : "Overseas Marketing hakkında: Deneyimimiz, sağlık turizmi büyüme yaklaşımımız, etik ilkelerimiz, ekibimiz ve uluslararası hasta edinim modeli."}
        canonicalUrl="https://www.overseas.marketing/hakkimizda"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>{isEn ? "About Overseas Marketing" : "Overseas Marketing Hakkında"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>We engineer <span className="text-[#446CB5]">predictable international patient growth</span> for healthcare providers.</>
          ) : (
            <>Sağlık kuruluşları için <span className="text-[#446CB5]">öngörülebilir uluslararası hasta kazanımı</span> inşa ediyoruz.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Overseas Marketing is a specialized medical tourism growth agency based in Istanbul. We combine high-intent performance advertising, international SEO/GEO, high-converting medical websites, proprietary WhatsApp CRM, and AI call agents under a single operational roof."
            : "Overseas Marketing; İstanbul merkezli, yalnızca sağlık turizmi ve hekim büyümesine odaklanmış uzman bir dijital ajanstır. Yüksek niyetli performans reklamlarını, uluslararası SEO/GEO altyapısını, dönüşüm odaklı kliniki web sitelerini, özel WhatsApp CRM ve sesli yapay zekâ asistanlarını tek büyüme çatısında birleştiriyoruz."}
        </p>
      </section>

      {/* GEO Direct Answer Snippet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#446CB5] mb-2">
            {isEn ? "Direct Summary / Agency Overview" : "Özet / Overseas Marketing Ne Yapar?"}
          </h2>
          <p className="text-base text-[#16202E] font-medium leading-relaxed mb-4">
            {isEn
              ? "Overseas Marketing provides end-to-end patient acquisition solutions for clinics, hospitals, and surgeons targeting the UK, Germany, France, Netherlands, and GCC. We do not just deliver clicks; we track the full funnel from the first Google search to the clinic consultation room."
              : "Overseas Marketing; İngiltere, Almanya, Fransa, Hollanda ve Körfez ülkelerinden yabancı hasta çekmek isteyen klinik, hastane ve hekimlere uçtan uca büyüme altyapısı kurar. Yalnızca tıklama değil; Google aramasından ameliyat randevusuna uzanan tüm hasta yolculuğunu ölçülebilir biçimde yönetir."}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#446CB5]/20 text-center">
            <div>
              <div className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#446CB5]">15+</div>
              <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Specialties Managed" : "Uzmanlık Branşı"}</div>
            </div>
            <div>
              <div className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#446CB5]">12+</div>
              <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Target Countries" : "Hedef Pazar"}</div>
            </div>
            <div>
              <div className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#446CB5]">%100</div>
              <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "Mevzuat Compliance" : "Mevzuat Uyumu"}</div>
            </div>
            <div>
              <div className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#446CB5]">7/24</div>
              <div className="text-xs text-[#595F69] font-medium mt-1">{isEn ? "AI Call & Chat" : "AI Hasta Karşılama"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
            {isEn ? "Our Core Operational Principles" : "Temel Çalışma ve Hizmet İlkelerimiz"}
          </h2>
          <p className="text-[#595F69] mt-2">
            {isEn ? "Ethical, transparent, and technology-driven healthcare marketing." : "Etik, şeffaf ve teknoloji odaklı sağlık pazarlaması."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF3FB] flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] mb-3">
                {v.title}
              </h3>
              <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-8 text-center">
            {isEn ? "Our Growth Roadmap" : "Gelişim Yolculuğumuz"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 border-l-2 border-[#446CB5]">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#446CB5] border-2 border-white" />
                <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">{m.year}</span>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E] mt-1 mb-2">{m.title}</h3>
                <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn 
              ? "Ready to scale your international patient volume?" 
              : "Kliniğinizin uluslararası hasta hacmini birlikte büyütelim."}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn 
              ? "Schedule a 30-minute confidential growth consultation with our healthcare marketing directors." 
              : "Sağlık turizmi büyüme stratejistlerimizle 30 dakikalık ücretsiz strateji görüşmesi planlayın."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 flex items-center gap-2"
            >
              <span>{isEn ? "Schedule Strategy Call" : "Strateji Görüşmesi Planla"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/iletisim"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-colors"
            >
              {isEn ? "Contact Details" : "İletişim Bilgileri"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
