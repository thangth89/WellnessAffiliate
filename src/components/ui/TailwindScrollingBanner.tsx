'use client';
import { useEffect, useRef, useState } from 'react';

export default function TailwindScrollingBanner() {
  const messages = [
    "🚛 Free Shipping on Orders Over $70",
    "🌟 Trusted by Over 1 Million Happy Customers", 
    "🛡️ 90-Day Money-Back Guarantee"
  ];
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationDistance, setAnimationDistance] = useState(0);
  const [animationDuration, setAnimationDuration] = useState(15);
  
  // Nhân đôi messages để tạo vòng lặp liền mạch
  const repeatedMessages = [...messages, ...messages];
  
  useEffect(() => {
    const updateAnimation = () => {
      if (containerRef.current) {
        const firstSet = containerRef.current.children;
        if (firstSet.length > 0) {
          // Tính chiều rộng của 1 bộ messages (3 messages)
          let singleSetWidth = 0;
          for (let i = 0; i < messages.length; i++) {
            singleSetWidth += (firstSet[i] as HTMLElement).offsetWidth;
          }
          
          setAnimationDistance(singleSetWidth);
          // Tốc độ 50px/giây
          const duration = singleSetWidth / 50;
          setAnimationDuration(duration);
        }
      }
    };
    
    updateAnimation();
    window.addEventListener('resize', updateAnimation);
    return () => window.removeEventListener('resize', updateAnimation);
  }, []);
  
  return (
    <div className="bg-green-500 text-white py-2 overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{
          animation: animationDistance > 0 
            ? `marquee ${animationDuration}s linear infinite` 
            : 'none'
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
          0% { 
            transform: translateX(0); 
          }
          100% { 
            transform: translateX(-${animationDistance}px); 
          }
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
