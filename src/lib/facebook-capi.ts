// lib/facebook-capi.ts

interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  fbp?: string;
  fbc?: string;
}

interface CustomData {
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  value?: number;
  currency?: string;
  content_category?: string;
  product_id?: number;
  cta_button?: string;
  original_price?: string;
  discount_percentage?: number;
  [key: string]: unknown;
}

interface TrackEventParams {
  eventName: string;
  eventId?: string;
  userData?: UserData;
  customData?: CustomData;
  eventSourceUrl?: string;
}

// Lấy Facebook cookies
function getFacebookCookies() {
  if (typeof document === 'undefined') return {};
  
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return {
    fbp: cookies._fbp || '',
    fbc: cookies._fbc || '',
  };
}

// Track event với CAPI
export async function trackFacebookCAPI({
  eventName,
  eventId,
  userData = {},
  customData = {},
  eventSourceUrl,
}: TrackEventParams): Promise<boolean> {
  try {
    // Thêm Facebook cookies vào userData
    const fbCookies = getFacebookCookies();
    const enrichedUserData = {
      ...userData,
      ...fbCookies,
    };

    const response = await fetch('/api/facebook-capi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        userData: enrichedUserData,
        customData,
        eventSourceUrl: eventSourceUrl || window.location.href,
      }),
    });

    const result = await response.json();
    
    if (!response.ok) {
      console.error('CAPI tracking failed:', result);
      return false;
    }

    console.log('CAPI tracked successfully:', result);
    return true;
  } catch (error) {
    console.error('CAPI tracking error:', error);
    return false;
  }
}

// Track PageView
export function trackPageView(eventId?: string) {
  return trackFacebookCAPI({
    eventName: 'PageView',
    eventId,
  });
}

// Track ViewContent
export function trackViewContent(params: {
  contentName: string;
  contentId: string;
  value?: number;
  currency?: string;
  eventId?: string;
}) {
  return trackFacebookCAPI({
    eventName: 'ViewContent',
    eventId: params.eventId,
    customData: {
      content_name: params.contentName,
      content_ids: [params.contentId],
      content_type: 'product',
      value: params.value,
      currency: params.currency || 'USD',
    },
  });
}

// Track AddToCart
export function trackAddToCart(params: {
  contentName: string;
  contentId: string;
  value: number;
  currency?: string;
  eventId?: string;
}) {
  return trackFacebookCAPI({
    eventName: 'AddToCart',
    eventId: params.eventId,
    customData: {
      content_name: params.contentName,
      content_ids: [params.contentId],
      content_type: 'product',
      value: params.value,
      currency: params.currency || 'USD',
    },
  });
}

// Track Custom Event (cho affiliate clicks)
export function trackCustomEvent(params: {
  eventName: string;
  customData?: CustomData;
  eventId?: string;
}) {
  return trackFacebookCAPI({
    eventName: params.eventName,
    eventId: params.eventId,
    customData: params.customData,
  });
}