import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Globe2, 
  Building2, 
  Calendar, 
  Target, 
  AlertCircle, 
  Lightbulb, 
  FileCheck,
  ShieldCheck,
  Filter
} from 'lucide-react';
import { CASE_STUDIES } from '../data/masterPlanData';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudiesPageProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredCases = selectedType === 'all' 
    ? CASE_STUDIES 
    : CASE_STUDIES.filter(c => c.clinicType.toLowerCase().includes(selectedType.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Health Tourism Case Studies & Proven Results | Overseas Marketing" : "Sağlık Turizmi Vaka Analizleri ve Başarı Hikayeleri | Overseas Marketing"}
        description={isEn
          ? "Explore real healthcare marketing case studies: Problem, strategy, execution, measurable CPL metrics, and key learnings across dental, hair transplant, and surgery."
          : "Gerçek sağlık turizmi vaka analizleri: Sorun, strateji, uygulama, ölçülebilir CPL sonuçları ve öğrenimler. Diş, saç ekimi ve estetik cerrahi başarı hikayeleri."}
        canonicalUrl="https://www.overseas.marketing/basari-hikayeleri"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>{isEn ? "Data-Driven Healthcare Case Studies" : "Ölçülebilir Sağlık Turizmi Vaka Analizleri"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Real clinic growth stories: <span className="text-[#446CB5]">Problem, strategy, and verified outcomes</span>.</>
          ) : (
            <>Sağlık turizminde gerçek sonuçlar: <span className="text-[#446CB5]">Sorun, strateji ve ölçülebilir başarı</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "We believe in radical transparency. Review our detailed case studies structured in a scientific problem-solution-result framework, showing real cost-per-lead reductions and international patient volume growth."
            : "Yuvarlak iddialar veya sahte başarı vaatleri yerine; 'Sorun → Strateji → Uygulama → Ölçülebilir Sonuç → Öğrenim' formatında belgelenmiş gerçek klinik büyüme hikayelerimizi inceleyin."}
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 bg-white border border-[#DDE2E8] rounded-2xl w-fit">
          <button
            onClick={() => setSelectedType('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              selectedType === 'all' 
                ? 'bg-[#446CB5] text-white shadow-xs' 
                : 'text-[#595F69] hover:text-[#16202E] hover:bg-[#F8FAFC]'
            }`}
          >
            {isEn ? "All Case Studies" : "Tüm Vakalar"} ({CASE_STUDIES.length})
          </button>
          <button
            onClick={() => setSelectedType('diş')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              selectedType === 'diş' 
                ? 'bg-[#446CB5] text-white shadow-xs' 
                : 'text-[#595F69] hover:text-[#16202E] hover:bg-[#F8FAFC]'
            }`}
          >
            {isEn ? "Dental Tourism" : "Diş Kliniği"}
          </button>
          <button
            onClick={() => setSelectedType('saç')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              selectedType === 'saç' 
                ? 'bg-[#446CB5] text-white shadow-xs' 
                : 'text-[#595F69] hover:text-[#16202E] hover:bg-[#F8FAFC]'
            }`}
          >
            {isEn ? "Hair Restoration" : "Saç Ekimi"}
          </button>
          <button
            onClick={() => setSelectedType('estetik')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
              selectedType === 'estetik' 
                ? 'bg-[#446CB5] text-white shadow-xs' 
                : 'text-[#595F69] hover:text-[#16202E] hover:bg-[#F8FAFC]'
            }`}
          >
            {isEn ? "Plastic & Bariatric Surgery" : "Estetik & Cerrahi"}
          </button>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20">
        {filteredCases.map((cs) => (
          <article 
            key={cs.id}
            id={cs.id}
            className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Header / Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#DDE2E8] mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-full bg-[#EEF3FB] text-[#446CB5] font-bold text-xs">
                  {cs.clinicType}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#595F69] font-semibold">
                  <Globe2 className="w-3.5 h-3.5 text-[#446CB5]" />
                  {cs.country}
                </span>
              </div>
              <span className="text-xs text-[#94A3B8] font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                {cs.period}
              </span>
            </div>

            {/* Title & Summary */}
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-4">
              {cs.title}
            </h2>
            <p className="text-base text-[#595F69] leading-relaxed mb-8">
              {cs.summary}
            </p>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] mb-8">
              {cs.metrics.map((m, mIdx) => (
                <div key={mIdx} className="text-center sm:text-left">
                  <div className="font-['Inter_Tight'] text-3xl font-extrabold text-[#446CB5]">
                    {m.value}
                  </div>
                  <div className="text-sm font-bold text-[#16202E] mt-1">
                    {m.label}
                  </div>
                  <div className="text-xs text-[#595F69] mt-0.5">
                    {m.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Structured 5-Step Deep Dive */}
            <div className="space-y-6 text-sm sm:text-base">
              {cs.problemStatement && (
                <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                  <h3 className="font-bold text-amber-900 flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    <span>{isEn ? "Initial Bottleneck & Problem:" : "1. Başlangıçtaki Sorun ve Darboğaz:"}</span>
                  </h3>
                  <p className="text-amber-950/80 leading-relaxed text-sm">
                    {cs.problemStatement}
                  </p>
                </div>
              )}

              {cs.intervention && (
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/60">
                  <h3 className="font-bold text-blue-900 flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                    <Target className="w-4 h-4 text-blue-600" />
                    <span>{isEn ? "Strategic Intervention & Architecture:" : "2. Uygulanan Strateji ve Teknoloji:"}</span>
                  </h3>
                  <p className="text-blue-950/80 leading-relaxed text-sm">
                    {cs.intervention}
                  </p>
                </div>
              )}

              {cs.resultsDetailed && (
                <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                  <h3 className="font-bold text-emerald-900 flex items-center gap-2 mb-2 text-sm uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{isEn ? "Measurable Outcomes & Attribution:" : "3. Ölçülebilir Sonuçlar ve Katkı:"}</span>
                  </h3>
                  <p className="text-emerald-950/80 leading-relaxed text-sm">
                    {cs.resultsDetailed}
                  </p>
                </div>
              )}

              {cs.limitations && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-[#595F69] flex items-start gap-2">
                  <Lightbulb className="w-4 h-4 text-[#446CB5] shrink-0 mt-0.5" />
                  <div>
                    <strong>{isEn ? "Learnings & Confidentiality Note: " : "Öğrenimler ve Gizlilik Notu: "}</strong>
                    {cs.limitations}
                  </div>
                </div>
              )}
            </div>

            {/* Services Used Tags */}
            <div className="mt-8 pt-6 border-t border-[#DDE2E8] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {cs.servicesGiven.map((srv, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 rounded-lg bg-[#EEF3FB] text-[#446CB5] text-xs font-semibold">
                    {srv}
                  </span>
                ))}
              </div>
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#446CB5] hover:text-[#345999] transition-colors"
              >
                <span>{isEn ? "Request Similar Growth Plan" : "Benzer Strateji İçin Görüşelim"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn ? "Want your clinic to be our next success story?" : "Kliniğinizi bir sonraki başarı hikayemiz yapalım"}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn ? "We analyze your specialty and prepare a custom acquisition roadmap with realistic benchmarks." : "Branşınızı ve hedef pazarınızı analiz ederek gerçekçi benchmark metrikleriyle büyüme yol haritanızı çıkaralım."}
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 inline-flex items-center gap-2"
          >
            <span>{isEn ? "Start Clinic Assessment" : "Klinik Analizini Başlat"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
