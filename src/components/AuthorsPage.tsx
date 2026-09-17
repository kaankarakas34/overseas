import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  FileText, 
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

export const AuthorsPage: React.FC = () => {
  const { isEn } = useLanguage();

  const authors = [
    {
      name: "Kaan Karakaş",
      title: isEn ? "Founder & Healthcare Growth Lead" : "Kurucu & Sağlık Büyüme Stratejisti",
      bio: isEn
        ? "Specializing in international patient funnel engineering, paid search acquisition across the UK & Europe, and proprietary medical CRM automations."
        : "Sağlık turizminde uluslararası hasta edinim hunileri, İngiltere ve Avrupa pazarında Google Ads yönetimi ve özel medikal CRM otomasyonlarında uzmanlaşmıştır.",
      articlesCount: "45+ Yayın",
      linkedin: "https://www.linkedin.com/in/kaankarakas",
      topics: ["Sağlık Turizmi Google Ads", "Hasta Yolculuğu", "CRM & Otomasyon", "Pazar Seçimi"]
    },
    {
      name: "Overseas Marketing Medikal SEO Ekibi",
      title: isEn ? "Technical SEO & Generative AI Specialists" : "Teknik SEO ve Yapay Zekâ (GEO) Birimi",
      bio: isEn
        ? "Senior search strategists engineering multilingual hreflang architecture, structured medical Schema.org, and ChatGPT / Perplexity retrieval signals."
        : "Çok dilli hreflang mimarisi, yapılandırılmış sağlık verisi (Schema.org) ve ChatGPT / Perplexity tavsiye optimizasyonu (GEO) üzerine çalışan teknik analiz ekibi.",
      articlesCount: "40+ Rehber",
      topics: ["Uluslararası SEO", "GEO / AI Search", "E-E-A-T Mimarisi", "Hreflang & Çok Dilli Web"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Editorial Board & Healthcare Authors | Overseas Marketing" : "Editoryal Kadro ve Yazarlarımız | Overseas Marketing"}
        description={isEn
          ? "Meet the authors and medical marketing strategists behind Overseas Marketing's research guides, case studies, and regulatory analysis."
          : "Overseas Marketing rehberlerinin, vaka analizlerinin ve mevzuat içeriklerinin arkasındaki editoryal kadro ve sağlık turizmi stratejistleri."}
        canonicalUrl="https://www.overseas.marketing/yazarlar"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{isEn ? "Editorial Authority & E-E-A-T" : "Editoryal Sahiplik & E-E-A-T"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Verified healthcare expertise: <span className="text-[#446CB5]">Meet our editorial strategists</span>.</>
          ) : (
            <>Doğrulanabilir sağlık pazarlaması uzmanlığı: <span className="text-[#446CB5]">Yazarlarımız ve editoryal kadromuz</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Healthcare content demands the highest standards of Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T). Every article on Overseas Marketing is authored or verified by experienced healthcare growth practitioners."
            : "Sağlık turizmi YMYL (Your Money or Your Life) kapsamındadır. Overseas Marketing kütüphanesinde yer alan her rehber, gerçek saha deneyimine sahip stratejistler tarafından hazırlanır ve resmî mevzuat kaynaklarıyla doğrulanır."}
        </p>
      </section>

      {/* Authors Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {authors.map((a, idx) => (
            <div key={idx} className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E]">
                      {a.name}
                    </h2>
                    <div className="text-sm font-semibold text-[#446CB5] mt-1">
                      {a.title}
                    </div>
                  </div>
                  {a.linkedin && (
                    <a
                      href={a.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#446CB5] hover:bg-[#446CB5] hover:text-white flex items-center justify-center transition-colors shrink-0"
                      aria-label="LinkedIn"
                    >
                      <LinkedInIcon className="w-5 h-5" />
                    </a>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed mb-6">
                  {a.bio}
                </p>
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                  {isEn ? "Expertise Topics:" : "Uzmanlık Alanları:"}
                </div>
                <div className="flex flex-wrap gap-2">
                  {a.topics.map((t, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded-lg bg-[#F8FAFC] border border-[#DDE2E8] text-xs font-medium text-[#16202E]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Editorial Policy Statement */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20 space-y-4">
          <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#446CB5]" />
            <span>{isEn ? "Editorial Integrity & Source Policy" : "Editoryal İlkelerimiz ve Kaynak Politikası"}</span>
          </h3>
          <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
            {isEn
              ? "We do not accept paid link insertions or sponsored guest articles. All regulatory and legal references cite official portals: Turkish Ministry of Health, USHAŞ / HealthTürkiye, and relevant platform policies (Google Healthcare Ads Policy, Meta Advertising Standards). Contents are reviewed annually for statutory updates."
              : "Sitemizde ücretli link satışı, manipülatif sponsorlu içerik veya yapay reklam yayınlanmaz. Mevzuat ve teşvik bilgileri doğrudan T.C. Sağlık Bakanlığı, USHAŞ (HealthTürkiye) ve Ticaret Bakanlığı resmî portallarından teyit edilir. Değişen reklam politikaları düzenli olarak güncellenir."}
          </p>
          <div className="pt-2">
            <Link
              to="/blog"
              className="font-bold text-sm text-[#446CB5] hover:text-[#345999] flex items-center gap-1.5"
            >
              <span>{isEn ? "Browse Knowledge Base Guides" : "Rehber Kütüphanesini İncele"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
