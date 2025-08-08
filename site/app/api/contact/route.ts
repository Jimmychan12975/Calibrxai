import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || "hello@calibrxai.com",
      to: process.env.TO_EMAIL || "hello@calibrxai.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from Calibrx AI contact form</small></p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Email sending failed:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    console.log("Contact form submission sent:", { name, email, messageId: data?.id });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact API error:", e);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
} 