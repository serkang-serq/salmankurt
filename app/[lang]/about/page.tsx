import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/dictionaries/get-dictionary";

// SEO Metadata ayarlarını da dile göre dinamik hale getiriyoruz
export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' } }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  return {
    title: lang === "tr" ? "Hakkında Salman Kurt | Sea Drop Travel Kurucusu" : "About Salman Kurt | Founder of Sea Drop Travel",
    description: lang === "tr" 
      ? "Sea Drop Travel'ın kurucusu Salman Kurt ile tanışın. Kuşadası, Efes turları ve ABD gayrimenkul yatırımlarında 20 yılı aşkın deneyim." 
      : "Meet Salman Kurt, founder of Sea Drop Travel. Over 20 years of experience in Kusadasi, Ephesus tours, and US real estate investments.",
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' };
}) {
  // 1. URL'den dili yakala ve doğru sözlüğü (JSON) çağır
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const dict = await getDictionary(lang as "en" | "tr");

  // 2. Destinasyonları dile göre ayarla
  const destinations = lang === "tr" ? [
    "Efes Antik Kenti", "Meryem Ana Evi", "Artemis Tapınağı", 
    "St. John Bazilikası", "Yedi Uyuyanlar", "Şirince Köyü", 
    "Kuşadası Kruvaziyer Limanı", "Türk Hamamı Deneyimleri"
  ] : [
    "Ephesus Ancient City", "House of Virgin Mary", "Temple of Artemis", 
    "Basilica of Saint John", "Seven Sleepers", "Sirince Village", 
    "Kusadasi Cruise Port", "Turkish Bath Experiences"
  ];

  // 3. Garantileri dile göre ayarla
  const guarantees = lang === "tr" ? [
    "Kişiselleştirilmiş Hizmet", "Küçük Grup Deneyimleri", "Özel Turlar",
    "Hıristiyan Mirası Turları", "Aile Dostu Geziler", "Lisanslı Profesyonel Rehberler",
    "Konforlu Ulaşım", "Dürüst Yerel Tavsiyeler", "Gemiye Dönüş Garantisi"
  ] : [
    "Personalized Service", "Small Group Experiences", "Private Tours",
    "Christian Heritage Tours", "Family-Friendly Excursions", "Licensed Professional Guides",
    "Comfortable Transportation", "Honest Local Advice", "Cruise Ship Return Guarantee"
  ];

  // 4. Sıkça Sorulan Soruları (FAQ) dile göre ayarla
  const faqs = lang === "tr" ? [
    { q: "Salman Kurt kimdir?", a: "Salman Kurt, Efes Turları, Kuşadası Liman Gezileri ve Hıristiyan Mirası Turları konusunda uzmanlaşmış Sea Drop Travel'ın kurucusu ve sahibidir." },
    { q: "Salman Kurt'un kaç yıllık deneyimi var?", a: "Turizm ve misafirperverlik sektöründe 20 yılı aşkın deneyime sahiptir." },
    { q: "Sea Drop Travel nedir?", a: "Sea Drop Travel; Efes Turları, Meryem Ana Evi Turları, Özel Turlar ve Kuşadası Kruvaziyer Limanı çıkışlı kara turlarında uzmanlaşmış bir tur operatörüdür." },
    { q: "Sea Drop Travel kruvaziyer yolcularına hizmet veriyor mu?", a: "Evet. Kruvaziyer yolcuları en temel uzmanlık alanlarımızdan biridir." },
    { q: "Sea Drop Travel nerede bulunuyor?", a: "Sea Drop Travel, Kuşadası/Türkiye'de gezginlere hizmet vermekte olup Jacksonville, Florida, ABD'de de iş bağlantılarını sürdürmektedir." }
  ] : [
    { q: "Who is Salman Kurt?", a: "Salman Kurt is the founder and owner of Sea Drop Travel, specializing in Ephesus Tours, Kusadasi Shore Excursions, and Christian Heritage Tours." },
    { q: "How many years of experience does Salman Kurt have?", a: "More than 20 years of tourism and hospitality experience." },
    { q: "What is Sea Drop Travel?", a: "Sea Drop Travel is a tour operator specializing in Ephesus Tours, House of Virgin Mary Tours, Private Tours, and Shore Excursions from Kusadasi Cruise Port." },
    { q: "Does Sea Drop Travel serve cruise passengers?", a: "Yes. Cruise passengers are one of our primary specialties." },
    { q: "Where is Sea Drop Travel located?", a: "Sea Drop Travel serves travelers in Kusadasi, Turkey and maintains business connections in Jacksonville, Florida, USA." }
  ];

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
              {dict.about.meetFounder}
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#0B2341]">
              {lang === "tr" ? "Hakkında" : "About"} <br />
              <span className="text-[#0B2341]/30">Salman Kurt.</span>
            </h1>
            <div className="h-1 w-24 bg-[#C9A227] mt-8"></div>
          </div>

          <div className="flex-1 w-full relative">
            <div className="aspect-[4/5] md:aspect-square w-full max-w-[500px] ml-auto relative bg-[#0B2341] overflow-hidden group cursor-default shadow-[0_30px_60px_-15px_rgba(11,35,65,0.5)] hover:shadow-[0_30px_60px_-15px_rgba(201,162,39,0.3)] transition-shadow duration-[1500ms]">
              <Image 
                src="/portraitframe.png" 
                alt="Salman Kurt" 
                fill 
                priority
                className="object-cover object-top transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341] via-[#0B2341]/0 to-transparent opacity-80 group-hover:from-[#C9A227] group-hover:opacity-60 transition-all duration-[1500ms] pointer-events-none z-10"></div>
              <div className="absolute inset-4 border border-[#C9A227]/20 pointer-events-none z-20 transition-all duration-[1500ms] group-hover:border-[#C9A227]/50"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C9A227] -z-10 hidden md:block"></div>
          </div>
        </div>
      </section>

      {/* 2. İÇERİK BÖLÜMÜ */}
      <section className="py-16 px-6 lg:px-12 border-t border-[#0B2341]/5 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* SOL YAN MENÜ (STICKY SIDEBAR) */}
          <div className="lg:col-span-4 space-y-10 lg:sticky lg:top-32 lg:h-fit">
            
            <div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold uppercase tracking-tight mb-4 text-[#0B2341]">
                {dict.about.specialties}
              </h3>
              <ul className="space-y-4 text-xs font-bold tracking-[0.1em] text-[#0B2341]/70 uppercase">
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> {lang === "tr" ? "Liman Gezileri" : "Shore Excursions"}</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> {lang === "tr" ? "Kruvaziyer Yolcu Hizmetleri" : "Cruise Passenger Services"}</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> {lang === "tr" ? "Özel & Aile Turları" : "Private & Family Tours"}</li>
                <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-[#C9A227] rounded-full shrink-0"></span> {lang === "tr" ? "Hıristiyan Mirası Turları" : "Christian Heritage Tours"}</li>
              </ul>
            </div>

            <div className="p-8 bg-[#0B2341] text-white border-l-4 border-[#C9A227] shadow-lg">
              <p className="text-lg font-light leading-relaxed italic text-white/90">
                "{dict.about.passionQuote}"
              </p>
            </div>

            <div className="bg-white p-6 border border-[#0B2341]/10 shadow-sm">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] block mb-4">{dict.about.internationalPresence}</span>
              <div className="space-y-4">
                <div className="border-b border-[#0B2341]/5 pb-3">
                  <strong className="block text-[#0B2341] text-sm font-bold uppercase tracking-wide">{dict.about.türkiyeOffice}</strong>
                  <span className="text-xs text-[#0B2341]/70">{dict.about.heartOfCruise}</span>
                </div>
                <div>
                  <strong className="block text-[#0B2341] text-sm font-bold uppercase tracking-wide">{dict.about.usaPresence}</strong>
                  <span className="text-xs text-[#0B2341]/70">{dict.about.florida}</span>
                </div>
              </div>
            </div>

          </div>

          {/* SAĞ ANA İÇERİK METNİ */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              
              <p className="text-2xl md:text-3xl font-medium text-[#0B2341] leading-[1.6] mb-8 font-[family-name:var(--font-montserrat)]">
                {dict.about.welcome} <strong className="font-black text-[#0B2341]">Salman Kurt</strong>, {lang === "tr" ? "Sea Drop Travel'ın kurucusu ve sahibiyim." : "founder and owner of Sea Drop Travel."}
              </p>
              
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                {lang === "tr" 
                  ? "20 yılı aşkın süredir gezginlerin Türkiye'nin güzelliğini, tarihini, kültürünü ve misafirperverliğini keşfetmelerine yardımcı oluyorum. Bugün Sea Drop Travel, Kuşadası, Efes, Meryem Ana Evi ve Türkiye'deki diğer olağanüstü destinasyonları ziyaret eden kruvaziyer yolcularına, bağımsız gezginlere, ailelere, Hıristiyan hacılara ve özel gruplara gururla hizmet vermektedir." 
                  : "For more than 20 years, I have been helping travelers discover the beauty, history, culture, and hospitality of Turkey. Today, Sea Drop Travel proudly serves cruise passengers, independent travelers, families, Christian pilgrims, and private groups visiting Kusadasi, Ephesus, the House of Virgin Mary, and many other remarkable destinations throughout Turkey."}
              </p>

              <div className="my-6 h-[1px] w-full bg-[#0B2341]/10"></div>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">{dict.about.experienceTitle}</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                {lang === "tr"
                  ? "Yirmi yılı aşkın bir süredir uluslararası gezginlerle doğrudan çalışarak, ziyaretçilerin Türkiye'nin en ünlü destinasyonlarını keşfederken unutulmaz anılar biriktirmelerine yardımcı oluyorum. Bu derin deneyim, uluslararası gezginlerin profesyonel bir tur operatöründen tam olarak ne beklediğini anlamamı sağlıyor."
                  : "For over two decades, I have worked directly with international travelers, helping visitors create unforgettable memories while exploring Turkey's most famous destinations. This deep experience allows me to understand exactly what international travelers expect from a professional tour operator."}
              </p>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">{dict.about.specialistTitle}</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                {lang === "tr"
                  ? "Kuşadası merkezli yerel bir turizm profesyoneli olarak, yıllarımı ziyaretçilere dünyanın en olağanüstü arkeolojik hazinelerinden biri olan Efes Antik Kenti'ni tanıtmaya adadım. Şahsen Efes'in şimdiye kadar inşa edilmiş en büyük antik şehirlerden biri olduğuna inanıyorum."
                  : "As a local tourism professional based in Kusadasi, I have spent years introducing visitors to one of the world's most extraordinary archaeological treasures—Ephesus Ancient City. I personally believe Ephesus is one of the greatest ancient cities ever built."}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                {destinations.map((dest, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-5 bg-white border border-[#0B2341]/10 hover:border-[#C9A227] hover:shadow-md transition-all duration-300 group cursor-default">
                    <span className="w-2 h-2 bg-[#C9A227] rounded-full shrink-0 group-hover:scale-150 transition-transform"></span>
                    <span className="text-sm font-bold text-[#0B2341] uppercase tracking-wide">{dest}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-10 mb-6">{dict.about.expertTitle}</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                {lang === "tr"
                  ? "Sea Drop Travel, Kuşadası'na gelen kruvaziyer yolcularına hizmet verme konusunda uzmanlaşmıştır. Her yıl Royal Caribbean, Celebrity Cruises, Princess Cruises, Holland America Line, Viking Cruises, Norwegian Cruise Line ve MSC Cruises gibi önde gelen kruvaziyer hatlarından gelen misafirleri ağırlıyoruz. Ekibimiz kruvaziyer yolcularının benzersiz ihtiyaçlarını anlıyor ve bu bağlılık dünyanın dört bir yanındaki misafirlerden mükemmel yorumlar almamıza yardımcı oldu."
                  : "Sea Drop Travel specializes in serving cruise passengers arriving in Kusadasi. Every year, we welcome guests from leading cruise lines including Royal Caribbean, Celebrity Cruises, Princess Cruises, Holland America Line, Viking Cruises, Norwegian Cruise Line, and MSC Cruises. Our team understands the unique needs of cruise travelers, and this commitment has helped us earn excellent reviews from guests around the world."}
              </p>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-8">{dict.about.chooseTitle}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                {guarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <span className="text-[#C9A227] font-black text-lg leading-none shrink-0 mt-1">✓</span>
                    <span className="text-[#0B2341]/90 font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mt-12 mb-6">{dict.about.missionTitle}</h2>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-6">
                {lang === "tr"
                  ? "Hedeflerimizden biri, Kuşadası bölgesindeki yerel aileleri, zanaatkarları, restoranları ve küçük işletmeleri desteklemektir. Turlarımız aracılığıyla ziyaretçiler, yerel gelenekleri ve işçiliği korumaya yardımcı olurken otantik Türk kültürünü—Türk halı dokumacılığından yöresel mutfağa ve geleneksel misafirperverliğe kadar—deneyimleme fırsatı bulurlar."
                  : "One of our goals is to support local families, artisans, restaurants, and small businesses throughout the Kusadasi region. Through our tours, visitors have the opportunity to experience authentic Turkish culture—from Turkish carpet weaving and local cuisine to traditional hospitality—while helping preserve local traditions and craftsmanship."}
              </p>
              <p className="text-lg md:text-xl leading-[1.9] text-[#0B2341]/80 font-light mb-10">
                {lang === "tr"
                  ? <><strong className="font-black text-[#0B2341]">Sea Drop Travel olarak misyonumuz basittir:</strong> Türkiye'nin zengin tarihini, kültürünü ve misafirperverliğini sergilerken her misafirimize unutulmaz bir deneyim sunmak. İster Efes'i, ister Meryem Ana Evi'ni, ister Şirince Köyü'nü ziyaret edin, ister sadece Kuşadası'nı keşfedin; amacımız gününüzü özel kılmaktır.</>
                  : <>At Sea Drop Travel, our mission is simple: <strong className="font-black text-[#0B2341]">To provide every guest with an unforgettable experience while showcasing the rich history, culture, and hospitality of Turkey.</strong> Whether you are visiting Ephesus, the House of Virgin Mary, Sirince Village, or simply exploring Kusadasi, our goal is to make your day special.</>}
              </p>

              {/* SIKÇA SORULAN SORULAR (FAQ) */}
              <div className="pt-12 border-t border-[#0B2341]/10 mt-6">
                <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-10">{dict.about.faqTitle}</h2>
                <div className="space-y-10">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <h4 className="text-xl font-bold text-[#0B2341] mb-3 font-[family-name:var(--font-montserrat)] tracking-tight">{faq.q}</h4>
                      <p className="text-lg text-[#0B2341]/70 leading-relaxed font-light">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* LÜKS ÇAĞRI (CALL TO ACTION) BÖLÜMÜ */}
              <div className="mt-20 bg-white p-10 md:p-14 border border-[#0B2341]/10 shadow-[0_15px_50px_-15px_rgba(11,35,65,0.1)] text-center sm:text-left relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B2341]/5 rounded-bl-[150px] -z-0"></div>
                <div className="relative z-10">
                  <p className="text-2xl font-[family-name:var(--font-montserrat)] font-black uppercase tracking-tight mb-4 text-[#0B2341]">
                    {dict.about.ctaTitle}
                  </p>
                  <p className="text-lg text-[#0B2341]/70 mb-10 font-light leading-relaxed">
                    {dict.about.ctaText}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Link 
                      href={`/${lang}/contact`}
                      className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#C9A227] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#0B2341] hover:text-white hover:shadow-xl group"
                    >
                      {dict.about.contactDirectly} 
                      <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300">&rarr;</span>
                    </Link>
                    <a 
                      href="https://www.seadroptravel.com/tours.php" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent border-2 border-[#0B2341]/20 text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:border-[#0B2341]"
                    >
                      {dict.about.browseTours}
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