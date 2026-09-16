import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Activity, 
  Bot, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  TrendingUp, 
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  const { language, isEn } = useLanguage();
  const t = translations[language];

  return (
    <section className="relative pt-32 pb-16 lg:pt-38 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EEF3FB]/70 via-white to-[#F8FAFC]">
      
      {/* Background ambient lighting meshes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-br from-[#446CB5]/15 via-[#60A5FA]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-[#446CB5]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Top Verification Tag */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#DDE2E8] shadow-xs text-xs font-semibold text-[#222222]">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#446CB5] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#446CB5]"></span>
              </span>
              <span className="text-[#446CB5] font-bold">{t.hero.badgeTitle}</span>
              <span className="text-[#DDE2E8]">|</span>
              <span className="text-[#595F69] font-medium">{t.hero.badgeSubtitle}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-['Inter_Tight'] text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#222222] tracking-tight leading-[1.12]">
                {t.hero.h1Part1} <br />
                <span className="text-[#446CB5]">{t.hero.h1Highlight}</span> {t.hero.h1Part2}
              </h1>

              <p className="text-base sm:text-lg text-[#595F69] font-normal leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* Value Highlights Pill Row - Monochrome Blue Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#DDE2E8] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#446CB5] shrink-0" />
                <span className="text-xs font-semibold text-[#222222]">{t.hero.pill1}</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#DDE2E8] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#446CB5] shrink-0" />
                <span className="text-xs font-semibold text-[#222222]">{t.hero.pill2}</span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#DDE2E8] shadow-xs">
                <Activity className="w-4 h-4 text-[#446CB5] shrink-0" />
                <span className="text-xs font-semibold text-[#222222]">{t.hero.pill3}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-base font-semibold shadow-lg shadow-[#446CB5]/30 hover:shadow-xl hover:shadow-[#446CB5]/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-[#F5F6F8] text-[#222222] border border-[#DDE2E8] hover:border-[#446CB5]/40 text-base font-semibold shadow-xs transition-all duration-200 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#446CB5]" />
                <span>{t.hero.ctaSecondary}</span>
              </button>
            </div>

          </div>

          {/* Right Column: High-Res Visual & Live Status Badges (5 cols) */}
          <div className="lg:col-span-5 relative">
            
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main High-Res Generated Visual */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img 
                  src="/images/hero_health_tech.jpg" 
                  alt={isEn ? "Overseas Marketing Health Tourism Growth & Tech" : "Overseas Marketing Sağlık Turizmi ve Teknoloji Yönetimi"} 
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width="800"
                  height="450"
                  className="w-full h-[450px] object-cover object-center group-hover:scale-103 transition-transform duration-700"
                />
                
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#16202E]/80 via-transparent to-[#16202E]/10 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA] flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-[#60A5FA]" />
                      {isEn ? 'Global Medical Tourism Network' : 'Global Sağlık Turizmi Ağ Operasyonu'}
                    </span>
                    <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded-full font-medium">
                      {isEn ? 'Global Network' : 'Global Ağ'}
                    </span>
                  </div>
                  <div className="font-['Inter_Tight'] text-sm font-semibold">
                    {isEn ? 'Qualified Patients & Appointment Management across 18 Countries' : '18 Ülkeden Nitelikli Hasta ve Randevu Yönetimi'}
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 1: AI Call Agent (Top Right) */}
              <div className="absolute -top-4 -right-3 sm:-right-5 glass-card p-3 rounded-2xl shadow-xl border border-[#DDE2E8] animate-float-slow max-w-[230px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#446CB5] flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-[#446CB5] uppercase flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      {isEn ? 'AI Voice Agent' : 'AI Sesli Asistan'}
                    </div>
                    <div className="text-xs font-bold text-[#222222]">
                      {isEn ? 'Multilingual Patient Inquiries' : 'Çok Dilli Hasta Karşılama'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 2: Lead Generation Ticker (Bottom Left) */}
              <div className="absolute -bottom-5 -left-3 sm:-left-5 glass-card p-3 rounded-2xl shadow-xl border border-[#DDE2E8] animate-float-reverse max-w-[240px]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-[#222222] flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {isEn ? 'Sample Qualified Lead' : 'Örnek Nitelikli Başvuru'}
                    </div>
                    <div className="text-xs font-bold text-[#222222]">
                      {isEn ? 'UK / London · Dental Treatment' : 'İngiltere · Dental Tedavi Talebi'}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
