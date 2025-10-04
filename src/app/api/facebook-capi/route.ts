// app/api/facebook-capi/route.ts
import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = process.env.FACEBOOK_PIXEL_ID || '';
const ACCESS_TOKEN = process.env.FACEBOOK_CAPI_TOKEN || '';
const CAPI_URL = `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`;

// Hash dữ liệu người dùng theo chuẩn SHA256
function hashData(data: string): string {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.toLowerCase().trim()).digest('hex');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      eventName,
      eventId,
      userData = {},
      customData = {},
      eventSourceUrl,
    } = body;

    // Lấy thông tin từ request headers
    const userAgent = request.headers.get('user-agent') || '';
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || 
                     request.headers.get('x-real-ip') || '';

    // Chuẩn bị User Data với hashing
    const hashedUserData: Record<string, string | string[]> = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };

    // Hash email nếu có
    if (userData.email) {
      hashedUserData.em = [hashData(userData.email)];
    }

    // Hash phone nếu có
    if (userData.phone) {
      hashedUserData.ph = [hashData(userData.phone)];
    }

    // Hash first name nếu có
    if (userData.firstName) {
      hashedUserData.fn = [hashData(userData.firstName)];
    }

    // Hash last name nếu có
    if (userData.lastName) {
      hashedUserData.ln = [hashData(userData.lastName)];
    }

    // Hash external_id (fbp/fbc cookie)
    if (userData.fbp) {
      hashedUserData.fbp = userData.fbp;
    }

    if (userData.fbc) {
      hashedUserData.fbc = userData.fbc;
    }

    // Chuẩn bị event data
    const eventData = {
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId || crypto.randomUUID(),
      event_source_url: eventSourceUrl || request.headers.get('referer') || '',
      action_source: 'website',
      user_data: hashedUserData,
      custom_data: customData,
    };

    // Gửi đến Facebook CAPI
    const response = await fetch(CAPI_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: [eventData],
        access_token: ACCESS_TOKEN,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Facebook CAPI Error:', result);
      return NextResponse.json(
        { success: false, error: result },
        { status: response.status }
      );
    }

    return NextResponse.json({ 
      success: true, 
      result,
      eventId: eventData.event_id 
    });

  } catch (error) {
    console.error('CAPI Request Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}