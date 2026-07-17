import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// YENİ: Sadece URL'deki slug değerine sahip TEK BİR makaleyi çeken fonksiyon
async function getSinglePost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    publishedAt,
    _createdAt,
    body,
    "categories": categories[]-> { title, "slug": slug.current }
  }`;
  
  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error("Makale çekilirken hata:", error);
    return null;
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

  const post = await getSinglePost(slug);
  
  // Eğer makale bulunamazsa Next.js'in 404 sayfasına yönlendir
  if (!post) return notFound();

  const text = {
    en: {
      back: "Back to Blog",
      published: "Published on",
      share: "Share Article"
    },
    tr: {
      back: "Blog'a Dön",
      published: "Yayınlanma Tarihi",
      share: "Makaleyi Paylaş"
    }
  }[lang];

  const formatDate = (publishedAt: string, createdAt: string) => {
    const dateToUse = publishedAt || createdAt;
    if (!dateToUse) return "";
    const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
    return new Date(dateToUse).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // ÇOK DİLLİ GÜVENLİK AĞLARI
  // 1. Başlık kontrolü
  const title = typeof post.title === 'string' 
    ? post.title 
    : (post.title?.[lang] || post.title?.tr || "İsimsiz Makale");

  // 2. Kategori kontrolü
  const categoryData = post.categories?.[0]?.title;
  const categoryName = typeof categoryData === 'string'
    ? categoryData
    : (categoryData?.[lang] || categoryData?.tr || "Blog");

  // 3. İçerik (Body) kontrolü: Sanity PortableText eski tip (dizi) mi yoksa yeni tip (obje) mi?
  const bodyContent = Array.isArray(post.body) 
    ? post.body 
    : (post.body?.[lang] || post.body?.tr);

  return (
    <main className="bg-[#F8F8F8] min-h-screen pb-32">
      
      {/* 1. HERO ALANI (MAKALENİN GÖRSELİ VE BAŞLIĞI) */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2341] via-[#0B2341]/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-12 pb-20 text-center">
          <p className="text-[#C9A227] text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            {categoryName} &nbsp;&nbsp;|&nbsp;&nbsp; {formatDate(post.publishedAt, post._createdAt)}
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-8 leading-tight">
            {title}
          </h1>
          <Link 
            href={`/${lang}/blog`}
            className="inline-block border border-white/30 text-white text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-3 hover:bg-white hover:text-[#0B2341] transition-colors"
          >
            &larr; {text.back}
          </Link>
        </div>
      </section>

      {/* 2. MAKALE İÇERİĞİ (PORTABLE TEXT) */}
      <section className="px-6 lg:px-12 pt-20 relative z-20 -mt-10">
        <div className="max-w-[800px] mx-auto bg-white p-8 md:p-16 shadow-[0_20px_50px_-10px_rgba(11,35,65,0.05)] border-t-4 border-[#C9A227]">
          
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

          {/* SOSYAL PAYLAŞIM / ALT BİLGİ */}
          <div className="mt-20 pt-10 border-t border-[#0B2341]/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#0B2341]/40 text-[10px] font-bold uppercase tracking-[0.2em]">
              {text.published} {formatDate(post.publishedAt, post._createdAt)}
            </p>
            <div className="flex gap-4">
               {/* Gerçek bir projede buraya Twitter/LinkedIn paylaşım linkleri eklenebilir */}
               <span className="text-[#0B2341] text-[10px] font-black uppercase tracking-widest px-6 py-2 border border-[#0B2341]/20 hover:border-[#C9A227] hover:text-[#C9A227] transition-colors cursor-pointer">
                 {text.share}
               </span>
            </div>
          </div>

        </div>
      </section>
      
    </main>
  );
}