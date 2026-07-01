import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

async function getGallery() {
  const query = `*[_type == "gallery"] | order(_createdAt desc)`;
  return await client.fetch(query);
}

export default async function GalleryPage() {
  const galleries = await getGallery();

  return (
    <main className="bg-[#050505] min-h-screen pt-40 px-6 lg:px-16 pb-32 text-white selection:bg-[#002cf3] selection:text-white">
      
      {/* 
        ==================================================
        1. THE HEADER: SİNEMATİK VE MİNİMALİST GİRİŞ
        ================================================== 
      */}
      <div className="max-w-[1500px] mx-auto mb-32">
        <div className="flex items-center gap-6 mb-6">
          <span className="w-16 h-[1px] bg-[#002cf3]"></span>
          <span className="text-[#002cf3] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase">
            The Digital Archives
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter">
          Visual <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-600">
            Exhibitions.
          </span>
        </h1>
      </div>

      {/* 
        ==================================================
        2. LÜKS ALBÜM KOLEKSİYONLARI (LOOKBOOK STYLE)
        ================================================== 
      */}
      <div className="max-w-[1500px] mx-auto flex flex-col gap-40">
        {galleries.map((gallery: any, index: number) => {
          
          const images = [];
          if (gallery.images && Array.isArray(gallery.images)) {
            images.push(...gallery.images.filter((img: any) => img?.asset));
          } else if (gallery.image && gallery.image.asset) {
            images.push(gallery.image);
          }

          if (images.length === 0) return null;

          return (
            <section key={gallery._id} className="w-full relative">
              
              {/* ALBÜM BAŞLIĞI - Dergi Kapağı Hissiyatı */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-8 gap-8">
                <div className="flex items-start md:items-center gap-6 md:gap-8">
                  {/* Soluk dev numara */}
                  <span className="text-5xl md:text-6xl font-light text-white/10 font-serif leading-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-bold uppercase tracking-widest text-gray-100 mb-2">
                      {gallery.title || "Untitled Archive"}
                    </h2>
                    <p className="text-gray-500 text-[10px] md:text-xs font-mono tracking-widest uppercase">
                      Curated Collection
                    </p>
                  </div>
                </div>
                
                {/* Sağ Taraf - Minimal Metrik */}
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-sm backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 bg-[#002cf3] rounded-full"></div>
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-300">
                    {images.length} Assets
                  </span>
                </div>
              </div>

              {/* 
                PORTRE (DİKEY) GRID SİSTEMİ
                Safari'yi asla bozmayan pt-[125%] hilesi. (4:5 Oran)
                Dikey fotoğraflar lüks markaların en çok tercih ettiği formattır.
              */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
                {images.map((img: any, i: number) => (
                  <div 
                    key={i} 
                    className="relative w-full pt-[125%] overflow-hidden group cursor-pointer bg-[#0a0a0a] block"
                  >
                    {/* Görsel: Varsayılan olarak %20 gri, hover durumunda tam renk ve yavaşça büyür */}
                    <Image
                      src={urlFor(img).url()}
                      alt={`${gallery.title} - Asset ${i + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                    
                    {/* İnce Mimari Çerçeve (Hover ile Maviye Döner) */}
                    <div className="absolute inset-0 border border-white/5 group-hover:border-[#002cf3]/40 transition-colors duration-700 z-10 pointer-events-none"></div>
                    
                    {/* Görsel Üzeri Gizli Numara (Aşağıdan Yukarı Kayar) */}
                    <div className="absolute bottom-6 left-6 z-20 overflow-hidden pointer-events-none">
                      <div className="translate-y-[120%] group-hover:translate-y-0 transition-transform duration-700 ease-out">
                        <span className="inline-block text-white font-mono text-[9px] tracking-[0.3em] uppercase bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                          FRAME {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
            </section>
          );
        })}
      </div>

    </main>
  );
}