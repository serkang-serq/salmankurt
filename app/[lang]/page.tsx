import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import HomeContactForm from "../components/HomeContactForm";
import { getDictionary } from "../../dictionaries/get-dictionary";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getLatestBlogs() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt
  }`;
  
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Ana sayfa blogları çekilirken hata:", error);
    return [];
  }
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const dict = await getDictionary(lang as "en" | "tr");

  const blogs = await getLatestBlogs();

  // YENİ EKLENEN KISIM: Eski düz metin partnerler yerine linkli ve logolu premium yapı eklendi
  const partnersData = [
    {
      name: "Sea Drop Travel",
      href: "https://seadroptravel.com", 
      isExternal: true,
      logo: "/logo11.png"
    },
    {
      name: "Denizcan Kurt",
      href: `/${lang}/floridarealestate`, 
      isExternal: true,
      logo: "/logo22.png"
    },
    {
      name: "Samyeli Eczanesi",
      href: `/${lang}/samyeli-eczanesi`, 
      isExternal: false,
      logo: "/logo33.png"
    },
    {
      name: "Erzadeoğlu Mimarlık",
      href: `/${lang}/erzadeoglu-mimarlik`, 
      isExternal: false,
      logo: "/logo44.png"
    }
  ];

  const reviews = lang === "tr" ? [
    {
      name: "Sarah M.",
      location: "Kaliforniya, ABD",
      text: "Efes'e yaptığımız özel gezi kusursuz bir şekilde gerçekleştirildi. Sea Drop Travel'dan aldığımız tarihi bilginin derinliği ve VIP muamele tek kelimeyle benzersizdi.",
      service: "Lüks Turizm"
    },
    {
      name: "David H.",
      location: "Londra, İngiltere",
      text: "Denizcan ile çalışana kadar yurt dışından Florida gayrimenkul piyasasında gezinmek göz korkutucu görünüyordu. Tam olarak vaat ettiklerini sunan gerçek profesyoneller.",
      service: "Gayrimenkul Danışmanlığı"
    },
    {
      name: "Elena G.",
      location: "Sidney, Avustralya",
      text: "Kuşadası'ndaki sorunsuz liman karşılamasından son vedaya kadar her detay mutlak bir hassasiyet ve zarafetle ele alındı. Gerçek bir küresel partner.",
      service: "Özel Gezi"
    }
  ] : [
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

  const faqs = lang === "tr" ? [
    {
      q: "Kurumsal operasyonlarınız hangi coğrafi bölgeleri kapsıyor?",
      a: "Lüks seyahat bölümümüzün merkezi Türkiye Kuşadası'nda olup Ege Kıyısındaki başlıca arkeolojik bölgelere hizmet vermektedir. Varlık yönetimi ve gayrimenkul operasyonlarımız ise stratejik olarak ABD'nin Güney Florida bölgesinde, Miami ve Jacksonville'deki kilit lüks sektörleri kapsayacak şekilde konumlandırılmıştır."
    },
    {
      q: "Uluslararası yatırımcılar mülk danışmanlığını nasıl başlatabilir?",
      a: "Uluslararası müşterilerimiz, aşağıdaki entegre formumuz aracılığıyla sorunsuz bir şekilde yatırım talebi oluşturabilirler. ABD temsilcimiz Denizcan Kurt portföy talebini inceleyecek ve telefon veya güvenli dijital bağlantı üzerinden özel bir danışmanlık koordine edecektir."
    },
    {
      q: "Özel geziler aile ve VIP gruplar için özelleştirilebilir mi?",
      a: "Evet, mutlak özelleştirme bizim altın standardımızdır. Sea Drop Travel aileler, lüks gruplar ve Hıristiyan mirasını özel olarak görmek isteyen hacılar için yüksek güvenlikli, tamamen kişiselleştirilmiş VIP güzergahlar hazırlama konusunda uzmandır."
    }
  ] : [
    {
      q: "What geographical zones do your corporate operations cover?",
      a: "Our luxury travel division is headquartered in Kusadasi, Türkiye, serving major archaeological zones along the Aegean Coast. Our asset management and real estate operations are strategically positioned out of South Florida, USA, covering key luxury sectors in Miami and Jacksonville."
    },
    {
      q: "How can international investors initiate property consultation?",
      a: "International clients can seamlessly trigger an investment request via our integrated form below. Our US representative, Denizcan Kurt, will review the portfolio request and coordinate a private consultation via phone or secure digital link."
    },
    {
      q: "Are private excursions customizable for sovereign/family groups?",
      a: "Yes, absolute customization is our gold standard. Sea Drop Travel specializes in high-security, customized private VIP itineraries for families, luxury groups, and pilgrims interested in private cultural or Christian heritage asset viewing."
    }
  ];

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
              {dict.home.heroPreTitle}
            </p>
          </div>
          
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-7xl md:text-[7.5rem] font-black uppercase tracking-tighter leading-[1.1] text-[#0B2341] mb-12">
            {dict.home.heroTitle1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B2341] via-[#0B2341] to-[#C9A227]">{dict.home.heroTitle2}</span>
          </h1>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-2xl">
              <p className="text-[#0B2341]/70 text-lg md:text-xl leading-relaxed font-light">
                {dict.home.heroDesc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href={`/${lang}/about`} className="px-10 py-5 bg-[#0B2341] text-white text-xs font-black uppercase tracking-[0.2em] hover:bg-[#C9A227] hover:text-[#0B2341] transition-all duration-500 shadow-[0_20px_40px_rgba(11,35,65,0.15)] text-center">
                {dict.home.heroBtn1} &rarr;
              </Link>
              <a href="#quick-contact" className="px-10 py-5 border-2 border-[#0B2341] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] hover:bg-[#0B2341] hover:text-white transition-all duration-500 text-center">
                {dict.home.heroBtn2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GLOBAL PARTNERS (YENİ PREMIUM LOGO IZGARASI BÖLÜMÜ) */}
      <section className="bg-white py-20 border-y border-[#0B2341]/10 px-6 lg:px-12 relative">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Üst Kısım: Başlık ve Ayırıcı Çizgi (Dictionary'e bağlandı) */}
          <div className="flex items-end gap-8 mb-12">
            <div className="shrink-0 text-left">
              <h4 className="text-[#C9A227] text-xs font-bold tracking-[0.2em] uppercase mb-2">
                {dict.home.partnersPreTitle}
              </h4>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter font-[family-name:var(--font-montserrat)]">
                <span className="text-[#0B2341] mr-3">{dict.home.partnersTitle1}</span>
                <span className="text-[#B0B8C1]">{dict.home.partnersTitle2}</span>
              </h2>
            </div>
            {/* Sağa uzayan ince editoryal çizgi */}
            <div className="hidden md:block flex-1 h-[1px] bg-gray-200 mb-2 md:mb-3"></div>
          </div>

          {/* Alt Kısım: Hover efektli logo ızgarası */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnersData.map((partner) => {
              const LinkComponent = partner.isExternal ? "a" : Link;
              const linkProps = partner.isExternal
                ? { href: partner.href, target: "_blank", rel: "noopener noreferrer" } 
                : { href: partner.href }; 

              return (
                <LinkComponent
                  key={partner.name}
                  {...linkProps}
                  className="group flex items-center justify-center h-[120px] bg-[#F8F9FA] border border-gray-100 transition-all duration-500 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-1 overflow-hidden px-8 py-6"
                  aria-label={`${partner.name} web sitesini ziyaret et`}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} Logo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-contain filter grayscale opacity-50 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>
                </LinkComponent>
              );
            })}
          </div>
          
        </div>
      </section>

      {/* İSTATİSTİK ŞERİDİ */}
      <section className="bg-[#0B2341] border-b-4 border-[#C9A227] py-12 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">30+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{dict.home.stats.exp}</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">2</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{dict.home.stats.subs}</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">10k+</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{dict.home.stats.clients}</p>
          </div>
          <div className="px-4">
            <p className="text-4xl md:text-5xl font-black text-[#C9A227] font-[family-name:var(--font-montserrat)] mb-2">100%</p>
            <p className="text-[10px] text-white/50 uppercase tracking-widest font-bold">{dict.home.stats.discretion}</p>
          </div>
        </div>
      </section>

      {/* 3. SEKTÖREL HİZMETLER VE YATIRIMLAR */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8F8F8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12 text-center md:text-left">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">{dict.home.pillarsPreTitle}</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341]">{dict.home.pillarsTitle1} <span className="opacity-20">{dict.home.pillarsTitle2}</span></h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
            {/* 01: Tourism */}
            <div className="group bg-white p-10 md:p-14 border border-[#0B2341]/5 hover:border-[#C9A227] transition-all duration-700 shadow-sm relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B2341]/5 rounded-bl-[150px] -z-0 transition-transform duration-700 group-hover:scale-[3.5]"></div>
              <div>
                <span className="text-[#C9A227] text-xs font-black tracking-[0.3em] uppercase block mb-6 relative z-10">{dict.home.tourismPreTitle}</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight mb-4 relative z-10 text-[#0B2341]">Sea Drop Travel</h3>
                <p className="text-[#0B2341]/70 leading-relaxed mb-10 relative z-10 max-w-md font-light">
                  {dict.home.tourismDesc}
                </p>
              </div>
              <Link href={`/${lang}/seadrop`} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#0B2341] group-hover:text-[#C9A227] relative z-10 border-b border-[#0B2341]/20 pb-1 w-fit group-hover:border-[#C9A227] transition-all">
                {dict.home.tourismBtn} &rarr;
              </Link>
            </div>

            {/* 02: Real Estate */}
            <div className="group bg-[#0B2341] p-10 md:p-14 text-white transition-all duration-700 shadow-2xl relative overflow-hidden border-b-8 border-[#C9A227] flex flex-col justify-between">
              <div>
                <span className="text-[#C9A227] text-xs font-black tracking-[0.3em] uppercase block mb-6 relative z-10">{dict.home.realEstatePreTitle}</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight mb-4 relative z-10">{dict.home.realEstateTitle}</h3>
                <p className="text-white/70 leading-relaxed mb-10 relative z-10 max-w-md font-light">
                  {dict.home.realEstateDesc}
                </p>
              </div>
              <Link href={`/${lang}/real-estate`} className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-white group-hover:text-[#C9A227] relative z-10 border-b border-white/20 pb-1 w-fit group-hover:border-[#C9A227] transition-all">
                {dict.home.realEstateBtn} &rarr;
              </Link>
            </div>
          </div>

          {/* 03: Eczane */}
          <div className="bg-white border border-[#0B2341]/5 shadow-sm hover:shadow-xl transition-all duration-700 overflow-hidden group/pharmacy">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[#0B2341]/5">
                <span className="text-[#C9A227] text-xs font-black tracking-[0.3em] uppercase block mb-6">{dict.home.pharmacyPreTitle}</span>
                <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight mb-4 text-[#0B2341]">{dict.home.pharmacyTitle}</h3>
                <p className="text-[#0B2341]/70 leading-relaxed mb-8 font-light">
                  {dict.home.pharmacyDesc}
                </p>
                
                <div className="space-y-6 border-y border-[#0B2341]/10 py-8 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#C9A227] text-lg mt-1">◷</div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2341]/40 mb-1">{dict.home.workingHoursTitle}</span>
                      <span className="font-bold text-[#0B2341] text-sm">{dict.home.workingHours}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#F8F8F8] flex items-center justify-center text-[#C9A227] text-lg mt-1">☏</div>
                    <div>
                      <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2341]/40 mb-1">{dict.home.directLine}</span>
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
                  {dict.home.openMap} &rarr;
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
                    {dict.home.liveLocation}
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
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">{dict.home.reviewsPreTitle}</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">{dict.home.reviewsTitle1} <span className="text-[#C9A227]">{dict.home.reviewsTitle2}</span></h2>
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
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">{dict.home.blogPreTitle}</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
                {dict.home.blogTitle1} <br className="hidden md:block" />
                <span className="text-white/30 md:ml-0 ml-2">{dict.home.blogTitle2}</span>
              </h2>
            </div>
            <Link href={`/${lang}/blog`} className="w-full md:w-auto text-center px-8 py-4 bg-transparent border border-[#C9A227] text-[#C9A227] text-xs font-black uppercase tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-all duration-300">
              {dict.home.blogBtn}
            </Link>
          </div>

          {blogs?.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogs.map((post: any) => {
                const postTitle = typeof post.title === 'string' 
                  ? post.title 
                  : (post.title?.[lang] || post.title?.tr || "Makale");

                const postExcerpt = typeof post.excerpt === 'string'
                  ? post.excerpt
                  : (post.excerpt?.[lang] || post.excerpt?.tr || (lang === "tr" ? "Kurumsal analizlere ve derin gayrimenkul içgörülerine bu resmi yayından erişin." : "Access corporate analysis, tourism market intelligence, and deep real estate insights in this official publication."));

                return (
                  <Link href={`/${lang}/blog/${post.slug?.current}`} key={post._id} className="group block bg-white/5 border border-white/10 hover:border-[#C9A227]/50 transition-colors duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {post.mainImage ? (
                        <Image 
                          src={urlFor(post.mainImage).url()} 
                          alt={postTitle} 
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
                          {new Date(post.publishedAt).toLocaleDateString(lang === "tr" ? 'tr-TR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <div className="h-[1px] flex-1 bg-white/10"></div>
                      </div>
                      
                      <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-black uppercase tracking-tight text-white group-hover:text-[#C9A227] transition-colors duration-300 line-clamp-2 leading-tight mb-4">
                        {postTitle}
                      </h3>
                      
                      <p className="text-sm text-white/50 line-clamp-2 leading-relaxed font-light mb-6">
                        {postExcerpt}
                      </p>
                      
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#C9A227] flex items-center gap-2">
                        {dict.home.readArticle} <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
             <div className="p-12 border border-white/10 text-center text-white/40 font-bold uppercase tracking-widest text-xs bg-white/5">
                {dict.home.emptyBlog}
             </div>
          )}
        </div>
      </section>

      {/* 6. SIKÇA SORULAN SORULAR */}
      <section className="py-16 px-6 lg:px-12 bg-[#F8F8F8] border-t border-[#0B2341]/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">{dict.home.faqPreTitle}</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl font-black uppercase tracking-tight text-[#0B2341]">{dict.home.faqTitle1} <span className="opacity-20">{dict.home.faqTitle2}</span></h2>
          </div>

          <div className="space-y-4 divide-y divide-[#0B2341]/10">
            {faqs.map((faq, index) => (
              <details key={index} className="group pb-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between cursor-pointer list-none pt-6 text-lg font-bold font-[family-name:var(--font-montserrat)] text-[#0B2341] hover:text-[#C9A227] transition-colors uppercase tracking-tight">
                  <span>{faq.q}</span>
                  <span className="transition-transform duration-300 group-open:rotate-180 text-[#C9A227] text-xl">↓</span>
                </summary>
                <p className="text-[#0B2341]/70 text-sm leading-relaxed pt-4 font-light max-w-3xl">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 7. İLETİŞİM FORMU */}
      <section id="quick-contact" className="py-16 px-6 lg:px-12 bg-[#0B2341] text-white border-t-8 border-[#C9A227]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-3">{dict.home.contactPreTitle}</p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">{dict.home.contactTitle1} <span className="text-white/20">{dict.home.contactTitle2}</span></h2>
            </div>
            <p className="text-white/70 leading-relaxed max-w-sm font-light">
              {dict.home.contactDesc}
            </p>
            <div className="flex gap-12 border-t border-white/10 pt-8 text-xs font-bold uppercase tracking-wider">
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">{dict.home.turkeyHq}</span>
                <span className="text-[#C9A227]">{dict.home.cityTurkey}</span>
              </div>
              <div>
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40 mb-2">{dict.home.usaBranch}</span>
                <span className="text-[#C9A227]">{dict.home.cityUsa}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
          <HomeContactForm lang={lang} />
          </div>

        </div>
      </section>

    </main>
  );
}