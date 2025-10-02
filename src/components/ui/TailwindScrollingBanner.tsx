// src/components/ui/TailwindScrollingBanner.tsx
'use client';

export default function TailwindScrollingBanner() {
  const messages = [
    "🚛 Free Shipping on Orders Over $70",
    "🌟 Trusted by Over 1 Million Happy Customers", 
    "🛡️ 90-Day Money-Back Guarantee"
  ];

  return (
    <div className="bg-green-500 text-white py-2 overflow-hidden relative">
      {/* Container with animation */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set of messages */}
        <div className="flex items-center justify-around min-w-full">
          {messages.map((message, index) => (
            <span key={index} className="text-sm md:text-base font-medium px-8">
              {message}
            </span>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center justify-around min-w-full">
          {messages.map((message, index) => (
            <span key={`dup-${index}`} className="text-sm md:text-base font-medium px-8">
              {message}
            </span>
          ))}
        </div>
      </div>
      
      {/* Add custom animation to global CSS or tailwind.config.js */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-100%) }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}