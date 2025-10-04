import { NextRequest, NextResponse } from 'next/server';

const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID;
const ACCESS_TOKEN = process.env.FACEBOOK_CAPI_TOKEN;

export async function POST(req: NextRequest) {
  try {
    if (!PIXEL_ID || !ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'Pixel ID or Access Token missing' },
        { status: 500 }
      );
    }

    const body = await req.json();

    const eventData = {
      data: [
        {
          event_name: body.event_name || 'cta_click',
          event_time: Math.floor(Date.now() / 1000),
          event_id: body.event_id || `event_${Date.now()}`,
          action_source: 'website',
          user_data: body.user_data || {},
          custom_data: body.custom_data || {},
        },
      ],
    };

    const response = await fetch(
      `https://graph.facebook.com/v17.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: response.status });
    }

    return NextResponse.json({ success: true, fb_response: data });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
