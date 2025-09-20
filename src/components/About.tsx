'use client';

import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './About.module.css';

export default function About() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const titleRef = useScrollReveal<HTMLHeadingElement>({ threshold: 0.3 });
  const contentRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const imageRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className={`${styles.section} scroll-reveal`}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 ref={titleRef} className={`${styles.title} scroll-reveal`}>
              About
            </h2>
            <div ref={contentRef} className={`${styles.aboutContent} scroll-reveal`}>
              <div className={styles.aboutText}>
                <p className={styles.description}>
                  I'm Terence Richardson, a Navy-trained, NYC-based software builder focused on creating AI-native tools that make life simpler and more efficient. I thrive at the intersection of strategy, design, and execution — with a mindset shaped by discipline, creativity, and curiosity.
                </p>
                <p className={styles.description}>
                  When I'm not coding, I'm investing in personal growth, fitness, and exploring ways technology can empower communities. My mission is to use tech not just for innovation, but for impact.
                </p>
              </div>
                      <div ref={imageRef} className={`${styles.aboutImage} scroll-reveal`}>
                        <Image
                          src="/images/circle.jpg"
                          alt="Terence Richardson, a Navy-trained, NYC-based software builder focused on creating AI-native tools."
                          width={420}
                          height={420}
                          className={styles.portrait}
                          priority
                          sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 420px"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                        />
                      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
