'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative min-h-[80vh] px-4 py-20 flex items-start bg-cover bg-center bg-no-repeat bg-[url('/images/hero-background.webp')]">
      
      {/* Nội dung Hero */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-16 w-full sm:text-center md:text-left relative z-10">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Unlock Balance. Embrace Wellness.
            </h1>
            <p className="text-lg md:text-xl text-teal-200 md:text-teal-300 mb-8 max-w-3xl drop-shadow">
              Natural supplements designed for women in menopause — to restore balance,
              boost vitality, and support everyday wellness.
	    </p>
            
          </motion.div>
        ) : (
          <div>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
              Unlock Balance. Embrace Wellness.
            </h1>
            <p className="text-lg md:text-xl text-teal-200 md:text-teal-300 mb-8 max-w-3xl drop-shadow">
              Natural supplements designed for women in menopause — to restore balance,
              boost vitality, and support everyday wellness.
            </p>
           </div>
        )}
      </div>

      {/* Testimonials sát mép dưới */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-7xl px-4 z-10">
        {isClient ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm"
          >
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center">&quot;Natural support for menopause harmony.&quot;</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center">&quot;Confidence starts within — feel fresh, balanced, and free.&quot;</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center">&quot;Find your calm through menopause — relief you can trust.&quot;</p>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center">&quot;Natural support for menopause harmony.&quot;</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center">&quot;Confidence starts within — feel fresh, balanced, and free.&quot;</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
              <p className="text-gray-800 italic text-center">&quot;Find your calm through menopause — relief you can trust.&quot;</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

