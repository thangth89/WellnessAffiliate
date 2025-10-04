// components/FacebookPixel.tsx
'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import { trackPageView } from '@/lib/facebook-capi';

declare global {
  interface Window {
    fbq: (type: string, event: string, data?: Record<string, unknown>, options?: Record<string, unknown>) => void;
    _fbq: Window['fbq'];
  }
}

interface FacebookPixelProps {
  pixelId: string;
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    // Khởi tạo Facebook Pixel khi component mount
    if (typeof window !== 'undefined' && window.fbq) {
      // Tạo event ID duy nhất cho PageView
      const eventId = `pageview_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      // Init Facebook Pixel
      window.fbq('init', pixelId);
      
      // Track PageView với Browser Pixel (kèm eventID để deduplication)
      window.fbq('track', 'PageView', {}, { eventID: eventId });
      
      // Track PageView với CAPI (server-side) - sử dụng cùng eventID
      trackPageView(eventId).catch((error) => {
        console.warn('CAPI PageView tracking failed:', error);
      });
    }
  }, [pixelId]);

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}