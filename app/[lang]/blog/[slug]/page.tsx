import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// YENİ: Tek bir sorgu ile hem mevcut makaleyi, hem son 3 yazıyı, hem de tüm kategorileri çekiyoruz
async function getPostData(slug: string) {
  const query = `{
    "post": *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      mainImage,
      publishedAt,
      _createdAt,
      body,
      "categories": categories[]-> { title, "slug": slug.current }
    },
    "recentPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc, _createdAt desc)[0...3] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      _createdAt,
      "categories": categories[]-> { title, "slug": slug.current }
    },
    "allCategories": *[_type == "category"] {
      _id,
      title,
      "slug": slug.current
    }
  }`;
  
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Makale verileri çekilirken hata:", error);
    return { post: null, recentPosts: [], allCategories: [] };
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'tr'; slug: string }> | { lang: 'en' | 'tr'; slug: string };
}) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const slug = resolvedParams?.slug;

  if (!slug) return notFound();

  const { post, recentPosts, allCategories } = await getPostData(slug);
  
  if (!post) return notFound();

  // ÇOK DİLLİ METİNLER
  const text = {
    en: {
      back: "Back to Blog",
      published: "Published on",
      share: "Share this article",
      authorTitle: "About the Author",
      authorName: "Salman Kurt",
      authorBio: "Executive insights, global real estate intelligence, and luxury tourism perspectives.",
      relatedPosts: "Recent Articles",
      exploreCategories: "Explore Categories",
      readMore: "Read More"
    },
    tr: {
      back: "Blog'a Dön",
      published: "Yayınlanma Tarihi",
      share: "Bu Makaleyi Paylaş",
      authorTitle: "Yazar Hakkında",
      authorName: "Salman Kurt",
      authorBio: "Yönetici görüşleri, küresel gayrimenkul zekası ve lüks turizm perspektifleri.",
      relatedPosts: "Son Yazılar",
      exploreCategories: "Kategorileri Keşfet",
      readMore: "Devamını Oku"
    }
  }[lang];

  const formatDate = (publishedAt: string, createdAt: string) => {
    const dateToUse = publishedAt || createdAt;
    if (!dateToUse) return "";
    const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
    return new Date(dateToUse).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // GÜVENLİ VERİ OKUMA EKRANI
  const title = typeof post.title === 'string' ? post.title : (post.title?.[lang] || post.title?.tr || "İsimsiz Makale");
  const categoryData = post.categories?.[0]?.title;
  const categoryName = typeof categoryData === 'string' ? categoryData : (categoryData?.[lang] || categoryData?.tr || "Blog");
  const bodyContent = Array.isArray(post.body) ? post.body : (post.body?.[lang] || post.body?.tr);

  // Sosyal Medya Paylaşım Linkleri (Mevcut sayfa için)
  const encodedTitle = encodeURIComponent(title);
  const shareLinks = {
    x: `https://twitter.com/intent/tweet?text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=`, // Proje canlıya çıkınca domain eklenebilir
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}`
  };

  return (
    <main className="bg-[#F8F8F8] min-h-screen pb-32">
      
      {/* 1. HERO ALANI */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-end justify-center bg-[#0B2341]">
        {post.mainImage && (
          <Image 
            src={urlFor(post.mainImage).url()} 
            alt={title} 
            fill 
            priority
            className="object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] via-[#0B2341]/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12 pb-24 text-center">
          <p className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.3em] mb-6 drop-shadow-md">
            {categoryName} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(post.publishedAt, post._createdAt)}
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0B2341] mb-8 leading-tight drop-shadow-sm">
            {title}
          </h1>
        </div>
      </section>

      {/* 2. ANA İÇERİK VE SİDEBAR (GRID YAPISI) */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-20 -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* SOL SÜTUN: MAKALE İÇERİĞİ VE YAZAR (8 Sütun) */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-[0_20px_50px_-10px_rgba(11,35,65,0.05)] border-t-4 border-[#C9A227]">
            
            {/* Metin İçeriği */}
            {bodyContent ? (
              <div className="
                text-[#0B2341]/80 text-base md:text-lg leading-relaxed font-light
                [&>p]:mb-8 [&>p:last-child]:mb-0
                [&>h2]:font-[family-name:var(--font-montserrat)] [&>h2]:text-3xl [&>h2]:font-black [&>h2]:text-[#0B2341] [&>h2]:uppercase [&>h2]:mb-6 [&>h2]:mt-12 [&>h2]:tracking-tight
                [&>h3]:font-[family-name:var(--font-montserrat)] [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#0B2341] [&>h3]:mb-4 [&>h3]:mt-10
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#C9A227] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:my-10 [&>blockquote]:text-[#0B2341]
              ">
                <PortableText value={bodyContent} />
              </div>
            ) : (
              <div className="text-center py-10 text-[#0B2341]/50 italic">
                {lang === 'tr' ? "İçerik bulunamadı." : "Content not found."}
              </div>
            )}

            {/* Sosyal Medya Paylaşım Butonları */}
            <div className="mt-16 pt-8 border-t border-[#0B2341]/10 flex flex-col sm:flex-row justify-between items-center gap-6">
              <span className="font-[family-name:var(--font-montserrat)] text-[#0B2341] font-bold uppercase tracking-widest text-xs">
                {text.share}:
              </span>
              <div className="flex gap-4">
                <a href={shareLinks.x} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#0B2341]/20 flex items-center justify-center text-[#0B2341] hover:bg-[#0B2341] hover:text-white transition-all">
                  <span className="text-xs font-black">X</span>
                </a>
                <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#0B2341]/20 flex items-center justify-center text-[#0B2341] hover:bg-[#0B2341] hover:text-white transition-all">
                  <span className="text-xs font-black">IN</span>
                </a>
                <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#0B2341]/20 flex items-center justify-center text-[#0B2341] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                  <span className="text-xs font-black">WA</span>
                </a>
              </div>
            </div>

            {/* Yazar (Author) Bloğu */}
            <div className="mt-12 bg-[#F8F8F8] p-8 border border-[#0B2341]/5 flex flex-col md:flex-row items-center md:items-start gap-6 group">
              <div className="w-20 h-20 rounded-full bg-[#0B2341] flex items-center justify-center text-[#C9A227] text-2xl font-black font-[family-name:var(--font-montserrat)] shrink-0 group-hover:scale-105 transition-transform">
                SK
              </div>
              <div className="text-center md:text-left">
                <span className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.3em] block mb-2">{text.authorTitle}</span>
                <h4 className="font-[family-name:var(--font-montserrat)] text-xl font-black uppercase text-[#0B2341] mb-2">{text.authorName}</h4>
                <p className="text-[#0B2341]/70 text-sm font-light leading-relaxed">
                  {text.authorBio}
                </p>
              </div>
            </div>

          </div>

          {/* SAĞ SÜTUN: SİDEBAR (4 Sütun) */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Kategoriler Widget */}
            <div className="bg-white p-8 shadow-sm border border-[#0B2341]/5">
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-black uppercase tracking-tight text-[#0B2341] mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#C9A227]"></span>
                {text.exploreCategories}
              </h3>
              <div className="flex flex-wrap gap-2">
                {allCategories.map((c: any) => {
                  if (!c.slug) return null;
                  const catTitle = typeof c.title === 'string' ? c.title : (c.title?.[lang] || c.title?.tr);
                  return (
                    <Link 
                      key={c._id} 
                      href={`/${lang}/blog?category=${c.slug}`}
                      className="px-4 py-2 border border-[#0B2341]/10 text-[#0B2341]/70 text-[10px] font-bold uppercase tracking-widest hover:border-[#C9A227] hover:text-[#C9A227] transition-colors"
                    >
                      {catTitle}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Son Yazılar (Recent Posts) Widget */}
            {recentPosts.length > 0 && (
              <div className="bg-[#0B2341] p-8 shadow-xl border-b-4 border-[#C9A227]">
                <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-black uppercase tracking-tight text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#C9A227]"></span>
                  {text.relatedPosts}
                </h3>
                <div className="space-y-6">
                  {recentPosts.map((rp: any) => {
                    const rpTitle = typeof rp.title === 'string' ? rp.title : (rp.title?.[lang] || rp.title?.tr);
                    return (
                      <Link href={`/${lang}/blog/${rp.slug?.current}`} key={rp._id} className="group flex gap-4 items-center">
                        <div className="relative w-20 h-20 shrink-0 overflow-hidden bg-white/10">
                          {rp.mainImage && (
                            <Image 
                              src={urlFor(rp.mainImage).url()} 
                              alt={rpTitle || "Post thumbnail"} 
                              fill 
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          )}
                        </div>
                        <div>
                          <p className="text-[#C9A227] text-[9px] font-bold uppercase tracking-widest mb-1">
                            {formatDate(rp.publishedAt, rp._createdAt)}
                          </p>
                          <h4 className="text-white text-sm font-bold leading-snug group-hover:text-[#C9A227] transition-colors line-clamp-2">
                            {rpTitle}
                          </h4>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Geri Dön Butonu */}
            <Link 
              href={`/${lang}/blog`}
              className="block w-full text-center border-2 border-[#0B2341] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] py-4 hover:bg-[#0B2341] hover:text-white transition-all"
            >
              &larr; {text.back}
            </Link>

          </div>
        </div>
      </section>
      
    </main>
  );
}