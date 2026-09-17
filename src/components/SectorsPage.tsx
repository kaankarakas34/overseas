import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Stethoscope
} from 'lucide-react';
import { MASTER_BRANCHES } from '../data/masterPlanData';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface SectorsPageProps {
  onOpenConsultation: () => void;
}

export const SectorsPage: React.FC<SectorsPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Healthcare Sectors & Clinical Specialties | Overseas Marketing" : "Hizmet Verdiğimiz Sağlık Branşları ve Sektörler | Overseas Marketing"}
        description={isEn
          ? "Explore specialized medical tourism marketing solutions across 15+ healthcare sectors: Dental, hair transplant, aesthetic surgery, IVF, and hospitals."
          : "Diş klinikleri, saç ekimi, plastik cerrahi, tüp bebek, obezite, göz ve hastaneler için özel sağlık turizmi pazarlama çözümleri ve branş rehberleri."}
        canonicalUrl="https://www.overseas.marketing/sektorler"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <Building2 className="w-3.5 h-3.5" />
          <span>{isEn ? "Specialty Directory" : "Klinik Branşları Merkezi"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Specialized growth architectures tailored for <span className="text-[#446CB5]">each clinical specialty</span>.</>
          ) : (
            <>Her sağlık branşı için <span className="text-[#446CB5]">özelleştirilmiş hasta kazanım modelleri</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Dental tourism differs radically from hair restoration or bariatric surgery. Patient anxieties, decision timelines, channel effectiveness, and average order values require tailored marketing funnels."
            : "Diş tedavisi arayan hastanın karar süreci ile saç ekimi veya tüp mide ameliyatı düşünen hastanın psikolojisi ve güven kriterleri tamamen farklıdır. 15 branş için özelleştirilmiş büyüme çözümlerimizi inceleyin."}
        </p>
      </section>

      {/* Specialties Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MASTER_BRANCHES.map((b) => (
            <div
              key={b.slug}
              className="p-8 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold mb-4">
                  {b.heroBadge || "Branş Uzmanlığı"}
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors mb-3">
                  {b.title}
                </h2>
                <p className="text-sm text-[#595F69] leading-relaxed mb-6">
                  {b.shortDesc || b.metaDesc}
                </p>

                {b.highlights && (
                  <ul className="space-y-2 mb-6 text-xs text-[#595F69]">
                    {b.highlights.slice(0, 3).map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-[#DDE2E8] flex items-center justify-between">
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

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn ? "Don't see your clinical sub-specialty?" : "Branşınıza özel büyüme planını birlikte hazırlayalım"}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn ? "We customize target country campaigns for niche surgical practices and university hospitals." : "Niş cerrahi alanlar, multidisipliner merkezler ve tıp merkezleri için hedefe özel strateji geliştiriyoruz."}
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 inline-flex items-center gap-2"
          >
            <span>{isEn ? "Get Custom Specialty Proposal" : "Branşa Özel Teklif Alın"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
