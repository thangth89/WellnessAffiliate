'use client';

import { useState } from 'react';

export default function TailwindScrollingBanner() {
  const messages = [
    "🚛 Free Shipping on Orders Over $70",
    "🌟 Trusted by Over 1 Million Happy Customers", 
    "🛡️ 90-Day Money-Back Guarantee"
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="bg-green-500 text-white py-2 overflow-hidden relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <div className={`flex whitespace-nowrap ${isPaused ? '' : 'animate-marquee'}`}>
        {/* First set of messages */}
        <div className="inline-flex flex-shrink-0 items-center gap-x-8">
          {messages.map((msg, idx) => (
            <span key={idx} className="text-xs sm:text-sm md:text-base font-medium">
              {msg}
            </span>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="inline-flex flex-shrink-0 items-center gap-x-8">
          {messages.map((msg, idx) => (
            <span key={`dup-${idx}`} className="text-xs sm:text-sm md:text-base font-medium">
              {msg}
            </span>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}
