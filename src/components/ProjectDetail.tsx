'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { Project } from '@/data/projects';
import { useScrollReveal } from '../hooks/useScrollReveal';
import styles from './ProjectDetail.module.css';

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const heroRef = useScrollReveal<HTMLElement>({ threshold: 0.3 });
  const detailsRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const navRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className={styles.container}>
      <div className="container">
        {/* Hero Section */}
        <section ref={heroRef} className={`${styles.hero} scroll-reveal`}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.title}>{project.title}</h1>
              <p className={styles.microTagline}>{project.microTagline}</p>
              <p className={styles.summary}>{project.summary}</p>
              <div className={styles.meta}>
                <span className={styles.role}>{project.role}</span>
                <span className={styles.year}>{project.year}</span>
              </div>
              <div className={styles.cta}>
                <a 
                  href={project.demoUrl} 
                  className="btn btn-primary interactive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.cta.demo}
                </a>
                <a 
                  href={project.repoUrl} 
                  className="btn btn-secondary interactive"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.cta.repo}
                </a>
              </div>
            </div>
            <div className={styles.heroImage}>
              {project.preview.video ? (
                <div className={styles.videoContainer}>
                  <video
                    ref={videoRef}
                    src={project.preview.video}
                    poster={project.preview.cover}
                    className={styles.previewImage}
                    muted
                    loop
                    playsInline
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                    onError={() => {
                      // Fallback to GIF if video fails
                      if (videoRef.current && project.preview.gif) {
                        videoRef.current.src = project.preview.gif;
                      }
                    }}
                  />
                  <div className={styles.videoOverlay}>
                    <button 
                      className={styles.playButton}
                      onClick={isVideoPlaying ? handleVideoPause : handleVideoPlay}
                      aria-label={isVideoPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isVideoPlaying ? '⏸️' : '▶️'}
                    </button>
                  </div>
                </div>
              ) : (
                <Image
                  src={project.preview.cover}
                  alt={`${project.title} preview`}
                  width={600}
                  height={400}
                  className={styles.previewImage}
                  priority
                />
              )}
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section ref={detailsRef} className={`${styles.details} scroll-reveal`}>
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
        <section ref={navRef} className={`${styles.navigation} scroll-reveal`}>
          <Link href="/projects" className="btn btn-secondary interactive">
            ← Back to Projects
          </Link>
        </section>
      </div>
    </div>
  );
}
