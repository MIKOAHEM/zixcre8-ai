export async function POST(req) {
  try {
    const { message } = await req.json();

    // Simple response for now (you can replace with OpenAI later)
    return Response.json({
      reply: "Hello from ZixCre8 AI — You said: " + message,
    });

  } catch (error) {
    return Response.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
