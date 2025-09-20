import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h2 className={styles.title}>
              About
            </h2>
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <p className={styles.description}>
                  I'm Terence Richardson, a Navy-trained, NYC-based software builder focused on creating AI-native tools that make life simpler and more efficient. I thrive at the intersection of strategy, design, and execution — with a mindset shaped by discipline, creativity, and curiosity.
                </p>
                <p className={styles.description}>
                  When I'm not coding, I'm investing in personal growth, fitness, and exploring ways technology can empower communities. My mission is to use tech not just for innovation, but for impact.
                </p>
              </div>
              <div className={styles.aboutImage}>
                <Image
                  src="/images/Terence2.jpg"
                  alt="Terence Richardson headshot."
                  width={300}
                  height={300}
                  className={styles.portrait}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
