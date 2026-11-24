import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import hub from '../data/marketsHub.json';
import specialties from '../data/specialtiesHub.json';
import families from '../data/serviceFamilies.json';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

interface MarketsPageProps {
  onOpenConsultation: () => void;
}

const focus = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#446CB5]';
const section = 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-left';
const heading = "font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-4";

export const MarketsPage = ({ onOpenConsultation }: MarketsPageProps) => {
  const { isEn } = useLanguage();
  const lang = isEn ? 'en' : 'tr';
  const copy = hub.copy[lang];
  const href = (url: string) => isEn ? `${url}?lang=en` : url;
  const openAnalysis = () => {
    try {
      const tag = (window as Window & { gtag?: (command: string, name: string, params: Record<string, string>) => void }).gtag;
      tag?.('event', 'growth_analysis_open', { source: 'markets_hub', page_path: '/ulkeler', language: lang });
    } catch { /* The consultation form must also work when analytics is unavailable. */ }
    onOpenConsultation();
  };
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div data-markets-hub className="min-h-screen bg-[#F8FAFC] text-[#16202E] pt-28 pb-20">
      <SEOHead title={copy.title} description={copy.description} canonicalUrl="https://www.overseas.marketing/ulkeler" />
      <JsonLdSchema customTitle={copy.directory} customUrl="https://www.overseas.marketing/ulkeler" faqs={copy.faqs}
        customBreadcrumbs={[{ name: copy.home, item: 'https://www.overseas.marketing' }, { name: copy.directory, item: 'https://www.overseas.marketing/ulkeler' }]} />

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

      <section className={section} aria-labelledby="market-guides-title">
        <h2 id="market-guides-title" className={heading}>{copy.directoryTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[70ch] leading-relaxed mb-8">{copy.directoryIntro}</p>
        <div className="grid md:grid-cols-2 gap-6">{hub.markets.map(market => <article key={market.slug} data-market={market.slug} className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DDE2E8] flex flex-col">
          <h3 className="font-['Inter_Tight'] text-2xl font-bold mb-3">{market[lang]}</h3>
          <p className="text-base text-[#595F69] leading-relaxed mb-6">{market.summary[lang]}</p>
          <p className="text-sm font-semibold mb-3">{copy.branchLinks}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm mb-8">{market.branches.map(slug => {
            const branch = specialties.branches.find(item => item.slug === slug)!;
            return <li key={slug}><Link to={href('/' + slug)} className={`text-[#446CB5] underline underline-offset-4 ${focus}`}>{branch[lang]}</Link></li>;
          })}</ul>
          <Link to={href('/' + market.slug)} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#446CB5] hover:underline underline-offset-4 ${focus}`}>
            <span>{copy.detail}<span className="sr-only">: {market[lang]}</span></span><ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </Link>
        </article>)}</div>
      </section>

      <section className={section} aria-labelledby="market-plan-title">
        <h2 id="market-plan-title" className={heading}>{copy.matrixTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[70ch] leading-relaxed mb-6">{copy.matrixIntro}</p>
        <div role="region" aria-labelledby="market-plan-title" tabIndex={0} className={`overflow-x-auto rounded-2xl border border-[#DDE2E8] bg-white ${focus}`}>
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">{copy.matrixTitle}</caption>
            <thead><tr className="bg-[#EEF3FB]">{copy.matrixColumns.map(label => <th key={label} scope="col" className="px-5 py-4 font-semibold">{label}</th>)}</tr></thead>
            <tbody>{hub.markets.map(market => <tr key={market.slug} className="border-t border-[#DDE2E8] align-top">
              <th scope="row" className="px-5 py-4 font-semibold"><Link to={href('/' + market.slug)} className={`text-[#446CB5] hover:underline underline-offset-4 ${focus}`}>{market[lang]}</Link></th>
              <td className="px-5 py-4">{market.question[lang]}</td><td className="px-5 py-4 text-[#595F69]">{market.input[lang]}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </section>

      <section className={section}>
        <h2 className={heading}>{copy.expansionTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[80ch] leading-relaxed">{copy.expansionIntro}</p>
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
        <h2 className={heading}>{copy.specialtiesTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[70ch] leading-relaxed mb-6">{copy.specialtiesIntro}</p>
        <Link to={href('/sektorler')} className={`inline-flex items-center gap-2 text-[#446CB5] font-semibold hover:underline underline-offset-4 ${focus}`}>{copy.specialtiesLink}<ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" /></Link>
      </section>

      <section className={section}>
        <h2 className={heading}>{copy.servicesTitle}</h2>
        <p className="text-base text-[#595F69] max-w-[70ch] leading-relaxed mb-8">{copy.servicesIntro}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">{families.map(family => <article key={family.id} data-market-service={family.id} className="p-6 bg-white border border-[#DDE2E8] rounded-2xl flex flex-col">
          <h3 className="text-lg font-bold mb-3">{family.name[lang]}</h3><p className="text-base text-[#595F69] leading-relaxed mb-5">{family.description[lang]}</p>
          <Link to={href(family.url)} className={`mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#446CB5] hover:underline underline-offset-4 ${focus}`}>
            {copy.serviceLink}<span className="sr-only">: {family.name[lang]}</span><ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </article>)}</div>
      </section>

      <section className={section}>
        <h2 className={heading}>{copy.faqTitle}</h2>
        <div className="max-w-4xl space-y-4">{copy.faqs.map((faq, index) => <div key={index} className="bg-white border border-[#DDE2E8] rounded-2xl">
          <h3><button type="button" id={`market-faq-${index}`} aria-expanded={openFaqIndex === index} aria-controls={`market-answer-${index}`}
            onClick={() => setOpenFaqIndex(current => current === index ? null : index)}
            className={`w-full p-5 sm:p-6 text-left font-semibold flex items-center justify-between gap-4 rounded-2xl ${focus}`}>
            {faq.q}<ChevronDown aria-hidden="true" className={`w-5 h-5 shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
          </button></h3>
          <div id={`market-answer-${index}`} role="region" aria-labelledby={`market-faq-${index}`} hidden={openFaqIndex !== index} className="px-5 sm:px-6 pb-6 text-base text-[#595F69] leading-relaxed">{faq.a}</div>
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
