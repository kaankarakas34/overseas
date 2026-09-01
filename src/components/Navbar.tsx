import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown,
  TrendingUp,
  Search,
  Cpu,
  Layout,
  Database,
  Bot,
  Share2,
  Video,
  ShieldCheck,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { MASTER_SERVICES } from '../data/masterPlanData';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateService: (serviceId: string) => void;
  onNavigateAbout: () => void;
  onNavigateBlog: () => void;
  onNavigateCases: () => void;
  onNavigateContact: () => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome,
  onNavigateService,
  onNavigateAbout,
  onNavigateBlog,
  onNavigateCases,
  onNavigateContact,
  onOpenConsultation 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className="w-4 h-4 text-[#446CB5]" />;
      case 'Search': return <Search className="w-4 h-4 text-[#446CB5]" />;
      case 'Cpu': return <Cpu className="w-4 h-4 text-[#446CB5]" />;
      case 'Layout': return <Layout className="w-4 h-4 text-[#446CB5]" />;
      case 'Database': return <Database className="w-4 h-4 text-[#446CB5]" />;
      case 'Bot': return <Bot className="w-4 h-4 text-[#446CB5]" />;
      case 'Share2': return <Share2 className="w-4 h-4 text-[#446CB5]" />;
      case 'Video': return <Video className="w-4 h-4 text-[#446CB5]" />;
      default: return <ShieldCheck className="w-4 h-4 text-[#446CB5]" />;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#DDE2E8] py-3.5' 
        : 'bg-white/90 backdrop-blur-sm border-b border-[#DDE2E8]/60 py-4.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo - Official Black Logo */}
          <button 
            onClick={onNavigateHome} 
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img 
              src="/logo2/siyah.png" 
              alt="Overseas Marketing" 
              className="h-5 sm:h-6 w-auto max-w-[150px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Clean Desktop Navigation according to Master Plan */}
          <nav className="hidden lg:flex items-center gap-8">
            
            {/* Mega Menu: Hizmetler */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors py-2 cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Hizmetler</span>
                <ChevronDown className={`w-4 h-4 text-[#595F69] transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#446CB5]' : ''}`} />
              </button>

              {/* Rich Visual Mega Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-28 w-[920px] bg-white rounded-3xl shadow-2xl border border-[#DDE2E8] p-7 grid grid-cols-12 gap-6 animate-in fade-in zoom-in-95 duration-200">
                  
                  {/* Left: 8 Services in 2 columns (8 cols) */}
                  <div className="col-span-8 space-y-4">
                    <div className="flex items-center justify-between pb-2.5 border-b border-[#DDE2E8]">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                        8 Temel Büyüme Hizmeti
                      </span>
                      <span className="text-[11px] text-[#595F69]">
                        Tıklayarak hizmet sayfasını inceleyin
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      {MASTER_SERVICES.map((svc) => (
                        <button
                          key={svc.id}
                          onClick={() => {
                            onNavigateService(svc.id);
                            setServicesDropdownOpen(false);
                          }}
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#EEF3FB] transition-all text-left group/item cursor-pointer border border-transparent hover:border-[#446CB5]/20"
                        >
                          <div className="p-2 rounded-xl bg-[#F5F6F8] group-hover/item:bg-white border border-[#DDE2E8]/60 shrink-0">
                            {getServiceIcon(svc.iconName)}
                          </div>
                          <div>
                            <div className="font-['Inter_Tight'] text-xs font-bold text-[#222222] group-hover/item:text-[#446CB5] transition-colors">
                              {svc.title}
                            </div>
                            <p className="text-[11px] text-[#595F69] line-clamp-1 mt-0.5">
                              {svc.shortDesc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right: Visual Featured Card (4 cols) */}
                  <div className="col-span-4 rounded-2xl bg-gradient-to-br from-[#16202E] to-[#1E293B] text-white p-5 flex flex-col justify-between overflow-hidden relative border border-slate-700">
                    <img 
                      src="/images/hero_health_tech.jpg" 
                      alt="Overseas Marketing" 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
                    />
                    <div className="relative z-10 space-y-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#446CB5]/40 text-[#60A5FA] text-[10px] font-bold uppercase">
                        <Sparkles className="w-3 h-3 text-[#60A5FA]" />
                        <span>Entegre Model</span>
                      </div>
                      <div className="font-['Inter_Tight'] font-bold text-base text-white leading-snug">
                        Pazarlama + CRM + Yapay Zeka
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        Kopuk teslimatlar yerine kliniğinize özel uçtan uca hasta edinme sistemi kuruyoruz.
                      </p>
                    </div>

                    <div className="relative z-10 pt-4">
                      <button
                        onClick={() => {
                          setServicesDropdownOpen(false);
                          onOpenConsultation();
                        }}
                        className="w-full py-2.5 px-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer"
                      >
                        <span>Görüşme Planla</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            {/* Referanslar */}
            <button 
              onClick={onNavigateCases} 
              className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors cursor-pointer"
            >
              Referanslar
            </button>

            {/* Rehber / Blog */}
            <button 
              onClick={onNavigateBlog} 
              className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors cursor-pointer"
            >
              Rehber & Blog
            </button>

            {/* Hakkımızda */}
            <button 
              onClick={onNavigateAbout} 
              className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors cursor-pointer"
            >
              Hakkımızda
            </button>

            {/* İletişim */}
            <button 
              onClick={onNavigateContact} 
              className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors cursor-pointer"
            >
              İletişim
            </button>

          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:05363197697" 
              className="flex items-center gap-2 text-xs font-semibold text-[#222222] hover:text-[#446CB5] transition-colors px-3 py-2 rounded-xl bg-[#F5F6F8] hover:bg-[#EEF3FB]"
              title="Doğrudan İletişim Hattı"
            >
              <Phone className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>0536 319 76 97</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md shadow-[#446CB5]/25 hover:shadow-lg hover:shadow-[#446CB5]/35 transition-all duration-200 group cursor-pointer"
            >
              <span>Büyüme Görüşmesi Planla</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-white" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenConsultation}
              className="px-3 py-1.5 rounded-lg bg-[#446CB5] text-white text-xs font-semibold"
            >
              Görüşme Planla
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#222222] hover:bg-[#F5F6F8] transition-colors"
              aria-label="Menüyü Aç"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#222222]" />
              ) : (
                <Menu className="w-6 h-6 text-[#222222]" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DDE2E8] px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200 text-left">
          
          <div className="font-semibold text-xs text-[#446CB5] uppercase tracking-wider">Hizmetlerimiz (8 Sayfa)</div>
          <div className="grid grid-cols-1 gap-1.5 pl-2">
            {MASTER_SERVICES.map((s) => (
              <button
                key={s.id}
                onClick={() => {
                  onNavigateService(s.id);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2.5 text-xs text-[#222222] hover:text-[#446CB5] py-1 text-left font-semibold"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></div>
                <span>{s.title}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#DDE2E8] space-y-2.5">
            <button 
              onClick={() => { onNavigateCases(); setMobileMenuOpen(false); }}
              className="block w-full text-left text-xs font-semibold text-[#222222]"
            >
              Referanslar
            </button>
            <button 
              onClick={() => { onNavigateBlog(); setMobileMenuOpen(false); }}
              className="block w-full text-left text-xs font-semibold text-[#222222]"
            >
              Rehber & Blog
            </button>
            <button 
              onClick={() => { onNavigateAbout(); setMobileMenuOpen(false); }}
              className="block w-full text-left text-xs font-semibold text-[#222222]"
            >
              Hakkımızda
            </button>
            <button 
              onClick={() => { onNavigateContact(); setMobileMenuOpen(false); }}
              className="block w-full text-left text-xs font-semibold text-[#222222]"
            >
              İletişim
            </button>
          </div>

          <div className="pt-4 border-t border-[#DDE2E8]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-xl bg-[#446CB5] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#446CB5]/20"
            >
              <span>Büyüme Görüşmesi Planla</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
