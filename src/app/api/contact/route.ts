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
          message: "All fields are required and reCAPTCHA must be verified.",
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
          { message: "reCAPTCHA verification failed or a bot was detected." },
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
      { message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "An error occurred on the server while sending the email." },
      { status: 500 },
    );
  }
}
