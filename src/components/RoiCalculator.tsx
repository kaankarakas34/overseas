import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Users, 
  PhoneCall, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenConsultation: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenConsultation }) => {
  const [treatment, setTreatment] = useState<'dental' | 'hair' | 'plastic' | 'bariatric'>('dental');
  const [market, setMarket] = useState<'uk' | 'dach' | 'gulf'>('uk');
  const [budget, setBudget] = useState<number>(6000);

  const DATA_MATRIX = {
    dental: {
      name: 'Diş Tedavileri (İmplant & Gülüş)',
      avgTicket: { uk: 4500, dach: 4200, gulf: 5500 }, // in EUR equivalent
      cpa: { uk: 38, dach: 42, gulf: 50 },
      convRate: 0.12 // Lead to patient
    },
    hair: {
      name: 'Saç Ekimi (DHI & FUE)',
      avgTicket: { uk: 2800, dach: 2900, gulf: 3200 },
      cpa: { uk: 28, dach: 32, gulf: 40 },
      convRate: 0.15
    },
    plastic: {
      name: 'Estetik Cerrahi (Rinoplasti, Liposuction)',
      avgTicket: { uk: 5200, dach: 5400, gulf: 6800 },
      cpa: { uk: 55, dach: 60, gulf: 75 },
      convRate: 0.09
    },
    bariatric: {
      name: 'Obezite & Mide Küçültme',
      avgTicket: { uk: 4200, dach: 4400, gulf: 5200 },
      cpa: { uk: 45, dach: 48, gulf: 60 },
      convRate: 0.11
    }
  };

  const selectedData = DATA_MATRIX[treatment];
  const cpa = selectedData.cpa[market];
  const ticket = selectedData.avgTicket[market];
  const convRate = selectedData.convRate;

  // Calculations
  const estLeads = Math.round(budget / cpa);
  const estConsultations = Math.round(estLeads * 0.55);
  const estPatients = Math.max(1, Math.round(estLeads * convRate));
  const estRevenue = estPatients * ticket;
  const roas = (estRevenue / budget).toFixed(1);

  return (
    <section id="hesaplayici" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <Calculator className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>İnteraktif Büyüme & Getiri Simülatörü</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Sağlık Turizmi <span className="text-[#446CB5]">Bütçe & Talep Projeksiyonu</span>
          </h2>

          <p className="text-base text-[#595F69]">
            Kliniğinizin uzmanlık alanı, hedef pazar ve aylık reklam bütçesine göre tahmini nitelikli talep hacmini hesaplayın.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-[#DDE2E8] shadow-xl overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Inputs (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-7 border-b lg:border-b-0 lg:border-r border-[#DDE2E8]">
              
              {/* 1. Branch selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#222222] block">
                  1. Klinik Uzmanlık Branşınızı Seçin:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(['dental', 'hair', 'plastic', 'bariatric'] as const).map(t => (
                    <button
                      key={t}
                      onClick={() => setTreatment(t)}
                      className={`p-3 rounded-xl text-xs font-semibold text-left transition-all cursor-pointer ${
                        treatment === t
                          ? 'bg-[#EEF3FB] text-[#446CB5] border-2 border-[#446CB5] shadow-xs'
                          : 'bg-[#F8FAFC] text-[#222222] border border-[#DDE2E8] hover:bg-white'
                      }`}
                    >
                      {DATA_MATRIX[t].name}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Target Market selection */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#222222] block">
                  2. Ana Hedef Pazarınızı Seçin:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setMarket('uk')}
                    className={`p-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                      market === 'uk'
                        ? 'bg-[#EEF3FB] text-[#446CB5] border-2 border-[#446CB5]'
                        : 'bg-[#F8FAFC] text-[#222222] border border-[#DDE2E8] hover:bg-white'
                    }`}
                  >
                    🇬🇧 İngiltere & İrlanda
                  </button>
                  <button
                    onClick={() => setMarket('dach')}
                    className={`p-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                      market === 'dach'
                        ? 'bg-[#EEF3FB] text-[#446CB5] border-2 border-[#446CB5]'
                        : 'bg-[#F8FAFC] text-[#222222] border border-[#DDE2E8] hover:bg-white'
                    }`}
                  >
                    🇩🇪 Almanya & DACH
                  </button>
                  <button
                    onClick={() => setMarket('gulf')}
                    className={`p-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                      market === 'gulf'
                        ? 'bg-[#EEF3FB] text-[#446CB5] border-2 border-[#446CB5]'
                        : 'bg-[#F8FAFC] text-[#222222] border border-[#DDE2E8] hover:bg-white'
                    }`}
                  >
                    🇦🇪 Körfez & BAE
                  </button>
                </div>
              </div>

              {/* 3. Monthly Media Budget Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#222222]">
                    3. Aylık Medya Reklam Bütçesi:
                  </label>
                  <span className="font-['Inter_Tight'] text-lg font-extrabold text-[#446CB5] bg-[#EEF3FB] px-3 py-1 rounded-lg">
                    €{budget.toLocaleString()} / ay
                  </span>
                </div>

                <input
                  type="range"
                  min="2000"
                  max="25000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#446CB5]"
                />

                <div className="flex justify-between text-[10px] font-semibold text-[#595F69]">
                  <span>€2.000 (Test)</span>
                  <span>€10.000 (Ölçek)</span>
                  <span>€25.000 (Liderlik)</span>
                </div>
              </div>

            </div>

            {/* Right Projection Outputs (5 cols) */}
            <div className="lg:col-span-5 bg-[#16202E] text-white p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-3 mb-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                    Tahmini Çıktı Projeksiyonu
                  </span>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded font-mono">
                    Aylık
                  </span>
                </div>

                {/* Metrics Stack */}
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <Users className="w-4 h-4 text-[#60A5FA]" />
                      <span className="text-xs text-slate-300">Nitelikli Başvuru (Lead):</span>
                    </div>
                    <span className="font-['Inter_Tight'] text-base font-bold text-white">
                      ~{estLeads} talep
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <PhoneCall className="w-4 h-4 text-[#60A5FA]" />
                      <span className="text-xs text-slate-300">Doktor Ön Görüşmesi:</span>
                    </div>
                    <span className="font-['Inter_Tight'] text-base font-bold text-white">
                      ~{estConsultations} hasta
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs text-slate-300">Geliş / Tedavi Kaydı:</span>
                    </div>
                    <span className="font-['Inter_Tight'] text-base font-bold text-emerald-400">
                      ~{estPatients} hasta
                    </span>
                  </div>

                  {/* Estimated Revenue Box */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#446CB5]/40 to-[#35558F]/20 border border-[#446CB5]/60 text-center space-y-1">
                    <div className="text-[11px] text-[#60A5FA] uppercase font-semibold">
                      Tahmini Tedavi Hacmi
                    </div>
                    <div className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-white">
                      €{estRevenue.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-300">
                      Tahmini ROAS: <strong className="text-emerald-400">{roas}x</strong>
                    </div>
                  </div>

                </div>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-bold shadow-lg shadow-[#446CB5]/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Bu Planı Birlikte Başlatalım</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <p className="text-[10px] text-slate-400 text-center mt-3 leading-tight flex items-start gap-1 justify-center">
                  <ShieldAlert className="w-3 h-3 text-slate-400 shrink-0 mt-0.5" />
                  <span>Şartname notu: Hesaplamalar pazar hipotezidir; kesin hasta taahhüdü olarak yorumlanamaz.</span>
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
