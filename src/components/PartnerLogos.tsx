import React from 'react';

export const PartnerLogos: React.FC = () => {
  const PARTNER_LOGOS = [
    {
      name: 'Google Partner',
      src: '/logolar/google-partner-logo.png',
      alt: 'Google Partner'
    },
    {
      name: 'Meta Business Partner',
      src: '/logolar/meta-partner-logo-84.png',
      alt: 'Meta Business Partner'
    },
    {
      name: 'LinkedIn Marketing Partner',
      src: '/logolar/linkedin ads partner.png',
      alt: 'LinkedIn Certified Marketing Partner'
    },
    {
      name: 'Yandex Partner',
      src: '/logolar/yandex-partner-logosdsddss.png',
      alt: 'Yandex Partner'
    },
    {
      name: 'TikTok Ads Partner',
      src: '/logolar/tiktok-ads-partner.png',
      alt: 'TikTok Ads Partner'
    }
  ];

  return (
    <section className="py-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Dark Partner Capsule Container */}
        <div className="relative rounded-3xl bg-[#16202E] border border-slate-700/80 shadow-2xl p-5 sm:p-7 overflow-hidden flex items-center justify-center">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-28 bg-[#446CB5]/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-28 bg-[#60A5FA]/15 rounded-full blur-2xl pointer-events-none" />

          {/* Partner Badges Row - Clean PNGs from logolar folder */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 w-full py-1">
            {PARTNER_LOGOS.map((logo, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-8 sm:h-9 md:h-10 w-auto object-contain max-w-[150px] sm:max-w-[170px]"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
