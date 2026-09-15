import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-[#F1F5F9] border border-[#DDE2E8] shadow-xs ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
          language === 'tr'
            ? 'bg-white text-[#446CB5] shadow-sm border border-[#DDE2E8]/60 scale-100'
            : 'text-[#595F69] hover:text-[#222222] hover:bg-white/50'
        }`}
        title="Türkçe"
        aria-pressed={language === 'tr'}
      >
        <span className="text-sm">🇹🇷</span>
        <span>TR</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
          language === 'en'
            ? 'bg-white text-[#446CB5] shadow-sm border border-[#DDE2E8]/60 scale-100'
            : 'text-[#595F69] hover:text-[#222222] hover:bg-white/50'
        }`}
        title="English"
        aria-pressed={language === 'en'}
      >
        <span className="text-sm">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
