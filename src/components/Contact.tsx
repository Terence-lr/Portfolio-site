'use client';

import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const formRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const socialRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className={`${styles.section} scroll-reveal`}>
      <div className="container">
        <div className={styles.content}>
          <div ref={headerRef} className={`${styles.header} scroll-reveal`}>
            <h2 className={styles.title}>
              Contact
            </h2>
            <p className={styles.subtitle}>
              Let's connect! Whether it's collaboration, opportunities, or just a conversation about building with AI — I'd love to hear from you.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div ref={formRef} className={`${styles.contactForm} scroll-reveal`}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={styles.input}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className={styles.input}
                    required 
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    className={styles.textarea}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary interactive">
                  Send Message
                </button>
              </form>
            </div>
            
            <div ref={socialRef} className={`${styles.socialLinks} scroll-reveal`}>
              <h3 className={styles.socialTitle}>Connect</h3>
              <div className={styles.socialList}>
                <a 
                  href="https://github.com/Terence-lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} interactive`}
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/terence-richardson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} interactive`}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/terence_lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} interactive`}
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
