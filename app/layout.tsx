import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      {/* Arka planı F8F8F8, metin seçme (selection) rengini lüks gold yaptık */}
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-[#F8F8F8] text-[#0B2341] selection:bg-[#C9A227] selection:text-white`}>
        
        {/* DUYURU BARI - Gold zemin, Lacivert yazı (Çok güçlü bir kontrast ve güven verir) */}
        <div className="bg-[#C9A227] text-[#0B2341] text-xs md:text-sm font-black uppercase tracking-[0.15em] text-center py-2.5 px-4 cursor-pointer hover:bg-[#0B2341] hover:text-[#C9A227] transition-colors duration-300">
          LATEST INSIGHT: STRATEGIC US REAL ESTATE POSITIONING FOR 2026 &rarr;
        </div>

        {/* PREMİUM NAVBAR - Koyu Lacivert Zemin (#0B2341) */}
        <nav className="bg-[#0B2341] sticky top-0 z-50 shadow-[0_4px_20px_-2px_rgba(11,35,65,0.15)]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-20 md:h-24 flex items-center justify-between">
            
            {/* Otoriter Kalın Logo */}
            <Link href="/" className="font-[family-name:var(--font-montserrat)] text-3xl md:text-4xl font-black tracking-tighter text-white uppercase">
              Salman<span className="text-[#C9A227]">Kurt</span>
            </Link>
            
            {/* Menü - Beyaz/Gold Hover geçişleri */}
            <div className="hidden xl:flex items-center space-x-7 text-[12px] uppercase font-bold tracking-[0.1em] text-white/90">
              <Link href="/" className="hover:text-[#C9A227] transition-colors">Home</Link>
              <Link href="/about" className="hover:text-[#C9A227] transition-colors">About Salman</Link>
              <Link href="/seadrop" className="hover:text-[#C9A227] transition-colors">Sea Drop Travel</Link>
              <Link href="/floridarealestate" className="hover:text-[#C9A227] transition-colors">Florida Real Estate</Link>
              
              {/* Aktif Sayfa (Blog) - Gold renk ve zarif alt çizgi */}
              <Link href="/blog" className="text-[#C9A227] border-b-2 border-[#C9A227] pb-1">Blog</Link>
              <Link href="/media" className="hover:text-[#C9A227] transition-colors">Media</Link>
              <Link href="/gallery" className="hover:text-[#C9A227] transition-colors">Gallery</Link>
              
              {/* Premium Buton - Gold'dan Beyaza, gölgelendirmesi artırıldı */}
              <Link 
                href="/contact" 
                className="ml-6 group relative inline-flex items-center gap-3 px-8 py-3.5 bg-[#C9A227] text-[#0B2341] text-xs font-black uppercase tracking-[0.15em] rounded-sm overflow-hidden transition-all duration-500 shadow-[0_15px_30px_-10px_rgba(201,162,39,0.4)] hover:bg-white hover:text-[#0B2341]"
              >
                <span className="relative z-10">CONTACT</span>
                <span className="relative z-10 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}