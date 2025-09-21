'use client';

import ProjectCard from '@/components/ProjectCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export default function ProjectsPageClient() {
  const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <main className={styles.main}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} scroll-reveal`}>
          <h1 className={styles.title}>
            My <span className="text-brand">Projects</span>
          </h1>
          <p className={styles.subtitle}>
            A collection of web applications and projects I've built, 
            showcasing my skills in modern web development.
          </p>
        </div>
        
        <div ref={gridRef} className={`grid grid-3 ${styles.projectsGrid} scroll-reveal-stagger`}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
