import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={`card ${styles.projectCard}`}>
      <div className={styles.projectImage}>
        <Image
          src={project.preview.cover}
          alt={`${project.title} preview`}
          width={500}
          height={300}
          className={styles.coverImage}
        />
        <div className={styles.projectOverlay}>
          <Link href={`/projects/${project.slug}`} className={styles.viewProject}>
            View Details
          </Link>
        </div>
      </div>
      
      <div className={styles.projectContent}>
        <div className={styles.projectHeader}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <span className={styles.projectYear}>{project.year}</span>
        </div>
        
        <p className={styles.microTagline}>{project.microTagline}</p>
        <p className={styles.projectSummary}>{project.summary}</p>
        
        <div className={styles.techStack}>
          {project.tech.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>
        
        <div className={styles.highlights}>
          <h4 className={styles.highlightsTitle}>Key Features</h4>
          <ul className={styles.highlightsList}>
            {project.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className={styles.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.projectActions}>
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
    </article>
  );
}
