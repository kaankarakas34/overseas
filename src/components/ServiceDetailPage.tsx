import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Globe2, 
  TrendingUp, 
  Send,
  Lock,
  Layers,
  FileText,
  Calendar,
  Search,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { MASTER_SERVICES, ServiceItem } from '../data/masterPlanData';

interface ServiceDetailPageProps {
  serviceId: string;
  onBackToHome: () => void;
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  serviceId,
  onBackToHome,
  onSelectService,
  onOpenConsultation
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>('Tümü');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    email: '',
    phone: '',
    message: '',
    kvkk: false
  });

  const service: ServiceItem | undefined = MASTER_SERVICES.find(s => s.id === serviceId) || MASTER_SERVICES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaqIndex(0);
    setFaqCategory('Tümü');
    setFaqSearchQuery('');
    setFormSubmitted(false);
  }, [serviceId]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          clinicName: formData.clinicName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          serviceInterest: service.title,
          formType: `Hizmet Özel Teklif Formu: ${service.title}`
        })
      });
    } catch (err) {
      console.warn('Form email call background:', err);
    } finally {
      setFormLoading(false);
      setFormSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    }
  };

  // Find next service for bottom navigation
  const currentIndex = MASTER_SERVICES.findIndex(s => s.id === service.id);
  const nextService = MASTER_SERVICES[(currentIndex + 1) % MASTER_SERVICES.length];

  // Group FAQ categories for performance marketing page
  const faqCategories = [
    'Tümü',
    'Genel',
    'Google Ads',
    'Meta Ads',
    'Yandex Ads',
    'LinkedIn Ads',
    'TikTok Ads',
    'Dönüşüm & Süreç'
  ];

  const getFaqGroup = (q: string): string => {
    const qLower = q.toLowerCase();
    if (qLower.includes('google ads') || qLower.includes('google\'da')) return 'Google Ads';
    if (qLower.includes('meta') || qLower.includes('facebook') || qLower.includes('instagram')) return 'Meta Ads';
    if (qLower.includes('yandex')) return 'Yandex Ads';
    if (qLower.includes('linkedin')) return 'LinkedIn Ads';
    if (qLower.includes('tiktok')) return 'TikTok Ads';
    if (qLower.includes('dönüşüm') || qLower.includes('landing page') || qLower.includes('lead') || qLower.includes('çevirmene') || qLower.includes('başarıyı')) return 'Dönüşüm & Süreç';
    return 'Genel';
  };

  const filteredFaqs = service.faq.filter(item => {
    const group = getFaqGroup(item.q);
    const matchesCat = faqCategory === 'Tümü' || group === faqCategory;
    const matchesSearch = item.q.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
                          item.a.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 bg-[#F8FAFC] text-[#222222] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Breadcrumb & Back button */}
        <div className="flex items-center justify-between border-b border-[#DDE2E8] pb-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-[#595F69]">
            <button 
              onClick={onBackToHome}
              className="hover:text-[#446CB5] transition-colors cursor-pointer"
            >
              Ana Sayfa
            </button>
            <span>/</span>
            <button 
              onClick={onBackToHome}
              className="hover:text-[#446CB5] transition-colors cursor-pointer"
            >
              Hizmetler
            </button>
            <span>/</span>
            <span className="text-[#446CB5] font-bold">{service.title}</span>
          </nav>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-[#DDE2E8] text-xs font-semibold text-[#222222] hover:bg-[#EEF3FB] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>Tüm Hizmetlere Dön</span>
          </button>
        </div>

        {/* 1. Service Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5]">
              <span className="w-2 h-2 rounded-full bg-[#446CB5]"></span>
              <span>{service.category} Hizmeti</span>
              <span className="text-[#DDE2E8]">|</span>
              <span className="text-[#595F69] font-medium">Master Plan V2.0</span>
            </div>

            <h1 className="font-['Inter_Tight'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#222222] tracking-tight leading-[1.15]">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-[#595F69] leading-relaxed">
              {service.fullDesc}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-sm font-semibold shadow-lg shadow-[#446CB5]/25 transition-all cursor-pointer"
              >
                <span>Reklam Stratejinizi Planlayalım</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <a
                href="tel:05363197697"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#DDE2E8] hover:bg-[#EEF3FB] text-xs font-bold text-[#222222] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#446CB5]" />
                <span>0536 319 76 97</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white border border-[#DDE2E8] shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="border-b border-[#DDE2E8] pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                  Öne Çıkan Standartlar
                </div>
                <div className="font-['Inter_Tight'] text-lg font-bold text-[#222222] mt-1">
                  {service.title} Yetkinlikleri
                </div>
              </div>

              <div className="space-y-3">
                {service.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#222222]">
                    <CheckCircle2 className="w-4 h-4 text-[#446CB5] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {service.subChannels && (
                <div className="pt-3 border-t border-[#DDE2E8] space-y-2">
                  <div className="text-[11px] font-bold uppercase text-[#595F69]">Yönetilen Platformlar:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {service.subChannels.map(ch => (
                      <span key={ch} className="px-3 py-1 rounded-lg bg-[#EEF3FB] text-[#446CB5] font-semibold text-xs">
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* 2. Structured Sub-Headings with Images (Specific layout for Reklam Yönetimi) */}
        {serviceId === 'performans-pazarlama' ? (
          <div className="space-y-20 pt-10">
            
            {/* Google Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Arama Motoru Reklamcılığı
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Google Ads Yönetimi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Sağlık hizmetlerinizi Google’da araştıran kullanıcılara ulaşın. Google Ads yönetimi kapsamında anahtar kelime analizi, reklam metinleri, ülke ve dil hedeflemesi, bütçe yönetimi ve dönüşüm takibi yapıyoruz. Kampanyalarınızı hasta başvurularının kalitesine göre geliştiriyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_ai_dashboard.jpg" 
                  alt="Google Ads Yönetimi" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* Meta Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Sosyal Medya Reklamcılığı
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Meta Ads Yönetimi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Facebook ve Instagram’da kliniğinizin görünürlüğünü artırın. Meta Ads yönetimi ile görsel ve video reklamlar hazırlıyor, hedef pazarınıza uygun kampanyalar oluşturuyoruz. Reklam içeriklerini, başvuru formlarını ve mesajlaşma akışlarını birlikte planlıyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/aesthetic_case_visual.jpg" 
                  alt="Meta Ads Yönetimi" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* Yandex Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Rusya & BDT Pazarı
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Yandex Ads Yönetimi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Yandex kullanan hedef pazarlara ulaşmanız için Yandex Ads yönetimi sunuyoruz. Arama reklamlarını, anahtar kelimeleri ve reklam metinlerini hedef ülkenin diline göre hazırlıyor; bütçe ve başvuru performansını takip ediyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/dental_case_visual.jpg" 
                  alt="Yandex Ads Yönetimi" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* LinkedIn Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  B2B Kurumsal İş Ortaklıkları
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  LinkedIn Ads Yönetimi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Sağlık turizminde uluslararası iş ortaklıkları ve kurumsal bağlantılar geliştirin. LinkedIn Ads yönetimi ile aracı kuruluşlara, şirketlere ve ilgili karar vericilere yönelik kampanyalar planlıyor; kurumunuzun B2B pazarlama çalışmalarını destekliyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/hero_health_tech.jpg" 
                  alt="LinkedIn Ads Yönetimi" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

            {/* TikTok Ads */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Dinamik Video Reklamları
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  TikTok Ads Yönetimi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Kliniğinizi ve hizmetlerinizi kısa video içerikleriyle tanıtın. TikTok Ads yönetimi kapsamında platforma uygun reklam videoları, mesajlar ve kampanyalar hazırlıyoruz. Hedef ülke ve sağlık kategorisinin reklam koşullarına göre yayın planı oluşturuyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/ai_call_agent_mockup.jpg" 
                  alt="TikTok Ads Yönetimi" 
                  className="w-full h-[280px] object-cover"
                />
              </div>
            </div>

          </div>
        ) : serviceId === 'uluslararasi-seo-hizmeti' || serviceId === 'seo' ? (
          <div className="space-y-20 pt-10">
            
            {/* SEO Section 1: Uluslararası SEO & Hedef Ülkelerde Görünürlük */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Uluslararası Arama Stratejisi
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Hedef Ülkelerde ve Dillerde Daha Fazla Görünürlük
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Bir şirketin Türkiye'de Google'da iyi sıralamalar alması, İngiltere'de veya Almanya'da da aynı performansı göstereceği anlamına gelmez. İçerikleri sadece tercüme etmek yeterli değildir; İngiltere, ABD, Almanya, Fransa veya Körfez ülkelerinin gerçek arama niyetlerine ve dil kullanımına göre yerelleştirilmiş Uluslararası SEO stratejisi oluşturuyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/international_seo_analytics.jpg" 
                  alt="Uluslararası SEO Hizmeti" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* SEO Section 2: On-Page SEO & Topic Cluster Mimarisi */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  On-Page SEO & Content Strategy
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  On-Page SEO ve Topic Cluster İçerik Mimarisi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  SEO yalnızca belirli anahtar kelimeleri sayfada tekrar etmek değildir. Sayfa başlıkları, H1-H3 başlık hiyerarşisi, meta title/description optimizasyonu, iç linkleme (internal linking), Schema.org işaretlemeleri ve E-E-A-T uyumlu konu kümeleri (topic cluster) kurarak Google'ın ve kullanıcıların içeriği eksiksiz anlamasını sağlıyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/hero_health_tech.jpg" 
                  alt="On-Page SEO & İçerik Mimarisi" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* SEO Section 3: Teknik SEO Altyapısı */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Teknik SEO & Core Web Vitals
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Kusursuz Teknik SEO Altyapısı
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Güçlü bir içerik zayıf bir teknik altyapı üzerine kurulduğunda sonuç sınırlı kalır. Core Web Vitals, site hızı, mobil uyumluluk, indeksleme denetimleri, canonical yapılandırması, sitemap, hreflang etiketleri ve robots.txt tarama bütçesi optimizasyonları ile sitenizin teknik sağlığını en üst seviyeye çıkartıyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_ai_dashboard.jpg" 
                  alt="Teknik SEO Analitiği" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* SEO Section 4: Off-Page SEO & Etik Dijital PR */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Off-Page SEO & Digital PR
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Etik Dijital PR ve Dijital Otorite İnşası
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Google yalnızca sitenizin kendi içinde söylediğine bakmaz; dijital dünyadaki otoritenizi de değerlendirir. Yüzlerce kalitesiz paravan blog (PBN) yerine sektörünüz ve hedef ülkenizle doğrudan alakalı otoriter yayın organlarında Dijital PR ve doğal bağlantı profili oluşturuyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/aesthetic_case_visual.jpg" 
                  alt="Off-Page SEO & Dijital PR" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* SEO Section 5: Sağlık Turizmi & B2B Ticari Görünürlük */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Ticari Niyet Odaklı Sıralamalar
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Yüksek Ticari Niyet Taşıyan Arama Hedeflemesi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  "Dental implant Turkey price" veya "Hair transplant Istanbul cost" gibi doğrudan karar verme ve satın alma aşamasındaki aramaları hedefliyoruz. Sıralamada birinci olmak tek başına yeterli değildir; amacımız doğru kullanıcıyı doğru sayfaya getirerek ticari talep üretmektir.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/dental_case_visual.jpg" 
                  alt="Sağlık Turizmi SEO Kurgusu" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* SEO Advisory Conclusion Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF3FB]/50 border border-[#446CB5]/20 space-y-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                SEO + GEO Bütünleşik Büyüme Stratejisi
              </h3>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                SEO ve GEO'yu birbirinin rakibi değil, aynı görünürlük piramidinin katmanları olarak yönetiyoruz. Google organik sonuçlarında birinci sayfada görünürken ChatGPT ve Gemini cevaplarında referans gösterilen marka olmak için bizimle iletişime geçin.
              </p>
            </div>

          </div>
        ) : serviceId === 'web-sitesi-landing-page' || serviceId === 'web-sitesi' ? (
          <div className="space-y-20 pt-10">
            
            {/* Web Section 1: Dönüşüm Odaklı Web Tasarımı */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Dönüşüm Odaklı Tasarım Mimarisi
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Dönüşüm Odaklı Web Sitesi ve Landing Page Tasarımı
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Bir web sitesi yalnızca güzel görünmek için yapılmamalı. Özellikle sağlık turizmi, ihracat, hizmet sektörü ve performans pazarlama tarafında web sitenizin asıl görevi ziyaretçiyi doğru şekilde yönlendirmek, güven oluşturmak ve potansiyel müşteriyi iletişime geçmeye teşvik etmektir. Amacımız yalnızca ziyaretçi çekmek değil; ziyaretçiyi nitelikli lead'e dönüştürmektir.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/web_landing_page_design.jpg" 
                  alt="Dönüşüm Odaklı Web Sitesi Tasarımı" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* Web Section 2: Yüksek Dönüşüm Sağlayan Landing Page Yapıları */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  High-Converting Landing Pages
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Google Ads ve Meta Ads İçin Özel Landing Page'ler
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Reklam Kampanyalarında kullanıcıyı genel ana sayfaya göndermek veri kaybıdır. Google Ads arama niyetine özel teklif sayfaları; Meta Ads (Instagram/Facebook) için ise ikna süreci güçlü, video, referans ve sosyal kanıt odaklı landing page'ler hazırlıyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_software_dashboard.jpg" 
                  alt="Google Ads ve Meta Ads Landing Page" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Web Section 3: Sağlık Turizmi & Hedef Ülkeye Özel Tasarımlar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Sağlık Turizmi & Hedef Ülke Tasarımları
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Sağlık Turizmine ve Hedef Ülkeye Özel Tasarımlar
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Diş klinikleri, saç ekim merkezleri, estetik cerrahi, tüp bebek ve obezite cerrahisi gibi spesifik tedaviler için İngiltere, Almanya, Fransa ve Körfez ülkelerinin hasta psikolojisine, para birimine ve güven kriterlerine uygun dilde ve yapıda sayfalar tasarlıyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/dental_case_visual.jpg" 
                  alt="Sağlık Turizmi Özel Landing Page" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Web Section 4: CRM ve Otomasyon Entegrasyonları */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Anlık CRM & Otomasyon Bağlantısı
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  CRM ve Otomasyonlarla Birlikte Çalışan Web Siteleri
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Form doldurulan veri bir e-posta kutusunda beklemez. Form gönderildiği anda veri CRM'e aktarılır, kampanya kaynağı etiketlenir, ilgili satış danışmanına atama yapılır ve anında otomatik WhatsApp/E-posta mesaj akışı tetiklenir.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_ai_dashboard.jpg" 
                  alt="CRM & Otomasyon Entegrasyonu" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Web Section 5: Hızlı, Mobil Uyumlu, SEO & GEO Altyapısı */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Core Web Vitals & SEO/GEO Mimarisi
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Mobil Öncelikli, Ultra Hızlı, SEO & GEO Uyumlu Kodlama
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Mobilde birkaç saniyelik gecikme kullanıcının sayfayı terk etmesine neden olur. Kod yapısı, Core Web Vitals, mobil UX, semantik HTML, Schema.org ve GA4/Tag Manager/Meta Pixel dönüşüm takibi altyapıda doğuştan hazır olarak sunulur.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/international_seo_analytics.jpg" 
                  alt="SEO & GEO Uyumlu Hızlı Altyapı" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* Web Advisory Conclusion Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF3FB]/50 border border-[#446CB5]/20 space-y-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                Web Sitesi + CRM + Reklam + Otomasyon Birlikteliği
              </h3>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                Web sitesini tek başına bir tasarım işi olarak görmüyoruz; reklam, satış, CRM ve otomasyon süreçlerinizin merkezinde çalışan bir dijital satış altyapısı kuruyoruz. Projenizi başlatmak için bizimle iletişime geçin.
              </p>
            </div>

          </div>
        ) : serviceId === 'yapay-zeka-otomasyon' || serviceId === 'yapay-zeka' ? (
          <div className="space-y-20 pt-10">
            
            {/* AI Section 1: Yapay Zeka Destekli Otomasyon Nedir? */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Geleceğin Dijital Satış Operasyonu
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Yapay Zeka ve Otomasyon Çözümleri
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Yapay zeka artık yalnızca soru cevaplayan bir araç değil. Doğru kurgulandığında arama yapabilir, mesajlara cevap verebilir, leadleri takip edebilir, e-posta gönderebilir, CRM’e veri işleyebilir ve satış ekibiniz adına aksiyonları otomatik başlatabilir. Overseas Marketing olarak CRM ile entegre çalışan bütünleşik AI ve otomasyon sistemleri geliştiriyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/ai_automation_ecosystem.jpg" 
                  alt="Yapay Zeka ve Otomasyon Ekosistemi" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* AI Section 2: AI Call Agent & Sesli Arama Yönetimi */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Voice AI & Telefon Aramaları
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  AI Call Agent: Gelen ve Giden Aramaları Otomatikleştiriın
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Satış ekiplerinde en büyük sorun kaçırılan telefon aramaları ve geç dönüşlerdir. AI Call Agent 7/24 gelen çağrıları karşılar, hastanın sorularını yanıtlar, randevu talebi oluşturur ve bilgileri CRM'e aktarır. Ayrıca ulaşılmayan leadler için otomatik dış arama senaryoları çalıştırır.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/ai_call_agent_mockup.jpg" 
                  alt="AI Call Agent Sesli Karşılama" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* AI Section 3: Omnichannel Chatbot (WhatsApp, Instagram, Facebook & Web) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Omnichannel AI Chatbot
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  WhatsApp, Instagram, Facebook ve Web Chat Yapay Zeka Botu
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Farklı mesajlaşma kanallarından gelen yüksek hacimli mesajları tek bir CRM altyapısında buluşturuyoruz. WhatsApp, Instagram DM, Facebook Messenger ve Web Chat botlarımız müşterilerin ilk sorularını yanıtlar, dil ve ülke bazlı triyaj yapar ve hazır lead'leri satış danışmanına iletir.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_software_dashboard.jpg" 
                  alt="Omnichannel WhatsApp ve Instagram Chatbot" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* AI Section 4: E-posta Botu & Otomatik Takip Akışları */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Smart Mail Bot & Drip Flows
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Yapay Zeka E-posta Botu ve Otomatik Takip Sistemleri
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Gelen e-postaların konusunu ve müşteri niyetini analiz eden yapay zeka botumuz, taslak yanıtlar hazırlar ve teklif gönderildikten sonra 3. ve 7. günlerde cevapsız kalan mailler için otomatik hatırlatma akışları çalıştırır.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_ai_dashboard.jpg" 
                  alt="AI E-posta Botu & Otomatik Takip" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* AI Section 5: Lead Scoring & Konuşma Analizi */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Lead Scoring & Conversation Intelligence
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Yapay Zeka Destekli Lead Scoring ve Konuşma Analizi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Her lead aynı değerde değildir. Yapay zeka sistemimiz mesaj içerikleri, etkileşim sıklığı ve satın alma niyetine göre leadleri puanlar. Ses kayıtları ve mesajlaşmalar analiz edilerek müşterilerin en çok hangi konularda tereddüt ettiği satış ekibine raporlanır.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/hero_health_tech.jpg" 
                  alt="Lead Scoring & Konuşma Analizi" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* AI Advisory Conclusion Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF3FB]/50 border border-[#446CB5]/20 space-y-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                7/24 Kesintisiz Dijital Satış Operasyonu
              </h3>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                Yapay zeka insan satış ekibinin yerini almak için değil, tekrar eden rutin işleri sıfırlayarak ekibinizin daha yüksek değerli görüşmelere odaklanmasını sağlamak için konumlandırılır. Kurumunuza özel AI ve otomasyon mimarisi için bizimle iletişime geçin.
              </p>
            </div>

          </div>
        ) : serviceId === 'geo-generative-engine-optimization' || serviceId === 'geo' ? (
          <div className="space-y-20 pt-10">
            
            {/* GEO Section 1: GEO Nedir? & Yapay Zeka Arama Dönüşümü */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Generative Engine Optimization
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  GEO Nedir? Yapay Zeka Aramalarında Görünür Olun
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Arama dünyası değişiyor. İnsanlar artık yalnızca Google’a birkaç kelime yazıp çıkan sonuçları incelemiyor. ChatGPT’ye hangi kliniği tercih etmesi gerektiğini soruyor, Gemini’den şehirdeki en iyi işletmeleri karşılaştırmasını istiyor, Google AI Overviews üzerinden araştırmasını yapıyor ve karar vermeden önce yapay zekadan fikir alıyor. GEO, markanızın yapay zeka cevaplarında önerilen ve referans gösterilen kaynak olmasını sağlar.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/geo_ai_search.jpg" 
                  alt="GEO Yapay Zeka Aramaları" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* GEO Section 2: Hedef Ülkede Görünmek */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  International GEO & Target Markets
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Asıl Hedef Türkiye'de Değil, Hastanın Bulunduğu Ülkede Görünmek
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Uluslararası çalışan markaların yaptığı en büyük hatalardan biri SEO çalışmalarını yalnızca kendi bulunduğu ülkeye göre planlamaktır. Manchester'da, Birmingham'da veya Londra'da yaşayan ve Türkiye'de implant yaptırmayı düşünen hastanın ChatGPT veya Gemini'ye sorabileceği soruları hedef pazar analiziyle GEO stratejisine dönüştürüyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/hero_health_tech.jpg" 
                  alt="Uluslararası Hedef Ülke SEO" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* GEO Section 3: İngiltere Dental Implant Vaka Örneği & Prompt Araştırması */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Conversational Search & Prompt Research
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Soru Niyeti ve Prompt Analizi
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  İngiltere'den hasta hedefleyen bir diş kliniği için yalnızca "Dental implant Turkey" kelimesine odaklanmak yetmez. "Is Turkey safe for dental implants?", "Why are dental implants cheaper in Turkey?", "Which dental clinic in Istanbul is best for British patients?" gibi karar verme evresindeki doğal konuşma dili sorularına yanıt veren bilgi ekosistemi kuruyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/dental_case_visual.jpg" 
                  alt="Dental Implant GEO Örneği" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* GEO Section 4: Entity SEO & "Best Dental Clinic in Istanbul" */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Entity SEO & Digital Footprint
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  “Best Dental Clinic in Istanbul” Aramasında Nasıl Görünülür?
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Web sitenize yüzlerce kez "best clinic" yazmak sizi en iyi klinik yapmaz. Yapay zeka sistemlerinin markayı anlaması için doktor deneyimi, tedavi teknolojileri, JCI akreditasyonu, gerçek hasta yorumları, Schema.org veri yapıları ve otoriter üçüncü taraf kaynaklarda dijital marka otoritesi inşa ediyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/aesthetic_case_visual.jpg" 
                  alt="Entity SEO & Marka Anlaşılabilirliği" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* GEO Section 5: Topical Authority & Teknik SEO */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Topical Authority & Multilingual Hreflang
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Topical Authority ve Teknik SEO Altyapısı
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Teknik SEO, GEO çalışmalarının altyapısını oluşturur. Sayfaların indekslenmesi, sitemap, canonical, hreflang implementasyonu, llms.txt bot yönetimi, sayfa performansı ve mobil deneyim ile yapay zekanın sitenizi eksiksiz taramasını sağlıyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_ai_dashboard.jpg" 
                  alt="Topical Authority & Teknik SEO" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* GEO Advisory Conclusion Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF3FB]/50 border border-[#446CB5]/20 space-y-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                Overseas Marketing GEO Danışmanlığı
              </h3>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                Hedef ülkede yalnızca sıralama almayın; ChatGPT, Gemini, Google AI Overviews ve diğer yapay zeka aramalarında araştırılan, alıntılanan ve tercih edilen marka olun. GEO analizi ve strateji planlaması için bizimle iletişime geçin.
              </p>
            </div>

          </div>
        ) : serviceId === 'saglik-turizmi-crm-yazilimi' || serviceId === 'ozel-crm-yazilimi' || serviceId === 'ozel-crm' ? (
          <div className="space-y-20 pt-10">
            
            {/* CRM Section 1: Klasik CRM Neden Yeterli Değil? */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Özel Sağlık Turizmi Teknolojisi
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Klasik CRM Sistemleri Sağlık Turizminde Neden Yeterli Değil?
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Piyasadaki hazır CRM yazılımları kullanıcı başına aylık ücretlerle çalışır. Ekibiniz büyüdükçe maliyetleriniz artar; üstelik WhatsApp entegrasyonu, otomasyon, ses kaydı ve yapay zeka uygulamaları için ayrı sistemlere abonelik ödemeniz gerekir. Overseas Marketing olarak operasyonunuza göre şekillenen, kişi başı lisans sınırına takılmayan özelleştirilebilir sağlık turizmi CRM altyapısı sunuyoruz.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_software_dashboard.jpg" 
                  alt="Sağlık Turizmi Özel CRM Yazılımı" 
                  className="w-full h-[320px] object-cover"
                />
              </div>
            </div>

            {/* CRM Section 2: Siz Hastayı Unutabilirsiniz, Sistem Unutmaz */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Otomatik Takip & Yeniden Kazanım
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Siz Hastayı Unutabilirsiniz, Sistem Unutmaz
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Bir yıl önce iletişime geçmiş ancak o dönem tedaviye hazır olmayan hastayı satış ekibiniz unutabilir. Ancak hasta veriniz en değerli pazarlama varlığınızdır. Geliştirdiğimiz CRM altyapısı 3 ay, 6 ay ve 1 yıl sonra otomatik hatırlatmalar ve takip senaryoları oluşturarak unutulan leadleri yeniden aktif satış ekosistemine dahil eder.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/crm_ai_dashboard.jpg" 
                  alt="CRM Otomatik Takip Senaryoları" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* CRM Section 3: Yapay Zeka Destekli CRM & Konuşma Analizi */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Yapay Zeka Destekli Analiz
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  Yapay Zeka Destekli Sağlık Turizmi CRM
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Yapay zeka modülümüz hasta mesajlarını analiz eder, konuşmaları özetler, hastanın tedavi niyetini ve satın alma olasılığını belirler. Uzun süredir yanıt verilmeyen leadleri tespit eder ve satış ekibinizin en kaliteli hasta adaylarına odaklanmasını sağlar.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/ai_call_agent_mockup.jpg" 
                  alt="Yapay Zeka Destekli CRM Konuşma Özetleri" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* CRM Section 4: WhatsApp, Instagram, Facebook ve Telefon Kaydı */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 lg:order-2 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Omnichannel İletişim & Veri Güvenliği
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  WhatsApp, Instagram, Facebook ve Telefon Görüşmeleri Tek CRM'de
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Satış danışmanının telefonunda kalan WhatsApp mesajları veya telefon kayıtsızlığı şirket için veri kaybıdır. Tüm temas noktaları tek bir hasta profilinde birleşir. Telefon görüşmeleri kayıt altına alınabilir ve ses kaydı yapay zeka tarafından analiz edilerek danışman performans raporlarına dönüştürülür.
                </p>
              </div>
              <div className="lg:col-span-6 lg:order-1 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/hero_health_tech.jpg" 
                  alt="Omnichannel WhatsApp & Telefon Entegrasyonu" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* CRM Section 5: CRM + AI Call Agent + Otomasyon Ekosistemi */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#EEF3FB] text-[#446CB5] text-xs font-bold uppercase">
                  Bütünleşik Sağlık Turizmi Ekosistemi
                </div>
                <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                  CRM + AI Call Agent + Otomasyon Birlikteliği
                </h2>
                <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                  Geliştirdiğimiz CRM; AI Call Agent (Yapay Zeka Sesli Çağrı Temsilcisi), WhatsApp otomasyonları ve cron job sistemleriyle entegre çalışır. Yeni lead geldiğinde otomatik mesaj atar, sesli arama planlar ve görüşme sonuçlarını anında satış temsilcisinin paneline aktarır.
                </p>
              </div>
              <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl border border-[#DDE2E8]">
                <img 
                  src="/images/dental_case_visual.jpg" 
                  alt="CRM & AI Otomasyon Ekosistemi" 
                  className="w-full h-[300px] object-cover"
                />
              </div>
            </div>

            {/* CRM Advisory Conclusion Block */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#EEF3FB]/50 border border-[#446CB5]/20 space-y-4">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                Hazır CRM Değil, İş Modelinize Göre Geliştirilen Bir Sistem
              </h3>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                Hastaneler, diş klinikleri, saç ekim merkezleri, estetik cerrahi klinikleri ve uluslararası hasta departmanları için iş süreçlerinizi analiz ediyor ve operasyonunuza birebir uyan özel CRM yazılımını kuruyoruz. Demo ve analiz için bizimle iletişime geçin.
              </p>
            </div>

          </div>
        ) : (
          /* Fallback Standard Modular View for other services */
          <div className="p-8 sm:p-12 rounded-3xl bg-[#ffffff] border border-[#DDE2E8] shadow-sm space-y-8">
            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
                Kapsam & Teslimatlar
              </div>
              <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                Bu Hizmette Ne Teslim Edilir?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] space-y-2 hover:border-[#446CB5] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF3FB] text-[#446CB5] font-bold text-xs flex items-center justify-center">
                    0{idx + 1}
                  </div>
                  <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">{deliv}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Deep-Dive SSS (Search & Filter System for 32 FAQs) */}
        <div className="max-w-4xl mx-auto space-y-8 pt-8">
          
          <div className="text-center space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#446CB5]">
              Bilgi Tabanı & SSS
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {service.title} Sıkça Sorulan Sorular
            </h2>
            <p className="text-xs sm:text-sm text-[#595F69]">
              Platformlar, stratejik planlama, bütçelendirme ve yasal koşullar hakkında detaylı bilgilendirme.
            </p>
          </div>

          {/* FAQ Filter Tools */}
          <div className="space-y-4">
            
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
              <Search className="w-4 h-4 text-[#595F69] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Arama yapın (örn: bütçe, Google, Yandex, form)..."
                value={faqSearchQuery}
                onChange={(e) => setFaqSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5] shadow-xs"
              />
            </div>

            {/* Sub-Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {faqCategories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFaqCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                    faqCategory === cat
                      ? 'bg-[#446CB5] text-white'
                      : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* FAQ Accordion Render */}
          <div className="space-y-3">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-[#DDE2E8] overflow-hidden shadow-xs text-left"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EEF3FB] text-[#446CB5] shrink-0">
                        {getFaqGroup(item.q)}
                      </span>
                      <span className="font-['Inter_Tight'] text-sm sm:text-base font-bold text-[#222222]">
                        {item.q}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#446CB5] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#595F69] leading-relaxed border-t border-[#DDE2E8]/60 bg-white pt-2 pl-6">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="p-8 text-center bg-white rounded-2xl border border-[#DDE2E8] text-xs text-[#595F69]">
                Kriterlere uygun soru bulunamadı. Lütfen üstteki filtreleri değiştirin veya bize sorun.
              </div>
            )}
          </div>

        </div>

        {/* 4. Consultation Booking Form */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#16202E] text-white p-8 sm:p-12 shadow-2xl border border-slate-700 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
              Strateji & Planlama
            </span>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-white">
              {service.title} Görüşmesi Planlayın
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Kliniğinizin büyüme hedeflerine uygun bütçelendirmeyi ve kampanya dağılımını birlikte belirleyelim.
            </p>
          </div>

          {formSubmitted ? (
            <div className="py-8 text-center space-y-4 bg-slate-900/60 rounded-2xl border border-emerald-500/40 p-6">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-white">
                Başvurunuz Alındı
              </h3>
              <p className="text-xs text-slate-300">
                <strong>{service.title}</strong> koordinatörümüz 24 saat içinde sizinle ön değerlendirme linkini paylaşacaktır.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-2xl mx-auto">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Adınız Soyadınız *"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#60A5FA]"
                />
                <input
                  type="text"
                  required
                  placeholder="Kurum / Klinik Adı *"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#60A5FA]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  required
                  placeholder="İş E-postası *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#60A5FA]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefon / WhatsApp *"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#60A5FA]"
                />
              </div>

              <textarea
                rows={2}
                placeholder="Öncelikli hedef pazarlarınız veya sormak istedikleriniz..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#60A5FA]"
              ></textarea>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="serviceKvkk"
                  required
                  checked={formData.kvkk}
                  onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                  className="mt-0.5 rounded border-slate-600 text-[#446CB5] focus:ring-[#60A5FA] cursor-pointer"
                />
                <label htmlFor="serviceKvkk" className="text-[11px] text-slate-300 cursor-pointer">
                  Aydınlatma metnini onaylıyorum (Hasta sağlık verisi paylaşılmamalıdır).
                </label>
              </div>

              <button
                type="submit"
                disabled={formLoading}
                className="w-full py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-bold shadow-lg shadow-[#446CB5]/30 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
              >
                {formLoading ? <span>Gönderiliyor...</span> : (
                  <>
                    <span>Reklam Stratejinizi Planlayalım</span>
                    <Send className="w-4 h-4 text-white" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>

        {/* 5. Next Service Navigator */}
        <div className="pt-8 border-t border-[#DDE2E8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="text-xs font-semibold text-[#595F69] hover:text-[#446CB5] transition-colors cursor-pointer"
          >
            ← Ana Sayfaya ve Tüm Çözümlere Dön
          </button>

          <button
            onClick={() => onSelectService(nextService.id)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] text-xs font-bold text-[#222222] transition-colors cursor-pointer shadow-xs"
          >
            <span>Sıradaki Hizmet: {nextService.title}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#446CB5]" />
          </button>
        </div>

      </div>
    </div>
  );
};
