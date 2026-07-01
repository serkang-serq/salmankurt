import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Gizli kasamızdaki şifreyle kuryeyi uyandırıyoruz
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Sitedeki formdan gelen bilgileri paketinden çıkarıyoruz
    const body = await request.json();
    const { name, email, inquiry_type, message } = body;

    // Kuryeye "Bu bilgileri şu adrese mail at" diyoruz
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend'in varsayılan test göndericisi (Burası şimdilik kalmalı)
      to: 'serkanguleen@hotmail.com', // Buraya KENDİ mail adresini yaz!
      subject: `New Inquiry: ${inquiry_type} - from ${name}`,
      html: `
        <h2>Yeni Bir İletişim Formu Dolduruldu</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>İlgi Alanı:</strong> ${inquiry_type}</p>
        <p><strong>Mesaj:</strong><br/> ${message}</p>
      `,
    });

    // Her şey yolundaysa siteye "Başarılı" mesajı gönderiyoruz
    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    // Hata çıkarsa siteye "Gönderilemedi" uyarısı veriyoruz
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}