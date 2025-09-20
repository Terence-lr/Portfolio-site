import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>Page Not Found</h2>
          <p className={styles.description}>
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn btn-primary">
              Go Home
            </Link>
            <Link href="/projects" className="btn btn-secondary">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
