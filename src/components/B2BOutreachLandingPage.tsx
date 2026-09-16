import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Target, 
  ExternalLink,
  Calendar,
  MessageSquare,
  Sparkles,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SEOHead } from './SEOHead';

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4 fill-current" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.32a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
  </svg>
);

const B2B_LINKEDIN_URL = 'https://www.b2blinkedin.marketing/linkedin-outreach/';

export const B2BOutreachLandingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    targetAudience: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          clinicName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          selectedServices: ['B2B LinkedIn Outreach Sistemi'],
          targetCountries: formData.targetAudience,
          message: formData.message,
          formType: 'B2B LinkedIn Outreach Landing Page'
        })
      });
    } catch (err) {
      console.warn('Form submission background error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const scrollToForm = () => {
    const el = document.getElementById('teklif-formu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0E1726] text-slate-100 flex flex-col selection:bg-[#0A66C2] selection:text-white font-sans antialiased">
      <SEOHead
        title="B2B LinkedIn Outreach & Müşteri Edinimi | Overseas Marketing"
        description="Hedef pazarınızdaki karar vericilere (CEO, Kurucu, C-Level) doğrudan ulaşan, soğuk mesajları nitelikli B2B toplantılarına dönüştüren otomatik LinkedIn Outreach büyüme sistemi."
        canonicalUrl="https://www.overseas.marketing/b2b-linkedin-outreach"
        robots="index, follow"
        hasEnAlternate={false}
      />

      {/* Standalone Minimal Header */}
      <header className="sticky top-0 z-40 bg-[#0E1726]/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2 group">
              <img 
                src="/logo2/siyah.png" 
                alt="Overseas Marketing" 
                className="h-6 w-auto max-w-[160px] brightness-0 invert object-contain transition-opacity group-hover:opacity-90"
              />
            </a>
            <span className="hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded bg-[#0A66C2]/20 text-[#38BDF8] border border-[#0A66C2]/40">
              B2B Growth
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={B2B_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors"
            >
              <span>Resmi Çözüm Partneri: b2blinkedin.marketing</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#0A66C2]" />
            </a>

            <button
              onClick={scrollToForm}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs sm:text-sm font-semibold tracking-wide shadow-lg shadow-[#0A66C2]/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Görüşme Planla</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0A66C2]/15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#38BDF8]/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A66C2]/15 border border-[#0A66C2]/30 text-xs sm:text-sm font-medium text-[#38BDF8] mb-6">
              <LinkedInIcon className="w-4 h-4 text-[#0A66C2] fill-current" />
              <span>LinkedIn B2B Outreach & Doğrudan Satış Hattı</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Hedef Müşterilerinize Doğrudan Ulaşın, Takviminizi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#0A66C2] to-blue-400">Nitelikli B2B Toplantılarla</span> Doldurun.
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed mb-10">
              Spam mesajlara son verin. Sektörünüzdeki karar vericilere (C-Level, Kurucu, Satın Alma Direktörleri) özel kurgulanan kişiselleştirilmiş LinkedIn outreach mimarisiyle ayda <strong>15-40 arası onaylı satış toplantısı</strong> oluşturun.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#0A66C2] to-[#0284C7] hover:from-[#084e96] hover:to-[#0369a1] text-white text-base font-bold shadow-xl shadow-[#0A66C2]/40 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>B2B Outreach Analizinizi Başlatın</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href={B2B_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center justify-center gap-2"
              >
                <span>Metodolojiyi İncele (b2blinkedin)</span>
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Proof Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">%38+</div>
                <div className="text-xs text-slate-400 mt-1">Ortalama Yanıt Oranı</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">15 - 40</div>
                <div className="text-xs text-slate-400 mt-1">Aylık Nitelikli Toplantı</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">%100</div>
                <div className="text-xs text-slate-400 mt-1">Doğrulanmış Karar Verici</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">0 Spam</div>
                <div className="text-xs text-slate-400 mt-1">Güvenli ve Doğal Yaklaşım</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY B2B OUTREACH? 3 STEPS */}
      <section className="py-20 bg-[#0B111E] border-y border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Geleneksel Reklamlar Yerine Neden B2B LinkedIn Outreach?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-4">
              Meta ve Google reklamlarında B2B karar vericileri yakalamak yüksek bütçe ve düşük nitelik riski taşır. LinkedIn Outreach ile doğrudan masada olan kişiye teklif sunarsınız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#0A66C2]/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#38BDF8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">1. Nokta Atışı ICP Belirleme</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Şirket büyüklüğü, sektörü, cirosu, coğrafi konumu ve unvanına (CEO, CMO, Satış Direktörü vb.) göre tam eşleşen ideal müşteri profili (ICP) filtrelenir.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#0A66C2]/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#38BDF8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">2. Kişiselleştirilmiş Mesaj Akışı</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Robotik şablonlar yerine, hedef kişinin sektör dinamiklerine ve acı noktalarına değinen, yüksek değer önerili 3-4 adımlı doğal takip dizileri kurulur.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-[#0A66C2]/60 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 text-[#38BDF8] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">3. Takviminize Otomatik Toplantı</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Olumlu geri dönüş yapan potansiyel alıcılar, satış ekibinizin doğrudan Google Meet / Zoom takvimine nitelikli toplantı olarak işlenir.
              </p>
            </div>

          </div>

          {/* Deep link banner */}
          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-slate-900 via-[#0A66C2]/15 to-slate-900 border border-[#0A66C2]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-lg bg-[#0A66C2] flex items-center justify-center shrink-0">
                <LinkedInIcon className="w-5 h-5 text-white fill-current" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Detaylı vaka çalışmaları ve örnek akışlar için</h4>
                <p className="text-xs text-slate-300">b2blinkedin.marketing platformumuzda yayınlanan tam rehberi inceleyin.</p>
              </div>
            </div>
            <a
              href={B2B_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold shrink-0 transition-colors"
            >
              <span>Rehberi Aç</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* WHAT WE DELIVER & FORM */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-[#38BDF8]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Eksiksiz Kurulum & Yönetim</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Siz Satışa Odaklanın, Outreach Operasyonunu Biz Yönetelim.
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Profil optimizasyonundan Sales Navigator aramalarına, A/B copywriting testlerinden takvim entegrasyonuna kadar uçtan uca B2B outbound altyapınızı kuruyoruz.
            </p>

            <ul className="space-y-3.5 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span><strong>LinkedIn Profil Mimarisi:</strong> Kurucu veya satış temsilcisi profilinizin yetkinlik ve güven odaklı yeniden düzenlenmesi.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span><strong>Özel B2B Listeleme:</strong> Sektör, teknoloji kullanımı ve unvan kırılımlarında haftalık taze veri çekimi.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span><strong>Algoritma Dostu Gönderim:</strong> Günlük limitlere uygun, hesap güvenliğini %100 koruyan bulut tabanlı otomasyon.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                <span><strong>Haftalık Raporlama & KPI Takibi:</strong> Bağlantı kabul oranı, yanıt oranı ve toplantı maliyeti metrikleri.</span>
              </li>
            </ul>
          </div>

          {/* FORM CARD */}
          <div id="teklif-formu" className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/95 border border-slate-800 shadow-2xl shadow-black/60 relative">
              <div className="text-left mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">Ücretsiz Ön Değerlendirme</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">LinkedIn B2B Büyüme Planınızı Alın</h3>
                <p className="text-xs text-slate-400 mt-1">Bilgilerinizi bırakın; sektörünüze uygun outreach potansiyelinizi ve örnek toplantı projeksiyonunu 24 saat içinde sunalım.</p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#0A66C2]/20 border border-[#0A66C2] text-[#38BDF8] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Talebiniz Alındı!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    B2B uzmanımız LinkedIn pazar araştırmanızı hazırlayarak verdiğiniz telefon ve e-posta üzerinden sizinle iletişime geçecektir.
                  </p>
                  <div className="pt-4">
                    <a
                      href={B2B_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A66C2] text-white text-xs font-semibold"
                    >
                      <span>b2blinkedin.marketing Rehberine Göz At</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Örn: Burak Yılmaz"
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#0A66C2] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Şirket / Marka Adı *</label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="Örn: Teknoloji A.Ş."
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#0A66C2] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">Telefon / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="053X XXX XX XX"
                        className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#0A66C2] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Kurumsal E-posta Adresi *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="burak@sirketiniz.com"
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#0A66C2] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Hedef Kitleniz / Sektörünüz (Opsiyonel)</label>
                    <input
                      type="text"
                      value={formData.targetAudience}
                      onChange={e => setFormData({ ...formData, targetAudience: e.target.value })}
                      placeholder="Örn: SaaS kurucuları, İK yöneticileri, İhracat firmaları..."
                      className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm focus:outline-none focus:border-[#0A66C2] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0A66C2] to-[#0284C7] hover:from-[#084e96] hover:to-[#0369a1] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#0A66C2]/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Teklif ve Analiz İsteyin</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-400 text-center pt-2">
                    Bilgileriniz KVKK kapsamında korunur ve 3. taraflarla paylaşılmaz.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* MINIMAL FOOTER FOR LANDING */}
      <footer className="mt-auto bg-[#070B14] border-t border-slate-800/80 py-8 text-slate-400 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-white font-bold">Overseas Marketing</span>
            <span>•</span>
            <span>B2B Growth & Outreach Division</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={B2B_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#38BDF8] hover:underline flex items-center gap-1"
            >
              <span>b2blinkedin.marketing</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <span>© {new Date().getFullYear()} Tüm Hakları Saklıdır.</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
