// app/api/newsletter/route.ts
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let data: unknown;
    try {
      data = await res.json(); // nếu Script trả JSON
    } catch {
      const text = await res.text(); // fallback khi Script trả text
      data = { message: text };
    }

    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("API Proxy Error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

