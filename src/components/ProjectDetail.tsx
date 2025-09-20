import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import styles from './ProjectDetail.module.css';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className={styles.container}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.summary}>{project.summary}</p>
              <div className={styles.meta}>
                <span className={styles.role}>{project.role}</span>
                <span className={styles.year}>{project.year}</span>
              </div>
              <div className={styles.cta}>
                <a 
                  href={project.demoUrl} 
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.cta.demo}
                </a>
                <a 
                  href={project.repoUrl} 
                  className="btn btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.cta.repo}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src={project.preview.cover}
                alt={`${project.title} preview`}
                width={600}
                height={400}
                className={styles.previewImage}
                priority
              />
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className={styles.details}>
          <div className={styles.detailsGrid}>
            <div className={styles.techSection}>
              <h2 className={styles.sectionTitle}>Technologies Used</h2>
              <div className={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.highlightsSection}>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.highlightsList}>
                {project.highlights.map((highlight, index) => (
                  <li key={index} className={styles.highlight}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className={styles.navigation}>
          <Link href="/projects" className="btn btn-secondary">
            ← Back to Projects
          </Link>
        </section>
      </div>
    </div>
  );
}
