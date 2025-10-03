'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <section className="relative min-h-[100vh] sm:min-h-[80vh] px-4 py-12 sm:py-20 flex flex-col justify-between bg-cover bg-center bg-no-repeat bg-[url('/images/hero-background.webp')]">
      
      {/* Overlay tối để text dễ đọc hơn trên mobile */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/10"></div>
      
      {/* Nội dung Hero */}
      <div className="px-2 sm:px-6 md:px-12 lg:px-16 w-full text-center sm:text-center md:text-left relative z-10 pt-8 sm:pt-0 flex-grow flex flex-col justify-center">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
              Unlock Balance. Embrace Wellness.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white sm:text-teal-200 md:text-teal-300 mb-6 sm:mb-8 max-w-3xl mx-auto md:mx-0 drop-shadow-lg leading-relaxed">
              Natural supplements designed for women in menopause — to restore balance,
              boost vitality, and support everyday wellness.
            </p>
          </motion.div>
        ) : (
          <div>
            <h1 className="text-3xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
              Unlock Balance. Embrace Wellness.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white sm:text-teal-200 md:text-teal-300 mb-6 sm:mb-8 max-w-3xl mx-auto md:mx-0 drop-shadow-lg leading-relaxed">
              Natural supplements designed for women in menopause — to restore balance,
              boost vitality, and support everyday wellness.
            </p>
          </div>
        )}
      </div>
      
      {/* Testimonials - có khoảng cách phù hợp trên mobile */}
      <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 pb-4 sm:pb-4 z-10">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3 text-xs sm:text-sm"
          >
            <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center leading-snug">&quot;Natural support for menopause harmony.&quot;</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center leading-snug">&quot;Confidence starts within — feel fresh, balanced, and free.&quot;</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center leading-snug">&quot;Find your calm through menopause — relief you can trust.&quot;</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3 text-xs sm:text-sm">
            <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center leading-snug">&quot;Natural support for menopause harmony.&quot;</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center leading-snug">&quot;Confidence starts within — feel fresh, balanced, and free.&quot;</p>
            </div>
            <div className="bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center leading-snug">&quot;Find your calm through menopause — relief you can trust.&quot;</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
