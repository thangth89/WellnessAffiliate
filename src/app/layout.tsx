// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TailwindScrollingBanner from '@/components/ui/TailwindScrollingBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsletterPopup from '@/components/layout/NewsletterPopup';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shilajit, FloraFresh, Meno Mate – Natural Support for Menopause, Perimenopause & Postmenopause',
  description:
    'Discover Shilajit, FloraFresh, and Meno Mate – natural supplements that help women ease symptoms of menopause, perimenopause, and postmenopause such as hot flashes, night sweats, mood swings, low energy, and hormonal imbalance.',
  keywords: [
    'menopause support',
    'perimenopause relief',
    'postmenopause care',
    'menopause supplements',
    'Shilajit for women',
    'FloraFresh',
    'Meno Mate',
    'hormonal balance',
    'natural menopause remedies',
    'hot flashes',
    'night sweats',
    'menopause mood swings',
    'low libido menopause',
    'vaginal dryness relief',
    'bone health menopause',
    'energy boost for menopause',
    'immune support women',
  ],
  openGraph: {
    title: 'Shilajit, FloraFresh, Meno Mate – Natural Relief for Menopause & Hormonal Balance',
    description:
      'Natural menopause supplements to ease symptoms: hot flashes, night sweats, mood swings, low energy, and hormonal imbalance. Safe, effective, and science-backed.',
    url: 'https://gowellnessunlocked.com',
    siteName: 'Go Wellness Unlocked',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shilajit, FloraFresh, Meno Mate – Natural Menopause Support',
    description:
      'Ease menopause, perimenopause, and postmenopause symptoms naturally with Shilajit, FloraFresh, and Meno Mate.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Analytics/>
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
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
