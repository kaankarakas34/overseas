import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isEn: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'overseas_language';

const defaultContext: LanguageContextType = {
  language: 'tr',
  setLanguage: () => {},
  isEn: false,
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang')?.toLowerCase();
        if (urlLang === 'en' || urlLang === 'tr') {
          return urlLang as Language;
        }
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'en' || saved === 'tr') {
          return saved as Language;
        }
      }
    } catch {
      // Storage access may be restricted
    }
    return 'tr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang;
      }
    } catch {
      // Storage write may be restricted
    }
  };

  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        document.documentElement.lang = language;
      }
    } catch {
      // Fallback
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isEn: language === 'en' }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  return context || defaultContext;
};
