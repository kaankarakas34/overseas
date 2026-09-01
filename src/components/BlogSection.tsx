import React, { useState } from 'react';
import { 
  BookOpen, 
  ArrowRight, 
  Calendar, 
  User, 
  Clock, 
  FileText,
  X
} from 'lucide-react';

interface BlogSectionProps {
  onOpenConsultation?: () => void;
}

export interface ArticleItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
}

export const BlogSection: React.FC<BlogSectionProps> = () => {
  const [activeCat, setActiveCat] = useState('Tümü');
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  // All blog articles rendered natively within this application (No external redirects)
  const ARTICLES: ArticleItem[] = [
    {
      id: '2025-instagram-istatistikleri',
      category: 'Sosyal Medya',
      title: '2025 Instagram İstatistikleri',
      summary: '2025 Instagram İstatistikleri: Sosyal medya dünyası hızla değişiyor ve gelişiyor. 2025 yılına yaklaştıkça, Instagram gibi platformlar için öngörülen istatistikler ve trendler, dijital pazarlama stratejilerinizi şekillendirmek için kritik bilgiler sunuyor.',
      content: `2025 Instagram İstatistikleri: Sosyal medya dünyası hızla değişiyor ve gelişiyor. 2025 yılına yaklaştıkça, Instagram gibi platformlar için öngörülen istatistikler ve trendler, dijital pazarlama stratejilerinizi şekillendirmek için kritik bilgiler sunuyor.

Instagram, kullanıcı tabanını sürekli genişletirken, pazarlamacılar için önemli fırsatlar ve zorluklar yaratmaya devam ediyor. Bu istatistikleri anlamak, işletmenizin sosyal medya stratejilerini optimize etmesine yardımcı olabilir.

### Öne Çıkan Trends & İstatistikler
- **Makaralar (Reels) Etkileşim Oranı:** Kısa dikey video formatları diğer tüm gönderi tiplerine kıyasla %40 daha fazla erişim sağlıyor.
- **Doğrudan Mesajlaşma (DM) Dönüşümleri:** Müşteri adaylarının %65'i yorum yapmak yerine doğrudan mesaj yoluyla iletişim kurmayı tercih ediyor.
- **AI Tabanlı İçerik Önerileri:** Keşfet algoritması kullanıcıların kişiselleştirilmiş ilgi alanlarını milisaniyeler içinde analiz ediyor.`,
      date: '27 Mart 2025',
      author: 'eylul',
      readTime: '6 dk okuma',
      image: 'https://overseas.marketing/wp-content/uploads/2025/03/2025-instagram-istatistikleri-1-800x800.webp'
    },
    {
      id: 'saglik-turizmi-nedir-avantajlari-nelerdir',
      category: 'Sağlık Turizmi',
      title: 'Sağlık Turizmi Nedir: Avantajları Nelerdir?',
      summary: 'Sağlık turizmi, bireylerin tıbbi, diş veya estetik tedavi almak amacıyla başka bir ülkeye seyahat etmelerini ifade eder. Bu süreç, tedavi kalitesi, maliyet avantajları veya bekleme sürelerinin kısalığı gibi çeşitli nedenlerle tercih edilebilir.',
      content: `Sağlık turizmi, bireylerin tıbbi, diş veya estetik tedavi almak amacıyla başka bir ülkeye seyahat etmelerini ifade eder. Bu süreç, tedavi kalitesi, maliyet avantajları veya bekleme sürelerinin kısalığı gibi çeşitli nedenlerle tercih edilebilir.

Sağlık turizmi, sadece tedavi almakla kalmaz, aynı zamanda hastaların yeni kültürler keşfetmesine de olanak sağlar. Dünya genelinde hızla büyüyen bu sektörde Türkiye; hekim tecrübesi, hastane altyapısı ve coğrafi konumuyla lider konumdadır.

### Temel Avantajlar
1. **Maliyet Avantajı:** Avrupa ve Amerika'ya kıyasla %50-70 oranında maliyet tasarrufu.
2. **Sıra Beklemeden Tedavi:** İngiltere NHS gibi sistemlerdeki uzun bekleme sürelerine alternatif anında operasyon imkanı.
3. **VIP Konaklama ve Transfer:** Hastanın uçaktan inip kliniğe ulaşmasına kadar olan tüm süreçlerin uçtan uca organize edilmesi.`,
      date: '24 Mart 2025',
      author: 'eylul',
      readTime: '7 dk okuma',
      image: 'https://overseas.marketing/wp-content/uploads/2025/03/saglik-turizmi-nedir-avantajlari-nelerdir-1-800x800.webp'
    },
    {
      id: 'saglik-turizmi-icerik-pazarlamasi',
      category: 'Dijital Pazarlama',
      title: 'Sağlık Turizmi İçerik Pazarlaması',
      summary: 'Sağlık turizmi içerik pazarlaması, sağlık hizmetlerini başka ülkelerde arayan bireylere yönelik stratejik içerik üretimi ve yayılımı sürecidir. Potansiyel hastaların karar verme süreçlerini doğrudan etkiler.',
      content: `Sağlık turizmi içerik pazarlaması, sağlık hizmetlerini başka ülkelerde arayan bireylere yönelik stratejik içerik üretimi ve yayılımı sürecidir. Bu pazarlama türü, sağlık hizmetleri sağlayıcılarının hedef kitlelerine ulaşarak onları bilgilendirmeyi, eğitmeyi ve harekete geçirmeyi amaçlar.

### İçerik Pazarlamasında 3 Altın Kural
- **E-E-A-T (Deneyim, Uzmanlık, Otorite, Güvenilirlik):** Doktor anlatımları ve tıbbi makalelerin uzman onaylı olması.
- **Şeffaf Ameliyat Öncesi/Sonrası Süreç:** İyileşme dönemleri ve olası riskler hakkında hastanın dürüstçe bilgilendirilmesi.
- **Çok Dilli Video İçerikleri:** Hastanın ana dilinde hazırlanan rehber videolar ve hasta röportajları.`,
      date: '21 Mart 2025',
      author: 'eylul',
      readTime: '8 dk okuma',
      image: 'https://overseas.marketing/wp-content/uploads/2025/03/saglik-turizmi-icerik-pazarlamasi-2-800x800.webp'
    },
    {
      id: 'saglik-turizmi-crm-kullanimi',
      category: 'CRM Çözümleri',
      title: 'Sağlık Turizmi CRM Kullanımı',
      summary: 'Sağlık turizmi şirketleri için CRM kullanımı, hastalara rehberlik eden, hizmet sunan ve tedavi süreçlerini takip eden dijital sistemlerdir. Tüm iletişim geçmişi ve tedavi adımları tek merkezden yönetilir.',
      content: `Sağlık turizmi şirketleri için CRM kullanımı, hastalara rehberlik eden, hizmet sunan ve tedavi süreçlerini takip eden dijital sistemlerdir.

Talebin ilk geldiği andan, hastanın ülkesine dönüp iyileşme sürecini tamamlamasına kadar geçen tüm temas noktaları kayıt altına alınır.

### CRM Neden Hayatidir?
- **Dil Kodlama & Temsilci Atama:** İngilizce, Almanca veya Arapça gelen formların otomatik olarak ilgili ana dili konuşan satış temsilcisine düşmesi.
- **Kaçırılan Aramaları Önleme:** 7/24 AI Voice/Call Agent desteğiyle gece gelen hasta sorularının anında yanıtlanması.
- **Tekrarlayan Hasta Takipleri:** Kontrol randevuları ve 6. ay durum güncellemelerinin otomatik hatırlatılması.`,
      date: '13 Mart 2025',
      author: 'eylul',
      readTime: '6 dk okuma',
      image: 'https://overseas.marketing/wp-content/uploads/2025/03/saglik-turizmi-sirketleri-neden-crm-kullanmali-1-800x800.webp'
    },
    {
      id: 'saglik-turizmi-seo-ajansi',
      category: 'SEO',
      title: 'Sağlık Turizmi SEO Ajansı ile Dijital Pazarlamada Fark Yaratın',
      summary: 'Sağlık Turizmi SEO Ajansı, sağlık hizmetleri sunan kuruluşların dijital pazarlama stratejilerini güçlendirmek ve çevrimiçi görünürlüklerini artırmak amacıyla uzmanlaşmış bir ajanstır.',
      content: `Sağlık Turizmi SEO Ajansı, sağlık hizmetleri sunan kuruluşların dijital pazarlama stratejilerini güçlendirmek ve çevrimiçi görünürlüklerini artırmak amacıyla uzmanlaşmış bir ajanstır.

Arama motorlarında üst sırada yer almak, reklam maliyetlerinden bağımsız olarak sürdürülebilir hasta akışı sağlar.

### Teknik ve Lokal SEO Stratejileri
- **GEO (Generative Engine Optimization):** ChatGPT ve Perplexity gibi yapay zeka arama motorlarında kliniğinizin tavsiye edilmesi.
- **Hedef Ülke Domain ve CDN Altyapısı:** İngiltere veya Almanya'daki bir kullanıcının sitenizi 1 saniyenin altında açmasını sağlayan sunucu mimarisi.
- **Tıbbi Terim Kelime Haritası:** "Dental implants in Turkey" veya "Haartransplantation Istanbul" gibi yüksek dönüşümlü kelime öbeklerinin hedeflenmesi.`,
      date: '12 Mart 2025',
      author: 'eylul',
      readTime: '9 dk okuma',
      image: 'https://overseas.marketing/wp-content/uploads/2025/03/1-67d16c3636bcc-800x800.webp'
    },
    {
      id: 'saglik-sektorunde-marka-yonetimi',
      category: 'Dijital Pazarlama',
      title: 'Sağlık Sektöründe Marka Yönetimi',
      summary: 'Sağlık sektöründe marka yönetimi, yalnızca bir işletmenin tanınırlığını artırmakla kalmaz, aynı zamanda hasta memnuniyetini ve sadakatini de doğrudan etkiler.',
      content: `Sağlık sektöründe marka yönetimi, yalnızca bir işletmenin tanınırlığını artırmakla kalmaz, aynı zamanda hasta memnuniyetini ve sadakatini de doğrudan etkiler.

Güvenin en kritik olduğu bu sektörde, tutarlı ve profesyonel bir marka kimliği oluşturmak uluslararası hastaların kliniğinizi seçmesindeki en büyük etkendir.`,
      date: '11 Mart 2025',
      author: 'eylul',
      readTime: '7 dk okuma',
      image: 'https://overseas.marketing/wp-content/uploads/2025/03/saglik-sektorunde-marka-yonetimi-1-800x800.webp'
    }
  ];

  const categories = ['Tümü', 'Dijital Pazarlama', 'Sağlık Turizmi', 'CRM Çözümleri', 'SEO', 'Sosyal Medya'];

  const filtered = activeCat === 'Tümü'
    ? ARTICLES
    : ARTICLES.filter(a => a.category.toLowerCase().includes(activeCat.toLowerCase()));

  return (
    <section id="rehber" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#DDE2E8] text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF3FB] border border-[#446CB5]/20 text-xs font-semibold text-[#446CB5]">
              <BookOpen className="w-3.5 h-3.5 text-[#446CB5]" />
              <span>Sağlık Turizmi Pazarlama & Yayın Rehberi</span>
            </div>
            <h2 className="font-['Inter_Tight'] text-3xl sm:text-4xl font-extrabold text-[#222222] tracking-tight">
              Sağlık Turizmi <span className="text-[#446CB5]">Pazarlama ve Teknoloji Rehberi</span>
            </h2>
            <p className="text-sm sm:text-base text-[#595F69]">
              Güncel rehberler, uluslararası pazar analizleri ve uygulama stratejileri.
            </p>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCat === cat
                    ? 'bg-[#446CB5] text-white shadow-xs'
                    : 'bg-white text-[#595F69] border border-[#DDE2E8] hover:bg-[#EEF3FB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid - All articles open site reader directly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((art) => (
            <div
              key={art.id}
              onClick={() => setSelectedArticle(art)}
              className="rounded-3xl bg-white border border-[#DDE2E8] hover:border-[#446CB5] transition-all duration-300 shadow-xs hover:shadow-xl flex flex-col justify-between overflow-hidden group text-left cursor-pointer"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-sm text-[#446CB5] shadow-xs">
                      {art.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-[#595F69]">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#446CB5]" />
                      {art.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3 text-[#446CB5]" />
                      {art.author}
                    </span>
                  </div>

                  <h3 className="font-['Inter_Tight'] text-base sm:text-lg font-bold text-[#222222] group-hover:text-[#446CB5] transition-colors leading-snug line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-[#595F69] leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#DDE2E8]/60 flex items-center justify-between text-xs text-[#446CB5] font-semibold">
                <span className="group-hover:underline flex items-center gap-1">
                  Yazıyı Oku
                  <ArrowRight className="w-3 h-3 text-[#446CB5]" />
                </span>
                <span className="text-[11px] text-[#595F69] font-normal">{art.readTime}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Reader Modal for Articles (Native Reader) */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#16202E]/70 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DDE2E8] p-6 sm:p-10 space-y-6 text-left relative">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F5F6F8] hover:bg-[#EEF3FB] text-[#222222] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-[#222222]" />
            </button>

            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md bg-[#EEF3FB] text-[#446CB5]">
                {selectedArticle.category}
              </span>

              <h2 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#222222]">
                {selectedArticle.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-[#595F69] border-b border-[#DDE2E8] pb-4">
                <span>Yazar: <strong>{selectedArticle.author}</strong></span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {selectedArticle.image && (
              <div className="rounded-2xl overflow-hidden h-64 sm:h-72">
                <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-[#222222] leading-relaxed space-y-4 whitespace-pre-line">
              {selectedArticle.content}
            </div>

            <div className="pt-6 border-t border-[#DDE2E8] flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 rounded-xl bg-[#446CB5] text-white text-xs font-semibold cursor-pointer"
              >
                Kapat
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
