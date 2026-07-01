import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Florida Real Estate | Buy & Invest in Miami with Denizcan Kurt",
  description: "Invest in Miami real estate with Denizcan Kurt. Specializing in luxury homes, waterfront properties, and investment opportunities in South Florida.",
  keywords: ["Miami Real Estate", "Florida Real Estate", "Denizcan Kurt", "Buy Home in Miami", "Miami Beach Luxury Homes", "Waterfront Homes Miami"],
};

export default function FloridaRealEstatePage() {
  const propertyTypes = [
    "Homes for Sale in Miami", "Miami Beach Luxury Homes", "Waterfront Homes in Miami",
    "Condos for Sale in Miami", "New Construction Homes in Florida", "Investment Properties in Miami",
    "Vacation Homes in South Florida", "Downtown Miami Condos", "Brickell Luxury Condos",
    "Coral Gables Homes", "Sunny Isles Beach Condos", "Aventura Luxury Real Estate",
    "Fort Lauderdale Homes", "Boca Raton Luxury Properties", "Florida Investment Properties"
  ];

  const whyChooseUs = [
    "Personalized one-on-one service", "Expert knowledge of the Miami market",
    "Luxury home and waterfront specialist", "Investment property analysis",
    "Relocation assistance", "First-time homebuyer guidance",
    "International buyer support", "Professional negotiation skills",
    "Honest, transparent, and client-focused approach"
  ];

  const seoTags = [
    "Miami Homes for Sale", "Luxury Homes in Miami", "Waterfront Homes", 
    "Condos for Sale", "First-Time Home Buyers", "Investment Properties", "Relocation to Florida"
  ];

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
              Florida Real Estate
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[1] mb-6">
              Buy, Sell & <span className="text-[#C9A227]">Invest</span> <br />
              in Miami.
            </h1>
            <p className="text-base sm:text-lg font-light text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
              Looking to buy a home in Miami, invest in Florida real estate, or find the perfect luxury waterfront property? You're in the right place.
            </p>
          </div>

          <div className="w-full sm:w-[400px] bg-white p-8 text-[#0B2341] shadow-[0_30px_60px_-15px_rgba(11,35,65,0.5)] border-t-4 border-[#C9A227] relative z-20">
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#C9A227] mb-2">Lead Real Estate Professional</p>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight mb-6">Denizcan Kurt</h3>
            <p className="text-sm font-medium text-[#0B2341]/70 mb-8 border-b border-[#0B2341]/10 pb-6">
              Dedicated to helping homebuyers, investors, and international clients successfully navigate South Florida's dynamic real estate market.
            </p>
            <a href="tel:+13054907036" className="block w-full py-4 bg-[#0B2341] text-white text-center font-bold tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors duration-300">
              📞 +1 (305) 490-7036
            </a>
          </div>
        </div>
      </section>

      {/* 2. ÖNE ÇIKAN GÖRSELLER (FEATURED GALLERY) */}
      <section className="py-20 px-6 lg:px-12 bg-white border-b border-[#0B2341]/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341]">
                Featured <span className="text-[#C9A227]">Portfolios.</span>
              </h2>
              <p className="text-[#0B2341]/60 mt-2 font-medium">A glimpse into South Florida's finest properties.</p>
            </div>
            <Link href="/gallery" className="text-xs font-bold uppercase tracking-[0.15em] text-[#0B2341] border-b-2 border-[#C9A227] pb-1 hover:text-[#C9A227] transition-colors">
              View All Properties &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative aspect-[4/3] bg-[#F8F8F8] overflow-hidden border border-[#0B2341]/5 cursor-pointer">
                <div className="absolute inset-0 bg-[#0B2341]/10 group-hover:bg-[#0B2341]/40 transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#0B2341]/30 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase font-bold">Property Image {item}</span>
                </div>
                
                <div className="absolute bottom-6 left-6 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="bg-white text-[#0B2341] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">
                    Miami, FL
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PREMIUM PORTFOLIO LIST - Lüks ve İnteraktif Kart Yapısı */}
      <section className="py-24 px-6 lg:px-12 bg-[#F8F8F8]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
              Explore The <span className="text-[#C9A227]">Portfolio</span>
            </h2>
            <div className="h-1 w-24 bg-[#C9A227] mx-auto"></div>
          </div>

          {/* Premium Kart Grid Sistemi */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyTypes.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex items-center justify-between p-6 bg-white border border-[#0B2341]/5 hover:bg-[#0B2341] hover:border-[#0B2341] transition-all duration-500 cursor-pointer shadow-sm hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  {/* Nokta animasyonu */}
                  <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full group-hover:scale-150 transition-transform duration-500"></span>
                  <span className="font-semibold text-sm md:text-base text-[#0B2341] group-hover:text-white transition-colors duration-500">
                    {item}
                  </span>
                </div>
                {/* Ok kayma animasyonu */}
                <span className="text-[#C9A227] font-black opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 text-xl">
                  &rarr;
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white border-l-4 border-[#C9A227] max-w-4xl mx-auto shadow-sm">
             <p className="text-base md:text-lg text-[#0B2341]/80 leading-relaxed italic">
               "Denizcan Kurt provides professional guidance throughout every step of the buying or selling process. With extensive knowledge of the South Florida market, Denizcan works closely with first-time homebuyers, experienced investors, vacation home buyers, and international clients looking to invest in one of the fastest-growing real estate markets in the United States."
             </p>
          </div>
        </div>
      </section>

      {/* 4. WHY WORK WITH DENİZCAN KURT */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B2341] text-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              The Advantage
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
              Why Work With <br />
              <span className="text-[#C9A227]">Denizcan Kurt?</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8 mx-auto lg:mx-0 max-w-md">
              Whether you're looking for your dream home, a vacation property, or a high-return investment opportunity, Denizcan Kurt is committed to helping you make informed real estate decisions with confidence.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {whyChooseUs.map((reason, idx) => (
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

      {/* 5. FINAL CTA & İKİ RENKLİ SEO TAGS */}
      <section className="py-24 px-6 lg:px-12 bg-white text-center border-t border-[#0B2341]/5">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
            Take the Next Step.
          </h2>
          <p className="text-[#0B2341]/70 leading-relaxed mb-10 text-base md:text-lg">
            If you're ready to buy a house in Miami, sell your Florida property, or invest in South Florida real estate, contact Denizcan Kurt today and take the next step toward achieving your real estate goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-16">
            <a 
              href="tel:+13054907036" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A227] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white shadow-lg"
            >
              Call: +1 (305) 490-7036
            </a>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border-2 border-[#0B2341] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white"
            >
              Send a Message
            </Link>
          </div>

          {/* İki Renkli ve İnteraktif SEO Etiketleri */}
          <div className="flex flex-wrap justify-center gap-3">
            {seoTags.map((tag, idx) => (
              <span 
                key={idx} 
                className="px-4 py-2 bg-transparent text-[#0B2341] text-[10px] sm:text-xs font-bold uppercase tracking-widest border border-[#0B2341]/20 hover:border-[#0B2341] hover:bg-[#0B2341] hover:text-[#C9A227] transition-all duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}