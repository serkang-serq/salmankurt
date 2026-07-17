import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const POSTS_PER_PAGE = 10;

// YENİ: Kategori verilerini ve o kategoriye ait yazıları çeken güncellenmiş fonksiyon
async function getBlogData(page: number, categorySlug: string = "") {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  // Eğer kategori seçilmişse sorguya kategori filtresi ekliyoruz
  const categoryFilter = categorySlug ? `&& "${categorySlug}" in categories[]->slug.current` : ``;

  const query = `{
    "categories": *[_type == "category"] | order(title.en asc) {
      _id,
      title,
      "slug": slug.current
    },
    "posts": *[_type == "post" ${categoryFilter}] | order(publishedAt desc, _createdAt desc)[$start...$end] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      _createdAt,
      excerpt,
      "categories": categories[]-> { title, "slug": slug.current }
    },
    "total": count(*[_type == "post" ${categoryFilter}])
  }`;
  
  return await client.fetch(query, { start, end });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  return {
    title: lang === 'tr' ? "Küresel Günlük | Salman Kurt" : "The Global Journal | Salman Kurt",
    description: lang === 'tr' 
      ? "Yönetici görüşleri, gayrimenkul zekası ve lüks turizm perspektifleri." 
      : "Executive insights, real estate intelligence, and luxury tourism perspectives.",
  };
}

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: 'en' | 'tr' }> | { lang: 'en' | 'tr' };
  searchParams: Promise<{ page?: string; category?: string }> | { page?: string; category?: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams?.page) || 1;
  const currentCategory = resolvedSearchParams?.category || ""; // URL'den kategoriyi alıyoruz
  
  // Verileri çek (Hem kategoriler, hem filtrelenmiş postlar)
  const { posts, categories, total } = await getBlogData(currentPage, currentCategory);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  const isFirstPage = currentPage === 1;
  const featuredPost = isFirstPage && posts.length > 0 ? posts[0] : null;
  const gridPosts = isFirstPage ? posts.slice(1) : posts;

  const text = {
    en: {
      preTitle: "Official Media & Insights",
      title: "THE GLOBAL JOURNAL.",
      desc: "Exclusive perspectives on luxury travel, global real estate investments, and executive market intelligence by Salman Kurt.",
      allCategories: "All Categories",
      emptyTitle: "Curating Content",
      emptyDesc: "Our editorial team is currently preparing exclusive insights for this category. Please check back soon.",
      featuredBadge: "Featured",
      readArticle: "Read Article",
      recent: "Recent Articles",
      readMore: "Read More",
      prev: "Prev",
      next: "Next",
      recentPub: "RECENTLY PUBLISHED"
    },
    tr: {
      preTitle: "Resmi Medya & Görüşler",
      title: "KÜRESEL GÜNLÜK.",
      desc: "Lüks seyahat, küresel gayrimenkul yatırımları ve Salman Kurt tarafından sunulan pazar analizleri üzerine özel perspektifler.",
      allCategories: "Tüm Kategoriler",
      emptyTitle: "İçerik Hazırlanıyor",
      emptyDesc: "Editöryal ekibimiz bu kategori için özel içerikler hazırlamaktadır. Lütfen daha sonra tekrar ziyaret edin.",
      featuredBadge: "Öne Çıkan",
      readArticle: "Makaleyi Oku",
      recent: "Son Yazılar",
      readMore: "Devamını Oku",
      prev: "Önceki",
      next: "Sonraki",
      recentPub: "YENİ YAYINLANDI"
    }
  }[lang];

  const formatDate = (publishedAt: string, createdAt: string) => {
    const dateToUse = publishedAt || createdAt;
    if (!dateToUse) return text.recentPub;
    const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
    return new Date(dateToUse).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <main className="bg-[#F8F8F8] min-h-screen">
      
      {/* 1. GİRİŞ (HERO) VE KATEGORİ MENÜSÜ */}
      <section className="pt-32 pb-40 px-6 lg:px-12 bg-[#0B2341] text-center border-b-4 border-[#C9A227] relative">
        <div className="max-w-[1000px] mx-auto relative z-10">
          <p className="text-[#C9A227] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            {text.preTitle}
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6">
            {text.title}
          </h1>
          <p className="text-white/70 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed mb-16">
            {text.desc}
          </p>

          {/* YENİ: PREMIUM KATEGORİ FİLTRELEME ÇUBUĞU */}
          <div className="flex overflow-x-auto gap-4 justify-start md:justify-center items-center pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <Link 
              href={`/${lang}/blog`} 
              className={`px-8 py-3 text-[10px] uppercase font-black tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${
                !currentCategory 
                  ? 'bg-[#C9A227] text-[#0B2341] shadow-[0_0_20px_rgba(201,162,39,0.3)]' 
                  : 'border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227]'
              }`}
            >
              {text.allCategories}
            </Link>
            
            {categories?.map((c: any) => (
              <Link 
                key={c._id} 
                href={`/${lang}/blog?category=${c.slug}`} 
                className={`px-8 py-3 text-[10px] uppercase font-black tracking-[0.2em] whitespace-nowrap transition-all duration-300 ${
                  currentCategory === c.slug 
                    ? 'bg-[#C9A227] text-[#0B2341] shadow-[0_0_20px_rgba(201,162,39,0.3)]' 
                    : 'border border-[#C9A227]/30 text-[#C9A227] hover:bg-[#C9A227]/10 hover:border-[#C9A227]'
                }`}
              >
                {c.title?.[lang] || c.title?.tr}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 2. PREMIUM EMPTY STATE (Kategori Boşsa) */}
      {posts.length === 0 && (
        <section className="py-32 px-6 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-px h-20 bg-[#C9A227] mb-10"></div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-widest text-[#0B2341] mb-6">
              {text.emptyTitle}
            </h3>
            <p className="text-[#0B2341]/60 text-lg font-light leading-relaxed mb-10">
              {text.emptyDesc}
            </p>
            <Link 
              href={`/${lang}/blog`}
              className="inline-block border-b border-[#0B2341]/30 pb-1 text-[#0B2341] text-xs font-bold uppercase tracking-[0.2em] hover:text-[#C9A227] hover:border-[#C9A227] transition-all"
            >
              &larr; {text.allCategories}
            </Link>
          </div>
        </section>
      )}

      {/* 3. ÖNE ÇIKAN YAZI */}
      {featuredPost && (
        <section className="px-4 md:px-6 lg:px-12 -mt-16 relative z-20 mb-20">
          <div className="max-w-[1400px] mx-auto">
            <Link href={`/${lang}/blog/${featuredPost.slug?.current}`} className="group block">
              <div className="bg-white shadow-[0_20px_50px_-10px_rgba(11,35,65,0.15)] flex flex-col lg:flex-row overflow-hidden transition-shadow duration-500 hover:shadow-[0_30px_60px_-15px_rgba(201,162,39,0.2)]">
                
                <div className="lg:w-[60%] relative aspect-video overflow-hidden bg-[#0B2341]">
                  {featuredPost.mainImage && (
                    <Image 
                      src={urlFor(featuredPost.mainImage).url()} 
                      alt={featuredPost.title?.[lang] || featuredPost.title?.tr || "Featured Post"} 
                      fill 
                      priority
                      className="object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                    />
                  )}
                  {/* Dinamik Kategori Etiketi */}
                  <div className="absolute top-6 left-6 bg-[#C9A227] text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 shadow-md">
                    {featuredPost.categories?.[0]?.title?.[lang] || featuredPost.categories?.[0]?.title?.tr || text.featuredBadge}
                  </div>
                </div>

                <div className="lg:w-[40%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white border-l-4 border-transparent group-hover:border-[#C9A227] transition-colors duration-500">
                  <p className="text-[#0B2341]/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    {formatDate(featuredPost.publishedAt, featuredPost._createdAt)}
                  </p>
                  
                  <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341] mb-6 leading-snug group-hover:text-[#C9A227] transition-colors duration-300">
                    {featuredPost.title?.[lang] || featuredPost.title?.tr}
                  </h2>
                  
                  <p className="text-[#0B2341]/70 leading-relaxed text-sm font-light mb-10 line-clamp-4">
                    {featuredPost.excerpt?.[lang] || featuredPost.excerpt?.tr}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-block border border-[#0B2341] text-[#0B2341] text-[10px] font-black uppercase tracking-widest px-8 py-3 transition-all duration-300 group-hover:bg-[#0B2341] group-hover:text-white">
                      {text.readArticle} &rarr;
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          </div>
        </section>
      )}

      {/* 4. DİĞER YAZILAR */}
      {gridPosts.length > 0 && (
        <section className={`px-6 lg:px-12 pb-32 ${!isFirstPage ? "pt-16" : ""}`}>
          <div className="max-w-[1400px] mx-auto">
            
            {isFirstPage && (
              <div className="flex items-center justify-between border-b-2 border-[#0B2341]/10 pb-4 mb-12">
                <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-black uppercase tracking-tight text-[#0B2341]">
                  {currentCategory ? `${categories.find((c:any) => c.slug === currentCategory)?.title?.[lang] || "Kategori"} Yazıları` : text.recent}
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post: any) => (
                <Link href={`/${lang}/blog/${post.slug?.current}`} key={post._id} className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-500 border border-[#0B2341]/5">
                  
                  <div className="relative aspect-video w-full overflow-hidden bg-[#0B2341]/10">
                    {post.mainImage && (
                      <Image 
                        src={urlFor(post.mainImage).url()} 
                        alt={post.title?.[lang] || post.title?.tr || "Post Image"} 
                        fill 
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                      />
                    )}
                    {/* Küçük kartlar için kategori etiketi */}
                    {post.categories?.[0] && (
                       <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm text-[#0B2341] text-[9px] font-black uppercase tracking-widest px-3 py-1">
                         {post.categories[0].title?.[lang] || post.categories[0].title?.tr}
                       </div>
                    )}
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <p className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                      {formatDate(post.publishedAt, post._createdAt)}
                    </p>
                    
                    <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-black uppercase tracking-tight text-[#0B2341] mb-4 leading-snug group-hover:text-[#C9A227] transition-colors duration-300 line-clamp-2">
                      {post.title?.[lang] || post.title?.tr}
                    </h3>
                    
                    <p className="text-sm text-[#0B2341]/60 font-light leading-relaxed line-clamp-3 mb-6 flex-1">
                      {post.excerpt?.[lang] || post.excerpt?.tr}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-[#0B2341]/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0B2341] group-hover:text-[#C9A227] transition-colors inline-flex items-center gap-2">
                        {text.readMore} <span className="transform group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </span>
                    </div>
                  </div>
                  
                </Link>
              ))}
            </div>

            {/* SAYFALAMA */}
            {totalPages > 1 && (
              <div className="mt-20 flex items-center justify-center gap-2">
                {currentPage > 1 && (
                  <Link 
                    href={`/${lang}/blog?page=${currentPage - 1}${currentCategory ? `&category=${currentCategory}` : ''}`}
                    className="px-4 py-2 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B2341] hover:text-white transition-colors"
                  >
                    {text.prev}
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <Link
                    key={pageNum}
                    href={`/${lang}/blog?page=${pageNum}${currentCategory ? `&category=${currentCategory}` : ''}`}
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
                    href={`/${lang}/blog?page=${currentPage + 1}${currentCategory ? `&category=${currentCategory}` : ''}`}
                    className="px-4 py-2 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B2341] hover:text-white transition-colors"
                  >
                    {text.next}
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