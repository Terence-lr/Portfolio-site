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
              Hey there, I'm{' '}
              <span className={styles.name}>Terence Richardson</span>
            </h1>
            <p className={styles.subtitle}>
              Full-Stack Developer crafting modern web experiences with clean code and innovative solutions.
            </p>
            <div className={styles.cta}>
              <Link href="/projects" className="btn btn-primary">
                View My Work
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/I38A1308_1757873611775.jpeg"
              alt="Terence Richardson"
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
