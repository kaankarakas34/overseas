import React from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  ShieldCheck, 
  BookOpen, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Search, 
  MessageSquare,
  Bot,
  Globe2,
  Calendar,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export const AuthorProfilePage: React.FC = () => {
  const { isEn } = useLanguage();

  const expertiseList = [
    {
      icon: <TrendingUp className="w-5 h-5 text-[#446CB5]" />,
      title: isEn ? "Healthcare Performance Marketing" : "Sağlık Turizmi Performans Pazarlaması",
      desc: isEn 
        ? "Google Ads search intent architecture, multilingual Meta video creatives, and international patient acquisition across the UK & Europe."
        : "İngiltere ve Avrupa genelinde yüksek niyetli Google Ads arama kampanyaları, çok dilli Meta video reklamları ve nitelikli lead maliyeti optimizasyonu."
    },
    {
      icon: <Search className="w-5 h-5 text-[#446CB5]" />,
      title: isEn ? "International SEO & GEO" : "Uluslararası SEO & GEO Mimarisi",
      desc: isEn 
        ? "Multilingual hreflang structures, E-E-A-T medical entity graphs, and generative AI search optimization (ChatGPT, Perplexity, Google AI Overviews)."
        : "Çok dilli hreflang yapıları, medikal E-E-A-T entity grafikleri ve üretken yapay zekâ arama motorlarına (ChatGPT, Perplexity vb.) yönelik GEO optimizasyonu."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#446CB5]" />,
      title: isEn ? "Medical CRM & Patient Journeys" : "Sağlık Turizmi CRM & Hasta Yolculuğu",
      desc: isEn 
        ? "Proprietary WhatsApp sales funnels, multi-agent lead distribution, response time reduction, and offline conversion tracking."
        : "WhatsApp çok dilli satış hunisi tasarımı, temsilci bazlı lead dağıtımı, ilk temas süresinin düşürülmesi ve offline dönüşüm takibi."
    },
    {
      icon: <Bot className="w-5 h-5 text-[#446CB5]" />,
      title: isEn ? "AI Automations & Call Agents" : "Yapay Zekâ ve Sesli İletişim Otomasyonları",
      desc: isEn 
        ? "24/7 multilingual conversational AI workflows, automated lead qualification, and cross-border consultation scheduling."
        : "Saat farkı olan ülkelerden gelen yabancı hasta taleplerinin 7/24 ana dilinde karşılanması, otomatik ön nitelikleme ve takvim entegrasyonu."
    }
  ];

  const articlesAuthored = [
    {
      title: "Sağlık Turizmi Reklamı Nasıl Verilir? Meta, Google Ads ve CRM Rehberi",
      url: "/saglik-turizmi-reklami-nasil-verilir",
      category: "Rehber",
      date: "2026-09-18"
    },
    {
      title: "Doktorlar İçin SEO ve GEO Görünürlük Stratejisi",
      url: "/doktorlar-icin-seo-ve-geo",
      category: "Strateji",
      date: "2026-09-18"
    },
    {
      title: "Mevzuata Uygun Doktor Tanıtımı ve Deontoloji Standartları",
      url: "/doktor-reklam-yonetmeligi",
      category: "Mevzuat",
      date: "2026-09-18"
    },
    {
      title: "Sağlık Turizminde İlk Temas Süresi ve WhatsApp Satış Hunisi",
      url: "/hizmetler/saglik-turizmi-crm-yazilimi",
      category: "CRM & Otomasyon",
      date: "2026-09-17"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Kaan Karakaş | Founder & Healthcare Growth Strategist" : "Kaan Karakaş | Kurucu & Sağlık Büyüme Stratejisti | Overseas Marketing"}
        description={isEn
          ? "Profile and bio of Kaan Karakaş: Founder and lead growth strategist at Overseas Marketing, specializing in medical tourism marketing, SEO/GEO, and CRM automations."
          : "Kaan Karakaş biyografisi ve uzmanlık alanları: Overseas Marketing kurucusu; sağlık turizmi pazarlaması, uluslararası SEO, GEO, CRM ve yapay zekâ otomasyonları uzmanı."}
        canonicalUrl="https://www.overseas.marketing/ekip/kaan-karakas"
      />
      <JsonLdSchema 
        type="person" 
        customTitle="Kaan Karakaş | Overseas Marketing"
        customUrl="https://www.overseas.marketing/ekip/kaan-karakas"
      />

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm flex flex-col md:flex-row items-start md:items-center gap-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-[#16202E] to-[#446CB5] text-white flex items-center justify-center shrink-0 shadow-md">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight font-['Inter_Tight']">KK</span>
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isEn ? "Verified Author & Strategist" : "Kurucu & Büyüme Direktörü"}</span>
            </div>
            <h1 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] mb-2">
              Kaan Karakaş
            </h1>
            <p className="text-[#446CB5] font-semibold text-base sm:text-lg mb-4">
              {isEn ? "Founder & Healthcare Growth Lead | Overseas Marketing" : "Kurucu & Sağlık Turizmi Büyüme Stratejisti"}
            </p>
            <p className="text-[#595F69] text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
              {isEn
                ? "Kaan Karakaş is the founder and lead strategist at Overseas Marketing. He specializes in international patient acquisition, performance marketing, search engine & generative engine optimization (SEO/GEO), medical CRM systems, and AI-driven patient communication workflows for clinics and healthcare organizations across Turkey and Europe."
                : "Kaan Karakaş, Overseas Marketing'in kurucusu ve büyüme stratejistidir. Sağlık turizmi pazarlaması, hedef ülke odaklı performans reklamları (Google Ads, Meta), uluslararası SEO/GEO, çok dilli CRM yapıları ve yapay zekâ destekli hasta iletişim otomasyonları üzerine çalışır. Overseas Marketing'de araştırma, strateji ve dijital büyüme süreçlerine liderlik eder."}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://www.linkedin.com/in/kaankarakas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2] text-white text-xs sm:text-sm font-semibold hover:bg-[#084e96] transition-colors"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn Profili</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
              <Link
                to="/iletisim"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EEF3FB] text-[#446CB5] text-xs sm:text-sm font-semibold hover:bg-[#446CB5] hover:text-white transition-colors"
              >
                <span>Strateji Görüşmesi Planla</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Answer / Bio Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#446CB5] mb-2">
            {isEn ? "Direct Summary / Professional Scope" : "Özet / Uzmanlık ve Sorumluluk Kapsamı"}
          </h2>
          <p className="text-base text-[#16202E] font-medium leading-relaxed">
            {isEn
              ? "Kaan Karakaş leads growth strategies connecting healthcare providers in Turkey with patients in the UK, Germany, France, Netherlands, and GCC markets. His methodology unites technical SEO, multi-country paid search, transparent lead attribution, and KVKK/GDPR-compliant CRM processes."
              : "Kaan Karakaş; Türkiye'deki klinik, hastane ve hekimlerin İngiltere, Almanya, Fransa, Hollanda ve Körfez ülkelerindeki hastalarla buluşmasını sağlayan entegre büyüme altyapısını tasarlar. Yaklaşımı; tıklamadan randevuya uzanan tüm funnel'ı ölçülebilir kılan teknik SEO, çok dilli arama ağı reklamları, WhatsApp CRM yönetimi ve yasal tanıtım mevzuatına tam uyumu temel alır."}
          </p>
        </div>
      </section>

      {/* Core Expertise Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-8">
          {isEn ? "Core Areas of Expertise" : "Temel Uzmanlık Alanları"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseList.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E] mb-2">
                {item.title}
              </h3>
              <p className="text-[#595F69] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Authored Content & Research */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#DDE2E8] p-8 sm:p-12 shadow-sm">
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
                {isEn ? "Authored & Reviewed Knowledge Guides" : "Hazırlanan ve İncelenen Rehberler"}
              </h2>
              <p className="text-[#595F69] text-sm mt-1">
                {isEn ? "In-depth frameworks authored by Kaan Karakaş" : "Sağlık turizmi ve dijital büyüme üzerine yayımlanan derinlemesine içerikler"}
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-[#446CB5] hover:underline"
            >
              <span>{isEn ? "View All Guides" : "Tüm Rehberleri Gör"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="divide-y divide-[#DDE2E8]">
            {articlesAuthored.map((art, idx) => (
              <div key={idx} className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-xs text-[#595F69] mb-1">
                    <span className="px-2 py-0.5 rounded bg-[#EEF3FB] text-[#446CB5] font-medium">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {art.date}
                    </span>
                  </div>
                  <Link
                    to={art.url}
                    className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[#16202E] hover:text-[#446CB5] transition-colors"
                  >
                    {art.title}
                  </Link>
                </div>
                <Link
                  to={art.url}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#446CB5] hover:underline shrink-0"
                >
                  <span>{isEn ? "Read Guide" : "Rehberi Oku"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
