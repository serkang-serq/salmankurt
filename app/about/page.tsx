import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Salman Kurt | Founder of Sea Drop Travel",
  description: "Meet Salman Kurt, founder of Sea Drop Travel. Over 20 years of experience in Kusadasi, Ephesus tours, and US real estate investments.",
};

export default function AboutPage() {
  const destinations = [
    "Ephesus Ancient City", "House of Virgin Mary", "Temple of Artemis", 
    "Basilica of Saint John", "Seven Sleepers", "Sirince Village", 
    "Kusadasi Cruise Port", "Turkish Bath Experiences"
  ];

  const guarantees = [
    "Personalized Service", "Small Group Experiences", "Private Tours",
    "Christian Heritage Tours", "Family-Friendly Excursions", "Licensed Professional Guides",
    "Comfortable Transportation", "Honest Local Advice", "Cruise Ship Return Guarantee"
  ];

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Meet the Founder Behind Sea Drop Travel
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#0B2341]">
              About <br />
              <span className="text-[#0B2341]/30">Salman Kurt.</span>
            </h1>
            <div className="h-1 w-24 bg-[#C9A227] mt-8"></div>
          </div>

          <div className="flex-1 w-full relative">
            {/* 
              LÜKS KART SARICISI (WRAPPER) 
              Dış gölge (Shadow) standartta Lacivert, Hover'da Altın Sarısı 
            */}
            <div className="aspect-[4/5] md:aspect-square w-full max-w-[500px] ml-auto relative bg-[#0B2341] overflow-hidden group cursor-default shadow-[0_30px_60px_-15px_rgba(11,35,65,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(201,162,39,0.3)] transition-shadow duration-[1500ms]">
              
              <Image 
                src="/portraitframe.png" 
                alt="Salman Kurt" 
                fill 
                priority
                className="object-cover object-top transition-transform duration-[1500ms] group-hover:scale-105"
              />
              
              {/* 
                İÇTEN ALTTAN VURAN GLOW (SİS) EFEKTİ 
                Standartta Lacivert (from-[#0B2341]), Hover'da Altın Sarısı (group-hover:from-[#C9A227])
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341] via-[#0B2341]/0 to-transparent opacity-80 group-hover:from-[#C9A227] group-hover:opacity-60 transition-all duration-[1500ms] pointer-events-none z-10"></div>
              
              {/* İnce İç Çerçeve Efekti */}
              <div className="absolute inset-4 border border-[#C9A227]/20 pointer-events-none z-20 transition-all duration-[1500ms] group-hover:border-[#C9A227]/50"></div>
            
            </div>
            
            {/* Arkadaki sabit altın sarısı kare */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A227] -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 2. İÇERİK BÖLÜMÜ - PREMIUM EDİTÖR YAPI GERİ GELDİ */}
      <section className="py-16 px-6 lg:px-12 border-t border-[#0B2341]/5 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SOL YAN MENÜ (STICKY SIDEBAR) */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 lg:h-fit">
            
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold uppercase tracking-tight mb-4 text-[#0B2341]">
                Specialties
              </h3>
              <ul className="space-y-4 text-xs font-bold tracking-[0.1em] text-[#0B2341]/70 uppercase">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> Shore Excursions</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> Cruise Passenger Services</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> Private & Family Tours</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> Christian Heritage Tours</li>
              </ul>
            </div>

            <div className="p-8 bg-[#0B2341] text-white border-l-4 border-[#C9A227] shadow-lg">
              <p className="text-lg font-light leading-relaxed italic text-white/90">
                "Tourism is not just my profession—it is my passion."
              </p>
            </div>

            <div className="bg-white p-6 border border-[#0B2341]/10 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] block mb-4">International Presence</span>
              <div className="space-y-4">
                <div className="border-b border-[#0B2341]/5 pb-3">
                  <strong className="block text-[#0B2341] text-sm font-bold uppercase tracking-wide">Türkiye Office</strong>
                  <span className="text-xs text-[#0B2341]/70">Kusadasi (Heart of Cruise Tourism)</span>
                </div>
                <div>
                  <strong className="block text-[#0B2341] text-sm font-bold uppercase tracking-wide">USA Presence</strong>
                  <span className="text-xs text-[#0B2341]/70">Jacksonville, Florida</span>
                </div>
              </div>
            </div>

          </div>

          {/* SAĞ ANA İÇERİK METNİ - BÜYÜK FONT, FERAH SATIR ARALIĞI, ŞIK BAŞLIKLAR */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              
              <p className="text-2xl md:text-3xl font-medium text-[#0B2341] leading-[1.6] mb-8 font-[family-name:var(--font-montserrat)]">
                Hello and welcome to Sea Drop Travel. My name is <strong className="font-black text-[#0B2341]">Salman Kurt</strong>, founder and owner of Sea Drop Travel. 
              </p>
              
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                For more than 20 years, I have been helping travelers discover the beauty, history, culture, and hospitality of Turkey. Today, Sea Drop Travel proudly serves cruise passengers, independent travelers, families, Christian pilgrims, and private groups visiting Kusadasi, Ephesus, the House of Virgin Mary, and many other remarkable destinations throughout Turkey.
              </p>

              <div className="my-6 h-[1px] w-full bg-[#0B2341]/10"></div>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">More Than 20 Years of Tourism Experience</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                For over two decades, I have worked directly with international travelers, helping visitors create unforgettable memories while exploring Turkey's most famous destinations. This deep experience allows me to understand exactly what international travelers expect from a professional tour operator.
              </p>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">Kusadasi and Ephesus Specialist</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                As a local tourism professional based in Kusadasi, I have spent years introducing visitors to one of the world's most extraordinary archaeological treasures—Ephesus Ancient City. I personally believe Ephesus is one of the greatest ancient cities ever built.
              </p>
              
              {/* Şık Destinasyon Grid Yapısı (Çakışma Yapmayan Tasarım) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-[#0B2341]/10 hover:border-[#C9A227] hover:shadow-md transition-all duration-300 group">
                    <span className="w-2 h-2 bg-[#C9A227] rounded-full shrink-0 group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm font-bold text-[#0B2341] uppercase tracking-wide">{dest}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-10 mb-6">Cruise Passenger Expert</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                Sea Drop Travel specializes in serving cruise passengers arriving in Kusadasi. Every year, we welcome guests from leading cruise lines including <strong className="font-bold text-[#0B2341]">Royal Caribbean, Celebrity Cruises, Princess Cruises, Holland America Line, Viking Cruises, Norwegian Cruise Line,</strong> and <strong className="font-bold text-[#0B2341]">MSC Cruises</strong>. Our team understands the unique needs of cruise travelers, and this commitment has helped us earn excellent reviews from guests around the world.
              </p>

              {/* Checkmark (Neden Biz) Yapısı */}
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-8">Why Travelers Choose Sea Drop Travel</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-[#C9A227] font-black text-lg leading-none shrink-0 mt-1">✓</span>
                    <span className="text-[#0B2341]/90 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">Supporting Local Communities & Our Mission</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-6">
                One of our goals is to support local families, artisans, restaurants, and small businesses throughout the Kusadasi region. Through our tours, visitors have the opportunity to experience authentic Turkish culture—from Turkish carpet weaving and local cuisine to traditional hospitality—while helping preserve local traditions and craftsmanship.
              </p>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                At Sea Drop Travel, our mission is simple: <strong className="font-black text-[#0B2341]">To provide every guest with an unforgettable experience while showcasing the rich history, culture, and hospitality of Turkey.</strong> Whether you are visiting Ephesus, the House of Virgin Mary, Sirince Village, or simply exploring Kusadasi, our goal is to make your day special.
              </p>

              {/* SIKÇA SORULAN SORULAR (FAQ) */}
              <div className="pt-12 border-t border-[#0B2341]/10 mt-6">
                <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-10">Frequently Asked Questions</h2>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-montserrat)] tracking-tight">Who is Salman Kurt?</h4>
                    <p className="text-lg text-[#0B2341]/70 leading-relaxed font-light">Salman Kurt is the founder and owner of Sea Drop Travel, specializing in Ephesus Tours, Kusadasi Shore Excursions, and Christian Heritage Tours.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-montserrat)] tracking-tight">How many years of experience does Salman Kurt have?</h4>
                    <p className="text-lg text-[#0B2341]/70 leading-relaxed font-light">More than 20 years of tourism and hospitality experience.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-montserrat)] tracking-tight">What is Sea Drop Travel?</h4>
                    <p className="text-lg text-[#0B2341]/70 leading-relaxed font-light">Sea Drop Travel is a tour operator specializing in Ephesus Tours, House of Virgin Mary Tours, Private Tours, and Shore Excursions from Kusadasi Cruise Port.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-montserrat)] tracking-tight">Does Sea Drop Travel serve cruise passengers?</h4>
                    <p className="text-lg text-[#0B2341]/70 leading-relaxed font-light">Yes. Cruise passengers are one of our primary specialties.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-montserrat)] tracking-tight">Where is Sea Drop Travel located?</h4>
                    <p className="text-lg text-[#0B2341]/70 leading-relaxed font-light">Sea Drop Travel serves travelers in Kusadasi, Turkey and maintains business connections in Jacksonville, Florida, USA.</p>
                  </div>
                </div>
              </div>

              {/* LÜKS ÇAĞRI (CALL TO ACTION) BÖLÜMÜ */}
              <div className="mt-20 bg-white p-10 md:p-14 border border-[#0B2341]/10 shadow-[0_15px_50px_-15px_rgba(11,35,65,0.1)] text-center sm:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B2341]/5 rounded-bl-[150px] -z-0"></div>
                <div className="relative z-10">
                  <p className="text-2xl font-[family-name:var(--font-montserrat)] font-black uppercase tracking-tight mb-4 text-[#0B2341]">
                    Start Your Journey Today
                  </p>
                  <p className="text-lg text-[#0B2341]/70 mb-10 font-light leading-relaxed">
                    If you are planning a visit to Kusadasi, Ephesus, or Turkey's beautiful Aegean Coast, I would be honored to welcome you personally.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#C9A227] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#0B2341] hover:text-white hover:shadow-xl group"
                    >
                      Contact Directly 
                      <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                    </Link>
                    <a 
                      href="https://www.seadroptravel.com/tours.php" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-[#0B2341]/20 text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:border-[#0B2341]"
                    >
                      Browse Sea Drop Tours
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}