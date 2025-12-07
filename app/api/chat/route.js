import OpenAI from "openai";

export async function POST(req) {
  const { messages } = await req.json();

  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages,
  });

  return new Response(JSON.stringify(response.choices[0].message), {
    headers: { "Content-Type": "application/json" },
  });
}
