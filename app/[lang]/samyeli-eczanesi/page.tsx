export default function SamyeliEczanesi({ params }: { params: { lang: string } }) {
    const { lang } = params;
  
    return (
      <main className="min-h-screen bg-white pt-32 pb-20 px-6 lg:px-12 flex flex-col items-center justify-center">
        <div className="max-w-[1000px] mx-auto text-center">
          {/* Üst Başlık / Kategori */}
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#C9A227] mb-6">
            {lang === "tr" ? "Sağlık & Danışmanlık" : "Health & Consultancy"}
          </p>
  
          {/* Ana Başlık */}
          <h1 className="text-4xl md:text-6xl font-black text-[#0B2341] uppercase tracking-tighter mb-8 font-[family-name:var(--font-montserrat)]">
            Samyeli <span className="text-[#C9A227]">Eczanesi</span>
          </h1>
  
          {/* İçerik / Açıklama */}
          <div className="w-16 h-[1px] bg-[#0B2341]/20 mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            {lang === "tr" 
              ? "Bu projenin detayları ve içerikleri çok yakında eklenecektir." 
              : "The details and content of this project will be added very soon."}
          </p>
        </div>
      </main>
    );
  }