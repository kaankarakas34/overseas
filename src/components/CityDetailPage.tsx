import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

      {/* ANTALYA DEDICATED CLINIC GROWTH ARCHITECTURE */}
      {slug === 'antalya-saglik-turizmi-reklam-ajansi' && (
        <section className="py-16 bg-white border-t border-slate-200 text-left">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#446CB5]/10 text-[#446CB5] mb-3">
                <Sparkles className="w-3.5 h-3.5" /> {isEn ? 'Antalya Market Strategy' : 'Antalya Sağlık Turizmi Ajansı Özel Stratejisi'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1528] mb-4">
                {isEn ? 'Antalya Dental & Aesthetics Patient Acquisition Architecture' : 'Antalya Diş ve Estetik Klinikleri İçin Uluslararası Büyüme Modeli'}
              </h2>
              <p className="text-slate-600 leading-relaxed max-w-4xl text-sm sm:text-base">
                {isEn
                  ? 'Overseas Marketing provides performance advertising, international SEO, GEO, and WhatsApp CRM systems for authorized clinics in Antalya. We are a marketing and technology agency, not a medical provider or travel agency.'
                  : 'Overseas Marketing; Antalya’daki yetkili diş klinikleri, estetik merkezleri ve hekimler için çok dilli Google Ads, Meta video kampanyaları, uluslararası SEO, GEO (AI arama motoru görünürlüğü) ve WhatsApp CRM sistemleri kurar. Kuruluşumuz bir sağlık tesisi veya seyahat acentesi değildir; büyüme ve pazarlama teknolojisi danışmanlığı sunar.'}
              </p>
            </div>

            {/* SCENARIOS: DENTAL & AESTHETICS */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h3 className="text-xl font-bold text-[#0B1528] mb-3">
                  {isEn ? 'Dental Tourism Scenario: UK & European Patients' : '1. Dental Turizm Senaryosu: İngiltere ve Avrupa Hastası'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Antalya, İngiltere pazarından implant, All-on-4, All-on-6 ve zirkonyum kaplama arayan hastalar için bir numaralı destinasyondur. Direkt uçuş hatlarının sunduğu avantajla, tatil ve tedaviyi birleştiren yüksek niyetli Google Arama Ağı kampanyaları kurguluyoruz.
                </p>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#446CB5]" /> İngiltere NHS bekleme sürelerine alternatif şeffaf tedavi adımları</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#446CB5]" /> Kullanılan implant markalarının (Straumann, Nobel vb.) açık sunumu</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#446CB5]" /> Röntgen ve tedavi planının 5 dakikada incelendiği WhatsApp CRM</li>
                </ul>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200">
                <h3 className="text-xl font-bold text-[#0B1528] mb-3">
                  {isEn ? 'Aesthetics & Hair Transplant Scenario: DACH & Gulf' : '2. Estetik Cerrahi ve Saç Ekimi: DACH ve Körfez Pazarı'}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Rinoplasti, liposuction, meme estetiği ve Safir FUE / DHI saç ekimi operasyonlarında hekimin E-E-A-T cerrahi otoritesi ve vaka güveni öne çıkarılır. 12 Kasım 2025 tanıtım mevzuatına uygun olarak fiyat manipülasyonundan uzak, kanıta dayalı bilgilendirme yapılır.
                </p>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#446CB5]" /> Tescilli uzman hekim kimliği ve cerrahi geçmişin ön plana çıkarılması</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#446CB5]" /> İyileşme süreci ve otel istirahat konseptinin detaylı anlatımı</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#446CB5]" /> HealthTürkiye portalı yetki tescili ile güven inşası</li>
                </ul>
              </div>
            </div>

            {/* AGENCY VS INTERMEDIARY DISTINCTION & REGULATORY NOTICE */}
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm leading-relaxed">
              <h4 className="font-bold text-base mb-2">Antalya'da Ajans ve Aracı Kuruluş (Acente) Ayrımı:</h4>
              <p>
                Overseas Marketing, sağlık turizmi yapan yetkili kliniklere ve aracı kuruluşlara dijital pazarlama danışmanlığı verir. Şirketimiz sağlık turizmi yetki belgesi vermez veya satmaz; seyahat acentesi gibi komisyonla hasta transferi yapmaz. Sağlık tesislerinin HealthTürkiye tescilini ve yetki belgelerini doğrulayarak yalnızca mevzuata uygun uluslararası tanıtım yürütürüz.
              </p>
            </div>

            {/* INTERNAL LINKS TO RELEVANT GUIDES */}
            <div className="pt-6 border-t border-slate-200">
              <h4 className="font-bold text-base text-[#0B1528] mb-4">Antalya ve Büyüme Ekosistemi İlgili Rehberler:</h4>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs font-semibold">
                <Link to="/antalya-saglik-turizmi" className="p-3 rounded-lg border border-slate-200 hover:border-[#446CB5] hover:text-[#446CB5] transition-colors block bg-[#F8FAFC]">
                  Antalya Sağlık Turizmi Ekosistemi →
                </Link>
                <Link to="/antalya-saglik-turizmi/acentalari" className="p-3 rounded-lg border border-slate-200 hover:border-[#446CB5] hover:text-[#446CB5] transition-colors block bg-[#F8FAFC]">
                  Antalya Yetkili Acentalar Listesi →
                </Link>
                <Link to="/blog/antalya-saglik-turizmi-danismanligi" className="p-3 rounded-lg border border-slate-200 hover:border-[#446CB5] hover:text-[#446CB5] transition-colors block bg-[#F8FAFC]">
                  Antalya Sağlık Turizmi Danışmanlığı →
                </Link>
                <Link to="/blog/antalya-saglik-turizmi-web-sitesi" className="p-3 rounded-lg border border-slate-200 hover:border-[#446CB5] hover:text-[#446CB5] transition-colors block bg-[#F8FAFC]">
                  Antalya Klinik Web Tasarımı & SEO →
                </Link>
                <Link to="/hizmetler/performans-pazarlama" className="p-3 rounded-lg border border-slate-200 hover:border-[#446CB5] hover:text-[#446CB5] transition-colors block bg-[#F8FAFC]">
                  Sağlık Turizmi Performans Pazarlama →
                </Link>
                <Link to="/hizmetler/geo-generative-engine-optimization" className="p-3 rounded-lg border border-slate-200 hover:border-[#446CB5] hover:text-[#446CB5] transition-colors block bg-[#F8FAFC]">
                  Generative Engine Optimization (GEO) →
                </Link>
              </div>
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
