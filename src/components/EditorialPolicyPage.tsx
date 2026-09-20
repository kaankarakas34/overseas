import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Search, 
  AlertTriangle, 
  RefreshCw, 
  Cpu, 
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

export const EditorialPolicyPage: React.FC = () => {
  const { isEn } = useLanguage();

  const principles = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Healthcare & Regulatory Compliance" : "Mevzuat ve Tanıtım İlkelerine Uyum",
      desc: isEn
        ? "All content strictly complies with Turkish healthcare advertising regulations (Law No. 1219, Law No. 3359) and target country advertising authorities. We never make therapeutic promises, guarantee medical outcomes, or present marketing claims as clinical facts."
        : "Yayımlanan tüm içerikler 1219 sayılı Kanun, 3359 sayılı Sağlık Hizmetleri Temel Kanunu ve ilgili sağlık tanıtım yönetmeliklerine tam uyumludur. Tıbbi tavsiye verilmez, tedavi garantisi vaat edilmez ve pazarlama argümanları klinik gerçeklik gibi sunulmaz."
    },
    {
      icon: <Search className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Primary Source Verification" : "Birincil ve Resmî Kaynak Doğrulaması",
      desc: isEn
        ? "Data, statistics, and regulatory interpretations are cross-referenced with primary sources such as official government gazettes, Ministry of Trade export guides, and recognized academic literature. Unverified third-party claims are discarded."
        : "İstatistikler, pazar büyüklükleri ve mevzuat yorumları T.C. Resmî Gazete, Ticaret Bakanlığı ihracat ve sağlık turizmi destek rehberleri ve akademik literatür gibi resmî kaynaklarla çapraz doğrulanır. Kaynağı teyit edilemeyen sayılar kullanılmaz."
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Responsible AI & Human-in-the-Loop" : "Yapay Zekâ ve İnsan Denetimi Dengesi",
      desc: isEn
        ? "When generative AI tools are utilized for preliminary research, data clustering, or drafting, every piece of output goes through comprehensive human verification by senior growth strategists before publication."
        : "Yapay zekâ araçları veri kümeleme, ön araştırma veya taslak hazırlama süreçlerinde yardımcı olarak kullanılabilir; ancak her içerik yayına girmeden önce kıdemli büyüme ve SEO stratejistleri tarafından satır satır denetlenir ve doğrulanır."
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#446CB5]" />,
      title: isEn ? "Editorial Independence & Corrections" : "Düzeltme ve Düzenli Güncellik Politikası",
      desc: isEn
        ? "We review published guides semi-annually. When regulatory guidelines change or numerical data requires revision, articles are transparently updated with explicit dateModified timestamps and revision notes."
        : "Kılavuz ve analizlerimiz düzenli aralıklarla gözden geçirilir. Mevzuat değiştiğinde veya yeni veriler yayımlandığında içerikler güncellenir ve son güncelleme tarihi (dateModified) açıkça kullanıcıya ve arama motorlarına sunulur."
    }
  ];

  const editorialSteps = [
    {
      step: "01",
      title: isEn ? "Topic Selection & Search Intent Mapping" : "Konu Belirleme ve Arama Niyeti Tespiti",
      desc: isEn 
        ? "Topics are derived from real clinic challenges, foreign patient inquiries, and regulatory requirements rather than generic keyword stuffing."
        : "Konular anahtar kelime doldurmak için değil; kliniklerin, hekimlerin ve uluslararası hasta adaylarının gerçek soru ve ihtiyaçlarından türetilir."
    },
    {
      step: "02",
      title: isEn ? "Data Collection & Fact-Checking" : "Veri Toplama ve Çapraz Kontrol",
      desc: isEn 
        ? "Verifiable data is gathered from primary institutions: Ministry of Health, USHAŞ, Ministry of Trade, and target market healthcare authorities (e.g. NHS, JCI)."
        : "Resmî kurumlar, Sağlık Bakanlığı, USHAŞ, Ticaret Bakanlığı ve hedef pazar sağlık kuruluşlarının (NHS, JCI) güncel raporları incelenir."
    },
    {
      step: "03",
      title: isEn ? "Senior Practitioner Authorship" : "Uzman Tarafından Hazırlanma",
      desc: isEn 
        ? "Drafts are authored by verified growth leads and medical SEO practitioners with genuine domain experience."
        : "İçerikler, sağlık turizmi ve dijital büyüme alanında doğrudan saha tecrübesine sahip stratejistler tarafından kaleme alınır."
    },
    {
      step: "04",
      title: isEn ? "Legal & Ethical Review" : "Hukuki ve Etik Son Okuma",
      desc: isEn 
        ? "Final scrutiny ensures no superlative claims ('the best', '#1'), no misleading patient guarantees, and complete KVKK/GDPR transparency."
        : "Kanıtsız üstünlük iddiaları ('en iyi', '1 numara'), garanti vaatleri ve yanıltıcı yönlendirmeler son okumada tamamen ayıklanır."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Editorial Policy & Publishing Standards | Overseas Marketing" : "Yayın İlkeleri ve Editoryal Politika | Overseas Marketing"}
        description={isEn
          ? "Our editorial policy: How Overseas Marketing researches, fact-checks, authors, and reviews healthcare growth guides and regulatory analysis."
          : "Overseas Marketing yayın ilkeleri: Sağlık turizmi pazarlaması, mevzuat analizleri ve rehberlerimizin hazırlanış, doğrulama ve editoryal denetim süreçleri."}
        canonicalUrl="https://www.overseas.marketing/yayin-ilkeleri"
      />
      <JsonLdSchema 
        type="service" 
        customTitle="Yayın İlkeleri ve Editoryal Politika | Overseas Marketing"
        customUrl="https://www.overseas.marketing/yayin-ilkeleri"
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{isEn ? "Editorial Integrity & E-E-A-T" : "Editoryal Güvenilirlik & E-E-A-T"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Our Commitment to <span className="text-[#446CB5]">Truthful, Verifiable & Regulatory-Compliant</span> Knowledge.</>
          ) : (
            <>Doğrulanabilir, Mevzuata Uygun ve <span className="text-[#446CB5]">Şeffaf Bilgi Üretim</span> İlkelerimiz.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Healthcare marketing and international patient acquisition touch sensitive decisions. At Overseas Marketing, we hold our educational guides, industry benchmarks, and strategic frameworks to the highest editorial standards."
            : "Sağlık turizmi ve hekim iletişimi, hem etik hem de yasal açıdan en yüksek hassasiyet gerektiren alanlardandır. Overseas Marketing olarak yayımladığımız her rehber, vaka analizi ve stratejik içerikte şeffaf, doğrulanabilir ve mevzuata tam uyumlu bir editoryal süreç işletiyoruz."}
        </p>
      </section>

      {/* Direct Answer Summary Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#446CB5] mb-2">
            {isEn ? "Direct Summary / Editorial Standard" : "Özet / Editoryal Standartlarımız"}
          </h2>
          <p className="text-base text-[#16202E] font-medium leading-relaxed">
            {isEn
              ? "Overseas Marketing produces content strictly as a digital marketing, technology, and analytics agency. We do not provide medical services, clinical advice, or patient outcome guarantees. Our content is designed to inform healthcare executives, physicians, and clinic managers on sustainable patient acquisition, international advertising law, and technological infrastructure."
              : "Overseas Marketing, içeriklerini bir dijital pazarlama, yazılım ve veri analitiği ajansı kimliğiyle üretir. Şirketimiz sağlık hizmeti sunmaz, tıbbi tavsiye vermez ve tedavi garantisi vaat etmez. İçeriklerimizin amacı; klinik yöneticileri, hekimler ve sağlık turizmi paydaşlarına sürdürülebilir hasta kazanımı, yasal reklam sınırları, CRM süreçleri ve yapay zekâ teknolojileri konusunda doğru ve tarafsız bilgi sunmaktır."}
          </p>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-10">
          {isEn ? "Four Pillars of Our Editorial Process" : "Editoryal Sürecimizin Dört Temel İlkesi"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((item, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#EEF3FB] flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E] mb-3">
                {item.title}
              </h3>
              <p className="text-[#595F69] text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl border border-[#DDE2E8] p-8 sm:p-12 shadow-sm">
          <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-[#16202E] mb-8">
            {isEn ? "How an Article Is Authored & Verified" : "Bir İçerik Nasıl Hazırlanır ve Denetlenir?"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {editorialSteps.map((s, idx) => (
              <div key={idx} className="relative">
                <span className="text-4xl font-extrabold text-[#446CB5]/20 block mb-2 font-mono">
                  {s.step}
                </span>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#16202E] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#595F69] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corrections and Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#16202E] text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              {isEn ? "Notice an Inaccuracy or Regulatory Change?" : "Bir Hata veya Mevzuat Değişikliği mi Fark Ettiniz?"}
            </h2>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              {isEn
                ? "We take factual accuracy seriously. If you identify an outdated citation, a legal change, or an unclear statement, please notify our editorial board at info@overseas.marketing."
                : "Bilgi doğruluğuna azami önem veriyoruz. Rehberlerimizde güncelliğini yitirmiş bir kaynak, değişen bir yönetmelik maddesi veya düzeltilmesi gereken bir veri tespit ederseniz lütfen editoryal birimimize info@overseas.marketing üzerinden bildirin."}
            </p>
          </div>
          <Link
            to="/iletisim"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#355694] text-white font-semibold text-sm transition-colors shrink-0"
          >
            <span>{isEn ? "Contact Editorial Board" : "Editoryal İletişim"}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
