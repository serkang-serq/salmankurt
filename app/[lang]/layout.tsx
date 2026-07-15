import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "../globals.css"; 
import Navbar from "../components/navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Salman Kurt | Tourism Entrepreneur & Global Investor",
  description: "Official website of Salman Kurt. Entrepreneur, investor, and visionary behind Sea Drop Travel, Ephesus Tours, and strategic USA real estate ventures.",
  keywords: ["Salman Kurt", "Kuşadası", "Ephesus Tours", "Sea Drop Travel", "Turizm Girişimcisi", "USA Investments", "Damlacan Ltd"],
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // İŞTE ÇÖZÜM BURADA: Sadece string olduğunu belirttik
  params: Promise<{ lang: string }>; 
}) {
  const resolvedParams = await params;
  // Gelen veriyi burada güvenli bir şekilde "en" veya "tr" olarak kilitliyoruz
  const lang = (resolvedParams?.lang === 'tr' ? 'tr' : 'en') as "en" | "tr";

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-[#F8F8F8] text-[#0B2341] selection:bg-[#C9A227] selection:text-white flex flex-col min-h-screen`}>
        
        {/* DUYURU BARI */}
        <div className="bg-[#C9A227] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] text-center py-2.5 px-4 cursor-pointer hover:bg-[#0B2341] hover:text-[#C9A227] transition-colors duration-300 relative z-[150]">
          {lang === "tr" 
            ? "GÜNCEL BİLGİ: 2026 İÇİN STRATEJİK ABD GAYRİMENKUL KONUMLANDIRMASI →" 
            : "LATEST INSIGHT: STRATEGIC US REAL ESTATE POSITIONING FOR 2026 →"}
        </div>

        <Navbar lang={lang} />

        <div className="flex-grow">
          {children}
        </div>

        <Footer lang={lang} />
        
      </body>
    </html>
  );
}