import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import hub from '../data/specialtiesHub.json';
import families from '../data/serviceFamilies.json';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface SectorsPageProps {
  onOpenConsultation: () => void;
}

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#446CB5]';
const section = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left';
const heading = "font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-4";

export const SectorsPage = ({ onOpenConsultation }: SectorsPageProps) => {
  const { isEn } = useLanguage();
  const lang = isEn ? 'en' : 'tr';
  const copy = hub.copy[lang];
  const href = (url: string) => isEn ? `${url}?lang=en` : url;
  const openAnalysis = () => {
    try {
      const tag = (window as Window & { gtag?: (command: string, name: string, params: Record<string, string>) => void }).gtag;
      tag?.('event', 'growth_analysis_open', { source: 'specialties_hub', page_path: '/sektorler', language: lang });
    } catch { /* The consultation form must also work when analytics is unavailable. */ }
    onOpenConsultation();
  };
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const visibleCount = hub.branches.filter(b => activeCategory === 'all' || b.category === activeCategory).length;
  const filters = [{ id: 'all', tr: hub.copy.tr.all, en: hub.copy.en.all }, ...hub.categories];

  return (
    <div data-specialties-hub className="min-h-screen bg-[#F8FAFC] text-[#16202E] pt-28 pb-20">
      <SEOHead title={copy.title} description={copy.description} canonicalUrl="https://www.overseas.marketing/sektorler" />
      <JsonLdSchema customTitle={copy.directory} customUrl="https://www.overseas.marketing/sektorler" faqs={copy.faqs}
        customBreadcrumbs={[{ name: copy.home, item: 'https://www.overseas.marketing' }, { name: copy.directory, item: 'https://www.overseas.marketing/sektorler' }]} />

      <section className={`${section} pt-4`}>
        <nav aria-label={isEn ? 'Breadcrumb' : 'İçerik yolu'} className="mb-8 text-sm text-[#595F69]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link to={href('/')} className={`hover:underline underline-offset-4 ${focus}`}>{copy.home}</Link></li>
            <li aria-hidden="true">/</li><li aria-current="page">{copy.directory}</li>
          </ol>
        </nav>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] max-w-5xl mb-6 text-balance">{copy.h1}</h1>
        <p className="text-base sm:text-lg text-[#595F69] max-w-[70ch] leading-relaxed mb-8">{copy.intro}</p>
        <button type="button" onClick={openAnalysis} className={`inline-flex items-center gap-3 rounded-xl bg-[#446CB5] hover:bg-[#345999] px-6 py-4 text-white font-semibold ${focus}`}>
          {copy.cta}<ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </button>
      </section>

      <section className={section} aria-labelledby="specialty-guides-title">
        <h2 id="specialty-guides-title" className={heading}>{copy.directoryTitle}</h2>
        <div role="group" aria-label={copy.filterLabel} className="flex flex-wrap gap-2.5 mb-4">
          {filters.map(cat => {
            const count = cat.id === 'all' ? hub.branches.length : hub.branches.filter(b => b.category === cat.id).length;
            return <button key={cat.id} type="button" aria-pressed={activeCategory === cat.id} aria-controls="specialty-guides"
              onClick={() => setActiveCategory(cat.id)} data-specialty-filter={cat.id}
              className={`min-h-11 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${focus} ${activeCategory === cat.id ? 'bg-[#446CB5] text-white' : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB]'}`}>
              {cat[lang]} ({count})
            </button>;
          })}
        </div>
        <p aria-live="polite" aria-atomic="true" className="text-sm text-[#595F69] mb-6">{visibleCount} {copy.results}</p>
        <div id="specialty-guides" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hub.branches.map(branch => (
            <article key={branch.slug} data-specialty={branch.slug} hidden={activeCategory !== 'all' && branch.category !== activeCategory}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DDE2E8] flex flex-col">
              <h3 className="font-['Inter_Tight'] text-xl font-bold mb-3">{branch[lang]}</h3>
              <p className="text-base text-[#595F69] leading-relaxed mb-6">{branch.summary[lang]}</p>
              <Link to={href(`/${branch.slug}`)} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#446CB5] hover:underline underline-offset-4 ${focus}`}>
                <span>{copy.detail}<span className="sr-only">: {branch[lang]}</span></span><ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className={section} aria-labelledby="specialty-plan-title">
        <h2 id="specialty-plan-title" className={heading}>{copy.matrixTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[70ch] leading-relaxed mb-6">{copy.matrixIntro}</p>
        <div role="region" aria-labelledby="specialty-plan-title" tabIndex={0} className={`overflow-x-auto rounded-2xl border border-[#DDE2E8] bg-white ${focus}`}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">{copy.matrixTitle}</caption>
            <thead><tr className="bg-[#EEF3FB]">{copy.matrixColumns.map(label => <th key={label} scope="col" className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead>
            <tbody>{hub.planningRows.map(row => {
              const branch = hub.branches.find(b => b.slug === row.slug)!;
              return <tr key={row.slug} className="border-t border-[#DDE2E8] align-top">
                <th scope="row" className="px-5 py-4 font-semibold"><Link to={href(`/${row.slug}`)} className={`text-[#446CB5] hover:underline underline-offset-4 ${focus}`}>{branch[lang]}</Link></th>
                <td className="px-5 py-4">{row.question[lang]}</td><td className="px-5 py-4 text-[#595F69]">{row.input[lang]}</td>
              </tr>;
            })}</tbody>
          </table>
        </div>
      </section>

      <section className={section}>
        <div className="bg-[#16202E] text-white rounded-2xl p-6 sm:p-10">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold mb-4">{copy.reviewTitle}</h2>
          <p className="text-base text-slate-200 max-w-[70ch] leading-relaxed mb-8">{copy.reviewIntro}</p>
          <div className="grid sm:grid-cols-2 gap-8">{copy.reviews.map(item => <div key={item.title}>
            <h3 className="font-semibold mb-2">{item.title}</h3><p className="text-base text-slate-200 leading-relaxed">{item.text}</p>
          </div>)}</div>
        </div>
      </section>

      <section className={section}>
        <h2 className={heading}>{copy.servicesTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[70ch] leading-relaxed mb-8">{copy.servicesIntro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{families.map(family => <article key={family.id} data-specialty-service={family.id} className="p-6 bg-white border border-[#DDE2E8] rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold mb-3">{family.name[lang]}</h3><p className="text-base text-[#595F69] leading-relaxed mb-5">{family.description[lang]}</p>
          <Link to={href(family.url)} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#446CB5] hover:underline underline-offset-4 ${focus}`}>
            {copy.serviceLink}<span className="sr-only">: {family.name[lang]}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </article>)}</div>
      </section>

      <section className={section}>
        <h2 className={heading}>{copy.faqTitle}</h2>
        <div className="max-w-4xl space-y-4">{copy.faqs.map((faq, index) => <div key={index} className="bg-white border border-[#DDE2E8] rounded-2xl">
          <h3><button type="button" id={`specialty-faq-${index}`} aria-expanded={openFaqIndex === index} aria-controls={`specialty-answer-${index}`}
            onClick={() => setOpenFaqIndex(current => current === index ? null : index)}
            className={`w-full p-5 sm:p-6 text-left font-semibold flex items-center justify-between gap-4 rounded-2xl ${focus}`}>
            {faq.q}<ChevronDown aria-hidden="true" className={`w-5 h-5 shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
          </button></h3>
          <div id={`specialty-answer-${index}`} role="region" aria-labelledby={`specialty-faq-${index}`} hidden={openFaqIndex !== index} className="px-5 sm:px-6 pb-6 text-base text-[#595F69] leading-relaxed">{faq.a}</div>
        </div>)}</div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#16202E] text-white">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold mb-4">{copy.ctaTitle}</h2>
          <p className="text-base text-slate-200 leading-relaxed max-w-[70ch] mb-6">{copy.ctaText}</p>
          <button type="button" onClick={openAnalysis} className={`inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[#446CB5] hover:bg-[#345999] font-semibold ${focus}`}>
            {copy.cta}<ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
};
