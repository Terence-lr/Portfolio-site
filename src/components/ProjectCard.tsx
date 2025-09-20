'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Project } from '@/data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import MagneticButton from './MagneticButton';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && project.preview.video) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <article 
      ref={cardRef}
      className={`card ${styles.projectCard} scroll-reveal interactive`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.projectImage}>
        {isHovered && project.preview.video ? (
          <video
            ref={videoRef}
            src={project.preview.video}
            poster={project.preview.cover}
            className={styles.coverImage}
            muted
            loop
            playsInline
            onError={() => {
              // Fallback to GIF if video fails
              if (videoRef.current && project.preview.gif) {
                videoRef.current.src = project.preview.gif;
              }
            }}
          />
        ) : (
          <Image
            src={project.preview.cover}
            alt={`${project.title} preview`}
            width={500}
            height={300}
            className={styles.coverImage}
          />
        )}
        <div className={styles.projectOverlay}>
          <Link href={`/projects/${project.slug}`} className={`${styles.viewProject} interactive`}>
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
            <span 
              key={tech} 
              className={styles.techTag}
              title={`Built with ${tech}`}
              aria-label={`Technology: ${tech}`}
            >
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
          <MagneticButton
            href={project.demoUrl}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic"
            aria-label={`View live demo of ${project.title}`}
          >
            {project.cta.demo}
          </MagneticButton>
          <MagneticButton
            href={project.repoUrl}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            {project.cta.repo}
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}
