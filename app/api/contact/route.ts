import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiry_type, message } = body;

    await resend.emails.send({
      from: 'Salman Kurt <info@salmankurt.com>', 
      to: ['Salman@seadroptravel.com'], 
      replyTo: email, // <-- İŞTE BURASI DÜZELDİ
      subject: `Yeni Talep: ${inquiry_type} - ${name}`,
      html: `
        <h2>Web Sitesinden Yeni Bir Form Dolduruldu</h2>
        <p><strong>İsim:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>İlgi Alanı:</strong> ${inquiry_type}</p>
        <p><strong>Mesaj:</strong><br/> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}