"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ lang }: { lang: "en" | "tr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  // Dili Değiştirme Fonksiyonu
  const switchLanguage = (newLang: "en" | "tr") => {
    if (!pathname || lang === newLang) return; // Zaten o dildeyse hiçbir şey yapma
    
    const pathWithoutLang = pathname.replace(`/${lang}`, "");
    const newPath = `/${newLang}${pathWithoutLang === "" ? "" : pathWithoutLang}`;
    
    router.push(newPath);
  };

  // Sayfa aşağı kaydırıldığında menünün arka planını koyulaştırma efekti
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobilde menü açıldığında sayfanın arkada kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // Dile göre menü metinlerini (sözlüğü) belirliyoruz
  const navText = {
    en: {
      home: "Home",
      about: "About Salman",
      seadrop: "Sea Drop Travel",
      florida: "Florida Real Estate",
      blog: "Blog",
      gallery: "Gallery",
      contactBtn: "Contact",
      inquireBtn: "Inquire Now"
    },
    tr: {
      home: "Ana Sayfa",
      about: "Hakkında",
      seadrop: "Sea Drop Travel",
      florida: "Florida Gayrimenkul",
      blog: "Blog",
      gallery: "Galeri",
      contactBtn: "İletişim",
      inquireBtn: "Bize Ulaşın"
    }
  };

  const t = navText[lang];

  // Linkleri dinamik lang yapısına göre oluşturuyoruz
  const links = [
    { name: t.home, href: `/${lang}` },
    { name: t.about, href: `/${lang}/about` },
    { name: t.seadrop, href: `/${lang}/seadrop` },
    { name: t.florida, href: `/${lang}/floridarealestate` },
    { name: t.blog, href: `/${lang}/blog` },
    { name: t.gallery, href: `/${lang}/gallery` },
  ];

  return (
    <>
      {/* ÜST BAR */}
      <nav 
        className={`sticky top-0 w-full z-[200] transition-all duration-500 border-b ${
          scrolled ? "bg-[#0B2341]/95 backdrop-blur-md border-white/10 py-3 shadow-xl" : "bg-[#0B2341] border-transparent py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center h-14 md:h-16">
          
          {/* LOGO */}
          <Link 
            href={`/${lang}`} 
            onClick={() => setIsOpen(false)}
            className="text-2xl md:text-[28px] font-black font-[family-name:var(--font-montserrat)] tracking-tighter text-white flex items-center relative z-[210]"
          >
            SALMAN<span className="text-[#C9A227]">KURT</span>
          </Link>

          {/* MASAÜSTÜ MENÜ */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:text-[#C9A227] ${
                  pathname === link.href ? "text-[#C9A227] border-b border-[#C9A227] pb-1" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* PREMIUM DİL SEÇİCİ (MASAÜSTÜ) - Kapsül (Pill) Tasarım */}
            <div className="ml-4 pl-6 border-l border-white/10 flex items-center">
              <div className="relative flex items-center bg-white/5 rounded-full p-1 border border-white/10 shadow-inner">
                {/* Kayan Altın Sarısı Arka Plan Animasyonu */}
                <div 
                  className={`absolute top-1 bottom-1 w-[36px] bg-[#C9A227] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    lang === 'tr' ? 'translate-x-0' : 'translate-x-[36px]'
                  }`}
                ></div>
                
                {/* TR Butonu */}
                <button 
                  onClick={() => switchLanguage("tr")}
                  className={`relative z-10 w-[36px] h-[24px] flex items-center justify-center text-[10px] font-black uppercase tracking-widest transition-colors duration-500 ${
                    lang === 'tr' ? 'text-[#0B2341]' : 'text-white/50 hover:text-white'
                  }`}
                >
                  TR
                </button>
                
                {/* EN Butonu */}
                <button 
                  onClick={() => switchLanguage("en")}
                  className={`relative z-10 w-[36px] h-[24px] flex items-center justify-center text-[10px] font-black uppercase tracking-widest transition-colors duration-500 ${
                    lang === 'en' ? 'text-[#0B2341]' : 'text-white/50 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            {/* İLETİŞİM BUTONU */}
            <a 
              href={`/${lang}/contact`}
              className="ml-4 px-8 py-3.5 bg-[#C9A227] text-[#0B2341] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-[0_10px_20px_rgba(201,162,39,0.2)]"
            >
              {t.contactBtn} &rarr;
            </a>
          </div>

          {/* MOBİL SAĞ GRUP (DİL SEÇİCİ + HAMBURGER) */}
          <div className="lg:hidden flex items-center gap-5 relative z-[210]">
            
            {/* PREMIUM DİL SEÇİCİ (MOBİL) - Biraz daha kompakt kapsül */}
            <div className="relative flex items-center bg-white/5 rounded-full p-0.5 border border-white/10 shadow-inner">
              {/* Mobil Kayan Arka Plan */}
              <div 
                className={`absolute top-0.5 bottom-0.5 w-[32px] bg-[#C9A227] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  lang === 'tr' ? 'translate-x-0' : 'translate-x-[32px]'
                }`}
              ></div>
              
              <button 
                onClick={() => switchLanguage("tr")}
                className={`relative z-10 w-[32px] h-[22px] flex items-center justify-center text-[9px] font-black uppercase tracking-widest transition-colors duration-500 ${
                  lang === 'tr' ? 'text-[#0B2341]' : 'text-white/50'
                }`}
              >
                TR
              </button>
              <button 
                onClick={() => switchLanguage("en")}
                className={`relative z-10 w-[32px] h-[22px] flex items-center justify-center text-[9px] font-black uppercase tracking-widest transition-colors duration-500 ${
                  lang === 'en' ? 'text-[#0B2341]' : 'text-white/50'
                }`}
              >
                EN
              </button>
            </div>

            {/* HAMBURGER BUTONU */}
            <button 
              className="flex flex-col justify-center items-end gap-1.5 w-8 h-10 outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`}></span>
              <span className={`block h-[2px] bg-[#C9A227] transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 w-6" : "w-5"}`}></span>
              <span className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBİL TAM EKRAN MENÜ */}
      <div 
        className={`fixed inset-0 bg-[#0B2341] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden z-[190] ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-black uppercase tracking-[0.2em] transition-colors ${
              pathname === link.href ? "text-[#C9A227]" : "text-white hover:text-[#C9A227]"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href={`/${lang}/contact`}
          onClick={() => setIsOpen(false)}
          className="mt-6 px-10 py-4 border border-[#C9A227] text-[#C9A227] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors"
        >
          {t.inquireBtn}
        </a>
      </div>
    </>
  );
}