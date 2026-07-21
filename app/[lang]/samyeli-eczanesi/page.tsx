import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary"; 

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' } }) { 
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "en"; 
  const dict = await getDictionary(lang as "en" | "tr");
  const t = dict.samyeli.seo;

  return { 
    title: t.title, 
    description: t.description, 
  }; 
} 

export default async function SamyeliPharmacyPage({ 
  params, 
}: { 
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' }; 
}) { 
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "en"; 
  const dict = await getDictionary(lang as "en" | "tr"); 
  const t = dict.samyeli;

  return ( 
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]"> 
      
      {/* =========================================
          1. GİRİŞ / HERO BÖLÜMÜ & ÜST İLETİŞİM KUTUSU
      ========================================= */} 
      <section className="relative bg-[#0B2341] text-white pt-12 lg:pt-24 pb-24 px-6 lg:px-12 overflow-hidden"> 
        <div className="absolute inset-0 z-0"> 
          <div className="absolute inset-0 bg-[#0B2341]/85 z-10"></div> 
          <div className="w-full h-full bg-[#0F2D5C]"></div> 
        </div> 

        <div className="max-w-[1200px] mx-auto relative z-20 flex flex-col lg:flex-row gap-12 items-center"> 
          
          {/* Sol Taraf: Ana Başlıklar ve Metin */}
          <div className="flex-1 text-center lg:text-left"> 
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center justify-center lg:justify-start gap-4"> 
              <span className="hidden sm:block w-12 h-[2px] bg-[#C9A227]"></span> 
              {t.hero.preTitle}
              <span className="hidden lg:hidden sm:block w-12 h-[2px] bg-[#C9A227]"></span> 
            </p> 
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1] mb-6"> 
              {t.hero.title1} <span className="text-[#C9A227]">{t.hero.title2}</span>
            </h1> 
            <p className="text-xl sm:text-2xl font-bold text-white mb-8 border-b-2 lg:border-b-0 lg:border-l-4 border-[#C9A227] pb-4 lg:pb-0 lg:pl-4 inline-block">
              {t.hero.subtitle}
            </p>
            <div className="text-sm sm:text-base font-light text-white/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8 space-y-4"> 
              <p>{t.hero.desc1}</p>
              <p>{t.hero.desc2}</p>
              <p className="font-medium text-white">{t.hero.desc3}</p>
            </div> 
          </div> 

          {/* Sağ Taraf: Hızlı İletişim Kutusu */}
          <div className="w-full lg:w-[400px] shrink-0 bg-white p-8 text-[#0B2341] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border-t-4 border-[#C9A227] relative z-20 text-left"> 
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C9A227] mb-2">{t.contact.title}</p> 
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight mb-6">{t.hero.title1} {t.hero.title2}</h3> 
            <p className="text-sm font-medium text-[#0B2341]/70 mb-6 border-b border-[#0B2341]/10 pb-4"> 
              📍 {t.contact.address}
            </p> 
            <div className="space-y-4 mb-8">
              <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 font-bold hover:text-[#C9A227] transition-colors group">
                <span className="w-10 h-10 bg-[#0B2341] text-white flex items-center justify-center text-sm group-hover:bg-[#C9A227] transition-colors">📞</span>
                {t.contact.phone}
              </a>
              <a href={`https://wa.me/${t.contact.wp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 font-bold hover:text-[#C9A227] transition-colors group">
                <span className="w-10 h-10 bg-[#25D366] text-white flex items-center justify-center text-sm group-hover:bg-[#128C7E] transition-colors">💬</span>
                {t.contact.wp}
              </a>
            </div>
            <a href={t.contact.mapLink} target="_blank" rel="noopener noreferrer" className="block w-full py-4 bg-[#C9A227] text-[#0B2341] text-center font-bold tracking-widest uppercase hover:bg-[#0B2341] hover:text-white transition-colors duration-300 shadow-lg text-sm"> 
              {t.contact.mapBtn}
            </a> 
          </div>

        </div> 
      </section> 

      {/* =========================================
          2, 3, 4. NEDEN BİZ, NÖBETÇİ & CRUISE
      ========================================= */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          
          {/* 2. Neden Samyeli Eczanesi? */}
          <div className="mb-20">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
              {t.whyUs.title}
            </h2>
            <p className="text-[#0B2341]/70 font-medium leading-relaxed mb-8 border-l-4 border-[#C9A227] pl-4">{t.whyUs.desc}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {t.whyUs.services.map((item: string, idx: number) => (
                <div key={idx} className="bg-[#F8F8F8] p-4 flex items-start gap-3 hover:border-[#C9A227] border border-transparent transition-colors">
                  <span className="w-4 h-4 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] rounded-sm font-bold text-[9px] mt-0.5">✓</span>
                  <span className="font-medium text-sm text-[#0B2341]/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Nöbetçi Eczane & 4. Cruise Yolcuları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Nöbetçi */}
            <div className="bg-[#0B2341] text-white p-8 sm:p-12 shadow-lg border-b-4 border-[#C9A227]">
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight mb-4 text-[#C9A227]">
                {t.onDuty.title}
              </h3>
              <p className="text-white/80 text-sm mb-6">{t.onDuty.desc1}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.onDuty.searches.map((search: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/10 text-white text-[10px] uppercase tracking-widest font-bold">
                    {search}
                  </span>
                ))}
              </div>
              <p className="text-white/90 text-sm leading-relaxed">{t.onDuty.desc2}</p>
            </div>

            {/* Cruise */}
            <div className="bg-[#F8F8F8] p-8 sm:p-12 border border-[#0B2341]/10">
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight mb-4 text-[#0B2341]">
                {t.cruise.title}
              </h3>
              <p className="text-[#0B2341]/70 text-sm mb-6">{t.cruise.desc1}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {t.cruise.searches.map((search: string, idx: number) => (
                  <span key={idx} className="px-3 py-1.5 bg-[#C9A227]/20 text-[#0B2341] border border-[#C9A227]/50 text-[10px] uppercase tracking-widest font-bold">
                    {search}
                  </span>
                ))}
              </div>
              <p className="text-[#0B2341]/90 font-medium text-sm leading-relaxed border-l-2 border-[#C9A227] pl-3">
                {t.cruise.desc2}
              </p>
            </div>
          </div>

          {/* FOTOĞRAF GALERİSİ 1 (Metin Arası Görsel Dinlenme) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((num) => (
              <div key={num} className="group relative aspect-[4/3] overflow-hidden border border-[#0B2341]/10 hover:border-[#C9A227] transition-colors duration-500 shadow-sm cursor-pointer">
                <Image
                  src={`/samyeli${num}.jpeg`}
                  alt={`Samyeli Pharmacy - ${num}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          5, 6, 7. EPHESUS, ÜRÜNLER & TURİSTLER
      ========================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#F8F8F8]">
        <div className="max-w-[1200px] mx-auto">
          
          {/* 5. Ephesus Yakınında Eczane */}
          <div className="bg-white p-8 sm:p-12 mb-16 border-l-4 border-[#C9A227] shadow-sm">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
              {t.ephesus.title}
            </h2>
            <p className="text-[#0B2341]/80 mb-6">{t.ephesus.desc1}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {t.ephesus.targets.map((target: string, idx: number) => (
                <span key={idx} className="px-4 py-2 bg-[#0B2341] text-white text-[10px] uppercase tracking-widest font-bold">
                  {target}
                </span>
              ))}
            </div>
            <p className="text-[#0B2341] font-bold">{t.ephesus.desc2}</p>
          </div>

          {/* 6. Geniş Ürün Yelpazesi */}
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6"> 
              {t.products.title}
            </h2> 
            <p className="text-[#0B2341]/80 font-medium mb-8">
              {t.products.desc}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3"> 
              {t.products.list.map((item: string, idx: number) => ( 
                <div key={idx} className="group flex items-center gap-2 p-3 bg-white border border-[#0B2341]/5 hover:bg-[#0B2341] transition-colors duration-500 shadow-sm cursor-default"> 
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span> 
                  <span className="font-semibold text-xs text-[#0B2341] group-hover:text-white transition-colors duration-500"> 
                    {item} 
                  </span> 
                </div> 
              ))} 
            </div> 
          </div>

          {/* 7. Turistler İçin Sağlık Danışmanlığı */}
          <div className="bg-white p-8 sm:p-12 border-l-4 border-[#0B2341] shadow-sm mb-20">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
              {t.tourists.title}
            </h2>
            <p className="text-[#0B2341]/80 mb-6">{t.tourists.desc1}</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {t.tourists.list.map((target: string, idx: number) => (
                <span key={idx} className="px-4 py-2 border border-[#0B2341]/20 text-[#0B2341] text-[10px] uppercase tracking-widest font-bold">
                  {target}
                </span>
              ))}
            </div>
            <p className="text-[#0B2341] font-bold italic">{t.tourists.desc2}</p>
          </div>

          {/* FOTOĞRAF GALERİSİ 2 (Son 3 Görsel) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[4, 5, 6].map((num) => (
              <div key={num} className="group relative aspect-[4/3] overflow-hidden border border-[#0B2341]/10 hover:border-[#C9A227] transition-colors duration-500 shadow-sm cursor-pointer">
                <Image
                  src={`/samyeli${num}.jpeg`}
                  alt={`Samyeli Pharmacy - ${num}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          8, 9. KOLAY ULAŞIM (HARİTA) & İLETİŞİM
      ========================================= */}
      <section className="py-24 bg-white border-t border-[#0B2341]/10">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-12">
          {/* 8. Kolay Ulaşım Metni */}
          <div className="text-center md:text-left mb-8">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
              {lang === 'tr' ? 'Kolay Ulaşım' : 'Easy Access'}
            </h2>
            <div className="inline-block text-left bg-[#F8F8F8] p-6 border-l-4 border-[#C9A227]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C9A227] mb-1">📍 {t.contact.addressTitle}</p>
              <p className="text-[#0B2341] font-semibold text-lg mb-4">{t.contact.address}</p>
              <a href={t.contact.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-[0.1em] text-[#0B2341] hover:text-[#C9A227] transition-colors underline underline-offset-4">
                {t.contact.mapBtn} &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Harita Iframe (Tam Genişlik) */}
        <div className="w-full h-[400px] sm:h-[500px] bg-[#0B2341] relative">
          <iframe 
            src="https://maps.google.com/maps?q=37.8591315,27.2608397&z=17&output=embed"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Samyeli Pharmacy Location"
            className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
          ></iframe>
        </div>

        {/* 9. Alt İletişim (Mevcut Haliyle Korundu) */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mt-16 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-8">
            {lang === 'tr' ? 'İletişim' : 'Contact Us'}
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href={`tel:${t.contact.phone.replace(/[^0-9+]/g, '')}`} className="w-full sm:w-auto px-10 py-5 bg-[#0B2341] text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-[#C9A227] hover:text-[#0B2341] transition-all shadow-lg">
              📞 {t.contact.phone}
            </a>
            <a href={`https://wa.me/${t.contact.wp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-5 bg-[#25D366] text-white text-xs font-black uppercase tracking-[0.15em] hover:bg-[#128C7E] transition-all shadow-lg">
              💬 {t.contact.wp}
            </a>
            <a href={`mailto:${t.contact.email}`} className="w-full sm:w-auto px-10 py-5 bg-transparent border-2 border-[#0B2341] text-[#0B2341] text-xs font-black uppercase tracking-[0.15em] hover:bg-[#0B2341] hover:text-white transition-all">
              ✉️ E-Posta
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          10. FOOTER / SEO BÖLÜMÜ
      ========================================= */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B2341] text-center border-t-4 border-[#C9A227]">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-6"> 
            {t.footer.title}
          </h2> 
          <p className="text-white/70 leading-relaxed mb-12 text-base md:text-lg max-w-2xl mx-auto"> 
            {t.footer.desc}
          </p> 

          <div className="bg-white/5 border border-white/10 p-8">
            <p className="text-[#C9A227] font-bold uppercase tracking-widest text-xs mb-6">{t.footer.seoText}</p>
            <div className="flex flex-wrap justify-center gap-3"> 
              {t.footer.keywords.map((tag: string, idx: number) => ( 
                <span 
                  key={idx} 
                  className="px-4 py-2 bg-transparent text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-white/20 hover:border-[#C9A227] hover:text-[#C9A227] transition-all duration-300 cursor-pointer" 
                > 
                  {tag} 
                </span> 
              ))} 
            </div> 
          </div>
        </div>
      </section>

    </main> 
  ); 
}