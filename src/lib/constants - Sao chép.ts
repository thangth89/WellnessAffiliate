export const SITE_CONFIG = {
  name: 'AeroPress Clone',
  description: 'The ultimate coffee brewing experience',
  url: 'https://aeropress-clone.vercel.app',
  ogImage: '/og-image.jpg',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/Blog' },
  { name: 'Help', href: '/Help' }, // Đây sẽ được xử lý đặc biệt trong Header component
] as const;

// Các items trong Help dropdown menu
export const HELP_MENU_ITEMS = [
  { name: 'FAQs', href: '/help/faqs' },
  { name: 'Privacy Policy', href: '/help/privacy-policy' },
  { name: 'Shipping Policy', href: '/help/shipping-policy' },
  { name: 'Refund & Return Policy', href: '/help/refund-return' },
  { name: 'Terms of Service', href: '/help/terms-of-service' },
] as const;