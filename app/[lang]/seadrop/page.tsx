import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../../dictionaries/get-dictionary"; 

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' } }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  return {
    title: lang === "tr" ? "Sea Drop Travel | Özel Efes Turları & Liman Gezileri" : "Sea Drop Travel | Private Ephesus Tours & Shore Excursions",
    description: lang === "tr" 
      ? "Sea Drop Travel, Kuşadası ve Ege bölgesinde premium özel liman gezileri, Efes turları ve kişiselleştirilmiş seyahat deneyimleri sunmaktadır." 
      : "Sea Drop Travel offers premium private shore excursions, Ephesus tours, and customized travel experiences in Kusadasi and the Aegean region.",
  };
}

export default async function SeaDropPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const dict = await getDictionary(lang as "en" | "tr");

  // ==========================================
  // İÇERİK VERİLERİ (Dil Destekli Inline)
  // ==========================================
  const whyChooseUs = lang === 'tr' ? [
    "30+ Yıllık Deneyim", "Lisanslı Profesyonel Rehberler", "Gemiye Dönüş Garantisi", 
    "Binlerce Mutlu Misafir", "Özel & VIP Turlar", "Yerel Aile Şirketi", "Gizli Ücret Yok"
  ] : [
    "30+ Years of Experience", "Licensed Professional Guides", "Cruise Ship Return Guarantee", 
    "Thousands of Happy Guests", "Private & VIP Tours", "Local Family Business", "No Hidden Costs"
  ];

  const trustBadges = lang === 'tr' ? [
    "Lisanslı Acente", "TÜRSAB Üyesi", "Güvenli Ödeme", "Gemiye Dönüş Garantisi", 
    "Yerel Uzmanlar", "Aile Şirketi", "30+ Yıl Deneyim"
  ] : [
    "Licensed Agency", "TÜRSAB Member", "Secure Payments", "Cruise Ship Return Guarantee", 
    "Local Experts", "Family Business", "30+ Years Exp."
  ];

  const videoFeatures = lang === 'tr' ? [
    "Profesyonel Rehberinizle Tanışın", "Liman Buluşma Noktası", "Gemiye Dönüş Garantisi", 
    "Kişiselleştirilmiş Özel Turlar", "En Çok Satan Turlar", "Sıkça Sorulan Sorular"
  ] : [
    "Meet Your Professional Guide", "Cruise Port Meeting Point", "Cruise Ship Return Guarantee", 
    "Private Tours", "Best Selling Tours", "FAQ"
  ];

  const featuredTours = [
    { title: "Ephesus Tours", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-ephesus-tours-turkish-bath-from-kusadasi-cruise-port-with-lunch" },
    { title: "Kusadasi Shore Excursions", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-ephesus-miletus-didyma-tour-from-kusadasi-port" },
    { title: "Biblical Ephesus Tours", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-ephesus-and-sirince-village-tour-from-kusadasi-port-with-lunch" },
    { title: "Private Turkey Tours", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-ephesus-tour-and-caravanserai-from-kusadasi-port-with-lunch-licensed-guide" },
    { title: "Cruise Excursions Turkey", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-magnesia-virgin-mary-panoramic-ephesus-tour-from-kusadasi-port" },
    { title: "House of Virgin Mary Tours", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-magnesia-camlik-train-museum-turkish-bath-tour-from-kusadasi-port" },
    { title: "Kusadasi Cruise Port Guide", url: "https://www.seadroptravel.com/tour-detail.php?slug=private-ephesus-virgin-mary-tour-from-kusadasi-port-full-day-program" },
  ];

  const cruiseLines = [
    "Royal Caribbean", "Celebrity Cruises", "Princess Cruises", "Holland America Line", 
    "Norwegian Cruise Line", "MSC Cruises", "Viking Cruises", "Oceania Cruises", 
    "Azamara", "Costa Cruises", "Marella Cruises", "Windstar Cruises", 
    "Virgin Voyages", "Seabourn", "Scenic Luxury", "Explora Journeys", "Ritz-Carlton", "Celestyal", "AIDA", "Mein Schiff"
  ];

  const cruiseShips = [
    "AIDABLU", "AROYA", "AZURA", "BRILLIANCE OF THE SEAS", "CELEBRITY ASCENT", 
    "CELEBRITY EQUINOX", "CELEBRITY INFINITY", "CELEBRITY XCEL", "CELESTYAL DISCOVERY", 
    "CELESTYAL JOURNEY", "COSTA FORTUNA", "EMERALD AZZURRA", "ENCHANTED PRINCESS", 
    "EXPLORA II", "FOUR SEASONS I", "ILMA", "MARELLA DISCOVERY", "MARELLA VOYAGER", 
    "MEIN SCHIFF 5", "MS OOSTERDAM", "MSC DIVINA", "MSC FANTASIA", "NORWEGIAN VIVA", 
    "ODYSSEY OF THE SEAS", "SCARLET LADY", "SCENIC ECLIPSE II", "SEABOURN QUEST", 
    "SEVEN SEAS SPLENDOUR", "SUN PRINCESS", "VIKING SEA", "VIKING VESTA", "WIND SPIRIT"
  ];

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* ==========================================
          1. HERO BÖLÜMÜ (Kurumsal Grid Yapısı - seadrop1)
      ========================================== */}
      <section className="bg-[#0B2341] text-white pt-12 lg:pt-16 pb-24 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Sol Taraf: Metin */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="hidden sm:block w-12 h-[2px] bg-[#C9A227]"></span> 
              {dict.seadrop.heroPreTitle}
              <span className="hidden lg:hidden sm:block w-12 h-[2px] bg-[#C9A227]"></span> 
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1] mb-6">
              {dict.seadrop.heroTitle1} <span className="text-[#C9A227]">{dict.seadrop.heroTitle2}</span> <br />
              {dict.seadrop.heroTitle3}
            </h1>
            <p className="text-lg font-light text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed border-l-4 border-[#C9A227] pl-4 mb-8">
              {dict.seadrop.heroDesc}
            </p>
            <Link 
              href={`/${lang}/contact`} 
              className="inline-block px-10 py-4 bg-[#C9A227] text-[#0B2341] text-sm font-black uppercase tracking-[0.15em] hover:bg-white transition-colors"
            >
              {lang === 'tr' ? 'BİZE ULAŞIN' : 'CONTACT US'}
            </Link>
          </div>

          {/* Sağ Taraf: Görsel (seadrop1) */}
          <div className="w-full lg:w-[500px] xl:w-[600px] shrink-0 relative aspect-[4/3] border-4 border-[#C9A227] shadow-2xl bg-[#0F2D5C]">
            <Image 
              src="/seadrop1.jpeg" 
              alt="Sea Drop Travel Kusadasi" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* GÜVEN ROZETLERİ */}
      <div className="bg-[#C9A227] py-4 border-b-4 border-[#0B2341]">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-center gap-4 sm:gap-8">
          {trustBadges.map((badge, idx) => (
            <span key={idx} className="text-[#0B2341] font-black uppercase tracking-widest text-[10px] sm:text-xs flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#0B2341]"></span> {badge}
            </span>
          ))}
        </div>
      </div>

      {/* ==========================================
          2. NEDEN BİZ & DENEYİM (seadrop2, seadrop3)
      ========================================== */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Sol: Metin ve Liste */}
            <div>
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                {lang === 'tr' ? 'Kalite ve Güven' : 'Quality & Trust'}
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
                {dict.seadrop.expTitle1} <span className="text-[#C9A227]">{dict.seadrop.expTitle2}</span>
              </h2>
              <p className="text-[#0B2341]/80 leading-relaxed mb-6 font-medium">
                {dict.seadrop.expDesc1}
              </p>
              <p className="text-[#0B2341]/70 leading-relaxed mb-8">
                {dict.seadrop.expDesc2}
              </p>
              
              <div className="bg-[#F8F8F8] p-6 border-l-4 border-[#C9A227] mb-8">
                <span className="block text-4xl font-black text-[#0B2341] mb-1">30+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#0B2341]/60">
                  {lang === 'tr' ? 'YILLIK SEKTÖR DENEYİMİ' : 'YEARS OF INDUSTRY EXPERIENCE'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white border border-[#0B2341]/10 p-3">
                    <span className="flex-shrink-0 w-4 h-4 bg-[#C9A227] text-[#0B2341] flex items-center justify-center text-[10px] font-black">✓</span>
                    <span className="font-bold text-[#0B2341]/80 text-xs uppercase tracking-wider">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Sağ: İki Fotoğraflı Grid */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative aspect-[3/4] border-2 border-[#0B2341]/10">
                <Image src="/seadrop2.jpeg" alt="Sea Drop Experience" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] border-2 border-[#0B2341]/10 mt-12">
                <Image src="/seadrop3.jpeg" alt="VIP Tours" fill sizes="(max-width: 1024px) 100vw, 50vw" priority className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          3. VİDEO VE BULUŞMA (seadrop4)
      ========================================== */}
      <section className="py-24 px-6 lg:px-12 bg-[#F8F8F8]">
        <div className="max-w-[1200px] mx-auto bg-white shadow-sm border border-[#0B2341]/5">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Sol: Metin Alanı */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
                {lang === 'tr' ? 'Kruvaziyer İniş Sayfası' : 'Cruise Ship Landing Pages'}
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
                {lang === 'tr' ? 'KRUVAZİYER MİSAFİRLERİNE HOŞ GELDİNİZ' : 'WELCOME CRUISE GUESTS'}
              </h2>
              <p className="text-[#0B2341]/70 leading-relaxed mb-8">
                {lang === 'tr' 
                  ? "Kuşadası Limanı'na varışınızdan itibaren, özel rehberiniz sizi karşılar. Gemiye zamanında dönüş garantisi ile stressiz, size özel bir Efes deneyimine hazır olun." 
                  : "From your arrival at Kusadasi Port, your private guide will welcome you. Get ready for a stress-free, personalized Ephesus experience with a 100% on-time return guarantee."}
              </p>

              <div className="space-y-3 mb-8">
                {videoFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-[#0B2341] font-bold text-xs uppercase tracking-widest border-b border-[#0B2341]/5 pb-2">
                    <span className="text-[#C9A227]">✦</span>
                    {feature}
                  </div>
                ))}
              </div>
              
              <a href="https://www.seadroptravel.com/" target="_blank" rel="noopener noreferrer" className="inline-block text-[#0B2341] font-black uppercase tracking-[0.1em] hover:text-[#C9A227] transition-colors text-sm underline underline-offset-4">
                www.seadroptravel.com &rarr;
              </a>
            </div>

            {/* Sağ: Görsel ve Video */}
            <div className="bg-[#0B2341] p-6 lg:p-8 flex flex-col gap-6 relative">
              <div className="relative aspect-[16/9] w-full border-2 border-[#C9A227]">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/SKVM1DliWNk" 
                  title="Cruise Port Meeting Point Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="relative h-48 sm:h-64 w-full border border-white/20">
                <Image src="/seadrop4.jpeg" alt="Meeting Point" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          4. ÖNE ÇIKAN TURLAR (seadrop5)
      ========================================== */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center md:text-left mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-2">
                {lang === 'tr' ? 'Seçilmiş Portföy' : 'Curated Portfolio'}
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341]">
                {lang === 'tr' ? 'ÖNE ÇIKAN TURLAR' : 'FEATURED TOURS'}
              </h2>
            </div>
            <a href="https://www.seadroptravel.com/" target="_blank" rel="noopener noreferrer" className="hidden md:block text-xs font-bold uppercase tracking-[0.2em] text-[#0B2341] bg-[#F8F8F8] px-6 py-3 border border-[#0B2341]/10 hover:bg-[#C9A227] hover:text-white transition-colors">
              {lang === 'tr' ? 'TÜM TURLARI GÖR' : 'VIEW ALL TOURS'}
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Sol Görsel (seadrop5) */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full border border-[#0B2341]/10 p-2 bg-[#F8F8F8]">
              <div className="relative w-full h-full aspect-square lg:aspect-auto">
                <Image src="/seadrop5.jpeg" alt="Featured Tours" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>

            {/* Sağ Menü Listesi */}
            <div className="lg:col-span-7 bg-[#0B2341] p-6 sm:p-10 text-white">
              <div className="flex flex-col gap-2">
                {featuredTours.map((tour, idx) => (
                  <a 
                    key={idx} 
                    href={tour.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group block py-4 px-4 bg-white/5 border border-white/10 hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-[family-name:var(--font-montserrat)] text-sm sm:text-base font-bold uppercase tracking-tight text-white group-hover:text-[#0B2341] transition-colors">
                        {tour.title}
                      </span>
                      <span className="text-[#C9A227] group-hover:text-[#0B2341] font-bold transition-colors">&rarr;</span>
                    </div>
                  </a>
                ))}
              </div>
              <a href="https://www.seadroptravel.com/" target="_blank" rel="noopener noreferrer" className="md:hidden block text-center mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors">
                {lang === 'tr' ? 'TÜM TURLARI GÖR' : 'VIEW ALL TOURS'} &rarr;
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          5. HİZMET VERİLEN GEMİLER
      ========================================== */}
      <section className="py-24 px-6 lg:px-12 bg-[#0B2341] text-white border-t-4 border-[#C9A227]">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
              {lang === 'tr' ? 'HİZMET VERDİĞİMİZ' : 'CRUISE SHIPS'} <span className="text-[#C9A227]">{lang === 'tr' ? 'GEMİLER' : 'WE SERVE'}</span>
            </h2>
            <div className="w-16 h-1 bg-[#C9A227] mx-auto"></div>
          </div>

          <div className="mb-16 bg-white/5 p-8 border border-white/10">
            <h3 className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-8 text-center">{lang === 'tr' ? 'KRUVAZİYER ŞİRKETLERİ' : 'CRUISE LINES'}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cruiseLines.map((line, idx) => (
                <span key={idx} className="px-4 py-2 bg-transparent border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest hover:border-[#C9A227] hover:text-[#C9A227] transition-colors cursor-default">
                  {line}
                </span>
              ))}
            </div>
          </div>

          <div className="px-4">
            <h3 className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs mb-8 text-center">{lang === 'tr' ? 'GEMİ LİSTESİ' : 'SHIP LIST'}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-2 text-center">
              {cruiseShips.map((ship, idx) => (
                <span key={idx} className="text-white/60 font-medium text-[10px] sm:text-xs uppercase tracking-widest cursor-default">
                  • {ship}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          6. TRIPADVISOR & CTA (seadrop6)
      ========================================== */}
      <section className="relative py-24 px-6 lg:px-12 text-center overflow-hidden">
        
        {/* Arka plan görseli - Karartılmış */}
        <div className="absolute inset-0 z-0">
          <Image src="/seadrop6.jpeg" alt="Sea Drop CTA" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#0B2341]/90"></div>
        </div>

        <div className="max-w-[800px] mx-auto relative z-10 text-white">
          <a href="https://www.tripadvisor.com/Attraction_Review-g297972-d33412323-Reviews-SeaDrop_Travel-Kusadasi_Turkish_Aegean_Coast.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 bg-[#00AA6C] text-white px-8 py-3 font-bold uppercase tracking-widest text-xs mb-12 hover:bg-[#008A58] transition-colors shadow-lg">
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M178.6 357.7c-5.8 4.6-14.7 4.6-20.5 0L19.4 249.2c-7-5.5-7-15.9 0-21.4l138.7-108.6c5.8-4.6 14.7-4.6 20.5 0l138.7 108.6c7 5.5 7 15.9 0 21.4L178.6 357.7zM168 131.5v-79c0-11-9-20-20-20H63.8c-7.9 0-14.9 4.6-18.1 11.9S44.6 59 50.2 64.6l31.1 31.1-70 54.8C4.1 156.1 0 165 0 174.5v115.1C0 300.6 9 309.5 20 309.5h336c11 0 20-9 20-20V174.5c0-9.5-4.1-18.4-11.3-24l-70-54.8 31.1-31.1c5.6-5.6 6.8-14 3.7-21.3s-10.2-11.9-18.1-11.9H168z"></path></svg>
            TripAdvisor
          </a>

          <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            {dict.seadrop.ctaPreTitle}
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-8">
            {dict.seadrop.ctaTitle}
          </h2>
          <p className="text-white/70 mb-10 leading-relaxed max-w-xl mx-auto">
            {dict.seadrop.ctaDesc}
          </p>
          <Link 
            href={`/${lang}/contact`} 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A227] text-[#0B2341] text-sm font-black uppercase tracking-[0.15em] hover:bg-white transition-colors"
          >
            {dict.seadrop.ctaBtn} 
          </Link>
          <p className="mt-8 text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">
            {dict.seadrop.ctaFooter}
          </p>
        </div>
      </section>

      {/* ==========================================
          7. SABİT WHATSAPP BUTONU
      ========================================== */}
      <a 
        href="https://wa.me/905324914162" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:bg-[#128C7E] transition-all duration-300"
        aria-label="Contact us on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 fill-current relative z-10">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

    </main>
  );
}