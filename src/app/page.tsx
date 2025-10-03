// src/app/products/page.tsx - Updated version
import React from 'react';
import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ProductCard from '@/components/product/ProductCard';
import ProductReviews from '@/components/sections/ProductReviews';
import WellnessTestimonials from '@/components/sections/WellnessTestimonials';

export const metadata: Metadata = {
  title: 'Natural Menopause Support | Shilajit, FloraFresh & Meno Mate',
  description:
    'Discover natural supplements for menopause, perimenopause, and postmenopause. Relieve hot flashes, night sweats, mood swings, low energy & support hormonal balance with Shilajit, FloraFresh, and Meno Mate.',
  keywords: [
    'menopause support',
    'perimenopause relief',
    'postmenopause supplements',
    'natural menopause remedies',
    'Shilajit for women',
    'FloraFresh',
    'Meno Mate',
    'hormonal balance',
    'hot flashes relief',
    'night sweats remedy',
    'menopause mood swings',
    'low energy menopause',
    'vaginal dryness solution',
  ],
  openGraph: {
    title: 'Natural Menopause Support | Shilajit, FloraFresh & Meno Mate',
    description:
      'Safe, effective, natural supplements for women. Balance hormones, ease menopause symptoms & restore vitality.',
    url: 'https://gowellnessunlocked.com',
    siteName: 'Go Wellness Unlocked',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Natural Menopause Support – Shilajit, FloraFresh, Meno Mate',
    description:
      'Natural relief for menopause, perimenopause & postmenopause. Trusted by thousands of women worldwide.',
  },
};

// ✅ JSON-LD cho Website + Organization
const JsonLd = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Go Wellness Unlocked',
    url: 'https://gowellnessunlocked.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://gowellnessunlocked.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Wellness Store',
    url: 'https://gowellnessunlocked.com',
    logo: 'https://gowellnessunlocked.com/logo.png',
    sameAs: [
      'http://facebook.com/wellnessunlocked01',
      'https://www.instagram.com/wellness.unlocked.us',
      'https://www.tiktok.com/@wellness.unlocked.us',
      'https://www.threads.com/@wellness.unlocked.us',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-855-907-5279',
      contactType: 'Customer Support',
      areaServed: 'US',
      availableLanguage: 'English',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
};


// Type definition cho sản phẩm với multiple images và CTA text
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

