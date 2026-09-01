import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { MASTER_FAQS, FaqItem } from '../data/masterPlanData';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // default open first two

  const categories = ['Tümü', 'Genel', 'Performans', 'SEO & GEO', 'CRM & AI', 'Hukuk & Etik'];

  const filteredFaqs = MASTER_FAQS.filter(item => {
    const matchesCategory = activeCategory === 'Tümü' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (index: number) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section id="sss" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <HelpCircle className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>Merak Edilen Tüm Sorular ve Yanıtlar</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            Sıkça Sorulan <span className="text-[#446CB5]">Sorular</span>
          </h2>

          <p className="text-sm sm:text-base text-[#595F69]">
            Sağlık turizmi pazarlaması, CRM entegrasyonları, yapay zekâ sesli karşılama ve yasal mevzuat hakkında en çok sorulan konular.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-[#595F69] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Sorularda arayın (örn. CRM, ChatGPT, Bütçe, Hasta Garantisi)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5] shadow-xs"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#446CB5] text-white shadow-xs'
                    : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-[#DDE2E8] overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#EEF3FB] text-[#446CB5] shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-['Inter_Tight'] text-sm sm:text-base font-bold text-[#222222]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#446CB5] transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#595F69] leading-relaxed border-t border-[#DDE2E8]/60 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#DDE2E8] text-xs text-[#595F69]">
              Aradığınız kritere uygun soru bulunamadı. Lütfen doğrudan bize danışın.
            </div>
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#DDE2E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">
              Farklı bir sorunuz veya kurumunuza özel bir gereksinim mi var?
            </div>
            <div className="text-xs text-[#595F69]">
              Uzman ekibimizle birebir değerlendirme toplantısı planlayabilirsiniz.
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shrink-0 cursor-pointer shadow-xs"
          >
            Bize Danışın
          </button>
        </div>

      </div>
    </section>
  );
};
