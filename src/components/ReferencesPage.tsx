import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, Building2, Stethoscope, Star } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface ReferencesPageProps {
  onOpenConsultation: () => void;
}

export const ReferencesPage: React.FC<ReferencesPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  const REFERENCE_LOGOS = [
    { id: '1', src: '/referanslar/1-663cc1a6a52c1.webp', alt: 'Referans Klinik 1', specialty: isEn ? 'Dental Clinic' : 'Diş Kliniği' },
    { id: '2', src: '/referanslar/2-663cc1a57c365.webp', alt: 'Referans Klinik 2', specialty: isEn ? 'Hair Transplant' : 'Saç Ekimi' },
    { id: '3', src: '/referanslar/3-663cc1a742b79.webp', alt: 'Referans Klinik 3', specialty: isEn ? 'Plastic Surgery' : 'Plastik Cerrahi' },
    { id: '4', src: '/referanslar/4-663cc1a842b62.webp', alt: 'Referans Klinik 4', specialty: isEn ? 'Aesthetic Medicine' : 'Medikal Estetik' },
    { id: '5', src: '/referanslar/5-663cc1a8a1e5c.webp', alt: 'Referans Klinik 5', specialty: isEn ? 'Bariatric Surgery' : 'Obezite Cerrahisi' },
    { id: '6', src: '/referanslar/6-663cc1a9bb6ba.webp', alt: 'Referans Klinik 6', specialty: isEn ? 'Eye Hospital' : 'Göz Hastanesi' },
    { id: '7', src: '/referanslar/7-663cc1aa15847.webp', alt: 'Referans Klinik 7', specialty: isEn ? 'General Hospital' : 'A+ Hastane' },
    { id: '8', src: '/referanslar/8-663cc1aae2590.webp', alt: 'Referans Klinik 8', specialty: isEn ? 'IVF Center' : 'Tüp Bebek Merkezi' },
    { id: '9', src: '/referanslar/9-663cc1ab95922.webp', alt: 'Referans Klinik 9', specialty: isEn ? 'Orthopedics' : 'Ortopedi Cerrahisi' },
    { id: '10', src: '/referanslar/10-663cc1aca0ee2.webp', alt: 'Referans Klinik 10', specialty: isEn ? 'Dental Tourism' : 'Dental Turizm' },
    { id: '11', src: '/referanslar/11-663cc1ad20881.webp', alt: 'Referans Klinik 11', specialty: isEn ? 'Hair Restoration' : 'Saç Restorasyonu' },
    { id: '12', src: '/referanslar/12-663cc1ae6444c.webp', alt: 'Referans Klinik 12', specialty: isEn ? 'Aesthetic Clinic' : 'Estetik Kliniği' },
    { id: '13', src: '/referanslar/13-663cc1afb0f3d.webp', alt: 'Referans Klinik 13', specialty: isEn ? 'Facilitator' : 'Yetkili Aracı Kurum' },
    { id: '14', src: '/referanslar/14-663cc1b005271.webp', alt: 'Referans Klinik 14', specialty: isEn ? 'Specialist Physician' : 'Hekim Muayenehanesi' }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Client References & Healthcare Partners | Overseas Marketing" : "Referanslarımız ve Sağlık Kuruluşları | Overseas Marketing"}
        description={isEn
          ? "Explore verified healthcare institutions, clinics, and hospitals scaling international patient acquisition with Overseas Marketing."
          : "Overseas Marketing ile uluslararası hasta edinimini büyüten doğrulanabilir klinik, hastane ve hekim referansları."}
        canonicalUrl="https://www.overseas.marketing/referanslar"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <Award className="w-3.5 h-3.5" />
          <span>{isEn ? "Healthcare Partnerships" : "Sağlık Markası Referansları"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Verified healthcare providers scaling with <span className="text-[#446CB5]">Overseas Marketing</span>.</>
          ) : (
            <>Birlikte büyüdüğümüz <span className="text-[#446CB5]">sağlık kuruluşları ve klinikler</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "We partner with authorized dental clinics, hair transplant centers, aesthetic surgeons, and hospitals across Turkey to drive verifiable, high-intent international patient inquiries."
            : "Türkiye'nin yetkili diş klinikleri, saç ekim merkezleri, estetik cerrahları ve genel hastaneleri ile çalışıyor; İngiltere ve Avrupa'dan sürdürülebilir yabancı hasta başvuruları üretiyoruz."}
        </p>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {REFERENCE_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="p-6 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-between h-48 group text-center"
            >
              <div className="flex-1 flex items-center justify-center w-full">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                  decoding="async"
                  className="max-h-16 w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="pt-3 border-t border-slate-100 w-full">
                <span className="text-xs font-semibold text-[#595F69]">
                  {logo.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Verification Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="p-8 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20 flex flex-col md:flex-row items-center gap-6 justify-between">
          <div className="space-y-2 max-w-2xl">
            <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#446CB5]" />
              <span>{isEn ? "Confidentiality & Privacy Standards" : "Gizlilik ve Veri Güvenliği Standardı"}</span>
            </h3>
            <p className="text-sm text-[#595F69] leading-relaxed">
              {isEn
                ? "Healthcare institution data and patient metrics are strictly protected under confidentiality agreements and KVKK/GDPR standards. Case studies reflect aggregated or anonymized verified figures."
                : "Çalıştığımız sağlık kurumlarının hasta verileri, bütçe detayları ve ticari metrikleri gizlilik sözleşmeleri ve KVKK/GDPR kapsamında korunmaktadır. Vaka analizlerimizde doğrulanabilir ölçüm prensipleri esas alınır."}
            </p>
          </div>
          <Link
            to="/basari-hikayeleri"
            className="px-6 py-3 rounded-xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] text-[#16202E] font-bold text-sm transition-colors shrink-0 flex items-center gap-2"
          >
            <span>{isEn ? "View Case Studies" : "Vaka Analizlerini İncele"}</span>
            <ArrowRight className="w-4 h-4 text-[#446CB5]" />
          </Link>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn ? "Join our portfolio of growing healthcare brands" : "Siz de uluslararası hasta kazanan markalar arasına katılın"}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn ? "Let's review your target countries and estimate your cost-per-lead potential." : "Kliniğinizin hedef pazarlarını birlikte belirleyelim ve tahmini lead maliyetlerinizi hesaplayalım."}
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 inline-flex items-center gap-2"
          >
            <span>{isEn ? "Get Custom Proposal" : "Kliniğinize Özel Teklif Alın"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
