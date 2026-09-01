import React from 'react';
import { 
  Building2, 
  CheckCircle2, 
  ShieldCheck, 
  Users, 
  Award, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hakkimizda" className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
              <HeartHandshake className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>Overseas Marketing Yaklaşımı</span>
            </div>

            <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight leading-tight">
              Sağlık turizminde pazarlama ve teknolojiyi <span className="text-[#446CB5]">birlikte düşünüyoruz</span>
            </h2>

            <p className="text-base text-[#595F69] leading-relaxed">
              Overseas Marketing, sağlık turizminde kurumların uluslararası büyüme hedefleri için pazarlama ve teknoloji çalışmalarını bir araya getirir. Performans pazarlama, SEO, GEO, web sitesi, özel CRM ve otomasyon hizmetlerini kurumun gerçek ihtiyaçları üzerinden planlarız.
            </p>

            <div className="p-4 rounded-2xl bg-[#EEF3FB] border border-[#446CB5]/20 font-['Inter_Tight'] text-base font-bold text-[#446CB5]">
              “Karşınızda değil, yanınızda oturuyoruz.”
            </div>
          </div>

          {/* Right Visual / Principles Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#DDE2E8] space-y-4 shadow-sm">
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
                Temel Çalışma İlkelerimiz
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-[#595F69]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span><strong>Açık Kapsam:</strong> Hangi işin neden yapıldığını, neyin ölçülebildiğini baştan netleştiririz.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span><strong>Görünür Sorumluluk:</strong> Kampanya ve CRM çıktılarını şeffaf raporlarla paylaşırız.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span><strong>Mevzuat Hassasiyeti:</strong> 2025/2026 Sağlık Bakanlığı tanıtım yönetmeliğine (K8) %100 sadakat.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span><strong>Sıfır Lisans Bağımlılığı:</strong> Geliştirilen CRM ve web arayüzleri kliniğinizin mülkiyetindedir.</span>
                </li>
              </ul>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Ekibimizle Tanışın</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
