import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { success: false, error: "RESEND_API_KEY missing in Vercel" },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);
    const body = await req.json();
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "your-email@gmail.com",
      subject: "New Portfolio Contact Message",
      text: JSON.stringify(body, null, 2),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    );
  }
}