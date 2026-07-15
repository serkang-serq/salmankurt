import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body,
    "authorName": author->name
  }`;
  return await client.fetch(query, { slug });
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string; lang: 'en' | 'tr' }> 
}) {
  const resolvedParams = await params;
  const { slug, lang } = resolvedParams;
  const post = await getPost(slug);

  const text = {
    en: {
      notFound: "Editorial Not Found",
      returnLink: "Return to Archives",
      journalLink: "Journal Archives",
      execBrief: "Executive Brief",
      published: "Published",
      authored: "Authored By",
      team: "Editorial Team",
      share: "Share Insight",
      authorBoxTitle: "Executive Team",
      authorBoxDesc: "Dedicated to providing industry-leading perspectives on global real estate markets, luxury travel, and cross-continental business operations.",
      indexing: "Content is currently being indexed..."
    },
    tr: {
      notFound: "Yazı Bulunamadı",
      returnLink: "Arşive Dön",
      journalLink: "Günlük Arşivi",
      execBrief: "Yönetici Özeti",
      published: "Yayınlanma Tarihi",
      authored: "Yazar",
      team: "Editör Ekibi",
      share: "İçeriği Paylaş",
      authorBoxTitle: "Yönetici Ekibi",
      authorBoxDesc: "Küresel gayrimenkul pazarları, lüks seyahat ve kıtalararası iş operasyonları hakkında sektör lideri perspektifler sunmaya adanmıştır.",
      indexing: "İçerik şu anda indeksleniyor..."
    }
  }[lang];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F8F8] text-[#0B2341]">
        <div className="w-12 h-px bg-[#C9A227] mb-6"></div>
        <h1 className="text-3xl font-black uppercase tracking-widest font-[family-name:var(--font-montserrat)]">{text.notFound}</h1>
        <Link href={`/${lang}/blog`} className="mt-8 text-xs font-bold uppercase tracking-[0.2em] hover:text-[#C9A227] transition-colors border-b border-[#0B2341]/20 pb-1">
          &larr; {text.returnLink}
        </Link>
      </div>
    );
  }

  const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
  const formattedDate = new Date(post.publishedAt).toLocaleDateString(locale, { month: 'long', day: 'numeric', year: 'numeric' });

  const ptComponents = {
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) return null;
        return (
          <div className="my-16 p-2 bg-[#F8F8F8] border border-[#0B2341]/5 group">
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              <Image
                src={urlFor(value).url()}
                alt={value.alt || "Editorial Imagery"}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-[#0B2341]/0 group-hover:bg-[#0B2341]/10 transition-colors duration-700"></div>
            </div>
          </div>
        );
      },
    },
    block: {
      h1: ({ children }: any) => <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl font-black uppercase tracking-tight text-[#0B2341] mt-20 mb-8 leading-[1.1]">{children}</h1>,
      h2: ({ children }: any) => <h2 className="font-[family-name:var(--font-montserrat)] text-3xl font-black uppercase tracking-tight text-[#0B2341] mt-16 mb-6">{children}</h2>,
      h3: ({ children }: any) => <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-black uppercase tracking-tight text-[#C9A227] mt-12 mb-4">{children}</h3>,
      normal: ({ children }: any) => (
        <p className="text-[#0B2341]/80 text-lg leading-relaxed font-light mb-8 first-of-type:first-letter:float-left first-of-type:first-letter:text-[6rem] first-of-type:first-letter:pr-4 first-of-type:first-letter:font-[family-name:var(--font-montserrat)] first-of-type:first-letter:font-black first-of-type:first-letter:text-[#0B2341] first-of-type:first-letter:leading-[0.8] first-of-type:first-letter:mt-2">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="relative px-8 py-6 my-16 bg-[#0B2341]/5 border-l-4 border-[#C9A227] text-2xl text-[#0B2341] font-light italic leading-snug">
          <span className="absolute top-2 left-4 text-6xl text-[#C9A227] opacity-20 font-serif">"</span>
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => <ul className="list-none pl-0 mb-10 text-[#0B2341]/80 text-lg font-light space-y-4">{children}</ul>,
      number: ({ children }: any) => <ol className="list-decimal pl-6 mb-10 text-[#0B2341]/80 text-lg font-light space-y-4 font-serif">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }: any) => <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-3 before:w-3 before:h-px before:bg-[#C9A227]">{children}</li>,
    },
  };

  return (
    <main className="bg-white min-h-screen">
      
      <section className="relative w-full h-[65vh] lg:h-[80vh] bg-[#0B2341] overflow-hidden">
        {post.mainImage && (
          <Image 
            src={urlFor(post.mainImage).url()} 
            alt={post.title} 
            fill 
            priority
            className="object-cover opacity-60 scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-[#C9A227]/40 via-[#0B2341]/60 to-[#0B2341]/90"></div>
        
        <div className="absolute top-0 left-0 w-full pt-32 px-6 lg:px-12 flex justify-between items-center z-20">
          <Link href={`/${lang}/blog`} className="text-white hover:text-[#C9A227] text-[10px] font-black uppercase tracking-[0.3em] transition-colors flex items-center gap-3">
            &larr; {text.journalLink}
          </Link>
          <span className="text-[#C9A227] text-[10px] font-black uppercase tracking-[0.3em] border border-[#C9A227]/30 px-4 py-1 backdrop-blur-sm bg-[#0B2341]/30">
            {text.execBrief}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full px-6 lg:px-12 pb-24 z-10 text-center">
            <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-white leading-[0.95] mb-8 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
              {post.title}
            </h1>
        </div>
      </section>

      <section className="relative z-20 -mt-16 px-6 lg:px-12 max-w-[1400px] mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-40 bg-[#F8F8F8] p-8 border border-[#0B2341]/5 shadow-[0_10px_30px_rgba(11,35,65,0.05)]">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A227] mb-2">{text.published}</p>
              <p className="text-sm font-bold text-[#0B2341] mb-8 font-[family-name:var(--font-montserrat)]">
                {formattedDate}
              </p>
              
              <div className="w-8 h-px bg-[#0B2341]/10 mb-8"></div>
              
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A227] mb-2">{text.authored}</p>
              <p className="text-sm font-bold text-[#0B2341] mb-8 font-[family-name:var(--font-montserrat)] uppercase">
                {post.authorName || text.team}
              </p>

              <div className="w-8 h-px bg-[#0B2341]/10 mb-8"></div>
              
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C9A227] mb-4">{text.share}</p>
              <div className="flex flex-col gap-3">
                <button className="text-left text-xs font-bold text-[#0B2341]/50 hover:text-[#0B2341] uppercase tracking-widest transition-colors">LinkedIn</button>
                <button className="text-left text-xs font-bold text-[#0B2341]/50 hover:text-[#0B2341] uppercase tracking-widest transition-colors">Twitter / X</button>
                <button className="text-left text-xs font-bold text-[#0B2341]/50 hover:text-[#0B2341] uppercase tracking-widest transition-colors">Email</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-9 bg-white shadow-[0_20px_60px_-15px_rgba(11,35,65,0.05)] p-8 sm:p-12 md:p-20 border-t-8 border-[#C9A227]">
            
            <div className="lg:hidden flex flex-wrap gap-6 mb-10 pb-6 border-b border-[#0B2341]/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] mb-1">{text.published}</p>
                <p className="text-xs font-bold text-[#0B2341] uppercase">{formattedDate}</p>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] mb-1">{text.authored}</p>
                <p className="text-xs font-bold text-[#0B2341] uppercase">{post.authorName || text.team}</p>
              </div>
            </div>

            <article className="prose-lg max-w-none">
              {post.body ? (
                <PortableText value={post.body} components={ptComponents} />
              ) : (
                <div className="py-20 text-center border-y border-[#0B2341]/5">
                  <p className="text-[#0B2341]/40 italic">{text.indexing}</p>
                </div>
              )}
            </article>

            <div className="mt-24 p-10 bg-[#0B2341] text-white flex flex-col md:flex-row items-center md:items-start gap-8 border-b-4 border-[#C9A227]">
              <div className="w-16 h-16 bg-[#C9A227] shrink-0 flex items-center justify-center text-[#0B2341] font-[family-name:var(--font-montserrat)] font-black text-2xl">
                {post.authorName ? post.authorName.charAt(0) : "S"}
              </div>
              <div className="text-center md:text-left">
                <h4 className="font-[family-name:var(--font-montserrat)] text-lg font-black uppercase tracking-tight text-white mb-2">
                  {post.authorName || (lang === 'tr' ? "Salman Kurt Yönetici Ekibi" : "Salman Kurt Executive Team")}
                </h4>
                <p className="text-white/60 text-sm font-light leading-relaxed max-w-xl">
                  {text.authorBoxDesc}
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

    </main>
  );
}