import React from 'react';
import { 
  UserCheck, 
  ArrowRight, 
  ShieldCheck, 
  Search, 
  Sparkles, 
  TrendingUp,
  MessageSquareHeart
} from 'lucide-react';

interface DoctorBrandingSectionProps {
  onNavigateDoctorBranding: () => void;
  onOpenConsultation: () => void;
}

export const DoctorBrandingSection: React.FC<DoctorBrandingSectionProps> = ({ 
  onNavigateDoctorBranding,
  onOpenConsultation 
}) => {
  return (
    <section id="doktor-marka-yonetimi" className="py-20 lg:py-24 bg-gradient-to-b from-[#F8FAFC] via-[#EEF3FB]/40 to-[#F8FAFC] border-b border-[#DDE2E8] text-left relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#446CB5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#35558F]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5]">
            <UserCheck className="w-4 h-4 text-[#446CB5]" />
            <span>Özel Hizmet Alanı</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight leading-tight">
            Doktor Marka Yönetimi: <span className="text-[#446CB5]">Hasta Önce Doktoru Satın Alır</span>
          </h2>

          <p className="text-base sm:text-lg text-[#595F69] leading-relaxed">
            Sağlık turizminde iyi bir reklam hastanın sizi fark etmesini sağlar. Ancak hastanın size güvenmesini sağlayan şey reklamın kendisi değildir. Profilinize giren hasta kim olduğunuzu, tecrübenizi, hasta yorumlarınızı ve yapay zeka & Google görünürlüğünüzü araştırır.
          </p>
        </div>

        {/* Feature Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual Representation */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#DDE2E8] shadow-lg bg-white group transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img 
                  src="/images/doctor_brand_hero.jpg" 
                  alt="Doktor Marka Yönetimi Dijital Profil ve Güven Sistemi"
                  className="w-full h-auto object-cover max-h-[380px] transition-transform duration-500 group-hover:scale-102" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16202E]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#60A5FA]">
                      <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                      <span>Kişisel Dijital Kimlik & İtibar</span>
                    </div>
                    <p className="font-['Inter_Tight'] font-bold text-lg text-white">
                      Doktorunuzun Uzmanlığını Güçlü Bir Markaya Dönüştürüyoruz
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                Neden Doktor Marka Yönetimi Şart?
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-[#DDE2E8] space-y-2 shadow-xs hover:border-[#446CB5]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#222222]">
                    <Sparkles className="w-4 h-4 text-[#446CB5]" />
                    <span>Güven Odaklı Profil</span>
                  </div>
                  <p className="text-xs text-[#595F69] leading-relaxed">
                    Instagram & Google profillerinizi uluslararası hastanın kararını kolaylaştıracak içerik yapısına kavuşturuyoruz.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#DDE2E8] space-y-2 shadow-xs hover:border-[#446CB5]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#222222]">
                    <Search className="w-4 h-4 text-[#446CB5]" />
                    <span>SEO & GEO Görünürlüğü</span>
                  </div>
                  <p className="text-xs text-[#595F69] leading-relaxed">
                    Google aramalarında ve ChatGPT / Gemini yapay zeka sorgularında doktorunuzun dijital uzmanlık sinyallerini öne çıkarıyoruz.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#DDE2E8] space-y-2 shadow-xs hover:border-[#446CB5]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#222222]">
                    <TrendingUp className="w-4 h-4 text-[#446CB5]" />
                    <span>Yüksek Reklam Dönüşümü</span>
                  </div>
                  <p className="text-xs text-[#595F69] leading-relaxed">
                    Hasta doktoru önceden tanıyarak iletişime geçer, satış ekibinin sıfırdan güven inşa etme yükü hafifler.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#DDE2E8] space-y-2 shadow-xs hover:border-[#446CB5]/40 transition-colors">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#222222]">
                    <MessageSquareHeart className="w-4 h-4 text-[#446CB5]" />
                    <span>Hasta Deneyimi & İtibar</span>
                  </div>
                  <p className="text-xs text-[#595F69] leading-relaxed">
                    Gerçek hasta yorumlarını, video deneyimlerini ve başarı hikayelerini şeffaf ve etki odaklı şekilde konumlandırıyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onNavigateDoctorBranding}
                className="px-6 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md group"
              >
                <span>Doktor Marka Yönetimi Detaylarını İnceleyin</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="px-5 py-3.5 rounded-xl bg-white border border-[#DDE2E8] hover:bg-[#EEF3FB] text-[#222222] text-sm font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Strateji Görüşmesi Alın</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
