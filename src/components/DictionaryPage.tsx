import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, BookOpen, ChevronRight, ArrowRight, Sparkles, Filter, CheckCircle2 } from 'lucide-react';
import { DICTIONARY_TERMS, DictionaryTerm } from '../data/dictionaryData';
import { SEOHead } from './SEOHead';

interface DictionaryPageProps {
  onOpenConsultation?: () => void;
}

export const DictionaryPage: React.FC<DictionaryPageProps> = ({ onOpenConsultation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'Strateji & Pazarlama', 'Performans & Metrik', 'Teknoloji & CRM', 'SEO & Yapay Zekâ'];

  const filteredTerms = useMemo(() => {
    return DICTIONARY_TERMS.filter((item) => {
      const matchesSearch =
        item.termTr.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.termEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tümü' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': 'https://www.overseas.marketing/sozluk#terms',
    name: 'Sağlık Turizmi ve Dijital Pazarlama Terimleri Sözlüğü',
    description: 'Sağlık turizmi pazarlaması, uluslararası hasta kazanımı, medikal SEO, GEO, sağlık CRM ve performans metrikleri terimler sözlüğü.',
    url: 'https://www.overseas.marketing/sozluk',
    inLanguage: 'tr-TR',
    hasDefinedTerm: DICTIONARY_TERMS.map((term) => ({
      '@type': 'DefinedTerm',
      '@id': `https://www.overseas.marketing/sozluk#${term.slug}`,
      name: term.termTr,
      alternateName: term.termEn,
      description: term.shortAnswer,
      inDefinedTermSet: 'https://www.overseas.marketing/sozluk#terms'
    }))
  };

  return (
    <div className="min-h-screen bg-[#060D1A] text-slate-100 selection:bg-[#446CB5]/30">
      <SEOHead
        title="Sağlık Turizmi ve Dijital Pazarlama Terimleri Sözlüğü | Overseas Marketing"
        description="Sağlık turizmi pazarlaması, uluslararası hasta kazanımı, medikal SEO, GEO, CPPA, CPL ve sağlık CRM kavramlarının net ve doğrudan tanımları."
        canonicalUrl="https://www.overseas.marketing/sozluk"
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(schemaJson)}</script>
      </Helmet>

      {/* Hero & Navigation */}
      <section className="relative pt-32 pb-16 border-b border-slate-800/80 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(68,108,181,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-slate-500">Bilgi Merkezi</span>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-[#60A5FA] font-medium">Sağlık Turizmi Sözlüğü</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#446CB5]/10 border border-[#446CB5]/30 text-xs font-semibold text-[#60A5FA] mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Sağlık Turizmi & Büyüme Sözlüğü</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-['Inter_Tight'] text-white mb-4">
              Sağlık Turizmi ve Dijital Pazarlama Sözlüğü
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
              Klinikler, hekimler ve sağlık turizmi profesyonelleri için uluslararası hasta kazanımı, performans reklamları, medikal SEO, GEO ve sağlık CRM terminolojisi rehberi. Yapay zekâ ve arama motorları için doğrudan tanım kaynağı formatında hazırlanmıştır.
            </p>

            {/* Search & Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Kavram veya terim ara (örn. CPPA, GEO, Lead Scoring)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#446CB5] focus:ring-1 focus:ring-[#446CB5] transition-all"
                />
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#446CB5] text-white'
                      : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dictionary Definitions Container */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-between text-xs text-slate-400">
            <span>Toplam <strong>{filteredTerms.length}</strong> terim listeleniyor</span>
            {selectedCategory !== 'Tümü' && (
              <span className="text-[#60A5FA]">Filtre: {selectedCategory}</span>
            )}
          </div>

          <dl className="space-y-12">
            {filteredTerms.map((term) => (
              <div
                key={term.slug}
                id={term.slug}
                className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-all scroll-mt-28"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <dt className="text-xl sm:text-2xl font-bold font-['Inter_Tight'] text-white flex items-center gap-2">
                    <span>{term.termTr}</span>
                    <span className="text-sm font-normal text-slate-400 font-sans">
                      ({term.termEn})
                    </span>
                  </dt>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-800 text-[#60A5FA] border border-slate-700">
                    {term.category}
                  </span>
                </div>

                {/* Direct Answer Box */}
                <dd className="space-y-6">
                  <div className="p-4 sm:p-5 rounded-xl bg-[#446CB5]/10 border border-[#446CB5]/30">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#60A5FA] mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Doğrudan Tanım (Direct Answer)</span>
                    </div>
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                      {term.shortAnswer}
                    </p>
                  </div>

                  {/* Why Important & How Applied Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5]" />
                        <span>Klinikler İçin Neden Önemli?</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {term.whyImportant}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5]" />
                        <span>Nasıl Ölçülür ve Uygulanır?</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {term.howMeasuredOrApplied}
                      </p>
                    </div>
                  </div>

                  {/* Internal Linking Footer: Related Terms & Related Service */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-slate-500 font-medium">İlgili Terimler:</span>
                      {term.relatedTerms.map((rt) => (
                        <a
                          key={rt.slug}
                          href={`#${rt.slug}`}
                          className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                        >
                          {rt.term}
                        </a>
                      ))}
                    </div>

                    <div>
                      <Link
                        to={term.relatedService.url}
                        className="inline-flex items-center gap-1.5 text-[#60A5FA] hover:text-white font-medium transition-colors"
                      >
                        <span>{term.relatedService.anchorText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>

          {filteredTerms.length === 0 && (
            <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm mb-4">Aradığınız kriterlere uygun terim bulunamadı.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('Tümü'); }}
                className="px-4 py-2 rounded-lg bg-[#446CB5] text-white text-xs font-medium cursor-pointer"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-slate-800/80 bg-slate-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold font-['Inter_Tight'] text-white mb-4">
            Kliniğinizin Uluslararası Büyüme Stratejisini Birlikte Kuralım
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mb-8 max-w-2xl mx-auto">
            Overseas Marketing; sağlık turizminde dijital pazarlama, medikal SEO, GEO optimizasyonu ve özel CRM altyapısı ile kliniğinizi sınır ötesi pazarlarda büyütür.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/teklif-al"
              className="px-6 py-3 rounded-xl bg-[#446CB5] hover:bg-[#3b5ca0] text-white text-sm font-semibold transition-colors"
            >
              Ücretsiz Ön Görüşme Planlayın
            </Link>
            <Link
              to="/metodoloji"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-colors"
            >
              Büyüme Metodolojimizi İnceleyin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