const ProductsPage = () => {
  // Dữ liệu sản phẩm với multiple images và CTA text khác nhau
  const products: Product[] = [
    {
      id: 1,
      name: "The Anti-Aging Secret: Shilajit Essential Extract for Radiant Skin & Endless Energy",
      description: "Unlock your youthful energy, glowing skin, and balanced hormones with pure Shilajit. Stay radiant at any age...",
      price: "44.99",
      originalPrice: "99.98",
      reviews: "12,500+ sold",
      rating: 4.8,
      images: [
        "/images/products/shilajit1.webp",
        "/images/products/shilajit2.webp", 
        "/images/products/shilajit3.webp",
        "/images/products/shilajit4.webp",
        "/images/products/shilajit5.webp",
        "/images/products/shilajit6.webp"
      ],
      isSale: true,
      affiliateLink: "https://wellnessnest.co/products/shilajitwm?ref=jbjycrqj",
      ctaText: "Learn More"
    },
    {
      id: 2,
      name: "FloraFresh: The Daily Secret to Feminine Confidence",
      description: "Restore your pH balance and feel fresh, comfortable, and confident every day. Made in the USA with organic, pristine nutrients...",
      price: "53.99",
      originalPrice: "79.99",
      reviews: "11,309+ sold",
      rating: 4.9,
      images: [
        "/images/products/FloraFresh14.webp",
        "/images/products/FloraFresh15.webp",
        "/images/products/FloraFresh1.webp",
       	"/images/products/FloraFresh2.webp",
       	"/images/products/FloraFresh3.webp",
       	"/images/products/FloraFresh4.webp",
       	"/images/products/FloraFresh5.webp",
       	"/images/products/FloraFresh6.webp",
       	"/images/products/FloraFresh7.webp",
       	"/images/products/FloraFresh8.webp",
       	"/images/products/FloraFresh9.webp",
       	"/images/products/FloraFresh10.webp",
       	"/images/products/FloraFresh11.webp",
       	"/images/products/FloraFresh12.webp",
 	"/images/products/FloraFresh13.webp"
      ],
      isNew: true,
      affiliateLink: "https://wellnessnest.co/products/florafresh?ref=jbjycrqj",
      ctaText: "View Details"
    },
    {
      id: 3,
      name: "Meno Mate: Finally, A Good Night's Sleep: Natural Menopause Relief",
      description: "Don't let menopause slow you down. Meno Mate provides comprehensive relief, supporting gut health and easing hot flashes...",
      price: "53.99",
      reviews: "21,310+ sold",
      rating: 4.9,
      images: [
        "/images/products/MenoMate1.webp",
       	"/images/products/MenoMate2.webp",
       	"/images/products/MenoMate3.webp",
       	"/images/products/MenoMate4.webp",
       	"/images/products/MenoMate5.webp",
       	"/images/products/MenoMate6.webp",
       	"/images/products/MenoMate7.webp",
       	"/images/products/MenoMate8.webp",
       	"/images/products/MenoMate9.webp",
       	"/images/products/MenoMate10.webp",
	],
      affiliateLink: "https://wellnessnest.co/products/menomate-menopause-probiotic?ref=jbjycrqj",
      ctaText: "Buy Now"
    },
  ];

  // Sample reviews data cho phần cuối trang
  const reviewsData = [
    {
      id: 1,
      rating: 5,
      title: " ",
      content: "Midday hot flashes used to knock me out. Ever since I started my morning cup of Shilajit resin, they’re barely a thing. Total game-changer.",
      author: "A***o",
      date: "02 Jul 2025",
      helpful: 5,
      verified: true,
      country: "US",
      avatar: "/images/avatars/Sharon.jpg",
      images: ["/images/reviews/Sharon1.jpg"],
    },
    {
      id: 2,
      rating: 5,
      title: "",
      content: "Perimenopause was throwing everything out of whack. Energy, mood, digestion. This resin helped bring back a sense of control. Evenings aren’t a disaster anymore.",
      author: "W***",
      date: "03 Apr 2025",
      helpful: 3,
      verified: true,
      country: "US",
      avatar: "/images/avatars/Denise.jpg",
      images: ["/images/reviews/Denise1.jpg"],
    },
    {
      id: 3,
      rating: 4.5,
      title: "",
      content: "florafresh makes me feel like a goddess! It’s gentle, effective, and gives me confidence I haven’t felt in years.",
      author: "M***e",
      date: "15 Mar 2025",
      helpful: 2,
      verified: true,
      country: "US",
      avatar: "/images/avatars/avata3.jpg",
      images: ["/images/reviews/avata31.jpg"],
    },
    {
      id: 4,
      rating: 5,
      title: "",
      content: "My partner commented on how amazing I smell down there—thanks to FloraFresh. It’s subtle, clean, and totally transformative.",
      author: "J***n",
      date: "28 Feb 2025",
      helpful: 1,
      verified: true,
      country: "US",
      avatar: "/images/avatars/avata4.jpg",
      images: ["/images/reviews/avata41.jpg"],
    },
    {
      id: 5,
      rating: 4,
      title: "",
      content: "My mornings used to start stiff and slow. Now with Shilajit resin, I can move through the day feeling freer in my body. It’s like my joints loosened up from the inside.",
      author: "S***h",
      date: "20 Jan 2025",
      helpful: 0,
      verified: true,
      country: "US",
      avatar: "/images/avatars/avata5.jpg",
      images: ["/images/reviews/avata51.jpg"],
     },
    {
      id: 6,
      rating: 5,
      title: "",
      content: "florafresh feels luxurious, smells subtle and clean, and most importantly—it actually works! Goodbye discomfort, hello freshness.",
      author: "C***k",
      date: "10 Jan 2025",
      helpful: 4,
      verified: true,
      country: "US",
      avatar:"/images/avatars/avata6.jpg",
      images: ["/images/reviews/avata61.jpg"],
    },
    {
      id: 7,
      rating: 4.5,
      title: "",
      content: "Day 10: my brain fog lifted. I finished a report at work in half the time and actually remembered everyone’s name in the meeting.",
      author: "D***n",
      date: "05 Jan 2025",
      helpful: 2,
      verified: true,
      country: "US",
      avatar: "/images/avatars/avata7.jpg",
      images: ["/images/reviews/avata71.jpg"],
    },
    {
      id: 8,
      rating: 5,
      title: "",
      content: "florafresh is pure magic—no harsh smells, no irritation. Just a clean, refreshed feeling every day.",
      author: "E***y",
      date: "28 Dec 2024",
      helpful: 1,
      verified: true,
      country: "US",
      avatar: "/images/avatars/avata8.jpg",
      images: ["/images/reviews/avata81.jpg"],
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
	 {/* JSON-LD */}
      <JsonLd />
      <HeroSection/>
      
      {/* Products Grid */}
      <main id="wellness-products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
        <WellnessTestimonials />
{/* Customer Reviews Section */}
<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="bg-white rounded-lg shadow-sm p-6">
    <div className="mb-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-left">
          <span className="text-green-600">Real Results</span>{' '}
          <span className="text-red-600">From Our Customers</span>
      </h2>
      <p className="mt-3 text-lg sm:text-xl text-gray-800 text-left">
        <span className="font-bold">1.8 Million+ Men and Women</span> Are Making New Long Lasting Positive Health Changes
      </p>
    </div>
    <ProductReviews reviews={reviewsData} />
  </div>
</section>
    </div>
  );
};


export default ProductsPage;


