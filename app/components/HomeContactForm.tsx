"use client";

import { useState } from "react";

export default function HomeContactForm({ lang }: { lang: "en" | "tr" }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // DİNAMİK ÇEVİRİ SÖZLÜĞÜ
  const formText = {
    en: {
      fullName: "Full Name",
      email: "Email Address",
      inquiryType: "Inquiry Type",
      tourism: "Tourism",
      realEstate: "Real Estate",
      message: "Message",
      submitBtn: "SUBMIT INQUIRY",
      submittingBtn: "TRANSMITTING...",
      successTitle: "Inquiry Received",
      successDesc: "Your message has been securely transmitted to our executive team.",
      sendAnother: "Send Another",
    },
    tr: {
      fullName: "Ad Soyad",
      email: "E-Posta Adresi",
      inquiryType: "İletişim Türü",
      tourism: "Turizm",
      realEstate: "Gayrimenkul",
      message: "Mesajınız",
      submitBtn: "GÖNDER",
      submittingBtn: "İLETİLİYOR...",
      successTitle: "Talebiniz Alındı",
      successDesc: "Mesajınız yönetim ekibimize güvenli bir şekilde iletilmiştir.",
      sendAnother: "Yeni Mesaj Gönder",
    }
  };

  // lang gelmezse çökmeyi önleyen güvenlik kalkanı
  const t = formText[lang] || formText.en;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) setIsSuccess(true);
    } catch (error) {
      console.error("Hata:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#0B2341] p-12 text-center text-white shadow-2xl h-full flex flex-col justify-center">
        <div className="w-16 h-16 bg-[#C9A227] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
        <h4 className="text-2xl font-[family-name:var(--font-montserrat)] font-black uppercase mb-4">{t.successTitle}</h4>
        <p className="text-white/70 text-sm mb-8">{t.successDesc}</p>
        <button onClick={() => setIsSuccess(false)} className="px-6 py-3 border border-[#C9A227] text-[#C9A227] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors">
          {t.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(11,35,65,0.05)] border border-[#0B2341]/5 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">{t.fullName}</label>
          {/* text-[#0B2341] EKLENDİ */}
          <input type="text" name="name" required className="w-full bg-[#F8F8F8] text-[#0B2341] border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">{t.email}</label>
          {/* text-[#0B2341] EKLENDİ */}
          <input type="email" name="email" required className="w-full bg-[#F8F8F8] text-[#0B2341] border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors" />
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60 block">{t.inquiryType}</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex items-center gap-3 bg-[#F8F8F8] px-4 py-3 text-xs font-bold uppercase text-[#0B2341]/80 cursor-pointer hover:border-[#C9A227] border border-transparent transition-all">
            <input type="radio" name="inquiry_type" value="Tourism" className="accent-[#C9A227]" defaultChecked /> {t.tourism}
          </label>
          <label className="flex items-center gap-3 bg-[#F8F8F8] px-4 py-3 text-xs font-bold uppercase text-[#0B2341]/80 cursor-pointer hover:border-[#C9A227] border border-transparent transition-all">
            <input type="radio" name="inquiry_type" value="Real Estate" className="accent-[#C9A227]" /> {t.realEstate}
          </label>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">{t.message}</label>
        {/* text-[#0B2341] EKLENDİ */}
        <textarea name="message" required rows={4} className="w-full bg-[#F8F8F8] text-[#0B2341] border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors resize-none"></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#C9A227] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-[#0B2341] hover:text-white">
        {isSubmitting ? t.submittingBtn : t.submitBtn}
      </button>
    </form>
  );
}