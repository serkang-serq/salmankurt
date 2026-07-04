import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import HomeContactForm from "@/app/components/HomeContactForm";

// Sanity'den son 3 Blog yazısını çeken fonksiyon
async function getLatestBlogs() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0...150], "") + "..."
  }`;
  return await client.fetch(query);
}

export default async function HomePage() {
  const blogs = await getLatestBlogs();

  // PARTNERLER: Sadece istenen 4 marka bırakıldı
  const partners = [
    "Sea Drop Travel", "Denizcan Kurt", "Samyeli Eczanesi", "Erzadeoğlu Mimarlık"
  ];

  const reviews = [
    {
      name: "Sarah M.",
      location: "California, USA",
      text: "Our private excursion to Ephesus was flawlessly executed. The depth of historical knowledge and VIP treatment we received from Sea Drop Travel was simply unparalleled.",
      service: "Luxury Tourism"
    },
    {
      name: "David H.",
      location: "London, UK",
      text: "Navigating the Florida real estate market from abroad seemed daunting until we partnered with Denizcan. True professionals who deliver exactly what they promise.",
      service: "Real Estate Advisory"
    },
    {
      name: "Elena G.",
      location: "Sydney, Australia",
      text: "From the seamless port pickup in Kusadasi to the final farewell, every detail was handled with absolute precision and grace. A true global partner.",
      service: "Private Excursion"
    }
  ];

  // Eczane fotoğrafları
  const pharmacyImages = [
    "/samyeli1.jpeg", "/samyeli2.jpeg", "/samyeli3.jpeg",
    "/samyeli4.jpeg", "/samyeli5.jpeg", "/samyeli6.jpeg"
  ];

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 flex flex-col justify-center min-h-[80vh] border-b border-[#0B2341]/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-[#C9A227]/5 rounded-full blur-3xl -z-10 translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute left-12 top-44 bottom-32 w-[1px] bg-gradient-to-b from-[#C9A227] via-[#0B2341]/10 to-transparent hidden xl:block"></div>

        <div className="max-w-[1200px] mx-auto w-full z-10 xl:pl-12">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-12 bg-[#C9A227]"></div>
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs">
              Global Vision. Executive Prestige.
            </p>
          </div>
          
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter leading-[0.85] text-[#0B2341] mb-12">
            Bridging <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2341] via-[#0B2341] to-[#C9A227]">Continents.</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-2xl">
              <p className="text-[#0B2341]/70 text-lg md:text-xl leading-relaxed font-light">
                Over 30 years of cross-continental excellence spanning premium Turkish tourism and strategic United States real estate investments.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/about" className="px-10 py-5 bg-[#0B2341] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C9A227] hover:text-[#0B2341] transition-all duration-500 shadow-[0_20px_40px_rgba(11,35,65,0.15)] text-center">
                The Story &rarr;
              </Link>
              <a href="#quick-contact" className="px-10 py-5 border-2 border-[#0B2341] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0B2341] hover:text-white transition-all duration-500 text-center">
                Inquire Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GLOBAL PARTNERS */}
      <section className="bg-white border-y border-[#0B2341]/10 py-16 px-6 lg:px-12 relative">
        <div className="max-w-[1200px] mx-auto">
          {/* Mobilde sola yaslama düzeltildi (items-start eklendi) */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
            <div className="text-left w-full md:w-auto">
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-2">Global Network</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341]">Trusted <span className="opacity-30">Partners.</span></h2>
            </div>
            <div className="hidden md:block w-full max-w-md h-[1px] bg-[#0B2341]/10 mb-3"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-center">
            {partners.map((partner, idx) => (
              <div 
                key={idx} 
                className="h-24 px-4 bg-[#F8F8F8] border border-[#0B2341]/5 shadow-[0_4px_20px_-10px_rgba(11,35,65,0.05)] hover:border-[#C9A227] hover:shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
              >
                <span className="font-[family-name:var(--font-montserrat)] text-[11px] md:text-xs font-black uppercase tracking-widest text-[#0B2341]/80 group-hover:text-[#0B2341] transition-colors">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* İSTATİSTİK ŞERİDİ */}
      <section className="bg-[#0B2341] border-b-4 border-[#C9A227] py-12 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">30+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Years of Experience</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">2</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Global Subsidiaries</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">10k+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">International Clients</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">100%</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">Executive Discretion</p>
          </div>
        </div>
      </section>

      {/* 3. SEKTÖREL HİZMETLER VE YATIRIMLAR */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8F8F8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 text-center md:text-left">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">Operational Core</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341]">Business <span className="opacity-20">Pillars.</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* 01: Tourism */}
            <div className="group bg-white p-10 md:p-14 border border-[#0B2341]/5 hover:border-[#C9A227] transition-all duration-700 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B2341]/5 rounded-bl-[150px] -z-0 transition-transform duration-700 group-hover:scale-[3.5]"></div>
              <div>
                <span className="text-[#C9A227] text-xs font-black tracking-[0.3em] uppercase block mb-6 relative z-10">01 / Luxury Tourism</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight mb-4 relative z-10 text-[#0B2341]">Sea Drop Travel</h3>
                <p className="text-[#0B2341]/70 leading-relaxed mb-10 relative z-10 max-w-md font-light">
                  Bespoke shore excursions, custom Ephesus itineraries, and high-end cultural experiences tailored meticulously for global cruise lines and VIP travelers.
                </p>
              </div>
              <Link href="/seadrop" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0B2341] group-hover:text-[#C9A227] relative z-10 border-b border-[#0B2341]/20 pb-1 w-fit group-hover:border-[#C9A227] transition-all">
                Explore The Portfolio &rarr;
              </Link>
            </div>

            {/* 02: Real Estate */}
            <div className="group bg-[#0B2341] p-10 md:p-14 text-white transition-all duration-700 shadow-2xl relative overflow-hidden border-b-8 border-[#C9A227] flex flex-col justify-between">
              <div>
                <span className="text-[#C9A227] text-xs font-black tracking-[0.3em] uppercase block mb-6 relative z-10">02 / US Capital & Assets</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight mb-4 relative z-10">Florida Real Estate</h3>
                <p className="text-white/70 leading-relaxed mb-10 relative z-10 max-w-md font-light">
                  Strategic residential asset acquisitions, luxury waterfront investment portfolios, and comprehensive property advisory across South Florida's fastest-growing sectors.
                </p>
              </div>
              <Link href="/real-estate" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white group-hover:text-[#C9A227] relative z-10 border-b border-white/20 pb-1 w-fit group-hover:border-[#C9A227] transition-all">
                View Opportunities &rarr;
              </Link>
            </div>
          </div>

          {/* 03: Eczane */}
          <div className="bg-white border border-[#0B2341]/5 shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden group/pharmacy">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#0B2341]/5">
                <span className="text-[#C9A227] text-xs font-black tracking-[0.3em] uppercase block mb-6">03 / Local Investment</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight mb-4 text-[#0B2341]">Samyeli Pharmacy</h3>
                <p className="text-[#0B2341]/70 leading-relaxed mb-8 font-light">
                  Committed to community health and well-being. Providing professional pharmaceutical care, reliable advice, and essential healthcare products with uncompromised quality.
                </p>
                
                <div className="space-y-6 border-y border-[#0B2341]/10 py-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#C9A227] text-lg mt-1">◷</div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2341]/40 mb-1">Working Hours</span>
                      <span className="font-bold text-[#0B2341] text-sm">Mon - Sat | 09:00 - 20:00</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#C9A227] text-lg mt-1">☏</div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2341]/40 mb-1">Direct Line</span>
                      <a href="tel:05449662111" className="font-mono font-bold text-[#0B2341] text-sm hover:text-[#C9A227] transition-colors">0544 966 21 11</a>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://maps.app.goo.gl/USv2hKmJVPdrthBE9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-fit px-8 py-4 border-2 border-[#0B2341] text-[#0B2341] text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#0B2341] hover:text-white transition-all"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>

              <div className="lg:col-span-7 bg-[#0B2341]/5 p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
                  {pharmacyImages.map((src, index) => (
                    <div key={index} className="relative aspect-square overflow-hidden bg-white shadow-sm group/img">
                      <Image 
                        src={src} 
                        alt={`Samyeli Eczanesi - Görsel ${index + 1}`} 
                        fill 
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover group-hover/img:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-[#0B2341]/0 group-hover/img:bg-[#0B2341]/20 transition-colors duration-500"></div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            <div className="relative w-full h-[300px] md:h-[400px] border-t border-[#0B2341]/10 group/map overflow-hidden bg-[#E5E5E5]">
              <iframe 
                src="https://maps.google.com/maps?q=Samyeli+Eczanesi+Kusadasi&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full grayscale opacity-80 group-hover/map:grayscale-0 group-hover/map:opacity-100 transition-all duration-1000 ease-in-out"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="absolute inset-0 bg-[#0B2341]/10 pointer-events-none group-hover/map:bg-transparent transition-colors duration-1000"></div>
              
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 pointer-events-none">
                <div className="bg-white/95 backdrop-blur-md px-6 py-4 border-l-4 border-[#C9A227] shadow-2xl flex items-center gap-4">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C9A227]"></span>
                  </span>
                  <span className="font-[family-name:var(--font-montserrat)] font-bold text-[#0B2341] text-xs uppercase tracking-widest">
                    Live Location
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MÜŞTERİ YORUMLARI */}
      <section className="py-16 px-6 lg:px-12 bg-[#0B2341] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-px h-full bg-white/5"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-white/5"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">Global Acclaim</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">Client <span className="text-[#C9A227]">Perspectives.</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                <div className="flex gap-1 text-[#C9A227] mb-6 text-sm">
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="text-white/80 font-light leading-relaxed mb-8 text-sm italic">
                  "{review.text}"
                </p>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-1">{review.name}</h4>
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                    <span className="text-white/50">{review.location}</span>
                    <span className="text-[#C9A227]">{review.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BLOG/JOURNAL BÖLÜMÜ */}
      <section className="py-16 px-6 lg:px-12 bg-[#0B2341] border-t-4 border-[#C9A227] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#C9A227] via-transparent to-transparent"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-8 border-b border-white/10 pb-8">
            <div className="text-left w-full md:w-auto">
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">Executive Insights</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                The Global <br className="hidden md:block" />
                <span className="text-white/30 md:ml-0 ml-2">Journal.</span>
              </h2>
            </div>
            <Link href="/blog" className="w-full md:w-auto text-center px-8 py-4 bg-transparent border border-[#C9A227] text-[#C9A227] text-xs font-black uppercase tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-all duration-300">
              View Complete Archives
            </Link>
          </div>

          {blogs?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((post: any) => (
                <Link href={`/blog/${post.slug?.current}`} key={post._id} className="group block bg-white/5 border border-white/10 hover:border-[#C9A227]/50 transition-colors duration-500">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {post.mainImage ? (
                      <Image 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#0B2341] flex items-center justify-center border-b border-white/10"></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] text-[#C9A227] font-black uppercase tracking-widest">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <div className="h-[1px] flex-1 bg-white/10"></div>
                    </div>
                    
                    <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-black uppercase tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-300 line-clamp-2 leading-tight mb-4">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-white/50 line-clamp-2 leading-relaxed font-light mb-6">
                      {post.excerpt || "Access corporate analysis, tourism market intelligence, and deep real estate insights in this official publication."}
                    </p>
                    
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A227] flex items-center gap-2">
                      Read Article <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
             <div className="p-12 border border-white/10 text-center text-white/40 font-bold uppercase tracking-widest text-xs bg-white/5">
                Awaiting editorial entries. Journal synchronization pending.
             </div>
          )}
        </div>
      </section>

      {/* 6. SIKÇA SORULAN SORULAR */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8F8F8] border-t border-[#0B2341]/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">FAQ</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-black uppercase tracking-tight text-[#0B2341]">Institutional <span className="opacity-20">Inquiries.</span></h2>
          </div>

          <div className="space-y-4 divide-y divide-[#0B2341]/10">
            <details className="group pb-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none pt-6 text-lg font-bold font-[family-name:var(--font-montserrat)] text-[#0B2341] hover:text-[#C9A227] transition-colors uppercase tracking-tight">
                <span>What geographical zones do your corporate operations cover?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-[#C9A227] text-xl">↓</span>
              </summary>
              <p className="text-[#0B2341]/70 text-sm leading-relaxed pt-4 font-light max-w-3xl">
                Our luxury travel division is headquartered in Kusadasi, Türkiye, serving major archaeological zones along the Aegean Coast. Our asset management and real estate operations are strategically positioned out of South Florida, USA, covering key luxury sectors in Miami and Jacksonville.
              </p>
            </details>
            <details className="group pb-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none pt-6 text-lg font-bold font-[family-name:var(--font-montserrat)] text-[#0B2341] hover:text-[#C9A227] transition-colors uppercase tracking-tight">
                <span>How can international investors initiate property consultation?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-[#C9A227] text-xl">↓</span>
              </summary>
              <p className="text-[#0B2341]/70 text-sm leading-relaxed pt-4 font-light max-w-3xl">
                International clients can seamlessly trigger an investment request via our integrated form below. Our US representative, Denizcan Kurt, will review the portfolio request and coordinate a private consultation via phone or secure digital link.
              </p>
            </details>
            <details className="group pb-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer list-none pt-6 text-lg font-bold font-[family-name:var(--font-montserrat)] text-[#0B2341] hover:text-[#C9A227] transition-colors uppercase tracking-tight">
                <span>Are private excursions customizable for sovereign/family groups?</span>
                <span className="transition-transform duration-300 group-open:rotate-180 text-[#C9A227] text-xl">↓</span>
              </summary>
              <p className="text-[#0B2341]/70 text-sm leading-relaxed pt-4 font-light max-w-3xl">
                Yes, absolute customization is our gold standard. Sea Drop Travel specializes in high-security, customized private VIP itineraries for families, luxury groups, and pilgrims interested in private cultural or Christian heritage asset viewing.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 7. İLETİŞİM FORMU */}
      <section id="quick-contact" className="py-16 px-6 lg:px-12 bg-[#0B2341] text-white border-t-8 border-[#C9A227]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">Direct Channel</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">Get in <span className="text-white/20">Touch.</span></h2>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm font-light">
              Whether arranging elite travel asset protection, deploying capital into premium US real estate portfolios, or inquiring about local investments, our executive team stands prepared to advise.
            </p>
            <div className="flex gap-12 border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-wider">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">Türkiye HQ</span>
                <span className="text-[#C9A227]">Kusadasi, Aydin</span>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">USA Branch</span>
                <span className="text-[#C9A227]">Jacksonville, FL</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <HomeContactForm />
          </div>

        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#061528] py-8 text-center border-t border-white/10">
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em]">
          &copy; {new Date().getFullYear()} Salman Kurt. All Rights Reserved.
        </p>
      </footer>

    </main>
  );
}