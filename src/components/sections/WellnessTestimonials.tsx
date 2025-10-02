'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";

const WellnessTestimonial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    },
    { threshold: 0.3 }
  );

  const element = sectionRef.current; // ✅ lưu ref vào biến cục bộ
  if (element) {
    observer.observe(element);
  }

  return () => {
    if (element) {
      observer.unobserve(element); // ✅ cleanup đúng cách
    }
    observer.disconnect(); // ✅ hủy observer tránh memory leak
  };
}, []);


  const stats = [
    {
      percentage: 95,
      text: "of 84,210 surveyed users report satisfaction with our supplements (nearly 80,000 happy customers)",
      color: "text-green-600"
    },
    {
      percentage: 85,
      text: "of 73,684 customers would recommend us to others (over 62,000 advocates)",
      color: "text-green-600"
    },
    {
      percentage: 93,
      text: "users report noticeable improvements in their well-being (over 50,000 success stories)",
      color: "text-green-600"
    }
  ];

  const CircularProgress = ({ percentage, size = 80, isAnimating }) => {
    const [currentPercentage, setCurrentPercentage] = useState(0);
    
    useEffect(() => {
      if (isAnimating) {
        let start = 0;
        const end = percentage;
        const duration = 2000; // 2 seconds
        const increment = end / (duration / 16); // 60fps
        
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCurrentPercentage(end);
            clearInterval(timer);
          } else {
            setCurrentPercentage(Math.floor(start));
          }
        }, 16);
        
        return () => clearInterval(timer);
      } else {
        setCurrentPercentage(0);
      }
    }, [isAnimating, percentage]);

    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth="4"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#22c55e"
            strokeWidth="4"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
        </svg>
        <span className="absolute text-lg font-bold text-green-600">
          {currentPercentage}%
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white" ref={sectionRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Image collage */}
        <div className="relative">
          <Image 
            src="/images/reviews/review.webp" 
            alt="Customer testimonials collage" 
            className="rounded-lg object-cover shadow-lg"
            width={900}                         
  	    height={900}  
          />
        </div>

        {/* Right side - Content */}
        <div className="space-y-8">
          {/* Title */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              <span className="text-green-600">Proof in Numbers:</span>{" "}
              Why Thousands Trust Wellness Nest
            </h2>
            <p className="text-gray-600 text-lg italic leading-relaxed">
              Discover the real impact of our natural supplements—backed by 
              thousands of satisfied customers who've experienced the difference. 
              Your wellness journey starts with trust
            </p>
          </div>

          {/* Statistics */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <CircularProgress percentage={stat.percentage} isAnimating={isVisible} />
                </div>
                <div className="flex-1 pt-2">
                  <p className="text-gray-700 text-base leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <div className="pt-6 text-center">
            <button 
              onClick={() => {
                const targetSection = document.getElementById('wellness-products');
                if (targetSection) {
                  targetSection.scrollIntoView({ behavior: 'smooth' });
                } else {
                  // Fallback: scroll to bottom if section doesn't exist
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default WellnessTestimonial;
