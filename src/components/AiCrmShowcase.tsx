import React, { useState } from 'react';
import { 
  Bot, 
  Database, 
  PhoneCall, 
  Mic, 
  MicOff, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  Globe2, 
  ArrowRight,
  TrendingUp,
  Layers
} from 'lucide-react';

interface AiCrmShowcaseProps {
  onOpenConsultation: () => void;
}

export const AiCrmShowcase: React.FC<AiCrmShowcaseProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'crm' | 'callAgent' | 'geo'>('callAgent');
  const [agentLang, setAgentLang] = useState<'en' | 'de' | 'ar' | 'tr'>('en');
  const [isPlayingSim, setIsPlayingSim] = useState(false);
  const [simStep, setSimStep] = useState(0);

  const CALL_SCRIPTS = {
    en: {
      lang: 'İngilizce (Birleşik Krallık & İrlanda)',
      patient: '“Hello, I\'m calling from Manchester. I\'m looking for All-on-4 dental implants in Istanbul. What is the process?”',
      agent: '“Hello and welcome! I\'m the AI assistant for Aurora Clinic. All-on-4 treatments typically take 4-5 days including 3D digital planning and VIP airport transfer. Would you like our senior dental coordinator to prepare a customized doctor evaluation today?”',
      result: 'Otomatik CRM Görevi #8410: Birleşik Krallık Ekibine Atandı · Ön Eleme: %100 Başarılı'
    },
    de: {
      lang: 'Almanca (DACH Bölgesi)',
      patient: '“Guten Tag, ich interessiere mich für eine Haartransplantation (DHI-Methode) in der Türkei. Wie läuft die Beratung ab?”',
      agent: '“Guten Tag! Willkommen bei der Klinik. Für die DHI-Haartransplantation bieten wir ein Rundum-Sorglos-Paket inklusive 5-Sterne-Hotel und deutschsprachiger Betreuung. Darf ich Ihre Fotos für die ärztliche Vorab-Analyse anfordern?”',
      result: 'Automatische CRM-Aufgabe #8411: DACH-Team zugewiesen · Vorqualifizierung: Abgeschlossen'
    },
    ar: {
      lang: 'Arapça (Körfez & BAE)',
      patient: '“مرحباً، أود الاستفسار عن جراحة السمنة وتكميم المعدة في إسطنبول مع الإقامة الفندقية.”',
      agent: '“أهلاً بك! نوفر برامج جراحة السمنة الشاملة بإشراف نخبة من كبار الجراحين والمستشفيات المعتمدة دولياً JCI. يسعدنا ترتيب استشارة طبية مباشرة مع المنسق الطبي.”',
      result: 'مهمة CRM تلقائية #8412: تم تحويلها لفريق الخليج العربي · حالة الطلب: مؤهل فوري'
    },
    tr: {
      lang: 'Türkçe (Yurtdışı Türkler / Gurbetçi)',
      patient: '“Merhaba, Almanya\'dan arıyorum. Yaz tatilinde zirkonyum kaplama ve estetik gülüş yaptırmak istiyorum.”',
      agent: '“Merhaba! Hoş geldiniz. Yurt dışından gelen misafirlerimiz için tedavi planını uçuş ve tatil tarihlerinizle senkronize ediyoruz. Hekimimizin ön değerlendirmesi için röntgen veya diş fotoğraflarınızı paylaşmak ister misiniz?”',
      result: 'Otomatik CRM Görevi #8413: Avrupa Türk Masasına İletildi · Durum: Sıcak Görüşme'
    }
  };

  const handleStartSim = () => {
    setIsPlayingSim(true);
    setSimStep(1);
    setTimeout(() => {
      setSimStep(2);
    }, 2200);
    setTimeout(() => {
      setSimStep(3);
    }, 4500);
  };

  const handleResetSim = () => {
    setIsPlayingSim(false);
    setSimStep(0);
  };

  return (
    <section id="ai-crm-lab" className="py-20 lg:py-28 bg-[#16202E] text-white relative overflow-hidden">
      
      {/* Background glow meshes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#446CB5]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#60A5FA]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#60A5FA]">
            <Cpu className="w-3.5 h-3.5 text-[#60A5FA]" />
            <span>Overseas Teknoloji Laboratuvarı</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Geleceğin Sağlık Turizmi: <br />
            <span className="text-[#60A5FA]">Özel CRM & 24/7 AI Call Agent</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Gece saat farkından doğan lead kayıplarını sıfırlayan, telefonları ana dilinde karşılayan ve tüm süreci kliniğinize özel CRM'de birleştiren akıllı altyapı.
          </p>

          {/* Tab Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setActiveTab('callAgent')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'callAgent'
                  ? 'bg-[#446CB5] text-white shadow-lg shadow-[#446CB5]/40 border border-white/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Bot className="w-4 h-4 text-white" />
              <span>AI Call Agent Canlı Testi</span>
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'crm'
                  ? 'bg-[#446CB5] text-white shadow-lg shadow-[#446CB5]/40 border border-white/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Database className="w-4 h-4 text-white" />
              <span>Özel CRM Dashboard Önizleme</span>
            </button>

            <button
              onClick={() => setActiveTab('geo')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'geo'
                  ? 'bg-[#446CB5] text-white shadow-lg shadow-[#446CB5]/40 border border-white/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>GEO (AI Arama) Simülasyonu</span>
            </button>
          </div>
        </div>

        {/* Tab 1: AI Call Agent Live Interactive Tester */}
        {activeTab === 'callAgent' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Interactive Control Box (7 cols) */}
            <div className="lg:col-span-7 bg-slate-900/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl backdrop-blur-md text-left">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="font-['Inter_Tight'] text-lg font-bold text-white flex items-center gap-2">
                    <PhoneCall className="w-5 h-5 text-[#60A5FA]" />
                    <span>Çok Dilli AI Sesli Çağrı Simülatörü</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Arayan hastayı ana dilinde karşılayıp ön eleme yapan yapay zeka senaryosunu deneyin.
                  </p>
                </div>

                {/* Language Selectors */}
                <div className="flex gap-1.5">
                  {(['en', 'de', 'ar', 'tr'] as const).map(l => (
                    <button
                      key={l}
                      onClick={() => {
                        setAgentLang(l);
                        handleResetSim();
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all uppercase cursor-pointer ${
                        agentLang === l
                          ? 'bg-[#446CB5] text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simulation Conversation Display */}
              <div className="space-y-4 min-h-[220px]">
                
                {/* Step 0: Idle State */}
                {simStep === 0 && (
                  <div className="flex flex-col items-center justify-center py-10 text-center space-y-3 bg-slate-950/40 rounded-2xl border border-dashed border-slate-800">
                    <div className="w-12 h-12 rounded-full bg-[#446CB5]/20 flex items-center justify-center text-[#60A5FA]">
                      <Bot className="w-6 h-6 text-[#60A5FA]" />
                    </div>
                    <div className="text-xs font-medium text-slate-400 max-w-sm">
                      Seçili Dil: <strong className="text-white">{CALL_SCRIPTS[agentLang].lang}</strong>
                    </div>
                    <button
                      onClick={handleStartSim}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-lg cursor-pointer"
                    >
                      <Play className="w-4 h-4 text-white fill-white" />
                      <span>Çağrı Simülasyonunu Başlat</span>
                    </button>
                  </div>
                )}

                {/* Step 1: Patient Speaks */}
                {simStep >= 1 && (
                  <div className="flex items-start gap-3 animate-in fade-in slide-in-from-left duration-300">
                    <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold shrink-0">
                      🇬🇧
                    </div>
                    <div className="p-3.5 rounded-2xl bg-slate-800 text-slate-200 text-xs leading-relaxed max-w-lg border border-slate-700">
                      <div className="text-[10px] text-slate-400 font-semibold mb-1">Arayan Hasta (Canlı Ses Girişi):</div>
                      {CALL_SCRIPTS[agentLang].patient}
                    </div>
                  </div>
                )}

                {/* Step 2: AI Voice Responds */}
                {simStep >= 2 && (
                  <div className="flex items-start gap-3 justify-end animate-in fade-in slide-in-from-right duration-300">
                    <div className="p-3.5 rounded-2xl bg-[#446CB5]/30 text-white text-xs leading-relaxed max-w-lg border border-[#446CB5]/50">
                      <div className="flex items-center justify-between text-[10px] text-[#60A5FA] font-semibold mb-1">
                        <span>Overseas AI Call Agent (0.3s Gecikme):</span>
                        <span className="flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          Seslendiriliyor
                        </span>
                      </div>
                      {CALL_SCRIPTS[agentLang].agent}
                      
                      {/* Audio Waveform visualization */}
                      <div className="flex items-center gap-1 mt-2.5 pt-2 border-t border-white/10">
                        {[40, 70, 90, 60, 100, 45, 80, 65, 95, 30, 85, 50].map((h, i) => (
                          <div 
                            key={i} 
                            style={{ height: `${h * 0.25}px` }} 
                            className="w-1 bg-[#60A5FA] rounded-full animate-pulse"
                          />
                        ))}
                        <span className="text-[9px] font-mono text-slate-400 ml-2">24kHz Doğal Türkçe/İngilizce Ses Modeli</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#446CB5] flex items-center justify-center shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {/* Step 3: Automated CRM Log & Action */}
                {simStep >= 3 && (
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between animate-in zoom-in-95 duration-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{CALL_SCRIPTS[agentLang].result}</span>
                    </div>
                    <button
                      onClick={handleResetSim}
                      className="text-[10px] underline hover:text-white flex items-center gap-1 text-emerald-200 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3 text-emerald-200" />
                      Yeniden Dene
                    </button>
                  </div>
                )}

              </div>

              {/* Specs checklist */}
              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-[11px] text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Şeffaf AI Kimlik Beyanı (Etik Standart)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Tek Tıkla Canlı İnsan Danışmana Aktarım</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>Tıbbi Teşhis Yapmaz, İdari Bilgi Verir</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  <span>KVKK/GDPR Uyumlu Güvenli Ses Kaydı</span>
                </div>
              </div>

            </div>

            {/* Right: AI Voice Agent Visual Image (5 cols) */}
            <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
              <img 
                src="/images/ai_call_agent_mockup.jpg" 
                alt="Overseas Marketing 24/7 AI Voice & Call Agent" 
                className="w-full h-[400px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16202E] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-dark border border-white/10">
                <div className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider">
                  Otomasyon Motoru
                </div>
                <p className="text-xs text-slate-200 mt-1">
                  Gelen aramaların %87\'si ilk 30 saniyede nitelikli hasta talebine dönüştürülür.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Custom CRM Dashboard Showcase */}
        {activeTab === 'crm' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Dashboard Image (8 cols) */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 relative group">
              <img 
                src="/images/crm_ai_dashboard.jpg" 
                alt="Overseas Marketing Sağlık Turizmi Özel CRM Dashboard" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* CRM Modules Description (4 cols) */}
            <div className="lg:col-span-4 space-y-5 text-left">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <h3 className="font-['Inter_Tight'] text-xl font-bold text-white">
                  Sağlık Turizmi İçin Özel Geliştirilen CRM Modülleri
                </h3>
                
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] mt-0.5 shrink-0" />
                    <span><strong>Talep Havuzu:</strong> Reklam, Web ve WhatsApp başvuruları tek ekranda toplanır.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] mt-0.5 shrink-0" />
                    <span><strong>Mükerrer Engelleme:</strong> Aynı hasta 3 farklı form doldursa dahi tek kayıtta birleşir.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] mt-0.5 shrink-0" />
                    <span><strong>Teklif & Para Birimleri:</strong> Sterlin (£), Euro (€), Dolar ($) teklifleri 1 tıkla hazırlanır.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#60A5FA] mt-0.5 shrink-0" />
                    <span><strong>Uçuş & Randevu Takvimi:</strong> Hastanın geliş tarihi, transfer ve otel operasyonu izlenir.</span>
                  </li>
                </ul>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Özel CRM İhtiyacınızı Konuşalım</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 3: GEO (Generative Engine Optimization) vs SEO */}
        {activeTab === 'geo' && (
          <div className="max-w-4xl mx-auto bg-slate-900/80 border border-slate-700 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="font-['Inter_Tight'] text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#60A5FA]" />
                  <span>ChatGPT & Gemini Sağlık Turizmi Arama Simülasyonu</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Üretken yapay zekâ modelleri hastalarınıza öneri sunarken kliniğinizi nasıl kaynak gösterir?
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#60A5FA]/20 text-[#60A5FA] font-mono shrink-0">
                GEO v2.0 Stratejisi
              </span>
            </div>

            {/* Prompt Box */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2">
                <Globe2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span>Kullanıcı Sorusu (İngiltere IP / ChatGPT Plus):</span>
              </div>
              <p className="text-sm font-semibold text-white">
                “Which clinics in Istanbul are top-rated for digital smile design and full mouth dental implants for UK patients?”
              </p>
            </div>

            {/* Simulated AI Response */}
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#60A5FA] font-semibold">
                <span>Yapay Zekâ Sentez Yanıtı & Doğrulanmış Kaynaklar:</span>
                <span className="text-slate-400">Güven Puanı: %96</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                “Based on international medical accreditations, verified doctor credentials, and transparent treatment pricing, top recognized dental centers include <strong className="text-white underline decoration-[#60A5FA]">[Kliniğiniz]</strong>. They utilize 3D intraoral scanning and provide dedicated English patient coordinators...”
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700">
                  🔗 Kaynak 1: Kliniğiniz Resmi Web Sitesi (E-E-A-T Uyumlu)
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-700">
                  🔗 Kaynak 2: Uluslararası Sağlık Basını PR Röportajı
                </span>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
