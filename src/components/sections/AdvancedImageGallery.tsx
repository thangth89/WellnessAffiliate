// components/AdvancedImageGallery.tsx
'use client';
import { useState, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AdvancedImageGalleryProps {
  images: string[];
  layout?: 'grid' | 'vertical' | 'horizontal';
  className?: string;
  showArrows?: boolean;
  maxThumbnails?: number;
}

const AdvancedImageGallery = ({ 
  images, 
  layout = 'grid',
  className = "",
  showArrows = false,
  maxThumbnails = 4
}: AdvancedImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  if (images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">No images available</span>
      </div>
    );
  }

  // Fonction pour créer l'ordre circulaire des thumbnails
  const getCircularThumbnailOrder = useCallback((startIndex: number) => {
    const result = [];
    for (let i = 0; i < images.length; i++) {
      const index = (startIndex + i) % images.length;
      result.push({ originalIndex: index, image: images[index] });
    }
    return result;
  }, [images]);

  const goToNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollThumbnails = (direction: 'left' | 'right') => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    if (direction === 'right') {
      goToNext();
    } else {
      goToPrevious();
    }

    // Reset transition state après l'animation
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const handleThumbnailClick = (originalIndex: number) => {
    if (originalIndex === selectedIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setSelectedIndex(originalIndex);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  const circularThumbnails = getCircularThumbnailOrder(selectedIndex);
  const visibleThumbnails = circularThumbnails.slice(0, Math.min(maxThumbnails, images.length));

  if (layout === 'vertical') {
    return (
      <div className={`flex gap-4 ${className}`}>
        {/* Thumbnails - Left Side */}
        <div className="flex flex-col gap-2 w-20">
          <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {visibleThumbnails.map((item, displayIndex) => (
              <button
                key={`${item.originalIndex}-${displayIndex}`}
                onClick={() => handleThumbnailClick(item.originalIndex)}
                className={`relative aspect-square w-full overflow-hidden rounded-md transition-all duration-200 ${
                  displayIndex === 0
                    ? 'ring-2 ring-blue-500' 
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={item.image}
                  alt={`Thumbnail ${item.originalIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Main Image - Right Side */}
        <div className="relative flex-1 aspect-square overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={images[selectedIndex]}
            alt={`Product image ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority={selectedIndex === 0}
          />
        </div>
      </div>
    );
  }

  if (layout === 'horizontal') {
    return (
      <div className={`w-full ${className}`}>
        {/* Main Image */}
        <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={images[selectedIndex]}
            alt={`Product image ${selectedIndex + 1}`}
            fill
            className="object-cover"
            priority={selectedIndex === 0}
          />
          
          {showArrows && images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Horizontal Thumbnails with Circular Scroll */}
        {images.length > 1 && (
          <div className="relative">
            <div className={`flex gap-2 overflow-hidden transition-opacity duration-300 ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}>
              <button
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-1 rounded-full shadow-md transition-all duration-200"
                disabled={isTransitioning}
              >
                <ChevronLeft size={14} />
              </button>
              
              {visibleThumbnails.map((item, displayIndex) => (
                <button
                  key={`${item.originalIndex}-${displayIndex}`}
                  onClick={() => handleThumbnailClick(item.originalIndex)}
                  className={`relative flex-shrink-0 w-16 h-16 overflow-hidden rounded-md transition-all duration-200 ${
                    displayIndex === 0
                      ? 'ring-2 ring-blue-500' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                  disabled={isTransitioning}
                >
                  <Image
                    src={item.image}
                    alt={`Thumbnail ${item.originalIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}

              <button
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-1 rounded-full shadow-md transition-all duration-200"
                disabled={isTransitioning}
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Default: Grid Layout
  return (
    <div className={`w-full ${className}`}>
      {/* Main Image */}
      <div className="relative aspect-square w-full mb-4 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[selectedIndex]}
          alt={`Product image ${selectedIndex + 1}`}
          fill
          className="object-cover transition-all duration-300 ease-in-out"
          priority={selectedIndex === 0}
        />
        
        {showArrows && images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {/* Circular Thumbnail Grid with Navigation Arrows */}
      {images.length > 1 && (
        <div className="relative">
          {/* Left Arrow */}
          {images.length > maxThumbnails && (
            <button
              onClick={() => scrollThumbnails('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md transition-all duration-200"
              disabled={isTransitioning}
            >
              <ChevronLeft size={16} />
            </button>
          )}

          <div className={`grid grid-cols-4 gap-2 transition-opacity duration-300 ${
            isTransitioning ? 'opacity-50' : 'opacity-100'
          } ${images.length > maxThumbnails ? 'mx-8' : ''}`}>
            {visibleThumbnails.map((item, displayIndex) => (
              <button
                key={`${item.originalIndex}-${displayIndex}`}
                onClick={() => handleThumbnailClick(item.originalIndex)}
                className={`relative aspect-square w-full overflow-hidden rounded-md transition-all duration-200 ${
                  displayIndex === 0
                    ? 'ring-2 ring-blue-500 scale-[0.98]' 
                    : 'hover:scale-[0.98] opacity-70 hover:opacity-100'
                }`}
                disabled={isTransitioning}
              >
                <Image
                  src={item.image}
                  alt={`Thumbnail ${item.originalIndex + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          {images.length > maxThumbnails && (
            <button
              onClick={() => scrollThumbnails('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 p-1.5 rounded-full shadow-md transition-all duration-200"
              disabled={isTransitioning}
            >
              <ChevronRight size={16} />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AdvancedImageGallery;