import React, { useState } from 'react';
import { 
  Building2, 
  Smile, 
  Sparkles, 
  Scissors, 
  Hospital, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SpecialtiesSectionProps {
  onOpenConsultation: () => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { isEn } = useLanguage();

  const SPECIALTIES = isEn
    ? [
        {
          id: 'dental',
          title: 'Dental Clinics & Oral Health',
          icon: Smile,
          targetMarkets: 'UK, Ireland, Germany, France',
          leadType: 'Implants, All-on-4, Hollywood Smile, Zirconia',
          strategy: 'Google Ads Search campaigns targeting NHS waiting times and prohibitive private UK dental costs, paired with 3D digital smile design landing pages.',
          crmFlow: 'Automated panoramic X-ray intake, virtual doctor video consultation booking, and instant GBP/EUR itemized proposal generation.',
          stats: '68% Consultation Acceptance'
        },
        {
          id: 'aesthetic',
          title: 'Plastic & Aesthetic Surgery',
          icon: Sparkles,
          targetMarkets: 'Germany, Switzerland, Austria, Gulf',
          leadType: 'Rhinoplasty, Liposuction, Breast Aesthetics, Facelift',
          strategy: 'Cinematic video campaigns showcasing surgeon artistry and hospital safety, combined with multilingual E-E-A-T medical content and GEO ranking.',
          crmFlow: 'Confidential photo upload triage, direct surgeon review forms, and VIP hotel/airport transfer operational tracking.',
          stats: '41% Case Acceptance Rate'
        },
        {
          id: 'hair',
          title: 'Hair Restoration Centers',
          icon: Scissors,
          targetMarkets: 'Italy, Spain, UK, Gulf',
          leadType: 'DHI, Sapphire FUE, Beard & Eyebrow Transplant',
          strategy: 'High-converting Meta & TikTok video funnels paired with instant WhatsApp AI Call Agents for high-volume, continuous patient intake.',
          crmFlow: 'Automated graft calculator bots, instant language-based coordinator assignment, and 24/7 lead intake.',
          stats: '15 Min. Avg. Response Time'
        },
        {
          id: 'hospital',
          title: 'Hospitals & Medical Groups',
          icon: Hospital,
          targetMarkets: 'Balkans, CIS, Africa, Gulf',
          leadType: 'Oncology, Orthopedics, Bariatrics, Cardiology, Eye',
          strategy: 'JCI accreditation positioning, multilingual department portals, International Patient Center (IPC) integration, and B2B medical partner outreach.',
          crmFlow: 'Medical records & epikrisis transfer, tumor board review routing, second opinion intake, and enterprise CRM access.',
          stats: 'JCI & Regulatory Compliant'
        }
      ]
    : [
        {
          id: 'dental',
          title: 'Diş Klinikleri & Ağız Sağlığı',
          icon: Smile,
          targetMarkets: 'İngiltere, İrlanda, Almanya, Fransa',
          leadType: 'İmplant, All-on-4, Hollywood Smile, Zirkonyum',
          strategy: 'İngiltere ve Avrupa hastasının maliyet ve randevu bekleme sorununu hedefleyen Google Ads arama kampanyaları + 3D dijital gülüş planlama landing page\'leri.',
          crmFlow: 'Panoramik röntgen talep otomasyonu, hekim video konsültasyon randevusu ve sterlin/euro fiyat şablonları.',
          stats: '%68 İlk Görüşme Dönüşümü'
        },
        {
          id: 'aesthetic',
          title: 'Estetik Cerrahi & Plastik Rekonstrüktif',
          icon: Sparkles,
          targetMarkets: 'Almanya, İsviçre, Avusturya, Körfez',
          leadType: 'Rinoplasti, Liposuction, Göğüs Estetiği, Facelift',
          strategy: 'Cerrahın uzmanlığını ve ameliyathane güvenliğini anlatan yüksek kaliteli video kreatifler, E-E-A-T uyumlu içerik mimarisi ve GEO optimizasyonu.',
          crmFlow: 'Ön muayene fotoğraf yükleme akışı, cerrah değerlendirme formu ve VIP otel/transfer transfer operasyon modülü.',
          stats: '%41 Tedavi Kabul Oranı'
        },
        {
          id: 'hair',
          title: 'Saç Ekimi Merkezleri',
          icon: Scissors,
          targetMarkets: 'İtalya, İspanya, Körfez, İngiltere',
          leadType: 'DHI, Sapphire FUE, Sakal & Kaş Ekimi',
          strategy: 'Meta Ads ve TikTok Ads video reklamları, çok dilli hızlı WhatsApp ve AI Call Agent karşılama sistemleri ile yüksek hacimli hasta kazanımı.',
          crmFlow: 'Otomatik greft hesaplama asistanı, anlık çok dilli ekip ataması ve gece gelen talepleri kaçırmayan bot akışı.',
          stats: '15 Dk. Ortalama Yanıt Hızı'
        },
        {
          id: 'hospital',
          title: 'Hastaneler & Sağlık Grupları',
          icon: Hospital,
          targetMarkets: 'Balkanlar, BDT, Afrika, Körfez',
          leadType: 'Onkoloji, Ortopedi, Obezite, Kardiyoloji, Göz',
          strategy: 'JCI akreditasyonu, çok dilli branş sayfaları, uluslararası hasta departmanı (IPC) entegrasyonu ve B2B medikal partner outreach süreçleri.',
          crmFlow: 'Epikriz ve medikal dosya aktarımı, kurul onayı, ikinci görüş modülü ve çok departmanlı CRM yetkilendirme.',
          stats: 'JCI ve K8 Mevzuat Uyumlu'
        }
      ];

  const current = SPECIALTIES[activeTab];
  const IconComponent = current.icon;

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <Building2 className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>{isEn ? 'Specialty-Specific Growth Strategies' : 'Branş Odaklı Sağlık Turizmi Stratejileri'}</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            {isEn ? (
              <>Growth models tailored to <span className="text-[#446CB5]">your medical specialty</span></>
            ) : (
              <>Kliniğinizin branşına özel <span className="text-[#446CB5]">büyüme modelleri</span></>
            )}
          </h2>

          <p className="text-base text-[#595F69]">
            {isEn
              ? 'Every specialty entails distinct patient decision timeframes, trust thresholds, and treatment values. We build bespoke funnels rather than generic templates.'
              : 'Her branşın hasta karar süreci, güven kriterleri ve bütçe aralığı farklıdır. Şablon kopyalamak yerine branşa özel süreçler tasarlıyoruz.'}
          </p>
        </div>

        {/* 4 Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {SPECIALTIES.map((spec, idx) => {
            const TabIcon = spec.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={spec.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex items-center gap-3 ${
                  isSelected
                    ? 'bg-[#EEF3FB] border-[#446CB5] shadow-xs'
                    : 'bg-white border-[#DDE2E8] hover:bg-slate-50'
                }`}
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-[#446CB5] text-white' : 'bg-[#F5F6F8] text-[#595F69]'}`}>
                  <TabIcon className="w-4 h-4" />
                </div>
                <div className="font-['Inter_Tight'] font-bold text-xs sm:text-sm text-[#222222] line-clamp-1">
                  {spec.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Specialty Deep-Dive Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE2E8] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Col (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#EEF3FB] flex items-center justify-center">
                  <IconComponent className="w-6 h-6 text-[#446CB5]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#446CB5]">
                    {isEn ? 'Tailored Market Strategy' : 'Özelleştirilmiş Pazar Yaklaşımı'}
                  </span>
                  <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#222222]">
                    {current.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-[#595F69]">
                <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8]/80 space-y-1">
                  <div className="font-bold text-[#222222]">{isEn ? 'Target Markets & Focus Treatments:' : 'Hedef Pazarlar & Tedavi Odakları:'}</div>
                  <p className="text-xs text-[#446CB5] font-semibold">
                    {current.targetMarkets} • {current.leadType}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-bold text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#446CB5]" />
                    <span>{isEn ? 'Marketing & Reach Strategy:' : 'Pazarlama & Görünürlük Stratejisi:'}</span>
                  </div>
                  <p className="text-xs leading-relaxed pl-6">
                    {current.strategy}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="font-bold text-[#222222] flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#446CB5]" />
                    <span>{isEn ? 'Dedicated CRM & Patient Intake Flow:' : 'Özel CRM & Hasta Takip Akışı:'}</span>
                  </div>
                  <p className="text-xs leading-relaxed pl-6">
                    {current.crmFlow}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md shadow-[#446CB5]/20 cursor-pointer"
                >
                  <span>{isEn ? 'Get a Growth Plan for This Specialty' : 'Bu Branş İçin Büyüme Planı Hazırlayalım'}</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>

            </div>

            {/* Right Col Highlight (5 cols) */}
            <div className="lg:col-span-5 bg-[#16202E] text-white rounded-3xl p-6 sm:p-8 space-y-6 text-center">
              <div className="w-12 h-12 rounded-full bg-[#446CB5]/30 mx-auto flex items-center justify-center text-[#60A5FA]">
                <ShieldCheck className="w-6 h-6" />
              </div>

              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
                  {isEn ? 'Verified Performance Metric' : 'Kanıtlanmış Performans Göstergesi'}
                </div>
                <div className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-white mt-1">
                  {current.stats}
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {isEn
                  ? 'Fill your doctors’ operating schedules with qualified foreign patients using precision ad targeting, 24/7 AI voice intake, and specialized healthcare CRM.'
                  : 'Doğru hedefleme, dil bariyersiz AI sesli karşılama ve hasta takip CRM\'i ile hekimlerinizin takvimini nitelikli hastalarla doldurun.'}
              </p>

              <div className="pt-2 border-t border-slate-700 text-[11px] text-slate-400">
                {isEn ? 'Overseas Marketing Global Standard' : 'Overseas Marketing Sağlık Turizmi Standardı'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
