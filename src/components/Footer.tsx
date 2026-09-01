import React from 'react';
import { 
  ArrowUp, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Globe2, 
  CheckCircle2, 
  Lock,
  Award
} from 'lucide-react';
import { MASTER_SERVICES } from '../data/masterPlanData';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectService, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16202E] text-white pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Positioning (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Official Crisp White Logo for Dark Footer */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo2/siyah.png" 
                alt="Overseas Marketing" 
                className="h-5 sm:h-6 w-auto max-w-[150px] sm:max-w-[170px] object-contain brightness-0 invert"
              />
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Sağlık turizminde görünürlükten hasta iletişimine, büyümenin her adımını birlikte tasarlıyoruz. Karşınızda değil, yanınızda oturuyoruz.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                <span>2026 Mevzuat Uyumlu</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#60A5FA]" />
                <span>KVKK/GDPR Uyumlu</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services Menu (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA]">
              8 Temel Hizmetimiz
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {MASTER_SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s.id)}
                  className="text-slate-300 hover:text-white text-left transition-colors py-0.5 flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="w-1 h-1 rounded-full bg-[#446CB5]"></span>
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Contact & Consultation (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA]">
              İletişim & Randevu
            </div>
            
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href="tel:05363197697" className="hover:text-white transition-colors">0536 319 76 97</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <a href="mailto:info@overseas.marketing" className="hover:text-white transition-colors">info@overseas.marketing</a>
              </div>
              <div className="flex items-start gap-2.5">
                <Globe2 className="w-4 h-4 text-[#60A5FA] shrink-0 mt-0.5" />
                <span>İstanbul, Türkiye · Londra, İngiltere İletişim Temsilcilikleri</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
            >
              Büyüme Görüşmesi Planla
            </button>
          </div>

        </div>

        {/* Master Plan Disclaimer & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          
          <div className="space-y-1">
            <div>
              © 2026 Overseas Marketing. Tüm hakları saklıdır. Sağlık Turizmi Web Sitesi Master Planı V2.0.
            </div>
            <div className="text-[11px] text-slate-500 max-w-2xl">
              Yasal Uyarı: Bu web sitesi sağlık kuruluşlarına yönelik dijital pazarlama, CRM ve yapay zekâ ajans hizmetleri sunar. Kişiye özel tıbbi teşhis, tedavi veya klinik taahhüt içermez.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer shrink-0"
            title="Yukarı Çık"
          >
            <span>Başa Dön</span>
            <ArrowUp className="w-4 h-4 text-white" />
          </button>

        </div>

      </div>
    </footer>
  );
};
