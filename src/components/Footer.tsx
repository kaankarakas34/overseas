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
import { MASTER_SERVICES_EN, MASTER_BRANCHES_EN, MASTER_MARKETS_EN, MASTER_CITIES_EN } from '../i18n/masterPlanData.en';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface FooterProps {
  onSelectService?: (serviceId: string) => void;
  onNavigateDoctorBranding?: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenConsultation }) => {
  const { language, isEn } = useLanguage();
  const t = translations[language];

  const currentServices = isEn ? MASTER_SERVICES_EN : MASTER_SERVICES;
  const currentBranches = isEn ? MASTER_BRANCHES_EN : MASTER_BRANCHES;
  const currentMarkets = isEn ? MASTER_MARKETS_EN : MASTER_MARKETS;
  const currentCities = isEn ? MASTER_CITIES_EN : MASTER_CITIES;

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
              {t.footer.desc}
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                <span>{isEn ? '100% Medical Advertising Compliant' : '2026 Tanıtım Mevzuatı Uyumlu'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-[#60A5FA]" />
                <span>{isEn ? 'GDPR & HIPAA Aligned Data Standards' : 'KVKK & GDPR Standartlarında'}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md transition-all cursor-pointer text-center"
              >
                {t.hero.ctaPrimary}
              </button>
            </div>
          </div>

          {/* Col 2: Services Menu (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA]">
              {t.footer.colServices}
            </div>
            <ul className="space-y-1.5 text-xs">
              {currentServices.map((s) => (
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
                  <span>{t.nav.doctorBranding}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/doktor-reklam-ajansi"
                  className="text-[#60A5FA] font-semibold hover:text-white transition-colors py-0.5 flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#60A5FA]" />
                  <span>{isEn ? 'Doctor Advertising Agency' : 'Doktor Reklam Ajansı'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Branches (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider text-[#60A5FA]">
              {t.footer.colBranches}
            </div>
            <ul className="space-y-1.5 text-xs">
              {currentBranches.map((b) => (
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
                {isEn ? 'Target Markets & Hubs' : 'Hedef Pazarlar & Şehirler'}
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs mb-4">
                {currentMarkets.map((m) => {
                  const country = m.countryName || m.title || '';
                  const shortName = country.includes(' ') ? country.split(' ')[0] : country;
                  return (
                    <Link
                      key={m.slug}
                      to={`/${m.slug}`}
                      className="text-slate-300 hover:text-white transition-colors py-0.5 flex items-center gap-1"
                    >
                      <span className="text-xs">{m.flagEmoji || '🌐'}</span>
                      <span>{shortName}</span>
                    </Link>
                  );
                })}
                {currentCities.map((c) => (
                  <Link
                    key={c.slug}
                    to={`/${c.slug}`}
                    className="text-slate-300 hover:text-white transition-colors py-0.5 flex items-center gap-1"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                    <span>{c.cityName || c.title || ''}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <a href="tel:05363197697" className="hover:text-white transition-colors">+90 536 319 76 97</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#60A5FA] shrink-0" />
                <a href="mailto:info@overseas.marketing" className="hover:text-white transition-colors">info@overseas.marketing</a>
              </div>
              <div className="flex items-start gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#60A5FA] shrink-0 mt-0.5" />
                <span className="text-[11px] text-slate-400">Istanbul, Turkey · London, United Kingdom</span>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: SEO & Guides Hub Links */}
        <div className="py-6 border-b border-slate-800/80">
          <div className="font-['Inter_Tight'] text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3">
            {isEn ? 'Medical Tourism Knowledge & Regulatory Guides' : 'Sağlık Turizmi Mevzuat, Teşvik & Ajans Rehberi'}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link to="/saglik-turizmi-ajansi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Medical Tourism Agency' : 'Sağlık Turizmi Ajansı'}
            </Link>
            <Link to="/saglik-turizmi-reklam" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Medical Tourism Ads' : 'Sağlık Turizmi Reklamı'}
            </Link>
            <Link to="/saglik-turizmi-web-sitesi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Medical Tourism Website' : 'Sağlık Turizmi Web Sitesi'}
            </Link>
            <Link to="/saglik-turizmi/seo-geo-stratejisi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'SEO & GEO Strategy' : 'SEO & GEO Stratejisi'}
            </Link>
            <Link to="/saglik-turizmi-yetki-belgesi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Accreditation License Guide' : 'Yetki Belgesi Nedir?'}
            </Link>
            <Link to="/saglik-turizmi-yetki-belgesi/nasil-alinir" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'How to Obtain License' : 'Yetki Belgesi Nasıl Alınır?'}
            </Link>
            <Link to="/saglik-turizmi-yonetmeligi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Health Tourism Regulations' : 'Sağlık Turizmi Yönetmeliği'}
            </Link>
            <Link to="/saglik-turizmi-tesvikleri" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Government Subsidies' : 'Devlet Teşvikleri'}
            </Link>
            <Link to="/saglik-turizmi-tesvik-danismanligi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Subsidy Consulting' : 'Teşvik Danışmanlığı'}
            </Link>
            <Link to="/saglik-turizmi-acentesi-acmak" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Setting Up Facilitator Agency' : 'Acenta Açmak'}
            </Link>
            <Link to="/saglik-turizmi-fiyat-listesi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Pricing Benchmark Guide' : 'Fiyat Listesi Rehberi'}
            </Link>
            <Link to="/doktor-reklam-ajansi" className="text-[#60A5FA] hover:text-white transition-colors font-medium">
              {isEn ? 'Doctor Advertising Agency' : 'Doktor Reklam Ajansı'}
            </Link>
            <Link to="/doktor-reklam-yasagi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Doctor Advertising Ban' : 'Doktor Reklam Yasağı'}
            </Link>
            <Link to="/doktor-reklam-yonetmeligi" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'Doctor Regulation' : 'Doktor Reklam Yönetmeliği'}
            </Link>
            <Link to="/doktor-reklami-nasil-yapilir" className="text-slate-400 hover:text-white transition-colors">
              {isEn ? 'How to Market Doctors' : 'Doktor Reklamı Nasıl Yapılır?'}
            </Link>
          </div>
        </div>

        {/* Corporate & Legal Hub Mesh */}
        <div className="py-6 border-b border-slate-800/80">
          <div className="font-['Inter_Tight'] text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-3">
            {isEn ? 'Corporate, Methodology & Legal' : 'Kurumsal Mimarimiz, Metodoloji & Yasal'}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
            <Link to="/hakkimizda" className="text-slate-300 hover:text-white transition-colors">Hakkımızda</Link>
            <Link to="/yayin-ilkeleri" className="text-slate-300 hover:text-white transition-colors">Yayın İlkeleri</Link>
            <Link to="/ekip" className="text-slate-300 hover:text-white transition-colors">Ekibimiz</Link>
            <Link to="/ekip/kaan-karakas" className="text-slate-300 hover:text-white transition-colors">Kaan Karakaş</Link>
            <Link to="/referanslar" className="text-slate-300 hover:text-white transition-colors">Referanslar</Link>
            <Link to="/basari-hikayeleri" className="text-slate-300 hover:text-white transition-colors">Başarı Hikayeleri</Link>
            <Link to="/metodoloji" className="text-slate-300 hover:text-white transition-colors">Metodoloji</Link>
            <Link to="/sektorler" className="text-slate-300 hover:text-white transition-colors">Sektörler & Branşlar</Link>
            <Link to="/ulkeler" className="text-slate-300 hover:text-white transition-colors">Hedef Ülkeler</Link>
            <Link to="/blog" className="text-slate-300 hover:text-white transition-colors">Rehber & Blog</Link>
            <Link to="/sozluk" className="text-[#60A5FA] font-medium hover:text-white transition-colors">Sağlık Turizmi Sözlüğü</Link>
            <Link to="/yazarlar" className="text-slate-300 hover:text-white transition-colors">Yazarlar</Link>
            <Link to="/teklif-al" className="text-slate-300 hover:text-white transition-colors">Teklif Al</Link>
            <Link to="/iletisim" className="text-slate-300 hover:text-white transition-colors">İletişim</Link>
            <Link to="/kvkk" className="text-slate-400 hover:text-white transition-colors">KVKK</Link>
            <Link to="/gizlilik-politikasi" className="text-slate-400 hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link to="/cerez-politikasi" className="text-slate-400 hover:text-white transition-colors">Çerez Politikası</Link>
          </div>
        </div>

        {/* Disclaimer & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
          <div className="space-y-1">
            <div>
              © 2026 Overseas Marketing. {t.footer.rights}
            </div>
            <div className="text-[11px] text-slate-500 max-w-2xl">
              {t.footer.disclaimer}
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer shrink-0 text-xs"
            title={isEn ? "Back to top" : "Başa Dön"}
          >
            <span>{isEn ? 'Back to Top' : 'Başa Dön'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </button>
        </div>

      </div>
    </footer>
  );
};
