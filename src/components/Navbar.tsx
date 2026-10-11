import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, Phone, X } from 'lucide-react';
import navigation from '../data/headerNavigation.json';
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
type Group = typeof navigation[number];
function track(event: string, fields: Record<string, string>) {
  try { (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', event, fields); }
  catch { /* Analytics must not interrupt navigation. */ }
}
function NavigationGroup({ group, language, mobile, onSelect }: {
  group: Group; language: 'tr' | 'en'; mobile: boolean;
  onSelect: (group: string, url: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const id = `${mobile ? 'mobile' : 'desktop'}-${group.id}`;
  return <div className={mobile ? 'relative border-b border-slate-100 py-2' : 'relative flex items-center gap-1'}>
    <Link to={group.url} onClick={() => onSelect(group.id, group.url)} className="text-sm font-semibold text-[#222222] hover:text-[#446CB5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#446CB5]">{group.label[language]}</Link>
    <details className={mobile ? 'group' : 'group absolute right-[-22px] top-0'} onToggle={e => {
      const details = e.currentTarget; setExpanded(details.open);
      if (details.open) details.closest('nav')?.querySelectorAll('details').forEach(other => { if (other !== details) other.open = false; });
    }}>
      <summary aria-label={`${group.label[language]} ${language === 'en' ? 'submenu' : 'alt menüsü'}`} aria-expanded={expanded} aria-controls={`${id}-panel`} className={`${mobile ? 'absolute right-0 top-0' : ''} list-none cursor-pointer rounded-lg p-1.5 text-[#446CB5] hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#446CB5] [&::-webkit-details-marker]:hidden`}>
        <ChevronDown aria-hidden="true" className="h-4 w-4 group-open:rotate-180 transition-transform" />
      </summary>
      <div id={`${id}-panel`} className={mobile ? 'grid gap-1 pt-3 pl-3' : `absolute top-10 ${group.id === 'about' ? 'right-0' : 'left-0'} ${group.id === 'services' ? 'w-[580px] grid grid-cols-2' : 'w-72 grid'} max-h-[70vh] overflow-y-auto gap-1 rounded-2xl border border-[#DDE2E8] bg-white p-3 shadow-xl`}>
        {group.links.map(item => <Link key={item.url} to={item.url} onClick={() => onSelect(group.id, item.url)} className={`rounded-lg p-3 text-sm text-[#222222] hover:bg-[#EEF3FB] hover:text-[#446CB5] focus-visible:outline-2 focus-visible:outline-[#446CB5] ${item.url === group.url ? 'font-bold' : ''}`}>{item.label[language]}</Link>)}
      </div>
    </details>
  </div>;
}
export const Navbar: React.FC<NavbarProps> = ({ onNavigateHome, onOpenConsultation }) => {
  const { language, isEn } = useLanguage(); const location = useLocation();
  const header = useRef<HTMLElement>(null); const toggle = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false); const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenus = () => header.current?.querySelectorAll('details').forEach(d => { d.open = false; });
  useEffect(() => {
    const scroll = () => setIsScrolled(window.scrollY > 15); scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    const dismiss = (event: Event) => { if (!header.current?.contains(event.target as Node)) { closeMenus(); setMobileOpen(false); } };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      const opened = header.current?.querySelector<HTMLDetailsElement>('details[open]');
      if (opened) { opened.open = false; opened.querySelector<HTMLElement>('summary')?.focus(); }
      else if (header.current?.contains(document.activeElement)) { setMobileOpen(false); toggle.current?.focus(); }
    };
    const breakpoint = window.matchMedia('(min-width: 1280px)');
    const resize = () => { closeMenus(); setMobileOpen(false); };
    document.addEventListener('pointerdown', dismiss); document.addEventListener('keydown', escape); document.addEventListener('focusin', dismiss); breakpoint.addEventListener('change', resize);
    return () => { window.removeEventListener('scroll', scroll); document.removeEventListener('pointerdown', dismiss); document.removeEventListener('keydown', escape); document.removeEventListener('focusin', dismiss); breakpoint.removeEventListener('change', resize); };
  }, []);
  useEffect(() => { closeMenus(); setMobileOpen(false); }, [location.pathname, location.search, language]);
  const select = (group: string, url: string) => { track('header_navigation_select', { navigation_group: group, target_path: url, language }); closeMenus(); setMobileOpen(false); };
  const openAnalysis = () => { closeMenus(); setMobileOpen(false); track('growth_analysis_open', { source: 'header', page_path: location.pathname, language }); onOpenConsultation(); };
  const analysis = isEn ? 'Get a Growth Analysis' : 'Büyüme Analizi Al';
  return <header ref={header} className={`fixed top-0 left-0 right-0 z-40 border-b border-[#DDE2E8] py-4 transition-shadow bg-white/95 backdrop-blur-md ${isScrolled ? 'shadow-sm' : ''}`}>
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-8">
      <div className="flex items-center justify-between gap-4">
        <Link to="/" onClick={onNavigateHome} aria-label="Overseas Marketing" className="shrink-0 focus-visible:outline-2 focus-visible:outline-[#446CB5]"><img src="/logo2/siyah.png" alt="Overseas Marketing" className="h-5 sm:h-6 w-auto max-w-[145px] sm:max-w-[160px]" /></Link>
        <nav aria-label={isEn ? 'Main navigation' : 'Ana navigasyon'} className="hidden xl:flex items-center gap-7">{navigation.map(group => <NavigationGroup key={group.id} group={group} language={language} mobile={false} onSelect={select} />)}</nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <button onClick={openAnalysis} className="hidden sm:inline-flex rounded-xl bg-[#446CB5] hover:bg-[#35558F] px-4 py-2.5 text-xs font-semibold text-white items-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#446CB5]">{analysis}<ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          <button ref={toggle} onClick={() => { closeMenus(); setMobileOpen(open => !open); }} aria-label={isEn ? (mobileOpen ? 'Close navigation' : 'Open navigation') : (mobileOpen ? 'Menüyü Kapat' : 'Menüyü Aç')} aria-expanded={mobileOpen} aria-controls="mobile-navigation" className="xl:hidden p-2 rounded-lg hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#446CB5]">{mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}</button>
        </div>
      </div>
      {mobileOpen && <nav id="mobile-navigation" aria-label={isEn ? 'Mobile navigation' : 'Mobil navigasyon'} className="xl:hidden mt-4 max-h-[calc(100dvh-100px)] overflow-y-auto space-y-2 pb-3">
        {navigation.map(group => <NavigationGroup key={group.id} group={group} language={language} mobile onSelect={select} />)}
        <a href="tel:05363197697" className="flex items-center gap-2 py-3 text-sm text-[#446CB5]"><Phone className="h-4 w-4" aria-hidden="true" />0536 319 76 97</a>
        <button onClick={openAnalysis} className="w-full rounded-xl bg-[#446CB5] text-white py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#446CB5]">{analysis}</button>
      </nav>}
    </div>
  </header>;
};
