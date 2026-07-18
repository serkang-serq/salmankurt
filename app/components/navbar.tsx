"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ lang }: { lang: "en" | "tr" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: "en" | "tr") => {
    if (!pathname || lang === newLang) return; 
    const pathWithoutLang = pathname.replace(`/${lang}`, "");
    const newPath = `/${newLang}${pathWithoutLang === "" ? "" : pathWithoutLang}`;
    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  // ÇEVİRİLER GÜNCELLENDİ
  const navText = {
    en: {
      home: "Home",
      about: "About Salman",
      seadrop: "Sea Drop Travel",
      florida: "Florida Real Estate",
      samyeli: "Samyeli Pharmacy",
      erzadeoglu: "Erzadeoglu Architects",
      blog: "Blog",
      gallery: "Gallery",
      contactBtn: "Contact",
      inquireBtn: "Inquire Now",
    },
    tr: {
      home: "Ana Sayfa",
      about: "Hakkında",
      seadrop: "Sea Drop Travel",
      florida: "Florida Gayrimenkul",
      samyeli: "Samyeli Eczanesi",
      erzadeoglu: "Erzadeoğlu Mimarlık",
      blog: "Blog",
      gallery: "Galeri",
      contactBtn: "İletişim",
      inquireBtn: "Bize Ulaşın",
    }
  };

  const t = navText[lang];

  // TÜM MENÜLER AYRIM YAPILMADAN AYNI SIRAYA ALINDI
  const links = [
    { name: t.home, href: `/${lang}` },
    { name: t.about, href: `/${lang}/about` },
    { name: t.seadrop, href: `/${lang}/seadrop` },
    { name: t.florida, href: `/${lang}/floridarealestate` },
    { name: t.samyeli, href: `/${lang}/samyeli-eczanesi` },
    { name: t.erzadeoglu, href: `/${lang}/erzadeoglu-mimarlik` },
    { name: t.blog, href: `/${lang}/blog` },
    { name: t.gallery, href: `/${lang}/gallery` },
  ];

  return (
    <>
      {/* 1. DEĞİŞİKLİK: 'fixed' yerine 'sticky' kullanıldı */}
      <nav 
        className={`sticky top-0 w-full z-[200] transition-all duration-500 ${
          scrolled ? "bg-[#0B2341]/95 backdrop-blur-md shadow-xl" : "bg-[#0B2341]"
        }`}
      >
        {/* ÜST KATMAN: LOGO VE KONTROLLER */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center h-16 md:h-24">
          
          {/* Sol Grup: Kapsül Dil Seçici */}
          <div className="flex-1 flex justify-start">
            <div className="relative flex items-center bg-white/5 rounded-full p-1 border border-white/10 shadow-inner scale-90 md:scale-100 origin-left">
              <div 
                className={`absolute top-1 bottom-1 w-[36px] bg-[#C9A227] rounded-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  lang === 'tr' ? 'translate-x-0' : 'translate-x-[36px]'
                }`}
              ></div>
              <button 
                onClick={() => switchLanguage("tr")}
                className={`relative z-10 w-[36px] h-[24px] flex items-center justify-center text-[10px] font-black uppercase tracking-widest transition-colors duration-500 ${
                  lang === 'tr' ? 'text-[#0B2341]' : 'text-white/50 hover:text-white'
                }`}
              >
                TR
              </button>
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

          {/* Orta Grup: MERKEZE HİZALANMIŞ LOGO */}
          <div className="flex-none text-center">
            <Link 
              href={`/${lang}`} 
              onClick={() => setIsOpen(false)}
              className="text-2xl md:text-3xl lg:text-[34px] font-black font-[family-name:var(--font-montserrat)] tracking-tighter text-white"
            >
              SALMAN<span className="text-[#C9A227]">KURT</span>
            </Link>
          </div>

          {/* Sağ Grup: İletişim (Masaüstü) & Hamburger (Mobil) */}
          <div className="flex-1 flex justify-end items-center">
            {/* Masaüstü İletişim Butonu */}
            <a 
              href={`/${lang}/contact`}
              className="hidden lg:flex px-8 py-3 bg-[#C9A227] text-[#0B2341] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white transition-colors"
            >
              {t.contactBtn}
            </a>

            {/* Mobil Hamburger */}
            <button 
              className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-8 h-10 outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <span className={`block h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`}></span>
              <span className={`block h-[2px] bg-[#C9A227] transition-all duration-300 ${isOpen ? "opacity-0 w-6" : "w-5"}`}></span>
              <span className={`block h-[2px] bg-white transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"}`}></span>
            </button>
          </div>
        </div>

        {/* ALT KATMAN: TÜM MENÜ LİNKLERİ TEK TİP (SADECE MASAÜSTÜ) */}
        <div className="hidden lg:flex w-full border-t border-white/10 bg-[#0B2341]/50">
          <div className="max-w-[1400px] mx-auto flex justify-center items-center h-14 gap-6 xl:gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[9px] xl:text-[10px] font-bold uppercase tracking-[0.15em] xl:tracking-[0.2em] transition-colors hover:text-[#C9A227] whitespace-nowrap ${
                  pathname === link.href ? "text-[#C9A227]" : "text-white/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 2. DEĞİŞİKLİK: Eski Spacer (Tok Boşluk) div'i buradan silindi. */}

      {/* MOBİL TAM EKRAN MENÜ */}
      <div 
        className={`fixed inset-0 bg-[#0B2341] z-[190] overflow-y-auto transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-start min-h-full w-full pt-[120px] pb-12 gap-7">
          {/* Mobil menüde de tüm butonlar tek tip ve aynı hiyerarşide */}
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-black uppercase tracking-[0.2em] transition-colors shrink-0 ${
                pathname === link.href ? "text-[#C9A227]" : "text-white hover:text-[#C9A227]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a 
            href={`/${lang}/contact`}
            onClick={() => setIsOpen(false)}
            className="mt-6 px-10 py-4 border border-[#C9A227] text-[#C9A227] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors shrink-0"
          >
            {t.inquireBtn}
          </a>
        </div>
      </div>
    </>
  );
}