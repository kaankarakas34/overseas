import React from 'react';
import { 
  CheckCircle2, 
  ArrowRight,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutSectionProps {
  onOpenConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  return (
    <section id="hakkimizda" className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
              <HeartHandshake className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>{isEn ? 'The Overseas Marketing Approach' : 'Overseas Marketing Yaklaşımı'}</span>
            </div>

            <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight leading-tight">
              {isEn ? (
                <>We think marketing and technology <span className="text-[#446CB5]">as one discipline</span></>
              ) : (
                <>Sağlık turizminde pazarlama ve teknolojiyi <span className="text-[#446CB5]">birlikte düşünüyoruz</span></>
              )}
            </h2>

            <p className="text-base text-[#595F69] leading-relaxed">
              {isEn
                ? 'Overseas Marketing bridges performance marketing and health technology to achieve healthcare providers’ international growth objectives. We architect Google Ads, SEO, GEO, high-converting medical websites, custom CRM, and AI automations rooted strictly in the real operational needs of healthcare institutions.'
                : 'Overseas Marketing, sağlık turizminde kurumların uluslararası büyüme hedefleri için pazarlama ve teknoloji çalışmalarını bir araya getirir. Performans pazarlama, SEO, GEO, web sitesi, özel CRM ve otomasyon hizmetlerini kurumun gerçek ihtiyaçları üzerinden planlarız.'}
            </p>

            <div className="p-4 rounded-2xl bg-[#EEF3FB] border border-[#446CB5]/20 font-['Inter_Tight'] text-base font-bold text-[#446CB5]">
              {isEn ? '“We sit beside you as growth partners, not across from you.”' : '“Karşınızda değil, yanınızda oturuyoruz.”'}
            </div>
          </div>

          {/* Right Visual / Principles Box */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-[#F8FAFC] border border-[#DDE2E8] space-y-4 shadow-sm">
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
                {isEn ? 'Our Operating Principles' : 'Temel Çalışma İlkelerimiz'}
              </h3>

              <ul className="space-y-3 text-xs sm:text-sm text-[#595F69]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span>
                    <strong>{isEn ? 'Transparent Scope: ' : 'Açık Kapsam: '}</strong>
                    {isEn ? 'Clear deliverables, transparent metrics, and no vague vanity promises.' : 'Hangi işin neden yapıldığını, neyin ölçülebildiğini baştan netleştiririz.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span>
                    <strong>{isEn ? 'Visible Accountability: ' : 'Görünür Sorumluluk: '}</strong>
                    {isEn ? 'Transparent reporting for every ad dollar spent and every patient status in CRM.' : 'Kampanya ve CRM çıktılarını şeffaf raporlarla paylaşırız.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span>
                    <strong>{isEn ? 'Regulatory Rigor: ' : 'Mevzuat Hassasiyeti: '}</strong>
                    {isEn ? '100% adherence to international health advertisement directives and ethical medical codes.' : 'Sağlık Hizmetlerinde Tanıtım ve Bilgilendirme Yönetmeliği ile uluslararası mevzuata %100 uyum.'}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span>
                    <strong>{isEn ? 'Asset Ownership: ' : 'Sıfır Lisans Bağımlılığı: '}</strong>
                    {isEn ? 'All landing pages, web assets, and CRM pipelines belong 100% to your clinic.' : 'Geliştirilen CRM ve web arayüzleri kliniğinizin mülkiyetindedir.'}
                  </span>
                </li>
              </ul>

              <button
                onClick={onOpenConsultation}
                className="w-full py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <span>{isEn ? 'Meet Our Strategists' : 'Ekibimizle Tanışın'}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
