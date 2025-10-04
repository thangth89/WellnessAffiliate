import { NextRequest, NextResponse } from "next/server";

interface FacebookUserData {
  em?: string; // email (SHA256 hashed nếu có)
  ph?: string; // phone (SHA256 hashed nếu có)
  client_ip_address?: string;
  client_user_agent?: string;
}

interface FacebookEvent {
  event_name: string;
  event_time: number;
  event_id: string;
  user_data?: FacebookUserData;
  custom_data?: Record<string, unknown>;
}

export async function POST(req: NextRequest) {
  try {
    const body: FacebookEvent = await req.json();

    if (!body.event_name || !body.event_time || !body.event_id) {
      return NextResponse.json(
        { error: "Missing required fields: event_name, event_time, or event_id" },
        { status: 400 }
      );
    }

    // Gửi request đến Facebook Conversion API
    const fbResponse = await fetch(
      `https://graph.facebook.com/v20.0/${process.env.NEXT_PUBLIC_FB_PIXEL_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [body] }),
      }
    );

    const result = await fbResponse.json();

    return NextResponse.json(result, { status: fbResponse.status });
  } catch (error) {
    console.error("Facebook CAPI error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
