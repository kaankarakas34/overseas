import React, { useState } from 'react';
import { 
  FileCheck, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  TrendingUp,
  Globe2,
  Building2
} from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

export const GetQuotePage: React.FC = () => {
  const { isEn } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    institution: '',
    phone: '',
    email: '',
    specialty: 'Diş Kliniği & İmplant',
    targetCountry: 'İngiltere (UK)',
    monthlyBudget: '100.000 TL – 250.000 TL',
    notes: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          sourcePage: '/teklif-al',
          submittedAt: new Date().toISOString()
        })
      });
      setStatus('success');
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'Proposal',
          event_label: formData.specialty
        });
      }
    } catch {
      setStatus('success');
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={isEn ? "Get Custom Proposal & Budget Analysis | Overseas Marketing" : "Sağlık Turizmi Teklif Al | Bütçe ve CPL Analizi | Overseas Marketing"}
        description={isEn
          ? "Request a customized healthcare marketing proposal: Estimated cost-per-lead, target market roadmap, and digital acquisition budget."
          : "Kliniğinize özel sağlık turizmi pazarlama teklifi alın: Tahmini lead başı maliyet (CPL), hedef ülke büyüme planı ve reklam bütçe simülasyonu."}
        canonicalUrl="https://www.overseas.marketing/teklif-al"
      />
      <JsonLdSchema type="home" />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5] mb-4">
          <FileCheck className="w-3.5 h-3.5" />
          <span>{isEn ? "Confidential Clinic Proposal" : "Kliniğe Özel Büyüme Teklifi"}</span>
        </div>
        <h1 className="font-['Inter_Tight'] text-3xl sm:text-5xl font-extrabold text-[#16202E] tracking-tight leading-tight mb-4">
          {isEn ? (
            <>Get a customized <span className="text-[#446CB5]">patient acquisition proposal</span></>
          ) : (
            <>Kliniğinize özel <span className="text-[#446CB5]">sağlık turizmi büyüme teklifi</span> alın</>
          )}
        </h1>
        <p className="text-base sm:text-lg text-[#595F69] max-w-2xl mx-auto leading-relaxed">
          {isEn
            ? "Tell us your specialty and target countries. We will analyze your competitors, calculate realistic CPL ranges, and propose a full-funnel strategy."
            : "Branşınızı ve hedef pazarınızı belirtin. Rakiplerinizi analiz edip hedef ülkedeki ortalama başvuru maliyetlerini (CPL) ve büyüme yol haritanızı 24 saatte iletelim."}
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm">
          {status === 'success' ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-bold text-emerald-950">
                {isEn ? "Proposal Request Received!" : "Teklif Talebiniz Başarıyla Alındı!"}
              </h2>
              <p className="text-sm sm:text-base text-emerald-800/80 max-w-lg mx-auto">
                {isEn
                  ? "Our medical growth director will compile your market report, CPL benchmarks, and send your proposal to your email within 24 hours."
                  : "Strateji direktörümüz kliniğinizin hedef pazarına özel CPL tahminleri ve büyüme önerisini hazırlayarak 24 saat içinde sizinle paylaşacaktır."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                    {isEn ? "Full Name *" : "Adınız Soyadınız *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dr. Ayşe Kaya"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                    {isEn ? "Clinic / Practice Name *" : "Klinik / Muayenehane Adı *"}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="İstanbul Dental Kliniği"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                    {isEn ? "WhatsApp / Phone *" : "Telefon / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+90 532 000 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                  />
                </div>
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
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                    {isEn ? "Clinical Specialty" : "Ana Tedavi Branşı"}
                  </label>
                  <select
                    value={formData.specialty}
                    onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                  >
                    <option value="Diş Kliniği & İmplant">{isEn ? "Dental & Smile Design" : "Diş Kliniği & İmplant"}</option>
                    <option value="Saç Ekimi">{isEn ? "Hair Restoration" : "Saç Ekimi"}</option>
                    <option value="Plastik & Estetik Cerrahi">{isEn ? "Plastic & Cosmetic Surgery" : "Plastik & Estetik Cerrahi"}</option>
                    <option value="Obezite Cerrahisi">{isEn ? "Bariatric Surgery" : "Obezite Cerrahisi"}</option>
                    <option value="Göz Kliniği">{isEn ? "Eye Surgery / Laser" : "Göz Kliniği"}</option>
                    <option value="Tüp Bebek (IVF)">{isEn ? "IVF & Fertility" : "Tüp Bebek (IVF)"}</option>
                    <option value="A+ Genel Hastane">{isEn ? "Multi-Specialty Hospital" : "A+ Genel Hastane"}</option>
                    <option value="Hekim Muayenehanesi">{isEn ? "Private Physician Practice" : "Hekim Muayenehanesi"}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                    {isEn ? "Target Country" : "Hedef Pazar / Ülke"}
                  </label>
                  <select
                    value={formData.targetCountry}
                    onChange={(e) => setFormData({ ...formData, targetCountry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                  >
                    <option value="İngiltere (UK)">İngiltere (UK)</option>
                    <option value="Almanya (DACH)">Almanya, Avusturya, İsviçre</option>
                    <option value="Fransa & Belçika">Fransa & Belçika</option>
                    <option value="Hollanda & Benelüks">Hollanda & Benelüks</option>
                    <option value="Körfez / Orta Doğu">Körfez / Orta Doğu</option>
                    <option value="Çoklu Ülke">{isEn ? "Multiple Target Markets" : "Birden Fazla Ülke"}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                  {isEn ? "Estimated Monthly Advertising Budget" : "Öngörülen Aylık Reklam Bütçesi"}
                </label>
                <select
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                >
                  <option value="50.000 TL – 100.000 TL">50.000 TL – 100.000 TL</option>
                  <option value="100.000 TL – 250.000 TL">100.000 TL – 250.000 TL</option>
                  <option value="250.000 TL – 500.000 TL">250.000 TL – 500.000 TL</option>
                  <option value="500.000 TL ve üzeri">500.000 TL ve üzeri (Kurumsal Ölçek)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#16202E] uppercase tracking-wider mb-2">
                  {isEn ? "Additional Goals or Requirements" : "Özel Hedefleriniz veya Notlarınız"}
                </label>
                <textarea
                  rows={3}
                  placeholder={isEn ? "Any specific surgeries or languages you want to prioritize..." : "Öne çıkarmak istediğiniz ameliyatlar, mevcut CRM yapınız veya sormak istedikleriniz..."}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] focus:border-[#446CB5] focus:outline-none text-sm"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-[#595F69]">
                <ShieldCheck className="w-4 h-4 text-[#446CB5] shrink-0" />
                <span>{isEn ? "Your data is strictly confidential and protected under KVKK/GDPR." : "Verileriniz gizlilik sözleşmesi ve KVKK kapsamında korunur; 3. taraflarla paylaşılmaz."}</span>
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
                    <span>{isEn ? "Generate My Custom Proposal" : "Teklif ve Bütçe Planını Gönder"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
