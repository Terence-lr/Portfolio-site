import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
