'use client';
import { useEffect, useRef, useState } from 'react';

export default function TailwindScrollingBanner() {
  const messages = [
    "🚛 Free Shipping on Orders Over $70",
    "🌟 Trusted by Over 1 Million Happy Customers", 
    "🛡️ 90-Day Money-Back Guarantee"
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationDuration, setAnimationDuration] = useState(15);
  
  // Nhân bản đủ để đảm bảo luôn có nội dung trên màn hình
  const repeatedMessages = [...messages, ...messages, ...messages, ...messages];
  
  useEffect(() => {
    if (containerRef.current) {
      const scrollWidth = containerRef.current.scrollWidth;
      // Tính duration dựa trên chiều dài thực tế
      const duration = (scrollWidth / 4) / 50; // Chia 4 vì đã nhân 4 lần
      setAnimationDuration(duration);
    }
  }, []);
  
  return (
    <div className="bg-green-500 text-white py-2 overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          animation: `marquee ${animationDuration}s linear infinite`
        }}
      >
        {repeatedMessages.map((msg, idx) => (
          <span
            key={idx}
            className="inline-block flex-shrink-0 px-4 md:px-8 text-xs sm:text-sm md:text-base font-medium"
          >
            {msg}
          </span>
        ))}
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); } 
        }
        div[style*="animation: marquee"] {
          display: flex;
          align-items: center;
        }
        div[style*="animation: marquee"]:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
