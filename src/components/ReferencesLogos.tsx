import React from 'react';
import { Award } from 'lucide-react';

export const ReferencesLogos: React.FC = () => {
  // 14 webp logo files from public/referanslar/
  const REFERENCE_LOGOS = [
    { id: '1', src: '/referanslar/1-663cc1a6a52c1.webp', alt: 'Referans Klinik 1' },
    { id: '2', src: '/referanslar/2-663cc1a57c365.webp', alt: 'Referans Klinik 2' },
    { id: '3', src: '/referanslar/3-663cc1a742b79.webp', alt: 'Referans Klinik 3' },
    { id: '4', src: '/referanslar/4-663cc1a842b62.webp', alt: 'Referans Klinik 4' },
    { id: '5', src: '/referanslar/5-663cc1a8a1e5c.webp', alt: 'Referans Klinik 5' },
    { id: '6', src: '/referanslar/6-663cc1a9bb6ba.webp', alt: 'Referans Klinik 6' },
    { id: '7', src: '/referanslar/7-663cc1aa15847.webp', alt: 'Referans Klinik 7' },
    { id: '8', src: '/referanslar/8-663cc1aae2590.webp', alt: 'Referans Klinik 8' },
    { id: '9', src: '/referanslar/9-663cc1ab95922.webp', alt: 'Referans Klinik 9' },
    { id: '10', src: '/referanslar/10-663cc1aca0ee2.webp', alt: 'Referans Klinik 10' },
    { id: '11', src: '/referanslar/11-663cc1ad20881.webp', alt: 'Referans Klinik 11' },
    { id: '12', src: '/referanslar/12-663cc1ae6444c.webp', alt: 'Referans Klinik 12' },
    { id: '13', src: '/referanslar/13-663cc1afb0f3d.webp', alt: 'Referans Klinik 13' },
    { id: '14', src: '/referanslar/14-663cc1b005271.webp', alt: 'Referans Klinik 14' }
  ];

  return (
    <section id="vaka-calismalari" className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-[#DDE2E8] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] shadow-xs">
            <Award className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>Sağlık Kuruluşu Referanslarımız</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Birlikte büyüdüğümüz <span className="text-[#446CB5]">sağlık markaları</span>
          </h2>
          <p className="text-sm sm:text-base text-[#595F69]">
            Uluslararası pazarlarda hasta edinimi, CRM ve dijital görünürlük operasyonlarını yürüttüğümüz kliniğe özel referanslarımız.
          </p>
        </div>

        {/* Client Logos Grid - Large, Pure White Card Seamless Fit */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {REFERENCE_LOGOS.map((logo) => (
            <div
              key={logo.id}
              className="p-4 sm:p-5 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-xl transition-all duration-300 flex items-center justify-center h-32 sm:h-36 group overflow-hidden"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-2 mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
