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

  // Menü linkleri (Medya ve Galeri çıkarıldı)
  const links = [
    { name: "Home", href: "/" },
    { name: "About Salman", href: "/about" },
    { name: "Sea Drop Travel", href: "/seadrop" },
    { name: "Florida Real Estate", href: "/real-estate" },
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
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled ? "bg-[#0B2341]/95 backdrop-blur-md border-white/10 py-4 shadow-xl" : "bg-[#0B2341] border-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex justify-between items-center h-12 relative z-[110]">
        
        {/* SOL: LOGO */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="text-2xl md:text-3xl font-black font-[family-name:var(--font-montserrat)] tracking-tighter text-white flex items-center relative z-[120]"
        >
          SALMAN<span className="text-[#C9A227]">KURT</span>
        </Link>

        {/* ORTA & SAĞ: MASAÜSTÜ MENÜ (Mobilde gizlenir) */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors hover:text-[#C9A227] ${
                pathname === link.href ? "text-[#C9A227] border-b border-[#C9A227] pb-1" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="/#quick-contact"
            className="ml-4 px-8 py-3 bg-[#C9A227] text-[#0B2341] text-[10px] font-black uppercase tracking-widest hover:bg-white transition-colors shadow-[0_10px_20px_rgba(201,162,39,0.2)]"
          >
            Contact &rarr;
          </a>
        </div>

        {/* MOBİL: HAMBURGER BUTONU (Z-index artırıldı, menünün üstünde kalması garantiye alındı) */}
        <button 
          className="lg:hidden flex flex-col justify-center items-center gap-1.5 p-2 w-10 h-10 outline-none relative z-[120]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-[#C9A227] transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-[2px] bg-white transition-transform duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
        </button>
      </div>

      {/* MOBİL: AÇILIR MENÜ (100dvh ile tam ekran yapıldı ve opacity eklendi) */}
      <div 
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-[#0B2341] flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] lg:hidden z-[105] ${
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-full"
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-xl font-black uppercase tracking-[0.2em] transition-colors ${
              pathname === link.href ? "text-[#C9A227]" : "text-white hover:text-[#C9A227]"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <a 
          href="/#quick-contact"
          onClick={() => setIsOpen(false)}
          className="mt-8 px-12 py-4 border border-[#C9A227] text-[#C9A227] text-xs font-black uppercase tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors"
        >
          Inquire Now
        </a>
      </div>
    </nav>
  );
}