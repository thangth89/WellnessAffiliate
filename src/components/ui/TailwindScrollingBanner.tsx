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
        {/* First set of messages */}
        <div className="inline-flex items-center flex-shrink-0 gap-x-8">
          {messages.map((message, index) => (
            <span key={index} className="text-xs sm:text-sm md:text-base font-medium">
              {message}
            </span>
          ))}
        </div>
        
        {/* Duplicate set for seamless loop */}
        <div className="inline-flex items-center flex-shrink-0 gap-x-8">
          {messages.map((message, index) => (
            <span key={`dup-${index}`} className="text-xs sm:text-sm md:text-base font-medium">
              {message}
            </span>
          ))}
        </div>
      </div>
      
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
