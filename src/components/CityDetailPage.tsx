import React, { useState, useEffect } from 'react';
import { ArrowLeft, Sparkles, Phone, Send, CheckCircle2, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { CityItem, MASTER_CITIES } from '../data/masterPlanData';
import { MASTER_CITIES_EN } from '../i18n/masterPlanData.en';
import { useLanguage } from '../context/LanguageContext';
import { BenchmarkTable } from './BenchmarkTable';

interface CityDetailPageProps {
  slug: string;
  onBackToHome: () => void;
  onSelectCity: (slug: string) => void;
  onOpenConsultation: () => void;
}

export const CityDetailPage: React.FC<CityDetailPageProps> = ({
  slug,
  onBackToHome,
  onSelectCity,
  onOpenConsultation
}) => {
  const { isEn } = useLanguage();
  const citiesList = isEn ? MASTER_CITIES_EN : MASTER_CITIES;
  const city: CityItem = citiesList.find(c => c.slug === slug) || citiesList[0];

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
    setFormSubmitted(false);
  }, [slug]);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.kvkk) {
      alert(isEn ? 'Please accept the privacy terms.' : 'Lütfen KVKK aydınlatma metnini onaylayınız.');
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
          formType: `City Form (${city.cityName})`
        })
      });
      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      } else {
        alert(data.error || (isEn ? 'An error occurred.' : 'Gönderim sırasında hata oluştu.'));
      }
    } catch {
      alert(isEn ? 'Connection error occurred.' : 'Gönderim sırasında bağlantı hatası oluştu.');
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <div className="w-full bg-[#F8FAFC]">
      {/* HERO */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-[#0B1528] via-[#0F1E38] to-[#152747] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#446CB5_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center text-sm font-medium text-slate-300 hover:text-white transition-colors bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> {isEn ? 'Back to Home' : 'Ana Sayfaya Dön'}
            </button>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#446CB5]/30 text-[#8BB2F9] border border-[#446CB5]/50">
              <MapPin className="w-3.5 h-3.5" /> {city.cityName} {isEn ? 'Location Strategy' : 'Lokasyon Analizi'}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-6">
                {city.h1}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8">
                {city.overview || city.lead}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={onOpenConsultation}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#446CB5] to-[#2E4E8C] text-white font-semibold shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4" /> {isEn ? `Contact for ${city.cityName} Clinics` : `${city.cityName} Klinikleri İçin İletişim`}
                </button>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-5 bg-white text-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-100">
              <h3 className="text-xl font-bold text-[#0B1528] mb-2 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#446CB5]" /> {city.cityName} {isEn ? 'Consulting' : 'Danışmanlığı'}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {isEn ? `Let’s design your health tourism strategy tailored to ${city.cityName}.` : `${city.cityName} lokal sağlık turizmi stratejinizi oluşturalım.`}
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-1">{isEn ? 'Request Received!' : 'Talebiniz Alındı!'}</h4>
                  <p className="text-xs">{isEn ? 'Our specialist will contact you shortly.' : 'Uzmanımız en kısa sürede sizinle iletişime geçecektir.'}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">{isEn ? 'Full Name' : 'Ad Soyad'}</label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? "Dr. Full Name" : "Ad Soyad"}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">{isEn ? 'Clinic Name' : 'Klinik Adı'}</label>
                    <input
                      type="text"
                      required
                      placeholder={isEn ? "Clinic Name" : "Klinik Adı"}
                      value={formData.clinicName}
                      onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">{isEn ? 'Email' : 'E-Posta'}</label>
                      <input
                        type="email"
                        required
                        placeholder="doctor@clinic.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">{isEn ? 'Phone' : 'Telefon'}</label>
                      <input
                        type="tel"
                        required
                        placeholder="+44 7000 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-[#446CB5] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="city-kvkk"
                      required
                      checked={formData.kvkk}
                      onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                      className="mt-1 rounded border-slate-300 text-[#446CB5] focus:ring-[#446CB5]"
                    />
                    <label htmlFor="city-kvkk" className="text-[11px] text-slate-500 leading-snug">
                      {isEn ? 'I consent to data processing for consulting.' : 'KVKK Aydınlatma Metnini okudum, kabul ediyorum.'}
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={formLoading}
                    className="w-full py-3 bg-[#446CB5] hover:bg-[#345693] text-white font-semibold rounded-lg text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formLoading ? (isEn ? 'Sending...' : 'Gönderiliyor...') : <>{isEn ? 'Get City Strategy' : 'Şehir Stratejisi Al'} <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PASSAGE-FIRST DIRECT ANSWER & BENCHMARK TABLE */}
      <section className="py-12 bg-white border-b border-slate-150 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-2xl border border-slate-200 mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#446CB5]/10 text-[#446CB5] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" /> {isEn ? 'Regional Healthcare Ecosystem Framework' : 'Şehir ve Bölgesel Ekosistem Çerçevesi'}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1528] mb-3">
              {isEn ? `What Does a Medical Tourism Agency in ${city.cityName} Do?` : `${city.cityName} Sağlık Turizmi Reklam Ajansı Ne Yapar?`}
            </h2>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium mb-4">
              <strong>{city.cityName} {isEn ? 'medical tourism advertising agency' : 'sağlık turizmi reklam ajansı'}</strong>; {isEn
                ? `A specialized partner integrating local destination assets (international flight connections, hotel recovery partnerships, academic surgical faculty) into high-performance digital marketing campaigns (Google Ads, Meta, SEO, and GEO) to drive foreign patient revenue.`
                : `${city.cityName} merkezli klinik ve hastanelerin uluslararası hasta potansiyelini artırmak amacıyla yerel avantajları (uçuş hatları, otel iş birlikleri, cerrahi kadrolar) dijital pazarlama kampanyalarına (Google Ads, Meta, SEO ve GEO) entegre eden uzman kuruluştur.`}
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {isEn
                ? 'We optimize cost-per-acquisition in competitive regional environments and orchestrate the patient follow-up pipeline until airport arrival.'
                : 'Yoğun yerel rekabet ortamında tıklama başı maliyetleri optimize eder ve gelen hastaların kliniğe transferine kadar olan iletişim zincirini yapılandırır.'}
            </p>
          </div>

          {/* Benchmark Table */}
          <BenchmarkTable type="city" slug={slug} title={city.cityName} />
        </div>
      </section>

      {/* ADVANTAGES */}
      {city.localAdvantages && city.localAdvantages.length > 0 && (
        <section className="py-16 bg-white text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-[#0B1528] mb-8 text-center">
              {isEn ? `${city.cityName} Regional Digital Advantages` : `${city.cityName} Şehri Yerel Dijital Avantajları`}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {city.localAdvantages.map((adv, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-100 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-[#446CB5]/10 text-[#446CB5] flex items-center justify-center font-bold text-xs shrink-0">
                    0{idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed pt-1">{adv}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* OTHER CITIES */}
      <section className="py-16 bg-[#F8FAFC] text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-[#0B1528] mb-6">
            {isEn ? 'Other City Service Hubs' : 'Diğer Şehir Hizmet Alanlarımız'}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {citiesList.filter(c => c.slug !== slug).map((c) => (
              <button
                key={c.slug}
                onClick={() => onSelectCity(c.slug)}
                className="p-4 rounded-xl border border-slate-200 text-left bg-white hover:border-[#446CB5] transition-all group cursor-pointer"
              >
                <div className="text-xs font-semibold text-[#446CB5] mb-1">{isEn ? 'City Hub' : 'Şehir Odaklı'}</div>
                <div className="text-sm font-bold text-slate-800 group-hover:text-[#446CB5] transition-colors flex items-center justify-between">
                  {c.cityName} <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
