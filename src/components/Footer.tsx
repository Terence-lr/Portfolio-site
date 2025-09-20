import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Terence Richardson
            </Link>
            <p className={styles.tagline}>
              Full-Stack Developer crafting modern web experiences
            </p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Navigation</h3>
              <div className={styles.linkList}>
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/projects" className={styles.link}>Projects</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
              </div>
            </div>
            
            <div className={styles.linkGroup}>
              <h3 className={styles.linkTitle}>Connect</h3>
              <div className={styles.linkList}>
                <a 
                  href="https://github.com/Terence-lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
                <a 
                  href="mailto:terence.richardson@example.com" 
                  className={styles.link}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Terence Richardson. All rights reserved.
          </p>
          <p className={styles.built}>
            Built with Next.js, TypeScript, and CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
