import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sea Drop Travel | Private Ephesus Tours & Shore Excursions",
  description: "Sea Drop Travel offers premium private shore excursions, Ephesus tours, and customized travel experiences in Kusadasi and the Aegean region.",
  keywords: ["Sea Drop Travel", "Ephesus Tours", "Kusadasi Private Tours", "Shore Excursions", "Virgin Mary House", "Turkey Travel", "Salman Kurt"],
};

export default function SeaDropPage() {
  // SEO değerini artırmak ve kodu temiz tutmak için lokasyonları bir diziye aldık
  const destinations = [
    { name: "Ancient City of Ephesus", tag: "Must See" },
    { name: "House of the Virgin Mary", tag: "Spiritual" },
    { name: "Basilica of St. John", tag: "Historical" },
    { name: "Temple of Artemis", tag: "Ancient Wonder" },
    { name: "Sirince Village", tag: "Authentic" },
    { name: "Turkish Bath Experiences", tag: "Wellness" },
    { name: "Pamukkale", tag: "Nature" },
    { name: "Miletus & Didyma", tag: "Archaeology" },
    { name: "Pergamon Ancient City", tag: "Heritage" },
  ];

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* 1. HERO BÖLÜMÜ - Etkileyici ve Lüks Giriş */}
      <section className="relative bg-[#0B2341] text-white pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
        {/* Arka plan dekoratif deseni */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#C9A227]"></span> 
            Premium Local Tour Operator
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            Where <span className="text-[#C9A227]">Unforgettable</span> <br />
            Journeys Begin.
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl leading-relaxed">
            Founded by Salman Kurt, Sea Drop Travel is a trusted local tour operator specializing in private shore excursions, Ephesus tours, and customized travel experiences throughout Türkiye's beautiful Aegean region.
          </p>
        </div>
      </section>

      {/* 2. THE MISSION & EXPERIENCE - Dinamik ve Güven Verici */}
      <section className="py-20 px-6 lg:px-12 relative -mt-10">
        <div className="max-w-[1200px] mx-auto bg-white p-8 md:p-16 shadow-[0_20px_50px_-15px_rgba(11,35,65,0.05)] border-t-4 border-[#C9A227]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
                30+ Years of <br />
                <span className="text-[#C9A227]">Excellence.</span>
              </h2>
              <p className="text-[#0B2341]/80 leading-relaxed mb-6 font-medium">
                With more than 30 years of experience in tourism and hospitality, our mission is simple: to provide every guest with exceptional service, authentic cultural experiences, and unforgettable memories.
              </p>
              <p className="text-[#0B2341]/70 leading-relaxed">
                Every year, we proudly welcome cruise passengers and independent travelers from around the world visiting <strong className="text-[#0B2341]">Kusadasi Cruise Port</strong>. Our experienced, licensed tour guides offer personalized tours to some of Türkiye's most iconic destinations.
              </p>
            </div>
            
            {/* Lüks Vurgu İstatistikleri */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F8F8F8] p-6 border border-[#0B2341]/5">
                <span className="block text-4xl font-black text-[#0B2341] mb-2">30+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227]">Years Exp.</span>
              </div>
              <div className="bg-[#F8F8F8] p-6 border border-[#0B2341]/5">
                <span className="block text-4xl font-black text-[#0B2341] mb-2">100%</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227]">Private Tours</span>
              </div>
              <div className="bg-[#0B2341] p-6 border border-[#C9A227]/30 col-span-2">
                <span className="block text-xl font-black text-white mb-2">Guaranteed</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227]">Timely Return to Ship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DESTINATIONS GRID - SEO ve Eğlence Bir Arada */}
      <section className="py-20 px-6 lg:px-12 bg-[#0B2341]">
        <div className="max-w-[1200px] mx-auto mb-16 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            Explore The <span className="text-[#C9A227]">Iconic.</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover the rich history and breathtaking landscapes of the Aegean region with our personalized itineraries.
          </p>
        </div>

        {/* Bento Box Tasarımı ile Eğlenceli Hover Efektleri */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <div 
              key={i} 
              className="group relative bg-white/5 border border-white/10 p-8 cursor-pointer hover:bg-[#C9A227] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Arkada gizli ikon/desen efekti */}
              <div className="absolute -right-6 -bottom-6 text-9xl text-white opacity-[0.02] font-black group-hover:scale-110 group-hover:opacity-[0.1] transition-all duration-500">
                0{i + 1}
              </div>
              
              <span className="inline-block px-3 py-1 bg-white/10 text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 group-hover:bg-[#0B2341] group-hover:text-white transition-colors">
                {dest.tag}
              </span>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold text-white group-hover:text-[#0B2341] transition-colors relative z-10">
                {dest.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE SEA DROP DIFFERENCE - Neden Biz? */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341]">
                The Sea Drop <br /> <span className="text-[#C9A227]">Difference.</span>
              </h2>
              
              <div className="prose prose-p:text-[#0B2341]/70 prose-p:leading-relaxed">
                <p>
                  At Sea Drop Travel, we believe every traveler deserves a private, flexible, and stress-free experience. Our tours are carefully designed to avoid crowds, maximize sightseeing time, and guarantee a timely return to your cruise ship.
                </p>
                <p>
                  We work with modern, air-conditioned vehicles, professional licensed guides, and experienced drivers to ensure the highest level of comfort, safety, and customer satisfaction.
                </p>
              </div>

              {/* Liste - Şık Tasarım */}
              <ul className="space-y-4">
                {[
                  "Skip-the-line access to historical sites",
                  "Modern, air-conditioned luxury vehicles",
                  "Licensed professional local guides",
                  "Flexible itineraries tailored to your pace"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-[#0B2341] font-bold text-sm uppercase tracking-wide">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A227] text-white flex items-center justify-center text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cultural Immersion Block */}
            <div className="bg-[#0B2341] p-10 md:p-14 text-white relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A227]"></div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight mb-6">
                Authentic Cultural Immersion
              </h3>
              <p className="text-white/80 leading-relaxed font-light mb-8">
                Beyond historical sites, we proudly introduce our guests to authentic Turkish culture by supporting local artisans, family-owned businesses, traditional carpet weaving, leather craftsmanship, jewelry making, and delicious regional cuisine.
              </p>
              <div className="text-sm font-bold uppercase tracking-[0.15em] text-[#C9A227]">
                Connect with the local heritage &rarr;
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION - Final Vuruşu */}
      <section className="py-24 bg-white border-t border-[#0B2341]/5 text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Outstanding Reviews Worldwide
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-8">
            Ready to Create an Unforgettable Journey?
          </h2>
          <p className="text-[#0B2341]/70 mb-10 leading-relaxed">
            Our commitment to honesty, reliability, and personalized service has earned us outstanding reviews from travelers worldwide. Whether you are looking for a private Ephesus shore excursion or a customized tour designed specifically for your interests, Sea Drop Travel is ready.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A227] text-[#0B2341] text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white shadow-[0_15px_30px_-10px_rgba(201,162,39,0.4)] group"
          >
            Book Your Private Tour 
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
          <p className="mt-8 text-xs font-bold text-[#0B2341]/40 uppercase tracking-widest">
            We look forward to welcoming you to Türkiye.
          </p>
        </div>
      </section>

    </main>
  );
}