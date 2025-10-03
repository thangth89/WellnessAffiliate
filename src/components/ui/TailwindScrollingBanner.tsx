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
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Lặp lại hai lần toàn bộ nội dung + khoảng trống để tạo hiệu ứng marquee liền mạch */}
        {[...messages, "       ", ...messages, "       "].map((message, index) => (
          <span key={index} className="text-xs sm:text-sm md:text-base font-medium px-4 md:px-8">
            {message}
          </span>
        ))}
      </div>
      
      {/* Thêm animation vào CSS toàn cục hoặc tailwind.config.js */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%) }
          100% { transform: translateX(-50%) }
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
