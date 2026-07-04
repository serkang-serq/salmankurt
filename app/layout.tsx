import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
// Yeni oluşturduğumuz lüks Navbar'ı içeri aktarıyoruz
import Navbar from "@/app/navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Salman Kurt | Tourism Entrepreneur & Global Investor",
  description: "Official website of Salman Kurt. Entrepreneur, investor, and visionary behind Sea Drop Travel, Ephesus Tours, and strategic USA real estate ventures.",
  keywords: ["Salman Kurt", "Kuşadası", "Ephesus Tours", "Sea Drop Travel", "Turizm Girişimcisi", "USA Investments", "Damlacan Ltd"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-[#F8F8F8] text-[#0B2341] selection:bg-[#C9A227] selection:text-white`}>
        
        {/* DUYURU BARI */}
        <div className="bg-[#C9A227] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] text-center py-2.5 px-4 cursor-pointer hover:bg-[#0B2341] hover:text-[#C9A227] transition-colors duration-300 relative z-[150]">
          LATEST INSIGHT: STRATEGIC US REAL ESTATE POSITIONING FOR 2026 &rarr;
        </div>

        {/* BİZİM YAZDIĞIMIZ DİNAMİK VE MOBİL UYUMLU NAVBAR BURADA DEVREYE GİRİYOR */}
        <Navbar />

        {children}

        {/* EKSİK OLAN FOOTER BURAYA EKLENDİ */}
        <Footer />
        
      </body>
    </html>
  );
}