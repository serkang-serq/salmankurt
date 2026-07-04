"use client";

import { useState } from "react";

export default function HomeContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
        <h4 className="text-2xl font-[family-name:var(--font-montserrat)] font-black uppercase mb-4">Inquiry Received</h4>
        <p className="text-white/70 text-sm mb-8">Your message has been securely transmitted to our executive team.</p>
        <button onClick={() => setIsSuccess(false)} className="px-6 py-3 border border-[#C9A227] text-[#C9A227] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C9A227] hover:text-[#0B2341] transition-colors">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 shadow-[0_20px_50px_-15px_rgba(11,35,65,0.05)] border border-[#0B2341]/5 space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">Full Name</label>
          <input type="text" name="name" required className="w-full bg-[#F8F8F8] border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors" />
        </div>
        <div className="space-y-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">Email Address</label>
          <input type="email" name="email" required className="w-full bg-[#F8F8F8] border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors" />
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60 block">Inquiry Type</label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex items-center gap-3 bg-[#F8F8F8] px-4 py-3 text-xs font-bold uppercase text-[#0B2341]/80 cursor-pointer hover:border-[#C9A227] border border-transparent transition-all">
            <input type="radio" name="inquiry_type" value="Tourism" className="accent-[#C9A227]" defaultChecked /> Tourism
          </label>
          <label className="flex items-center gap-3 bg-[#F8F8F8] px-4 py-3 text-xs font-bold uppercase text-[#0B2341]/80 cursor-pointer hover:border-[#C9A227] border border-transparent transition-all">
            <input type="radio" name="inquiry_type" value="Real Estate" className="accent-[#C9A227]" /> Real Estate
          </label>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-[10px] font-black uppercase tracking-widest text-[#0B2341]/60">Message</label>
        <textarea name="message" required rows={4} className="w-full bg-[#F8F8F8] border border-transparent px-4 py-3 text-sm focus:outline-none focus:border-[#C9A227] transition-colors resize-none"></textarea>
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#C9A227] text-[#0B2341] text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-[#0B2341] hover:text-white">
        {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
      </button>
    </form>
  );
}