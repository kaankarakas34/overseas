import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  UserCheck, 
  Sparkles, 
  Video, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Award, 
  FileText, 
  Building2, 
  TrendingUp,
  BrainCircuit,
  MessageSquareHeart,
  Target
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DoctorBrandingPageProps {
  onBackToHome: () => void;
  onOpenConsultation: () => void;
}

export const DoctorBrandingPage: React.FC<DoctorBrandingPageProps> = ({ 
  onBackToHome, 
  onOpenConsultation 
}) => {
  const { isEn } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const patientQuestions = isEn ? [
    "Who is this doctor?",
    "How many years of clinical experience do they have?",
    "What is their primary medical specialty?",
    "Which past cases and treatments have they performed?",
    "What do international patients say about their experience?",
    "How does the doctor explain their clinical philosophy?",
    "Is their digital presence professional and reassuring?",
    "Are they recognized on reputable healthcare platforms?",
    "Do they regularly treat international patients?",
    "Do they communicate the treatment steps clearly and transparently?"
  ] : [
    "Bu doktor kim?",
    "Kaç yıldır bu alanda çalışıyor?",
    "Uzmanlık alanı nedir?",
    "Daha önce hangi vakalarla çalışmış?",
    "Hastaları doktor hakkında ne söylüyor?",
    "Doktor kendisini nasıl ifade ediyor?",
    "Sosyal medya profili profesyonel mi?",
    "Hakkında güvenilir kaynaklarda bilgi bulunuyor mu?",
    "Uluslararası hastalarla çalışıyor mu?",
    "Tedavi sürecini açık ve anlaşılır şekilde anlatıyor mu?"
  ];

  const profileElements = isEn ? [
    { title: "Surgical & Clinical Specialty", desc: "Showcasing signature procedures and clear boundaries of medical expertise" },
    { title: "Doctor’s Philosophy & Approach", desc: "Transparent communication style, empathy, and medical ethics" },
    { title: "Education & Credentials", desc: "Academic background, board certifications, fellowships, and international memberships" },
    { title: "Treatment & Procedure Guides", desc: "Step-by-step visual guides clarifying what patients should expect" },
    { title: "Frequently Asked Patient Questions", desc: "Video and text answers addressing pre-operative anxieties" },
    { title: "Patient Experiences & Reviews", desc: "Authentic, verified patient journey stories and testimonials" },
    { title: "International Patient Protocol", desc: "Clarity on VIP transfers, multilingual coordinators, and hotel accommodations" },
    { title: "Educational Medical Content", desc: "Clear explanations free from unnecessary medical jargon" },
    { title: "Doctor Video Explanations", desc: "Natural, authentic on-camera explanations creating immediate human connection" },
    { title: "Clinic & Surgical Facility Standards", desc: "Showcasing operating theaters, state-of-the-art tech, and sterile protocols" }
  ] : [
    { title: "Uzmanlık Alanınız", desc: "Öne çıkan operasyonlar ve net uzmanlık sınırları" },
    { title: "Doktor Yaklaşımınız", desc: "Hasta iletişimi ve tıbbi felsefeniz" },
    { title: "Eğitim ve Deneyiminiz", desc: "Akademik geçmiş, sertifikalar ve üyelikler" },
    { title: "Tedavi ve Operasyon Süreçleri", desc: "Adım adım anlaşılır prosedür rehberleri" },
    { title: "Sık Sorulan Hasta Soruları", desc: "Endişeleri gideren yanıtlar ve bilgilendirmeler" },
    { title: "Hasta Deneyimleri", desc: "Gerçek ve samimi vaka yorumları" },
    { title: "Uluslararası Hasta Süreçleri", desc: "Karşılama, konaklama ve transfer şeffaflığı" },
    { title: "Bilgilendirici İçerikler", desc: "Karmaşık tıbbi terimlerden uzak anlatımlar" },
    { title: "Video Anlatımları", desc: "Doktorun samimi ve profesyonel kamera anlatımı" },
    { title: "Klinik ve Ekip Görünürlüğü", desc: "Ameliyathane ve klinik hijyen standartları" }
  ];

  const contentPillars = isEn ? [
    {
      title: "Educational Content",
      desc: "We clarify the pre-op and post-op questions patients search for, using the doctor's authentic medical voice.",
      icon: FileText
    },
    {
      title: "Doctor Video Content",
      desc: "Patients want to see how the doctor speaks, listens, and reassures. High-quality natural video establishes the first trust touchpoint.",
      icon: Video
    },
    {
      title: "Treatment Journey Insights",
      desc: "We transparently guide international patients through every step from first contact to surgical discharge and follow-up.",
      icon: CheckCircle2
    },
    {
      title: "Patient FAQs",
      desc: "We build proactive content addressing common search queries on Google, social channels, and AI platforms.",
      icon: HelpCircle
    },
    {
      title: "Clinical Authority Pillars",
      desc: "We develop specialized content reinforcing the doctor’s authority in the specific procedures they want to scale.",
      icon: Award
    }
  ] : [
    {
      title: "Bilgilendirici İçerikler",
      desc: "Hastaların tedavi veya operasyon öncesinde merak ettiği konuları doktorun kendi anlatımıyla açıklıyoruz.",
      icon: FileText
    },
    {
      title: "Doktor Video İçerikleri",
      desc: "Hasta doktorun konuşma biçimini, yaklaşımını ve iletişim tarzını görmek ister. Profesyonel ancak doğal video içerikleri ilk güven temasını oluşturur.",
      icon: Video
    },
    {
      title: "Tedavi Süreci İçerikleri",
      desc: "Hastanın ilk görüşmeden operasyon sonrasına kadar karşılaşacağı süreci anlaşılır şekilde anlatıyoruz.",
      icon: CheckCircle2
    },
    {
      title: "Sık Sorulan Sorular",
      desc: "Google, sosyal medya ve yapay zeka platformlarında hastaların sık sorduğu sorular üzerinden içerik planları oluşturuyoruz.",
      icon: HelpCircle
    },
    {
      title: "Uzmanlık İçerikleri",
      desc: "Doktorun özellikle öne çıkmak istediği tedavi ve operasyon alanlarında uzmanlık algısını destekleyen içerikler hazırlıyoruz.",
      icon: Award
    }
  ];

  const seoGeoKeywords = [
    "Plastic Surgeon in Istanbul",
    "Best Rhinoplasty Doctor in Istanbul",
    "Hair Transplant Doctor Turkey",
    "Bariatric Surgeon Turkey",
    "Dental Implant Specialist Istanbul",
    "Cosmetic Dentist Turkey"
  ];

  const deliverables = isEn ? [
    "Doctor Personal Brand Strategy",
    "Medical Brand Positioning",
    "Professional Social Media Management",
    "Targeted Content Strategy",
    "Doctor Video Content Production",
    "Medical Tourism Content Calendar",
    "Instagram Profile & Bio Optimization",
    "Google & Search Visibility Strategy",
    "SEO-Compliant Doctor Website Copywriting",
    "GEO (Generative Engine Optimization) Infrastructure",
    "Patient Testimonials & Digital Reputation Management",
    "International Patient Communication Materials",
    "Unified Paid Ad & Organic Content Alignment",
    "Joint Doctor & Clinic Brand Synergy Architecture"
  ] : [
    "Doktor kişisel marka stratejisi",
    "Marka konumlandırması",
    "Sosyal medya yönetimi",
    "İçerik stratejisi",
    "Doktor video içerikleri",
    "Sağlık turizmi içerik planlaması",
    "Instagram profil optimizasyonu",
    "Google görünürlük çalışmaları",
    "SEO uyumlu doktor web sitesi içerikleri",
    "GEO uyumlu içerik altyapısı",
    "Hasta yorumları ve dijital itibar stratejisi",
    "Uluslararası hasta iletişim içerikleri",
    "Reklam ve organik içerik stratejisinin birlikte planlanması",
    "Doktor ve klinik markasının birlikte konumlandırılması"
  ];

  const faqs = isEn ? [
    {
      q: "What is doctor brand management?",
      a: "Doctor brand management is the consistent, strategic positioning of a physician's clinical expertise, track record, bedside manner, and digital authority across social media, Google, website, video platforms, and AI engines."
    },
    {
      q: "Why is social media management critical for doctors?",
      a: "International patients thoroughly scrutinize a physician's digital presence before booking travel. A professional, informative profile communicates clinical competence and establishes the vital first layer of patient trust."
    },
    {
      q: "Why is doctor branding so important in medical tourism?",
      a: "International patients are traveling to another country for surgery, making their decision process highly cautious. The doctor's verified credentials, video demeanor, patient reviews, and online authority are decisive in winning their trust."
    },
    {
      q: "Does doctor branding directly impact paid ad performance?",
      a: "Yes, significantly. Paid ads generate the initial visit to the doctor's profile or website. If the patient lands on an authoritative profile with convincing case stories and clear philosophy, conversion rates and show-up rates skyrocket."
    },
    {
      q: "Can SEO be conducted specifically for a doctor's personal brand?",
      a: "Absolutely. We build targeted SEO architectures around the doctor's name, signature treatments, and target markets (UK, Germany, GCC), ensuring page 1 visibility for high-intent medical queries."
    },
    {
      q: "Why is GEO (Generative Engine Optimization) vital for doctors?",
      a: "Prospective medical travelers increasingly query ChatGPT, Gemini, and Perplexity with prompts like 'Who is the top rhinoplasty surgeon in Istanbul?'. GEO ensures your clinical credentials and citations are indexed and favored by AI models."
    },
    {
      q: "Is doctor brand management just managing an Instagram page?",
      a: "No. Instagram is only one puzzle piece. A true personal brand encompasses the doctor's dedicated website, Google search results, patient video reviews, published articles, clinic synergy, and academic reputation."
    }
  ] : [
    {
      q: "Doktor marka yönetimi nedir?",
      a: "Doktor marka yönetimi, doktorun uzmanlığının, tecrübesinin, yaklaşımının ve dijital itibarının sosyal medya, Google, web sitesi, içerik platformları ve diğer dijital kanallarda tutarlı şekilde konumlandırılmasıdır."
    },
    {
      q: "Doktorlar için sosyal medya yönetimi neden önemlidir?",
      a: "Hastalar bir doktordan hizmet almadan önce sosyal medya hesaplarını inceleyebilir. Profesyonel ve bilgilendirici bir sosyal medya profili doktorun uzmanlığını anlatmasına ve hasta ile ilk güven temasını oluşturmasına yardımcı olabilir."
    },
    {
      q: "Sağlık turizminde doktor markası neden önemlidir?",
      a: "Uluslararası hastalar farklı bir ülkede tedavi olacağı için karar sürecinde daha fazla araştırma yapabilir. Doktorun tecrübesi, yorumları, sosyal medya profili ve internetteki görünürlüğü hastanın güven değerlendirmesinde önemli rol oynar."
    },
    {
      q: "Doktor markası reklam performansını etkiler mi?",
      a: "Evet. Reklam hastayı doktorun profiline veya web sitesine yönlendirebilir. Hastanın burada karşılaştığı içerikler, yorumlar ve doktorun dijital görünümü iletişim kurma veya form doldurma kararını etkileyebilir."
    },
    {
      q: "Doktorlar için SEO çalışması yapılabilir mi?",
      a: "Evet. Doktorun ismi, uzmanlık alanı, tedavileri ve hedeflediği lokasyonlar üzerinden SEO stratejileri oluşturulabilir. Özellikle sağlık turizmi yapan doktorlar için İngilizce ve hedef ülkelere yönelik içerik stratejileri geliştirilebilir."
    },
    {
      q: "GEO doktorlar için neden önemli?",
      a: "Hastaların ChatGPT, Gemini ve diğer yapay zeka platformları üzerinden doktor ve tedavi araştırmaya başlaması nedeniyle doktorların dijital uzmanlık sinyallerinin yapay zeka sistemleri tarafından anlaşılabilir hale gelmesi giderek daha önemli hale gelmektedir."
    },
    {
      q: "Doktor marka yönetimi sadece Instagram yönetimi midir?",
      a: "Hayır. Instagram yalnızca sistemin bir parçasıdır. Doktorun web sitesi, Google görünürlüğü, hasta yorumları, makaleleri, video içerikleri, uzmanlık sayfaları, medya görünürlüğü ve diğer dijital kaynakların tamamı kişisel marka yönetiminin parçalarıdır."
    }
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#222222] min-h-screen pb-24 text-left">
      
      {/* Top Header / Breadcrumb */}
      <div className="bg-white border-b border-[#DDE2E8] pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-bold text-[#446CB5] hover:text-[#35558F] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isEn ? 'Back to Home' : 'Ana Sayfaya Dön'}</span>
          </button>

          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-bold text-[#446CB5]">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{isEn ? 'Digital Identity & Trust in Medical Tourism' : 'Sağlık Turizminde Dijital Kimlik & Güven'}</span>
            </div>
            <span className="text-xs text-[#595F69]">{isEn ? 'Overseas Marketing Methodology' : 'Overseas Marketing Doktrini'}</span>
          </div>

          <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-black text-[#222222] tracking-tight leading-tight">
            {isEn ? 'Doctor Brand Management' : 'Doktor Marka Yönetimi'}
          </h1>

          <p className="text-base sm:text-xl text-[#595F69] max-w-4xl leading-relaxed">
            {isEn 
              ? 'In medical tourism, a well-placed ad gets you noticed. But what genuinely convinces an international patient to travel for surgery is not the ad itself—it is their trust in the doctor.'
              : 'Sağlık turizminde iyi bir reklam hastanın sizi fark etmesini sağlar. Ancak hastanın size güvenmesini sağlayan şey reklamın kendisi değildir.'}
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        
        {/* Core Philosophy Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#16202E] to-[#25354C] text-white shadow-xl relative overflow-hidden space-y-6">
          <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none">
            <Award className="w-96 h-96 text-white" />
          </div>

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#60A5FA] backdrop-blur-md">
              <ShieldCheck className="w-4 h-4" />
              <span>{isEn ? 'Personal Brand Strategy' : 'Kişisel Marka Stratejimiz'}</span>
            </div>

            <p className="font-['Inter_Tight'] text-lg sm:text-2xl font-bold text-white leading-relaxed">
              {isEn 
                ? 'After seeing your ad, the patient visits your personal profile. They research who you are, verify your clinical credentials, review your past cases, and search for your reputation on Google and AI platforms.'
                : 'Hasta reklamınızı gördükten sonra profilinize girer. Kim olduğunuzu araştırır, uzmanlık alanınıza bakar, tecrübenizi inceler, yorumları okur ve Google & yapay zeka araçlarında bilgi toplar.'}
            </p>

            <div className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
              <p className="text-sm sm:text-base font-extrabold text-[#60A5FA] leading-relaxed">
                {isEn 
                  ? '“We don’t simply manage social media feeds. We sculpt your authoritative personal brand in the global medical arena, constructing a digital identity that instills deep trust and accelerates international patient conversion.”'
                  : '“Biz yalnızca sosyal medya hesabınızı yönetmiyoruz. Doktor olarak dijital dünyadaki kişisel markanızı oluşturuyor, güven veren ve tercih edilmenizi kolaylaştıran bir dijital kimlik inşa ediyoruz.”'}
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Hasta Önce Doktoru Satın Alır */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <Target className="w-3.5 h-3.5" />
              <span>{isEn ? 'Patient Decision Psychology' : 'Hasta Karar Psikolojisi'}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {isEn ? 'In Medical Tourism, Patients Buy the Doctor First' : 'Sağlık Turizminde Hasta Önce Doktoru Satın Alır'}
            </h2>
            <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
              {isEn 
                ? 'In aesthetic surgery, dental transformations, hair restoration, bariatric procedures, and orthopedics, patients do not just compare price tags; they seek absolute trust in the surgeon performing the procedure.'
                : 'Özellikle estetik cerrahi, diş tedavileri, saç ekimi, obezite cerrahisi, göz operasyonları, ortopedi ve benzeri sağlık turizmi alanlarında hasta için karar süreci oldukça farklıdır. Hasta yalnızca fiyat karşılaştırması yapmaz; kendisine işlemi gerçekleştirecek doktoru tanımak ister.'}
            </p>
          </div>

          {/* 10 Patient Questions Grid */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE2E8] space-y-6 shadow-xs">
            <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222] flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#446CB5]" />
              <span>{isEn ? 'Questions Patients Seek Answers to During Digital Research:' : 'Hasta Dijital Araştırmasında Şu Soruların Cevabını Arar:'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {patientQuestions.map((q, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8]/80 text-xs sm:text-sm font-medium text-[#222222]">
                  <span className="w-6 h-6 rounded-full bg-[#EEF3FB] text-[#446CB5] font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="pt-0.5">{q}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FCD34D]/50 text-xs sm:text-sm text-[#92400E] font-medium leading-relaxed">
              <strong>{isEn ? 'Key Takeaway:' : 'Önemli Tespit:'}</strong> {isEn 
                ? 'If your digital profile cannot provide convincing, transparent answers to these questions, even the highest ad budgets will yield poor patient conversion rates.' 
                : 'Bu sorulara dijital dünyada güçlü cevaplar veremiyorsanız reklam bütçeniz ne kadar yüksek olursa olsun hasta dönüşüm oranınız sınırlı kalabilir.'}
            </div>
          </div>
        </div>

        {/* Section 2: İyi Bir Doktor Profili Kendi Reklamını Yapar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 border border-[#DDE2E8] shadow-xs">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isEn ? 'Organic Trust Conversion' : 'Organik Güven Dönüşümü'}</span>
            </div>

            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {isEn ? 'A Great Doctor Profile Sells Itself' : 'İyi Bir Doktor Profili Kendi Reklamını Yapar'}
            </h2>

            <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
              {isEn 
                ? 'When an international patient clicks your Instagram or Google ad, their immediate next step is checking your profile. No matter how captivating your ad creative was, landing on a disorganized profile that lacks clinical authority instantly dampens their interest.' 
                : 'Bir hasta Instagram veya Google reklamınızı gördüğünde ilk yaptığı şeylerden biri profilinizi kontrol etmektir. Reklamınız veya videonuz ne kadar başarılı olursa olsun, hasta profilinize geldiğinde düzensiz veya uzmanlığınızı anlatmayan bir hesapla karşılaşırsa reklamın oluşturduğu ilgi hızla kaybolabilir.'}
            </p>

            <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
              {isEn 
                ? 'Conversely, an expertly sculpted physician profile—featuring structured video consultations, transparent credentials, and genuine patient transformations—streamlines the decision process.' 
                : 'Tam tersine; profesyonel hazırlanmış bir doktor profili, doğru içerikler, hasta deneyimleri, bilgilendirici videolar ve güçlü dijital görünürlük hastanın karar sürecini kolaylaştırır.'}
            </p>

            <div className="p-4 rounded-2xl bg-[#EEF3FB] border border-[#446CB5]/30 text-sm font-bold text-[#446CB5]">
              {isEn 
                ? 'To us, social media is not just a broadcasting channel; it is an authoritative trust sanctuary that articulates the physician’s surgical craft and clinical empathy to the world.'
                : 'Bizim için sosyal medya yalnızca paylaşım yapılan bir kanal değil; doktorun uzmanlığını, tecrübesini ve yaklaşımını dijital dünyaya doğru şekilde aktaran bir güven alanıdır.'}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-[#DDE2E8] shadow-md">
              <img 
                src="/images/doctor_brand_hero.jpg" 
                alt="Doctor Profile Optimization" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 3: Doktor Kişisel Markası Nasıl Oluşturulur? */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <Building2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Strategic Blueprint' : 'Stratejik Adımlar'}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {isEn ? 'How to Build an International Doctor Brand' : 'Doktor Kişisel Markası Nasıl Oluşturulur?'}
            </h2>
            <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
              {isEn 
                ? 'The first step is never just publishing more posts. We first define precise medical positioning: which signature procedures the physician excels at, which countries they target, and why international patients should entrust them with their surgery.' 
                : 'Doktor marka yönetiminde ilk adım daha fazla paylaşım yapmak değildir. İlk olarak doktorun nasıl konumlandırılacağını belirlemek gerekir. Örneğin bir plastik cerrah için “Plastik cerrah” olmak tek başına yeterli değildir; hangi operasyonlarda öne çıktığı, hangi ülkelere hitap ettiği ve neden tercih edilmesi gerektiği netleştirilmelidir.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE2E8] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#446CB5] text-white font-black text-lg flex items-center justify-center">
                  1
                </span>
                <h3 className="font-['Inter_Tight'] text-lg sm:text-xl font-bold text-[#222222]">
                  {isEn ? 'Defining Digital Positioning & Core Expertise' : 'Doktorun Dijital Konumlandırmasını Belirliyoruz'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                {isEn 
                  ? 'We analyze your core clinical strengths and high-value treatments. Rather than building a generic profile trying to appeal to everyone, we carve out undisputed authority in signature procedures for targeted international markets.' 
                  : 'Uzmanlık alanınızı ve güçlü olduğunuz tedavileri analiz ediyoruz. Hangi hasta grubuna ulaşmak istediğinizi belirliyoruz. Hedef ülkeleri, hasta beklentilerini ve rekabet ortamını değerlendirerek herkese hitap etmeye çalışan bir profile yerine belirli alanlarda güçlü bir uzmanlık algısı inşa ediyoruz.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE2E8] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-[#446CB5] text-white font-black text-lg flex items-center justify-center">
                  2
                </span>
                <h3 className="font-['Inter_Tight'] text-lg sm:text-xl font-bold text-[#222222]">
                  {isEn ? 'Transforming Social Profiles into Trust Engines' : 'Sosyal Medya Profilinizi Güven Odaklı Hale Getiriyoruz'}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                {isEn 
                  ? 'Managing a medical profile is not just publishing weekly graphics. From the biography copy and verified badges to pinned guides and surgical video style, every touchpoint is engineered through the eyes of an international patient.' 
                  : 'Doktor sosyal medya yönetimi yalnızca haftada birkaç gönderi paylaşmak değildir. Profilin tamamı hastanın gözünden değerlendirilmelidir. Profil fotoğrafından biyografi alanına, sabitlenmiş içeriklerden video diline kadar bütün yapı doktorun kişisel markasını desteklemelidir.'}
              </p>
            </div>

          </div>

          {/* 10 Profile Elements List */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#DDE2E8] space-y-6 shadow-xs">
            <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
              {isEn ? '10 Strategic Pillars Presented on Your Doctor Profile:' : 'Sosyal Medya Profilinizde Stratejik Olarak Sunulan 10 Yapı Taşı:'}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {profileElements.map((el, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] space-y-2 hover:border-[#446CB5] transition-colors">
                  <div className="text-xs font-bold text-[#446CB5] uppercase tracking-wider">
                    {idx + 1}. {isEn ? 'Pillar' : 'Yapı Taşı'}
                  </div>
                  <h4 className="font-['Inter_Tight'] text-sm font-bold text-[#222222]">
                    {el.title}
                  </h4>
                  <p className="text-xs text-[#595F69] leading-relaxed">
                    {el.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#EEF3FB] text-xs sm:text-sm text-[#446CB5] font-bold">
              {isEn 
                ? 'The goal is not vanity follower counts. The goal is empowering visiting international patients to immediately recognize you as a reliable, board-certified medical master.' 
                : 'Amaç yalnızca takipçi kazanmak değildir. Amaç, profilinizi ziyaret eden hastanın sizin hakkınızda doğru ve güvenilir bir fikir oluşturmasını sağlamaktır.'}
            </div>
          </div>
        </div>

        {/* Section 4 & 5: Reklam Performansı & Hasta Yorumları */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-[#DDE2E8] space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{isEn ? 'Sales Team Support' : 'Satış Ekibine Destek'}</span>
            </div>

            <h2 className="font-['Inter_Tight'] text-xl sm:text-2xl font-extrabold text-[#222222]">
              {isEn ? 'Why Doctor Social Media Directly Affects Paid Ad ROI' : 'Doktor Sosyal Medya Yönetimi Neden Reklam Performansını Etkiler?'}
            </h2>

            <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
              {isEn 
                ? 'Digital ads generate awareness, but conversion happens when trust is confirmed. The patient examines your profile, Googles your background, reads reviews, and compares your work.' 
                : 'Dijital reklamlar doğrudan satış gerçekleştirmez; hastanın dikkatini çeker. Asıl karar ise sonrasında gerçekleşir. Hasta profilinizi kontrol eder, sizi Google\'da arar, yorumları okur ve karşılaştırır.'}
            </p>

            <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] space-y-2">
              <div className="text-xs font-bold text-[#446CB5]">{isEn ? 'Real-World Example:' : 'Örnek Senaryo:'}</div>
              <p className="text-xs text-[#222222] font-semibold">
                {isEn 
                  ? 'A patient seeing a "Dental Implant Turkey" or "Rhinoplasty Istanbul" ad checks the doctor before filling out a form. Finding authoritative, transparent video explanations immediately elevates consultation close rates.' 
                  : '"Dental Implant Turkey" veya "Rhinoplasty in Istanbul" reklamı gören bir hasta form doldurmadan önce doktoru araştırır. Güven veren içeriklerle karşılaşması satış görüşmesinin kalitesini doğrudan artırır.'}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
              {isEn 
                ? 'When a patient begins the WhatsApp consultation already trusting the doctor, your sales coordinators do not need to fight uphill battles building initial credibility.' 
                : 'Hasta sizi zaten tanıyarak görüşmeye başladığında satış ekibinizin sıfırdan güven oluşturması gerekmez.'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-[#DDE2E8] space-y-4 shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <MessageSquareHeart className="w-3.5 h-3.5" />
              <span>{isEn ? 'Digital Reputation' : 'Dijital İtibar'}</span>
            </div>

            <h2 className="font-['Inter_Tight'] text-xl sm:text-2xl font-extrabold text-[#222222]">
              {isEn ? 'Patient Testimonials: The Strongest Pillar of Doctor Branding' : 'Hasta Yorumları Doktor Markasının En Güçlü Parçasıdır'}
            </h2>

            <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
              {isEn 
                ? 'In cross-border healthcare, trust is never built solely by what the doctor claims. Authentic stories and experiences from fellow international patients play a decisive role.' 
                : 'Sağlık turizminde güven yalnızca doktorun kendisini anlatmasıyla oluşmaz. Diğer hastaların deneyimleri karar sürecinde vital bir rol oynar.'}
            </p>

            <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
              {isEn 
                ? 'We unify Google reviews, video interviews, social proof, and verified medical portal evaluations into a coherent digital reputation ecosystem.' 
                : 'Hasta yorumlarını yalnızca Google puanı olarak değerlendirmiyoruz. Google yorumları, video deneyimleri, sosyal medya içerikleri ve uygun platformlardaki hasta değerlendirmelerini tutarlı bir dijital itibar sisteminde birleştiriyoruz.'}
            </p>

            <div className="p-4 rounded-2xl bg-[#EEF3FB] text-xs sm:text-sm font-bold text-[#446CB5]">
              {isEn 
                ? 'Our objective is never fabricated perfection, but rather illuminating genuine surgical success and compassionate care in a professional light.' 
                : 'Buradaki amaç yapay bir mükemmellik görüntüsü değil, gerçek hasta deneyimlerini doğru şekilde görünür kılmaktır.'}
            </div>
          </div>

        </div>

        {/* Section 6: Doktor İçerik Yönetimi */}
        <div className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <FileText className="w-3.5 h-3.5" />
              <span>{isEn ? 'Content Architecture' : 'İçerik Stratejisi'}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {isEn ? 'Doctor Content Strategy: 5 Fundamental Pillars' : 'Doktor İçerik Yönetimi (5 Temel İçerik Sütunu)'}
            </h2>
            <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
              {isEn 
                ? 'A premier medical personal brand never spams self-praise. It educates, answers burning questions, and eliminates uncertainties along the international patient journey.' 
                : 'İyi bir doktor markası sürekli kendisini öven içerikler paylaşmaz. Bilgi verir, soruları cevaplar ve hastanın kafasındaki belirsizlikleri azaltır. İçerik stratejimizi hasta yolculuğuna göre planlıyoruz.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {contentPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="bg-white rounded-3xl p-6 border border-[#DDE2E8] space-y-3 shadow-xs hover:border-[#446CB5] transition-colors flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#EEF3FB] text-[#446CB5] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-['Inter_Tight'] text-base font-bold text-[#222222]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#595F69] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 7: SEO & GEO (Google & Yapay Zeka) */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#DDE2E8] space-y-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>{isEn ? 'SEO & Generative Engine Optimization (GEO)' : 'SEO & Yapay Zeka (GEO) Optimizasyonu'}</span>
              </div>

              <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-black text-[#222222]">
                {isEn ? 'What Surfaces When Patients Search or Ask AI About You?' : 'Adınız Arandığında & AI\'ya Sorulduğunda Ne Görünüyor?'}
              </h2>

              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                {isEn 
                  ? 'Having only an Instagram account when a patient searches the surgeon’s name on Google is insufficient. We engineer a robust digital presence featuring dedicated doctor websites, specialty landing pages, medical interviews, peer citations, and verified Google Business entities.' 
                  : 'Bir hasta reklamınızı gördükten sonra Google\'a doktorun adını yazar. Doktorun adı arandığında yalnızca Instagram hesabının çıkması yeterli değildir. Doktor web sitesi, uzmanlık sayfaları, röportajlar, makaleler, medya içerikleri ve Google Business profilleriyle güçlü bir dijital varlık oluşturuyoruz.'}
              </p>

              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] space-y-3">
                <h3 className="text-xs font-bold text-[#222222] uppercase tracking-wider">
                  {isEn ? 'The GEO (Generative Engine Optimization) Era:' : 'GEO (Generative Engine Optimization) Çağı:'}
                </h3>
                <p className="text-xs text-[#595F69] leading-relaxed">
                  {isEn 
                    ? 'Patients now query ChatGPT and Gemini: “Who are the best rhinoplasty surgeons in Istanbul?” or “How do I find a reputable dental implant specialist in Turkey?”. Our GEO methodologies structure your credentials and clinical data in semantic formats AI models recognize and cite.' 
                    : 'Hastarlar artık ChatGPT ve Gemini\'ye soruyor: “Who are the best rhinoplasty surgeons in Istanbul?” veya “How can I find a reliable dental implant doctor in Turkey?”. GEO çalışmalarımızla doktorunuzun dijital uzmanlık sinyallerini yapay zekanın anlayabileceği formatta yapılandırıyoruz.'}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[#222222]">
                  {isEn ? 'Target Search Queries Examples:' : 'Hedeflenen Arama Terimleri Örnekleri:'}
                </div>
                <div className="flex flex-wrap gap-2">
                  {seoGeoKeywords.map((kw, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#DDE2E8] shadow-md">
                <img 
                  src="/images/doctor_geo_ai.jpg" 
                  alt="Doctor SEO and GEO Visibility Analysis" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Section 8: Doktor Markası ile Klinik Markası Birlikte Çalışmalıdır */}
        <div className="p-8 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/30 space-y-4 text-left">
          <h2 className="font-['Inter_Tight'] text-xl sm:text-2xl font-extrabold text-[#222222]">
            {isEn ? 'The Doctor Brand and Clinic Brand Must Work in Synergy' : 'Sağlık Turizminde Doktor Markası ile Klinik Markası Birlikte Çalışmalıdır'}
          </h2>
          <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
            {isEn 
              ? 'Investing solely in clinic branding is rarely enough in cross-border healthcare. Patients will not undergo surgery by a corporate logo; they demand to know their operating surgeon.' 
              : 'Sağlık turizminde yalnızca klinik markasına yatırım yapmak her zaman yeterli değildir. Çünkü hasta operasyonu bir şirket logosuna yaptırmayacaktır; doktoru tanımak ister.'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-white border border-[#DDE2E8] space-y-1">
              <div className="text-xs font-bold text-[#446CB5]">{isEn ? 'Clinic Brand' : 'Klinik Markası'}</div>
              <p className="text-xs text-[#222222]">{isEn ? 'Represents operational trust, VIP hospitality, concierge logistics, and facilities.' : 'Operasyonel güveni, organizasyonu ve sağlık turizmi deneyimini temsil eder.'}</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-[#DDE2E8] space-y-1">
              <div className="text-xs font-bold text-[#446CB5]">{isEn ? 'Doctor Brand' : 'Doktor Markası'}</div>
              <p className="text-xs text-[#222222]">{isEn ? 'Represents clinical mastery, surgical precision, academic credentials, and personal reassurance.' : 'Uzmanlığı, tecrübeyi ve tıbbi güveni temsil eder.'}</p>
            </div>
          </div>
        </div>

        {/* Section 9: Biz Ne Yapıyoruz? (14 Deliverables Grid) */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{isEn ? 'Service Scope' : 'Hizmet Kapsamı'}</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {isEn ? 'What We Deliver' : 'Biz Ne Yapıyoruz?'}
            </h2>
            <p className="text-xs sm:text-sm text-[#595F69]">
              {isEn 
                ? 'Under our doctor brand management umbrella, we manage your global digital presence end-to-end:' 
                : 'Doktor marka yönetimi hizmetimiz kapsamında dijital varlığınızı bütüncül olarak ele alıyoruz:'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#DDE2E8] shadow-xs hover:border-[#446CB5] transition-colors">
                <CheckCircle2 className="w-5 h-5 text-[#446CB5] shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-[#222222]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section 10: Warning Banner */}
        <div className="p-8 rounded-3xl bg-white border-2 border-[#446CB5] space-y-4 shadow-sm">
          <h2 className="font-['Inter_Tight'] text-xl sm:text-2xl font-extrabold text-[#222222]">
            {isEn ? 'Prepare Your Personal Brand Before Spending on Ads' : 'Reklam Vermeden Önce Markanızı Hazırlayın'}
          </h2>
          <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
            {isEn 
              ? 'In medical tourism, increasing ad spend does not guarantee more patients. The issue often lies not in ad targeting, but in the lack of digital authority patients encounter upon clicking.' 
              : 'Sağlık turizminde reklam bütçesini artırmak her zaman daha fazla hasta anlamına gelmez. Bazen problem reklam kampanyasında değildir; hastanın reklamdan sonra karşılaştığı dijital dünyadır.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <div className="flex-1 p-4 rounded-xl bg-[#EEF3FB] text-xs font-bold text-[#446CB5]">
              {isEn ? 'Advertising makes you visible.' : 'Reklam sizi görünür hale getirir.'}
            </div>
            <div className="flex-1 p-4 rounded-xl bg-[#16202E] text-xs font-bold text-white">
              {isEn ? 'Your personal brand builds the trust required for patients to choose you.' : 'Markanız ise hastanın sizi tercih etmesi için gereken güveni oluşturur.'}
            </div>
          </div>
        </div>

        {/* Section 11: FAQ Accordions */}
        <div className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
              {isEn ? 'Frequently Asked Questions on Doctor Branding' : 'Doktor Marka Yönetimi Hakkında Sık Sorulan Sorular'}
            </h2>
            <p className="text-xs sm:text-sm text-[#595F69]">
              {isEn ? 'Detailed answers to common questions below:' : 'Merak ettiğiniz tüm detayları aşağıda yanıtladık:'}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-white rounded-2xl border border-[#DDE2E8] overflow-hidden transition-colors">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-['Inter_Tight'] font-bold text-sm sm:text-base text-[#222222] hover:text-[#446CB5] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-[#446CB5] shrink-0" /> : <ChevronDown className="w-5 h-5 text-[#595F69] shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#595F69] leading-relaxed border-t border-[#DDE2E8]/40 pt-3 bg-[#F8FAFC]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 12: Bottom Call to Action Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#16202E] via-[#1E2C3F] to-[#25354C] text-white shadow-2xl text-center space-y-6 relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#60A5FA]">
              <Sparkles className="w-4 h-4" />
              <span>{isEn ? 'Get Started Today' : 'Hemen Başlayın'}</span>
            </div>

            <h2 className="font-['Inter_Tight'] text-2xl sm:text-4xl font-black tracking-tight leading-tight text-white">
              {isEn ? 'Transform Your Medical Career into a Global Digital Asset' : 'Doktor Markanızı Bir Dijital Varlığa Dönüştürün'}
            </h2>

            <p className="text-xs sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {isEn 
                ? 'Today, a commanding doctor brand is not measured by follower counts. What surfaces when your name is searched, what past patients testify, and the clinical trust you radiate matter far more. Let us transform your surgical expertise into a premier global personal brand.' 
                : 'Bugün güçlü bir doktor markası yalnızca takipçi sayısıyla ölçülmez. Adınız arandığında ne çıktığı, hastaların hakkınızda ne söylediği ve oluşturduğunuz güven çok daha önemlidir. Uzmanlığınızı görünür, güvenilir ve sürdürülebilir bir kişisel markaya dönüştürelim.'}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg group"
              >
                <span>{isEn ? 'Schedule Doctor Brand Consultation' : 'Doktor Marka Danışmanlığı Alın'}</span>
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onBackToHome}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Back to Home' : 'Ana Sayfaya Dön'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
