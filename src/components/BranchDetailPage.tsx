import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Globe2, 
  ShieldCheck, 
  Phone, 
  Send,
  HelpCircle,
  Stethoscope,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { BranchItem, MASTER_BRANCHES } from '../data/masterPlanData';

interface BranchDetailPageProps {
  slug: string;
  onBackToHome: () => void;
  onSelectBranch: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const BranchDetailPage: React.FC<BranchDetailPageProps> = ({
  slug,
  onBackToHome,
  onSelectBranch,
  onOpenConsultation
}) => {
  const branch: BranchItem = MASTER_BRANCHES.find(b => b.slug === slug) || MASTER_BRANCHES[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setOpenFaqIndex(0);
    setFormSubmitted(false);
  }, [slug]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) {
      alert('Lütfen KVKK aydınlatma metnini onaylayınız.');
      return;
    }
    setFormLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          clinicName: formData.clinicName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          formType: `Branş Formu (${branch.title})`
        })
      });
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      } else {
        alert(data.error || 'Gönderim sırasında hata oluştu.');
      }
    } catch {
      alert('Gönderim sırasında bağlantı hatası oluştu.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#0B1528] via-[#0F1E38] to-[#152747] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#446CB5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Ana Sayfaya Dön
            </button>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#446CB5]/30 text-[#8BB2F9] border border-[#446CB5]/50">
              <Sparkles className="w-3.5 h-3.5" /> {branch.heroBadge}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                {branch.h1}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
                {branch.overview}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#446CB5] to-[#2E4E8C] text-white font-semibold shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> Kliniğiniz İçin Strateji Alın
                </button>
              </div>
            </div>

            {/* QUICK FORM BOX */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0B1528] mb-2 flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#446CB5]" /> {branch.title} Analizi
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Hedef ülkeniz ve kliniğiniz için teklif ve strateji hazırlayalım.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-1">Talebiniz Alındı!</h4>
                  <p className="text-xs">Sağlık turizmi uzmanımız 24 saat içinde dönüş yapacaktır.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Ad Soyad</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Klinik / Kurum Adı</label>
                    <input
                      type="text"
                      required
                      placeholder="Klinik Adı"
                      value={formData.clinicName}
                      onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">E-Posta</label>
                      <input
                        type="email"
                        required
                        placeholder="ornek@klinik.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Telefon</label>
                      <input
                        type="tel"
                        required
                        placeholder="05XX XXX XX XX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="branch-kvkk"
                      required
                      checked={formData.kvkk}
                      onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                      className="mt-1 rounded border-slate-300 text-[#446CB5] focus:ring-[#446CB5]"
                    />
                    <label htmlFor="branch-kvkk" className="text-[11px] text-slate-500 leading-snug">
                      KVKK Aydınlatma Metnini okudum, kabul ediyorum.
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3 bg-[#446CB5] hover:bg-[#345693] text-white font-semibold rounded-lg text-sm transition-colors shadow-md flex items-center justify-center gap-2"
                  >
                    {formLoading ? 'Gönderiliyor...' : <>Ücretsiz Strateji İste <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. HIGHLIGHTS SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1528] mb-4">
              {branch.title} İçin Neler Sunuyoruz?
            </h2>
            <p className="text-slate-600">
              Bu branşta arama yapan hastaları kliniğinize çekmek için uyguladığımız özel büyüme adımları.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {branch.highlights.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#446CB5]/10 text-[#446CB5] flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <p className="text-sm font-medium text-slate-800 leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. KEYWORDS & COVERAGE CLUSTER */}
      <section className="py-16 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#0B1528] mb-6 flex items-center gap-2">
            <Globe2 className="w-5 h-5 text-[#446CB5]" /> {branch.title} Hedeflenen Arama Niyetleri
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {branch.keywordsCovered.map((kw, i) => (
              <span key={i} className="px-4 py-2 bg-white text-slate-700 text-xs font-semibold rounded-lg shadow-sm border border-slate-200">
                #{kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OTHER BRANCHES SELECTOR */}
      <section className="py-16 bg-white border-t border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#0B1528] mb-6">Diğer Branş Çözümlerimizi İnceleyin</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {MASTER_BRANCHES.filter(b => b.slug !== slug).map((b) => (
              <button
                key={b.slug}
                onClick={() => onSelectBranch(b.slug)}
                className="p-4 rounded-xl border border-slate-200 text-left hover:border-[#446CB5] hover:bg-[#F8FAFC] transition-all group"
              >
                <div className="text-xs font-semibold text-[#446CB5] mb-1">{b.heroBadge}</div>
                <div className="text-sm font-bold text-slate-800 group-hover:text-[#446CB5] transition-colors flex items-center justify-between">
                  {b.title} <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      {branch.faq && branch.faq.length > 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0B1528] mb-8 text-center flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-[#446CB5]" /> Sıkça Sorulan Sorular
            </h2>
            <div className="space-y-4">
              {branch.faq.map((f, index) => (
                <div key={index} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full p-5 text-left font-semibold text-slate-800 flex justify-between items-center gap-4 text-sm"
                  >
                    <span>{f.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaqIndex === index ? 'rotate-180 text-[#446CB5]' : ''}`} />
                  </button>
                  {openFaqIndex === index && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {f.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
