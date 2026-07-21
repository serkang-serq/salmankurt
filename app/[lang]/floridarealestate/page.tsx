import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary"; // Yolunu senin projene göre ayarla

// SEO Metadata'yı dillere göre ayırıyoruz 
export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' } }) { 
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "en"; 

  return { 
    title: lang === "tr" ? "Florida Gayrimenkul | Denizcan Kurt ile Miami'ye Yatırım Yapın" : "Florida Real Estate | Buy & Invest in Miami with Denizcan Kurt", 
    description: lang === "tr" 
      ? "Denizcan Kurt ile Miami gayrimenkullerine yatırım yapın. Güney Florida'da lüks evler, sahil mülkleri ve yatırım fırsatlarında uzmanlaşmıştır." 
      : "Invest in Miami real estate with Denizcan Kurt. Specializing in luxury homes, waterfront properties, and investment opportunities in South Florida.", 
  }; 
} 

export default async function FloridaRealEstatePage({ 
  params, 
}: { 
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' }; 
}) { 
  // Dili yakala ve sözlüğü çağır 
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "en"; 
  const dict = await getDictionary(lang as "en" | "tr"); 
  const t = dict.florida;

  return ( 
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]"> 
      
      {/* 1. HERO BÖLÜMÜ */} 
      <section className="relative bg-[#0B2341] text-white pt-32 pb-24 px-6 lg:px-12 overflow-hidden"> 
        <div className="absolute inset-0 z-0"> 
          <div className="absolute inset-0 bg-[#0B2341]/85 z-10"></div> 
          <div className="w-full h-full bg-[#0F2D5C]"></div> 
        </div> 

        <div className="max-w-[1200px] mx-auto relative z-20 flex flex-col lg:flex-row gap-12 items-center"> 
          <div className="flex-1 text-center lg:text-left"> 
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center justify-center lg:justify-start gap-4"> 
              <span className="hidden sm:block w-12 h-[2px] bg-[#C9A227]"></span> 
              {t.contactBlock.agency}
            </p> 
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1] mb-6"> 
              {t.contactBlock.name.split(' ')[0]} <span className="text-[#C9A227]">{t.contactBlock.name.split(' ')[1]}</span> <br /> 
              <span className="text-2xl sm:text-3xl lg:text-4xl">{t.contactBlock.role}</span>
            </h1> 
            <div className="text-base sm:text-lg font-light text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 space-y-4"> 
              <p>{t.hero.desc1}</p>
              <p>{t.hero.desc2}</p>
            </div> 
          </div> 

          <div className="w-full sm:w-[400px] bg-white p-8 text-[#0B2341] shadow-[0_30px_60px_-15px_rgba(11,35,65,0.5)] border-t-4 border-[#C9A227] relative z-20"> 
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C9A227] mb-2">{t.contactBlock.agency}</p> 
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6">{t.contactBlock.name}</h3> 
            <p className="text-sm font-medium text-[#0B2341]/70 mb-8 border-b border-[#0B2341]/10 pb-6"> 
              {t.contactBlock.location}
            </p> 
            <a href={`tel:${t.contactBlock.phone.replace(/[^0-9+]/g, '')}`} className="block w-full py-4 bg-[#0B2341] text-white text-center font-bold tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors duration-300"> 
              📞 {t.contactBlock.phone}
            </a> 
          </div> 
        </div> 
      </section> 

      {/* 2. HİZMETLER (GALERİ KARTLARI TARZINDA) */} 
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#0B2341]/5"> 
        <div className="max-w-[1200px] mx-auto"> 
          <div className="text-center mb-16"> 
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-6"> 
              {t.servicesOverview.title} 
            </h2> 
            <div className="h-1 w-24 bg-[#C9A227] mx-auto"></div> 
          </div> 

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6"> 
            {t.servicesOverview.services.map((srv: any, idx: number) => ( 
              <div key={idx} className="group relative aspect-[4/3] bg-[#F8F8F8] border border-[#0B2341]/5 cursor-pointer flex flex-col items-center justify-center p-8 text-center hover:bg-[#0B2341] transition-all duration-500"> 
                <h3 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B2341] group-hover:text-[#C9A227] mb-4 transition-colors">
                  {srv.tag}
                </h3>
                <p className="text-[#0B2341]/70 group-hover:text-white/80 transition-colors font-medium text-sm lg:text-base leading-relaxed">
                  {srv.desc}
                </p>
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 

      {/* 3. ŞEHİRLER & BÖLGELER (PREMIUM PORTFOLIO LİSTESİ) */} 
      <section className="py-24 px-6 lg:px-12 bg-[#F8F8F8]"> 
        <div className="max-w-[1200px] mx-auto"> 
          <div className="text-center mb-16"> 
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-6"> 
              {t.trustedRealtor.title}
            </h2> 
            <p className="text-[#0B2341]/70 font-medium max-w-2xl mx-auto mb-8">
              {t.trustedRealtor.desc1}
            </p>
            <div className="h-1 w-24 bg-[#C9A227] mx-auto"></div> 
          </div> 

          <h3 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-8">{t.trustedRealtor.servingTitle}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"> 
            {t.trustedRealtor.cities.map((city: string, idx: number) => ( 
              <div 
                key={idx} 
                className="group flex items-center justify-between p-6 bg-white border border-[#0B2341]/5 hover:bg-[#0B2341] hover:border-[#0B2341] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl" 
              > 
                <div className="flex items-center gap-4"> 
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full group-hover:scale-150 transition-transform duration-500"></span> 
                  <span className="font-semibold text-sm md:text-base text-[#0B2341] group-hover:text-white transition-colors duration-500"> 
                    {city} 
                  </span> 
                </div> 
                <span className="text-[#C9A227] font-black opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-xl"> 
                  &rarr; 
                </span> 
              </div> 
            ))} 
          </div> 

          <div className="mt-16 p-8 bg-white border-l-4 border-[#C9A227] max-w-4xl mx-auto shadow-sm"> 
            <h4 className="text-lg font-bold text-[#0B2341] mb-2">{t.trustedRealtor.servingAllTitle}</h4>
            <p className="text-base text-[#0B2341]/80 leading-relaxed italic"> 
              {t.trustedRealtor.servingAllDesc} 
            </p> 
          </div> 
        </div> 
      </section> 

      {/* 4. BUY, SELL, RENT, RELOCATE (BİLGİ LİSTELERİ) */}
      <section className="py-24 px-6 lg:px-12 bg-white border-t border-[#0B2341]/5">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Sol Kolon (Buy & Rent) */}
          <div className="space-y-16">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
                {t.buyHome.title}
              </h2>
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.1em] text-sm mb-6">{t.buyHome.subtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {t.buyHome.interestedInList.map((item: string, idx: number) => (
                  <div key={idx} className="bg-[#F8F8F8] p-4 flex items-start gap-3">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] rounded-sm font-bold text-[10px] mt-0.5">✓</span>
                    <span className="font-medium text-sm text-[#0B2341]/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-[#0B2341]/70 text-sm font-medium leading-relaxed italic border-l-2 border-[#C9A227] pl-4">{t.buyHome.desc1}</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
                {t.rentals.title}
              </h2>
              <p className="text-[#0B2341]/70 mb-6">{t.rentals.desc1}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                {t.rentals.rentalList.map((item: string, idx: number) => (
                  <div key={idx} className="bg-[#F8F8F8] p-4 flex items-start gap-3">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] rounded-sm font-bold text-[10px] mt-0.5">✓</span>
                    <span className="font-medium text-sm text-[#0B2341]/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-[#C9A227] uppercase tracking-widest">{t.rentals.desc2}</p>
            </div>
          </div>

          {/* Sağ Kolon (Sell & Relocate) */}
          <div className="space-y-16">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
                {t.sellHome.title}
              </h2>
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.1em] text-sm mb-6">{t.sellHome.subtitle}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {t.sellHome.benefits.map((item: string, idx: number) => (
                  <div key={idx} className="bg-[#F8F8F8] p-4 flex items-start gap-3">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] rounded-sm font-bold text-[10px] mt-0.5">✓</span>
                    <span className="font-medium text-sm text-[#0B2341]/80">{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-[#C9A227] uppercase tracking-widest">{t.sellHome.outro}</p>
            </div>

            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
                {t.relocate.title}
              </h2>
              <p className="text-[#0B2341]/70 mb-4">{t.relocate.desc1}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {t.relocate.fromList.map((place: string, idx: number) => (
                  <span key={idx} className="px-3 py-1 bg-[#0B2341] text-white text-[10px] uppercase tracking-widest font-bold">
                    {place}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {t.relocate.understandList.map((item: string, idx: number) => (
                  <div key={idx} className="bg-[#F8F8F8] p-4 flex items-start gap-3">
                    <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] rounded-sm font-bold text-[10px] mt-0.5">✓</span>
                    <span className="font-medium text-sm text-[#0B2341]/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. WHY WORK WITH DENİZCAN KURT (KOYU TEMA BÖLÜMÜ) */} 
      <section className="py-24 px-6 lg:px-12 bg-[#0B2341] text-white"> 
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"> 
          <div className="lg:col-span-5 text-center lg:text-left"> 
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4"> 
              {t.contactBlock.slogan}
            </p> 
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8"> 
              {t.whyChoose.title.split(' ')[0]} {t.whyChoose.title.split(' ')[1]} <br /> 
              <span className="text-[#C9A227]">{t.whyChoose.title.split(' ').slice(2).join(' ')}</span> 
            </h2> 
            <p className="text-white/70 leading-relaxed mb-8 mx-auto lg:mx-0 max-w-md"> 
              {t.contactBlock.commitment}
            </p> 
            <p className="font-bold text-[#C9A227] tracking-widest uppercase text-sm border-l-2 border-[#C9A227] pl-4 inline-block">
              {t.whyChoose.outro}
            </p>
          </div> 

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"> 
            {t.whyChoose.reasons.map((reason: string, idx: number) => ( 
              <div key={idx} className="bg-white/5 border border-white/10 p-5 flex items-start gap-4 hover:bg-[#C9A227]/10 transition-colors"> 
                <span className="w-6 h-6 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] rounded-sm font-bold text-xs mt-0.5"> 
                  ✓ 
                </span> 
                <span className="font-medium text-sm sm:text-base text-white/90 leading-snug">{reason}</span> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 

      {/* 6. FINAL CTA BÖLÜMÜ & FOTOĞRAF (GÜNCELLENEN KISIM) */} 
      <section className="py-24 px-6 lg:px-12 bg-white border-t border-[#0B2341]/5"> 
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20"> 
          
          {/* Sol Kolon - Fotoğraf */}
          <div className="w-full md:w-5/12 lg:w-4/12 relative">
            <div className="absolute inset-0 bg-[#C9A227] translate-x-4 translate-y-4 z-0"></div>
            <div className="relative z-10 w-full aspect-[4/5] bg-[#F8F8F8] border border-[#0B2341]/10 overflow-hidden group">
              <Image
                src="/denizcankurt.png"
                alt="Denizcan Kurt - Florida Real Estate"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Sağ Kolon - İletişim Bilgileri */}
          <div className="w-full md:w-7/12 lg:w-8/12 text-center md:text-left"> 
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-4"> 
              {t.contactBlock.title}
            </h2> 
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-8">
              {t.contactBlock.role} <span className="hidden sm:inline mx-2">|</span><br className="sm:hidden" /> {t.contactBlock.agency}
            </p>
            <p className="text-[#0B2341]/70 leading-relaxed mb-10 text-base md:text-lg max-w-xl mx-auto md:mx-0"> 
              {t.hero.desc1}
            </p> 
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6"> 
              <a 
                href={`tel:${t.contactBlock.phone.replace(/[^0-9+]/g, '')}`} 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A227] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white shadow-lg" 
              > 
                {t.contactBlock.phone} 
              </a> 
              <Link 
                href={`/${lang}/contact`} 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#0B2341] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white" 
              > 
                {t.contactBlock.email} 
              </Link> 
            </div> 
          </div> 

        </div> 
      </section> 

    </main> 
  ); 
}