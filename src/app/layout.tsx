// src/app/layout.tsx - Updated with fixed header
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TailwindScrollingBanner from '@/components/ui/TailwindScrollingBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsletterPopup from '@/components/layout/NewsletterPopup';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AeroPress Clone - Press for Better Coffee',
  description: 'Experience the perfect brew with our patented brewing technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* Fixed Header Container */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <TailwindScrollingBanner />
          <Header />
          <NewsletterPopup />
        </div>
          <main style={{ paddingTop: '90px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}