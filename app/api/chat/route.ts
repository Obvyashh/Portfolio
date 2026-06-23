import { NextResponse } from "next/server";

type ChatMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

type ChatRequestBody = {
  messages?: ChatMessage[];
};

const SYSTEM_PROMPT =
  "You are Yash's AI portfolio assistant. Answer like a professional backend + AI engineer portfolio guide. Be concise, helpful, and specific about Yash's work in backend systems, AI interfaces, and product engineering.";

function isValidMessages(messages: unknown): messages is ChatMessage[] {
  return (
    Array.isArray(messages) &&
    messages.every(
      (message) =>
        typeof message === "object" &&
        message !== null &&
        (message as { role?: unknown }).role &&
        ["system", "user", "assistant"].includes(
          String((message as { role?: unknown }).role)
        ) &&
        typeof (message as { content?: unknown }).content === "string"
    )
  );
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ChatRequestBody;

    if (!isValidMessages(body.messages)) {
      return NextResponse.json(
        { error: "messages must be an array of chat messages." },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...body.messages],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          error: "OpenAI request failed.",
          details: errorText,
        },
        { status: response.status }
      );
    }

    const data: {
      choices?: Array<{
        message?: {
          content?: string | null;
        };
      }>;
    } = await response.json();

    const reply = data.choices?.[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "No response content returned from OpenAI." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      reply,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate assistant response." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { ok: true, message: "Chat endpoint is online." },
    { status: 200 }
  );
}
