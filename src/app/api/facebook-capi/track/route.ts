// src/app/api/facebook-capi/track/route.ts
import { NextRequest, NextResponse } from "next/server";

// Interface cho dữ liệu sự kiện Facebook
interface FacebookEvent {
  event_name: string;
  event_time: number;
  event_id: string;
  custom_data?: Record<string, unknown>;
  user_data?: {
    em?: string; // email hash
    ph?: string; // phone hash
    client_ip_address?: string;
    client_user_agent?: string;
    [key: string]: unknown;
  };
}

export async function POST(req: NextRequest) {
  try {
    const body: FacebookEvent = await req.json();

    if (!body.event_name || !body.event_time || !body.event_id) {
      return NextResponse.json(
        { error: "Missing required fields: event_name, event_time, event_id" },
        { status: 400 }
      );
    }

    // Lấy thông tin IP và User-Agent
    const userAgent = req.headers.get("user-agent") || undefined;
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;

    const fbEvent: FacebookEvent = {
      ...body,
      user_data: {
        client_user_agent: userAgent,
        client_ip_address: ip,
        ...(body.user_data || {}),
      },
    };

    const fbResponse = await fetch(
      `https://graph.facebook.com/v20.0/${process.env.NEXT_PUBLIC_FB_PIXEL_ID}/events?access_token=${process.env.FB_ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [fbEvent] }),
      }
    );

    const result = await fbResponse.json();

    return NextResponse.json(result, { status: fbResponse.status });
  } catch (error) {
    console.error("Facebook CAPI error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
