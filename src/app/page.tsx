import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <FeaturedProjects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
