import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../../dictionaries/get-dictionary"; // Sözlüğü çekiyoruz

// Metadata'yı da çok dilli yaptık
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

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      
      {/* 1. HERO BÖLÜMÜ */}
      <section className="relative bg-[#0B2341] text-white pt-32 pb-24 px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white opacity-[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-6 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#C9A227]"></span> 
            {dict.seadrop.heroPreTitle}
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
            {dict.seadrop.heroTitle1} <span className="text-[#C9A227]">{dict.seadrop.heroTitle2}</span> <br />
            {dict.seadrop.heroTitle3}
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl leading-relaxed">
            {dict.seadrop.heroDesc}
          </p>
        </div>
      </section>

      {/* 2. THE MISSION & EXPERIENCE */}
      <section className="py-20 px-6 lg:px-12 relative -mt-10">
        <div className="max-w-[1200px] mx-auto bg-white p-8 md:p-16 shadow-[0_20px_50px_-15px_rgba(11,35,65,0.05)] border-t-4 border-[#C9A227]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341] mb-6">
                {dict.seadrop.expTitle1} <br />
                <span className="text-[#C9A227]">{dict.seadrop.expTitle2}</span>
              </h2>
              <p className="text-[#0B2341]/80 leading-relaxed mb-6 font-medium">
                {dict.seadrop.expDesc1}
              </p>
              <p className="text-[#0B2341]/70 leading-relaxed">
                {dict.seadrop.expDesc2}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#F8F8F8] p-6 border border-[#0B2341]/5">
                <span className="block text-4xl font-black text-[#0B2341] mb-2">30+</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227]">{dict.seadrop.statYears}</span>
              </div>
              <div className="bg-[#F8F8F8] p-6 border border-[#0B2341]/5">
                <span className="block text-4xl font-black text-[#0B2341] mb-2">100%</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227]">{dict.seadrop.statPrivate}</span>
              </div>
              <div className="bg-[#0B2341] p-6 border border-[#C9A227]/30 col-span-2">
                <span className="block text-xl font-black text-white mb-2">{dict.seadrop.statGuaranteed}</span>
                <span className="text-xs uppercase font-bold tracking-widest text-[#C9A227]">{dict.seadrop.statReturn}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE DESTINATIONS GRID */}
      <section className="py-20 px-6 lg:px-12 bg-[#0B2341]">
        <div className="max-w-[1200px] mx-auto mb-16 text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
            {dict.seadrop.destPreTitle} <span className="text-[#C9A227]">{dict.seadrop.destTitle}</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            {dict.seadrop.destDesc}
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dict.seadrop.destinations.map((dest: any, i: number) => (
            <div 
              key={i} 
              className="group relative bg-white/5 border border-white/10 p-8 cursor-pointer hover:bg-[#C9A227] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
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

      {/* 4. THE SEA DROP DIFFERENCE */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black uppercase tracking-tight text-[#0B2341]">
                {dict.seadrop.diffTitle1} <br /> <span className="text-[#C9A227]">{dict.seadrop.diffTitle2}</span>
              </h2>
              
              <div className="prose prose-p:text-[#0B2341]/70 prose-p:leading-relaxed">
                <p>{dict.seadrop.diffDesc1}</p>
                <p>{dict.seadrop.diffDesc2}</p>
              </div>

              <ul className="space-y-4">
                {dict.seadrop.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-4 text-[#0B2341] font-bold text-sm uppercase tracking-wide">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C9A227] text-white flex items-center justify-center text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#0B2341] p-10 md:p-14 text-white relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#C9A227]"></div>
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight mb-6">
                {dict.seadrop.cultureTitle}
              </h3>
              <p className="text-white/80 leading-relaxed font-light mb-8">
                {dict.seadrop.cultureDesc}
              </p>
              <div className="text-sm font-bold uppercase tracking-[0.15em] text-[#C9A227]">
                {dict.seadrop.cultureLink} &rarr;
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="py-24 bg-white border-t border-[#0B2341]/5 text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            {dict.seadrop.ctaPreTitle}
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mb-8">
            {dict.seadrop.ctaTitle}
          </h2>
          <p className="text-[#0B2341]/70 mb-10 leading-relaxed">
            {dict.seadrop.ctaDesc}
          </p>
          <Link 
            href={`/${lang}/contact`} 
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#C9A227] text-[#0B2341] text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 hover:bg-[#0B2341] hover:text-white shadow-[0_15px_30px_-10px_rgba(201,162,39,0.4)] group"
          >
            {dict.seadrop.ctaBtn} 
            <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
          </Link>
          <p className="mt-8 text-xs font-bold text-[#0B2341]/40 uppercase tracking-widest">
            {dict.seadrop.ctaFooter}
          </p>
        </div>
      </section>

    </main>
  );
}