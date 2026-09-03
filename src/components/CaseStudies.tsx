import React, { useState } from 'react';
import { 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  Globe2, 
  ShieldCheck,
  Building2
} from 'lucide-react';
import { CASE_STUDIES, CaseStudyItem } from '../data/masterPlanData';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [filter, setFilter] = useState<string>('Tümü');

  const filteredCases = filter === 'Tümü'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.clinicType === filter);

  return (
    <section id="vaka-calismalari" className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
              <Award className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>Doğrulanmış Proje Sonuçları</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
              Her projenin arkasında <span className="text-[#446CB5]">farklı bir başarı</span> hikâyesi var
            </h2>
            <p className="text-sm sm:text-base text-[#595F69]">
              Sonuçları yalnızca bağlamı, hedef pazarı ve ölçüm yöntemiyle birlikte şeffafça sunuyoruz.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {['Tümü', 'Diş Kliniği', 'Estetik Cerrahi'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === tab
                    ? 'bg-[#446CB5] text-white shadow-md shadow-[#446CB5]/20'
                    : 'bg-[#F8FAFC] text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl bg-[#F8FAFC] border border-[#DDE2E8] hover:border-[#446CB5] transition-all duration-300 overflow-hidden shadow-xs hover:shadow-xl flex flex-col justify-between text-left group"
            >
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={cs.image} 
                  alt={cs.title} 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16202E]/90 via-transparent to-transparent pointer-events-none" />
                
                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-xs font-bold text-[#222222]">
                    {cs.clinicType}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-[#16202E]/80 backdrop-blur-sm text-xs font-semibold text-white flex items-center gap-1">
                    <Globe2 className="w-3 h-3 text-[#60A5FA]" />
                    {cs.country}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-white text-xs flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Dönem: {cs.period}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222] group-hover:text-[#446CB5] transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-[#595F69] leading-relaxed">
                    {cs.approach}
                  </p>

                  {/* Services badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.servicesGiven.map((s, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-[#EEF3FB] text-[#446CB5] text-[11px] font-semibold">
                        {s}
                      </span>
                    ))}
                  </div>

                  {/* 2026 Academic Information Gain 4-Pillar Grid */}
                  {(cs.problemStatement || cs.intervention) && (
                    <div className="pt-3 space-y-2 text-[11px] bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                      {cs.problemStatement && (
                        <div>
                          <span className="font-bold text-rose-700">Başlangıç Sorunu: </span>
                          <span className="text-slate-600">{cs.problemStatement}</span>
                        </div>
                      )}
                      {cs.intervention && (
                        <div>
                          <span className="font-bold text-[#446CB5]">Uygulanan Müdahale: </span>
                          <span className="text-slate-600">{cs.intervention}</span>
                        </div>
                      )}
                      {cs.limitations && (
                        <div>
                          <span className="font-bold text-amber-700">Sektörel Kısıt &amp; Öğrenim: </span>
                          <span className="text-slate-600">{cs.limitations}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Metrics 3-Column Box */}
                <div className="pt-4 border-t border-[#DDE2E8]">
                  <div className="grid grid-cols-3 gap-2 bg-white p-3.5 rounded-2xl border border-[#DDE2E8]">
                    {cs.metrics.map((m, idx) => (
                      <div key={idx} className="text-center space-y-0.5">
                        <div className="font-['Inter_Tight'] text-lg sm:text-xl font-extrabold text-[#446CB5]">
                          {m.value}
                        </div>
                        <div className="text-[10px] font-bold text-[#222222] line-clamp-1">
                          {m.label}
                        </div>
                        <div className="text-[9px] text-[#595F69]">
                          {m.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={onOpenConsultation}
                    className="mt-4 w-full py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <span>Benzer Bir Çalışmayı Konuşalım</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Verification note */}
        <div className="mt-10 p-4 rounded-2xl bg-[#EEF3FB] border border-[#446CB5]/20 flex items-center gap-3 text-xs text-[#595F69] text-left">
          <ShieldCheck className="w-5 h-5 text-[#446CB5] shrink-0" />
          <span>
            <strong>Şartname Güvencesi:</strong> Tüm vaka verileri yalnızca paylaşım izni bulunan kurumlardan alınmıştır. Kişisel sağlık verileri ve gizli ticari sırlar anonimleştirilerek korunmaktadır.
          </span>
        </div>

      </div>
    </section>
  );
};
