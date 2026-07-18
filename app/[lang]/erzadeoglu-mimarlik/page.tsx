export default function ErzadeogluMimarlik({ params }: { params: { lang: string } }) {
    const { lang } = params;
  
    return (
      <main className="min-h-screen bg-[#0B2341] pt-32 pb-20 px-6 lg:px-12 flex flex-col items-center justify-center">
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Üst Başlık / Kategori */}
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50 mb-6">
            {lang === "tr" ? "Mimari Tasarım & Proje" : "Architectural Design & Project"}
          </p>
  
          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 font-[family-name:var(--font-montserrat)]">
            Erzadeoğlu <span className="text-[#C9A227]">Mimarlık</span>
          </h1>
  
          {/* İçerik / Açıklama */}
          <div className="w-16 h-[1px] bg-[#C9A227]/50 mx-auto mb-8"></div>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            {lang === "tr" 
              ? "Bu projenin detayları ve içerikleri çok yakında eklenecektir." 
              : "The details and content of this project will be added very soon."}
          </p>
        </div>
      </main>
    );
  }