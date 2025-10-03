// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TailwindScrollingBanner from '@/components/ui/TailwindScrollingBanner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NewsletterPopup from '@/components/layout/NewsletterPopup';
import Script from 'next/script';

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
    <html lang="en">
      <head>
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '24634753192800370');
            fbq('track', 'PageView');
          `}
        </Script>
       <noscript>
          <img 
            height="1" 
            width="1" 
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=24634753192800370&ev=PageView&noscript=1"
            alt="Facebook Pixel" 
          />
        </noscript>
        
        {/* Google Tag Manager */}
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M5PSTT6W');</script>
    
            
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        
         {/* Google Tag Manager (noscript) */}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5PSTT6W"
          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
     
            
        <div className="fixed top-0 left-0 right-0 z-50">
          <Analytics/>
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
