import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: "Email service not configured" },
      { status: 500 }
    );
  }
  const resend = new Resend(apiKey);
  const body = await req.json();
  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "your-email@gmail.com",
    subject: "New Portfolio Contact",
    text: JSON.stringify(body, null, 2),
  });
  return NextResponse.json({ success: true });
}