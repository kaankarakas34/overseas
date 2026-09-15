import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  X, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { SEO_ARTICLES } from '../data/seoArticlesData';

interface BlogSectionProps {
  onOpenConsultation?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [activeFunnel, setActiveFunnel] = useState<'Tümü' | 'BOFU' | 'MOFU' | 'TOFU'>('Tümü');
  const [visibleCount, setVisibleCount] = useState(12);

  // Categories list
  const categories = [
    'Tümü',
    'Temel kavramlar ve sektör',
    'İşletmecilik, acenta ve danışmanlık',
    'Yetki belgesi, yönetmelik ve hukuk',
    'Teşvikler, destekler ve vergi',
    'Ajans, reklam, SEO ve web',
    'Dental ve diş sağlık turizmi',
    'Türkiye şehirleri',
    'Ülke pazarları',
    'Eğitim ve kariyer',
    'Fuar, dernek ve akademik içerik'
  ];

  // Filter logic
  const filteredArticles = useMemo(() => {
    return SEO_ARTICLES.filter((art) => {
      const matchesCat = activeCategory === 'Tümü' || art.category.toLowerCase() === activeCategory.toLowerCase();
      const matchesFunnel = activeFunnel === 'Tümü' || art.funnel === activeFunnel;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        art.title.toLowerCase().includes(q) || 
        art.primaryKeyword.toLowerCase().includes(q) ||
        art.metaDesc.toLowerCase().includes(q) ||
        art.quickAnswer.toLowerCase().includes(q);

      return matchesCat && matchesFunnel && matchesSearch;
    });
  }, [searchQuery, activeCategory, activeFunnel]);

  const displayedArticles = filteredArticles.slice(0, visibleCount);

  return (
    <section id="rehber" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#DDE2E8] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
              <BookOpen className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>Sağlık Turizmi Kütüphanesi & Bilgi Merkezi</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
              Sağlık Turizmi <span className="text-[#446CB5]">Bilgi Merkezi ve Rehberi</span>
            </h2>
            <p className="text-sm sm:text-base text-[#595F69]">
              Sağlık Bakanlığı ve Ticaret Bakanlığı mevzuatına uygun, yetki belgesi şartları, teşvik modelleri ve dijital büyüme stratejilerini içeren 86 kapsamlı kaynak.
            </p>
          </div>

          {/* Quick Funnel Filter */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-[#DDE2E8] shadow-2xs">
            {(['Tümü', 'BOFU', 'MOFU', 'TOFU'] as const).map((f) => (
              <button
                key={f}
                onClick={() => {
                  setActiveFunnel(f);
                  setVisibleCount(12);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeFunnel === f
                    ? 'bg-[#16202E] text-white shadow-xs'
                    : 'text-[#595F69] hover:text-[#16202E] hover:bg-[#F8FAFC]'
                }`}
              >
                {f === 'Tümü' ? 'Tüm Düzeyler' : f === 'BOFU' ? 'Ticari (BOFU)' : f === 'MOFU' ? 'Süreç (MOFU)' : 'Temel (TOFU)'}
              </button>
            ))}
          </div>
        </div>

        {/* Search Bar & Instant Filter */}
        <div className="bg-white rounded-2xl border border-[#DDE2E8] p-3 sm:p-4 shadow-xs flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full flex-grow">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(12);
              }}
              placeholder="Konu, yetki belgesi, teşvik veya anahtar kelime arayın... (örn: Google Ads, DYS, acenta)"
              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs sm:text-sm text-[#222222] focus:outline-none focus:border-[#446CB5] focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-200 text-slate-500 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs text-[#595F69] shrink-0 font-medium px-2">
            Toplam <strong>{filteredArticles.length}</strong> rehber listeleniyor
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setVisibleCount(12);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeCategory === cat
                  ? 'bg-[#446CB5] text-white shadow-xs'
                  : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB] hover:text-[#446CB5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid (Direct Links to Dedicated SEO Pages) */}
        {displayedArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((art) => (
              <Link
                key={art.id}
                to={art.url}
                className="rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between p-6 group text-left relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Category & Funnel Badges */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#EEF3FB] text-[#446CB5] truncate max-w-[180px]">
                      {art.category}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                      art.funnel === 'BOFU' ? 'bg-amber-100 text-amber-800' : art.funnel === 'MOFU' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {art.funnel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#446CB5] transition-colors leading-snug line-clamp-2">
                    {art.h1}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-[#595F69] leading-relaxed line-clamp-3">
                    {art.quickAnswer}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#DDE2E8]/60 flex items-center justify-between text-xs text-[#446CB5] font-semibold">
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Rehberi İncele</span>
                    <ArrowRight className="w-3 h-3 text-[#446CB5]" />
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-[#595F69] font-normal">
                    <Clock className="w-3 h-3 text-[#446CB5]" />
                    <span>{art.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#DDE2E8] p-8 space-y-4">
            <Sparkles className="w-8 h-8 text-slate-400 mx-auto" />
            <div className="text-base font-bold text-[#222222]">Eşleşen rehber bulunamadı</div>
            <p className="text-xs text-[#595F69] max-w-md mx-auto">
              "{searchQuery}" araması için içerik bulunamadı. Lütfen farklı bir arama terimi deneyin veya kategori filtrelerini sıfırlayın.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('Tümü');
                setActiveFunnel('Tümü');
              }}
              className="px-4 py-2 rounded-xl bg-[#446CB5] text-white text-xs font-semibold cursor-pointer"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}

        {/* Load More Button */}
        {filteredArticles.length > visibleCount && (
          <div className="pt-6 flex justify-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] hover:bg-[#EEF3FB] text-[#222222] hover:text-[#446CB5] font-semibold text-xs transition-all shadow-xs cursor-pointer"
            >
              <span>Daha Fazla Konu Göster ({filteredArticles.length - visibleCount} içerik kaldı)</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
