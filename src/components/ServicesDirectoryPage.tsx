import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { useLanguage } from '../context/LanguageContext';
import familyData from '../data/serviceFamilies.json';

type Copy = {tr: string; en: string};
type Family = {id: string; url: string; name: Copy; description: Copy; need: Copy; links: {url: string; label: Copy}[]; hub?: {intro: Copy; steps: Copy[]; outputs: Copy[]; boundary: Copy}};
const families: Family[] = familyData;
const domain = 'https://www.overseas.marketing';
function track(name: string, familyId: string, path: string, language: string) {
  try {
    const tag = (window as Window & {gtag?: (command: string, name: string, params: Record<string, string>) => void}).gtag;
    tag?.('event', name, {service_family: familyId, page_path: path, language});
  } catch { /* Analytics must not block navigation or the consultation form. */ }
}

export function ServicesDirectoryPage({familyId, onOpenConsultation}: {familyId?: 'technology' | 'content'; onOpenConsultation: () => void}) {
  const {language, isEn} = useLanguage();
  const copy = (value: Copy) => value[language];
  const family = families.find(item => item.id === familyId);
  const path = family?.url || '/hizmetler';
  const href = (url: string) => isEn ? `${url}?lang=en` : url;
  const title = family ? `${copy(family.name)} ${isEn ? 'Services' : 'Hizmetleri'} | Overseas Marketing` : isEn ? 'Marketing & Growth Services | Overseas Marketing' : 'Dijital Pazarlama ve Büyüme Hizmetleri | Overseas Marketing';
  const description = family ? copy(family.description) : isEn ? 'Explore six service families: performance marketing, international SEO, GEO, web, CRM automation and brand content. Find the right starting point for your organisation.' : 'Performans pazarlama, uluslararası SEO, GEO, web, CRM otomasyonu ve içerik-markayı altı hizmet ailesinde inceleyin. Kurumunuz için doğru başlangıç alanını seçin.';
  const lastView = useRef('');
  useEffect(() => {
    const key = `${path}:${language}`;
    if (lastView.current === key) return;
    lastView.current = key;
    track('service_directory_view', family?.id || 'all', path, language);
  }, [path, language, family?.id]);
  const openAnalysis = () => {
    track('growth_analysis_open', family?.id || 'all', path, language);
    onOpenConsultation();
  };
  const familyLink = (item: Family) => (
    <Link to={href(item.url)} onClick={() => track('service_family_select', item.id, path, language)} className="inline-flex items-center gap-2 font-semibold text-[#446CB5] hover:underline py-2">
      {copy(item.name)} {isEn ? 'overview' : 'merkezini incele'} <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );
  return (
    <div className="bg-[#F8FAFC] text-[#16202E] pt-28 pb-20 min-h-screen">
      <SEOHead title={title} description={description} canonicalUrl={`${domain}${path}`} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label={isEn ? 'Breadcrumb' : 'İçerik yolu'} className="text-sm text-[#595F69] flex flex-wrap gap-2 mb-8">
          <Link to={href('/')} className="hover:underline">{isEn ? 'Home' : 'Ana Sayfa'}</Link><span aria-hidden="true">/</span>
          {family ? <><Link to={href('/hizmetler')} className="hover:underline">{isEn ? 'Services' : 'Hizmetler'}</Link><span aria-hidden="true">/</span><span aria-current="page">{copy(family.name)}</span></> : <span aria-current="page">{isEn ? 'Services' : 'Hizmetler'}</span>}
        </nav>
        <section className="max-w-4xl mb-14">
          <p className="text-sm font-semibold tracking-wide text-[#446CB5] mb-4">{isEn ? 'OVERSEAS MARKETING · SERVICE DIRECTORY' : 'OVERSEAS MARKETING · HİZMETLER'}</p>
          <h1 className="font-['Inter_Tight'] text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-6">{family ? copy(family.name) : isEn ? 'Marketing & growth services' : 'Dijital pazarlama ve büyüme hizmetleri'}</h1>
          <p className="text-lg text-[#595F69] leading-relaxed mb-6">{family?.hub ? copy(family.hub.intro) : isEn ? 'Choose a starting point by the problem your organisation needs to solve. Advertising, search visibility, web, communication workflows and content are connected parts of the same growth plan.' : 'Kurumunuzun çözmek istediği soruna göre başlangıç alanını seçin. Reklam, arama görünürlüğü, web, iletişim akışları ve içerik aynı büyüme planının birbirine bağlı parçalarıdır.'}</p>
          <button onClick={openAnalysis} className="inline-flex items-center gap-2 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white px-6 py-3.5 font-semibold cursor-pointer">{isEn ? 'Get a Growth Analysis' : 'Büyüme Analizi Al'}<ArrowRight className="w-4 h-4" aria-hidden="true" /></button>
        </section>
        {!family ? <>
          <section aria-labelledby="service-families" className="mb-16">
            <h2 id="service-families" className="text-2xl font-bold mb-6">{isEn ? 'Six service families, one growth plan' : 'Altı hizmet ailesi, ortak büyüme planı'}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {families.map((item, index) => <article key={item.id} data-service-family={item.id} className="bg-white border border-[#DDE2E8] rounded-3xl p-7 flex flex-col">
                <p className="text-sm font-semibold text-[#446CB5] mb-3">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="text-2xl font-bold mb-3">{copy(item.name)}</h3>
                <p className="text-[#595F69] leading-relaxed mb-5">{copy(item.description)}</p>
                <p className="text-sm leading-relaxed border-l-2 border-[#446CB5] pl-3 mb-5"><strong>{isEn ? 'Start here: ' : 'Buradan başlayın: '}</strong>{copy(item.need)}</p>
                <div className="mt-auto">{familyLink(item)}</div>
              </article>)}
            </div>
          </section>
          <section className="bg-white border border-[#DDE2E8] rounded-3xl p-8 sm:p-10 mb-12" aria-labelledby="starting-point">
            <h2 id="starting-point" className="text-2xl font-bold mb-4">{isEn ? 'How do we choose the right scope?' : 'Doğru çalışma kapsamını nasıl seçiyoruz?'}</h2>
            <p className="text-[#595F69] leading-relaxed mb-5">{isEn ? 'Review your organisation, target countries and current acquisition process before choosing a channel. A CRM follow-up problem and an advertising problem need different interventions.' : 'Kanal seçmeden önce kurumunuzu, hedef ülkeleri ve mevcut başvuru sürecini birlikte değerlendiririz. CRM takibindeki bir sorun ile reklam erişimindeki bir sorun farklı müdahaleler gerektirir.'}</p>
            <ol className="list-decimal pl-5 space-y-3 text-[#595F69]"><li>{isEn ? 'Define the audience, languages and target markets.' : 'Hedef kitleyi, dilleri ve hedef pazarları netleştirin.'}</li><li>{isEn ? 'Identify the bottleneck between discovery, enquiry and follow-up.' : 'Görünürlük, başvuru ve takip arasındaki darboğazı belirleyin.'}</li><li>{isEn ? 'Agree priorities, ownership and measurement for the selected services.' : 'Seçilen hizmetler için öncelik, sorumluluk ve ölçüm planını oluşturun.'}</li></ol>
          </section>
        </> : family.hub && <>
          <section className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white border border-[#DDE2E8] rounded-3xl p-8"><h2 className="text-2xl font-bold mb-5">{isEn ? 'How we structure the work' : 'Çalışmayı nasıl kurguluyoruz?'}</h2><ol className="list-decimal pl-5 space-y-4 text-[#595F69] leading-relaxed">{family.hub.steps.map(step => <li key={step.tr}>{copy(step)}</li>)}</ol></div>
            <div className="bg-white border border-[#DDE2E8] rounded-3xl p-8"><h2 className="text-2xl font-bold mb-5">{isEn ? 'Outputs we plan together' : 'Birlikte planladığımız çıktılar'}</h2><ul className="space-y-4 text-[#595F69]">{family.hub.outputs.map(output => <li key={output.tr} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-[#446CB5] shrink-0" aria-hidden="true" />{copy(output)}</li>)}</ul></div>
          </section>
          <section className="mb-12"><h2 className="text-2xl font-bold mb-5">{isEn ? 'Explore the related services' : 'İlgili alt hizmetleri inceleyin'}</h2><div className="grid sm:grid-cols-2 gap-4">{family.links.map(link => <Link key={link.url} to={href(link.url)} className="bg-white border border-[#DDE2E8] rounded-2xl p-5 font-semibold text-[#446CB5] flex items-center justify-between gap-4 hover:underline">{copy(link.label)}<ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" /></Link>)}</div></section>
          <section className="mb-12 max-w-4xl"><h2 className="text-2xl font-bold mb-4">{isEn ? 'Scope and working boundaries' : 'Kapsam ve çalışma sınırları'}</h2><p className="text-[#595F69] leading-relaxed">{copy(family.hub.boundary)}</p></section>
          <Link to={href('/hizmetler')} className="text-[#446CB5] font-semibold hover:underline inline-block mb-10">{isEn ? 'Explore all six service families' : 'Altı hizmet ailesinin tamamını inceleyin'}</Link>
        </>}
        <section className="bg-[#16202E] text-white rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{isEn ? 'Let’s identify your starting point' : 'Kurumunuzun başlangıç noktasını birlikte belirleyelim'}</h2>
          <p className="text-slate-300 max-w-3xl leading-relaxed mb-6">{isEn ? 'Share your target markets, existing channels and communication process. We can review the service scope and priorities around your current situation.' : 'Hedef pazarlarınızı, mevcut kanallarınızı ve başvuru takip sürecinizi paylaşın. Mevcut durumunuza göre hizmet kapsamını ve öncelikleri birlikte değerlendirelim.'}</p>
          <button onClick={openAnalysis} className="rounded-xl bg-[#446CB5] hover:bg-[#345999] px-6 py-3.5 font-semibold cursor-pointer">{isEn ? 'Get a Growth Analysis' : 'Büyüme Analizi Al'}</button>
        </section>
      </div>
    </div>
  );
}
