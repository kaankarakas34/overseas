import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { SEOHead } from './SEOHead';

interface NotFoundPageProps {
  onOpenConsultation?: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#EEF3FB]/50 via-white to-[#F8FAFC]">
      <SEOHead
        title="404 - Sayfa Bulunamadı | Overseas Marketing"
        description="Aradığınız sayfa taşınmış veya silinmiş olabilir. Overseas Marketing ana sayfasına dönerek sağlık turizmi büyüme çözümlerini inceleyebilirsiniz."
        canonicalUrl="https://www.overseas.marketing/404"
        robots="noindex, follow"
        hasEnAlternate={false}
      />

      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-bold uppercase tracking-wider">
          <span>Hata Kodu 404</span>
          <span>•</span>
          <span>Sayfa Bulunamadı</span>
        </div>

        {/* Large 404 graphic / text */}
        <div className="space-y-3">
          <h1 className="font-['Inter_Tight'] text-6xl sm:text-7xl font-extrabold text-[#16202E] tracking-tight">
            404
          </h1>
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E]">
            Aradığınız Adrese Ulaşılamadı
          </h2>
          <p className="text-sm sm:text-base text-[#595F69] max-w-lg mx-auto leading-relaxed">
            Girdiğiniz URL taşınmış, silinmiş veya yanlış yazılmış olabilir. Aşağıdaki hızlı bağlantıları kullanarak aradığınız içeriğe kolayca ulaşabilirsiniz.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-sm font-semibold shadow-md transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </button>
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#DDE2E8] hover:bg-[#EEF3FB] text-[#16202E] text-sm font-semibold transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Önceki Sayfaya Git</span>
          </button>
        </div>

        {/* Helpful Category Links */}
        <div className="bg-white rounded-2xl border border-[#DDE2E8] p-6 text-left shadow-2xs space-y-4">
          <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
            Popüler Sayfalara Göz Atın
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            <Link
              to="/hizmetler/performans-pazarlama"
              className="p-2.5 rounded-lg hover:bg-[#F8FAFC] text-[#16202E] hover:text-[#446CB5] font-medium flex items-center justify-between group transition-colors"
            >
              <span>Sağlık Turizmi Performans Pazarlama</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5] group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/hizmetler/uluslararasi-seo-hizmeti"
              className="p-2.5 rounded-lg hover:bg-[#F8FAFC] text-[#16202E] hover:text-[#446CB5] font-medium flex items-center justify-between group transition-colors"
            >
              <span>Uluslararası SEO Hizmeti</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5] group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/sac-ekimi-reklam-ajansi"
              className="p-2.5 rounded-lg hover:bg-[#F8FAFC] text-[#16202E] hover:text-[#446CB5] font-medium flex items-center justify-between group transition-colors"
            >
              <span>Saç Ekimi Reklam Ajansı</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5] group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/dis-klinigi-reklam-ajansi"
              className="p-2.5 rounded-lg hover:bg-[#F8FAFC] text-[#16202E] hover:text-[#446CB5] font-medium flex items-center justify-between group transition-colors"
            >
              <span>Diş Kliniği Reklam Ajansı</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5] group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/ingiltere-saglik-turizmi-reklamlari"
              className="p-2.5 rounded-lg hover:bg-[#F8FAFC] text-[#16202E] hover:text-[#446CB5] font-medium flex items-center justify-between group transition-colors"
            >
              <span>İngiltere Sağlık Turizmi Reklamları</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5] group-hover:translate-x-0.5 transition-all" />
            </Link>
            <Link
              to="/saglik-turizmi/nedir"
              className="p-2.5 rounded-lg hover:bg-[#F8FAFC] text-[#16202E] hover:text-[#446CB5] font-medium flex items-center justify-between group transition-colors"
            >
              <span>Sağlık Turizmi Nedir? (2026 Rehberi)</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
export default NotFoundPage;
