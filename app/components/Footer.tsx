import Link from "next/link";
import { getDictionary } from "../../dictionaries/get-dictionary";

export default async function Footer({ lang }: { lang: "en" | "tr" }) {
  const dict = await getDictionary(lang);
  const t = dict.footer;

  const seoLinks = lang === "tr" ? [
    { name: "Efes Özel Turları", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "Kuşadası Liman Gezileri", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "Meryem Ana & Antik Efes", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "Lüks Kruvaziyer Turları", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "ABD Gayrimenkul Yatırımları", href: "/tr/floridarealestate", isExternal: false }, 
    { name: "Küresel Varlık Yönetimi", href: "/tr/about", isExternal: false } 
  ] : [
    { name: "Ephesus Private Tours", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "Kusadasi Shore Excursions", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "Biblical Ephesus & Virgin Mary", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "Luxury Cruise Port Tours", href: "https://www.seadroptravel.com/", isExternal: true },
    { name: "USA Real Estate Investments", href: "/en/floridarealestate", isExternal: false }, 
    { name: "Global Wealth & Properties", href: "/en/about", isExternal: false } 
  ];

  return (
    <footer className="bg-[#0B2341] text-white pt-20 pb-10 border-t-4 border-[#C9A227] relative z-40 font-[family-name:var(--font-inter)]">
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

        {/* 2. ORTA BÖLÜM: DÜZENLİ VE SİMETRİK GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          
          {/* SÜTUN 1: SEO MENU */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
              <span className="w-2 h-px bg-[#C9A227]"></span> {t.curatedPortfolios}
            </h4>
            <ul className="space-y-3">
              {seoLinks.map((link, index) => (
                <li key={index}>
                  {link.isExternal ? (
                    <a 
                      href={link.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title={`${link.name} - Sea Drop Travel`}
                      className="text-white/50 hover:text-[#C9A227] text-xs font-medium tracking-wide transition-colors duration-300 block"
                    >
                      {link.name} 
                      <span className="inline-block ml-1 opacity-40 text-[9px]">&#8599;</span>
                    </a>
                  ) : (
                    <Link 
                      href={link.href} 
                      className="text-white/50 hover:text-[#C9A227] text-xs font-medium tracking-wide transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  )}
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
                <a href="tel:+905433117024" className="block text-white hover:text-[#C9A227] transition-colors duration-300 font-medium">+90 543 311 70 24</a>
                <a href="mailto:info@seadroptravel.com" className="block hover:text-white transition-colors duration-300">info@seadroptravel.com</a>
                <a 
                  href="https://www.seadroptravel.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-[#C9A227] font-bold hover:text-white transition-colors duration-300 mt-2"
                >
                  www.seadroptravel.com &#8599;
                </a>
              </div>
            </div>
          </div>

          {/* SÜTUN 3: USA OPERATIONS (TAM İSTENİLEN GİBİ ALT ALTA) */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-3">
              <span className="w-2 h-px bg-[#C9A227]"></span> {t.usaOperations}
            </h4>
            <div className="text-xs font-light text-white/50 space-y-6 leading-relaxed">
              
              {/* İsim ve Telefon Grubu (Alt Alta) */}
              <div className="space-y-1">
                <p className="text-white/80 font-medium block">Denizcan Kurt</p>
                <a href="tel:+17542711175" className="block text-white hover:text-[#C9A227] transition-colors duration-300 font-medium">+1 (754) 271-1175</a>
              </div>
              
              {/* Sea Drop Mailleri (Ayrı) */}
              <div className="space-y-1.5 pt-2 border-t border-white/5">
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

        {/* 3. ALT BÖLÜM: LOGOLU ANA BACKLINK VE SÖZLEŞMELER */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white/40 font-medium tracking-widest uppercase">
          
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 text-center md:text-left">
            <span>&copy; {new Date().getFullYear()} Salman Kurt. {t.allRightsReserved}</span>
            <span className="hidden md:block w-1 h-1 bg-white/20 rounded-full"></span>
            
            <span className="flex items-center gap-2">
              <span className="opacity-70">POWERED BY:</span>
              <a 
                href="https://www.seadroptravel.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                title={lang === "tr" ? "Sea Drop Travel - Lüks Efes Turları" : "Sea Drop Travel - Luxury Ephesus Tours"}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
              >
                <img 
                  src="/logo11.png" 
                  alt="Sea Drop Travel Logo" 
                  className="h-5 md:h-6 w-auto object-contain"
                />
                <span className="text-[#C9A227] font-bold hidden sm:inline-block">SEA DROP TRAVEL</span>
              </a>
            </span>
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