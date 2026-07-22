import React from 'react';
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' } }) { 
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "tr"; 

  const meta = {
    tr: {
      title: "Kuşadası Mimarlık Ofisi | Erzadeoğlu Mimarlık İnşaat", 
      description: "Kuşadası merkezli Erzadeoğlu Mimarlık İnşaat; mimari proje, villa tasarımı ve akaryakıt istasyonu projelerinde profesyonel hizmet sunmaktadır."
    },
    en: {
      title: "Kusadasi Architecture Office | Erzadeoglu Architecture", 
      description: "Kusadasi-based Erzadeoglu Architecture provides professional services in architectural projects, villa design, and gas station construction."
    }
  };

  return meta[lang]; 
} 

export default async function ErzadeogluArchitecturePage({ 
  params, 
}: { 
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' }; 
}) { 
  const resolvedParams = await params; 
  const lang = resolvedParams?.lang || "tr"; 

  // ==========================================
  // METİN VERİLERİ (DİNAMİK ÇEVİRİ DESTEĞİ)
  // ==========================================
  const contactPhone = "+90 541 837 96 30";
  const contactPhoneClean = "+905418379630";

  const content = {
    tr: {
      headerBtn: "İLETİŞİME GEÇ",
      heroSuperTitle: "Kuşadası Mimarlık Ofisi",
      heroTitle1: "Erzadeoğlu Mimarlık",
      heroTitle2: "İnşaat",
      heroSubTitle: "Kuşadası'nda Profesyonel Mimarlık Hizmetleri",
      heroP1: "Bir yapı yalnızca beton, çelik ve tuğladan oluşmaz. Başarılı bir proje; doğru planlama, estetik tasarım, mühendislik bilgisi ve yasal süreçlerin eksiksiz yönetilmesiyle hayat bulur.",
      heroP2: "Erzadeoğlu Mimarlık İnşaat, Kuşadası merkezli mimarlık ofisi olarak konut projelerinden ticari yapılara, villa tasarımlarından akaryakıt istasyonlarının inşaat ve dönüşüm projelerine kadar geniş kapsamlı profesyonel mimarlık hizmetleri sunmaktadır.",
      heroP3: "Her projede önceliğimiz; estetik, güvenlik, fonksiyonellik ve uzun yıllar değerini koruyan yapılar üretmektir.",
      
      whyWorkWithUsTitle1: "Neden Profesyonel Bir",
      whyWorkWithUsTitle2: "Mimarla",
      whyWorkWithUsTitle3: "Çalışmalısınız?",
      whyWorkWithUsDesc: "Bir binanın doğru planlanması yalnızca güzel görünmesini sağlamaz.",
      whyWorkWithUsSubTitle: "Profesyonel mimarlık hizmeti sayesinde;",
      whyWorkWithUsList: [
        "Alan kaybı önlenir.",
        "İnşaat maliyetleri kontrol altına alınır.",
        "Deprem yönetmeliklerine uygun projeler hazırlanır.",
        "Belediye ruhsat süreçleri hızlanır.",
        "Enerji verimliliği artırılır.",
        "Yapının yatırım değeri yükselir.",
        "Yaşam konforu maksimum seviyeye çıkar."
      ],
      whyWorkWithUsFooter: "İyi hazırlanmış bir mimari proje, yıllarca kullanılacak bir yatırımın temelidir.",
      
      servicesSuperTitle: "Erzadeoğlu Mimarlık İnşaat'ın Hizmetleri",
      servicesTitle1: "KAPSAMLI",
      servicesTitle2: "MİMARİ ÇÖZÜMLER",
      serviceCategories: [
        {
          title: "Mimari Proje Tasarımı",
          desc: "Her arsa ve her müşteri farklıdır. Bu nedenle tüm projeler müşterinin ihtiyaçlarına özel olarak hazırlanır.",
          items: ["Mimari proje çizimi", "3D görselleştirme", "Konsept tasarım", "Uygulama projeleri", "Belediye ruhsat projeleri", "Tadilat projeleri", "Restorasyon projeleri", "İç mekân planlaması"]
        },
        {
          title: "Villa Projeleri",
          desc: "Kuşadası ve çevresi son yıllarda villa yatırımları açısından büyük önem kazanmıştır. Modern, Akdeniz, minimalist veya klasik mimari tarzlarda hazırlanan villa projelerimiz;",
          items: ["Doğal ışığı maksimum kullanır", "Enerji tasarrufu sağlar", "Ferah yaşam alanları oluşturur", "Manzaradan en iyi şekilde faydalanır", "Estetik ve fonksiyonelliği bir araya getirir"]
        },
        {
          title: "Konut Projeleri",
          desc: "Tek ailelik evlerden apartman projelerine kadar tüm konut projeleri özenle tasarlanmaktadır.",
          items: ["Deprem yönetmeliğine uygun", "Modern mimari anlayışla", "Kullanıcı ihtiyaçları dikkate alınarak tasarlanmaktadır"]
        },
        {
          title: "Tadilat ve Yenileme Projeleri",
          desc: "Eski yapıların modern yaşam ihtiyaçlarına uygun hale getirilmesi büyük uzmanlık ister.",
          items: ["Alan optimizasyonu", "Modern cephe tasarımları", "İç mekân yenilemeleri", "Mutfak ve banyo projeleri", "Ofis dönüşümleri", "Ticari alan yenilemeleri"]
        }
      ],
      
      gasStationSuperTitle: "Uzmanlık Alanımız",
      gasStationTitle: "Akaryakıt İstasyonu İnşaat ve Dönüşüm Projeleri",
      gasStationDesc: "Erzadeoğlu Mimarlık İnşaat'ın uzmanlık alanlarından biri de akaryakıt istasyonlarıdır. Sektöre özel teknik bilgi ve deneyim sayesinde projeler hem güvenlik standartlarına hem de ilgili mevzuata uygun şekilde hazırlanmaktadır.",
      gasStationSubTitle: "Sunulan Hizmetler:",
      gasStationServices: [
        "Yeni akaryakıt istasyonu projeleri", "İstasyon dönüşüm projeleri", "Market alanları",
        "İdari bina tasarımları", "Araç sirkülasyon planlaması", "Ruhsat projeleri", "Yenileme ve modernizasyon çalışmaları"
      ],

      qualityTitle: "Mimari Tasarımda Kalite Anlayışımız",
      qualityDesc: "Başarılı bir proje yalnızca güzel görünmekle kalmaz. Aynı zamanda;",
      qualityPoints: ["Güvenli", "Dayanıklı", "Ekonomik", "Fonksiyonel", "Çevre dostu", "Estetik"],
      qualityFooter: "Bu anlayış tüm projelerimizin temelini oluşturmaktadır.",
      
      selectionTitle: "Kuşadası'nda Mimarlık Hizmeti Alırken Nelere Dikkat Etmelisiniz?",
      selectionDesc: "Bir mimarlık ofisi seçerken şu kriterler önemlidir:",
      selectionCriteria: [
        "Deneyim", "Referans projeler", "Teknik bilgi", "Belediye süreçlerine hâkimiyet", 
        "Güncel yönetmelik bilgisi", "Güçlü iletişim", "Şeffaf çalışma sistemi", "Zamanında teslim"
      ],
      selectionFooter1: "Doğru ekip ile çalışmak hem",
      selectionFooter2: "zaman",
      selectionFooter3: "hem de",
      selectionFooter4: "maliyet",
      selectionFooter5: "açısından büyük avantaj sağlar.",

      faqTitle: "Sık Sorulan Sorular",
      faqs: [
        { q: "Mimari proje ne kadar sürer?", a: "Projenin büyüklüğüne göre süre değişmekle birlikte süreç ilk görüşmenin ardından planlanır." },
        { q: "Belediye ruhsat projeleri hazırlanıyor mu?", a: "Evet. Ruhsat süreçleri için gerekli mimari projeler hazırlanmakta ve ilgili prosedürlerde destek verilmektedir." },
        { q: "Sadece Kuşadası'nda mı hizmet veriyorsunuz?", a: "Hayır. İhtiyaca göre Aydın ve çevre illerde de proje hizmeti sunulmaktadır." },
        { q: "Akaryakıt istasyonu projeleri hazırlıyor musunuz?", a: "Evet. Yeni akaryakıt istasyonu projeleri, dönüşüm ve yenileme çalışmaları uzmanlık alanlarımız arasındadır." }
      ],

      contactP: "Hayalinizdeki yaşam alanlarını estetik, güvenli ve sürdürülebilir çözümlerle hayata geçirmek için profesyonel destek alabilirsiniz. Kaliteli mimari çözümler, modern tasarım anlayışı ve profesyonel proje yönetimiyle, yaşam alanlarınıza değer katıyoruz.",
      contactServiceAreasTitle: "Hizmet Alanlarımız",
      serviceAreasList: [
        "Mimari Proje", "Villa Tasarımı", "Konut Projeleri", "Akaryakıt İstasyonu İnşaat ve Dönüşüm",
        "Tadilat Projeleri", "3D Mimari Görselleştirme", "Ruhsat Projeleri", "İç Mekân Tasarımı"
      ],
      contactInfoTitle: "İletişim Bilgileri",
      contactAddress: "Camikebir Mahallesi Vahit Kutal Sokak No:1 Kat:1/1, Kuşadası / Aydın",
      contactArchitect: "Mimar: Bayram Ali Erzadeoğlu",
      contactBtn: "📱 WhatsApp / Telefon:"
    },
    en: {
      headerBtn: "CONTACT US",
      heroSuperTitle: "Kusadasi Architecture Office",
      heroTitle1: "Erzadeoglu Architecture",
      heroTitle2: "Construction",
      heroSubTitle: "Professional Architecture Services in Kusadasi",
      heroP1: "A building is not just made of concrete, steel, and brick. A successful project comes to life with proper planning, aesthetic design, engineering knowledge, and complete management of legal processes.",
      heroP2: "Erzadeoglu Architecture & Construction, as a Kusadasi-based architectural office, offers comprehensive professional architectural services ranging from residential projects to commercial buildings, from villa designs to the construction and transformation of gas stations.",
      heroP3: "Our priority in every project is to produce aesthetic, secure, and functional structures that maintain their value for many years.",
      
      whyWorkWithUsTitle1: "Why Work With a",
      whyWorkWithUsTitle2: "Professional Architect?",
      whyWorkWithUsTitle3: "",
      whyWorkWithUsDesc: "Proper planning of a building doesn't just make it look good.",
      whyWorkWithUsSubTitle: "Thanks to professional architectural services;",
      whyWorkWithUsList: [
        "Prevents space loss.",
        "Controls construction costs.",
        "Prepares projects compliant with earthquake regulations.",
        "Accelerates municipal licensing processes.",
        "Increases energy efficiency.",
        "Increases the investment value of the building.",
        "Maximizes living comfort."
      ],
      whyWorkWithUsFooter: "A well-prepared architectural project is the foundation of an investment that will be used for years.",
      
      servicesSuperTitle: "Services of Erzadeoglu Architecture",
      servicesTitle1: "COMPREHENSIVE",
      servicesTitle2: "ARCHITECTURAL SOLUTIONS",
      serviceCategories: [
        {
          title: "Architectural Project Design",
          desc: "Every plot and every client is different. Therefore, all projects are tailored specifically to the client's needs.",
          items: ["Architectural project drawing", "3D visualization", "Concept design", "Application projects", "Municipal license projects", "Renovation projects", "Restoration projects", "Interior planning"]
        },
        {
          title: "Villa Projects",
          desc: "Kusadasi and its surroundings have gained great importance in terms of villa investments in recent years. Our villa projects, designed in modern, Mediterranean, minimalist, or classic styles;",
          items: ["Maximize natural light", "Save energy", "Create spacious living areas", "Make the best use of the view", "Combine aesthetics and functionality"]
        },
        {
          title: "Residential Projects",
          desc: "All residential projects, from single-family homes to apartment complexes, are carefully designed.",
          items: ["Compliant with earthquake regulations", "With a modern architectural approach", "Designed considering user needs"]
        },
        {
          title: "Renovation and Restoration Projects",
          desc: "Adapting old structures to modern living needs requires great expertise.",
          items: ["Space optimization", "Modern facade designs", "Interior renovations", "Kitchen and bathroom projects", "Office transformations", "Commercial space renovations"]
        }
      ],
      
      gasStationSuperTitle: "Our Area of Expertise",
      gasStationTitle: "Gas Station Construction and Transformation Projects",
      gasStationDesc: "One of the areas of expertise of Erzadeoglu Architecture is gas stations. Thanks to sector-specific technical knowledge and experience, projects are prepared in accordance with both safety standards and relevant legislation.",
      gasStationSubTitle: "Services Offered:",
      gasStationServices: [
        "New gas station projects", "Station transformation projects", "Market areas",
        "Administrative building designs", "Vehicle circulation planning", "Licensing projects", "Renovation and modernization works"
      ],

      qualityTitle: "Our Quality Understanding in Architectural Design",
      qualityDesc: "A successful project is not only beautiful. It is also;",
      qualityPoints: ["Safe", "Durable", "Economical", "Functional", "Eco-friendly", "Aesthetic"],
      qualityFooter: "This understanding forms the basis of all our projects.",
      
      selectionTitle: "What Should You Consider When Getting Architecture Services in Kusadasi?",
      selectionDesc: "When choosing an architecture office, these criteria are important:",
      selectionCriteria: [
        "Experience", "Reference projects", "Technical knowledge", "Mastery of municipal processes", 
        "Up-to-date regulation knowledge", "Strong communication", "Transparent working system", "On-time delivery"
      ],
      selectionFooter1: "Working with the right team provides a great advantage in terms of both",
      selectionFooter2: "time",
      selectionFooter3: "and",
      selectionFooter4: "cost",
      selectionFooter5: ".",

      faqTitle: "Frequently Asked Questions",
      faqs: [
        { q: "How long does an architectural project take?", a: "Although the duration varies depending on the size of the project, the process is planned after the initial consultation." },
        { q: "Are municipal license projects prepared?", a: "Yes. Architectural projects required for licensing processes are prepared and support is provided in relevant procedures." },
        { q: "Do you only serve in Kusadasi?", a: "No. Project services are also provided in Aydin and surrounding provinces according to the needs." },
        { q: "Do you prepare gas station projects?", a: "Yes. New gas station projects, transformation, and renovation works are among our areas of expertise." }
      ],

      contactP: "You can get professional support to bring your dream living spaces to life with aesthetic, safe, and sustainable solutions. We add value to your living spaces with quality architectural solutions, a modern design approach, and professional project management.",
      contactServiceAreasTitle: "Our Service Areas",
      serviceAreasList: [
        "Architectural Project", "Villa Design", "Residential Projects", "Gas Station Construction & Transformation",
        "Renovation Projects", "3D Architectural Visualization", "Licensing Projects", "Interior Design"
      ],
      contactInfoTitle: "Contact Information",
      contactAddress: "Camikebir District Vahit Kutal Street No:1 Floor:1/1, Kusadasi / Aydin",
      contactArchitect: "Architect: Bayram Ali Erzadeoglu",
      contactBtn: "📱 WhatsApp / Phone:"
    }
  };

  const t = content[lang];

  return ( 
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341] font-[family-name:var(--font-geist-sans)]"> 

      {/* ==========================================
          HEADER: KURUMSAL & KÖŞELİ (Premium Dark)
      ========================================== */}
      <header className="bg-[#0B2341] border-b-2 border-[#C9A227] sticky top-0 z-50 shadow-xl">
        <div className="max-w-[1200px] mx-auto py-4 px-6 lg:px-12 flex justify-between items-center">
          
          {/* LOGO - BEYAZ GLOW EKLENDİ, HOVER'DA SARI OLACAK */}
          <div className="relative w-56 h-16 sm:w-64 sm:h-20 lg:w-72 lg:h-20 cursor-pointer transition-all duration-500 ease-out drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_25px_rgba(201,162,39,0.8)] hover:scale-105">
            <Image 
              src="/logoerza.png" 
              alt="Erzadeoğlu Mimarlık Logo" 
              fill 
              sizes="(max-width: 768px) 250px, 300px" 
              className="object-contain object-left" 
              priority 
            />
          </div>
          
          {/* SAĞ MENÜ/İLETİŞİM */}
          <div className="hidden md:flex items-center gap-8">
            <a href={`tel:${contactPhoneClean}`} className="text-white/90 font-bold text-sm tracking-[0.15em] hover:text-[#C9A227] transition-colors">
              {contactPhone}
            </a>
            <a 
              href={`https://wa.me/${contactPhoneClean.replace('+', '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#C9A227] text-[#0B2341] px-7 py-3 text-xs font-black uppercase tracking-widest hover:bg-white transition-colors duration-300"
            >
              {t.headerBtn}
            </a>
          </div>
        </div>
      </header>

      {/* ==========================================
          1. HERO BÖLÜMÜ (mimarlik1.png)
      ========================================== */} 
      <section className="relative bg-[#0B2341] text-white py-20 px-6 lg:px-12 overflow-hidden"> 
        <div className="absolute inset-0 z-0 opacity-10">
           <Image src="/mimarlik1.png" alt="Erzadeoğlu Mimarlık" fill sizes="100vw" className="object-cover" priority />
        </div>
        
        <div className="max-w-[1200px] mx-auto relative z-20 flex flex-col lg:flex-row gap-12 items-center"> 
          
          <div className="flex-1 text-center lg:text-left"> 
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4 flex items-center justify-center lg:justify-start gap-4"> 
              <span className="hidden sm:block w-12 h-[2px] bg-[#C9A227]"></span> 
              {t.heroSuperTitle}
            </p> 
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-6"> 
              {t.heroTitle1} <span className="text-[#C9A227]">{t.heroTitle2}</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 tracking-wide text-white/90">
              {t.heroSubTitle}
            </h2> 
            <div className="text-base sm:text-lg font-light text-white/80 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 border-l-4 border-[#C9A227] pl-4"> 
              <p className="mb-4">{t.heroP1}</p>
              <p>{t.heroP2}</p>
              <p className="mt-4 font-semibold text-white">{t.heroP3}</p>
            </div> 
          </div> 

          <div className="w-full lg:w-[500px] xl:w-[600px] shrink-0 relative aspect-[4/3] border-4 border-[#C9A227] shadow-2xl bg-[#0F2D5C]">
            <Image 
              src="/mimarlik1.png" 
              alt="Erzadeoğlu Mimari Proje" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
          </div>
        </div> 
      </section> 

      {/* ==========================================
          2. NEDEN BİZ? (mimarlik2.png)
      ========================================== */} 
      <section className="py-24 px-6 lg:px-12 bg-white"> 
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-5/12 relative aspect-[3/4] border border-[#0B2341]/10 bg-[#F8F8F8] p-3 shadow-lg">
            <div className="relative w-full h-full border border-[#0B2341]/5">
              <Image src="/mimarlik2.png" alt="Neden Profesyonel Mimar" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>
          </div>

          <div className="flex-1">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
              {t.whyWorkWithUsTitle1} <span className="text-[#C9A227]">{t.whyWorkWithUsTitle2}</span> {t.whyWorkWithUsTitle3}
            </h2>
            <p className="text-[#0B2341]/80 text-lg mb-2 font-medium">
              {t.whyWorkWithUsDesc}
            </p>
            <p className="text-[#C9A227] font-bold uppercase tracking-widest text-sm mb-8 pb-4 border-b border-[#0B2341]/10">
              {t.whyWorkWithUsSubTitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.whyWorkWithUsList.map((reason, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#F8F8F8] p-4 border border-[#0B2341]/5 hover:bg-[#0B2341] hover:text-white transition-colors group">
                  <span className="w-5 h-5 shrink-0 flex items-center justify-center bg-[#C9A227] text-[#0B2341] font-black text-[10px] mt-0.5">✓</span>
                  <span className="font-bold text-sm text-[#0B2341]/90 group-hover:text-white">{reason}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-[#0B2341] text-white border-l-4 border-[#C9A227]">
              <p className="text-sm uppercase tracking-widest font-bold">
                {t.whyWorkWithUsFooter}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          3. HİZMETLERİMİZ (mimarlik3.png)
      ========================================== */} 
      <section className="py-24 px-6 lg:px-12 bg-[#F8F8F8] border-y border-[#0B2341]/5"> 
        <div className="max-w-[1200px] mx-auto"> 
          <div className="text-center mb-16"> 
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">{t.servicesSuperTitle}</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-6"> 
              {t.servicesTitle1} <span className="text-[#C9A227]">{t.servicesTitle2}</span>
            </h2> 
            <div className="h-1 w-24 bg-[#C9A227] mx-auto"></div> 
          </div> 

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 relative min-h-[400px] border-4 border-[#0B2341]">
               <Image src="/mimarlik3.png" alt="Mimari Projeler" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              {t.serviceCategories.map((service, idx) => (
                <div key={idx} className="bg-white border border-[#0B2341]/10 p-6 sm:p-8 hover:shadow-xl transition-shadow flex flex-col h-full">
                  <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-black uppercase text-[#0B2341] mb-3">{service.title}</h3>
                  <p className="text-[#0B2341]/70 text-sm mb-6 leading-relaxed flex-grow">{service.desc}</p>
                  <ul className="space-y-2 border-t border-[#0B2341]/10 pt-4 mt-auto">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-bold text-[#0B2341]/80 uppercase tracking-wider">
                        <span className="text-[#C9A227] mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div> 
      </section> 

      {/* ==========================================
          4. AKARYAKIT İSTASYONLARI (mimarlik4.png)
      ========================================== */} 
      <section className="py-24 px-6 lg:px-12 bg-[#0B2341] text-white"> 
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">{t.gasStationSuperTitle}</p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl sm:text-4xl font-black uppercase tracking-tight mb-6">
              {t.gasStationTitle}
            </h2>
            <p className="text-white/80 leading-relaxed mb-8">
              {t.gasStationDesc}
            </p>
            
            <p className="font-bold text-[#C9A227] tracking-widest uppercase text-xs mb-6">{t.gasStationSubTitle}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.gasStationServices.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 hover:border-[#C9A227] transition-colors">
                  <span className="w-2 h-2 bg-[#C9A227] shrink-0"></span>
                  <span className="text-xs font-bold uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full aspect-square border-4 border-[#C9A227] bg-[#F8F8F8]">
            <Image src="/mimarlik4.png" alt="Akaryakıt İstasyonu Projeleri" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>

        </div>
      </section>

      {/* ==========================================
          5. KALİTE ANLAYIŞI (mimarlik5.png)
      ========================================== */} 
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight text-[#0B2341] mb-4">
                {t.qualityTitle}
              </h2>
              <p className="text-[#0B2341]/70 text-sm mb-4">{t.qualityDesc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {t.qualityPoints.map((pt, idx) => (
                  <span key={idx} className="px-3 py-1 bg-[#0B2341] text-white text-xs font-bold uppercase tracking-widest">{pt}</span>
                ))}
              </div>
              <p className="text-xs font-bold text-[#C9A227] uppercase tracking-widest border-l-2 border-[#C9A227] pl-3">
                {t.qualityFooter}
              </p>
            </div>

            <div className="relative w-full aspect-[4/3] border border-[#0B2341]/10">
               <Image src="/mimarlik5.png" alt="Mimari Tasarım Kalitesi" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#F8F8F8] p-8 sm:p-12 border border-[#0B2341]/5">
            <h2 className="font-[family-name:var(--font-montserrat)] text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
              {t.selectionTitle}
            </h2>
            <p className="text-[#0B2341]/70 mb-8">{t.selectionDesc}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {t.selectionCriteria.map((criteria, idx) => (
                <div key={idx} className="flex items-center gap-3 border-b border-[#0B2341]/10 pb-3">
                  <span className="text-[#C9A227] text-lg">✦</span>
                  <span className="font-bold text-sm uppercase tracking-wide text-[#0B2341]">{criteria}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#0B2341] p-6 text-center text-white">
              <p className="font-bold text-sm tracking-widest">
                {t.selectionFooter1} <span className="text-[#C9A227]">{t.selectionFooter2}</span> {t.selectionFooter3} <span className="text-[#C9A227]">{t.selectionFooter4}</span> {t.selectionFooter5}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          6. SIK SORULAN SORULAR
      ========================================== */} 
      <section className="py-20 px-6 lg:px-12 bg-[#F8F8F8] border-t border-[#0B2341]/5">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-12"> 
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-4"> 
              {t.faqTitle}
            </h2> 
            <div className="h-1 w-16 bg-[#C9A227] mx-auto"></div> 
          </div> 

          <div className="space-y-4">
            {t.faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-[#0B2341]/10 p-6 hover:border-[#C9A227] transition-colors">
                <h3 className="font-bold text-[#0B2341] text-sm uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="text-[#C9A227]">Q.</span> {faq.q}
                </h3>
                <p className="text-[#0B2341]/70 text-sm pl-6 border-l-2 border-transparent">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. İLETİŞİM & CTA (mimarlik6.png)
      ========================================== */} 
      <section className="relative py-24 px-6 lg:px-12 bg-[#0B2341] text-white border-t-4 border-[#C9A227]">
        <div className="absolute inset-0 z-0 opacity-20">
           <Image src="/mimarlik6.png" alt="Erzadeoğlu İletişim" fill sizes="100vw" className="object-cover" />
        </div>
        
        <div className="max-w-[1200px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight">
              {t.heroTitle1} <span className="text-[#C9A227]">{t.heroTitle2}</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed border-l-4 border-[#C9A227] pl-4">
              {t.contactP}
            </p>

            <div>
              <p className="text-[#C9A227] font-bold uppercase tracking-widest text-xs mb-4">{t.contactServiceAreasTitle}</p>
              <div className="flex flex-wrap gap-2">
                {t.serviceAreasList.map((area, idx) => (
                  <span key={idx} className="bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest">{area}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 text-[#0B2341] shadow-2xl relative">
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#C9A227] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C9A227] mb-2">{t.contactInfoTitle}</p>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight mb-8">{t.heroTitle1} {t.heroTitle2}</h3>
            
            <ul className="space-y-6 mb-10">
              <li className="flex items-start gap-4 border-b border-[#0B2341]/10 pb-4">
                <span className="text-xl">📍</span>
                <span className="text-sm font-medium">{t.contactAddress}</span>
              </li>
              <li className="flex items-center gap-4 border-b border-[#0B2341]/10 pb-4">
                <span className="text-xl">👤</span>
                <span className="text-sm font-bold uppercase tracking-widest">{t.contactArchitect}</span>
              </li>
            </ul>

            <a 
              href={`https://wa.me/${contactPhoneClean.replace('+', '')}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-5 bg-[#C9A227] text-[#0B2341] font-black uppercase tracking-[0.15em] hover:bg-[#0B2341] hover:text-white transition-colors duration-300"
            >
              {t.contactBtn} <br className="sm:hidden" /> {contactPhone}
            </a>
          </div>

        </div>
      </section>

      {/* ==========================================
          8. SABİT WHATSAPP BUTONU
      ========================================== */}
      <a 
        href={`https://wa.me/${contactPhoneClean.replace('+', '')}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 hover:bg-[#128C7E] transition-transform duration-300"
        aria-label="WhatsApp üzerinden iletişime geçin"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-7 h-7 fill-current relative z-10">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

    </main> 
  ); 
}