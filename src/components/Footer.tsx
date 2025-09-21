import Link from 'next/link';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import XIcon from './icons/XIcon';
import styles from './Footer.module.css';

export default function Footer() {
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
                  className={`${styles.link} interactive`}
                  aria-label="GitHub"
                >
                  <GitHubIcon size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/terence-richardson-13b22a211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.link} interactive`}
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={20} />
                </a>
                <a 
                  href="https://x.com/terence_rich" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.link} interactive`}
                  aria-label="X (Twitter)"
                >
                  <XIcon size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <small className={styles.copyright} aria-label="site footer">
            © {new Date().getFullYear()} Terence Richardson — ⚡ Running on Next.js, fueled by 🎶 & 🌙 commits.
          </small>
        </div>
      </div>
    </footer>
  );
}
