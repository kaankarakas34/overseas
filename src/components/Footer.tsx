import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  ShieldCheck, 
  Phone, 
  Mail, 
  Globe2, 
  Lock,
  ChevronRight
} from 'lucide-react';
import { MASTER_SERVICES, MASTER_BRANCHES, MASTER_MARKETS, MASTER_CITIES } from '../data/masterPlanData';

interface FooterProps {
  onSelectService?: (serviceId: string) => void;
  onNavigateDoctorBranding?: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16202E] text-white pt-16 pb-12 border-t border-slate-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 4 Rich Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Positioning (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <Link to="/" onClick={scrollToTop} className="inline-block">
              <img 
                src="/logo2/siyah.png" 
                alt="Overseas Marketing" 
                loading="lazy"
                decoding="async"
                className="h-6 w-auto max-w-[170px] object-contain brightness-0 invert"
              />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed">
              Sağlık turizminde görünürlükten hasta iletişimine, büyümenin her adımını birlikte tasarlıyoruz. Karşınızda değil, yanınızda oturuyoruz.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                <span>2026 Tanıtım Mevzuatı Uyumlu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#60A5FA]" />
                <span>KVKK & GDPR Standartlarında</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md transition-all cursor-pointer text-center"
              >
                Büyüme Görüşmesi Planla
              </button>
            </div>
          </div>

          {/* Col 2: Services Menu (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA]">
              Hizmetlerimiz
            </div>
            <ul className="space-y-1.5 text-xs">
              {MASTER_SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/hizmetler/${s.id}`}
                    className="text-slate-300 hover:text-white transition-colors py-0.5 flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-[#446CB5]" />
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/doktor-marka-yonetimi"
                  className="text-[#60A5FA] font-semibold hover:text-white transition-colors py-0.5 flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>Doktor Marka Yönetimi</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA]">
              Uzmanlık Branşları
            </div>
            <ul className="space-y-1.5 text-xs">
              {MASTER_BRANCHES.map((b) => (
                <li key={b.slug}>
                  <Link
                    to={`/${b.slug}`}
                    className="text-slate-300 hover:text-white transition-colors py-0.5 flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#446CB5]"></span>
                    <span>{b.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Markets & Cities & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA] mb-2">
                Hedef Pazarlar & Şehirler
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs mb-4">
                {MASTER_MARKETS.map((m) => (
                  <Link
                    key={m.slug}
                    to={`/${m.slug}`}
                    className="text-slate-300 hover:text-white transition-colors py-0.5 flex items-center gap-1"
                  >
                    <span className="text-xs">{m.flagEmoji}</span>
                    <span>{m.countryName.split(' ')[0]}</span>
                  </Link>
                ))}
                {MASTER_CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${c.slug}`}
                    className="text-slate-300 hover:text-white transition-colors py-0.5 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>{c.cityName}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <a href="tel:05363197697" className="hover:text-white transition-colors">0536 319 76 97</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <a href="mailto:info@overseas.marketing" className="hover:text-white transition-colors">info@overseas.marketing</a>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#60A5FA] shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">İstanbul, Türkiye · Londra, İngiltere</span>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div className="space-y-1">
            <div>
              © 2026 Overseas Marketing. Tüm hakları saklıdır. Sağlık Turizmi Dijital Büyüme ve Performans Ajansı.
            </div>
            <div className="text-[11px] text-slate-500 max-w-2xl">
              Yasal Uyarı: Bu web sitesi sağlık kuruluşlarına yönelik dijital pazarlama, CRM ve yapay zekâ ajans hizmetleri sunar. Kişiye özel tıbbi teşhis, tedavi veya klinik taahhüt içermez.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer shrink-0 text-xs"
            title="Yukarı Çık"
          >
            <span>Başa Dön</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
};
