import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';

export const RoadmapSection: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string>('kimlik');

  const NODE_DETAILS = {
    kimlik: {
      title: 'İlk Adım: Görünen Yüzünüz (Dijital Kimlik)',
      text: 'Çünkü hasta sizi ilk defa sosyal medya hesapları veya web siteniz üzerinden sizi görecektir.',
      badge: 'Dijital Kimlik'
    },
    pazarlama: {
      title: 'İkinci Adım: Görünürlük & Trafik (Pazarlama)',
      text: 'Doğru hedef kitleye, arama niyeti yüksek hastalara Google (SEM), sosyal medya (SMM) ve arama motorları (SEO) ile ulaşma aşamasıdır.',
      badge: 'Pazarlama'
    },
    crm: {
      title: 'Üçüncü Adım: Operasyon & Otomasyon (CRM)',
      text: 'Gelen taleplerin dil bariyeri olmadan anında karşılanması, CRM hasta havuzuna kaydedilmesi ve otomatik bildirimlerle satış ekibine atanması sürecidir.',
      badge: 'CRM & Otomasyon'
    }
  };

  const current = NODE_DETAILS[activeNode as keyof typeof NODE_DETAILS] || NODE_DETAILS.kimlik;

  return (
    <section id="yol-haritasi" className="py-20 lg:py-24 bg-white border-b border-[#DDE2E8] text-left overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <Sparkles className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>Overseas Yol Haritası</span>
          </div>
          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Sağlık turizminde <span className="text-[#446CB5]">büyüme yol haritası</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Diagram Flowchart (7 cols) */}
          <div className="lg:col-span-7 bg-[#F8FAFC] border border-[#DDE2E8] rounded-3xl p-6 sm:p-8 relative overflow-x-auto min-w-[320px]">
            <div className="flex flex-col space-y-8 min-w-[550px] py-4">
              
              {/* Row 1: Dijital Kimlik Nodes */}
              <div className="flex items-center gap-8">
                
                {/* Dijital Kimlik Parent */}
                <button
                  onMouseEnter={() => setActiveNode('kimlik')}
                  onClick={() => setActiveNode('kimlik')}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-all cursor-pointer ${
                    activeNode === 'kimlik' 
                      ? 'bg-[#D32F2F] scale-105 ring-4 ring-red-200' 
                      : 'bg-[#E57373] hover:bg-[#D32F2F]'
                  }`}
                >
                  Dijital Kimlik
                </button>

                {/* Arrow lines connecting Dijital Kimlik to children */}
                <div className="flex flex-col justify-center -ml-4 h-24 w-6 shrink-0 relative">
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 24 96" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0,48 H12 V12 H24" />
                    <path d="M12,48 H24" />
                    <path d="M12,48 V84 H24" />
                  </svg>
                </div>

                {/* Sub Kimlik Items */}
                <div className="flex flex-col gap-3">
                  {['Sosyal Medya', 'Web Sitesi', 'Youtube'].map((item) => (
                    <button
                      key={item}
                      onMouseEnter={() => setActiveNode('kimlik')}
                      onClick={() => setActiveNode('kimlik')}
                      className={`px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer text-center min-w-[110px] ${
                        activeNode === 'kimlik' ? 'bg-[#D32F2F] shadow-sm' : 'bg-[#E57373]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

                {/* Connecting lines merging to Pazarlama */}
                <div className="flex flex-col justify-center -ml-4 h-24 w-8 shrink-0 relative">
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 32 96" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0,12 H12 V48 H32" />
                    <path d="M0,48 H32" />
                    <path d="M0,84 H12 V48" />
                  </svg>
                </div>

                {/* Pazarlama Node */}
                <button
                  onMouseEnter={() => setActiveNode('pazarlama')}
                  onClick={() => setActiveNode('pazarlama')}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-all cursor-pointer shrink-0 ${
                    activeNode === 'pazarlama'
                      ? 'bg-[#1976D2] scale-105 ring-4 ring-blue-200'
                      : 'bg-[#64B5F6] hover:bg-[#1976D2]'
                  }`}
                >
                  Pazarlama
                </button>

                {/* Connection lines from Pazarlama to SMM/SEM/SEO */}
                <div className="flex flex-col justify-center -ml-4 h-24 w-6 shrink-0 relative">
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 24 96" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0,48 H12 V12 H24" />
                    <path d="M12,48 H24" />
                    <path d="M12,48 V84 H24" />
                  </svg>
                </div>

                {/* Sub Marketing Items */}
                <div className="flex flex-col gap-3">
                  {['SMM', 'SEM', 'SEO'].map((item) => (
                    <button
                      key={item}
                      onMouseEnter={() => setActiveNode('pazarlama')}
                      onClick={() => setActiveNode('pazarlama')}
                      className={`px-5 py-2.5 rounded-xl text-xs font-semibold text-white transition-all cursor-pointer text-center min-w-[90px] ${
                        activeNode === 'pazarlama' ? 'bg-[#1976D2] shadow-sm' : 'bg-[#64B5F6]'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>

              </div>

              {/* Row 2: CRM & Otomasyon connection branching downwards from Pazarlama */}
              <div className="flex items-start pl-[280px]">
                
                {/* Branch line down from Pazarlama to CRM */}
                <div className="w-8 h-20 -mt-16 shrink-0 relative">
                  <svg className="w-full h-full text-slate-300" viewBox="0 0 32 80" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M0,0 V40 H32 V80" />
                  </svg>
                </div>

                {/* CRM and Automation nodes stack */}
                <div className="flex flex-col items-center gap-4 pt-1">
                  
                  {/* CRM Node */}
                  <button
                    onMouseEnter={() => setActiveNode('crm')}
                    onClick={() => setActiveNode('crm')}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-all cursor-pointer min-w-[120px] ${
                      activeNode === 'crm'
                        ? 'bg-[#AB47BC] scale-105 ring-4 ring-purple-200'
                        : 'bg-[#BA68C8] hover:bg-[#AB47BC]'
                    }`}
                  >
                    CRM
                  </button>

                  {/* Vertical Arrow */}
                  <svg className="w-4 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 16 24">
                    <path d="M8,0 V24 M4,20 L8,24 L12,20" />
                  </svg>

                  {/* Pazarlama Otomasyonu Node */}
                  <button
                    onMouseEnter={() => setActiveNode('crm')}
                    onClick={() => setActiveNode('crm')}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-all cursor-pointer min-w-[150px] ${
                      activeNode === 'crm'
                        ? 'bg-[#9C27B0] scale-105 ring-4 ring-purple-300'
                        : 'bg-[#BA68C8] hover:bg-[#9C27B0]'
                    }`}
                  >
                    Pazarlama Otomasyonu
                  </button>

                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Descriptions & Hover Explanations (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            
            {/* Top general quote */}
            <p className="text-base sm:text-lg font-semibold text-[#222222] leading-relaxed border-l-4 border-[#446CB5] pl-4">
              Her şirketin gereksinimleri ve yapıları farklıdır bu nedenle, mevcut yapınıza en uygun çözümleri belirleyerek hedeflerinize en hızlı şekilde ulaşmanızı sağlamak için çaba gösteriyoruz.
            </p>

            {/* Dynamic Hover Card */}
            <div className="p-6 rounded-2xl bg-[#EEF3FB]/60 border border-[#446CB5]/30 space-y-3 shadow-xs animate-in fade-in duration-200">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#446CB5] text-white">
                  {current.badge}
                </span>
                <span className="text-xs text-[#595F69]">Yol Haritası Detayı</span>
              </div>
              <h3 className="font-['Inter_Tight'] font-bold text-base text-[#222222]">
                {current.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#595F69] leading-relaxed">
                {current.text}
              </p>
            </div>

            <div className="text-[11px] text-[#595F69] italic flex items-center gap-1.5 pl-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>Diyagramdaki butonların üzerine gelerek aşamaları inceleyebilirsiniz.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
