// app/api/news/route.js
export async function GET() {
  const OPENAI_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_KEY) {
    // return demo static news if key missing
    return new Response(JSON.stringify({
      items: [
        { id: 1, title: "Welcome to ZixCre8", body: "We're live — explore 3D and AI tools." }
      ]
    }), { status: 200, headers: { "Content-Type": "application/json" }});
  }

  // Use OpenAI to create three short headlines + blurb
  try {
    const prompt = `Write 3 short news headlines (title + one-line blurb) about an online creative AI studio called "ZixCre8". Return JSON array of {title, body}.`;
    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type":"application/json", "Authorization": `Bearer ${OPENAI_KEY}` },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300
      })
    });
    const data = await resp.json();
    // naive parse: extract text and try to parse JSON
    const text = data?.choices?.[0]?.message?.content ?? "";
    try {
      const parsed = JSON.parse(text);
      return new Response(JSON.stringify({ items: parsed }), { status: 200, headers: { "Content-Type":"application/json" }});
    } catch {
      // fallback: return as single item if parsing fails
      return new Response(JSON.stringify({ items: [{ id:1, title:"Latest", body: text }] }), { status: 200, headers: { "Content-Type":"application/json" }});
    }
  } catch (err) {
    return new Response(JSON.stringify({ items: [{ id:1, title:"Welcome", body: "Could not fetch dynamic news." }] }), { status: 200, headers: { "Content-Type":"application/json" }});
  }
}
