import React, { useState } from 'react';
import { 
  TrendingUp, 
  Search, 
  Cpu, 
  Layout, 
  Database, 
  Bot, 
  Share2, 
  Video, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { MASTER_SERVICES } from '../data/masterPlanData';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  onSelectService,
  onOpenConsultation
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');

  const categories = ['Tümü', 'Görünürlük', 'Dönüşüm', 'Teknoloji', 'İçerik'];

  const filteredServices = activeCategory === 'Tümü'
    ? MASTER_SERVICES
    : MASTER_SERVICES.filter(s => s.category === activeCategory);

  const getServiceIcon = (name: string, size = "w-6 h-6") => {
    switch (name) {
      case 'TrendingUp': return <TrendingUp className={`${size} text-[#446CB5]`} />;
      case 'Search': return <Search className={`${size} text-[#446CB5]`} />;
      case 'Cpu': return <Cpu className={`${size} text-[#446CB5]`} />;
      case 'Layout': return <Layout className={`${size} text-[#446CB5]`} />;
      case 'Database': return <Database className={`${size} text-[#446CB5]`} />;
      case 'Bot': return <Bot className={`${size} text-[#446CB5]`} />;
      case 'Share2': return <Share2 className={`${size} text-[#446CB5]`} />;
      case 'Video': return <Video className={`${size} text-[#446CB5]`} />;
      default: return <ShieldCheck className={`${size} text-[#446CB5]`} />;
    }
  };

  return (
    <section id="hizmetler" className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 text-left">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
              <Layers className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>Sağlık Turizmi İçin 8 Entegre Çözüm</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
              Pazarlama ve teknolojiyi <span className="text-[#446CB5]">aynı çatı altında</span> yönetin
            </h2>
            <p className="text-sm sm:text-base text-[#595F69]">
              Her hizmet bağımsız bir uzmanlıkla planlanır; birlikte çalıştığında kliniğinize uçtan uca büyüme gücü kazandırır.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#446CB5] text-white shadow-md shadow-[#446CB5]/20'
                    : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="p-6 rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left cursor-pointer"
            >
              <div className="space-y-4">
                
                {/* Card Top: Icon & Category */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#EEF3FB] border border-[#DDE2E8]/60 flex items-center justify-center group-hover:bg-[#446CB5] transition-colors">
                    <div className="group-hover:[&>svg]:text-white transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F5F6F8] text-[#595F69]">
                    {service.category}
                  </span>
                </div>

                {/* Title & Short Description */}
                <div>
                  <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222] group-hover:text-[#446CB5] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#595F69] mt-2 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-1.5 pt-2 border-t border-[#DDE2E8]/60">
                  {service.highlights.slice(0, 2).map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-[#222222]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#446CB5] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{hl}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Action: Go to dedicated page */}
              <div className="mt-6 w-full py-2.5 px-3 rounded-xl bg-[#F5F6F8] group-hover:bg-[#EEF3FB] text-[#446CB5] font-semibold text-xs flex items-center justify-center gap-1.5 transition-all">
                <span>Sayfayı & Kapsamı İncele</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform text-[#446CB5]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
