import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeartHandshake, 
  ShieldCheck, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Globe2,
  Cpu,
  Layers,
  Users,
  CheckCircle2,
  Building2
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  const values = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "E-E-A-T & Regulatory Compliance" : "Mevzuat ve Tanıtım İlkelerine Uyum",
      desc: isEn 
        ? "We strictly adhere to Turkish healthcare advertising regulations (Law No. 1219, Law No. 3359) and target country guidelines. We never use unverified medical promises or guarantee patient volumes." 
        : "Sağlık Bakanlığı tanıtım yönetmeliklerine (1219 sayılı Kanun, 3359 sayılı Kanun) ve hedef ülke reklam kurallarına tam uyumla çalışırız. Kanıtsız üstünlük, tıbbi garanti veya yanıltıcı vaatlerden uzak dururuz."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Holistic Growth Infrastructure" : "Bütünsel Büyüme Altyapısı",
      desc: isEn
        ? "We integrate high-intent paid search (Google & Meta Ads) with proprietary CRM funnels and AI call agents to eliminate lead leakage."
        : "Google Ads ve Meta reklamlarını özel WhatsApp CRM ve sesli yapay zekâ asistanlarıyla birleştirerek reklamdan ilk temasa uzanan süreçte kayıp lead oranını en aza indiriyoruz."
    },
    {
      icon: <Globe2 className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Target Market Cultural Localization" : "Hedef Pazar ve Kültürel Yerelleştirme",
      desc: isEn
        ? "Copywriting and patient journeys crafted natively for the UK, DACH (Germany, Austria, Switzerland), France, Netherlands, and GCC markets."
        : "İngiltere, Almanya, Fransa, Hollanda ve Körfez pazarlarında doğrudan ana dilinde, kültürel hassasiyetleri gözeten hasta iletişimi."
    },
    {
      icon: <Award className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Transparent & Verifiable Reporting" : "Şeffaf ve Ölçülebilir Raporlama",
      desc: isEn
        ? "True performance attribution: Cost per qualified lead (CPL), scheduled consultations, and end-to-end revenue contribution."
        : "Nitelikli hasta başvuru maliyeti (CPL), randevu gerçekleşme oranları ve net tedavi dönüşümü üzerinden şeffaf raporlama."
    }
  ];

  const whoWeWorkWith = [
    {
      title: isEn ? "Private Clinics & Polyclinics" : "Özel Klinikler ve Poliklinikler",
      desc: isEn ? "Dental, hair restoration, plastic surgery, and medical aesthetic clinics scaling abroad." : "Dental turizm, saç ekimi, plastik cerrahi ve medikal estetik alanında yurtdışından hasta kabul eden klinikler."
    },
    {
      title: isEn ? "Independent Physicians & Practices" : "Hekim Muayenehaneleri",
      desc: isEn ? "Surgeons and specialists building personal brand authority and international patient flow." : "Kendi muayenehanesinde uluslararası hasta kabul eden, E-E-A-T ve dijital itibarını büyütmek isteyen hekimler."
    },
    {
      title: isEn ? "Hospitals & Healthcare Groups" : "Hastaneler ve Sağlık Grupları",
      desc: isEn ? "Multispecialty hospitals managing cross-border patient acquisition and insurance workflows." : "Onkoloji, kardiyoloji, obezite ve ileri cerrahi branşlarda yabancı hasta kabul eden A+ hastaneler."
    },
    {
      title: isEn ? "Licensed Health Tourism Agencies" : "Yetkili Aracı Kuruluşlar",
      desc: isEn ? "Ministry of Health authorized healthcare facilitators managing multilingual patient pipelines." : "Sağlık Bakanlığı yetki belgesine sahip, çok dilli hasta operasyonunu dijitalleştirmek isteyen aracı kurumlar."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "About Us | Overseas Marketing Health Tourism Agency" : "Overseas Marketing Hakkında | Sağlık Turizmi Reklam ve Büyüme Ajansı"}
        description={isEn
          ? "Overseas Marketing is a digital growth agency specializing in medical tourism marketing, SEO/GEO, CRM, and patient acquisition for clinics, doctors, and hospitals."
          : "Overseas Marketing; sağlık turizminde klinik, doktor ve hastaneler için uluslararası hasta kazanımı, reklam yönetimi, SEO, GEO ve CRM altyapısı kuran dijital büyüme ajansıdır."}
        canonicalUrl="https://www.overseas.marketing/hakkimizda"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>{isEn ? "About Overseas Marketing" : "Overseas Marketing Hakkında"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Engineering <span className="text-[#446CB5]">sustainable international patient growth</span> for healthcare organizations.</>
          ) : (
            <>Sağlık kuruluşları için <span className="text-[#446CB5]">sürdürülebilir uluslararası hasta kazanım</span> altyapısı kuruyoruz.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Overseas Marketing is a specialized digital marketing and technology agency focused exclusively on medical tourism and cross-border healthcare growth. We design the entire patient acquisition pipeline from paid advertising to first contact, sales follow-up, and performance analytics."
            : "Overseas Marketing, sağlık turizmi ve uluslararası büyüme alanlarına odaklanan bir dijital pazarlama ve teknoloji ajansıdır. Klinikler, doktorlar, hastaneler ve sağlık turizmi şirketleri için hasta kazanımının reklamdan ilk temasa, satış takibinden raporlamaya kadar uzanan dijital altyapısını tasarlar."}
        </p>
      </section>

      {/* Explicit Regulatory / Entity Distinction Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#446CB5] mb-2">
            {isEn ? "Agency Identity & Regulatory Clarity" : "Kurumsal Kimlik ve Yasal Tanıtım Sınırları"}
          </h2>
          <p className="text-base text-[#16202E] font-medium leading-relaxed mb-4">
            {isEn
              ? "Overseas Marketing is a digital growth and technology agency. We do not provide medical services, clinical treatments, or patient guarantees. Our mission is to provide healthcare organizations with transparent marketing strategies, software infrastructure, and international patient acquisition consulting in full compliance with advertising regulations."
              : "Ajansın çalışma modeli; performans pazarlama, uluslararası SEO, üretken yapay zekâ aramalarına yönelik GEO, dönüşüm odaklı web geliştirme, CRM ve yapay zekâ otomasyonlarını aynı büyüme hedefi etrafında birleştirir. Overseas Marketing sağlık hizmeti vermez; sağlık kuruluşlarına pazarlama, yazılım ve büyüme danışmanlığı sağlar."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#446CB5]/20 text-xs sm:text-sm text-[#595F69]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#446CB5] shrink-0" />
              <span>Sağlık Bakanlığı Mevzuatına Uyum</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#446CB5] shrink-0" />
              <span>KVKK & GDPR Standartlarında Veri Güvenliği</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#446CB5] shrink-0" />
              <span>Uluslararası Arama ve GEO Uyumu</span>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
            {isEn ? "Who We Partner With" : "Hangi Kuruluş Türleriyle Çalışıyoruz?"}
          </h2>
          <p className="text-[#595F69] mt-2">
            {isEn ? "Tailored growth frameworks for every healthcare tier." : "Her sağlık kuruluşu segmenti için özelleştirilmiş büyüme modelleri."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeWorkWith.map((item, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 text-[#446CB5]">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Principles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
            {isEn ? "Our Operational Principles" : "Temel Çalışma Yaklaşımımız ve İlkelerimiz"}
          </h2>
          <p className="text-[#595F69] mt-2">
            {isEn ? "Ethical, data-driven, and sustainable growth." : "Etik, veri odaklı ve sürdürülebilir büyüme ilkeleri."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF3FB] flex items-center justify-center mb-6">
                {v.icon}
              </div>
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] mb-3">
                {v.title}
              </h3>
              <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn 
              ? "Ready to scale your international patient acquisition?" 
              : "Kliniğinizin uluslararası büyüme altyapısını birlikte değerlendirelim."}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn 
              ? "Schedule a confidential strategy session with our healthcare marketing practitioners." 
              : "Sağlık turizmi büyüme stratejistlerimizle reklam, SEO, GEO ve CRM süreçlerinizi değerlendirin."}
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={onOpenConsultation}
              className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 flex items-center gap-2"
            >
              <span>{isEn ? "Schedule Strategy Call" : "Strateji Görüşmesi Planla"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/iletisim"
              className="px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base transition-colors"
            >
              {isEn ? "Contact Details" : "İletişim Bilgileri"}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
