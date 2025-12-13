export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_AI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await res.json();

    return Response.json({
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text || "No response",
    });
  } catch (error) {
    return Response.json(
      { error: "Google AI error", details: error.message },
      { status: 500 }
    );
  }
}
