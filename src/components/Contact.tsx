import Link from 'next/link';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Let's <span className="text-brand">Connect</span>
            </h2>
            <p className={styles.subtitle}>
              Ready to work together? I'm always interested in new opportunities 
              and exciting projects. Let's discuss how we can bring your ideas to life.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactTitle}>Get In Touch</h3>
              <p className={styles.contactDescription}>
                Whether you have a project in mind, want to collaborate, or just 
                want to say hello, I'd love to hear from you.
              </p>
              
              <div className={styles.contactMethods}>
                <a 
                  href="mailto:terence.richardson@example.com" 
                  className={styles.contactMethod}
                >
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>terence.richardson@example.com</span>
                </a>
                
                <a 
                  href="https://github.com/Terence-lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.contactMethod}
                >
                  <span className={styles.contactLabel}>GitHub</span>
                  <span className={styles.contactValue}>github.com/Terence-lr</span>
                </a>
              </div>
            </div>
            
            <div className={styles.cta}>
              <h3 className={styles.ctaTitle}>Ready to Start?</h3>
              <p className={styles.ctaDescription}>
                Let's discuss your project and see how we can work together 
                to create something amazing.
              </p>
              <div className={styles.ctaButtons}>
                <a 
                  href="mailto:terence.richardson@example.com" 
                  className="btn btn-primary"
                >
                  Send Email
                </a>
                <Link href="/projects" className="btn btn-secondary">
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
