'use client';

import Link from 'next/link';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';
import Button from './ui/Button';
import styles from './FeaturedProjects.module.css';

export default function FeaturedProjects() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const viewAllRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section ref={sectionRef} className={`${styles.section} scroll-reveal`}>
      <div className="container">
        <div ref={headerRef} className={`${styles.header} scroll-reveal`}>
          <h2 className={styles.title}>
            Featured <span className="text-brand">Projects</span>
          </h2>
          <p className={styles.subtitle}>
            A showcase of my recent work, built with modern technologies and clean design principles.
          </p>
        </div>
        
        <div className={`grid grid-3 ${styles.projectsGrid} scroll-reveal-stagger`}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        
                <div ref={viewAllRef} className={`${styles.viewAll} scroll-reveal`}>
                  <Button
                    href="/projects"
                    variant="secondary"
                    size="md"
                  >
                    View All Projects
                  </Button>
                </div>
      </div>
    </section>
  );
}
