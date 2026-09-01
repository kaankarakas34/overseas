import React from 'react';
import { 
  AlertCircle, 
  CheckCircle2, 
  ArrowRight, 
  Target, 
  Cpu, 
  Database, 
  Layout, 
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface ProblemApproachProps {
  onOpenConsultation: () => void;
}

export const ProblemApproach: React.FC<ProblemApproachProps> = ({ onOpenConsultation }) => {
  return (
    <section id="buyume-modeli" className="py-20 lg:py-28 bg-white border-b border-[#DDE2E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
            <Target className="w-3.5 h-3.5 text-[#446CB5]" />
            <span>Kapsamlı Sağlık Turizmi Büyüme Metodolojisi</span>
          </div>

          <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#222222] tracking-tight">
            Daha fazla görünürlük, <span className="text-[#446CB5]">daha düzenli bir süreç</span>
          </h2>

          <p className="text-base sm:text-lg text-[#595F69] leading-relaxed">
            Reklamlarınız ilgi oluştururken web siteniz yeterince başvuru almıyor olabilir. Talepler farklı kanallara dağılıyor, ekipleriniz takibi kaçırıyor veya hangi kanalın gerçek hastaya dönüştüğünü göremiyor olabilirsiniz.
          </p>

          <div className="pt-2">
            <span className="inline-block font-['Inter_Tight'] text-xl font-bold text-[#446CB5] bg-[#EEF3FB] px-5 py-2 rounded-xl">
              “Karşınızda değil, yanınızda oturuyoruz.”
            </span>
          </div>
        </div>

        {/* 2-Column Comparison: Traditional Siloed Agency vs Overseas Integrated Growth */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Box 1: Sık Yaşanan Tıkanıklıklar (Conventional Agency) */}
          <div className="p-8 rounded-3xl bg-[#F5F6F8] border border-[#DDE2E8] space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
                  Geleneksel Kopuk Hizmet Modeli
                </h3>
                <p className="text-xs text-[#595F69]">Yalnızca tıklama odaklı, operasyondan kopuk ajanslar</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#595F69]">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                <span><strong>Kopuk Teslimatlar:</strong> Reklam ajansı başka, web yazılımcısı başka dilden konuşur; veri kaybı yaşanır.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#595F69]">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                <span><strong>Sahte/Ulaşılamayan Talepler:</strong> Form sayısı yüksek görünür ancak satış ekibi aradığında hastalar telefonu açmaz.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#595F69]">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                <span><strong>Gece Gelen Lead Kaybı:</strong> Saat farkından dolayı İngiltere veya Körfez\'den gelen taleplere saatlerce yanıt verilemez.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#595F69]">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0"></div>
                <span><strong>Raporlama Belirsizliği:</strong> Hangi reklamın kliniğe ameliyat veya tedavi kazandırdığı CRM\'de takip edilemez.</span>
              </li>
            </ul>
          </div>

          {/* Box 2: Overseas Integrated Growth Solution */}
          <div className="p-8 rounded-3xl bg-[#EEF3FB]/50 border-2 border-[#446CB5]/30 space-y-6 relative overflow-hidden shadow-lg shadow-[#446CB5]/5">
            <div className="absolute top-0 right-0 bg-[#446CB5] text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl">
              Overseas Yaklaşımı
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#446CB5] flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-['Inter_Tight'] text-lg font-bold text-[#222222]">
                  Overseas Entegre Büyüme Sistemi
                </h3>
                <p className="text-xs text-[#446CB5] font-semibold">Pazarlama + Özel CRM + Yapay Zeka + Operasyon</p>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                <span><strong>Tek Bütünleşik Plan:</strong> Reklam, içerik, web sitesi, CRM ve otomasyon aynı büyüme stratejisine hizmet eder.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                <span><strong>24/7 AI Call Agent & Triyaj:</strong> Saat farkı gözetmeksizin gelen aramalar 30 saniye içinde sesli yanıtlanır ve nitelendirilir.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                <span><strong>Hasta Takip Eden Özel CRM:</strong> Hangi reklamın hangi hekime kaç hasta randevusu sağladığı kuruşu kuruşuna izlenir.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#222222]">
                <CheckCircle2 className="w-4 h-4 text-[#446CB5] mt-0.5 shrink-0" />
                <span><strong>Klinik & Etik Güvenlik (K8):</strong> Mevzuata %100 uyumlu, doğrulanmış iddialar ve yüksek güvenilirlikli içerikler.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* 4 Foundation Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <TrendingUp className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              1. Doğru Kitleye Ulaşım
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              Google Ads, Meta Ads ve SEO ile arama niyeti ve tedavi bütçesi olan uluslararası kitleyi hedefleme.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <Layout className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              2. Dönüşüm Arayüzü
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              Çok dilli, hızlı ve güven inşa eden landing page tasarımlarıyla ziyaretçiyi başvuruya dönüştürme.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <Database className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              3. Özel CRM Altyapısı
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              Temsilci atamaları, teklif hazırlama, görüşme geçmişi ve hasta yolculuğunun kusursuz yönetimi.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all hover:shadow-md group">
            <div className="w-12 h-12 rounded-xl bg-[#EEF3FB] flex items-center justify-center mb-4 group-hover:bg-[#446CB5] transition-colors">
              <Cpu className="w-6 h-6 text-[#446CB5] group-hover:text-white transition-colors" />
            </div>
            <h4 className="font-['Inter_Tight'] font-bold text-base text-[#222222] mb-1.5">
              4. AI & Otomasyon
            </h4>
            <p className="text-xs text-[#595F69] leading-relaxed">
              AI Call Agent, akıllı chatbot, gecikme uyarıları ve cron job sistemleriyle sıfır talep kaybı.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
