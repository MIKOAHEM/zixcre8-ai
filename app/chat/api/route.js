import OpenAI from "openai";

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "No message provided" }), {
        status: 400,
      });
    }

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await client.responses.create({
      model: "gpt-4.1-mini",
      input: message,
    });

    const reply = completion.output_text || "I have no response";

    return new Response(JSON.stringify({ reply }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Chat API error:", err);

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
