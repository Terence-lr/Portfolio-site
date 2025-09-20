import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Projects - Terence Richardson',
  description: 'Explore my portfolio of web development projects, including modern applications built with React, TypeScript, and other cutting-edge technologies.',
  openGraph: {
    title: 'Projects - Terence Richardson',
    description: 'Explore my portfolio of web development projects, including modern applications built with React, TypeScript, and other cutting-edge technologies.',
    images: ['/previews/portfolio/portfolio-og.png'],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1 className={styles.title}>
              My <span className="text-brand">Projects</span>
            </h1>
            <p className={styles.subtitle}>
              A collection of web applications and projects I've built, 
              showcasing my skills in modern web development.
            </p>
          </div>
          
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
