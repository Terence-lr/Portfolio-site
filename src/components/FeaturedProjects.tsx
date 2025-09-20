import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Featured <span className="text-brand">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A showcase of my recent work, built with modern technologies and clean design principles.
          </p>
        </div>
        
        <div className={`grid grid-3 ${styles.projectsGrid}`}>
          {projects.map((project) => (
            <div key={project.slug} className={`card ${styles.projectCard}`}>
              <div className={styles.projectImage}>
                <Image
                  src={project.preview.cover}
                  alt={`${project.title} preview`}
                  width={400}
                  height={250}
                  className={styles.coverImage}
                />
                <div className={styles.projectOverlay}>
                  <Link href={`/projects/${project.slug}`} className={styles.viewProject}>
                    View Project
                  </Link>
                </div>
              </div>
              
              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectSummary}>{project.summary}</p>
                
                <div className={styles.techStack}>
                  {project.tech.map((tech) => (
                    <span key={tech} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={styles.projectActions}>
                  <Link href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                  <Link href={project.repoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAll}>
          <Link href="/projects" className="btn btn-secondary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
