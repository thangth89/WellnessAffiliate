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
        {/* Lượt chạy thứ nhất */}
        <div className="flex items-center justify-around min-w-full">
          {messages.map((message, index) => (
            <span key={index} className="text-xs sm:text-sm md:text-base font-medium px-4 md:px-8">
              {message}
            </span>
          ))}
        </div>
        
        {/* Lượt chạy thứ hai, thêm khoảng trống cố định */}
        <div className="flex items-center justify-around min-w-full pl-20 sm:pl-32 md:pl-48">
          {messages.map((message, index) => (
            <span key={`dup-${index}`} className="text-xs sm:text-sm md:text-base font-medium px-4 md:px-8">
              {message}
            </span>
          ))}
        </div>
      </div>
      
      {/* Thêm animation vào CSS toàn cục hoặc tailwind.config.js */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-100%) }
        }
        
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
