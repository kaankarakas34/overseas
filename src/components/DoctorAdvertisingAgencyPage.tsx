import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Search, 
  BrainCircuit, 
  Video, 
  Newspaper, 
  Scale, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  FileText, 
  Lock, 
  HelpCircle,
  Building2,
  Stethoscope,
  Send,
  Phone,
  Mail,
  Clock,
  Layers,
  Award
} from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.63 1.63 0 0 0-1.63 1.63 1.63 1.63 0 0 0 1.63 1.63 1.63 1.63 0 0 0 1.63-1.63A1.63 1.63 0 0 0 7.83 6.45Z" />
  </svg>
);
import confetti from 'canvas-confetti';
import { SEOHead } from './SEOHead';
import { DOCTOR_ARTICLES } from '../data/doctorArticlesData';

interface DoctorAdvertisingAgencyPageProps {
  onOpenConsultation: () => void;
}

export const DoctorAdvertisingAgencyPage: React.FC<DoctorAdvertisingAgencyPageProps> = ({ onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Lead Generation Form State
  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    specialty: '',
    institutionType: 'Özel Muayenehane',
    phone: '',
    email: '',
    selectedServices: [] as string[],
    notes: '',
    kvkkConsent: false
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const availableServices = [
    'Doktor SEO & Bilgi Mimarisi',
    'GEO & Yapay Zekâ (AI Overviews) Görünürlüğü',
    'YouTube Eğitici Video Stratejisi',
    'Instagram Deontolojik İçerik Yönetimi',
    'LinkedIn Kişisel Marka & Düşünce Liderliği',
    'Doktor PR & Ulusal Medya Görüşü',
    'Uluslararası Sağlık Turizmi Reklam Kurulumu',
    'Tümleşik Hekim Dijital İletişim Paketi'
  ];

  const handleToggleService = (service: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(service);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== service)
          : [...prev.selectedServices, service]
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          clinicName: `${formData.clinicName} (${formData.institutionType} - ${formData.specialty})`,
          email: formData.email,
          phone: formData.phone,
          selectedServices: formData.selectedServices,
          message: `[DOKTOR REKLAM AJANSI FORMU]\nBranş: ${formData.specialty}\nKurum Türü: ${formData.institutionType}\nNotlar: ${formData.notes}`,
          formType: 'Doktor Reklam Ajansı Başvuru Formu'
        })
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Form submission failed:', err);
      // Still show success fallback so doctor can reach out
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToForm = () => {
    const el = document.getElementById('doktor-basvuru-formu');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      q: "Doktor reklam ajansı doğrudan reklam verir mi?",
      a: "Yurt içi sağlık iletişiminde doğrudan ve sponsorlu performans reklamları yasal olarak yasaklanmış ve çok sıkı sınırlandırılmıştır. Overseas Marketing olarak bizim temel hizmetimiz 'reklam yasağını delmek' değil; organik SEO, GEO (yapay zekâ optimizasyonu), kaynaklı içerik kütüphaneleri, hekim düşünce liderliği, YouTube ve editoryal PR sistemiyle hekime ceza riski olmadan sürdürülebilir organik hasta başvurusu kazandırmaktır. Uluslararası sağlık turizmi kampanyaları ise yetki belgesi şartıyla ayrı bir hukuki yapıda yürütülür."
    },
    {
      q: "Doktorlar Google Ads (Arama Ağı Reklamı) kullanabilir mi?",
      a: "Genel ve koşulsuz bir 'evet' cevabı güvenli değildir. 12 Kasım 2025 tarihli güncel yönetmelik, yurt içinde ücretli ve sponsorlu öne çıkmaya yönelik faaliyetleri kesin olarak sınırlar. Google Arama Ağı'nda reklam açabilmek yalnızca yetkili kurum türü, yurt dışı hedefleme ve sağlık turizmi yetki belgesi şartlarıyla mümkündür. Yurt içi aramalarda en güvenli ve kalıcı yol organik hekim SEO'sudur."
    },
    {
      q: "Doktorlar Instagram'da nelere dikkat ederek içerik paylaşabilir?",
      a: "Mevzuata uygun olarak tescilli unvan, çalışma saatleri ve sağlığı koruyucu eğitici bilgiler paylaşılabilir. Ancak hasta fotoğrafları için Bakanlık onamına uygun yazılı açık rıza alınması, filtrenin/ışık oyununun yasak olması, ameliyat anı görüntülerinin kesinlikle paylaşılmaması, yorum-beğeni-paylaşım etkileşimlerinin kapatılması ve görsel paylaşımların ASLA sponsorlu olarak öne çıkarılmaması şarttır."
    },
    {
      q: "SEO ve GEO yapmak doktor reklam yasağına girer mi?",
      a: "Hayır. Arama motorlarında bulunabilir olmak ve bir web sitesine sahip olmak yasak değildir. Tam aksine doğru yapılandırılmış bir SEO ve GEO (üretken yapay zekâ arama optimizasyonu), kullanıcıların gerçek sağlık sorularına bilimsel kaynaklarla yanıt veren en etik iletişim yoludur. Ancak sitedeki metinlerin fiyat, kampanya, üstünlük iddiası ve agresif satış çağrılarından arındırılmış olması gerekir."
    },
    {
      q: "GEO (Generative Engine Optimization) doktorlara ne kazandırır?",
      a: "GEO; ChatGPT, Google AI Overviews, Perplexity ve Gemini gibi yeni nesil cevap motorlarının hekimin makalelerini, klinik yaklaşımlarını ve uzmanlık alanını doğrudan kaynak olarak alıntılamasını sağlar. Bir hasta yapay zekâya 'X belirtisi ne anlama gelir?' diye sorduğunda, yanıtın altında doktorunuzun kaynak makalesi ve adı referans olarak önerilir."
    },
    {
      q: "Hasta yorumları ve teşekkür mesajları sosyal medyada paylaşılabilir mi?",
      a: "Hayır. Yurt içi tanıtım faaliyetlerinde hastaların veya hasta yakınlarının teşekkür, övgü ve memnuniyet ifadeleri üzerinden reklam mahiyetinde paylaşım yapılması yönetmeliğin 5. maddesi gereğince açıkça yasaklanmıştır. Bu kural yalnızca uluslararası sağlık turizmi yetki belgesi olan kuruluşlarda ve yalnızca yurt dışı hesaplarda özel şartlarla esnetilmektedir."
    },
    {
      q: "Doktor PR çalışması reklam yasağına takılır mı?",
      a: "Editoryal, kamu sağlığını koruyucu ve bilimsel uzman görüşü ile gizli reklam birbirinden kesin çizgilerle ayrılır. Bir hekimin AA, TRT veya NTV'de mevsimsel bir salgın veya yeni bir kılavuz hakkında tarafsız görüş vermesi haber değeridir. Ancak haberin içinde ticari yönlendirme, randevu linki veya üstünlük iddiaları bulunursa gizli reklam cezası doğar. Overseas Marketing PR süreci bu riski sıfırlar."
    },
    {
      q: "12 Kasım 2025 tarihli yeni yönetmelik neleri değiştirdi?",
      a: "33075 sayılı Resmî Gazete'de yayımlanan yönetmelik, 29 Temmuz 2023 tarihli önceki metni yürürlükten kaldırmıştır. Yeni düzenleme web sitelerinde 'son güncelleme tarihi' ve 'editör iletişim bilgisi'ni zorunlu kılmış, görsel içeriklerde etkileşim kapatma kuralını getirmiş ve sağlık turizmi reklamlarının yurt içi kullanıcılara gösterilmesini ağır yaptırımlara bağlamıştır."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#222222] min-h-screen">
      <SEOHead
        title="Doktor Reklam Ajansı | SEO, GEO, YouTube, LinkedIn ve PR | Overseas Marketing"
        description="Doktorlar için mevzuata uygun SEO, GEO, YouTube, Instagram, LinkedIn ve PR stratejileri. Reklam yasağını gözeten, ceza riski olmayan sürdürülebilir hekim görünürlüğü."
        canonicalUrl="https://www.overseas.marketing/doktor-reklam-ajansi"
      />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "name": "Doktor Reklam Ajansı Hizmeti",
                "serviceType": "Doktorlar ve Klinikler İçin Mevzuata Uygun SEO, GEO, YouTube, LinkedIn ve PR Yönetimi",
                "provider": {
                  "@type": "Organization",
                  "name": "Overseas Marketing",
                  "url": "https://www.overseas.marketing"
                },
                "areaServed": {
                  "@type": "Country",
                  "name": "Turkey"
                },
                "description": "12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete yönetmeliğine %100 uyumlu, ceza riski taşımayan hekim dijital itibar ve hasta görünürlüğü sistemi.",
                "url": "https://www.overseas.marketing/doktor-reklam-ajansi"
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Ana Sayfa",
                    "item": "https://www.overseas.marketing"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Sağlık Pazarlaması",
                    "item": "https://www.overseas.marketing/hizmetler/performans-pazarlama"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Doktor Reklam Ajansı",
                    "item": "https://www.overseas.marketing/doktor-reklam-ajansi"
                  }
                ]
              },
              {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                  "@type": "Question",
                  "name": f.q,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.a
                  }
                }))
              }
            ]
          })
        }}
      />

      {/* Top Regulatory Notice Bar */}
      <div className="bg-[#16202E] text-slate-200 text-xs py-2.5 px-4 border-b border-slate-700">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#446CB5] text-white">
              GÜNCEL MEVZUAT
            </span>
            <span className="text-slate-300">
              Bu sayfa, <strong>12 Kasım 2025 tarihli ve 33075 sayılı Resmî Gazete</strong>’de yayımlanan yönetmeliğe tam uyumlu hazırlanmıştır.
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Son Bilimsel & Hukuki Kontrol: 18 Eylül 2026</span>
            <a 
              href="https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#60A5FA] hover:underline flex items-center gap-1"
            >
              <span>Resmî Gazete PDF</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#16202E] via-[#1E2B3E] to-[#16202E] text-white py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#60A5FA_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-slate-300">Sağlık Pazarlaması</span>
            <span>/</span>
            <span className="text-[#60A5FA] font-medium">Doktor Reklam Ajansı</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                <span>Ceza Riski Sıfır · %100 Sağlık Bakanlığı Mevzuatı Uyumlu</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-['Inter_Tight'] tracking-tight">
                Doktor Reklam Ajansı: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#93C5FD] to-white">
                  Mevzuata Uygun Dijital Görünürlük
                </span> ve Uzmanlık İletişimi
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Türkiye’de açık veya örtülü doktor reklamı yasaktır. <strong>Amacımız yasağı delmek değil;</strong> reklam kısıtlamalarına takılmadan hekimin tescilli uzmanlığını, bilimsel otoritesini ve güvenilirliğini anlatan sürdürülebilir bir dijital ekosistem kurmaktır.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={scrollToForm}
                  className="px-6 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-sm font-semibold shadow-lg shadow-blue-900/30 transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Hekiminiz İçin Strateji Talep Edin</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onOpenConsultation}
                  className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 border border-slate-700 text-sm font-semibold transition-all cursor-pointer"
                >
                  Ücretsiz Ön Değerlendirme
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>İdari Para Cezası Riski Yok</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Organik Hasta Talebi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Yapay Zekâ (GEO) Alıntıları</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Editoryal Medya PR'ı</span>
                </div>
              </div>
            </div>

            {/* GEO Quick Answer Box (AI Overview & Crawler Box) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border-2 border-blue-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md relative text-left">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                  <div className="flex items-center gap-2">
                    <BrainCircuit className="w-5 h-5 text-[#60A5FA]" />
                    <span className="font-['Inter_Tight'] text-sm font-bold text-white uppercase tracking-wider">
                      GEO & AI Overview Özeti
                    </span>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-900/50 text-blue-200 border border-blue-700/50 font-mono">
                    Doğrudan Cevap
                  </span>
                </div>

                <blockquote className="text-sm text-slate-200 leading-relaxed space-y-3 font-normal">
                  <p>
                    <strong className="text-white">Kısa Cevap:</strong> <strong>Doktor reklam ajansı</strong>; sağlık mevzuatının, tıbbi deontolojinin ve hasta mahremiyetinin katı sınırlarını bilen; doktorun dijital görünürlüğünü doğrudan reklamla değil, <em>organik SEO, GEO (yapay zekâ optimizasyonu), YouTube eğitici serileri, LinkedIn düşünce liderliği ve editoryal basın PR'ı</em> ile yöneten uzman danışmanlık ajansıdır.
                  </p>
                  <p className="text-xs text-slate-400">
                    Overseas Marketing, agresif ticari vaatler yerine doktorun yetkinliğini bilimsel kaynaklar, doğrulanabilir unvanlar ve hasta haklarına uygun içeriklerle inşa eder.
                  </p>
                </blockquote>

                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Mevzuat Kaynağı: 12 Kasım 2025 Yönetmeliği</span>
                  <span className="text-[#60A5FA] font-medium">Hukuk Onaylı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Regulatory Framework Bar (Official State Links) */}
      <section className="bg-white border-b border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">RESMÎ VE BİRİNCİL HUKUKİ KAYNAKLAR</span>
            <h2 className="text-xl font-bold text-[#16202E] mt-1">Stratejimizin Dayandığı Resmî Devlet Mevzuatları</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
            <a 
              href="https://antalyaism.saglik.gov.tr/TR-366500/saglik-hizmetlerinde-tanitim-ve-bilgilendirme--faaliyetleri-hakkinda-yonetmelik.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="font-semibold text-slate-800 group-hover:text-[#446CB5] flex items-center justify-between">
                <span>Sağlık Bakanlığı Yönetmeliği</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5]" />
              </div>
              <span className="text-[11px] text-slate-500 mt-2">Tanıtım ve Bilgilendirme İlkeleri (12.11.2025)</span>
            </a>

            <a 
              href="https://resmigazete.gov.tr/eskiler/2025/11/20251112-2-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="font-semibold text-slate-800 group-hover:text-[#446CB5] flex items-center justify-between">
                <span>Resmî Gazete 33075</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5]" />
              </div>
              <span className="text-[11px] text-slate-500 mt-2">Yönetmelik Resmî İlanı ve Ek-2 Yaptırım Formu</span>
            </a>

            <a 
              href="https://shgmturizmdb.saglik.gov.tr/TR-108367/yeni-saglik-turizmi-yonetmeligi.html"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="font-semibold text-slate-800 group-hover:text-[#446CB5] flex items-center justify-between">
                <span>Sağlık Turizmi Yönetmeliği</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5]" />
              </div>
              <span className="text-[11px] text-slate-500 mt-2">Uluslararası Yetki ve Reklam İstisnası Hükümleri</span>
            </a>

            <a 
              href="https://www.kvkk.gov.tr/Icerik/2051/Ozel-Nitelikli-Kisisel-Veriler"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="font-semibold text-slate-800 group-hover:text-[#446CB5] flex items-center justify-between">
                <span>KVKK Sağlık Verileri</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5]" />
              </div>
              <span className="text-[11px] text-slate-500 mt-2">Özel Nitelikli Sağlık Verisi ve Açık Rıza Standartları</span>
            </a>

            <a 
              href="https://www.healthturkiye.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition-all flex flex-col justify-between group"
            >
              <div className="font-semibold text-slate-800 group-hover:text-[#446CB5] flex items-center justify-between">
                <span>HealthTürkiye Portalı</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#446CB5]" />
              </div>
              <span className="text-[11px] text-slate-500 mt-2">Resmî Çatı Marka ve Yurt Dışı Uygunluk Kuralları</span>
            </a>
          </div>
        </div>
      </section>

      {/* Critical Legal Positioning: Why We Don't Break Laws, We Build Authority */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                <Scale className="w-6 h-6 text-[#446CB5]" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#16202E] font-['Inter_Tight']">
                  Doktor Reklamı Neden Sıradan Bir Reklam Çalışması Değildir?
                </h2>
                <p className="text-slate-600 mt-1 text-sm sm:text-base">
                  E-ticaret veya tüketici markalarında işe yarayan agresif pazarlama taktikleri hekim iletişiminde uygulanamaz.
                </p>
              </div>
            </div>

            <div className="prose max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 text-left">
              <p>
                Sağlık kararları doğrudan insan hayatı, bedeni ve psikolojisi üzerinde etkilidir. Bu nedenle mevzuat; “en iyi doktor”, “garantili sonuç”, “mucizevi tedavi”, “sıfır acı” veya “hemen randevu al” mantığıyla talep yaratmayı kesin olarak yasaklamıştır.
              </p>
              
              <div className="p-5 rounded-xl bg-blue-50/80 border-l-4 border-[#446CB5] text-slate-800 text-sm">
                <strong className="text-[#16202E] block mb-1">Kritik Hukuki Konumlandırmamız:</strong>
                "Türkiye’de sağlık hizmetlerinde açık veya örtülü reklam yasaktır. Buna karşılık mevzuatın çizdiği sınırlar içinde <strong>tanıtım ve bilgilendirme</strong> serbesttir. Overseas Marketing’in amacı kuralları çiğnemek, yasağı delmek veya riskli arka yollar aramak değildir. Amacımız; doktorun uzmanlığını, bilimsel katkısını ve kurumsal saygınlığını mevzuata %100 uygun organik kanallarla anlatarak hastanın hekime kendi rızasıyla ulaşmasını sağlayan bir sistem kurmaktır."
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="p-5 rounded-xl bg-red-50/70 border border-red-200">
                  <h3 className="font-bold text-red-900 text-sm mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Kaçınılması Gereken Riskli İfadeler (Ceza Sebebidir)
                  </h3>
                  <ul className="text-xs text-red-800 space-y-1.5 list-disc list-inside">
                    <li>“En iyi estetik cerrah”, “Türkiye'nin bir numarası” gibi doğrulanamaz unvanlar</li>
                    <li>“Yüzde 100 garantili sonuç”, “kesin tedavi”, “acısız mucize yöntem”</li>
                    <li>“Sadece bu haftaya özel %30 indirim”, “ücretsiz ön muayene” duyuruları</li>
                    <li>Hasta teşekkür mesajlarını sponsorlu reklamla Instagram'da öne çıkarmak</li>
                    <li>Rakip hekim veya hastaneleri küçümseyen karşılaştırmalar yapmak</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                  <h3 className="font-bold text-emerald-900 text-sm mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Kullanılan Güvenli & Mevzuata Uygun İletişim Dili
                  </h3>
                  <ul className="text-xs text-emerald-800 space-y-1.5 list-disc list-inside">
                    <li>“Uzmanlık alanına ilişkin sağlığı koruyucu ve geliştirici genel bilgiler”</li>
                    <li>“Her vaka ve cerrahi sonuç kişiye göre değişkenlik gösterebilir”</li>
                    <li>“Kesin tanı ve tedavi planı için yetkili sağlık profesyoneline başvurulmalıdır”</li>
                    <li>Hakemli bilimsel dergiler, kongre sunumları ve tıbbi kılavuz atıfları</li>
                    <li>Tescilli ana ve yan dal uzmanlıklarının, çalışma yeri ve saatlerinin net bildirimi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Layer Compliant Growth Architecture */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">GÜVENLİ BÜYÜME MODELİ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16202E] mt-2 font-['Inter_Tight']">
              Doktor Reklam Yasağına Takılmadan Görünürlük Nasıl Kurulur?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Sürdürülebilir hasta edinimi ceza riski taşıyan anlık kampanyalardan değil, 4 katmanlı kurumsal bir yayıncılık altyapısından gelir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#446CB5] font-bold text-lg mb-4">
                1
              </div>
              <h3 className="text-base font-bold text-[#16202E] mb-2">Bulunabilirlik</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Doktorun tescilli unvanı, branşı, muayenehane adresi ve çalışma saatleri Google Business Profile ve arama motorlarında doğru ve tutarlı şekilde indekslenir.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#446CB5] font-bold text-lg mb-4">
                2
              </div>
              <h3 className="text-base font-bold text-[#16202E] mb-2">Bilgilendirme</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hastaların arama motorlarında araştırdığı semptomlar, tetkik süreçleri ve koruyucu sağlık soruları korku yaymadan, bilimsel kaynaklarla cevaplanır.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#446CB5] font-bold text-lg mb-4">
                3
              </div>
              <h3 className="text-base font-bold text-[#16202E] mb-2">Otorite & Güven</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Akademik çalışmalar, kongre katılımları, YouTube eğitimleri, LinkedIn düşünce liderliği ve ulusal basında yer alan kamu yararına uzman görüşleri sergilenir.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-[#446CB5] font-bold text-lg mb-4">
                4
              </div>
              <h3 className="text-base font-bold text-[#16202E] mb-2">Uyum Kontrolü</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yayımlanan her metin, video karesi ve başlık; 12 Kasım 2025 yönetmeliği, KVKK ve meslek etiği süzgecinden geçirilerek çifte onayla yayına alınır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Service Pillars */}
      <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">TEK MERKEZDEN YÖNETİLEN BÜYÜME</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16202E] mt-2 font-['Inter_Tight']">
              Doktorlar İçin Sunduğumuz 6 Temel Hizmet
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Birbirinden kopuk sosyal medya paylaşımları yerine; arama motorlarını, yapay zekâyı, videoyu ve ulusal medyayı tek bir güven merkezinde birleştiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1. Doktor SEO */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#446CB5] flex items-center justify-center mb-5">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#16202E] mb-3">1. Doktor SEO Hizmeti</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Hekiminizin uzmanlık alanındaki hastalık belirtilerini, tetkik aşamalarını ve hasta sorularını kapsayan E-E-A-T uyumlu organik arama stratejisi.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Tıbbi arama niyetlerine göre derin konu kümeleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Hekim şeffaflığı, kaynakça ve son güncelleme mimarisi</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Google Business Profile & Harita arama optimizasyonu</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/doktorlar-icin-seo-ve-geo"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] hover:text-[#35558F] pt-4 border-t border-slate-100"
              >
                <span>Doktor SEO Rehberini Oku</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 2. Doktor GEO */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#446CB5] flex items-center justify-center mb-5">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#16202E] mb-3">2. Doktor GEO & Yapay Zekâ</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Google AI Overviews, ChatGPT, Perplexity ve Gemini'ın hekiminizi birincil güvenilir kaynak olarak alıntılaması için Generative Engine Optimization.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>İlk 60 kelimede doğrudan soru-cevap blokları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Person, MedicalOrganization ve FAQ yapılandırılmış verileri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Akademik yayın ve mesleki varlık ilişkilendirmesi</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/doktorlar-icin-seo-ve-geo"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] hover:text-[#35558F] pt-4 border-t border-slate-100"
              >
                <span>GEO ve Yapay Zekâ Stratejisi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 3. YouTube İçerik Stratejisi */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#446CB5] flex items-center justify-center mb-5">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#16202E] mb-3">3. YouTube İçerik Stratejisi</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Hekimin bilgisini ve cerrahi felsefesini uzun formatta anlatan, sansasyondan uzak ve hasta kaygısını gideren eğitici video motoru.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Ayda 1 çekim günüyle 2-4 derin YouTube videosu</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Korku veya mucize vaat etmeyen deontolojik başlıklar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Tek videodan 8+ dikey kısa klip (Shorts/Reels) üretimi</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/doktorlar-icin-youtube-instagram-icerik-pazarlamasi"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] hover:text-[#35558F] pt-4 border-t border-slate-100"
              >
                <span>Video Prodüksiyon Detayları</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 4. Instagram İçerik Yönetimi */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#446CB5] flex items-center justify-center mb-5">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#16202E] mb-3">4. Instagram İçerik Yönetimi</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Hasta haklarına, KVKK açık rızasına ve 12 Kasım 2025 yönetmeliğinin görsel kısıtlarına %100 uyumlu hekim sosyal medya yönetimi.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Tıbbi kavram kartları, diyagramlar ve hekim bilgilendirmeleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Yorum, beğeni ve yeniden paylaşım kapatma kontrolleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Yurt içi hastalara sponsorlu reklam çıkmama güvencesi</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/doktorlar-icin-youtube-instagram-icerik-pazarlamasi"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] hover:text-[#35558F] pt-4 border-t border-slate-100"
              >
                <span>Instagram Yönetim İlkeleri</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 5. LinkedIn Düşünce Liderliği */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#446CB5] flex items-center justify-center mb-5">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#16202E] mb-3">5. LinkedIn Kişisel Marka</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Hasta aramayan; meslektaşları, sağlık yöneticileri, akademi ve ulusal medya nezdinde hekimin uzmanlık otoritesini inşa eden prestij kanalı.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Klinik kılavuz değişimleri ve vaka analizleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Kongre, konferans ve akademik bildiri paylaşımları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Sağlık gazetecileri ve televizyon yapımcılarıyla ağ kurma</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/doktorlar-icin-linkedin-pazarlamasi"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] hover:text-[#35558F] pt-4 border-t border-slate-100"
              >
                <span>Hekim LinkedIn Stratejisi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* 6. Doktor PR ve Medya */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#446CB5] flex items-center justify-center mb-5">
                  <Newspaper className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#16202E] mb-3">6. Doktor PR ve Medya</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  Ücretli reklam yerine; AA, TRT, NTV ve Hürriyet gibi saygın ulusal mecralarda kamu sağlığına yönelik uzman görüşleriyle hak edilmiş editoryal itibar.
                </p>
                <ul className="text-xs text-slate-700 space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Haber değeri taşıyan araştırma ve veri bültenleri</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Mevsimsel sağlık risklerine dair basın görüş notları</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#446CB5]"></span>
                    <span>Televizyon ve radyo taahhütname süreçlerinin yönetimi</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/doktor-pr-medya-tanitimi"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#446CB5] hover:text-[#35558F] pt-4 border-t border-slate-100"
              >
                <span>Doktor Medya PR Rehberi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table: Yurt İçi İletişim vs Uluslararası Sağlık Turizmi */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">HUKUKİ AYRIM</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16202E] mt-2 font-['Inter_Tight']">
              Yurt İçi Doktor İletişimi ile Uluslararası Sağlık Turizmi Arasındaki Farklar
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Yurt dışı sağlık turizmi için tanınan istisnaların yurt içi hekim hesaplarında kullanılması en sık ceza kesilen hatalardan biridir.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#16202E] text-white">
                <tr>
                  <th className="py-3.5 px-4 font-semibold">Uygulama Alanı</th>
                  <th className="py-3.5 px-4 font-semibold">Yurt İçi Hekim / Klinik İletişimi</th>
                  <th className="py-3.5 px-4 font-semibold">Uluslararası Sağlık Turizmi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">Temel Yaklaşım</td>
                  <td className="py-3 px-4 text-slate-600">Mevzuata uygun bilgilendirme ve organik uzmanlık anlatımı</td>
                  <td className="py-3 px-4 text-slate-600">Yetki belgesi şartıyla yurt dışına yönelik tanıtım</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">Sponsorlu / Ücretli Reklam</td>
                  <td className="py-3 px-4 text-red-600 font-medium">Yurt içi kitleye sponsorlu reklam yasaktır</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Yurt dışı kitleye sponsorlu reklam verilebilir</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">İletişim Dili</td>
                  <td className="py-3 px-4 text-slate-600">Türkçe bilgilendirme içerikleri</td>
                  <td className="py-3 px-4 text-slate-600">Türkçe hariç diğer resmî diller (İngilizce, Almanca vb.)</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">Coğrafi Hedefleme</td>
                  <td className="py-3 px-4 text-slate-600">Organik; talep yaratıcı reklam hedeflemesi yok</td>
                  <td className="py-3 px-4 text-slate-600">Yalnızca yurt dışı ülkeler; Türkiye kesinlikle hariç tutulur</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">Hasta Yorumları & Teşekkür</td>
                  <td className="py-3 px-4 text-red-600 font-medium">Tanıtım amacıyla kullanılması kesinlikle yasaktır</td>
                  <td className="py-3 px-4 text-emerald-700 font-medium">Yetkili sağlık tesisinde açık rıza şartıyla kullanılabilir</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">Fiyat & Kampanya Duyurusu</td>
                  <td className="py-3 px-4 text-red-600 font-medium">Fiyat, indirim, promosyon, çekiliş yasaktır</td>
                  <td className="py-3 px-4 text-slate-600">Yönetmelikteki özel şartlarla şeffaf paket fiyatı duyurulabilir</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-800">Zorunlu Belge ve Görseller</td>
                  <td className="py-3 px-4 text-slate-600">Diploma tescili, son güncelleme tarihi, editör iletişimi</td>
                  <td className="py-3 px-4 text-slate-600">Uluslararası Sağlık Turizmi Yetki Belgesi & HealthTürkiye logosu</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sanctions, Fines and Audit Process */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="bg-[#16202E] text-white rounded-3xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-[#60A5FA]" />
              <div>
                <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider">RİSK ANALİZİ</span>
                <h2 className="text-2xl sm:text-3xl font-bold font-['Inter_Tight']">
                  Doktor Reklam Cezaları ve Yaptırım Riskleri
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-xs sm:text-sm leading-relaxed text-slate-300">
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60A5FA]"></span>
                  1219 Sayılı Kanun & Hekim Disiplini
                </h3>
                <p>
                  Tababet ve Şuabatı San'atlarının Tarzı İcrasına Dair Kanun uyarınca, mesleğini serbest veya kurum bünyesinde icra eden hekimlerin mevzuata aykırı reklam yapması durumunda para cezaları, Tabip Odası disiplin soruşturması ve meslekten geçici men cezaları gündeme gelebilir.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60A5FA]"></span>
                  3359 Sayılı Kanun & Ek-2 Formu
                </h3>
                <p>
                  Sağlık Hizmetleri Temel Kanunu ve güncel yönetmeliğin Ek-2 İdari Yaptırım Formu gereğince; sağlık kuruluşları ve yetkili aracı kuruluşlar hakkında ağır idari para cezaları, uyarılar ve tekrarı halinde ilgili birimin faaliyetinin geçici olarak durdurulması yaptırımları uygulanır.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#60A5FA]"></span>
                  KVKK & Özel Nitelikli Sağlık Verisi
                </h3>
                <p>
                  Hastanın açık rızası olmadan paylaşılan görsel ve videolar yalnızca sağlık mevzuatını değil, 6698 sayılı KVKK’yı da ihlal eder. Sağlık verisi 'özel nitelikli kişisel veri' olduğundan, KVKK Kurulu milyonlarca liraya ulaşan yaptırımlar uygulayabilmektedir.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
              <span>* İdari para cezaları yeniden değerleme oranına göre her yıl güncellendiğinden sabit rakamlar yanıltıcıdır.</span>
              <Link to="/doktor-reklam-cezasi" className="text-[#60A5FA] hover:underline flex items-center gap-1 font-semibold">
                <span>Doktor Reklam Cezaları Ayrıntılı Rehberi</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Marketing 5-Step Workflow */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">İŞ AKIŞIMIZ</span>
            <h2 className="text-3xl font-extrabold text-[#16202E] mt-2 font-['Inter_Tight']">
              Overseas Marketing Doktor İletişimini Nasıl Yönetir?
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Hekiminizi idari ve hukuki risklerden koruyan 5 adımlı güvenli çalışma modelimiz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xl font-extrabold text-[#446CB5] mb-2 font-mono">01</div>
              <h3 className="font-bold text-sm text-[#16202E] mb-2">Mevcut Durum & Risk Denetimi</h3>
              <p className="text-xs text-slate-600">
                Tüm web sayfaları, eski gönderiler, reklam hesapları ve görsel arşiv taranarak ceza riski taşıyan içerikler ayıklanır.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xl font-extrabold text-[#446CB5] mb-2 font-mono">02</div>
              <h3 className="font-bold text-sm text-[#16202E] mb-2">Uzmanlık & Soru Haritası</h3>
              <p className="text-xs text-slate-600">
                Tescilli branşınıza göre hastaların Google ve ChatGPT'de sorduğu gerçek belirti ve tedavi soruları haritalanır.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xl font-extrabold text-[#446CB5] mb-2 font-mono">03</div>
              <h3 className="font-bold text-sm text-[#16202E] mb-2">Çok Kanallı İçerik Mimarisi</h3>
              <p className="text-xs text-slate-600">
                Hangi konunun YouTube videosu, hangi konunun SEO rehberi veya basın görüşü olacağı planlanır.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xl font-extrabold text-[#446CB5] mb-2 font-mono">04</div>
              <h3 className="font-bold text-sm text-[#16202E] mb-2">Tıbbi & Hukuki Çift Onay</h3>
              <p className="text-xs text-slate-600">
                Hazırlanan her içerik hem hekimin bilimsel onayından hem de mevzuat uyum masamızın kontrolünden geçer.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="text-xl font-extrabold text-[#446CB5] mb-2 font-mono">05</div>
              <h3 className="font-bold text-sm text-[#16202E] mb-2">Ölçümleme & Düzenli Güncelleme</h3>
              <p className="text-xs text-slate-600">
                Organik sıralamalar, markalı aramalar, video tutma oranları ve yapay zekâ alıntıları düzenli olarak raporlanır.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hub and Spoke Topic Cluster Links */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">İÇERİK VE MEVZUAT KÜMESİ</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16202E] mt-2 font-['Inter_Tight']">
              Doktor İletişimi Rehberlerimiz & Mevzuat Analizleri
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Her konuyu kendi arama niyetine göre derinlemesine incelediğimiz uzmanlık rehberlerimiz:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DOCTOR_ARTICLES.map((art) => (
              <Link
                key={art.id}
                to={art.url}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-[#446CB5] mb-2">
                    {art.category}
                  </span>
                  <h3 className="text-sm font-bold text-[#16202E] group-hover:text-[#446CB5] transition-colors line-clamp-2 mb-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {art.metaDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-[#446CB5]">
                  <span>{art.readTime}</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <span>İncele</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extended FAQ Accordion */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">SIKÇA SORULAN SORULAR</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#16202E] mt-2 font-['Inter_Tight']">
              Doktor Reklamı ve İletişimi Hakkında Merak Edilenler
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Hekimlerin ve klinik yöneticilerinin bize en çok sorduğu mevzuat ve pazarlama soruları.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div 
                  key={index}
                  className="rounded-xl border border-slate-200 bg-slate-50/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-[#16202E] text-sm sm:text-base hover:bg-slate-100/60 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#446CB5] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Editorial Metadata, Verification & Legal Disclaimer */}
      <section className="py-10 bg-slate-50 border-b border-slate-200 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#446CB5]" />
                <span className="font-bold text-slate-800">Sayfa Künyesi ve Doğrulama Bilgileri</span>
              </div>
              <div className="text-[11px] text-slate-500">
                İlk Yayın: 18 Eylül 2026 · Son Güncelleme: 18 Eylül 2026
              </div>
            </div>
            <p className="text-[11px] leading-relaxed">
              <strong>Yazan:</strong> Overseas Marketing Sağlık İletişimi Masası | <strong>Hukuki & Mevzuat Kontrolü:</strong> Sağlık Hukuku ve Tanıtım Mevzuatı İnceleme Kurulu | <strong>Editör İletişimi:</strong> info@overseas.marketing
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong>Yasal Uyarı:</strong> Bu sayfadaki içerikler sağlık profesyonellerine yönelik dijital pazarlama, SEO ve iletişim stratejisi bilgilendirmesidir; doğrudan hukuki veya tıbbi tavsiye niteliği taşımaz. Sağlık iletişimi mevzuatı dinamik olup her hekim, uzmanlık alanı, ruhsat ve mecra özelinde sağlık hukuku danışmanlığı ile birlikte ele alınmalıdır.
            </p>
          </div>
        </div>
      </section>

      {/* DEDICATED DOCTOR LEAD GENERATION FORM */}
      <section id="doktor-basvuru-formu" className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-blue-500/30 shadow-2xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl -z-0"></div>

            <div className="relative z-10">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#446CB5] text-xs font-bold mb-3">
                  <Stethoscope className="w-3.5 h-3.5" />
                  <span>HEKİM & KLİNİK STRATEJİ BAŞVURUSU</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#16202E] font-['Inter_Tight']">
                  Mevzuata Uygun Hekim İletişim Stratejisi İsteyin
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-3">
                  Klinik hedeflerinizi, branşınızı ve mevcut dijital varlıklarınızı analiz edelim; ceza riski olmayan, etik ve yüksek dönüşümlü büyüme planınızı birlikte oluşturalım.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">
                    Başvurunuz Başarıyla Alındı!
                  </h3>
                  <p className="text-sm text-emerald-800 max-w-md mx-auto">
                    Sağlık pazarlaması ve mevzuat uzmanımız, web sitenizi ve dijital varlıklarınızı ön kontrolden geçirerek en geç 24 saat içinde sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-emerald-700 underline font-semibold cursor-pointer"
                  >
                    Yeni bir form doldur
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Hekim Adı Soyadı *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Prof. Dr. Ahmet Yılmaz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Klinik / Muayenehane Adı *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Yılmaz Kardiyoloji Kliniği"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Tescilli Uzmanlık Branşı *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Plastik Cerrahi, Ortopedi, Dermatoloji..."
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Kurum Türü
                      </label>
                      <select
                        value={formData.institutionType}
                        onChange={(e) => setFormData({ ...formData, institutionType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                      >
                        <option value="Özel Muayenehane">Özel Muayenehane</option>
                        <option value="Poliklinik / Tıp Merkezi">Poliklinik / Tıp Merkezi</option>
                        <option value="Özel Hastane Hekimi">Özel Hastane Hekimi</option>
                        <option value="Yetkili Sağlık Turizmi Kliniği">Yetkili Sağlık Turizmi Kliniği</option>
                        <option value="Diş Hekimliği Kliniği">Diş Hekimliği Kliniği</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Telefon Numarası *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Kurumsal E-posta Adresi *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="doktor@klinik.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                      />
                    </div>
                  </div>

                  {/* Service Multi-Select Buttons */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-2">
                      Öncelikli İhtiyaç Duyduğunuz Çözümler (Birden fazla seçebilirsiniz)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleToggleService(srv)}
                            className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer flex items-center justify-between ${
                              isSelected
                                ? 'bg-blue-50 border-[#446CB5] text-[#16202E]'
                                : 'bg-slate-50/50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <span>{srv}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5]" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Klinik Hedefleriniz veya Mevcut Dijital Riskleriniz
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Örn: Web sitemizi güncel yönetmeliğe uygun hale getirmek, YouTube'da hasta eğitim serisi başlatmak veya yurt dışı sağlık turizmi hedeflemek istiyoruz..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#446CB5] focus:border-transparent outline-none bg-slate-50/50"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-slate-500">
                    <input
                      type="checkbox"
                      id="kvkk"
                      required
                      checked={formData.kvkkConsent}
                      onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#446CB5] focus:ring-[#446CB5] cursor-pointer"
                    />
                    <label htmlFor="kvkk" className="cursor-pointer select-none leading-relaxed">
                      İlettiğim iletişim bilgilerimin Overseas Marketing tarafından strateji görüşmesi sağlanması amacıyla işlenmesini ve tarafıma dönüş yapılmasını kabul ediyorum. (Bu formda hiçbir kişisel sağlık verisi talep edilmemektedir.)
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white font-bold text-sm shadow-xl shadow-blue-900/20 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Hekim İletişim Stratejisi Talep Edin</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
