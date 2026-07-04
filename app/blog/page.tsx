import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_PER_PAGE = 10;

async function getPostsData(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc, _createdAt desc)[$start...$end] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      _createdAt,
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

  const formatDate = (publishedAt: string, createdAt: string) => {
    const dateToUse = publishedAt || createdAt;
    if (!dateToUse) return "RECENTLY PUBLISHED";
    return new Date(dateToUse).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <main className="bg-[#F8F8F8] min-h-screen">
      
      {/* 1. GÜÇLÜ VE OTORİTER GİRİŞ (HERO) */}
      <section className="pt-32 pb-48 px-6 lg:px-12 bg-[#0B2341] text-center border-b-4 border-[#C9A227] relative">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Official Media & Insights
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            THE GLOBAL JOURNAL.
          </h1>
          <p className="text-white/70 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
            Exclusive perspectives on luxury travel, global real estate investments, and executive market intelligence by Salman Kurt.
          </p>
        </div>
      </section>

      {/* İÇERİK YOKSA */}
      {posts.length === 0 && (
        <section className="py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto p-12 bg-white border border-[#0B2341]/10 shadow-sm">
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase text-[#0B2341] mb-2">Publishing Soon</h3>
            <p className="text-[#0B2341]/60 text-sm">Editorial entries are currently being synchronized. Please check back later.</p>
          </div>
        </section>
      )}

      {/* 2. ÖNE ÇIKAN YAZI (THE FEATURED CARD) - Jilet gibi keskin kart yapısı */}
      {featuredPost && (
        <section className="px-4 md:px-6 lg:px-12 -mt-32 relative z-20 mb-20">
          <div className="max-w-[1400px] mx-auto">
            <Link href={`/blog/${featuredPost.slug?.current}`} className="group block">
              <div className="bg-white shadow-[0_20px_50px_-10px_rgba(11,35,65,0.15)] flex flex-col lg:flex-row overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(201,162,39,0.2)]">
                
                {/* 16:9 Görsel (Kartın Sol Tarafı) */}
                <div className="lg:w-[60%] relative aspect-video overflow-hidden bg-[#0B2341]">
                  {featuredPost.mainImage && (
                    <Image 
                      src={urlFor(featuredPost.mainImage).url()} 
                      alt={featuredPost.title} 
                      fill 
                      priority
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                  )}
                  <div className="absolute top-6 left-6 bg-[#C9A227] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-md">
                    Featured
                  </div>
                </div>

                {/* İçerik (Kartın Sağ Tarafı) */}
                <div className="lg:w-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white border-l-4 border-transparent group-hover:border-[#C9A227] transition-colors duration-500">
                  <p className="text-[#0B2341]/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    {formatDate(featuredPost.publishedAt, featuredPost._createdAt)}
                  </p>
                  
                  <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-6 leading-snug group-hover:text-[#C9A227] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-[#0B2341]/70 leading-relaxed text-sm font-light mb-10 line-clamp-4">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block border border-[#0B2341] text-[#0B2341] text-[10px] font-black uppercase tracking-widest px-8 py-3 transition-all duration-300 group-hover:bg-[#0B2341] group-hover:text-white">
                      Read Article &rarr;
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 3. LÜKS IZGARA KARTLARI (DİĞER YAZILAR) */}
      {gridPosts.length > 0 && (
        <section className={`px-6 lg:px-12 pb-32 ${!isFirstPage ? "pt-16" : ""}`}>
          <div className="max-w-[1400px] mx-auto">
            
            {isFirstPage && (
              <div className="flex items-center justify-between border-b-2 border-[#0B2341] pb-4 mb-12">
                <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight text-[#0B2341]">
                  Recent Articles
                </h3>
              </div>
            )}

            {/* 3'lü Grid: Sıkı, Beyaz Kartlar */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post: any) => (
                <Link href={`/blog/${post.slug?.current}`} key={post._id} className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-[#0B2341]/5">
                  
                  {/* 16:9 Kart Görseli */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0B2341]/10">
                    {post.mainImage && (
                      <Image 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                    )}
                  </div>

                  {/* Kart İçeriği (Tamamen okunaklı ve düzenli) */}
                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                      {formatDate(post.publishedAt, post._createdAt)}
                    </p>
                    
                    <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-black uppercase tracking-tight text-[#0B2341] mb-4 leading-snug group-hover:text-[#C9A227] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-[#0B2341]/60 font-light leading-relaxed line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-[#0B2341]/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0B2341] group-hover:text-[#C9A227] transition-colors inline-flex items-center gap-2">
                        Read More <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </span>
                    </div>
                  </div>
                  
                </Link>
              ))}
            </div>

            {/* 4. SAYFALAMA (PAGINATION) */}
            {totalPages > 1 && (
              <div className="mt-20 flex items-center justify-center gap-2">
                {currentPage > 1 && (
                  <Link 
                    href={`/blog?page=${currentPage - 1}`}
                    className="px-4 py-2 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B2341] hover:text-white transition-colors"
                  >
                    Prev
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Link
                    key={pageNum}
                    href={`/blog?page=${pageNum}`}
                    className={`w-10 h-10 flex items-center justify-center border text-[10px] font-bold transition-colors ${
                      currentPage === pageNum 
                        ? 'border-[#0B2341] bg-[#0B2341] text-white' 
                        : 'border-[#0B2341]/20 text-[#0B2341] hover:bg-[#0B2341]/5'
                    }`}
                  >
                    {pageNum}
                  </Link>
                ))}

                {currentPage < totalPages && (
                  <Link 
                    href={`/blog?page=${currentPage + 1}`}
                    className="px-4 py-2 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B2341] hover:text-white transition-colors"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}
            
          </div>
        </section>
      )}
    </main>
  );
}