import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const metadata = {
  title: "About Salman Kurt | Founder of Sea Drop Travel",
  description: "Meet Salman Kurt, founder of Sea Drop Travel. Over 20 years of experience in Kusadasi, Ephesus tours, and US real estate investments.",
};

// Sanity'den About Gallery verilerini çeken fonksiyon
async function getAboutGallery() {
  const query = `*[_type == "aboutGallery"] | order(order asc, _createdAt desc)`;
  return await client.fetch(query);
}

export default async function AboutPage() {
  const galleryImages = await getAboutGallery();

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
      
      {/* 1. HERO BÖLÜMÜ - Sinematik ve Minimalist */}
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
            <div className="aspect-[4/5] md:aspect-square w-full max-w-[500px] ml-auto relative bg-[#0B2341] shadow-[0_20px_50px_-15px_rgba(11,35,65,0.3)] overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center border border-[#C9A227]/20 m-4">
                <span className="text-[#C9A227] font-[family-name:var(--font-montserrat)] text-sm tracking-[0.3em] uppercase opacity-70">
                  Portrait Frame
                </span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A227] -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 2. İÇERİK BÖLÜMÜ - Dergi (Editorial) Tasarımı */}
      <section className="py-16 px-6 lg:px-12 border-t border-[#0B2341]/5 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SOL YAN MENÜ (STICKY SIDEBAR) */}
          <div className="lg:col-span-4 space-y-10 sticky top-32 h-fit">
            
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold uppercase tracking-tight mb-4">
                Specialties
              </h3>
              <ul className="space-y-4 text-xs font-bold tracking-[0.1em] text-[#0B2341]/70 uppercase">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span> Shore Excursions</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span> Cruise Passenger Services</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span> Private & Family Tours</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span> Christian Heritage Tours</li>
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

          {/* SAĞ ANA İÇERİK METNİ */}
          <div className="lg:col-span-8">
            <div className="prose prose-lg prose-headings:font-[family-name:var(--font-montserrat)] prose-p:text-[#0B2341]/80 prose-p:leading-relaxed max-w-none">
              
              <p className="text-2xl font-medium text-[#0B2341] mb-10 leading-snug">
                Hello and welcome to Sea Drop Travel. My name is <strong className="text-[#0B2341]">Salman Kurt</strong>, founder and owner of Sea Drop Travel. 
              </p>
              
              <p>
                For more than 20 years, I have been helping travelers discover the beauty, history, culture, and hospitality of Turkey. Today, Sea Drop Travel proudly serves cruise passengers, independent travelers, families, Christian pilgrims, and private groups visiting Kusadasi, Ephesus, the House of Virgin Mary, and many other remarkable destinations throughout Turkey.
              </p>

              <div className="my-10 h-[1px] w-full bg-[#0B2341]/10"></div>

              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-6">More Than 20 Years of Tourism Experience</h2>
              <p>
                For over two decades, I have worked directly with international travelers, helping visitors create unforgettable memories while exploring Turkey's most famous destinations. This deep experience allows me to understand exactly what international travelers expect from a professional tour operator.
              </p>

              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">Kusadasi and Ephesus Specialist</h2>
              <p>
                As a local tourism professional based in Kusadasi, I have spent years introducing visitors to one of the world's most extraordinary archaeological treasures—Ephesus Ancient City. I personally believe Ephesus is one of the greatest ancient cities ever built.
              </p>
              
              {/* Şık Destinasyon Grid Yapısı */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 mb-10">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-[#0B2341]/10 hover:border-[#C9A227] transition-colors">
                    <span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full"></span>
                    <span className="text-sm font-bold text-[#0B2341] uppercase tracking-wide">{dest}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">Cruise Passenger Expert</h2>
              <p>
                Sea Drop Travel specializes in serving cruise passengers arriving in Kusadasi. Every year, we welcome guests from leading cruise lines including <strong>Royal Caribbean, Celebrity Cruises, Princess Cruises, Holland America Line, Viking Cruises, Norwegian Cruise Line,</strong> and <strong>MSC Cruises</strong>. Our team understands the unique needs of cruise travelers, and this commitment has helped us earn excellent reviews from guests around the world.
              </p>

              {/* Lüks Checkmark (Neden Biz) Yapısı */}
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">Why Travelers Choose Sea Drop Travel</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#C9A227] font-bold mt-1">✓</span>
                    <span className="text-[#0B2341]/80 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">Supporting Local Communities & Our Mission</h2>
              <p>
                One of our goals is to support local families, artisans, restaurants, and small businesses throughout the Kusadasi region. Through our tours, visitors have the opportunity to experience authentic Turkish culture—from Turkish carpet weaving and local cuisine to traditional hospitality—while helping preserve local traditions and craftsmanship.
              </p>
              <p>
                At Sea Drop Travel, our mission is simple: <strong>To provide every guest with an unforgettable experience while showcasing the rich history, culture, and hospitality of Turkey.</strong> Whether you are visiting Ephesus, the House of Virgin Mary, Sirince Village, or simply exploring Kusadasi, our goal is to make your day special.
              </p>

              {/* SIKÇA SORULAN SORULAR (FAQ) BÖLÜMÜ */}
              <div className="mt-16 pt-12 border-t border-[#0B2341]/10">
                <h2 className="text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-8">Frequently Asked Questions</h2>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-lg font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-montserrat)]">Who is Salman Kurt?</h4>
                    <p className="text-sm text-[#0B2341]/70 m-0">Salman Kurt is the founder and owner of Sea Drop Travel, specializing in Ephesus Tours, Kusadasi Shore Excursions, and Christian Heritage Tours.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-montserrat)]">How many years of experience does Salman Kurt have?</h4>
                    <p className="text-sm text-[#0B2341]/70 m-0">More than 20 years of tourism and hospitality experience.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-montserrat)]">What is Sea Drop Travel?</h4>
                    <p className="text-sm text-[#0B2341]/70 m-0">Sea Drop Travel is a tour operator specializing in Ephesus Tours, House of Virgin Mary Tours, Private Tours, and Shore Excursions from Kusadasi Cruise Port.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-montserrat)]">Does Sea Drop Travel serve cruise passengers?</h4>
                    <p className="text-sm text-[#0B2341]/70 m-0">Yes. Cruise passengers are one of our primary specialties.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0B2341] mb-2 font-[family-name:var(--font-montserrat)]">Where is Sea Drop Travel located?</h4>
                    <p className="text-sm text-[#0B2341]/70 m-0">Sea Drop Travel serves travelers in Kusadasi, Turkey and maintains business connections in Jacksonville, Florida, USA.</p>
                  </div>
                </div>
              </div>

              {/* LÜKS ÇAĞRI (CALL TO ACTION) BÖLÜMÜ */}
              <div className="mt-16 bg-white p-8 md:p-12 border border-[#0B2341]/10 shadow-[0_10px_40px_-10px_rgba(11,35,65,0.05)] text-center sm:text-left">
                <p className="text-xl font-[family-name:var(--font-montserrat)] font-bold mb-4 text-[#0B2341]">
                  Start Your Journey Today
                </p>
                <p className="text-base text-[#0B2341]/70 mb-8">
                  If you are planning a visit to Kusadasi, Ephesus, or Turkey's beautiful Aegean Coast, I would be honored to welcome you personally.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A227] text-[#0B2341] text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white group"
                  >
                    Contact Directly 
                    <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </Link>
                  <a 
                    href="https://www.seadroptravel.com/tours.php" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#0B2341]/20 text-[#0B2341] text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 hover:border-[#0B2341]"
                  >
                    Browse Sea Drop Tours
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 3. PREMIUM SLIDING GALLERY (SANITY ENTEGRELİ) */}
      <section className="pt-24 bg-[#0B2341] overflow-hidden relative border-t-4 border-[#C9A227]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 mb-12 flex justify-between items-end">
          <div>
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Visual Story
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              Moments & <br />
              <span className="text-white/30">Milestones.</span>
            </h2>
          </div>
          
          <div className="hidden md:flex gap-4">
              <div className="w-12 h-12 border border-white/10 flex items-center justify-center text-white/30">&larr;</div>
              <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center text-[#C9A227]">&rarr;</div>
          </div>
        </div>

        <div className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory px-6 lg:px-12 pb-24 
          [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {galleryImages?.length > 0 ? (
            galleryImages.map((item: any) => (
              <div 
                key={item._id} 
                className="snap-center shrink-0 w-[280px] md:w-[380px] aspect-[4/5] relative bg-[#0F2D5C] group cursor-pointer border border-white/5 overflow-hidden"
              >
                {item.image?.asset && (
                  <Image 
                    src={urlFor(item.image).url()} 
                    alt={item.image.alt || item.title || "Salman Kurt Visual Story"} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}
                
                <div className="absolute inset-0 bg-[#0B2341]/0 group-hover:bg-[#0B2341]/60 transition-colors duration-500 border-[3px] border-transparent group-hover:border-[#C9A227]/50 z-10 flex items-end p-6">
                  {item.title && (
                    <span className="text-[#C9A227] opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.2em] uppercase font-bold">
                      {item.title}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="snap-center shrink-0 w-[280px] md:w-[380px] aspect-[4/5] relative bg-[#0F2D5C] border border-white/5 flex items-center justify-center">
               <span className="text-white/20 font-[family-name:var(--font-montserrat)] text-xs tracking-[0.3em] uppercase text-center px-4">
                  Awaiting <br/> Gallery Uploads
               </span>
            </div>
          )}

          <div className="snap-center shrink-0 w-6 md:w-12"></div>
        </div>
      </section>

    </main>
  );
}