// app/api/chat/route.js
import OpenAI from "openai";

export async function POST(req) {
  try {
    const body = await req.json();
    // Accept either { message } or { messages } depending on widget
    const message = body?.message ?? (body?.messages ? body.messages.slice(-1)[0]?.content : undefined);

    if (!message) {
      return new Response(JSON.stringify({ error: "No message provided" }), { status: 400 });
    }

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // Use Responses API for a short single-turn reply
    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: message,
      max_output_tokens: 300,
    });

    // completion.output_text is a friendly shortcut; fallback to structured output
    const reply = completion.output_text ?? (
      completion.output?.[0]?.content?.[0]?.text ?? "No reply"
    );

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Chat API error:", err);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
  }
}
