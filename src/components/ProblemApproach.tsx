import React from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  Target, 
  Cpu, 
  Database, 
  Layout, 
  TrendingUp
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface ProblemApproachProps {
  onOpenConsultation: () => void;
}

export const ProblemApproach: React.FC<ProblemApproachProps> = ({ }) => {
  const { language, isEn } = useLanguage();
  const t = translations[language];

  return (
    <section id="buyume-modeli" className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <Target className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>{t.problemApproach.badge}</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            {t.problemApproach.h2Part1} <span className="text-[#446CB5]">{t.problemApproach.h2Highlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-[#595F69] leading-relaxed">
            {t.problemApproach.subtitle}
          </p>

          <div className="pt-2">
            <span className="inline-block font-['Inter_Tight'] text-xl font-bold text-[#446CB5] bg-[#EEF3FB] px-5 py-2 rounded-xl">
              {isEn ? '“We sit beside you as growth partners, not across from you.”' : '“Karşınızda değil, yanınızda oturuyoruz.”'}
            </span>
          </div>
        </div>

        {/* 2-Column Comparison: Traditional Siloed Agency vs Overseas Integrated Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Box 1: Sık Yaşanan Tıkanıklıklar (Conventional Agency) */}
          <div className="p-8 rounded-3xl bg-[#F5F6F8] border border-[#DDE2E8] space-y-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
                  {t.problemApproach.traditionalTitle}
                </h3>
                <p className="text-xs text-[#595F69]">
                  {isEn ? 'Click-focused agencies disconnected from clinical sales operations' : 'Yalnızca tıklama odaklı, operasyondan kopuk ajanslar'}
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {t.problemApproach.traditionalItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#595F69]">
                  <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 2: Overseas Integrated Growth Solution */}
          <div className="p-8 rounded-3xl bg-[#EEF3FB]/50 border-2 border-[#446CB5]/30 space-y-6 relative overflow-hidden shadow-lg shadow-[#446CB5]/5 text-left">
            <div className="absolute top-0 right-0 bg-[#446CB5] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
              {isEn ? 'Overseas Approach' : 'Overseas Yaklaşımı'}
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#446CB5] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
                  {t.problemApproach.overseasTitle}
                </h3>
                <p className="text-xs text-[#446CB5] font-semibold">
                  {isEn ? 'Marketing + Dedicated CRM + AI Voice Intake + Operations' : 'Pazarlama + Özel CRM + Yapay Zeka + Operasyon'}
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {t.problemApproach.overseasItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* 4 Foundation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          
          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <TrendingUp className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              {isEn ? '1. High-Intent Reach' : '1. Doğru Kitleye Ulaşım'}
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn 
                ? 'Targeting international patients with verified search intent and treatment budgets via Google Ads, Meta, and SEO.'
                : 'Google Ads, Meta Ads ve SEO ile arama niyeti ve tedavi bütçesi olan uluslararası kitleyi hedefleme.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <Layout className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              {isEn ? '2. Conversion Interface' : '2. Dönüşüm Arayüzü'}
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn
                ? 'High-speed, multilingual landing pages designed to build medical trust and convert visitors into inquiries.'
                : 'Çok dilli, hızlı ve güven inşa eden landing page tasarımlarıyla ziyaretçiyi başvuruya dönüştürme.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <Database className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              {isEn ? '3. Medical Tourism CRM' : '3. Özel CRM Altyapısı'}
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn
                ? 'Automated coordinator routing, multi-currency quotation engine, and transparent patient journey tracking.'
                : 'Temsilci atamaları, teklif hazırlama, görüşme geçmişi ve hasta yolculuğunun kusursuz yönetimi.'}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <Cpu className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              {isEn ? '4. AI & Automation' : '4. AI & Otomasyon'}
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn
                ? 'AI voice call agents, multilingual WhatsApp chatbots, and zero-delay triage ensuring no lead leakage.'
                : 'AI Call Agent, akıllı chatbot, gecikme uyarıları ve cron job sistemleriyle sıfır talep kaybı.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
