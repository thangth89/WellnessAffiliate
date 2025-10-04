// hooks/useFacebookCAPI.ts
'use client';
import { useCallback } from 'react';

// Interface cho Facebook CAPI Event
interface FacebookCAPIEvent {
  event_name: string;
  event_source_url?: string;
  custom_data?: {
    content_name?: string;
    content_ids?: string[];
    content_type?: string;
    value?: number;
    currency?: string;
    product_id?: number;
    cta_button?: string;
    original_price?: string;
    discount_percentage?: number;
    [key: string]: unknown;
  };
  user_data?: {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
}

// Lấy Facebook cookies (_fbp, _fbc)
function getFacebookCookies(): { fbp: string; fbc: string } {
  if (typeof document === 'undefined') {
    return { fbp: '', fbc: '' };
  }

  const cookies = document.cookie.split(';');
  let fbp = '';
  let fbc = '';

  cookies.forEach(cookie => {
    const [name, value] = cookie.trim().split('=');
    if (name === '_fbp') fbp = decodeURIComponent(value);
    if (name === '_fbc') fbc = decodeURIComponent(value);
  });

  return { fbp, fbc };
}

// Generate unique event ID để deduplication giữa Pixel và CAPI
function generateEventId(): string {
  return `${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;
}

export function useFacebookCAPI() {
  const trackEvent = useCallback(async (event: FacebookCAPIEvent) => {
    try {
      const { fbp, fbc } = getFacebookCookies();
      const eventId = generateEventId();
      const eventSourceUrl = event.event_source_url || (typeof window !== 'undefined' ? window.location.href : '');

      // 1. Track với Browser Pixel trước (nếu có)
      if (typeof window !== 'undefined' && window.fbq) {
        try {
          window.fbq('track', event.event_name, {
          ...event.custom_data,
          event_id: eventId,
        });
        } catch (pixelError) {
          console.warn('Browser Pixel tracking failed:', pixelError);
        }
      }

      // 2. Gửi đến server để track với CAPI (không chờ response để không block UI)
      const capiPromise = fetch('/api/facebook-capi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event_name: event.event_name,
          event_source_url: eventSourceUrl,
          event_id: eventId, // Cùng eventID để Facebook deduplicate
          fbp: fbp || undefined,
          fbc: fbc || undefined,
          custom_data: event.custom_data,
          user_data: event.user_data,
        }),
      });

      // Track CAPI nhưng không block UI
      capiPromise
        .then(async response => {
          if (!response.ok) {
            const error = await response.json();
            console.warn('CAPI tracking failed:', error);
          } else {
            const result = await response.json();
            console.log('CAPI tracking success:', result);
          }
        })
        .catch(error => {
          console.warn('CAPI request failed:', error);
        });

      return { 
        success: true, 
        eventId,
        message: 'Event tracked via Pixel and CAPI' 
      };

    } catch (error) {
      console.error('Facebook CAPI Hook Error:', error);
      return { 
        success: false, 
        error,
        message: 'Failed to track event'
      };
    }
  }, []);

  return { trackEvent };
}

// Export helper functions

export { getFacebookCookies, generateEventId };

