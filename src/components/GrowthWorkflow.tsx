import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  FileText, 
  Rocket, 
  TrendingUp, 
  Calendar,
  Layers
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/masterPlanData';

interface GrowthWorkflowProps {
  onOpenConsultation: () => void;
}

export const GrowthWorkflow: React.FC<GrowthWorkflowProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState(0);

  const STEP_DETAILS = [
    {
      step: '01',
      title: 'Analiz & Keşif',
      timeframe: '1. - 2. Hafta',
      icon: Search,
      focus: 'Mevcut Durum & Pazar Potansiyeli',
      actions: [
        'Mevcut Google ve Meta reklam hesaplarının geçmiş veri denetimi',
        'Web sitesi dönüşüm engelleri ve mobil kullanıcı deneyimi testi',
        'Hedef ülkelerdeki (İngiltere, DACH, Körfez) rakip ve arama hacmi analizi',
        'Klinik satış ekibinin yanıt süreleri ve CRM kullanım alışkanlıkları'
      ]
    },
    {
      step: '02',
      title: 'Strateji & Mimar Planı',
      timeframe: '3. - 4. Hafta',
      icon: FileText,
      focus: 'Kanal, İçerik ve CRM Kurgusu',
      actions: [
        'Performans pazarlama bütçe dağılımı ve KPI hedefleme tablosu',
        'Çok dilli Landing Page telif ve tasarım şablonlarının hazırlanması',
        'AI Call Agent karşılama senaryolarının hekimlerle onaylanması',
        'Özel CRM modül gereksinimleri ve ekip rol matrisinin çıkarılması'
      ]
    },
    {
      step: '03',
      title: 'Kurulum & Entegrasyon',
      timeframe: '5. - 6. Hafta',
      icon: Rocket,
      focus: 'Canlı Yayına Çıkış',
      actions: [
        'Google Ads, Meta Ads ve TikTok kampanyalarının yayına alınması',
        'Çok dilli yüksek hızlı Landing Page\'lerin indekslenmesi ve A/B testi',
        'AI Call Agent ve WhatsApp chatbot\'un telefon hatlarına entegrasyonu',
        'CRM talep havuzunun ve otomatik ekip bildirimlerinin devreye alınması'
      ]
    },
    {
      step: '04',
      title: 'Ölçüm & Büyüme İyileştirmesi',
      timeframe: 'Sürekli Döngü',
      icon: TrendingUp,
      focus: 'Haftalık ROI & Hasta Optimizasyonu',
      actions: [
        'Hangi reklamın kaç ameliyat/tedavi sağladığının net tespiti',
        'Düşük dönüşümlü anahtar kelimelerin elenmesi, bütçenin kazananlara kaydırılması',
        'Satış ekibine gelen hasta kalitesinin haftalık toplantılarla değerlendirilmesi',
        'Yeni tedavi ve mevsimsel kampanyaların sisteme eklenmesi'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <Calendar className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>90 Günlük Uygulama Yol Haritası</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Çalışmalarımızı <span className="text-[#446CB5]">nasıl yürütüyoruz?</span>
          </h2>

          <p className="text-base text-[#595F69]">
            Belirsiz vaatler yerine, neyin ne zaman yapılacağını ve nasıl ölçüleceğini netleştiren 4 aşamalı disiplin.
          </p>
        </div>

        {/* 4 Step Nav Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {STEP_DETAILS.map((s, idx) => {
            const Icon = s.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-[#EEF3FB] border-[#446CB5] shadow-md shadow-[#446CB5]/10'
                    : 'bg-[#F8FAFC] border-[#DDE2E8] hover:bg-white hover:border-[#446CB5]/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-['Inter_Tight'] text-xl font-bold ${isCurrent ? 'text-[#446CB5]' : 'text-slate-400'}`}>
                    {s.step}
                  </span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isCurrent ? 'bg-[#446CB5] text-white' : 'bg-white text-[#595F69] border border-[#DDE2E8]'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">
                  {s.title}
                </div>
                <div className="text-[11px] text-[#446CB5] font-semibold mt-0.5">
                  {s.timeframe}
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Details Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#DDE2E8] text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                {STEP_DETAILS[activeStep].timeframe}
              </div>
              <h3 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                {STEP_DETAILS[activeStep].step}. {STEP_DETAILS[activeStep].title}
              </h3>
              <p className="text-sm font-semibold text-[#595F69]">
                Odak: {STEP_DETAILS[activeStep].focus}
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md shadow-[#446CB5]/20 cursor-pointer"
                >
                  <span>Bu Aşamayı Başlatalım</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#DDE2E8] p-6 space-y-3 shadow-xs">
              <div className="text-xs font-bold uppercase tracking-wider text-[#222222] mb-1">
                Uygulama Adımları ve Çıktılar:
              </div>
              {STEP_DETAILS[activeStep].actions.map((act, i) => (
                <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8]/60 text-xs text-[#222222]">
                  <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{act}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
