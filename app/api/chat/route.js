// app/api/chat/route.js
export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(JSON.stringify({ error: "No message provided" }), { status: 400 });
    }

    const OPENAI_KEY = process.env.OPENAI_API_KEY;

    // If key not set, return a helpful message (client will show fallback)
    if (!OPENAI_KEY) {
      return new Response(JSON.stringify({ reply: "No OpenAI key configured — set OPENAI_API_KEY in Vercel." }), { status: 200 });
    }

    // Call OpenAI Chat Completions (v1/chat/completions)
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
        max_tokens: 300,
      })
    });

    if (!resp.ok) {
      const txt = await resp.text();
      return new Response(JSON.stringify({ error: txt }), { status: 500 });
    }

    const data = await resp.json();
    const reply = data?.choices?.[0]?.message?.content ?? "No reply";
    return new Response(JSON.stringify({ reply }), { status: 200, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
