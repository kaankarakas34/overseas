import React from 'react';
import { BarChart3, TrendingUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface BenchmarkTableProps {
  type: 'branch' | 'market' | 'city' | 'general';
  title?: string;
  subtitle?: string;
  slug?: string;
}

export const BenchmarkTable: React.FC<BenchmarkTableProps> = ({
  type,
  title,
  subtitle,
  slug
}) => {
  // 1. Branch Data
  const getBranchData = () => {
    switch (slug) {
      case 'sac-ekimi-reklam-ajansi':
        return {
          title: 'Saç Ekimi Sağlık Turizmi 2026 Reklam & Dönüşüm Benchmark Verileri',
          subtitle: 'Google Ads, Meta Lead Ads ve TikTok kanallarında ortalama performans göstergeleri (Overseas Marketing 2025/2026 Anonim Veri Havuzu):',
          headers: ['Metrik / Kanal', 'Google Ads (Arama)', 'Meta Ads (Instagram)', 'TikTok Ads', 'Sektör Ortalaması'],
          rows: [
            ['Ortalama Form Başı Maliyet (CPL - UK)', '£35 - £55', '£18 - £32', '£12 - £22', '£28'],
            ['Formdan Görüşmeye Dönüşüm Oranı', '%38 - %48', '%22 - %30', '%14 - %20', '%28'],
            ['Karar Verme & Tedaviye Geliş Süresi', '2 - 4 Hafta', '3 - 6 Hafta', '4 - 8 Hafta', '4 Hafta'],
            ['En Yüksek Dönüşüm Sağlayan Ülke', 'İngiltere (UK)', 'İtalya / İspanya', 'Almanya (Genç Kitle)', 'UK & DACH'],
            ['Kritik Güven Unsuru', 'Cerrah & Greft Şeffaflığı', 'Öncesi / Sonrası Video', 'Klinik İçi Deneyim', 'Doğrulanmış Sonuç']
          ],
          source: 'Kaynak: Overseas Marketing Performans Veri Tabanı (2025-2026 Anonim Klinik Analizi)'
        };
      case 'dis-klinigi-reklam-ajansi':
        return {
          title: 'Diş Klinikleri Uluslararası Hasta Kazanımı Benchmark Verileri',
          subtitle: 'İmplant, Gülüş Tasarımı ve All-on-4 tedavilerinde kanal bazlı performans karşılaştırması:',
          headers: ['Tedavi / Metrik', 'Ort. CPL (Sterlin/Euro)', 'İlk Yanıtlama Eşiği', 'Röntgen Gönderme Oranı', 'Tedavi Kabul Oranı'],
          rows: [
            ['Dental Implant (Tek/Çoklu)', '£40 - £65', '< 5 Dakika (WhatsApp)', '%35', '%28 - %38'],
            ['All-on-4 / All-on-6 Cerrahi', '£55 - £85', '< 3 Dakika', '%42', '%22 - %32'],
            ['Hollywood Smile / Zirkonyum', '£25 - £45', '< 10 Dakika', '%28', '%32 - %44'],
            ['Ortodonti / Şeffaf Plak', '£30 - £50', '< 15 Dakika', '%20', '%25 - %35']
          ],
          source: 'Kaynak: 2026 Dental Tourism UK & Europe Digital Benchmark Analizi'
        };
      case 'plastik-cerrahi-reklam-ajansi':
        return {
          title: 'Plastik ve Estetik Cerrahi Hasta Kazanım Metrikleri',
          subtitle: 'Rinoplasti, Meme Cerrahisi ve Liposuction operasyonlarında karar ve bütçe dağılımı:',
          headers: ['Operasyon Tipi', 'Hedef Pazar', 'Ortalama CPL', 'Karar Verme Süresi', 'CRM Görüşme Oranı'],
          rows: [
            ['Rinoplasti (Burun Estetiği)', 'İngiltere & İrlanda', '£45 - £70', '4 - 8 Hafta', '%45'],
            ['Meme Estetiği (Büyütme/Dikleştirme)', 'Almanya & Avusturya', '€50 - €80', '6 - 10 Hafta', '%38'],
            ['Liposuction & Vücut Şekillendirme', 'Fransa & Benelüks', '€40 - €65', '3 - 6 Hafta', '%42'],
            ['Yüz Germe (Deep Plane Facelift)', 'Global / 45+ Yaş', '£80 - £120', '8 - 12 Hafta', '%52']
          ],
          source: 'Kaynak: Overseas Marketing Cerrahi Vaka Analizleri'
        };
      default:
        return {
          title: 'Sağlık Turizmi Branş Performans & CPL Benchmark Tablosu',
          subtitle: 'Klinik branşlarına göre uluslararası hasta kazanım maliyet ve dönüşüm dağılımı:',
          headers: ['Branş', 'Öncelikli Pazar', 'Ortalama Lead Maliyeti (CPL)', 'Görüşme Oranı', 'Önerilen Kanal'],
          rows: [
            ['Saç Ekimi', 'İngiltere, İspanya, İtalya', '£20 - £45', '%32', 'Google Ads + Meta Lead'],
            ['Diş Tedavileri', 'İngiltere, İrlanda, Almanya', '£30 - £60', '%36', 'Google Search + WhatsApp CRM'],
            ['Plastik Cerrahi', 'İngiltere, Almanya, Fransa', '£45 - £75', '%42', 'Meta Video + Doktor YouTube'],
            ['Bariatrik Cerrahi (Tüp Mide)', 'İngiltere, İrlanda', '£35 - £55', '%40', 'Google Ads Search + TikTok'],
            ['Göz / No-Touch Lazer', 'Almanya, Avusturya, İsviçre', '€30 - €50', '%35', 'Almanca Google Ads']
          ],
          source: 'Kaynak: Overseas Marketing 2026 Sağlık Turizmi Ajans Raporu'
        };
    }
  };

  // 2. Market Data
  const getMarketData = () => {
    switch (slug) {
      case 'ingiltere-saglik-turizmi-reklamlari':
        return {
          title: 'İngiltere (UK) Sağlık Turizmi Pazarı 2026 Fırsat ve Maliyet Karşılaştırması',
          subtitle: 'NHS bekleme süreleri, İngiltere özel klinik fiyatları ve Türkiye medikal turizm karşılaştırması:',
          headers: ['Tedavi / Operasyon', 'İngiltere NHS Bekleme Süresi', 'İngiltere Özel Fiyatı (£)', 'Türkiye Paket Maliyeti (£)', 'İngiliz Hasta Tasarrufu'],
          rows: [
            ['Tam Çene Dental Implant', 'NHS Kapsamı Dışı', '£14.000 - £22.000', '£3.800 - £6.000', '~ %70 Tasarruf'],
            ['Saç Ekimi (3.500 Greft)', 'NHS Kapsamı Dışı', '£6.000 - £10.000', '£1.800 - £2.600', '~ %72 Tasarruf'],
            ['Tüp Mide (Sleeve Gastrectomy)', '18 - 36 Ay Bekleme', '£9.000 - £14.000', '£2.800 - £4.200', '~ %68 Tasarruf'],
            ['Rinoplasti (Burun Estetiği)', 'Yalnızca Tıbbi Zorunluluk', '£5.500 - £8.500', '£2.400 - £3.600', '~ %60 Tasarruf']
          ],
          source: 'Kaynak: NHS Digital Data & UK Private Healthcare Survey 2025/2026'
        };
      case 'almanya-saglik-turizmi-reklamlari':
        return {
          title: 'Almanya & DACH Bölgesi Hasta Davranış ve Güven Kriterleri',
          subtitle: 'Alman hastaların klinik tercihlerinde etkili olan kritik karar faktörleri:',
          headers: ['Karar Unsuru', 'Almanya Pazarı Önemi', 'Gerekli Dokümantasyon', 'Kanal Ağırlığı'],
          rows: [
            ['JCI / ISO Akreditasyonu', 'Kritik (%92 Etki)', 'Resmi Sertifika Belgesi', 'Google Ads + Landing Page'],
            ['Hekim Özgeçmişi & Uzmanlık', 'Çok Yüksek (%88 Etki)', 'E-E-A-T Hekim Biyografisi', 'Website & Doktor PR'],
            ['GDPR / Veri Güvenliği', 'Yüksek (%82 Etki)', 'Almanca Gizlilik Protokolü', 'Form Giriş Alanları'],
            ['Ulaşım & Süreç Şeffaflığı', 'Yüksek (%79 Etki)', 'Detaylı Uçuş ve Otel Rehberi', 'WhatsApp & CRM Danışmanı']
          ],
          source: 'Kaynak: DACH Medical Travel Report 2025/2026'
        };
      default:
        return {
          title: 'Avrupa ve Global Pazarlarda Türkiye Sağlık Turizmi Talep Dağılımı',
          subtitle: 'Ülke bazında öne çıkan branşlar ve dijital pazarlama dinamikleri:',
          headers: ['Hedef Ülke', 'Öncü Branşlar', 'Para Birimi', 'Öncelikli Reklam Dili', 'En Etkili İletişim'],
          rows: [
            ['İngiltere (UK)', 'Diş, Saç Ekimi, Obezite', 'GBP (£)', 'İngilizce (UK Lokal)', 'WhatsApp / Telefon'],
            ['Almanya (DACH)', 'Göz Lazer, Diş, Plastik Cerrahi', 'EUR (€)', 'Almanca', 'E-Posta / WhatsApp'],
            ['Fransa', 'Saç Ekimi, Rinoplasti, Estetik', 'EUR (€)', 'Fransızca', 'WhatsApp / Sesli Arama'],
            ['Hollanda & Belçika', 'Diş, Saç Ekimi, Ortopedi', 'EUR (€)', 'Felemenkçe / İngilizce', 'WhatsApp']
          ],
          source: 'Kaynak: TÜİK & Uluslararası Sağlık Turizmi İstatistikleri'
        };
    }
  };

  // 3. City Data
  const getCityData = () => {
    return {
      title: `${title || 'Şehir'} Yerel Sağlık Turizmi Ekosistem Verileri`,
      subtitle: 'Havalimanı erişimi, akredite hastane kapasitesi ve yabancı hasta lojistiği:',
      headers: ['Altyapı Parametresi', 'İstanbul', 'Antalya', 'İzmir', 'Ankara'],
      rows: [
        ['Uluslararası Havalimanı', '2 (İGA, Sabiha Gökçen)', '1 (Antalya Havalimanı)', '1 (Adnan Menderes)', '1 (Esenboğa)'],
        ['Haftalık Direkt Avrupa Uçuşu', '1.200+ Uçuş', '650+ Uçuş (Mevsimsel)', '180+ Uçuş', '140+ Uçuş'],
        ['Öne Çıkan Sağlık Konsepti', 'Tüm Branşlar & Küresel Merkez', 'Dental & Estetik + Tatil', 'Butik Klinik & Wellness', 'Akademik & İleri Cerrahi'],
        ['Ortalama Hasta Kalış Süresi', '4 - 7 Gün', '7 - 10 Gün', '5 - 8 Gün', '4 - 6 Gün'],
        ['JCI Akredite Sağlık Kuruluşu', '30+ Kuruluş', '8+ Kuruluş', '5+ Kuruluş', '10+ Kuruluş']
      ],
      source: 'Kaynak: Türkiye Sağlık Turizmi Portalı ve Sektörel Saha Verileri 2026'
    };
  };

  const data = type === 'branch' 
    ? getBranchData() 
    : type === 'market' 
    ? getMarketData() 
    : getCityData();

  return (
    <div className="w-full my-10 bg-white rounded-2xl border border-[#DDE2E8] shadow-sm overflow-hidden text-left">
      {/* Table Header Banner */}
      <div className="bg-gradient-to-r from-[#16202E] to-[#1E293B] text-white p-6 sm:p-7">
        <div className="flex items-center gap-2 text-[#60A5FA] text-xs font-bold uppercase tracking-wider mb-2">
          <BarChart3 className="w-4 h-4" />
          <span>2026 Sektörel Benchmark &amp; Doğrulanmış Veri</span>
        </div>
        <h3 className="font-['Inter_Tight'] text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
          {data.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
          {data.subtitle}
        </p>
      </div>

      {/* Semantic Machine-Scannable HTML Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#F8FAFC] border-b border-[#DDE2E8]">
              {data.headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`py-3.5 px-4 sm:px-6 text-xs font-bold uppercase tracking-wider ${
                    i === 0 ? 'text-[#16202E]' : 'text-[#446CB5]'
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-[#EEF3FB] text-xs sm:text-sm text-[#222222]">
            {data.rows.map((row, rIdx) => (
              <tr 
                key={rIdx} 
                className="hover:bg-[#F8FAFC] transition-colors"
              >
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    className={`py-3.5 px-4 sm:px-6 ${
                      cIdx === 0 
                        ? 'font-bold text-[#16202E] bg-slate-50/40' 
                        : 'text-slate-700 font-medium'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer with Information Gain & E-E-A-T Source */}
      <div className="bg-[#F8FAFC] p-4 sm:px-6 border-t border-[#DDE2E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>{data.source}</span>
        </div>
        <div className="text-[#446CB5] font-semibold">
          Information Gain &amp; Makinece Taranabilir Semantik Tablo
        </div>
      </div>
    </div>
  );
};
