import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.title}>
              AI-Native Software Engineer & Builder in NYC
            </h1>
            <p className={styles.subtitle}>
              I design and ship lean, user-obsessed tools — from productivity systems to job-hunt dashboards — using modern web tech and an eye for real-world impact.
            </p>
            <div className={styles.cta}>
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
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
