import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Contact - Terence Richardson',
  description: 'Get in touch with Terence Richardson for collaboration opportunities, project discussions, or just to say hello.',
  openGraph: {
    title: 'Contact - Terence Richardson',
    description: 'Get in touch with Terence Richardson for collaboration opportunities, project discussions, or just to say hello.',
    images: ['/previews/portfolio/portfolio-og.png'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
