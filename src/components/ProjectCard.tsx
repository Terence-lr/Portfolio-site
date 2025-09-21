'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Project } from '@/data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Button from './ui/Button';
import GitHubIcon from './icons/GitHubIcon';
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
          {project.demoUrl ? (
            <a 
              href={project.demoUrl} 
              className={`${styles.viewProject} interactive`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
            >
              View Live Site
            </a>
          ) : (
            <span className={`${styles.viewProject} ${styles.disabled}`}>
              Preview Coming Soon
            </span>
          )}
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
          <Button
            href={project.demoUrl}
            variant="primary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View live demo of ${project.title}`}
          >
            {project.cta.demo}
          </Button>
          <Button
            href={project.repoUrl}
            variant="secondary"
            size="md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code for ${project.title} on GitHub`}
          >
            <GitHubIcon size={24} />
          </Button>
        </div>
      </div>
    </article>
  );
}
