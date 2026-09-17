import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Mail, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

const LinkedInIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

interface TeamPageProps {
  onOpenConsultation: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  const team = [
    {
      name: "Kaan Karakaş",
      role: isEn ? "Founder & Lead Growth Strategist" : "Kurucu & Kıdemli Büyüme Stratejisti",
      bio: isEn
        ? "Specialized in medical tourism paid media, international patient funnels, and proprietary CRM architecture. Advised 40+ healthcare institutions on European patient acquisition."
        : "Sağlık turizminde uluslararası reklam yönetimi, hasta dönüşüm hunileri ve özel medikal CRM mimarisinde uzmanlaşmıştır. 40'tan fazla klinik ve hekimin Avrupa hasta kazanımını yönetmiştir.",
      linkedin: "https://www.linkedin.com/in/kaankarakas",
      specialties: isEn 
        ? ["Google Ads Healthcare", "Funnel Architecture", "Patient Journey Modeling"] 
        : ["Google Ads Sağlık Reklamları", "Funnel Mimarisi", "Hasta Yolculuğu Modellemesi"]
    },
    {
      name: "Medikal SEO & GEO Ekibi",
      role: isEn ? "Healthcare Search & Generative AI Division" : "Sağlık Aramaları ve Yapay Zekâ Birimi",
      bio: isEn
        ? "Engineering technical SEO, multilingual hreflang infrastructure, and Generative Engine Optimization (ChatGPT, Perplexity, Gemini citations) strictly for medical specialties."
        : "Klinikler ve hastaneler için teknik SEO, çok dilli hreflang mimarisi ve ChatGPT / Perplexity gibi yapay zekâ sistemlerinde tavsiye edilme (GEO) stratejilerini yönetir.",
      specialties: isEn 
        ? ["Technical SEO", "GEO & AI Retrieval", "Medical Schema.org"] 
        : ["Teknik SEO", "GEO & AI Retrieval", "Medikal Schema.org"]
    },
    {
      name: "Medikal Kreatif & Video Prodüksiyon",
      role: isEn ? "Clinical Media & Video Storytelling" : "Klinik Medya ve Video Prodüksiyon Birimi",
      bio: isEn
        ? "Producing cinema-grade 4K clinical videos, surgeon interview series, and patient journey stories complying strictly with healthcare promotional laws."
        : "Sağlık Bakanlığı tanıtım mevzuatına tam uyumlu; hekim uzmanlık videoları, klinik içi sinematik çekimler ve yabancı hasta deneyim içerikleri üretir.",
      specialties: isEn 
        ? ["4K Clinical Shoots", "Surgeon Branding", "Multilingual Ad Creatives"] 
        : ["4K Klinik Çekimleri", "Cerrah Markalama", "Çok Dilli Reklam Kreatifleri"]
    },
    {
      name: "Hasta İletişimi & CRM Mühendisliği",
      role: isEn ? "WhatsApp Automation & Call Architecture" : "WhatsApp Otomasyonu ve Çağrı Mimarisi",
      bio: isEn
        ? "Developing real-time multilingual WhatsApp routing, AI call agents, and CRM pipeline scoring to minimize lead leakage."
        : "Farklı saat dilimlerinden gelen yabancı hasta başvurularının saniyeler içinde karşılanması için çok dilli WhatsApp ve sesli AI bot altyapılarını kurar.",
      specialties: isEn 
        ? ["WhatsApp API Automations", "AI Voice Agents", "Lead Scoring"] 
        : ["WhatsApp API Otomasyonu", "AI Sesli Asistan", "Lead Skorlama"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Our Team & Experts | Overseas Marketing Healthcare Agency" : "Ekibimiz ve Uzman Kadromuz | Overseas Marketing"}
        description={isEn
          ? "Meet Overseas Marketing's healthcare marketing strategists, medical SEO specialists, and CRM engineers driving international patient growth."
          : "Overseas Marketing'in sağlık turizmi stratejistleri, medikal SEO uzmanları ve CRM mühendisleriyle tanışın. E-E-A-T uyumlu profesyonel ekip."}
        canonicalUrl="https://www.overseas.marketing/ekibimiz"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <Users className="w-3.5 h-3.5" />
          <span>{isEn ? "E-E-A-T Clinical Growth Team" : "E-E-A-T Uzman Kadro"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Experienced strategists dedicated to <span className="text-[#446CB5]">cross-border healthcare growth</span>.</>
          ) : (
            <>Yalnızca sağlık turizmine odaklanmış <span className="text-[#446CB5]">uzman strateji ve teknoloji ekibi</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Healthcare advertising requires deep knowledge of medical terminology, patient psychology, legal advertising limits, and cross-border operations. Meet the specialized team behind Overseas Marketing."
            : "Sağlık pazarlaması genel reklamcılıktan farklıdır; tıbbi terminoloji, hasta psikolojisi, hedef ülke sigorta dinamikleri ve yasal mevzuat sınırlarına tam hakimiyet gerektirir. Overseas Marketing'in uzman kadrosuyla tanışın."}
        </p>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((m, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E]">
                      {m.name}
                    </h3>
                    <div className="text-sm font-semibold text-[#446CB5] mt-1">
                      {m.role}
                    </div>
                  </div>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#446CB5] hover:bg-[#446CB5] hover:text-white flex items-center justify-center transition-colors shrink-0"
                      aria-label={`${m.name} LinkedIn Profile`}
                    >
                      <LinkedInIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-[#595F69] text-sm sm:text-base leading-relaxed mb-6">
                  {m.bio}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                  {isEn ? "Core Expertise:" : "Temel Uzmanlık Alanları:"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {m.specialties.map((s, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-[#DDE2E8] text-xs font-medium text-[#16202E]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn ? "Work with our specialized medical growth team" : "Sağlık turizmi uzmanlarımızla kliniğinizi büyütün"}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn ? "Schedule a private discovery session to review your clinic's international acquisition metrics." : "Kliniğinizin mevcut reklam ve hasta edinim performansını incelemek için özel bir analiz toplantısı planlayın."}
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 inline-flex items-center gap-2"
          >
            <span>{isEn ? "Schedule Team Consultation" : "Ekiple Strateji Toplantısı Planla"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
