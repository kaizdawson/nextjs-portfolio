import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    
    const toEmail = process.env.TO_EMAIL;

    
    const fromEmail = process.env.FROM_EMAIL;

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: toEmail,              
      replyTo: email,           
      subject: `[Portfolio] ${subject}`,
      html: `
        <h2>New message from portfolio</h2>
        <p><b>From:</b> ${email}</p>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Message:</b></p>
        <p>${String(message).replaceAll("\n", "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { ok: false, error: error?.message || "Server error" },
      { status: 500 }
    );
  }
}
