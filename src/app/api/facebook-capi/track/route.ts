import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const pixelId = process.env.FB_PIXEL_ID;
    const accessToken = process.env.FB_ACCESS_TOKEN;

    if (!pixelId || !accessToken) {
      return NextResponse.json({ error: 'Missing FB_PIXEL_ID or FB_ACCESS_TOKEN' }, { status: 500 });
    }

    const fbResponse = await fetch(
      `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: [
            {
              event_name: body.event_name,
              event_time: body.event_time,
              event_id: body.event_id,
              action_source: body.action_source,
              custom_data: body.custom_data,
              user_data: body.user_data
            }
          ]
        })
      }
    );

    const data = await fbResponse.json();
    return NextResponse.json(data, { status: fbResponse.status });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
