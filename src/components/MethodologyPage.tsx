import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Compass, 
  Layout, 
  Database, 
  LineChart, 
  RefreshCw,
  Cpu,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface MethodologyPageProps {
  onOpenConsultation: () => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  const steps = [
    {
      num: "01",
      title: isEn ? "Phase 1: Clinical Research & Market Audit" : "1. Aşama: Klinik Analizi ve Hedef Pazar Denetimi",
      desc: isEn 
        ? "We analyze your clinic's specialty strengths, surgeon credentials, competitor acquisition strategies in the UK & Europe, and legal advertising boundaries." 
        : "Kliniğinizin güçlü cerrahi yönlerini, hekim E-E-A-T profilini, rakiplerinizin hedef ülkelerdeki (İngiltere, DACH vb.) reklam kurgularını ve mevzuat sınırlarını inceleriz.",
      deliverable: isEn ? "Target Market Matrix & Competitive Gap Report" : "Hedef Pazar Matrisi & Rakip Açık Analizi Raporu"
    },
    {
      num: "02",
      title: isEn ? "Phase 2: Strategy & Patient Funnel Architecture" : "2. Aşama: Strateji ve Hasta Dönüşüm Mimarisi",
      desc: isEn 
        ? "We map the exact patient journey: High-intent search terms, native ad creatives, multilingual landing pages, and lead scoring rules." 
        : "Arama niyetine göre anahtar kelimeler, ana dilinde video/metin kreatifleri, dönüşüm odaklı açılış sayfaları ve lead skorlama kriterleri belirlenir.",
      deliverable: isEn ? "Full Patient Funnel Blueprint & CPL Model" : "Tam Hasta Yolculuğu Mimarisi & Tahmini CPL Modeli"
    },
    {
      num: "03",
      title: isEn ? "Phase 3: Technical Setup, Landing Pages & CRM" : "3. Aşama: Teknik Kurulum, Web/Landing Page ve CRM",
      desc: isEn 
        ? "We deploy sub-2-second multilingual landing pages, WhatsApp routing webhooks, CRM pipelines, and GA4/Offline conversion tracking." 
        : "2 saniyenin altında açılan çok dilli açılış sayfaları, WhatsApp satış yönlendirmeleri, özel hasta CRM paneli ve GA4 offline dönüşüm takipleri kurulur.",
      deliverable: isEn ? "Production Launch & Webhook Tracking Test" : "Canlıya Geçiş & Dönüşüm Doğrulama Testi"
    },
    {
      num: "04",
      title: isEn ? "Phase 4: Multi-Channel Launch & Paid Media" : "4. Aşama: Çok Kanallı Reklam ve Organik Başlangıç",
      desc: isEn 
        ? "Google Ads search intent campaigns, Meta trust video funnels, and Generative Engine Optimization (GEO) are ignited simultaneously." 
        : "Google Ads arama ağı, Meta güven odaklı video reklamları ve yapay zekâ (GEO) görünürlük çalışmaları eş zamanlı başlatılır.",
      deliverable: isEn ? "Active Campaigns in Target Geographies" : "Hedef Ülkelerde Canlı Reklam ve GEO Yayını"
    },
    {
      num: "05",
      title: isEn ? "Phase 5: Real-Time Measurement & Sales Feedback" : "5. Aşama: Ölçüm, Satış Ekibi Geri Bildirimi ve CRO",
      desc: isEn 
        ? "We analyze CRM lead quality weekly with your patient coordinators: Which inquiries turned into consultations, and why." 
        : "Satış danışmanlarınızla haftalık lead kalitesi toplantıları yapılır; hangi reklamın hastaya dönüştüğü CRM üzerinden net olarak ölçülür.",
      deliverable: isEn ? "Weekly Attribution & Lead Quality Scorecard" : "Haftalık Nitelikli Başvuru & Gelir Katkısı Raporu"
    },
    {
      num: "06",
      title: isEn ? "Phase 6: Systematic Scaling & AI Automation" : "6. Aşama: Ölçekleme ve Yapay Zekâ Otomasyonu",
      desc: isEn 
        ? "We double down on winning treatment campaigns, deploy 24/7 AI call agents for night shifts, and expand into neighboring high-yield markets." 
        : "Başarılı tedavi kampanyaları ölçeklenir, gece aramaları için sesli yapay zekâ asistanı devreye alınır ve yeni ülkelere genişleme planlanır.",
      deliverable: isEn ? "Scalable International Patient Pipeline" : "Sürdürülebilir Küresel Hasta Kazanım Motoru"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Our Growth Methodology & Framework | Overseas Marketing" : "Sağlık Turizmi Büyüme Metodolojimiz | Overseas Marketing"}
        description={isEn
          ? "Discover Overseas Marketing's 6-phase scientific methodology: Research, strategy, conversion infrastructure, paid media, CRM feedback, and AI scaling."
          : "Overseas Marketing'in 6 aşamalı sağlık turizmi metodolojisi: Analiz, strateji, dönüşüm altyapısı, çok kanallı reklam, CRM ölçümü ve yapay zekâ ölçekleme."}
        canonicalUrl="https://www.overseas.marketing/metodoloji"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>{isEn ? "The Overseas Scientific Method" : "Bilimsel Büyüme Metodolojisi"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>From first search to surgery: <span className="text-[#446CB5]">A 6-phase engineered patient growth engine</span>.</>
          ) : (
            <>İlk aramadan ameliyata: <span className="text-[#446CB5]">6 aşamalı entegre hasta büyüme modeli</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "We do not guess; we test and engineer. Our proprietary 6-step growth methodology connects clinical positioning with deep data attribution and real sales floor results."
            : "Tesadüflere değil, verilere ve süreç mühendisliğine dayalı büyüme altyapısı kuruyoruz. Kliniğinizin cerrahi uzmanlığını hedef ülkedeki hasta arayışıyla buluşturan 6 adımlı metodolojimiz."}
        </p>
      </section>

      {/* Steps List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 mb-20">
        {steps.map((st, idx) => (
          <div 
            key={idx}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm hover:border-[#446CB5] transition-all flex flex-col md:flex-row items-start gap-8"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#EEF3FB] text-[#446CB5] font-['Inter_Tight'] text-2xl font-extrabold flex items-center justify-center shrink-0">
              {st.num}
            </div>
            <div className="flex-1 space-y-3">
              <h2 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E]">
                {st.title}
              </h2>
              <p className="text-[#595F69] text-base leading-relaxed">
                {st.desc}
              </p>
              <div className="pt-3 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#446CB5]">
                <CheckCircle2 className="w-4 h-4" />
                <span>{isEn ? "Core Deliverable: " : "Çıktı & Teslimat: "}</span>
                <span className="text-[#16202E] font-medium">{st.deliverable}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn ? "Apply our growth methodology to your clinic" : "Bu büyüme metodolojisini kliniğinize uygulayalım"}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn ? "Schedule a discovery session to evaluate your current acquisition pipeline against our 6-phase framework." : "Mevcut reklam ve hasta iletişim süreçlerinizi 6 aşamalı büyüme çerçevemizle karşılaştırmak için görüşme planlayın."}
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 inline-flex items-center gap-2"
          >
            <span>{isEn ? "Schedule Methodology Review" : "Metodoloji İncelemesi Planla"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
