import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resume - Terence Richardson',
  description: 'Download Terence Richardson\'s resume - AI-Native Software Engineer & Builder in NYC.',
  openGraph: {
    title: 'Resume - Terence Richardson',
    description: 'Download Terence Richardson\'s resume - AI-Native Software Engineer & Builder in NYC.',
    images: ['/previews/portfolio/portfolio-og.png'],
  },
};

export default function ResumePage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h1 className={styles.title}>Resume</h1>
            <p className={styles.subtitle}>
              Download my resume to learn more about my experience and skills.
            </p>
            <div className={styles.downloadSection}>
              <a 
                href="/assets/resume.pdf" 
                download="Terence_Richardson_Resume.pdf"
                className="btn btn-primary"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
