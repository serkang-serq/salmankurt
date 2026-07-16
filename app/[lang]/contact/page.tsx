"use client";

import { useState } from "react";
// Link importunu kullanmıyorsan silebilirsin veya ileride lazım olur diye tutabilirsin
// import Link from "next/link"; 

export default function ContactPage({ dict }: { dict: any }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      inquiry_type: formData.get("inquiry_type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#F8F8F8] min-h-screen text-[#0B2341]">
      <section className="pt-32 pb-16 px-6 lg:px-12">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#C9A227] font-bold uppercase tracking-[0.2em] text-sm mb-4">
            {dict.contact.heroSub}
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-[#0B2341]">
            {dict.contact.heroTitle1} <br />
            <span className="text-[#0B2341]/30">{dict.contact.heroTitle2}</span>
          </h1>
          <div className="h-1 w-24 bg-[#C9A227] mt-8"></div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12 pb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 border border-[#0B2341]/5 shadow-sm border-l-4 border-[#C9A227]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] block mb-2">
                {dict.contact.panel1Badge}
              </span>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold uppercase tracking-tight text-[#0B2341] mb-4">
                {dict.contact.panel1Title}
              </h3>
              <p className="text-sm text-[#0B2341]/70 leading-relaxed mb-4">
                {dict.contact.panel1Desc}
              </p>
              <div className="space-y-2 text-sm font-bold tracking-wide">
                <span className="block text-[#0B2341]/40 uppercase text-[10px]">{dict.contact.panel1LocTitle}</span>
                <span className="block">{dict.contact.panel1Loc}</span>
              </div>
            </div>

            <div className="bg-[#0B2341] p-8 text-white shadow-xl border-l-4 border-[#C9A227]">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A227] block mb-2">
                {dict.contact.panel2Badge}
              </span>
              <h3 className="font-[family-name:var(--font-montserrat)] text-xl font-bold uppercase tracking-tight text-white mb-4">
                {dict.contact.panel2Title}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                {dict.contact.panel2Desc}
              </p>
              <div className="space-y-4 border-t border-white/10 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-white/40 uppercase text-[10px] font-bold">{dict.contact.panel2RepTitle}</span>
                  <span className="text-sm font-bold text-[#C9A227]">{dict.contact.panel2Rep}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/40 uppercase text-[10px] font-bold">{dict.contact.panel2CallTitle}</span>
                  <a href="tel:+13054907036" className="text-sm font-mono font-bold hover:text-[#C9A227] transition-colors">
                    +1 (305) 490-7036
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 md:p-12 border border-[#0B2341]/5 shadow-[0_20px_50px_-15px_rgba(11,35,65,0.03)]">
            <h3 className="font-[family-name:var(--font-montserrat)] text-2xl font-black uppercase tracking-tight text-[#0B2341] mb-8">
              {dict.contact.title}
            </h3>
            
            {isSuccess ? (
              <div className="bg-[#F8F8F8] border border-[#C9A227]/30 p-10 text-center">
                <div className="w-16 h-16 bg-[#C9A227] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
                <h4 className="text-2xl font-[family-name:var(--font-montserrat)] font-black text-[#0B2341] mb-4 uppercase">
                  {dict.contact.successTitle}
                </h4>
                <p className="text-[#0B2341]/70 leading-relaxed text-sm">
                  {dict.contact.successDesc}
                </p>
                <button onClick={() => setIsSuccess(false)} className="mt-8 px-6 py-3 border border-[#0B2341]/20 text-[#0B2341] text-[10px] font-bold uppercase tracking-widest hover:bg-[#0B2341] hover:text-white transition-colors">
                  {dict.contact.successBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">
                      {dict.contact.fullName}
                    </label>
                    <input type="text" name="name" required placeholder={dict.contact.namePlaceholder} className="w-full bg-[#F8F8F8] border border-[#0B2341]/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">
                      {dict.contact.email}
                    </label>
                    <input type="email" name="email" required placeholder={dict.contact.emailPlaceholder} className="w-full bg-[#F8F8F8] border border-[#0B2341]/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60 block">
                    {dict.contact.inquiryType}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="flex items-center gap-3 bg-[#F8F8F8] border border-[#0B2341]/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0B2341]/80 cursor-pointer hover:border-[#C9A227] transition-colors rounded-sm">
                      {/* VALUE DEĞERLERİNİ İNGİLİZCE BIRAKTIK Kİ MAİL HEP AYNI ŞABLONDA GELSİN */}
                      <input type="radio" name="inquiry_type" value="Sea Drop Travel & Tours" className="accent-[#C9A227]" defaultChecked />
                      {dict.contact.seaDrop}
                    </label>
                    <label className="flex items-center gap-3 bg-[#F8F8F8] border border-[#0B2341]/10 px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#0B2341]/80 cursor-pointer hover:border-[#C9A227] transition-colors rounded-sm">
                      <input type="radio" name="inquiry_type" value="Florida Real Estate" className="accent-[#C9A227]" />
                      {dict.contact.realEstate}
                    </label>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">
                    {dict.contact.message}
                  </label>
                  <textarea name="message" required rows={5} placeholder={dict.contact.messagePlaceholder} className="w-full bg-[#F8F8F8] border border-[#0B2341]/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors rounded-sm resize-none"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-4 text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 group flex items-center justify-center gap-3 shadow-lg ${isSubmitting ? 'bg-[#0B2341] text-white opacity-70 cursor-not-allowed' : 'bg-[#C9A227] text-[#0B2341] hover:bg-[#0B2341] hover:text-white'}`}
                >
                  {isSubmitting ? dict.contact.submitting : <>
                    {dict.contact.submitBtn} <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                  </>}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
    </main>
  );
}