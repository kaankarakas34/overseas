import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Hospital, 
  UserCheck, 
  Globe2, 
  ShieldCheck, 
  TrendingUp, 
  Bot, 
  Database, 
  MessageSquare, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronRight, 
  ChevronDown, 
  ArrowRight, 
  BarChart3, 
  Layers, 
  Lock,
  Search,
  Check
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AgencyDecisionFrameworkProps {
  onOpenConsultation: () => void;
  onSelectService: (serviceId: string) => void;
}

export const AgencyDecisionFramework: React.FC<AgencyDecisionFrameworkProps> = ({ 
  onOpenConsultation, 
  onSelectService 
}) => {
  const { isEn } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const clientTypes = [
    {
      title: isEn ? "Authorized Medical Centers & Clinics" : "Yetkili Sağlık Tesisleri & Tıp Merkezleri",
      desc: isEn 
        ? "Licensed polyclinics, dental and aesthetic centers holding an International Health Tourism Authorization Certificate from the Ministry of Health. Direct patient admission, verified facilities."
        : "T.C. Sağlık Bakanlığı onaylı Uluslararası Sağlık Turizmi Yetki Belgesi sahibi tıp merkezleri, diş poliklinikleri ve cerrahi merkezler. Doğrudan hasta kabul yetkisine sahip kurumlar.",
      icon: <Building2 className="w-5 h-5 text-[#446CB5]" />,
      role: isEn ? "Direct Treatment Provider" : "Doğrudan Sağlık Hizmeti Sunucusu",
      scope: isEn ? "Full clinic branding, verified doctor credentials, HealthTürkiye compliance" : "Klinik kurumsal kimliği, hekim E-E-A-T profili, HealthTürkiye entegrasyonu"
    },
    {
      title: isEn ? "Private & University Hospitals" : "Özel ve Üniversite Hastaneleri",
      desc: isEn 
        ? "Multidisciplinary hospital groups managing complex surgeries, oncology, orthopedics, and international patient departments requiring enterprise lead routing."
        : "Geniş branş altyapısına sahip, karmaşık cerrahi, onkoloji ve genel cerrahi vakalarında uluslararası hasta departmanıyla entegre çalışan kurumsal hastaneler.",
      icon: <Hospital className="w-5 h-5 text-[#446CB5]" />,
      role: isEn ? "Multidisciplinary Hospital System" : "Çok Branşlı Hastane Sistemi",
      scope: isEn ? "High-ticket medical procedures, country-specific landing pages, CRM triage" : "Yüksek bütçeli tedaviler, ülke bazlı açılış sayfaları, uluslararası çağrı karşılama"
    },
    {
      title: isEn ? "Specialist Doctors & Private Practices" : "Uzman Hekimler & Muayenehaneler",
      desc: isEn 
        ? "Independent surgeons and physicians building personal medical authority, scholarly reputation, and ethical international patient communication."
        : "1219 sayılı Kanun ve ilgili sağlık mevzuatına uygun şekilde kişisel uzmanlığını, cerrahi vaka tecrübesini ve uluslararası itibarını yapılandıran hekimler.",
      icon: <UserCheck className="w-5 h-5 text-[#446CB5]" />,
      role: isEn ? "Physician Brand & Authority" : "Hekim Kişisel Marka Yönetimi",
      scope: isEn ? "Doctor branding, scientific authority, ethical before-after review, digital PR" : "Hekim E-E-A-T profili, bilimsel yayın görünürlüğü, etik bilgilendirme içerikleri"
    },
    {
      title: isEn ? "Authorized Facilitators (Agencies)" : "Yetkili Sağlık Turizmi Aracı Kuruluşları",
      desc: isEn 
        ? "TÜRSAB Class-A licensed travel agencies holding the official Medical Tourism Facilitator Certificate for international patient packages and hospital matchmaking."
        : "TÜRSAB A Grubu işletme belgesi ve Bakanlık Uluslararası Sağlık Turizmi Aracı Kuruluş Yetki Belgesi sahibi, anlaşmalı hastanelerle paket tur düzenleyen kurumlar.",
      icon: <Globe2 className="w-5 h-5 text-[#446CB5]" />,
      role: isEn ? "Certified Medical Tourism Facilitator" : "Bakanlık Yetkili Aracı Kuruluş",
      scope: isEn ? "Multilingual call center integration, partner hospital alignment, country ads" : "Çok dilli satış operasyonu, anlaşmalı hastane tanıtımı, hedef pazar reklamları"
    }
  ];

  const funnelSteps = [
    {
      stage: isEn ? "1. Ad Impressions" : "1. Gösterim (Impression)",
      definition: isEn 
        ? "Number of times ads are displayed to high-intent users in target countries (UK, DACH, GCC)."
        : "Hedef ülkelerdeki (İngiltere, DACH, Körfez) yüksek niyetli kullanıcılara reklamın kaç kez gösterildiği.",
      tool: "Google Ads & Meta Ads Paneli",
      status: isEn ? "Tracked Continuously" : "Düzenli Ölçüyoruz",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      responsibility: isEn ? "Overseas Marketing Agency" : "Overseas Marketing (Ajans)"
    },
    {
      stage: isEn ? "2. Inquiries (Leads)" : "2. Başvuru (Lead)",
      definition: isEn 
        ? "Users who submit a contact form, start a WhatsApp conversation, or click to call."
        : "Açılış sayfasından form dolduran, WhatsApp başlatan veya doğrudan arama yapan yabancı hasta adayları.",
      tool: "GA4, Meta Pixel & CRM Webhook",
      status: isEn ? "Tracked Continuously" : "Düzenli Ölçüyoruz",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      responsibility: isEn ? "Overseas Marketing (Altyapı)" : "Overseas Marketing (Altyapı)"
    },
    {
      stage: isEn ? "3. Answered Inquiries" : "3. Yanıtlanan Başvuru",
      definition: isEn 
        ? "Leads contacted by the sales team or AI triage within the critical 5-15 minute response window."
        : "Gelen başvurunun satış ekibi veya AI asistanı tarafından ilk 5-15 dakika içinde ana dilinde karşılanması.",
      tool: "WhatsApp Business API & Özel CRM",
      status: isEn ? "Tracked Continuously" : "Düzenli Ölçüyoruz",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      responsibility: isEn ? "Ajans CRM + Klinik Satış Ekibi" : "Ajans CRM + Klinik Satış Ekibi"
    },
    {
      stage: isEn ? "4. Clinical Evaluation" : "4. Klinik Değerlendirme",
      definition: isEn 
        ? "Inquiries who provide medical photos, X-rays, or history for doctor review and medical feasibility."
        : "Fotoğraf, röntgen veya epikrizini gönderip hekim tarafından tıbbi tedavi planı hazırlanan hasta adayları.",
      tool: "Özel Sağlık CRM Hasta Kartı",
      status: isEn ? "Tracked with Clinic Input" : "Klinik Verisiyle Ölçüyoruz",
      statusColor: "bg-blue-50 text-blue-700 border-blue-200",
      responsibility: isEn ? "Klinik Hekim & Satış Danışmanı" : "Klinik Hekim & Satış Danışmanı"
    },
    {
      stage: isEn ? "5. Appointment / Deposit" : "5. Randevu & Tedavi Onayı",
      definition: isEn 
        ? "Patients who approve the treatment quote, set a flight date, or secure a booking deposit."
        : "Tedavi teklifini onaylayan, uçak biletini alan veya rezervasyon depozitosunu yatıran hasta.",
      tool: "CRM Finans & Randevu Modülü",
      status: isEn ? "Measurable upon Data Sharing" : "Veri Paylaşılırsa Ölçebiliriz",
      statusColor: "bg-amber-50 text-amber-800 border-amber-200",
      responsibility: isEn ? "Klinik Koordinatörü + Ortak CRM" : "Klinik Koordinatörü + Ortak CRM"
    },
    {
      stage: isEn ? "6. Arrived Patient (Admission)" : "6. Gelen Hasta (Klinik Kabul)",
      definition: isEn 
        ? "Patient physically arrives at the clinic in Turkey, begins treatment, and completes payment."
        : "Hastanın Türkiye'ye gelip kliniğe kabul edilmesi, operasyonun başlaması ve faturanın kesilmesi.",
      tool: "Klinik ERP / Sağlık Bilgi Sistemi",
      status: isEn ? "Measurable upon Data Sharing" : "Veri Paylaşılırsa Ölçebiliriz",
      statusColor: "bg-amber-50 text-amber-800 border-amber-200",
      responsibility: isEn ? "Klinik Yönetimi (ROI Hesaplama)" : "Klinik Yönetimi (ROI Hesaplama)"
    }
  ];

  const faqs = [
    {
      q: isEn ? "Do you guarantee treatment outcome or patient volume?" : "Hasta sayısı, ciro veya tedavi sonucu garantisi veriyor musunuz?",
      a: isEn 
        ? "No. In compliance with medical ethics, advertising regulations, and our transparent terms, we never promise unconditional patient quotas. Patient acquisition depends on target country, branch competition, clinical credentials, doctor reputation, and your sales team's response speed. We establish clear measurable metrics (Cost Per Qualified Inquiry) and optimize every week."
        : "Hayır. Etik ilkelerimiz, Sağlık Bakanlığı tanıtım yönetmeliği ve dürüst ajans sözleşmemiz gereği doğrulanmamış hasta sayısı veya ciro garantisi vermeyiz. Yurt dışı hasta kazanımı; hedef ülkenin dinamiklerine, kliniğin yetki belgesine, hekimin güven profiline ve satış ekibinizin yanıt hızına bağlıdır. Şeffaf metrikler koyar, her aşamayı ölçülebilir verilerle haftalık optimize ederiz."
    },
    {
      q: isEn ? "Can we run sponsored ChatGPT Ads for medical treatments right now?" : "ChatGPT'de saç ekimi veya diş implantı reklamı verebilir miyiz?",
      a: isEn 
        ? "No. According to OpenAI's official onboarding policy, 'medical procedures and experimental care' are classified as 'Not Allowed' in all countries, and hospitals outside the US are also disallowed. Therefore, clinics cannot run sponsored ads in ChatGPT for clinical treatments. However, you can optimize your clinic's organic presence through GEO (Generative Engine Optimization) so AI assistants cite your clinic as an authoritative reference."
        : "Hayır. OpenAI'ın güncel reklam uygunluğu tablosunda 'tıbbi işlemler' (medical procedures and experimental care) tüm ülkelerde izin dışıdır; hastaneler için de ABD dışındaki pazarlar izin dışı görünmektedir. Bu nedenle saç ekimi, diş implantı veya estetik cerrahi için ChatGPT Ads kampanyası vaat edilemez. Ancak GEO (Generative Engine Optimization) ile kliniğinizin ChatGPT ve Gemini'de organik bir bilgi kaynağı olarak anlaşılmasını sağlıyoruz."
    },
    {
      q: isEn ? "How do you verify regulatory compliance across different countries?" : "Sağlık turizmi reklamlarında mevzuatı nasıl denetliyorsunuz?",
      a: isEn 
        ? "Every campaign undergoes a 4-step compliance check before launch: (1) Verification of the clinic's Ministry Authorization Certificate, (2) Compliance with Turkish Healthcare Promotion Regulations (HealthTürkiye logo, absence of deceptive discount/guarantee claims), (3) Local destination rules (such as UK ASA or German HWG), and (4) Google/Meta healthcare policies. We plan campaigns under strict verifiable rules without promising blanket immunity."
        : "Her kampanyada kuruluşun yetkisini, hedef ülkeyi, kreatifleri ve açılış sayfasını yürürlükteki kurallara göre kontrol ederek planlarız. 12 Kasım 2025 Tanıtım Yönetmeliği ve uluslararası sağlık turizmi özel hükümleri, HealthTürkiye entegrasyonu, hasta görseli açık rızası ve hedef ülkenin yerel reklam kuralları (İngiltere ASA, Almanya HWG gibi) yayımdan önce teker teker incelenir."
    },
    {
      q: isEn ? "What is the difference between an agency B2B service and clinical patient ads?" : "Ajans B2B hizmeti ile kliniğin hasta reklamı arasındaki fark nedir?",
      a: isEn 
        ? "Overseas Marketing provides B2B growth, advertising management, CRM, and digital consulting to healthcare organizations. When advertising to international patients on behalf of clinics, all messaging is strictly restricted to medical information, facility capabilities, and authorized health services; commercial price baiting or comparative superiority claims are strictly avoided."
        : "Overseas Marketing, sağlık kuruluşlarına B2B reklam yönetimi, SEO, GEO ve teknoloji altyapısı sunan bir ajanstır. Kliniklerin yabancı hastalara yönelik tanıtımlarında ise mevzuatın izin verdiği bilgilendirme ve yetki sınırlarına sadık kalınır; kliniğin her mecrada sınırsız reklam serbestisi olduğu algısı yaratılmaz."
    },
    {
      q: isEn ? "Why do healthcare clinics need a dedicated medical CRM rather than generic tools?" : "Neden genel bir CRM yerine sağlık turizmine özel CRM kullanılmalı?",
      a: isEn 
        ? "Generic CRM systems charge per user seat and lack native multilingual WhatsApp routing, medical photo intake, and time-zone triage. Our healthcare CRM includes multi-currency tracking, automatic follow-ups at 30/90 days for pending patients, and AI voice/text agents built specifically for international patient coordinators."
        : "Genel amaçlı CRM yazılımları kişi başı lisans ücreti alır ve sağlık turizminin çok dilli WhatsApp, fotoğraf/röntgen toplama ve saat farkı dinamiklerine uyum sağlayamaz. Geliştirdiğimiz özel sağlık CRM altyapısı; dillerine göre otomatik satış danışmanı ataması, 3. ve 7. gün takip akışları ve AI karşılama sistemleriyle operasyonel kaybı sıfırlar."
    },
    {
      q: isEn ? "How quickly can we launch campaigns in the UK or DACH markets?" : "İngiltere veya DACH pazarına ne kadar sürede reklam çıkabiliriz?",
      a: isEn 
        ? "Following the initial strategy consultation and authorization verification, onboarding takes 10 to 14 business days. This timeframe covers target market keyword research, high-converting localized landing page development, pixel/conversion setup, ad copy localization, and CRM integration."
        : "İlk strateji görüşmesi ve yetki kontrolünün ardından hazırlık süreci 10-14 iş günü sürer. Bu sürede hedef ülkeye özel arama niyeti analizi, yerelleştirilmiş çok dilli açılış sayfası, Meta/Google Pixel dönüşüm kurgusu ve WhatsApp CRM entegrasyonu tamamlanarak kontrollü test bütçesiyle yayına başlanır."
    }
  ];

  return (
    <div className="space-y-24 py-16 bg-[#F8FAFC]">
      
      {/* ------------------------------------------------------------- */}
      {/* H2 #1: Kimler için çalışıyoruz? */}
      {/* ------------------------------------------------------------- */}
      <section id="kimler-icin" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5] mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{isEn ? "Target Audiences & Roles" : "Hedef Kitle & Kurumsal Roller"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "Who Do We Work With?" : "Kimler için çalışıyoruz?"}
          </h2>
          <p className="text-base text-[#595F69] mt-3 leading-relaxed">
            {isEn
              ? "Every healthcare entity has unique regulatory authorizations, marketing boundaries, and operational structures. We design tailored patient acquisition models based on your legal accreditation."
              : "Sağlık sektöründe her kuruluşun yasal yetki kapsamı, reklam kısıtlamaları ve operasyonel kapasitesi farklıdır. Kampanyalarımızı kurumun resmî yetkisine ve büyüme hedeflerine göre özelleştiriyoruz."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientTypes.map((item, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs hover:shadow-md hover:border-[#446CB5]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-[#EEF3FB] flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#446CB5] block mb-1">
                    {item.role}
                  </span>
                  <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#595F69] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EEF2F6] text-[11px] text-[#475569]">
                <strong className="text-[#16202E] block mb-1 font-semibold">
                  {isEn ? "Strategic Scope:" : "Odak Kapsam:"}
                </strong>
                {item.scope}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #2: Hangi ülkelerde ve branşlarda? */}
      {/* ------------------------------------------------------------- */}
      <section id="ulkeler-ve-branslar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5] mb-3">
            <Globe2 className="w-3.5 h-3.5" />
            <span>{isEn ? "Target Markets & Clinical Specialties" : "Pazarlar & Medikal Branşlar"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "In Which Countries and Specialties Do We Operate?" : "Hangi ülkelerde ve branşlarda?"}
          </h2>
          <p className="text-base text-[#595F69] mt-3 leading-relaxed">
            {isEn
              ? "Patient search behavior, regulatory scrutiny, and clinical objections vary by geography and medical specialty. Here is how we align markets with high-intent treatments."
              : "Yabancı hastanın güven kriterleri, yerel arama niyetleri ve tedavi kararı pazara göre büyük farklılık gösterir. İngiltere, DACH ve Körfez pazarlarında branşa özel stratejiler kuruyoruz."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Target Countries Column */}
          <div className="bg-white rounded-3xl border border-[#DDE2E8] p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-[#EEF2F6] pb-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#446CB5]" />
                <span>{isEn ? "Active Target Countries" : "Aktif Hedef Ülke Pazarları"}</span>
              </h3>
              <Link to="/ulkeler" className="text-xs font-bold text-[#446CB5] hover:underline flex items-center gap-1">
                <span>{isEn ? "All Markets" : "Tüm Ülkeler"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              <Link 
                to="/ingiltere-saglik-turizmi-reklamlari" 
                className="block p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB]/50 border border-[#E2E8F0] hover:border-[#446CB5]/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors">
                    {isEn ? "United Kingdom (UK)" : "İngiltere (UK Pazarı)"}
                  </strong>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#446CB5] transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-[#595F69] mt-1.5 leading-relaxed">
                  {isEn 
                    ? "NHS waitlist relief, GBP value positioning, ASA advertising compliance, dental & hair transplant demand."
                    : "NHS bekleme süreleri, sterlin arbitrajı, ASA reklam kuralları ve diş implantı/saç ekimi odaklı arama niyeti."}
                </p>
              </Link>

              <Link 
                to="/almanya-saglik-turizmi-reklamlari" 
                className="block p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB]/50 border border-[#E2E8F0] hover:border-[#446CB5]/40 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <strong className="text-sm font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors">
                    {isEn ? "Germany & DACH Region" : "Almanya & DACH Bölgesi (Avusturya, İsviçre)"}
                  </strong>
                  <ArrowRight className="w-4 h-4 text-[#94A3B8] group-hover:text-[#446CB5] transition-transform group-hover:translate-x-1" />
                </div>
                <p className="text-xs text-[#595F69] mt-1.5 leading-relaxed">
                  {isEn 
                    ? "Strict HWG advertising regulations, physician accreditation scrutiny, native German medical copy, plastic surgery & dental."
                    : "Katı HWG regülasyonları, hekim uzmanlığı ve ameliyathane güveni odaklı ana dilinde Almanca arama niyetleri."}
                </p>
              </Link>

              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                <strong className="text-sm font-bold text-[#16202E]">
                  {isEn ? "Gulf Region (GCC - UAE, Saudi Arabia, Kuwait)" : "Körfez Ülkeleri (GCC - BAE, Suudi Arabistan, Kuveyt)"}
                </strong>
                <p className="text-xs text-[#595F69] mt-1.5 leading-relaxed">
                  {isEn 
                    ? "VIP medical hospitality, hospital brand authority, bilingual Arabic/English ad funnels, high-complexity procedures."
                    : "VIP hizmet beklentisi, çok dilli Arapça/İngilizce reklam akışları, karmaşık cerrahi ve genel hastane operasyonları."}
                </p>
              </div>
            </div>
          </div>

          {/* Specialties Column */}
          <div className="bg-white rounded-3xl border border-[#DDE2E8] p-7 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-[#EEF2F6] pb-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#446CB5]" />
                <span>{isEn ? "Specialized Clinical Fields" : "Odak Tıbbi Branşlar"}</span>
              </h3>
              <Link to="/sektorler" className="text-xs font-bold text-[#446CB5] hover:underline flex items-center gap-1">
                <span>{isEn ? "All Specialties" : "Tüm Branşlar"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <Link 
                to="/dis-klinigi-reklam-ajansi" 
                className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB]/50 border border-[#E2E8F0] hover:border-[#446CB5]/40 transition-all group"
              >
                <strong className="text-xs font-bold text-[#16202E] group-hover:text-[#446CB5] block">
                  {isEn ? "Dental Treatments & Implants" : "Diş Kliniği & İmplant"}
                </strong>
                <span className="text-[11px] text-[#595F69] mt-1 block">
                  {isEn ? "All-on-4, veneers, NHS price contrast" : "All-on-4, gülüş tasarımı, NHS maliyet kıyası"}
                </span>
              </Link>

              <Link 
                to="/sac-ekimi-reklam-ajansi" 
                className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB]/50 border border-[#E2E8F0] hover:border-[#446CB5]/40 transition-all group"
              >
                <strong className="text-xs font-bold text-[#16202E] group-hover:text-[#446CB5] block">
                  {isEn ? "Hair Transplantation" : "Saç Ekimi Merkezleri"}
                </strong>
                <span className="text-[11px] text-[#595F69] mt-1 block">
                  {isEn ? "DHI, Sapphire FUE, graft transparency" : "Sapphire FUE, DHI, greft şeffaflığı ve kalite"}
                </span>
              </Link>

              <Link 
                to="/rinoplasti-reklam-ajansi" 
                className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB]/50 border border-[#E2E8F0] hover:border-[#446CB5]/40 transition-all group"
              >
                <strong className="text-xs font-bold text-[#16202E] group-hover:text-[#446CB5] block">
                  {isEn ? "Rhinoplasty & Plastic Surgery" : "Plastik & Estetik Cerrahi"}
                </strong>
                <span className="text-[11px] text-[#595F69] mt-1 block">
                  {isEn ? "Surgeon expertise, operating room safety" : "Cerrah otoritesi, rinoplasti, vücut şekillendirme"}
                </span>
              </Link>

              <Link 
                to="/tup-mide-reklam-ajansi" 
                className="p-3.5 rounded-2xl bg-[#F8FAFC] hover:bg-[#EEF3FB]/50 border border-[#E2E8F0] hover:border-[#446CB5]/40 transition-all group"
              >
                <strong className="text-xs font-bold text-[#16202E] group-hover:text-[#446CB5] block">
                  {isEn ? "Bariatric / Obesity Surgery" : "Obezite & Bariatrik Cerrahi"}
                </strong>
                <span className="text-[11px] text-[#595F69] mt-1 block">
                  {isEn ? "Tüp mide, BMI criteria, medical triage" : "Tüp mide, BMI kriterleri, ameliyat sonrası takip"}
                </span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #3: Yurt dışı hasta edinim sürecini nasıl kuruyoruz? */}
      {/* ------------------------------------------------------------- */}
      <section id="edinim-sureci" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5] mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{isEn ? "System Architecture" : "Sistem Mimarisi"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "How Do We Build the International Patient Acquisition System?" : "Yurt dışı hasta edinim sürecini nasıl kuruyoruz?"}
          </h2>
          <p className="text-base text-[#595F69] mt-3 leading-relaxed">
            {isEn
              ? "Acquiring international patients is not just about clicking 'Launch Ads'. It requires a cohesive 6-step loop bridging legal compliance, native user intent, and sales triage."
              : "Yurt dışından hasta edinmek sadece reklam paneline bütçe yüklemek değildir. Yasal yetki doğrulamasından açılış sayfasına, çok dilli CRM karşılama hızından net hasta kabulüne kadar 6 aşamalı kapalı devre bir sistem kuruyoruz."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: isEn ? "Target Market & Regulatory Audit" : "Pazar Araştırması & Yetki Kontrolü",
              desc: isEn 
                ? "We review provider licenses, analyze search intent in target countries, and assess local advertising restrictions."
                : "Kurumun yetki belgesini, hedef ülkedeki arama hacmini, rakip fiyatlandırmalarını ve mecra kurallarını inceleriz."
            },
            {
              step: "02",
              title: isEn ? "High-Converting Landing Pages" : "Mevzuata Uygun Açılış Sayfaları",
              desc: isEn 
                ? "We build ultra-fast, mobile-first pages in the patient's native language with clear clinical evidence and privacy controls."
                : "Hastanın ana dilinde, hekim güvenini ve ameliyathane standartlarını öne çıkaran, 3 saniyenin altında açılan sayfalar tasarlarız."
            },
            {
              step: "03",
              title: isEn ? "Multi-Channel High-Intent Ads" : "Çok Kanallı Reklam Kurgusu",
              desc: isEn 
                ? "Google Search capture high-intent medical queries, while Meta ads deliver visual social proof and clinical credibility."
                : "Google Ads ile aktif tedavi arayan niyetli hastaları, Meta Ads ile klinik güveni ve hasta deneyimini hedefleriz."
            },
            {
              step: "04",
              title: isEn ? "Dedicated WhatsApp CRM" : "Özel WhatsApp CRM Entegrasyonu",
              desc: isEn 
                ? "Every lead routes instantly into your coordinator panel with automatic language detection and source tracking."
                : "Gelen her başvuru saniyeler içinde satış ekibinin paneline düşer; ülkesine ve diline göre otomatik etiketlenir."
            },
            {
              step: "05",
              title: isEn ? "AI-Powered 24/7 Triage" : "Yapay Zekâ ile 7/24 Karşılama",
              desc: isEn 
                ? "Time-zone gaps are eliminated as AI assistants answer common FAQs in native languages and gather medical photos."
                : "Saat farkı olan ülkelerden gece gelen başvurular anında kendi dilinde karşılanır, ön tıbbi bilgi ve fotoğraflar toplanır."
            },
            {
              step: "06",
              title: isEn ? "Weekly Lead Quality & CPPA Optimization" : "Haftalık Nitelikli Başvuru Optimizasyonu",
              desc: isEn 
                ? "We analyze which ad groups actually converted into clinic arrivals, cutting wasted budget and scaling profitable segments."
                : "Hangi kampanyanın gerçekten tedaviye dönüştüğünü haftalık hasta kabul mutabakatıyla analiz ederek bütçeyi optimize ederiz."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-3">
              <span className="font-['Inter_Tight'] text-2xl font-black text-[#446CB5]">
                {item.step}
              </span>
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
                {item.title}
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #4: Kanallar: Google/Meta, SEO, GEO ve CRM */}
      {/* ------------------------------------------------------------- */}
      <section id="kanallar" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{isEn ? "Growth Channels" : "Büyüme Kanalları"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "Channels: Google/Meta, SEO, GEO, and CRM" : "Kanallar: Google/Meta, SEO, GEO ve CRM"}
          </h2>
          <p className="text-base text-[#595F69] mt-3 leading-relaxed">
            {isEn
              ? "No single channel carries a health tourism operation alone. We synchronize paid acquisition, organic AI visibility, and operational sales technology."
              : "Sağlık turizminde tek bir kanal üzerinden sürdürülebilir büyüme sağlanamaz. Reklam, organik görünürlük ve CRM operasyonunu birbiriyle konuşan tek bir büyüme sistemi olarak entegre ederiz."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-[#446CB5]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
                Google & Meta Ads
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Capturing active treatment queries via Google Ads and building visual clinical authority on Instagram & Facebook. Compliant targeting."
                  : "Google Arama Ağı'nda aktif tedavi arayan niyetli kitleye ulaşma; Meta Ads ile hekim otoritesini ve klinik güvenini görsel hikâyelerle sunma."}
              </p>
            </div>
            <Link 
              to="/hizmetler/performans-pazarlama" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#446CB5] hover:underline pt-2"
            >
              <span>{isEn ? "Inspect Ads Management" : "Reklam Yönetimini İncele"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] flex items-center justify-center">
                <Search className="w-5 h-5 text-[#446CB5]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
                {isEn ? "International SEO" : "Uluslararası SEO"}
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Organic ranking in target countries (Google.co.uk, Google.de) with localized search intent, multilingual hreflang, and medical E-E-A-T."
                  : "Hedef ülkenin yerel Google aramalarında (Google.co.uk, Google.de) kalıcı sıralama; çok dilli hreflang mimarisi ve E-E-A-T hekim otoritesi."}
              </p>
            </div>
            <Link 
              to="/saglik-turizmi-seo" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#446CB5] hover:underline pt-2"
            >
              <span>{isEn ? "Inspect SEO Service" : "SEO Hizmetini İncele"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#446CB5]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
                GEO (AI Search Visibility)
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Structuring digital entity authority so ChatGPT, Gemini, and Perplexity cite your clinic in organic conversational search results."
                  : "Klinik bilgilerinin erişilebilirliğini ve kaynak gösterilmeye uygunluğunu geliştirir; ChatGPT ve Gemini yanıtlarında alıntılanma payını artırırız."}
              </p>
            </div>
            <Link 
              to="/hizmetler/geo-generative-engine-optimization" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#446CB5] hover:underline pt-2"
            >
              <span>{isEn ? "Inspect GEO Strategy" : "GEO Hizmetini İncele"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] flex items-center justify-center">
                <Database className="w-5 h-5 text-[#446CB5]" />
              </div>
              <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
                WhatsApp & Özel CRM
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Enterprise healthcare CRM managing multi-currency quotes, automated 30/90 day patient re-engagement, and AI response triage."
                  : "Kişi başı lisans ücreti olmayan, çok dilli WhatsApp entegrasyonlu ve unutulan hasta adaylarını otomatik uyandıran sağlık turizmi CRM altyapısı."}
              </p>
            </div>
            <Link 
              to="/saglik-turizmi-crm" 
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#446CB5] hover:underline pt-2"
            >
              <span>{isEn ? "Inspect CRM Software" : "CRM Yazılımını İncele"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #5: Mevzuat ve platform uygunluğunu nasıl kontrol ediyoruz? */}
      {/* ------------------------------------------------------------- */}
      <section id="mevzuat-denetimi" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-white rounded-3xl border border-[#DDE2E8] p-8 sm:p-12 shadow-xs space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{isEn ? "Regulatory & Platform Verification" : "Yasal Mevzuat ve Platform Politikası"}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#16202E] tracking-tight">
              {isEn ? "How Do We Verify Regulatory and Platform Compliance?" : "Mevzuat ve platform uygunluğunu nasıl kontrol ediyoruz?"}
            </h2>
            <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
              {isEn
                ? "We do not offer generic or blanket compliance promises. Instead, for every campaign we verify the provider's authorization status, target country rules, creative assets, and landing page disclosures."
                : "Her kampanyada kuruluşun yetkisini, hedef ülkeyi, kreatifleri ve açılış sayfasını yürürlükteki kurallara göre kontrol ederek planlarız. 'Yurt dışına reklam verince hiçbir kural kalmaz' yanılgısına düşmeden, resmî düzenlemelere ve reklam platformlarının sağlık politikalarına tam uyumlu bir süreç işletiriz."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                {isEn ? "1. Turkish Ministry Regulation" : "1. Sağlık Bakanlığı Mevzuatı"}
              </div>
              <h3 className="font-['Inter_Tight'] text-sm font-bold text-[#16202E]">
                {isEn ? "2025/2026 Healthcare Promotion Rules" : "12 Kasım 2025 Tanıtım Yönetmeliği"}
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Verification of International Health Tourism Authorization Certificate, HealthTürkiye logo placement, and explicit patient consent protocols."
                  : "Uluslararası Sağlık Turizmi Yetki Belgesi, HealthTürkiye logosu ve kurumsal URL entegrasyonu; hasta yorumu ve görseli için ıslak/açık rıza kontrolü."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                {isEn ? "2. Target Country Authorities" : "2. Hedef Ülke Yerel Kuralları"}
              </div>
              <h3 className="font-['Inter_Tight'] text-sm font-bold text-[#16202E]">
                {isEn ? "UK ASA, German HWG & EU Standards" : "İngiltere ASA, Almanya HWG & AB"}
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Adhering to local advertising standards boards: avoiding deceptive treatment guarantees, false discount clocks, or unverified claims."
                  : "İngiltere'de Advertising Standards Authority (ASA), Almanya'da Heilmittelwerbegesetz (HWG) kurallarına göre yanıltıcı cerrahi vaatlerden kaçınma."}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5">
              <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                {isEn ? "3. Platform Ad Policies" : "3. Platform Reklam Politikaları"}
              </div>
              <h3 className="font-['Inter_Tight'] text-sm font-bold text-[#16202E]">
                Google, Meta & OpenAI Policy
              </h3>
              <p className="text-xs text-[#595F69] leading-relaxed">
                {isEn
                  ? "Navigating Google Healthcare Policy and Meta Personal Health guidelines. Clear awareness that medical procedures are disallowed on ChatGPT Ads."
                  : "Google Sağlık Politikası ve Meta Kişisel Sağlık kriterleri. Tıbbi işlemlerin ChatGPT Ads'te izin dışı olduğunu bilerek doğru mecra seçimi."}
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-[#EEF2F6] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-[#595F69]">
              {isEn
                ? "Explore our complete 2026 legal guide covering Turkish Ministry rules, authorization classes, and advertising checklists."
                : "2026 sağlık turizmi tanıtım yönetmeliği, yetki belgesi şartları ve yasal kontrol matrisini detaylı inceleyin:"}
            </p>
            <Link
              to="/blog/saglik-turizmi-reklam-mevzuati-2026"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#EEF3FB] hover:bg-[#DDE8F8] text-xs font-bold text-[#446CB5] transition-colors shrink-0"
            >
              <span>{isEn ? "Read 2026 Regulations Guide" : "2026 Tanıtım Mevzuatı Rehberini Oku"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #6: Hangi metrikleri raporluyoruz? (Somut Unsur Tablosu) */}
      {/* ------------------------------------------------------------- */}
      <section id="metrikler" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5] mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{isEn ? "Funnel Analytics & Transparency" : "Hunisi & Ölçüm Modeli"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "Which Metrics Do We Report?" : "Hangi metrikleri raporluyoruz?"}
          </h2>
          <p className="text-base text-[#595F69] mt-3 leading-relaxed">
            {isEn
              ? "We break down international patient acquisition into verifiable stages: Impression → Lead → Answered Lead → Clinical Evaluation → Appointment → Arrived Patient. Every stage has an explicit measurement tool and clear boundary."
              : "Ajans ve klinik arasındaki en büyük güven sorunu belirsiz raporlamadır. Overseas Marketing olarak gösterimden fiziksel klinik kabulüne kadar 6 aşamalı dönüşüm hunisini şeffafça tanımlar; ölçtüğümüz ve kliniğin veri paylaşımıyla ölçebileceğimiz alanları net biçimde ayırırız."}
          </p>
        </div>

        {/* Somut Dönüşüm Hunisi Tablosu */}
        <div className="overflow-x-auto rounded-3xl border border-[#DDE2E8] bg-white shadow-xs">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-[#16202E] text-white">
                <th className="py-4 px-5 font-semibold">{isEn ? "Funnel Stage" : "Huni Aşaması"}</th>
                <th className="py-4 px-5 font-semibold">{isEn ? "Metric & Operational Definition" : "Metrik & Operasyonel Tanım"}</th>
                <th className="py-4 px-5 font-semibold">{isEn ? "Tracking Tool / Source" : "Ölçüm Aracı / Kaynak"}</th>
                <th className="py-4 px-5 font-semibold">{isEn ? "Measurement Status" : "Ölçüm Durumu"}</th>
                <th className="py-4 px-5 font-semibold">{isEn ? "Responsibility Allocation" : "Sorumluluk Paylaşımı"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EEF2F6]">
              {funnelSteps.map((step, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                  <td className="py-4 px-5 font-bold text-[#16202E] whitespace-nowrap">
                    {step.stage}
                  </td>
                  <td className="py-4 px-5 text-[#334155] max-w-xs sm:max-w-sm leading-relaxed">
                    {step.definition}
                  </td>
                  <td className="py-4 px-5 font-mono text-xs text-[#475569] whitespace-nowrap">
                    {step.tool}
                  </td>
                  <td className="py-4 px-5 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold border ${step.statusColor}`}>
                      {step.status}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-xs text-[#595F69] whitespace-nowrap">
                    {step.responsibility}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 rounded-2xl bg-[#EEF3FB]/50 border border-[#446CB5]/20 text-xs text-[#595F69] flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-[#446CB5] shrink-0 mt-0.5" />
          <span>
            {isEn
              ? "Notice on Financial Metrics: Stages 1 through 3 are tracked directly via agency marketing pipelines. Stages 4 through 6 require clinic CRM status updates or mutually audited booking data to calculate actual Cost Per Patient Acquired (CPPA)."
              : "Önemli Not: 1, 2 ve 3. aşamalar ajans pazarlama altyapımız tarafından anlık ve bağımsız olarak ölçülür. 4, 5 ve 6. aşamalardaki net hasta maliyetini (CPPA) hesaplayabilmemiz için kliniğin hasta koordinatörlerinin CRM panelinde randevu ve kabul durumlarını düzenli işlemesi gerekir."}
          </span>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #7: Örnek süreç / doğrulanabilir referanslar */}
      {/* ------------------------------------------------------------- */}
      <section id="ornek-surec" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5] mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{isEn ? "Verifiable Case Studies & Evidence" : "Doğrulanabilir Vaka Örnekleri"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "Sample Processes & Verifiable References" : "Örnek süreç / doğrulanabilir referanslar"}
          </h2>
          <p className="text-base text-[#595F69] mt-3 leading-relaxed">
            {isEn
              ? "We reject fabricated numbers or exaggerated claims. Below are anonymized operational workflows and performance records verified with our medical clinic partners."
              : "Uydurma başarı oranları veya sahte ekran görüntüleri paylaşmıyoruz. Anlaşmalı kliniklerimizle yürüttüğümüz, hasta gizliliğine ve KVKK'ya uygun biçimde anonimleştirilmiş gerçek kampanya süreçlerini incelenebilir kılıyoruz."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#446CB5]">
              {isEn ? "Dental Clinic Case" : "İngiltere Diş Kliniği Süreci"}
            </div>
            <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
              {isEn ? "UK Patient Acquisition Workflow" : "İngiltere'den Hasta Kabul Kurgusu"}
            </h3>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn
                ? "Targeting London and Manchester users searching for 'All on 4 dental implants Turkey'. WhatsApp triage time reduced to 3 minutes, achieving verifiable patient admissions."
                : "Londra ve Manchester'da 'All on 4 dental implants Turkey' aramalarına özel açılış sayfası, anlık WhatsApp karşılama ve NHS fiyat karşılaştırma tablosuyla kurgulanan 90 günlük büyüme."}
            </p>
            <div className="pt-2">
              <Link 
                to="/basari-hikayeleri" 
                className="text-xs font-bold text-[#446CB5] hover:underline flex items-center gap-1"
              >
                <span>{isEn ? "Read Case Study" : "Vaka Analizini İncele"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#446CB5]">
              {isEn ? "Hair Transplant Case" : "Almanya Saç Ekimi Süreci"}
            </div>
            <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
              {isEn ? "DACH Physician Trust Positioning" : "Almanya ve İsviçre Hekim Otoritesi"}
            </h3>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn
                ? "Native German video creatives addressing Sapphire FUE technique, doctor involvement, and post-op follow-up guarantees, reducing unqualified lead waste."
                : "Almanca arama niyetine uygun, cerrahın operasyondaki rolünü ve steril ameliyathane standartlarını anlatan video kurgularla niteliksiz lead oranını %40 azaltan yapı."}
            </p>
            <div className="pt-2">
              <Link 
                to="/basari-hikayeleri" 
                className="text-xs font-bold text-[#446CB5] hover:underline flex items-center gap-1"
              >
                <span>{isEn ? "Read Case Study" : "Vaka Analizini İncele"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs space-y-4">
            <div className="text-[11px] font-bold uppercase tracking-wider text-[#446CB5]">
              {isEn ? "Hospital Group Case" : "Özel Hastane Çok Branşlı Süreç"}
            </div>
            <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E]">
              {isEn ? "Multi-Branch Patient Routing" : "Çok Dilli Çağrı Merkezi Entegrasyonu"}
            </h3>
            <p className="text-xs text-[#595F69] leading-relaxed">
              {isEn
                ? "Bariatric, orthopedic, and plastic surgery leads categorized automatically by language and routed to specialized coordinators with CRM automation."
                : "Obezite, ortopedi ve estetik cerrahi başvurularının tek bir CRM'de dil ve ülkeye göre ayrıştırılıp ilgili medikal koordinatöre saniyeler içinde atanması."}
            </p>
            <div className="pt-2">
              <Link 
                to="/referanslar" 
                className="text-xs font-bold text-[#446CB5] hover:underline flex items-center gap-1"
              >
                <span>{isEn ? "View References" : "Referanslarımızı Görün"}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* H2 #8: Sık sorular */}
      {/* ------------------------------------------------------------- */}
      <section id="sik-sorular" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isEn ? "Frequently Asked Questions" : "Sıkça Sorulan Sorular"}</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight">
            {isEn ? "Frequently Asked Questions" : "Sık sorular"}
          </h2>
          <p className="text-sm text-[#595F69]">
            {isEn
              ? "Direct answers to key business, legal, and operational questions asked by healthcare executives."
              : "Klinik yöneticilerinin ve hekimlerin reklam yönetimi, bütçe ve mevzuat hakkında en çok merak ettiği sorular."}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className="rounded-2xl border border-[#DDE2E8] bg-white overflow-hidden transition-all shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#F8FAFC] transition-colors cursor-pointer"
              >
                <span className="font-['Inter_Tight'] text-sm sm:text-base font-bold text-[#16202E]">
                  {faq.q}
                </span>
                <ChevronDown className={`w-4 h-4 text-[#446CB5] shrink-0 transition-transform duration-200 ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#EEF2F6]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-[#16202E] to-[#253852] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-['Inter_Tight'] text-xl font-bold">
              {isEn 
                ? "Evaluate Your Clinic's Authorization, Market & Channel Eligibility" 
                : "Kliniğinizin Yetki, Hedef Ülke ve Kanal Uygunluğunu Değerlendirelim"}
            </h3>
            <p className="text-xs text-slate-300 max-w-lg leading-relaxed">
              {isEn
                ? "Book a 30-minute strategic review to discuss target markets, compliance parameters, and dedicated patient acquisition funnels."
                : "Hedef pazar analizi, reklam mecraları ve mevzuat uygunluğu için 30 dakikalık büyüme görüşmesi planlayın."}
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-bold transition-all shadow-lg shadow-[#446CB5]/30 cursor-pointer shrink-0"
          >
            {isEn ? "Request Strategy Consultation" : "Hedef Pazar Analizi İste"}
          </button>
        </div>

      </section>

    </div>
  );
};
