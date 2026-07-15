"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export default function GalleryClient({ 
  galleryItems, 
  seoKeywords,
  lang
}: { 
  galleryItems: any[], 
  seoKeywords: string[],
  lang: "en" | "tr" // Dili proplardan alıyoruz
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const prevImage = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const nextImage = (e: any) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  // Dile göre sabit metinler
  const text = {
    en: {
      subtitle: "Visual Archives",
      titleTop: "The",
      titleBottom: "Gallery.",
      desc: "A curated collection of moments, milestones, and exclusive experiences from our global operations across tourism and real estate.",
      empty: "Awaiting Gallery Uploads from Sanity Studio.",
      ctaSub: "Experience It Live",
      ctaTitle: "Ready to Create Your Own Journey?",
      ctaBtn: "Inquire Now"
    },
    tr: {
      subtitle: "Görsel Arşivler",
      titleTop: "Görsel",
      titleBottom: "Galeri.",
      desc: "Turizm ve gayrimenkul alanındaki küresel operasyonlarımızdan özenle seçilmiş anlar, dönüm noktaları ve özel deneyimler.",
      empty: "Sanity Studio'dan Galeri Yüklemeleri Bekleniyor.",
      ctaSub: "Canlı Deneyimleyin",
      ctaTitle: "Kendi Yolculuğunuzu Yaratmaya Hazır Mısınız?",
      ctaBtn: "Bize Ulaşın"
    }
  }[lang];

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* 1. HEADER BÖLÜMÜ */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-12 border-b border-[#0B2341]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C9A227]/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-[1600px] mx-auto text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.3em] text-[10px] mb-4">
              {text.subtitle}
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-[#0B2341]">
              {text.titleTop} <br />
              <span className="text-[#0B2341]/30">{text.titleBottom}</span>
            </h1>
          </div>
          
          <div className="max-w-md text-left">
            <p className="text-[#0B2341]/70 text-sm leading-relaxed font-light mb-4">
              {text.desc}
            </p>
            <div className="h-[1px] w-12 bg-[#C9A227]"></div>
          </div>
        </div>
      </section>

      {/* 2. ULTRA-SIKI PREMIUM GRID */}
      <section className="py-2 px-2 sm:px-4 lg:px-6">
        <div className="max-w-[1800px] mx-auto">
          
          {galleryItems?.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-1 sm:gap-2">
              {galleryItems.map((item: any, index: number) => {
                const currentSeoKeyword = seoKeywords[index % seoKeywords.length];
                
                // Seçilen dile göre başlık ve kategoriyi belirliyoruz (Boş bırakılmışsa diğer dildekini veya varsayılanı çeker)
                const displayTitle = lang === 'tr' ? (item.title_tr || item.title_en) : (item.title_en || item.title_tr);
                const displayCategory = lang === 'tr' ? (item.category_tr || item.category_en) : (item.category_en || item.category_tr);
                
                return (
                  <div 
                    key={item._id}
                    onClick={() => openLightbox(index)}
                    className="relative w-full aspect-square bg-[#0B2341] overflow-hidden cursor-pointer group"
                  >
                    {item.image?.asset && (
                      <Image 
                        src={urlFor(item.image).url()} 
                        alt={currentSeoKeyword}
                        title={currentSeoKeyword}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out group-hover:scale-110"
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341] via-[#0B2341]/20 to-transparent opacity-80 transition-all duration-700 ease-in-out group-hover:from-[#C9A227]/95 group-hover:via-[#C9A227]/40 z-10 pointer-events-none"></div>

                    <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {displayCategory && (
                        <span className="text-white/90 text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                          {displayCategory}
                        </span>
                      )}
                      {displayTitle && (
                        <h3 className="text-white font-[family-name:var(--font-montserrat)] text-xs sm:text-sm font-black uppercase tracking-wide transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75 drop-shadow-lg leading-tight line-clamp-2">
                          {displayTitle}
                        </h3>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-24 text-center border border-[#0B2341]/10 bg-white">
               <p className="text-[#0B2341]/40 font-bold uppercase tracking-widest text-sm">
                 {text.empty}
               </p>
            </div>
          )}
          
        </div>
      </section>

      {/* 3. TAM EKRAN LIGHTBOX */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#0B2341]/95 backdrop-blur-md"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-[#C9A227] text-4xl sm:text-5xl transition-colors z-50"
          >
            &times;
          </button>

          <button 
            onClick={prevImage} 
            className="absolute left-2 sm:left-6 md:left-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C9A227] text-5xl sm:text-6xl md:text-8xl transition-colors z-50 px-2 sm:px-4 py-8"
          >
            &#8249;
          </button>

          <button 
            onClick={nextImage} 
            className="absolute right-2 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#C9A227] text-5xl sm:text-6xl md:text-8xl transition-colors z-50 px-2 sm:px-4 py-8"
          >
            &#8250;
          </button>

          <div 
            className="relative w-[90vw] h-[70vh] md:h-[85vh] flex flex-col items-center justify-center" 
            onClick={(e) => e.stopPropagation()}
          >
            {galleryItems[currentIndex]?.image?.asset && (
              <div className="relative w-full h-full shadow-[0_0_50px_rgba(201,162,39,0.15)]">
                <Image
                  src={urlFor(galleryItems[currentIndex].image).url()}
                  alt={seoKeywords[currentIndex % seoKeywords.length]}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            <div className="absolute bottom-[-50px] md:bottom-[-60px] text-center w-full px-4">
              <span className="text-[#C9A227] text-[10px] sm:text-xs font-black uppercase tracking-[0.3em]">
                {lang === 'tr' 
                  ? (galleryItems[currentIndex]?.category_tr || galleryItems[currentIndex]?.category_en)
                  : (galleryItems[currentIndex]?.category_en || galleryItems[currentIndex]?.category_tr)}
              </span>
              <h3 className="text-white font-[family-name:var(--font-montserrat)] text-lg sm:text-xl font-light tracking-wide mt-1 sm:mt-2">
                {lang === 'tr' 
                  ? (galleryItems[currentIndex]?.title_tr || galleryItems[currentIndex]?.title_en)
                  : (galleryItems[currentIndex]?.title_en || galleryItems[currentIndex]?.title_tr)}
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* 4. ALT ÇAĞRI (CALL TO ACTION) */}
      <section className="py-20 sm:py-24 px-6 bg-[#0B2341] text-center border-t-4 border-[#C9A227]">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#C9A227] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">{text.ctaSub}</p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-8">
            {text.ctaTitle}
          </h2>
          <Link 
            href={`/${lang}/contact`} 
            className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-transparent border border-[#C9A227] text-[#C9A227] text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#C9A227] hover:text-[#0B2341]"
          >
            {text.ctaBtn} &rarr;
          </Link>
        </div>
      </section>

    </main>
  );
}