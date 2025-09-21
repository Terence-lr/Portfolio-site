import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Resume - Terence Richardson',
  description: 'Download Terence Richardson\'s resume - AI-Native Software Engineer & Builder in NYC.',
  keywords: ['resume', 'CV', 'download', 'software engineer', 'developer'],
  authors: [{ name: 'Terence Richardson' }],
  creator: 'Terence Richardson',
  openGraph: {
    title: 'Resume - Terence Richardson',
    description: 'Download Terence Richardson\'s resume - AI-Native Software Engineer & Builder in NYC.',
    type: 'website',
    images: [
      {
        url: '/previews/portfolio/portfolio-og.svg',
        width: 1200,
        height: 630,
        alt: 'Terence Richardson Resume',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume - Terence Richardson',
    description: 'Download Terence Richardson\'s resume - AI-Native Software Engineer & Builder in NYC.',
    images: ['/previews/portfolio/portfolio-og.svg'],
  },
  alternates: {
    canonical: 'https://www.trichardson.dev/resume',
  },
};

export default function ResumePage() {
  return (
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
              className="btn btn-primary interactive"
            >
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
