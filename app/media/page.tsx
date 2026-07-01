export default function MediaPage() {
    return (
      <main className="bg-white min-h-screen pt-20">
        
        {/* SİNEMATİK HERO (Medya Karşılama) */}
        <section className="bg-[#111111] py-32 px-6 lg:px-12 text-center border-b-4 border-[#002cf3] relative overflow-hidden">
          {/* Arka plan: Sahne, mikrofon veya kamera ışıkları (Opaklık düşürülmüş) */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 grayscale"></div>
          
          <div className="relative z-10 max-w-[1000px] mx-auto">
            <p className="text-[#002cf3] font-bold uppercase tracking-[0.2em] mb-4 text-sm">
              Press & Public Appearances
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
              In The <span className="text-[#002cf3]">Media.</span>
            </h1>
          </div>
        </section>
  
        {/* BASIN LOGOLARI (Güven Bandı) */}
        <section className="bg-[#f8f8f8] py-10 border-b border-gray-200">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">Featured On</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
              <span className="font-[family-name:var(--font-montserrat)] text-[#111111] text-2xl font-black uppercase tracking-tight">Forbes</span>
              <span className="font-[family-name:var(--font-montserrat)] text-[#111111] text-2xl font-black uppercase tracking-tight">Bloomberg</span>
              <span className="font-[family-name:var(--font-montserrat)] text-[#111111] text-2xl font-black uppercase tracking-tight">Tourism Weekly</span>
              <span className="font-[family-name:var(--font-montserrat)] text-[#111111] text-2xl font-black uppercase tracking-tight">Real Estate TR</span>
            </div>
          </div>
        </section>
  
        {/* MEDYA İÇERİKLERİ BÖLÜMÜ (Videolar ve Röportajlar) */}
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-4">
            <h2 className="font-[family-name:var(--font-montserrat)] text-4xl lg:text-5xl font-black text-[#111111] uppercase tracking-tight leading-none">
              Watch & <span className="text-[#002cf3]">Listen.</span>
            </h2>
            <button className="group text-[#111111] text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:text-[#002cf3] transition-colors">
              Download Press Kit <span className="text-xl">&darr;</span>
            </button>
          </div>
  
          {/* Video / Röportaj Grid Yapısı */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Medya Kartı 1 */}
            <div className="group cursor-pointer">
              {/* Video Thumbnail (Youtube Tarzı) */}
              <div className="aspect-video bg-gray-100 border-2 border-[#111111] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                {/* Oynat Butonu Overlay */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
                  <div className="w-16 h-16 bg-[#002cf3] rounded-full flex items-center justify-center text-white pl-1 shadow-[0_0_30px_rgba(0,44,243,0.8)]">
                    ▶
                  </div>
                </div>
              </div>
              <p className="text-[#002cf3] font-bold uppercase tracking-[0.1em] text-xs mb-3">Keynote Speech // 2026</p>
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black text-[#111111] uppercase tracking-tight mb-3 group-hover:text-[#002cf3] transition-colors">
                The Future of Experiential Travel in the Aegean
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                Exploring how Sea Drop Travel is bridging the gap between historical heritage and modern luxury tourism in Kusadasi and Ephesus.
              </p>
            </div>
  
            {/* Medya Kartı 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-video bg-gray-100 border-2 border-[#111111] relative overflow-hidden mb-6">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80')] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors duration-500">
                  <div className="w-16 h-16 bg-[#111111] text-[#002cf3] border-2 border-[#002cf3] rounded-full flex items-center justify-center pl-1">
                    ▶
                  </div>
                </div>
              </div>
              <p className="text-[#002cf3] font-bold uppercase tracking-[0.1em] text-xs mb-3">Podcast // Real Estate TR</p>
              <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black text-[#111111] uppercase tracking-tight mb-3 group-hover:text-[#002cf3] transition-colors">
                Structuring High-Yield US Investments
              </h3>
              <p className="text-gray-600 font-medium leading-relaxed text-sm">
                A deep dive into the strategies behind our USA Investments arm, and how to position assets for the next decade.
              </p>
            </div>
  
          </div>
        </section>
  
      </main>
    );
  }