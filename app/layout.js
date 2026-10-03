import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata = {
  title: 'Kaha — Learn Fashion Designing & Start Your Boutique in 100 Days',
  description:
    'Join Kaha\'s 100-Day Fashion Entrepreneur Program. Learn tailoring, fashion designing, and boutique management from a 12+ year cine costume designer. Government certificate + 50+ item free kit.',
  keywords:
    'fashion designing course, tailoring course India, boutique management, learn fashion designing online, Indian fashion education',
  openGraph: {
    title: 'Kaha — 100-Day Fashion & Boutique Program',
    description: 'Learn Fashion Designing & Start Building Your Own Boutique in Just 100 Days.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}
