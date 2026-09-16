import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  UserCheck, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck,
  Share2
} from 'lucide-react';
import { SeoArticleItem, SEO_ARTICLES } from '../data/seoArticlesData';
import { SEOHead } from './SEOHead';
import { Helmet } from 'react-helmet-async';

interface SeoArticlePageProps {
  article: SeoArticleItem;
  onOpenConsultation: () => void;
}

export const SeoArticlePage: React.FC<SeoArticlePageProps> = ({ article, onOpenConsultation }) => {
  const navigate = useNavigate();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [copied, setCopied] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Structured JSON-LD Data for Article, Breadcrumb and FAQPage
  const canonicalUrl = `https://www.overseas.marketing${article.url}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl
    },
    headline: article.h1,
    description: article.metaDesc,
    author: {
      '@type': 'Organization',
      name: 'Overseas Marketing Medikal SEO Ekibi',
      url: 'https://www.overseas.marketing'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Overseas Marketing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.overseas.marketing/logo2/siyah.png'
      }
    },
    datePublished: '2026-01-15',
    dateModified: '2026-09-16',
    keywords: [article.primaryKeyword, ...article.secondaryKeywords].join(', ')
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Ana Sayfa',
        item: 'https://www.overseas.marketing/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Sağlık Turizmi Rehberi',
        item: 'https://www.overseas.marketing/#rehber'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: canonicalUrl
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-24 pb-20">
      {/* SEO Head Tags */}
      <SEOHead
        title={article.seoTitle}
        description={article.metaDesc}
        canonicalUrl={canonicalUrl}
        hasEnAlternate={false}
      />

      {/* JSON-LD Injections */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Breadcrumbs & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-[#595F69]">
          <nav className="flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-[#446CB5] transition-colors font-medium">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="text-[#446CB5] font-medium">Sağlık Turizmi Rehberi</span>
            <span>/</span>
            <span className="text-slate-400 truncate max-w-[200px]">{article.title}</span>
          </nav>

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#DDE2E8] hover:bg-[#EEF3FB] text-[#222222] font-semibold transition-all cursor-pointer shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Geri Dön</span>
          </button>
        </div>

        {/* Article Header Card */}
        <header className="bg-white rounded-3xl border border-[#DDE2E8] p-6 sm:p-10 shadow-sm mb-10 space-y-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5]">
              {article.category}
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-semibold flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              2026 Mevzuat Uyumu
            </span>
            <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
              Odak: {article.primaryKeyword}
            </span>
          </div>

          <h1 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-extrabold text-[#16202E] tracking-tight leading-tight">
            {article.h1}
          </h1>

          {/* E-E-A-T Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DDE2E8] text-xs text-[#595F69]">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-[#446CB5]" />
                <span>Hazırlayan: <strong>{article.author === 'Overseas Uzman Kurulu' ? 'Overseas Medikal SEO Ekibi' : article.author}</strong></span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-600" />
                <span>Mevzuat Denetimi: <strong>{article.reviewer === 'Medikal Pazarlama Masası' ? 'Sağlık Turizmi Mevzuat Masası' : article.reviewer}</strong></span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#446CB5]" />
                <span>{article.readTime}</span>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg hover:bg-[#EEF3FB] text-[#446CB5] font-semibold transition-colors cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? 'Bağlantı Kopyalandı!' : 'Paylaş'}</span>
            </button>
          </div>

          {/* Fast Direct Answer Callout Box */}
          <div className="p-5 rounded-2xl bg-[#F0F5FD] border border-[#446CB5]/30 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#446CB5]">
              <Sparkles className="w-4 h-4 text-[#446CB5]" />
              <span>Özet / Doğrudan Cevap</span>
            </div>
            <p className="text-sm sm:text-base text-[#16202E] leading-relaxed font-medium">
              {article.quickAnswer}
            </p>
          </div>
        </header>

        {/* Article Body Content */}
        <main className="space-y-10">
          {article.sections.map((section, idx) => (
            <section key={idx} className="bg-white rounded-3xl border border-[#DDE2E8] p-6 sm:p-10 shadow-xs space-y-6">
              <div className="space-y-2">
                <h2 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold text-[#16202E]">
                  {section.heading}
                </h2>
                {section.subheading && (
                  <p className="text-sm text-[#595F69]">{section.subheading}</p>
                )}
              </div>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {p}
                </p>
              ))}

              {/* Bullet Points */}
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-3 pt-2">
                  {section.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#334155] leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#446CB5] shrink-0 mt-0.5" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Comparison Table */}
              {section.table && (
                <div className="overflow-x-auto rounded-2xl border border-[#DDE2E8] mt-4">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-[#16202E] text-white">
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="py-3 px-4 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DDE2E8]">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="py-3 px-4 text-[#334155]">
                              {cIdx === 0 ? <strong>{cell}</strong> : cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Callout Alert */}
              {section.callout && (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3 mt-4">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block mb-0.5">{section.callout.title}</strong>
                    <span>{section.callout.text}</span>
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Official Sources Box (E-E-A-T & Mevzuat Uyumu) */}
          <div className="bg-white rounded-3xl border border-[#DDE2E8] p-6 sm:p-8 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Resmî ve Yasal Kaynaklar (E-E-A-T)</span>
            </div>
            <p className="text-xs sm:text-sm text-[#595F69]">
              Bu rehberdeki bilgiler Sağlık Bakanlığı ve yetkili kamu kurumlarının resmî mevzuat ve duyurularından doğrulanmıştır:
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {article.officialSources.map((src, idx) => (
                <a
                  key={idx}
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF3FB] border border-[#DDE2E8] hover:border-[#446CB5]/40 text-xs font-semibold text-[#16202E] transition-all"
                >
                  <span>{src.title}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#446CB5]" />
                </a>
              ))}
            </div>
          </div>

          {/* Sıkça Sorulan Sorular (FAQ Accordion) */}
          <div className="bg-white rounded-3xl border border-[#DDE2E8] p-6 sm:p-10 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                Soru & Cevap
              </span>
              <h2 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold text-[#16202E]">
                Sıkça Sorulan Sorular
              </h2>
            </div>

            <div className="space-y-3">
              {article.faqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-[#DDE2E8] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-[#16202E] hover:bg-[#F8FAFC] cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaqIndex === fIdx ? (
                      <ChevronUp className="w-4 h-4 text-[#446CB5] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {openFaqIndex === fIdx && (
                    <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#595F69] leading-relaxed border-t border-[#DDE2E8]/60 bg-[#F8FAFC]/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Internal Links Cluster */}
          <div className="bg-white rounded-3xl border border-[#DDE2E8] p-6 sm:p-8 shadow-xs space-y-4">
            <h3 className="font-['Inter_Tight'] text-sm sm:text-base font-bold text-[#16202E]">
              İlgili Sağlık Turizmi Rehberleri
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.internalLinks.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  to={link.url}
                  className="p-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF3FB] border border-[#DDE2E8] hover:border-[#446CB5]/30 text-xs sm:text-sm font-semibold text-[#16202E] hover:text-[#446CB5] transition-all flex items-center justify-between group"
                >
                  <span>{link.title}</span>
                  <ArrowRight className="w-4 h-4 text-[#446CB5] opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          {/* High Converting Commercial CTA Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#16202E] to-[#1E293B] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden text-center sm:text-left">
            <div className="relative z-10 max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#446CB5]/40 text-[#60A5FA] text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Sağlık Kuruluşları İçin Stratejik Büyüme</span>
              </div>
              <h3 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Kliniğinizin Yurt Dışı Hasta Kazanım Potansiyelini Birlikte Analiz Edelim
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Mevzuata tam uyumlu reklam kurguları, hedef ülke analizleri ve çok dilli CRM altyapımızla büyümenizi şansa bırakmayın.
              </p>
              <div className="pt-3 flex flex-wrap items-center gap-4 justify-center sm:justify-start">
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white font-semibold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Ücretsiz Büyüme Analizi Talep Edin</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
                <a
                  href="tel:05363197697"
                  className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20"
                >
                  0536 319 76 97
                </a>
              </div>
            </div>
          </div>

        </main>

      </div>
    </div>
  );
};
