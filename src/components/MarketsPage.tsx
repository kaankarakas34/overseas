import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe2, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';
import { MASTER_MARKETS } from '../data/masterPlanData';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface MarketsPageProps {
  onOpenConsultation: () => void;
}

export const MarketsPage: React.FC<MarketsPageProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();

  const additionalMarkets = [
    {
      countryName: isEn ? "Italy & Southern Europe" : "İtalya ve Güney Avrupa",
      flagEmoji: "🇮🇹",
      slug: "sac-ekimi-reklam-ajansi",
      desc: isEn 
        ? "High hair restoration and dental tourism intent from Rome and Milan with native Italian coordinators."
        : "Roma ve Milano odaklı saç ekimi ve dental turizm talebi; İtalyanca hasta iletişim altyapısı.",
      status: isEn ? "High Yield Market" : "Yüksek Talep Pazarı"
    },
    {
      countryName: isEn ? "Spain & Iberia" : "İspanya ve İberya Pazarı",
      flagEmoji: "🇪🇸",
      slug: "sac-ekimi-reklam-ajansi",
      desc: isEn
        ? "Madrid and Barcelona hair transplant inquiries with Spanish ad creatives and WhatsApp consultation."
        : "Madrid ve Barselona saç ekimi aramaları için İspanyolca kreatif ve WhatsApp konsültasyon kurgusu.",
      status: isEn ? "Active Medical Corridor" : "Aktif Sağlık Koridoru"
    },
    {
      countryName: isEn ? "Gulf Cooperation Council (GCC)" : "Körfez Ülkeleri (BAE, Suudi Arabistan)",
      flagEmoji: "🇦🇪",
      slug: "hastane-reklam-ajansi",
      desc: isEn
        ? "High-ticket aesthetic, robotic surgery, and executive health checkup packages with Arabic concierge support."
        : "Yüksek bütçeli estetik cerrahi, robotik ameliyatlar ve check-up paketleri için Arapça konsiyerj modeli.",
      status: isEn ? "VIP Patient Segment" : "VIP Hasta Segmenti"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Target Countries & International Medical Markets | Overseas Marketing" : "Hedef Ülkeler ve Uluslararası Sağlık Turizmi Pazarları | Overseas Marketing"}
        description={isEn
          ? "Explore top medical tourism target markets: UK, Germany, France, Netherlands, and GCC with localized patient acquisition strategies."
          : "İngiltere, Almanya, Fransa, Hollanda ve Körfez pazarlarında sağlık turizmi reklam yönetimi, hasta profilleri ve pazar dinamikleri rehberi."}
        canonicalUrl="https://www.overseas.marketing/ulkeler"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <Globe2 className="w-3.5 h-3.5" />
          <span>{isEn ? "Cross-Border Market Intelligence" : "Hedef Pazar Merkezi"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Targeting high-purchasing power patients in <span className="text-[#446CB5]">Europe & the UK</span>.</>
          ) : (
            <>Avrupa ve Birleşik Krallık'ta <span className="text-[#446CB5]">yüksek satın alma gücüne sahip hastalar</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Every country has distinct healthcare insurance waiting times, currency dynamics, and trust barriers. Discover our proven target market strategies for the UK, DACH, and Benelux."
            : "İngiltere NHS bekleme süreleri, Alman JCI akreditasyon beklentisi, Fransızca dil hassasiyeti... Her pazarın hasta arama niyetini ve güven dinamiklerini yerinde analiz ediyoruz."}
        </p>
      </section>

      {/* Core Markets Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-8">
          {isEn ? "Primary Target Markets" : "Birincil Odak Pazarlarımız"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {MASTER_MARKETS.map((m) => (
            <div
              key={m.slug}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="text-3xl">{m.flagEmoji || "🌍"}</div>
                  <span className="px-3 py-1 rounded-full bg-[#EEF3FB] text-[#446CB5] text-xs font-bold">
                    {m.badge || "Aktif Pazar"}
                  </span>
                </div>
                <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors mb-3">
                  {m.title}
                </h3>
                <p className="text-sm text-[#595F69] leading-relaxed mb-6">
                  {m.metaDesc || m.overview}
                </p>

                {m.insights && (
                  <ul className="space-y-2 mb-6 text-xs text-[#595F69]">
                    {m.insights.slice(0, 3).map((ins, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5] shrink-0 mt-0.5" />
                        <span>{ins}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 border-t border-[#DDE2E8] flex items-center justify-between">
                <Link
                  to={`/${m.slug}`}
                  className="font-bold text-sm text-[#446CB5] group-hover:text-[#345999] flex items-center gap-1.5 transition-colors"
                >
                  <span>{isEn ? "Explore Market Architecture" : "Pazar Stratejisini İncele"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Emerging Corridors */}
        <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-8">
          {isEn ? "High-Potential Medical Corridors" : "Yüksek Potansiyelli Sağlık Koridorları"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {additionalMarkets.map((am, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-white border border-[#DDE2E8] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{am.flagEmoji}</span>
                  <span className="text-[11px] font-semibold text-[#595F69] bg-[#F8FAFC] px-2.5 py-1 rounded-full border border-[#DDE2E8]">
                    {am.status}
                  </span>
                </div>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E] mb-2">
                  {am.countryName}
                </h3>
                <p className="text-xs text-[#595F69] leading-relaxed mb-4">
                  {am.desc}
                </p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="text-xs font-bold text-[#446CB5] hover:text-[#345999] flex items-center gap-1 self-start"
              >
                <span>{isEn ? "Discuss Market Plan" : "Pazar Planını Görüşün"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#16202E] text-white text-center space-y-6">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold max-w-2xl mx-auto">
            {isEn ? "Which countries should your clinic enter first?" : "Kliniğiniz öncelikle hangi ülkelere açılmalı?"}
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            {isEn ? "We benchmark treatment costs, flight connectivity, and competition to pick your clinic's optimal target market." : "Uçuş sıklığı, tedavi fiyat avantajı ve arama hacmini kıyaslayarak kliniğiniz için en karlı ülkeyi seçelim."}
          </p>
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-sm sm:text-base transition-colors shadow-lg shadow-[#446CB5]/25 inline-flex items-center gap-2"
          >
            <span>{isEn ? "Request Market Selection Analysis" : "Pazar Seçim Analizi Talep Edin"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
