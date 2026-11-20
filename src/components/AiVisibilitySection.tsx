import { ArrowUpRight, FileSearch, MessageCircle, Route, ScanSearch } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const SITE_URL = 'https://yapayzekadareklam.com';

export const AiVisibilitySection = () => {
  const { isEn } = useLanguage();
  const steps = isEn
    ? [
        { icon: ScanSearch, title: 'Understand your visibility', description: 'See how your clinic appears in AI answers and which sources are referenced.' },
        { icon: FileSearch, title: 'Strengthen your sources', description: 'Build a clear, consistent information structure across your website and content with GEO.' },
        { icon: Route, title: 'Plan your next steps', description: 'Prioritize the gaps in your visibility and track changes over time.' },
      ]
    : [
        { icon: ScanSearch, title: 'Görünürlüğünüzü anlayın', description: 'Kliniğinizin yapay zekâ yanıtlarında nasıl yer aldığını ve hangi kaynakların referans gösterildiğini inceleyin.' },
        { icon: FileSearch, title: 'Kaynaklarınızı güçlendirin', description: 'GEO ile web sitenizde ve içeriklerinizde açık, tutarlı bir bilgi yapısı oluşturun.' },
        { icon: Route, title: 'Yol haritanızı belirleyin', description: 'Görünürlük eksiklerini önceliklendirin, gelişimi zaman içinde takip edin.' },
      ];

  return (
    <section id="yapay-zekada-reklam" aria-labelledby="ai-visibility-title" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-left">
            <div className="mb-7 border-l-2 border-[#446CB5] pl-4">
              <p className="font-['Inter_Tight'] text-xl font-bold tracking-tight text-[#222222]">Yapay Zekada Reklam</p>
              <p className="mt-1 text-sm text-[#595F69]">
                {isEn ? 'An Overseas Marketing brand' : 'Bir Overseas Marketing markası'}
              </p>
            </div>

            <h2 id="ai-visibility-title" className="max-w-xl font-['Inter_Tight'] text-3xl font-extrabold leading-tight tracking-tight text-[#222222] sm:text-4xl">
              {isEn ? 'Does your clinic appear in AI answers?' : 'Kliniğiniz yapay zekânın yanıtlarında yer alıyor mu?'}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#595F69]">
              {isEn
                ? 'What information do people find about your clinic when they ask ChatGPT, Gemini or Perplexity? Through Yapay Zekada Reklam, our specialist brand for AI visibility, we help you assess your presence and plan how to improve it.'
                : 'ChatGPT, Gemini veya Perplexity’ye kliniğinizi soran bir kişi hangi bilgilerle karşılaşıyor? Yapay zekâda görünürlük alanındaki uzman markamız Yapay Zekada Reklam ile mevcut durumunuzu analiz ediyor, gelişim için yol haritanızı oluşturuyoruz.'}
            </p>

            <div className="mt-7 flex flex-col items-start gap-4">
              <a
                href={`${SITE_URL}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#446CB5] px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#35558F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#446CB5] sm:w-auto"
              >
                {isEn ? 'Explore Yapay Zekada Reklam' : 'Yapay Zekada Reklam’ı keşfedin'}
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="sr-only">{isEn ? '(opens in a new tab)' : '(yeni sekmede açılır)'}</span>
              </a>
              <a
                href={`${SITE_URL}/yapay-zeka-gorunurluk-analizi/`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-[#35558F] underline decoration-[#446CB5]/40 underline-offset-4 hover:decoration-[#35558F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#446CB5]"
              >
                {isEn ? 'Request a visibility analysis' : 'Görünürlük analizi isteyin'}
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="sr-only">{isEn ? '(opens in a new tab)' : '(yeni sekmede açılır)'}</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#EEF3FB] p-6 text-left sm:p-8">
            <div className="flex items-center gap-3 text-sm font-semibold text-[#35558F]">
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span>{isEn ? 'Every patient journey starts with a question' : 'Hasta yolculuğu bir soruyla başlar'}</span>
            </div>
            <blockquote className="mt-4 font-['Inter_Tight'] text-2xl font-semibold leading-snug text-[#222222] sm:text-[28px]">
              {isEn ? '“What should I consider when choosing a clinic in Turkey?”' : '“Türkiye’de klinik seçerken nelere dikkat etmeliyim?”'}
            </blockquote>
            <p className="mt-3 text-xs text-[#595F69]">
              {isEn ? 'Example search question for ChatGPT, Gemini and Perplexity.' : 'ChatGPT, Gemini ve Perplexity için örnek bir arama sorusu.'}
            </p>

            <ul className="mt-7 divide-y divide-[#446CB5]/15 border-t border-[#446CB5]/15">
              {steps.map(({ icon: Icon, title, description }) => (
                <li key={title} className="flex gap-3 py-5 last:pb-0">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#446CB5]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-bold text-[#222222]">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#595F69]">{description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
