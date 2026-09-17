import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Tag,
  ShieldCheck,
  TrendingUp,
  Cpu,
  FileCheck
} from 'lucide-react';
import { SEO_ARTICLES } from '../data/seoArticlesData';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

export const BlogIndexPage: React.FC = () => {
  const { isEn } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCluster, setSelectedCluster] = useState('all');

  // 10 Topic Clusters from Master Prompt
  const clusters = [
    { id: 'all', title: isEn ? "All Guides" : "Tüm Rehberler" },
    { id: 'pazarlama', title: isEn ? "Marketing & Acquisition" : "Sağlık Turizmi Pazarlaması" },
    { id: 'seo-geo', title: isEn ? "SEO & GEO" : "SEO ve GEO" },
    { id: 'reklam', title: isEn ? "Google Ads & Meta" : "Google Ads & Meta Reklamları" },
    { id: 'web-cro', title: isEn ? "Web & Landing Page" : "Web, Landing Page & CRO" },
    { id: 'crm-ai', title: isEn ? "CRM & AI Automation" : "CRM & Yapay Zekâ" },
    { id: 'doktor', title: isEn ? "Doctor Branding" : "Doktor Marka Yönetimi" },
    { id: 'mevzuat', title: isEn ? "Regulations & Incentives" : "Mevzuat & Teşvikler" }
  ];

  // Filter non-academic, high-value articles
  const cleanArticles = SEO_ARTICLES.filter(a => 
    !a.url.includes('taban-puanlari') && 
    !a.url.includes('dgs') && 
    !a.url.includes('slayt') && 
    !a.url.includes('tezleri') && 
    !a.url.includes('is-ilanlari') && 
    !a.url.includes('cumhuriyet-universitesi')
  );

  const filteredArticles = cleanArticles.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          a.primaryKeyword.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCluster === 'all') return matchesSearch;
    if (selectedCluster === 'mevzuat') {
      return matchesSearch && (a.url.includes('yetki-belgesi') || a.url.includes('tesvik') || a.url.includes('yonetmelik') || a.url.includes('hukuku'));
    }
    if (selectedCluster === 'reklam') {
      return matchesSearch && (a.url.includes('ads') || a.url.includes('reklam'));
    }
    if (selectedCluster === 'seo-geo') {
      return matchesSearch && (a.url.includes('seo') || a.url.includes('geo'));
    }
    if (selectedCluster === 'doktor') {
      return matchesSearch && (a.url.includes('doktor') || a.url.includes('hekim'));
    }
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Healthcare Tourism Knowledge Base & Research Guides | Overseas Marketing" : "Sağlık Turizmi Rehberi ve Bilgi Merkezi | Overseas Marketing"}
        description={isEn
          ? "Comprehensive healthcare tourism marketing knowledge base: SEO, GEO, Google Ads, Meta ads, WhatsApp CRM, and Ministry regulations."
          : "Sağlık turizmi pazarlaması, SEO, GEO, Google Ads reklamları, mevzuat, yetki belgeleri ve hasta kazanımı hakkında kapsamlı rehberler."}
        canonicalUrl="https://www.overseas.marketing/blog"
      />
      <JsonLdSchema type="home" />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{isEn ? "Strategic Knowledge Base" : "Sağlık Turizmi Bilgi Merkezi"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Practical guides for <span className="text-[#446CB5]">international patient acquisition</span>.</>
          ) : (
            <>Sağlık turizminde büyümek için <span className="text-[#446CB5]">kapsamlı sektörel rehberler</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed mb-8">
          {isEn
            ? "Actionable medical marketing research, regulatory checklists, cost calculations, and technical benchmarks produced by Overseas Marketing specialists."
            : "Sağlık Bakanlığı tanıtım mevzuatından Google Ads kampanya kurgularına, çok dilli SEO'dan WhatsApp CRM otomasyonuna kadar kliniğinizi büyütecek içerik kütüphanemiz."}
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl">
          <Search className="w-5 h-5 text-[#94A3B8] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={isEn ? "Search across 70+ healthcare guides (e.g. yetki belgesi, Google Ads, SEO)..." : "70+ rehber içinde arama yapın (ör. yetki belgesi, teşvikler, Google Ads)..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm sm:text-base shadow-xs"
          />
        </div>
      </section>

      {/* Cluster Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-2">
          {clusters.map((cl) => (
            <button
              key={cl.id}
              onClick={() => setSelectedCluster(cl.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                selectedCluster === cl.id
                  ? 'bg-[#446CB5] text-white shadow-xs'
                  : 'bg-white border border-[#DDE2E8] text-[#595F69] hover:text-[#16202E] hover:border-[#446CB5]'
              }`}
            >
              {cl.title}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="p-8 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#EEF3FB] text-[#446CB5] text-[11px] font-bold">
                    {art.category || "Rehber"}
                  </span>
                  <span className="text-xs text-[#94A3B8] font-medium">
                    {art.readTime || "6 dk okuma"}
                  </span>
                </div>

                <h2 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors mb-3 line-clamp-2">
                  {art.title}
                </h2>

                <p className="text-sm text-[#595F69] leading-relaxed mb-6 line-clamp-3">
                  {art.quickAnswer || art.metaDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#DDE2E8] flex items-center justify-between">
                <Link
                  to={art.url}
                  className="font-bold text-sm text-[#446CB5] group-hover:text-[#345999] flex items-center gap-1.5 transition-colors"
                >
                  <span>{isEn ? "Read Full Guide" : "Rehberi Oku"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
