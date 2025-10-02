export const SITE_CONFIG = {
  name: 'AeroPress Clone',
  description: 'The ultimate coffee brewing experience',
  url: 'https://aeropress-clone.vercel.app',
  ogImage: '/og-image.jpg',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/', isExternal: false },
  { name: 'Blog', href: 'https://wellnessnest.co/blogs/news', isExternal: true }, // External blog
  { name: 'Help', href: '/Help', isExternal: false }, // Đây sẽ được xử lý đặc biệt trong Header component
] as const;

// Các items trong Help dropdown menu
export const HELP_MENU_ITEMS = [
  { name: 'FAQs', href: 'https://wellness-nest.gorgias.help/en-US?ref=jbjycrqj&sub_id=', isExternal: true }, // External link
  { name: 'Privacy Policy', href: '/help/privacy-policy', isExternal: false },
  { name: 'Shipping Policy', href: '/help/shipping-policy', isExternal: false },
  { name: 'Refund & Return Policy', href: '/help/refund-return', isExternal: false },
  { name: 'Terms of Service', href: '/help/terms-of-service', isExternal: false },
] as const;