import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // Minimal placeholder to satisfy TS/types + keep the endpoint usable.
  // If you later wire this to an actual AI provider, replace this logic.
  const _body = await request.json().catch(() => ({} as unknown));

  return NextResponse.json(
    {
      ok: true,
      message: "Assistant endpoint is online (placeholder).",
      // Echo something stable for debugging
      input: _body,
    },
    { status: 200 }
  );
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Assistant endpoint is online." },
    { status: 200 }
  );
}
