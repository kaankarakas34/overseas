import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { SEOHead } from './SEOHead';
import { JsonLdSchema } from './JsonLdSchema';
import { useLanguage } from '../context/LanguageContext';

export const LegalPage: React.FC = () => {
  const { pathname } = useLocation();
  const { isEn } = useLanguage();

  let title = "KVKK Aydınlatma Metni";
  let seoTitle = "KVKK Aydınlatma Metni | Overseas Marketing";
  let desc = "6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca aydınlatma metni ve hasta verileri gizlilik politikası.";

  if (pathname.includes('gizlilik')) {
    title = "Gizlilik Politikası";
    seoTitle = "Gizlilik Politikası | Overseas Marketing";
    desc = "Overseas Marketing web sitesi gizlilik politikası, veri işleme ilkeleri ve kullanıcı hakları bildirimi.";
  } else if (pathname.includes('cerez')) {
    title = "Çerez Politikası (Cookie Policy)";
    seoTitle = "Çerez Politikası | Overseas Marketing";
    desc = "Web sitemizde kullanılan çerezler, analitik araçlar ve tercihlerinizi yönetme rehberi.";
  } else if (pathname.includes('aydinlatma')) {
    title = "Aydınlatma Metni ve Açık Rıza";
    seoTitle = "Aydınlatma Metni | Overseas Marketing";
    desc = "İletişim formları ve teklif talepleri kapsamında işlenen kişisel verilere ilişkin aydınlatma bildirimi.";
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#222222] pt-28 pb-20">
      <SEOHead
        title={seoTitle}
        description={desc}
        canonicalUrl={`https://www.overseas.marketing${pathname}`}
        robots="noindex, follow" // Legal pages don't need to compete for commercial search intent
      />
      <JsonLdSchema type="home" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#446CB5] hover:text-[#345999] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isEn ? "Back to Homepage" : "Ana Sayfaya Dön"}</span>
        </Link>

        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#DDE2E8] shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-6 border-b border-[#DDE2E8]">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF3FB] text-[#446CB5] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-['Inter_Tight'] text-2xl sm:text-3xl font-extrabold text-[#16202E]">
                {title}
              </h1>
              <p className="text-xs text-[#94A3B8] mt-1">
                Son Güncelleme: 17 Eylül 2026 | Sürüm: 2.4
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-[#595F69] space-y-6">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#16202E]">1. Veri Sorumlusu ve Kapsam</h2>
              <p>
                6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) uyarınca, <strong>Overseas Marketing</strong> olarak, veri sorumlusu sıfatıyla, sunduğumuz dijital pazarlama, danışmanlık ve teknoloji hizmetleri kapsamında işlenen kişisel verilerinizin güvenliğine ve gizliliğine azami hassasiyet göstermekteyiz.
              </p>
              <p>
                Overseas Marketing bir sağlık kuruluşu veya aracı kurum değildir; sağlık turizmi alanında faaliyet gösteren yetkili klinik, hastane ve hekimlere pazarlama, CRM ve yazılım danışmanlığı sunmaktadır.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#16202E]">2. İşlenen Kişisel Veriler</h2>
              <p>
                Sitemizdeki formlar, teklif talepleri ve iletişim kanalları vasıtasıyla aşağıdaki veriler toplanabilmektedir:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Kimlik ve İletişim Bilgileri:</strong> Ad, soyad, kurum/klinik unvanı, telefon numarası, e-posta adresi.</li>
                <li><strong>Hizmet Tercihleri:</strong> İlgilenilen tedavi branşları, hedef ülkeler, reklam bütçe aralıkları.</li>
                <li><strong>Dijital Trafik Verileri:</strong> IP adresi, tarayıcı türü, yönlendiren URL, oturum süresi ve çerez bilgileri.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#16202E]">3. Kişisel Verilerin İşlenme Amaçları</h2>
              <p>
                Toplanan veriler yalnızca aşağıdaki amaçlarla işlenir:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Talep edilen pazarlama teklifinin ve pazar analizi raporunun hazırlanması,</li>
                <li>Strateji toplantılarının planlanması ve danışmanlık hizmetlerinin yürütülmesi,</li>
                <li>Mevzuattan doğan yasal yükümlülüklerin yerine getirilmesi,</li>
                <li>Kullanıcı deneyiminin ve web sitesi performansının iyileştirilmesi.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#16202E]">4. Hassas Sağlık Verileri Bildirimi</h2>
              <p>
                Web sitemiz B2B niteliktedir. Kullanıcıların veya üçüncü şahısların hassas nitelikli sağlık verilerini (tıbbi epikriz, teşhis raporu vb.) doğrudan web formları üzerinden paylaşmaması esastır. Hekim veya kliniklerle yürütülen vaka çalışmalarında tüm hasta verileri anonimleştirilerek KVKK ve GDPR hükümlerine tam uyumlu işlenir.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-[#16202E]">5. İlgili Kişi Olarak Haklarınız</h2>
              <p>
                KVKK’nın 11. maddesi uyarınca dilediğiniz zaman <strong>info@overseas.marketing</strong> adresine başvurarak; verilerinizin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, silinmesini veya düzeltilmesini isteme haklarına sahipsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
