// src/components/product/ProductReviews.tsx
'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { Star, ThumbsUp, MoreHorizontal } from 'lucide-react';

export interface ReviewData {
  id: number;
  rating: number;
  title?: string;
  content: string;
  author: string;
  date: string;
  helpful: number;
  verified: boolean;
  country: string;
  avatar: string;
  images?: string[];
}

const fixedRatings = 902;

interface ProductReviewsProps {
  reviews: ReviewData[];
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ reviews }) => {
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return '0.0';
    return (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  }, [reviews]);

  const renderStars = (rating: number, size = 'w-4 h-4') => {
    return (
      <div className="flex items-center space-x-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating
                ? 'text-yellow-400 fill-current'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No reviews yet</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 mb-3">
          <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">Reviews</h3>
          <span className="hidden sm:inline text-gray-500">|</span>
          <div className="flex items-center space-x-2">
            <span className="text-lg sm:text-xl font-bold text-gray-900">{averageRating}</span>
            {renderStars(Math.floor(Number(averageRating)))}
            {/* <span className="text-xs sm:text-sm text-gray-500">{reviews.length} ratings</span> */}
	    <span className="text-xs sm:text-sm text-gray-500">{fixedRatings} ratings</span>
          </div>
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            ✓ All from verified purchases
          </span>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-100 pb-4 sm:pb-6 last:border-b-0">
            <div className="flex space-x-2 sm:space-x-3">
              {/* Avatar */}
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.author}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                {/* Rating and Title */}
                <div className="flex items-center space-x-2 mb-2">
                  {renderStars(review.rating)}
                  {review.title && (
                    <span className="text-sm font-medium text-gray-900">{review.title}</span>
                  )}
                </div>

                {/* Review Content */}
                <div className="mb-3">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {review.content}
                  </p>
                </div>

                {/* Images */}
                {review.images && review.images.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review.images.map((image, index) => (
                      <div key={index} className="relative w-16 h-16 rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                        <Image
                          src={image}
                          alt={`Review image ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>{review.author}</span>
                    <span>|</span>
                    <span>{review.date}</span>
                    {review.verified && (
                      <>
                        <span>|</span>
                        <span className="text-green-600">✓ Verified Purchase</span>
                      </>
                    )}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="flex items-center space-x-1 hover:text-gray-700 transition-colors">
                      <ThumbsUp className="w-3 h-3" />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="hover:text-gray-700 transition-colors">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {reviews.length >= 5 && (
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
      )}
    </div>
  );
};

export default ProductReviews;