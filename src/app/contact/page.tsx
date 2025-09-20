import { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact Me - Terence Richardson',
  description: 'Get in touch with Terence Richardson for collaborations, projects, or inquiries.',
  keywords: ['contact', 'collaboration', 'hire', 'developer', 'full-stack'],
  authors: [{ name: 'Terence Richardson' }],
  creator: 'Terence Richardson',
  openGraph: {
    title: 'Contact Me - Terence Richardson',
    description: 'Get in touch with Terence Richardson for collaborations, projects, or inquiries.',
    type: 'website',
    images: [
      {
        url: '/previews/portfolio/portfolio-og.svg',
        width: 1200,
        height: 630,
        alt: 'Contact Terence Richardson',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Me - Terence Richardson',
    description: 'Get in touch with Terence Richardson for collaborations, projects, or inquiries.',
    images: ['/previews/portfolio/portfolio-og.svg'],
  },
  alternates: {
    canonical: 'https://portfolio-site-5a96pv9uj-terence-s-projects-e20ec262.vercel.app/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
