'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';
import MagneticButton from './MagneticButton';
import styles from './Hero.module.css';

export default function Hero() {
  const heroRef = useScrollReveal<HTMLElement>({ threshold: 0.3 });
  const textRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={heroRef} className={`${styles.hero} scroll-reveal`}>
      <div className="container">
        <div className={styles.heroContent}>
          <div ref={textRef} className={`${styles.heroText} scroll-reveal`}>
            <h1 className={styles.title}>
              AI-Native Software Engineer & Builder in NYC
            </h1>
            <p className={styles.subtitle}>
              I design and ship lean, user-obsessed tools — from productivity systems to job-hunt dashboards — using modern web tech and an eye for real-world impact.
            </p>
                    <div className={`${styles.cta} scroll-reveal-stagger`}>
                      <MagneticButton
                        href="/projects"
                        variant="primary"
                        className="magnetic"
                      >
                        View Projects
                      </MagneticButton>
                      <MagneticButton
                        href="/contact"
                        variant="secondary"
                        className="magnetic"
                      >
                        Contact
                      </MagneticButton>
                    </div>
          </div>
          <div ref={imageRef} className={`${styles.heroImage} scroll-reveal`}>
            <Image
              src="/images/Terence1.jpeg"
              alt="Terence Richardson smiling, NYC-based AI-native software engineer."
              width={400}
              height={400}
              priority
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
