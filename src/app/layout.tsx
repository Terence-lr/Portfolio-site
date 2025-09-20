import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import CustomCursor from '../components/CustomCursor';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app'),
  title: 'Terence Richardson - Full-Stack Developer',
  description: 'Portfolio of Terence Richardson, a full-stack developer specializing in modern web technologies and clean, efficient code.',
  keywords: ['developer', 'portfolio', 'full-stack', 'react', 'typescript', 'nextjs'],
  authors: [{ name: 'Terence Richardson' }],
  creator: 'Terence Richardson',
  icons: {
    icon: [
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.ico', sizes: 'any' },
    ],
    apple: '/images/apple-touch-icon.png',
    other: [
      { rel: 'android-chrome-192x192', url: '/images/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/images/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/',
    title: 'Terence Richardson - Full-Stack Developer',
    description: 'Portfolio of Terence Richardson, a full-stack developer specializing in modern web technologies.',
    siteName: 'Terence Richardson Portfolio',
    images: [
      {
        url: '/previews/portfolio/portfolio-og.png',
        width: 1200,
        height: 630,
        alt: 'Terence Richardson Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terence Richardson - Full-Stack Developer',
    description: 'Portfolio of Terence Richardson, a full-stack developer specializing in modern web technologies.',
    images: ['/previews/portfolio/portfolio-og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href="https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/" />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <CustomCursor />
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
