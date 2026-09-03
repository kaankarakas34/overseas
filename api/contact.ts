import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS Headers for Vercel deployment
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    const { 
      fullName, 
      clinicName, 
      email, 
      phone, 
      message, 
      formType = 'İletişim Formu', 
      selectedServices = [], 
      targetCountries = '', 
      preferredTime = '',
      serviceInterest = ''
    } = req.body || {};

    if (!fullName || !email || !phone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Lütfen zorunlu alanları (Ad Soyad, E-posta, Telefon) doldurunuz.' 
      });
    }

    const host = process.env.SMTP_HOST || 'mail.kurumsaleposta.com';
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER || 'info@overseas.marketing';
    const pass = process.env.SMTP_PASS || 'Vnl@.4qb8:7HVK7:';
    // Her iki e-postaya da gönderilir (info@overseas.marketing ve kaankarakas93@gmail.com)
    const recipient = process.env.RECIPIENT_EMAIL || 'info@overseas.marketing, kaankarakas93@gmail.com';

    // Nodemailer transporter with kurumsaleposta.com SMTP settings
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
      tls: {
        rejectUnauthorized: false
      }
    });

    const now = new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
    const formattedServices = Array.isArray(selectedServices) && selectedServices.length > 0 
      ? selectedServices.join(', ') 
      : 'Belirtilmedi';

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #F8FAFC; color: #222222; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #DDE2E8; box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
          .header { background: #16202E; color: #ffffff; padding: 24px 30px; border-bottom: 3px solid #446CB5; }
          .header h2 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; color: #ffffff; }
          .header p { margin: 4px 0 0 0; font-size: 12px; color: #60A5FA; font-weight: 600; }
          .content { padding: 30px; }
          .badge { display: inline-block; padding: 4px 12px; background: #EEF3FB; color: #446CB5; border-radius: 6px; font-weight: 700; font-size: 12px; margin-bottom: 20px; border: 1px solid rgba(68,108,181,0.2); }
          .table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          .table td { padding: 12px 14px; border-bottom: 1px solid #EEF3FB; font-size: 13px; }
          .table td.label { font-weight: 700; color: #595F69; width: 35%; background: #FAFBFD; }
          .table td.value { color: #222222; font-weight: 600; }
          .message-box { margin-top: 20px; padding: 16px; background: #F8FAFC; border-left: 4px solid #446CB5; border-radius: 6px; font-size: 13px; line-height: 1.6; color: #333333; }
          .footer { background: #F8FAFC; padding: 16px 30px; font-size: 11px; color: #888888; text-align: center; border-top: 1px solid #DDE2E8; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>OVERSEAS MARKETING</h2>
            <p>Yeni Web Formu Bildirimi (${formType})</p>
          </div>
          <div class="content">
            <div class="badge">📬 Web Sitesinden Yeni Başvuru Alındı</div>
            
            <table class="table">
              <tr>
                <td class="label">Başvuru Tipi:</td>
                <td class="value">${formType}</td>
              </tr>
              <tr>
                <td class="label">Ad Soyad:</td>
                <td class="value">${fullName}</td>
              </tr>
              <tr>
                <td class="label">Klinik / Kurum:</td>
                <td class="value">${clinicName || 'Belirtilmedi'}</td>
              </tr>
              <tr>
                <td class="label">E-Posta:</td>
                <td class="value"><a href="mailto:${email}" style="color:#446CB5;">${email}</a></td>
              </tr>
              <tr>
                <td class="label">Telefon / WhatsApp:</td>
                <td class="value"><a href="tel:${phone}" style="color:#446CB5;">${phone}</a></td>
              </tr>
              ${serviceInterest ? `
              <tr>
                <td class="label">İlgilenilen Hizmet:</td>
                <td class="value">${serviceInterest}</td>
              </tr>` : ''}
              ${preferredTime ? `
              <tr>
                <td class="label">Tercih Edilen Saat:</td>
                <td class="value">${preferredTime}</td>
              </tr>` : ''}
              ${selectedServices.length > 0 ? `
              <tr>
                <td class="label">Seçilen Hizmetler:</td>
                <td class="value">${formattedServices}</td>
              </tr>` : ''}
              ${targetCountries ? `
              <tr>
                <td class="label">Hedef Pazarlar:</td>
                <td class="value">${targetCountries}</td>
              </tr>` : ''}
              <tr>
                <td class="label">Tarih / Saat:</td>
                <td class="value">${now}</td>
              </tr>
            </table>

            ${message ? `
            <div style="margin-top:20px; font-weight:700; font-size:12px; color:#595F69; uppercase">Hasta / Müşteri Notu:</div>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            ` : ''}
          </div>
          <div class="footer">
            Bu e-posta <strong>overseas.marketing</strong> web sitesindeki form üzerinden otomatik olarak gönderilmiştir.
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"Overseas Web Form" <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `[Yeni Form] ${formType} - ${fullName} (${clinicName || 'Klinik'})`,
      text: `Yeni Form Bildirimi (${formType}):\n\nAd Soyad: ${fullName}\nKlinik: ${clinicName || '-'}\nE-posta: ${email}\nTelefon: ${phone}\nNot: ${message || '-'}\nTarih: ${now}`,
      html: htmlTemplate
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: 'Form e-postası başarıyla iletildi.'
    });
  } catch (error: any) {
    console.error('SMTP Email Error:', error);
    return res.status(500).json({
      success: false,
      error: 'E-posta gönderimi sırasında bir hatayla karşılaşıldı.',
      details: error?.message || 'Bilinmeyen hata'
    });
  }
}
