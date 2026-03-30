import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wypełnij wszystkie wymagane pola.' },
        { status: 400 }
      );
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || '',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE === 'true' || parseInt(process.env.SMTP_PORT || '465') === 465,
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
      tls: {
        // Rozwiązuje problem z certyfikatami na wielu polskich hostingach (cPanel/DirectAdmin)
        rejectUnauthorized: false
      }
    });

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Where to send the contact form
      replyTo: email,
      subject: `Nowa wiadomość ze strony od: ${name}`,
      text: `
        Imię i nazwisko: ${name}
        Firma: ${company || 'Nie podano'}
        Telefon: ${phone || 'Nie podano'}
        Email: ${email}
        
        Wiadomość:
        ${message}
      `,
      html: `
        <h3>Nowa wiadomość z formularza kontaktowego</h3>
        <p><strong>Imię i nazwisko:</strong> ${name}</p>
        <p><strong>Firma:</strong> ${company || 'Nie podano'}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nie podano'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Dziękujemy za wiadomość. Skontaktujemy się z Tobą wkrótce.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Nieznany błąd';
    return NextResponse.json(
      { error: `Błąd SMTP: ${errorMessage}. Sprawdź dane logowania i host w panelu.` },
      { status: 500 }
    );
  }
}
