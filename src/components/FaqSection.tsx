import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search
} from 'lucide-react';
import { MASTER_FAQS } from '../data/masterPlanData';
import { MASTER_FAQS_EN } from '../i18n/masterPlanData.en';
import { useLanguage } from '../context/LanguageContext';

interface FaqSectionProps {
  onOpenConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenConsultation }) => {
  const { isEn } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // default open first two

  const faqsList = isEn ? MASTER_FAQS_EN : MASTER_FAQS;

  const categories = isEn
    ? [
        { id: 'all', label: 'All' },
        { id: 'General', label: 'General' },
        { id: 'Performance', label: 'Performance Ads' },
        { id: 'SEO & GEO', label: 'SEO & GEO' },
        { id: 'CRM & AI', label: 'CRM & AI' },
        { id: 'Legal & Ethics', label: 'Legal & Ethics' }
      ]
    : [
        { id: 'all', label: 'Tümü' },
        { id: 'Genel', label: 'Genel' },
        { id: 'Performans', label: 'Performans' },
        { id: 'SEO & GEO', label: 'SEO & GEO' },
        { id: 'CRM & AI', label: 'CRM & AI' },
        { id: 'Hukuk & Etik', label: 'Hukuk & Etik' }
      ];

  const filteredFaqs = faqsList.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
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
            <span>{isEn ? 'Frequently Asked Questions & Detailed Answers' : 'Merak Edilen Tüm Sorular ve Yanıtlar'}</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
            {isEn ? (
              <>Frequently Asked <span className="text-[#446CB5]">Questions</span></>
            ) : (
              <>Sıkça Sorulan <span className="text-[#446CB5]">Sorular</span></>
            )}
          </h2>

          <p className="text-sm sm:text-base text-[#595F69]">
            {isEn
              ? 'Key insights regarding health tourism advertising budgets, CRM workflows, AI voice agents, and international compliance.'
              : 'Sağlık turizmi pazarlaması, CRM entegrasyonları, yapay zekâ sesli karşılama ve yasal mevzuat hakkında en çok sorulan konular.'}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="space-y-4 mb-8">
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-[#595F69] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isEn ? "Search questions (e.g. CRM, Budget, Guarantee, AI)..." : "Sorularda arayın (örn. CRM, ChatGPT, Bütçe, Hasta Garantisi)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-[#DDE2E8] text-xs focus:outline-none focus:border-[#446CB5] shadow-xs"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#446CB5] text-white shadow-xs'
                    : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB]'
                }`}
              >
                {cat.label}
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
              {isEn ? 'No questions match your search. Please reach out to us directly.' : 'Aradığınız kritere uygun soru bulunamadı. Lütfen doğrudan bize danışın.'}
            </div>
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-[#DDE2E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <div className="font-['Inter_Tight'] font-bold text-sm text-[#222222]">
              {isEn ? 'Have a different question or custom requirement?' : 'Farklı bir sorunuz veya kurumunuza özel bir gereksinim mi var?'}
            </div>
            <div className="text-xs text-[#595F69]">
              {isEn ? 'Schedule a 1-on-1 strategy session with our medical marketing team.' : 'Uzman ekibimizle birebir değerlendirme toplantısı planlayabilirsiniz.'}
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-5 py-2.5 rounded-xl bg-[#446CB5] hover:bg-[#35558F] text-white text-xs font-semibold shrink-0 cursor-pointer shadow-xs"
          >
            {isEn ? 'Consult With Us' : 'Bize Danışın'}
          </button>
        </div>

      </div>
    </section>
  );
};
