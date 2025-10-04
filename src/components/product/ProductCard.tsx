// components/product/ProductCard.tsx
import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import AdvancedImageGallery from '@/components/sections/AdvancedImageGallery';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}
// Interface cho Product với multiple images và CTA text
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  reviews: number | string;
  rating: number;
  images: string[]; // Thay đổi từ image thành images array
  isNew?: boolean;
  isSale?: boolean;
  affiliateLink: string;
  ctaText?: string; // Thêm thuộc tính CTA text
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Tính toán discount percentage
  const discountPercentage = product.originalPrice && product.price 
    ? Math.round(((parseFloat(product.originalPrice) - parseFloat(product.price)) / parseFloat(product.originalPrice)) * 100)
    : 0;

  // Render rating stars
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-4 h-4">
            <Star className="w-4 h-4 text-gray-300 absolute" />
            <div className="overflow-hidden absolute w-1/2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        );
      } else {
        stars.push(
          <Star key={i} className="w-4 h-4 text-gray-300" />
        );
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Image Gallery Section */}
      <div className="relative">
      <AdvancedImageGallery images={product.images} />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {product.isSale && discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 text-sm mb-2 min-h-[2.5rem] overflow-hidden" 
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
          {product.name}
        </h3>

        {/* Product Description */}
        <p className="text-gray-600 text-xs mb-3 min-h-[2rem] overflow-hidden"
           style={{
             display: '-webkit-box',
             WebkitLineClamp: 2,
             WebkitBoxOrient: 'vertical'
           }}>
          {product.description}
        </p>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-600">({product.rating})</span>
          <span className="text-xs text-green-600 font-medium">{product.reviews}</span>
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>

        {/* Dynamic CTA Button */}
        <a
          href={product.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
           onClick={
          // Push event to dataLayer
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            event: 'cta_click',
            button_type: product.ctaText || "Learn More",
            product_id: product.id,
            product_name: product.name,
            product_price: product.price,
            affiliate_link: product.affiliateLink
    });
  }}
        >
          {product.ctaText || "Learn More"}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};


export default ProductCard;




