import Link from "next/link";
// Sözlük çekme fonksiyonunu ekliyoruz (layout'tan await ile lang geldiği için burada da async yapmalıyız)
import { getDictionary } from "../../dictionaries/get-dictionary";

export default async function Footer({ lang }: { lang: "en" | "tr" }) {
  // Dili sözlükten çekiyoruz
  const dict = await getDictionary(lang);
  const t = dict.footer;

  // Lüks tasarıma entegre edilmiş SEO kelimeleri (Linkler dile göre değişir)
  const seoLinks = lang === "tr" ? [
    { name: "Efes Özel Turları", href: "/tr/blog" },
    { name: "Kuşadası Liman Gezileri", href: "/tr/blog" },
    { name: "Meryem Ana & Antik Efes", href: "/tr/blog" },
    { name: "Lüks Kruvaziyer Turları", href: "/tr/blog" },
    { name: "ABD Gayrimenkul Yatırımları", href: "/tr/blog" },
    { name: "Küresel Varlık Yönetimi", href: "/tr/blog" }
  ] : [
    { name: "Ephesus Private Tours", href: "/en/blog" },
    { name: "Kusadasi Shore Excursions", href: "/en/blog" },
    { name: "Biblical Ephesus & Virgin Mary", href: "/en/blog" },
    { name: "Luxury Cruise Port Tours", href: "/en/blog" },
    { name: "USA Real Estate Investments", href: "/en/blog" },
    { name: "Global Wealth & Properties", href: "/en/blog" }
  ];

  return (
    <footer className="bg-[#0B2341] text-white pt-20 pb-10 border-t-4 border-[#C9A227] relative z-40 font-[family-name:var(--font-inter)]">
      
      {/* Sitenin geneliyle uyumlu 1200px Container */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* 1. ÜST BÖLÜM: MARKA VE VİZYON */}
        <div className="border-b border-white/10 pb-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="text-[#C9A227] text-[10px] font-black uppercase tracking-[0.3em] mb-3">
              {t.visionaryLeadership}
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
              SALMAN KURT.
            </h2>
          </div>
          <div className="md:max-w-md md:text-right">
            <p className="text-white/60 text-xs md:text-sm font-light leading-relaxed">
              {t.aboutText}
            </p>
          </div>
        </div>

        {/* 2. ORTA BÖLÜM: DÜZENLİ VE SİMETRİK GRID (4 SÜTUN) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* SÜTUN 1: SEO MENU (Curated Portfolios) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
              <span className="w-2 h-px bg-[#C9A227]"></span> {t.curatedPortfolios}
            </h4>
            <ul className="space-y-3">
              {seoLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-white/50 hover:text-[#C9A227] text-xs font-medium tracking-wide transition-colors duration-300 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SÜTUN 2: TURKEY OPERATIONS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
              <span className="w-2 h-px bg-[#C9A227]"></span> {t.turkeyOperations}
            </h4>
            <div className="text-xs font-light text-white/50 space-y-4 leading-relaxed">
              <div>
                <p className="text-white/80 font-medium mb-1">{t.headquarters}</p>
                <p>Türkmen Mah. Tavaslı Sok. No: 4/2,<br />Kuşadası, Aydın</p>
              </div>
              <div className="space-y-1.5 pt-2">
                <a href="tel:+905433117024" className="block text-[#C9A227] hover:text-white transition-colors duration-300 font-medium">+90 543 311 70 24</a>
                <a href="mailto:info@seadroptravel.com" className="block hover:text-white transition-colors duration-300">info@seadroptravel.com</a>
                <a href="mailto:salman@seadroptravel.com" className="block hover:text-white transition-colors duration-300">salman@seadroptravel.com</a>
              </div>
            </div>
          </div>

          {/* SÜTUN 3: USA OPERATIONS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
              <span className="w-2 h-px bg-[#C9A227]"></span> {t.usaOperations}
            </h4>
            <div className="text-xs font-light text-white/50 space-y-4 leading-relaxed">
              <div>
                <p className="text-white/80 font-medium mb-1">{t.globalHub}</p>
                <p>5630 Cruz Road,<br />Jacksonville, FL 32207</p>
              </div>
              <div className="space-y-1.5 pt-2">
                <a href="tel:+17542179239" className="block text-[#C9A227] hover:text-white transition-colors duration-300 font-medium">+1 754 217 9239</a>
                <a href="mailto:info@seadroptravel.com" className="block hover:text-white transition-colors duration-300">info@seadroptravel.com</a>
                <a href="mailto:salman@seadroptravel.com" className="block hover:text-white transition-colors duration-300">salman@seadroptravel.com</a>
              </div>
            </div>
          </div>

          {/* SÜTUN 4: SOCIAL MEDIA & CONCIERGE */}
          <div className="flex flex-col h-full">
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
              <span className="w-2 h-px bg-[#C9A227]"></span> {t.socialNetwork}
            </h4>
            <div className="flex flex-col gap-3 text-xs font-medium text-white/50 mb-8">
              <a href="#" className="hover:text-white transition-colors duration-300 w-max">Instagram &rarr;</a>
              <a href="#" className="hover:text-white transition-colors duration-300 w-max">LinkedIn &rarr;</a>
              <a href="#" className="hover:text-white transition-colors duration-300 w-max">Facebook &rarr;</a>
            </div>

            {/* WhatsApp Butonu */}
            <div className="mt-auto">
              <a 
                href="https://wa.me/905433117024" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full py-3 border border-[#C9A227] text-[#C9A227] text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0B2341]"
              >
                {t.directConcierge}
              </a>
            </div>
          </div>

        </div>

        {/* 3. ALT BÖLÜM: TELİF VE SÖZLEŞMELER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 font-medium tracking-widest uppercase">
          <div>
            &copy; {new Date().getFullYear()} Salman Kurt. {t.allRightsReserved}
          </div>
          <div className="flex gap-6">
            <Link href={`/${lang}/privacy-policy`} className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
            <Link href={`/${lang}/terms`} className="hover:text-white transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}