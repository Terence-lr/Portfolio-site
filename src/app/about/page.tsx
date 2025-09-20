import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About - Terence Richardson',
  description: 'Learn more about Terence Richardson, a passionate full-stack developer with expertise in modern web technologies.',
  openGraph: {
    title: 'About - Terence Richardson',
    description: 'Learn more about Terence Richardson, a passionate full-stack developer with expertise in modern web technologies.',
    images: ['/previews/portfolio/portfolio-og.png'],
  },
};

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <About />
      </main>
      <Footer />
    </>
  );
}
