import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    if (!message) {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are ZixCre8 AI, a creative assistant." },
        { role: "user", content: message },
      ],
    });

    return Response.json({
      reply: completion.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "AI service error" }),
      { status: 500 }
    );
  }
}
