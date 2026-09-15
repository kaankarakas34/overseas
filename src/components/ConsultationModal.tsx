import React, { useState, useEffect } from 'react';
import { 
  X, 
  CheckCircle2, 
  Sparkles,
  Send
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const { language, isEn } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    fullName: '',
    clinicName: '',
    email: '',
    phone: '',
    serviceInterest: isEn ? 'Performance Ads & Lead Acquisition' : 'Performans Pazarlama & Lead Üretimi',
    preferredTime: isEn ? 'Morning (10:00 - 13:00 GMT+3)' : 'Sabah (10:00 - 13:00)',
    notes: '',
    kvkk: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          clinicName: formData.clinicName,
          email: formData.email,
          phone: formData.phone,
          serviceInterest: formData.serviceInterest,
          preferredTime: formData.preferredTime,
          message: formData.notes,
          formType: isEn ? '30 Min. Growth Consultation (EN)' : '30 Dk. Büyüme Görüşmesi Randevusu'
        })
      });
    } catch (err) {
      console.warn('Form email call background:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.5 }
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16202E]/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#DDE2E8] p-6 sm:p-8 space-y-5 text-left relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label={isEn ? "Close" : "Kapat"}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#F8FAFC] hover:bg-[#EEF3FB] text-[#222222] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5 text-[#222222]" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-['Inter_Tight'] text-2xl font-bold text-[#222222]">
              {t.modal.successTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#595F69] max-w-md mx-auto leading-relaxed">
              {t.modal.successDesc}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-[#446CB5] text-white text-xs font-semibold cursor-pointer"
            >
              {t.modal.close}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1 pr-8">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#EEF3FB] text-[10px] font-bold text-[#446CB5] uppercase">
                <Sparkles className="w-3 h-3 text-[#446CB5]" />
                {isEn ? 'Free 30-Minute Growth Analysis' : 'Ücretsiz 30 Dk. Büyüme Analizi'}
              </div>
              <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold text-[#222222]">
                {t.modal.title}
              </h3>
              <p className="text-xs text-[#595F69]">
                {t.modal.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#222222]">{t.modal.fullName} *</label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? "Dr. / Mgr. Full Name" : "Dr. / Ynt. Ad Soyad"}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#222222]">{t.modal.clinicName} *</label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? "Clinic or Hospital Name" : "Klinik veya Hastane Adı"}
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#222222]">{t.modal.email} *</label>
                <input
                  type="email"
                  required
                  placeholder="contact@clinic.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#222222]">{t.modal.phone} *</label>
                <input
                  type="tel"
                  required
                  placeholder="+44 7000 ..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#222222]">{t.modal.serviceInterest}</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                >
                  {isEn ? (
                    <>
                      <option>Performance Ads & Lead Acquisition</option>
                      <option>Custom CRM & AI Call Agent Setup</option>
                      <option>International SEO & GEO (AI Search)</option>
                      <option>High-Converting Medical Web & LP</option>
                      <option>End-to-End Growth Engine</option>
                    </>
                  ) : (
                    <>
                      <option>Performans Pazarlama & Lead Üretimi</option>
                      <option>Özel CRM & AI Call Agent Kurulumu</option>
                      <option>Uluslararası SEO & GEO (AI Arama)</option>
                      <option>Dönüşüm Odaklı Web Sitesi & LP</option>
                      <option>Uçtan Uca Büyüme Paketi</option>
                    </>
                  )}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-[#222222]">{t.modal.preferredTime}</label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
                >
                  {isEn ? (
                    <>
                      <option>Morning (10:00 - 13:00 GMT+3)</option>
                      <option>Afternoon (14:00 - 17:00 GMT+3)</option>
                      <option>Evening (17:00 - 19:30 GMT+3)</option>
                    </>
                  ) : (
                    <>
                      <option>Sabah (10:00 - 13:00)</option>
                      <option>Öğleden Sonra (14:00 - 17:00)</option>
                      <option>Akşamüstü (17:00 - 19:30)</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[#222222]">{t.modal.notes}</label>
              <textarea
                rows={2}
                placeholder={isEn ? "Target countries or specific requirements..." : "Hedef ülkeler veya merak ettiğiniz konular..."}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5]"
              ></textarea>
            </div>

            {/* Compliance reminder */}
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 text-[10px] text-amber-900 leading-snug">
              {isEn
                ? 'Please do not submit patient medical records or health data; this form is exclusively for agency partnership inquiries.'
                : 'Lütfen hasta sağlık bilgisi veya tıbbi kayıt paylaşmayınız; form sadece ajans iş birliği görüşmeleri içindir.'}
            </div>

            <div className="flex items-start gap-2 pt-1">
              <input
                type="checkbox"
                id="modalKvkk"
                required
                checked={formData.kvkk}
                onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                className="mt-0.5 rounded border-slate-300 text-[#446CB5] focus:ring-[#446CB5] cursor-pointer"
              />
              <label htmlFor="modalKvkk" className="text-[10px] text-[#595F69] cursor-pointer">
                {t.modal.kvkk}
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-bold shadow-md shadow-[#446CB5]/20 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              {loading ? (
                <span>{t.modal.submitting}</span>
              ) : (
                <>
                  <span>{t.modal.submit}</span>
                  <Send className="w-4 h-4 text-white" />
                </>
              )}
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
