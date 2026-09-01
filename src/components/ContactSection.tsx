import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Lock, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    selectedServices: [] as string[],
    targetCountries: '',
    message: '',
    kvkkConsent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    'Performans Pazarlama (Google/Meta)',
    'SEO & GEO (Yapay Zeka Görünürlüğü)',
    'Özel CRM Yazılımı',
    'AI Call Agent & Otomasyon',
    'Landing Page & Web Sitesi',
    'İçerik & Video Prodüksiyon'
  ];

  const handleToggleService = (srv: string) => {
    setFormData(prev => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter(s => s !== srv)
          : [...prev.selectedServices, srv]
      };
    });
  };

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
          selectedServices: formData.selectedServices,
          targetCountries: formData.targetCountries,
          message: formData.message,
          formType: 'Ana Sayfa İletişim Formu'
        })
      });
    } catch (err) {
      console.warn('Form email call background:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  return (
    <section id="iletisim" className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Information & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
                <Sparkles className="w-3.5 h-3.5 text-[#446CB5]" />
                <span>İlk Görüşme & Büyüme Analizi</span>
              </div>

              <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
                Kurumunuzun bir sonraki adımını <span className="text-[#446CB5]">birlikte planlayalım</span>
              </h2>

              <p className="text-sm sm:text-base text-[#595F69] leading-relaxed">
                Yeni bir pazara açılmak, reklam performansınızı değerlendirmek veya başvuru süreçlerinizi düzenlemek istiyorsanız ihtiyacınızı bizimle paylaşın.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3">
              
              <a 
                href="tel:05363197697" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] hover:border-[#446CB5] transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEF3FB] flex items-center justify-center group-hover:bg-[#446CB5] transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-[#446CB5] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#595F69]">Doğrudan İletişim Hattı</div>
                  <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">
                    +90 536 319 76 97
                  </div>
                </div>
              </a>

              <a 
                href="mailto:info@overseas.marketing" 
                className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8] hover:border-[#446CB5] transition-all group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EEF3FB] flex items-center justify-center group-hover:bg-[#446CB5] transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-[#446CB5] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-[#595F69]">Kurumsal E-posta</div>
                  <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">
                    info@overseas.marketing
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#DDE2E8]">
                <div className="w-11 h-11 rounded-xl bg-[#EEF3FB] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-[#446CB5]" />
                </div>
                <div>
                  <div className="text-xs text-[#595F69]">Çalışma & Yanıt Saatleri</div>
                  <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">
                    Pzt - Cmt: 09:00 - 19:00 (AI Asistan 24/7)
                  </div>
                </div>
              </div>

            </div>

            {/* Privacy note */}
            <div className="p-4 rounded-2xl bg-[#EEF3FB] border border-[#446CB5]/20 text-xs text-[#595F69] space-y-1">
              <div className="font-bold text-[#446CB5] flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#446CB5]" />
                <span>Veri Güvenliği İlkesi</span>
              </div>
              <p>
                Görüşme talepleri doğrudan kıdemli büyüme danışmanlarımıza iletilir ve üçüncü taraflarla paylaşılmaz.
              </p>
            </div>

          </div>

          {/* Right Column: Application Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#F8FAFC] border border-[#DDE2E8] shadow-lg relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#222222]">
                    Talebiniz Bize Ulaştı
                  </h3>
                  <p className="text-sm text-[#595F69] max-w-md mx-auto leading-relaxed">
                    Ekibimiz, paylaştığınız iletişim bilgileri üzerinden kurumunuza özel hazırlık yaparak 24 saat içinde sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        selectedServices: [],
                        targetCountries: '',
                        message: '',
                        kvkkConsent: false
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#446CB5] text-white text-xs font-semibold"
                  >
                    Yeni Başvuru Yap
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="border-b border-[#DDE2E8] pb-3">
                    <h3 className="font-['Inter_Tight'] text-xl font-bold text-[#222222]">
                      Büyüme Görüşmesi Talep Formu
                    </h3>
                    <p className="text-xs text-[#595F69]">
                      Aşağıdaki formu doldurarak ilk strateji oturumunu planlayabilirsiniz.
                    </p>
                  </div>

                  {/* 2-Col inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#222222]">
                        Adınız ve Soyadınız <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: Dr. Ahmet Yılmaz"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#222222]">
                        Kurum / Klinik Adı <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Örn: DentGlobal Clinic"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#222222]">
                        İş E-postası <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ornek@klinik.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#222222]">
                        Telefon / WhatsApp <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+90 532 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                      />
                    </div>
                  </div>

                  {/* Multi-select Services */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-[#222222] block">
                      İlgilendiğiniz Hizmetler (Çoklu Seçebilirsiniz):
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = formData.selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => handleToggleService(srv)}
                            className={`p-2.5 rounded-xl text-xs font-medium text-left transition-all flex items-center justify-between cursor-pointer ${
                              isSelected
                                ? 'bg-[#EEF3FB] text-[#446CB5] border border-[#446CB5] font-semibold'
                                : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-slate-50'
                            }`}
                          >
                            <span className="line-clamp-1">{srv}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5] shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Target Countries */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#222222]">
                      Hedef Ülkeler / Diller (Opsiyonel)
                    </label>
                    <input
                      type="text"
                      placeholder="Örn: İngiltere, Almanya, Hollanda, BAE"
                      value={formData.targetCountries}
                      onChange={(e) => setFormData({ ...formData, targetCountries: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                    />
                  </div>

                  {/* Needs description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#222222]">
                      Mevcut Durum ve İhtiyaç Açıklaması
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Kurumunuzun mevcut hasta edinme durumu, bütçe hedefi veya karşılaştığınız sorunlar hakkında kısa bilgi verin..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                    ></textarea>
                  </div>

                  {/* Master Plan Mandatory Disclaimer */}
                  <div className="p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-[11px] text-amber-900 leading-snug">
                    <strong>Önemli Hatırlatma:</strong> Bu form sağlık kuruluşlarının iş birliği talepleri içindir. Lütfen hasta bilgisi, tıbbi belge veya özel nitelikli kişisel veri paylaşmayın.
                  </div>

                  {/* KVKK Consent */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="kvkkConsent"
                      required
                      checked={formData.kvkkConsent}
                      onChange={(e) => setFormData({ ...formData, kvkkConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#446CB5] focus:ring-[#446CB5] cursor-pointer"
                    />
                    <label htmlFor="kvkkConsent" className="text-[11px] text-[#595F69] cursor-pointer">
                      Aydınlatma metnini okudum; iş birliği değerlendirmesi amacıyla iletişim bilgilerimin işlenmesini kabul ediyorum.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-bold shadow-lg shadow-[#446CB5]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Gönderiliyor...</span>
                    ) : (
                      <>
                        <span>Görüşme Talebi Gönder</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
