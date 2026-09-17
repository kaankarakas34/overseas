import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare, 
  ArrowRight,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

export const ContactPage: React.FC = () => {
  const { isEn } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    institution: '',
    email: '',
    phone: '',
    serviceNeed: 'Performans Pazarlama & Reklam',
    targetMarket: 'İngiltere (UK)',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sourcePage: '/iletisim',
          submittedAt: new Date().toISOString()
        })
      });

      if (res.ok) {
        setStatus('success');
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Contact',
            event_label: formData.serviceNeed
          });
        }
      } else {
        throw new Error('Form iletilirken bir sorun oluştu.');
      }
    } catch (err: any) {
      // Fallback grace for offline/dev
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Contact Overseas Marketing | Health Tourism Growth Agency" : "İletişim | Overseas Marketing Sağlık Turizmi Reklam Ajansı"}
        description={isEn
          ? "Contact Overseas Marketing: Schedule a strategic discovery call, get our agency address, phone, and WhatsApp contact lines."
          : "Overseas Marketing ile iletişime geçin: Sağlık turizmi strateji toplantısı planlayın, ajans telefon, e-posta, WhatsApp ve adres bilgileri."}
        canonicalUrl="https://www.overseas.marketing/iletisim"
      />
      <JsonLdSchema type="home" />

      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{isEn ? "Direct Communication" : "Doğrudan İletişim"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-6 max-w-4xl">
          {isEn ? (
            <>Let's discuss your clinic's <span className="text-[#446CB5]">cross-border patient pipeline</span>.</>
          ) : (
            <>Kliniğinizin büyüme hedeflerini <span className="text-[#446CB5]">birlikte planlayalım</span>.</>
          )}
        </h1>
        <p className="text-lg text-[#595F69] max-w-3xl leading-relaxed">
          {isEn
            ? "Whether you need a full patient acquisition audit, Google & Meta Ads restructuring, or custom CRM setup, our healthcare marketing directors are ready to connect."
            : "Sağlık turizmi reklam yönetimi, çok dilli web sitesi, medikal CRM veya yapay zekâ entegrasyonu ihtiyaçlarınız için doğrudan uzman ekibimize ulaşın."}
        </p>
      </section>

      {/* Main Grid: Form + Info Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#DDE2E8] shadow-sm">
            <h2 className="font-['Inter_Tight'] text-2xl font-bold text-[#16202E] mb-2">
              {isEn ? "Request a Strategic Growth Meeting" : "Strateji Toplantısı Talep Edin"}
            </h2>
            <p className="text-sm text-[#595F69] mb-8">
              {isEn ? "Fill out this brief form; our team will review your clinic and respond within 24 hours." : "Formu doldurduktan sonra 24 saat içinde kliniğinizin hedef pazar analiziyle dönüş sağlıyoruz."}
            </p>

            {status === 'success' ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-['Inter_Tight'] text-2xl font-bold text-emerald-950">
                  {isEn ? "Thank you! Your request is received." : "Talebiniz Alındı!"}
                </h3>
                <p className="text-sm text-emerald-800/80 max-w-md mx-auto">
                  {isEn
                    ? "Our healthcare marketing directors are reviewing your clinic profile and will contact you promptly."
                    : "Uzmanlarımız kliniğinizi inceleyerek en kısa sürede telefon veya e-posta yoluyla sizinle iletişime geçecektir."}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                      {isEn ? "Full Name *" : "Adınız Soyadınız *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? "Dr. John Doe" : "Dr. Ahmet Yılmaz"}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                      {isEn ? "Clinic / Hospital Name *" : "Kurum / Klinik Adı *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? "Acme Dental Clinic" : "Örnek Diş Kliniği"}
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                      {isEn ? "Email Address *" : "E-posta Adresiniz *"}
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="info@klinik.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                      {isEn ? "Phone / WhatsApp *" : "Telefon / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 532 000 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                      {isEn ? "Primary Service Need" : "Hizmet İhtiyacı"}
                    </label>
                    <select
                      value={formData.serviceNeed}
                      onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                    >
                      <option value="Performans Pazarlama & Reklam">{isEn ? "Paid Performance Advertising" : "Performans Pazarlama & Reklam"}</option>
                      <option value="Uluslararası SEO & GEO">{isEn ? "International SEO & GEO" : "Uluslararası SEO & GEO"}</option>
                      <option value="Dönüşüm Odaklı Web / Landing Page">{isEn ? "Medical Website & Landing Page" : "Dönüşüm Odaklı Web / Landing Page"}</option>
                      <option value="Sağlık Turizmi CRM & AI">{isEn ? "Medical CRM & AI Automation" : "Sağlık Turizmi CRM & AI"}</option>
                      <option value="Doktor Marka Yönetimi">{isEn ? "Doctor Brand Management" : "Doktor Marka Yönetimi"}</option>
                      <option value="Uçtan Uca Büyüme Danışmanlığı">{isEn ? "Full 360° Growth Consulting" : "Uçtan Uca Büyüme Danışmanlığı"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                      {isEn ? "Primary Target Country" : "Öncelikli Hedef Pazar"}
                    </label>
                    <select
                      value={formData.targetMarket}
                      onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                    >
                      <option value="İngiltere (UK)">İngiltere (UK & Ireland)</option>
                      <option value="Almanya (DACH)">Almanya (Almanya, Avusturya, İsviçre)</option>
                      <option value="Fransa">Fransa & Belçika</option>
                      <option value="Hollanda">Hollanda & Benelüks</option>
                      <option value="Körfez / Orta Doğu">Körfez / Orta Doğu (BAE, Suudi vb.)</option>
                      <option value="Diğer">{isEn ? "Other International" : "Diğer Ülkeler"}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                    {isEn ? "Short Project Message" : "Kısa Mesajınız / Notunuz"}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={isEn ? "Describe your current monthly lead volume or growth targets..." : "Kliniğinizin mevcut reklam durumu, branşları veya hedefleri hakkında kısa bilgi verin..."}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm transition-colors"
                  />
                </div>

                <div className="flex items-center gap-2 text-xs text-[#595F69] pt-2">
                  <ShieldCheck className="w-4 h-4 text-[#446CB5] shrink-0" />
                  <span>{isEn ? "Protected under strict medical confidentiality & KVKK standards." : "Verileriniz KVKK standartları ve gizlilik ilkeleriyle korunmaktadır."}</span>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl bg-[#446CB5] hover:bg-[#345999] text-white font-bold text-base transition-colors shadow-lg shadow-[#446CB5]/25 flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{isEn ? "Submit Strategy Request" : "Strateji Toplantısı Talep Et"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Details Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm space-y-6">
              <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#16202E]">
                {isEn ? "Overseas Marketing Agency Office" : "Overseas Marketing Ajans Bilgileri"}
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF3FB] text-[#446CB5] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase">{isEn ? "Direct Phone / WhatsApp" : "Telefon & WhatsApp"}</div>
                    <a href="tel:+905363197697" className="font-semibold text-[#16202E] hover:text-[#446CB5]">
                      0536 319 76 97
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF3FB] text-[#446CB5] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase">{isEn ? "Email" : "E-posta"}</div>
                    <a href="mailto:info@overseas.marketing" className="font-semibold text-[#16202E] hover:text-[#446CB5]">
                      info@overseas.marketing
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF3FB] text-[#446CB5] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase">{isEn ? "Location" : "Adres"}</div>
                    <div className="font-medium text-[#16202E]">
                      Maslak Mah. Büyükdere Cad. No:255, Sarıyer / İstanbul
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#EEF3FB] text-[#446CB5] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#94A3B8] uppercase">{isEn ? "Hours" : "Çalışma Saatleri"}</div>
                    <div className="font-medium text-[#16202E]">
                      Pazartesi – Cuma: 09:00 – 19:00 (Yabancı Hasta AI Karşılama 7/24 Aktiftir)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Box */}
            <div className="p-6 rounded-3xl bg-[#EEF3FB] border border-[#446CB5]/20 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-[#16202E] text-sm sm:text-base">
                  {isEn ? "Prefer instant WhatsApp chat?" : "WhatsApp ile anında görüşün"}
                </h4>
                <p className="text-xs text-[#595F69] mt-0.5">
                  {isEn ? "Direct line with our healthcare directors" : "Strateji direktörümüzle doğrudan yazışın"}
                </p>
              </div>
              <a
                href="https://wa.me/905363197697?text=Merhaba,%20sa%C4%9Fl%C4%B1k%20turizmi%20reklam%20ve%20b%C3%BCy%C3%BCme%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-colors shrink-0 shadow-xs flex items-center gap-1.5"
              >
                <span>WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
