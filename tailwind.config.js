// tailwind.config.js - Cấu hình cho Next.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Thêm các utility classes tùy chỉnh
    },
  },
  plugins: [
    // Từ Tailwind CSS v3.3+, line-clamp đã được tích hợp sẵn
    // Không cần plugin riêng nữa
  ],
}