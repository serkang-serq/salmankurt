"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Sayfa aşağı kaydırıldığında menünün arka planını koyulaştırma efekti
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü linkleri
  const links = [
    { name: "Home", href: "/" },
    { name: "About Salman", href: "/about" },
    { name: "Sea Drop Travel", href: "/seadrop" },
    { name: "Florida Real Estate", href: "/floridarealestate" }, // Eğer klasör adını düzeltmediysen burayı /floridarealestate yapabilirsin
    { name: "Blog", href: "/blog" },
  ];

  // Mobilde menü açıldığında sayfanın arkada kaymasını engelle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  return (
    <>
      {/* ÜST BAR */}
      <nav 
        className={`sticky top-0 w-full z-[200] transition-all duration-500 border-b ${
          scrolled ? "bg-[#0B2341]/95 backdrop-blur-md border-white/10 py-3 shadow-xl" : "bg-[#0B2341] border-transparent py-4"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center h-14 md:h-16">
          
          {/* LOGO - Zarif ve güçlü boyuta geri çekildi */}
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)}
            className="text-2xl md:text-[28px] font-black font-[family-name:var(--font-montserrat)] tracking-tighter text-white flex items-center relative z-[210]"
          >
            SALMAN<span className="text-[#C9A227]">KURT</span>
          </Link>

          {/* MASAÜSTÜ MENÜ - Gerçek premium ölçüler: text-[11px], geniş harf aralığı, zarif buton */}
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
            <a 
              href="/#quick-contact"
              className="ml-4 px-8 py-3.5 bg-[#C9A227] text-[#0B2341] text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-[0_10px_20px_rgba(201,162,39,0.2)]"
            >
              Contact &rarr;
            </a>
          </div>

          {/* HAMBURGER BUTONU (Mobilde kusursuz çalışan ve kaymayan ölçülere döndürüldü) */}
          <button 
            className="lg:hidden flex flex-col justify-center items-end gap-1.5 w-10 h-10 outline-none relative z-[210]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? "w-6 rotate-45 translate-y-[8px]" : "w-6"}`}></span>
            {/* Ortadaki çizgi lüks bir detay olarak hafif kısa bırakıldı */}
            <span className={`block h-[2px] bg-[#C9A227] transition-all duration-300 ease-in-out ${isOpen ? "opacity-0 w-6" : "w-5"}`}></span>
            <span className={`block h-[2px] bg-white transition-all duration-300 ease-in-out ${isOpen ? "w-6 -rotate-45 -translate-y-[8px]" : "w-6"}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBİL TAM EKRAN MENÜ - Ekrandan taşmasını önleyecek dengeli yazı boyutu ve boşluklar */}
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
          href="/#quick-contact"
          onClick={() => setIsOpen(false)}
          className="mt-6 px-10 py-4 border border-[#C9A227] text-[#C9A227] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors"
        >
          Inquire Now
        </a>
      </div>
    </>
  );
}