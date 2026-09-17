import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  CheckCircle2,
  Building2,
  Award,
  BookOpen,
  Compass
} from 'lucide-react';
import { MASTER_SERVICES } from '../data/masterPlanData';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

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
  const { isEn } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [whyDropdownOpen, setWhyDropdownOpen] = useState(false);

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
          <Link 
            to="/" 
            onClick={onNavigateHome}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <img 
              src="/logo2/siyah.png" 
              alt="Overseas Marketing" 
              className="h-5 sm:h-6 w-auto max-w-[150px] sm:max-w-[170px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

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
                        <Link
                          key={svc.id}
                          to={`/hizmetler/${svc.id}`}
                          onClick={() => setServicesDropdownOpen(false)}
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
                        </Link>
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

            {/* Mega Menu: Neden Overseas? / Why Overseas? */}
            <div 
              className="relative"
              onMouseEnter={() => { setWhyDropdownOpen(true); setServicesDropdownOpen(false); }}
              onMouseLeave={() => setWhyDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1.5 text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors py-2 cursor-pointer"
                onClick={() => setWhyDropdownOpen(!whyDropdownOpen)}
              >
                <span>{isEn ? 'Why Overseas?' : 'Neden Overseas?'}</span>
                <ChevronDown className={`w-4 h-4 text-[#595F69] transition-transform duration-200 ${whyDropdownOpen ? 'rotate-180 text-[#446CB5]' : ''}`} />
              </button>

              {/* Rich Visual Mega Menu */}
              {whyDropdownOpen && (
                <div className="absolute top-full -left-28 w-[840px] bg-white rounded-3xl shadow-2xl border border-[#DDE2E8] p-6 space-y-5 animate-in fade-in zoom-in-95 duration-200">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-[#DDE2E8]">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                        {isEn ? 'WHY OVERSEAS MARKETING?' : 'NEDEN OVERSEAS MARKETING?'}
                      </span>
                      <p className="text-xs text-[#595F69] mt-0.5">
                        {isEn 
                          ? 'Proven clinical growth, medical specialty depth, and integrated healthcare systems.' 
                          : 'Branş derinliği, 360° hasta edinme sistemi ve doğrulanmış klinik vaka sonuçları.'}
                      </p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#16202E] bg-[#EEF3FB] px-3 py-1 rounded-full border border-[#446CB5]/20">
                      {isEn ? '360° Growth Engine' : '360° Büyüme Ekosistemi'}
                    </span>
                  </div>

                  {/* 4 Core Pillars Grid */}
                  <div className="grid grid-cols-2 gap-3.5">
                    
                    {/* Sektörler */}
                    <Link
                      to="/sektorler"
                      onClick={() => setWhyDropdownOpen(false)}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB] transition-all text-left group/item border border-[#DDE2E8]/60 hover:border-[#446CB5]/30 hover:shadow-sm"
                    >
                      <div className="p-2.5 rounded-xl bg-white group-hover/item:bg-[#446CB5] text-[#446CB5] group-hover/item:text-white transition-colors border border-[#DDE2E8]/80 shrink-0">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="font-['Inter_Tight'] text-sm font-bold text-[#222222] group-hover/item:text-[#446CB5] transition-colors">
                            {isEn ? 'Sectors & Specialties' : 'Sektörler & Branşlar'}
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#446CB5] border border-[#446CB5]/20">
                            {isEn ? '12+ Fields' : '12+ Branş'}
                          </span>
                        </div>
                        <p className="text-xs text-[#595F69] mt-1 leading-relaxed">
                          {isEn 
                            ? 'Dental, hair transplant, aesthetic, obesity, IVF, and health agency growth models.' 
                            : 'Diş, estetik, saç ekimi, obezite, tüp bebek ve aracı kuruluş büyüme altyapıları.'}
                        </p>
                      </div>
                    </Link>

                    {/* Başarı Hikayeleri */}
                    <Link
                      to="/basari-hikayeleri"
                      onClick={() => setWhyDropdownOpen(false)}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB] transition-all text-left group/item border border-[#DDE2E8]/60 hover:border-[#446CB5]/30 hover:shadow-sm"
                    >
                      <div className="p-2.5 rounded-xl bg-white group-hover/item:bg-[#446CB5] text-[#446CB5] group-hover/item:text-white transition-colors border border-[#DDE2E8]/80 shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="font-['Inter_Tight'] text-sm font-bold text-[#222222] group-hover/item:text-[#446CB5] transition-colors">
                            {isEn ? 'Case Studies & Results' : 'Başarı Hikayeleri'}
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-emerald-600 border border-emerald-500/20">
                            {isEn ? 'Verified ROI' : 'Kanıtlanmış Ciro'}
                          </span>
                        </div>
                        <p className="text-xs text-[#595F69] mt-1 leading-relaxed">
                          {isEn 
                            ? 'Real clinic cases, lowered CPL, scaling international patient revenue.' 
                            : 'Düşen CPL maliyetleri, ölçeklenen yabancı hasta hacimleri ve somut vaka grafikleri.'}
                        </p>
                      </div>
                    </Link>

                    {/* Metodoloji */}
                    <Link
                      to="/metodoloji"
                      onClick={() => setWhyDropdownOpen(false)}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB] transition-all text-left group/item border border-[#DDE2E8]/60 hover:border-[#446CB5]/30 hover:shadow-sm"
                    >
                      <div className="p-2.5 rounded-xl bg-white group-hover/item:bg-[#446CB5] text-[#446CB5] group-hover/item:text-white transition-colors border border-[#DDE2E8]/80 shrink-0">
                        <Compass className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="font-['Inter_Tight'] text-sm font-bold text-[#222222] group-hover/item:text-[#446CB5] transition-colors">
                            {isEn ? 'Growth Methodology' : 'Büyüme Metodolojisi'}
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#446CB5] border border-[#446CB5]/20">
                            {isEn ? '360° Model' : '360° Model'}
                          </span>
                        </div>
                        <p className="text-xs text-[#595F69] mt-1 leading-relaxed">
                          {isEn 
                            ? 'Integrated Ads + CRM software + AI automation + multilingual sales pipeline.' 
                            : 'Performans pazarlama, özel CRM yazılımı, yapay zeka ve çok dilli satış mimarisi.'}
                        </p>
                      </div>
                    </Link>

                    {/* Blog & Rehber */}
                    <Link
                      to="/blog"
                      onClick={() => setWhyDropdownOpen(false)}
                      className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB] transition-all text-left group/item border border-[#DDE2E8]/60 hover:border-[#446CB5]/30 hover:shadow-sm"
                    >
                      <div className="p-2.5 rounded-xl bg-white group-hover/item:bg-[#446CB5] text-[#446CB5] group-hover/item:text-white transition-colors border border-[#DDE2E8]/80 shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div className="font-['Inter_Tight'] text-sm font-bold text-[#222222] group-hover/item:text-[#446CB5] transition-colors">
                            {isEn ? 'Guides & Knowledge Hub' : 'Rehber & Bilgi Merkezi'}
                          </div>
                          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white text-[#446CB5] border border-[#446CB5]/20">
                            {isEn ? 'Knowledge Hub' : 'Resmi Mevzuat'}
                          </span>
                        </div>
                        <p className="text-xs text-[#595F69] mt-1 leading-relaxed">
                          {isEn 
                            ? 'Incentives, healthcare tourism regulations, market intel, and country blueprints.' 
                            : 'Sağlık turizmi teşvikleri 2026, yetki belgesi şartları ve pazar analizleri.'}
                        </p>
                      </div>
                    </Link>

                  </div>

                  {/* Bottom Quick Hubs */}
                  <div className="pt-3 border-t border-[#DDE2E8] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4 text-[#595F69]">
                      <span className="font-semibold text-[#222222]">
                        {isEn ? 'Also Explore:' : 'Ayrıca Keşfedin:'}
                      </span>
                      <Link 
                        to="/ulkeler" 
                        onClick={() => setWhyDropdownOpen(false)}
                        className="hover:text-[#446CB5] transition-colors underline-offset-4 hover:underline"
                      >
                        {isEn ? 'Target Markets' : 'Hedef Ülkeler'}
                      </Link>
                      <span className="text-slate-300">•</span>
                      <Link 
                        to="/doktor-marka-yonetimi" 
                        onClick={() => setWhyDropdownOpen(false)}
                        className="hover:text-[#446CB5] transition-colors underline-offset-4 hover:underline"
                      >
                        {isEn ? 'Doctor Branding' : 'Doktor Marka Yönetimi'}
                      </Link>
                      <span className="text-slate-300">•</span>
                      <Link 
                        to="/ekibimiz" 
                        onClick={() => setWhyDropdownOpen(false)}
                        className="hover:text-[#446CB5] transition-colors underline-offset-4 hover:underline"
                      >
                        {isEn ? 'Team' : 'Ekibimiz'}
                      </Link>
                    </div>

                    <Link
                      to="/teklif-al"
                      onClick={() => setWhyDropdownOpen(false)}
                      className="inline-flex items-center gap-1 font-semibold text-[#446CB5] hover:text-[#35558F] transition-colors"
                    >
                      <span>{isEn ? 'Get Clinic Proposal' : 'Klinik Teklifi Al'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </div>
              )}
            </div>

            {/* Hakkımızda */}
            <Link 
              to="/hakkimizda" 
              className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors"
            >
              Hakkımızda
            </Link>

            {/* İletişim */}
            <Link 
              to="/iletisim" 
              className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] transition-colors"
            >
              İletişim
            </Link>

          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />

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
            <LanguageSwitcher />
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
              <Link
                key={s.id}
                to={`/hizmetler/${s.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 text-xs text-[#222222] hover:text-[#446CB5] py-1 text-left font-semibold"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></div>
                <span>{s.title}</span>
              </Link>
            ))}
          </div>

          {/* Neden Overseas? / Why Overseas? Sub-Group */}
          <div className="pt-3 border-t border-[#DDE2E8] space-y-2">
            <div className="font-semibold text-xs text-[#446CB5] uppercase tracking-wider">
              {isEn ? 'Why Overseas?' : 'Neden Overseas?'}
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2">
              <Link 
                to="/sektorler"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-[#222222] hover:text-[#446CB5] py-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></div>
                <span>{isEn ? 'Sectors & Specialties' : 'Sektörler & Branşlar'}</span>
              </Link>
              <Link 
                to="/basari-hikayeleri"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-[#222222] hover:text-[#446CB5] py-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></div>
                <span>{isEn ? 'Case Studies & Results' : 'Başarı Hikayeleri'}</span>
              </Link>
              <Link 
                to="/metodoloji"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-[#222222] hover:text-[#446CB5] py-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></div>
                <span>{isEn ? 'Growth Methodology' : 'Büyüme Metodolojisi'}</span>
              </Link>
              <Link 
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs font-semibold text-[#222222] hover:text-[#446CB5] py-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></div>
                <span>{isEn ? 'Guides & Blog' : 'Rehber & Bilgi Merkezi'}</span>
              </Link>
            </div>
          </div>

          <div className="pt-3 border-t border-[#DDE2E8] space-y-2.5">
            <Link 
              to="/hakkimizda"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-xs font-semibold text-[#222222] hover:text-[#446CB5]"
            >
              {isEn ? 'About Us' : 'Hakkımızda'}
            </Link>
            <Link 
              to="/ekibimiz"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-xs font-semibold text-[#222222] hover:text-[#446CB5]"
            >
              {isEn ? 'Team' : 'Ekibimiz'}
            </Link>
            <Link 
              to="/iletisim"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-left text-xs font-semibold text-[#222222] hover:text-[#446CB5]"
            >
              {isEn ? 'Contact' : 'İletişim'}
            </Link>
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
