import { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'About Me - Terence Richardson',
  description: 'Learn more about Terence Richardson, a full-stack developer passionate about building innovative web solutions.',
  keywords: ['about', 'developer', 'full-stack', 'software engineer', 'AI-native'],
  authors: [{ name: 'Terence Richardson' }],
  creator: 'Terence Richardson',
  openGraph: {
    title: 'About Me - Terence Richardson',
    description: 'Learn more about Terence Richardson, a full-stack developer passionate about building innovative web solutions.',
    type: 'profile',
    images: [
      {
        url: '/previews/portfolio/portfolio-og.svg',
        width: 1200,
        height: 630,
        alt: 'Terence Richardson About',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Me - Terence Richardson',
    description: 'Learn more about Terence Richardson, a full-stack developer passionate about building innovative web solutions.',
    images: ['/previews/portfolio/portfolio-og.svg'],
  },
  alternates: {
    canonical: 'https://www.trichardson.dev/about',
  },
};

export default function AboutPage() {
  return <About />;
}
