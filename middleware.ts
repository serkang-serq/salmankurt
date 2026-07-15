import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "tr"];
const defaultLocale = "en";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Sistem dosyalarını, API'leri ve Sanity'yi yönlendirmeden (redirect) koru
  if (
    pathname.startsWith("/studio") || 
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 2. URL'de halihazırda bir dil var mı kontrolü (Örn: /en/about)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 3. Kullanıcının dilini bul (Türkçe kullanıyorsa tr, değilse en)
  const acceptLanguage = request.headers.get("accept-language") || "";
  const locale = acceptLanguage.toLowerCase().includes("tr") ? "tr" : defaultLocale;

  // 4. Doğru URL'yi oluştur ve anında yönlendir
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

// Hangi sayfalarda middleware çalışmalı kuralı (Statik dosyaları atlar)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|studio).*)',
  ],
};