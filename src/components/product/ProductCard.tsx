// components/product/ProductCard.tsx
'use client';
import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import AdvancedImageGallery from '@/components/sections/AdvancedImageGallery';

// TypeScript declaration for dataLayer and Facebook Pixel
declare global {
  interface Window {
    dataLayer: unknown[];
    fbq: (type: string, event: string, data?: Record<string, unknown>) => void;
  }
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  reviews: number | string;
  rating: number;
  images: string[];
  isNew?: boolean;
  isSale?: boolean;
  affiliateLink: string;
  ctaText?: string;
  eventName?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) return null;

  const discountPercentage =
    product.originalPrice && product.price
      ? Math.round(
          ((parseFloat(product.originalPrice) - parseFloat(product.price)) /
            parseFloat(product.originalPrice)) *
            100
        )
      : 0;

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
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
        stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
      }
    }
    return stars;
  };

  // **Thêm async vào hàm để dùng await**
  const handleCtaClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Cho phép Ctrl+Click, Cmd+Click, Middle-click mở tab mới bình thường
    if (e.ctrlKey || e.metaKey || e.button === 1) return;
    if (e.button !== 0) return;

    e.preventDefault();

    const ctaText = product.ctaText || 'Learn More';
    const eventName = product.eventName || `product_${product.id}`;
    const affiliateLink = product.affiliateLink;
    const eventId = `event_${product.id}_${Date.now()}`;

    // Track với Google Analytics (GTM)
    if (typeof window !== 'undefined' && window.dataLayer) {
      try {
        window.dataLayer.push({
          event: 'cta_click',
          button_type: ctaText,
          product_id: product.id,
          product_name: product.name,
          product_price: product.price,
          affiliate_link: affiliateLink,
          timestamp: new Date().toISOString()
        });
      } catch (error) {
        console.warn('GTM tracking failed:', error);
      }
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      try {
        window.fbq('trackCustom', eventName, {
          content_name: product.name,
          content_ids: [product.id.toString()],
          content_type: 'product',
          value: parseFloat(product.price),
          currency: 'USD',
          content_category: 'wellness_supplements',
          product_id: product.id,
          cta_button: ctaText,
          original_price: product.originalPrice,
          discount_percentage: discountPercentage,
          event_id: eventId
        });
      } catch (err) {
        console.warn('Facebook Pixel failed:', err);
      }
    }

    // Facebook CAPI server-side
    try {
      await fetch('/api/facebook-capi/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: product.eventName || 'cta_click',
          event_id: eventId,
          custom_data: {
            content_name: product.name,
            content_ids: [product.id.toString()],
            value: parseFloat(product.price),
            currency: 'USD'
          },
          user_data: {} // web không có email, để trống
        })
      });
    } catch (err) {
      console.warn('Facebook CAPI failed:', err);
    }

    // Mở link affiliate sau tracking
    setTimeout(() => {
      const newWindow = window.open(affiliateLink, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        try {
          const link = document.createElement('a');
          link.href = affiliateLink;
          link.target = '_blank';
          link.rel = 'sponsored noopener noreferrer';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch {
          window.location.href = affiliateLink;
        }
      }
    }, 150);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative">
        <AdvancedImageGallery images={product.images} />

        <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">NEW</span>
          )}
          {product.isSale && discountPercentage > 0 && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3
          className="font-semibold text-gray-900 text-sm mb-2 min-h-[2.5rem] overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {product.name}
        </h3>

        <p
          className="text-gray-600 text-xs mb-3 min-h-[2rem] overflow-hidden"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical'
          }}
        >
          {product.description}
        </p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">{renderStars(product.rating)}</div>
          <span className="text-xs text-gray-600">({product.rating})</span>
          <span className="text-xs text-green-600 font-medium">{product.reviews}</span>
        </div>

        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        <a
          href={product.affiliateLink}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm"
          onClick={handleCtaClick}
          aria-label={`${product.ctaText || 'Learn More'} about ${product.name}`}
        >
          {product.ctaText || 'Learn More'}
          <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
