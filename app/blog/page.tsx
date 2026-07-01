import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

// Sayfa başına gösterilecek yazı sayısı
const POSTS_PER_PAGE = 10;

// Sanity'den sayfa numarasına göre veri çeken fonksiyon
async function getPostsData(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc)[$start...$end] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      "excerpt": array::join(string::split((pt::text(body)), "")[0...160], "") + "..."
    },
    "total": count(*[_type == "post"])
  }`;
  
  return await client.fetch(query, { start, end });
}

export const metadata = {
  title: "The Global Journal | Salman Kurt",
  description: "Executive insights, real estate intelligence, and luxury tourism perspectives.",
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }> | { page?: string };
}) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams?.page) || 1;
  
  const { posts, total } = await getPostsData(currentPage);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  const isFirstPage = currentPage === 1;
  const featuredPost = isFirstPage && posts.length > 0 ? posts[0] : null;
  const gridPosts = isFirstPage ? posts.slice(1) : posts;

  return (
    <main className="bg-[#F8F8F8] min-h-screen">
      
      {/* 1. HERO BÖLÜMÜ - MENÜ İLE KARIŞMAMASI İÇİN DERİNLİK VE GRADYAN EKLENDİ */}
      {isFirstPage ? (
        <section className="relative pt-32 pb-40 px-6 lg:px-12 bg-gradient-to-b from-[#061528] to-[#0B2341] overflow-hidden border-t border-white/5 border-b-4 border-[#C9A227] shadow-[inset_0_30px_50px_-15px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#C9A227] via-transparent to-transparent"></div>
          <div className="max-w-[1200px] mx-auto z-10 relative text-center">
            <span className="inline-block px-4 py-1 mb-6 border border-[#C9A227]/30 text-[#C9A227] text-[10px] font-black uppercase tracking-[0.3em]">
              Official Publication
            </span>
            <h1 className="font-[family-name:var(--font-montserrat)] text-5xl sm:text-7xl md:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-white mb-6">
              The Global <br />
              <span className="text-white/30">Journal.</span>
            </h1>
            <p className="text-white/60 text-sm md:text-base font-light max-w-xl mx-auto tracking-wide">
              Curated executive insights, market intelligence, and global perspectives on luxury tourism and strategic real estate investments.
            </p>
          </div>
        </section>
      ) : (
        <section className="pt-32 pb-16 px-6 lg:px-12 bg-gradient-to-b from-[#061528] to-[#0B2341] border-t border-white/5 border-b-4 border-[#C9A227] shadow-[inset_0_30px_50px_-15px_rgba(0,0,0,0.5)]">
          <div className="max-w-[1200px] mx-auto text-center">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl font-black uppercase tracking-tighter text-white mb-4">
              Journal <span className="text-[#C9A227]">Archive</span>
            </h1>
            <p className="text-white/50 text-xs uppercase tracking-widest font-bold">
              Page {currentPage} of {totalPages}
            </p>
          </div>
        </section>
      )}

      {/* İÇERİK YOKSA GÖSTERİLECEK EKRAN */}
      {posts.length === 0 && (
        <section className="py-24 px-6 text-center">
          <div className="max-w-[600px] mx-auto p-16 border border-[#0B2341]/10 bg-white shadow-sm">
            <span className="text-4xl block mb-4">📰</span>
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight text-[#0B2341] mb-2">Publishing Soon</h3>
            <p className="text-[#0B2341]/60 text-sm">Editorial entries are currently being synchronized. Please check back later.</p>
          </div>
        </section>
      )}

      {/* 2. ÖNE ÇIKAN YAZI */}
      {featuredPost && (
        <section className="px-6 lg:px-12 -mt-20 relative z-20 mb-20">
          <div className="max-w-[1200px] mx-auto">
            <Link href={`/blog/${featuredPost.slug?.current}`} className="group block">
              <div className="bg-white shadow-[0_30px_60px_-15px_rgba(11,35,65,0.15)] flex flex-col lg:flex-row overflow-hidden border border-[#0B2341]/5 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(201,162,39,0.2)]">
                
                {/* Görsel Alanı */}
                <div className="lg:w-3/5 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                  {featuredPost.mainImage && (
                    <Image 
                      src={urlFor(featuredPost.mainImage).url()} 
                      alt={featuredPost.title} 
                      fill 
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
                    />
                  )}
                  <div className="absolute inset-0 bg-[#0B2341]/0 group-hover:bg-[#0B2341]/10 transition-colors duration-700"></div>
                </div>

                {/* İçerik Alanı */}
                <div className="lg:w-2/5 p-8 md:p-12 lg:p-14 flex flex-col justify-center bg-white relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#C9A227] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom"></div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[#C9A227] text-[10px] font-black uppercase tracking-[0.2em]">Featured</span>
                    <span className="w-8 h-px bg-[#0B2341]/10"></span>
                    <span className="text-[#0B2341]/40 text-[10px] font-bold uppercase tracking-widest">
                      {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                  
                  <h2 className="font-[family-name:var(--font-montserrat)] text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-6 leading-tight group-hover:text-[#C9A227] transition-colors duration-500">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-[#0B2341]/70 leading-relaxed mb-8 font-light text-sm">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="mt-auto inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-[#0B2341]">
                    Read Editorial <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500 text-[#C9A227]">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 3. LÜKS IZGARA (DİĞER YAZILAR) */}
      {gridPosts.length > 0 && (
        <section className={`px-6 lg:px-12 pb-24 ${!isFirstPage ? "pt-20" : ""}`}>
          <div className="max-w-[1200px] mx-auto">
            {isFirstPage && (
              <div className="flex items-end justify-between border-b border-[#0B2341]/10 pb-6 mb-12">
                <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight text-[#0B2341]">
                  Latest Archives
                </h3>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0B2341]/40">Explore Publications</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
              {gridPosts.map((post: any) => (
                <Link href={`/blog/${post.slug?.current}`} key={post._id} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#0B2341]/5 mb-6 shadow-sm group-hover:shadow-lg transition-shadow duration-700">
                    {post.mainImage && (
                      <Image 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[15%] group-hover:grayscale-0"
                      />
                    )}
                    <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-700 z-10 pointer-events-none"></div>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[#C9A227] text-[10px] font-black uppercase tracking-widest">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <div className="h-[1px] flex-1 bg-[#0B2341]/10"></div>
                  </div>
                  
                  <h3 className="font-[family-name:var(--font-montserrat)] text-lg md:text-xl font-black uppercase tracking-tight text-[#0B2341] mb-3 group-hover:text-[#C9A227] transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-[#0B2341]/60 line-clamp-3 leading-relaxed font-light mb-5">
                    {post.excerpt}
                  </p>

                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0B2341] group-hover:text-[#C9A227] transition-colors">
                    Read Article &rarr;
                  </span>
                </Link>
              ))}
            </div>

            {/* 4. SAYFALAMA (PAGINATION) BÖLÜMÜ */}
            {totalPages > 1 && (
              <div className="mt-20 pt-10 border-t border-[#0B2341]/10 flex items-center justify-between">
                {currentPage > 1 ? (
                  <Link 
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-6 py-3 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-black uppercase tracking-widest hover:border-[#0B2341] hover:bg-[#0B2341] hover:text-white transition-all flex items-center gap-3"
                  >
                    &larr; Previous
                  </Link>
                ) : (
                  <div></div>
                )}

                <div className="hidden md:flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                    <Link
                      key={pageNum}
                      href={`/blog?page=${pageNum}`}
                      className={`w-10 h-10 flex items-center justify-center border text-[10px] font-bold transition-all ${
                        currentPage === pageNum 
                          ? 'border-[#C9A227] bg-[#C9A227] text-white' 
                          : 'border-[#0B2341]/10 text-[#0B2341] hover:border-[#0B2341]'
                      }`}
                    >
                      {pageNum}
                    </Link>
                  ))}
                </div>

                {currentPage < totalPages ? (
                  <Link 
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-6 py-3 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-black uppercase tracking-widest hover:border-[#0B2341] hover:bg-[#0B2341] hover:text-white transition-all flex items-center gap-3"
                  >
                    Next &rarr;
                  </Link>
                ) : (
                  <div></div>
                )}
              </div>
            )}
            
          </div>
        </section>
      )}
    </main>
  );
}