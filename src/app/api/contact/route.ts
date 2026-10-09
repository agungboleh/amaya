import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { getConsultationEmailHtml } from "./emailTemplate";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, company, message, recaptchaToken } = body;
    if (!fullName || !email || !message || !recaptchaToken) {
      return NextResponse.json(
        {
          message: "Semua kolom wajib diisi dan reCAPTCHA harus diverifikasi.",
        },
        { status: 400 },
      );
    }
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (secretKey) {
      const recaptchaRes = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
        { method: "POST" },
      );
      const recaptchaData = await recaptchaRes.json();
      if (!recaptchaData.success || recaptchaData.score < 0.5) {
        return NextResponse.json(
          { message: "Verifikasi reCAPTCHA gagal atau terdeteksi bot." },
          { status: 403 },
        );
      }
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "mrdroidxd@gmail.com",
      subject: `[CONSULTATION REQUEST] - ${fullName} (${company || "Perorangan"})`,
      text: `
        Full Name : ${fullName}
        Email: ${email}
        Company : ${company || "-"}

        Message :
        ${message}
      `,
      html: getConsultationEmailHtml({ fullName, email, company, message }),
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Pesan berhasil dikirim!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Gagal mengirim email:", error);
    return NextResponse.json(
      { message: "Terjadi kesalahan pada server saat mengirim email." },
      { status: 500 },
    );
  }
}
