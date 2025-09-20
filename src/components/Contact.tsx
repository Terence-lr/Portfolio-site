import Link from 'next/link';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Contact
            </h2>
            <p className={styles.subtitle}>
              Let's connect! Whether it's collaboration, opportunities, or just a conversation about building with AI — I'd love to hear from you.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactForm}>
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
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            
            <div className={styles.socialLinks}>
              <h3 className={styles.socialTitle}>Connect</h3>
              <div className={styles.socialList}>
                <a 
                  href="https://github.com/Terence-lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  GitHub
                </a>
                <a 
                  href="https://linkedin.com/in/terence-richardson" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/terence_lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.socialLink}
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
