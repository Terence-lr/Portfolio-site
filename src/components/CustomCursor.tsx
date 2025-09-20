'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import styles from './CustomCursor.module.css';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  isOverInput: boolean;
  isDragging: boolean;
  targetElement: HTMLElement | null;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

export default function CustomCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    isClicking: false,
    isOverInput: false,
    isDragging: false,
    targetElement: null,
  });

  const [particles, setParticles] = useState<Particle[]>([]);
  const [reducedMotion, setReducedMotion] = useState(false);
  
  const cursorRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const particleIdRef = useRef(0);

  // Motion values for smooth cursor tracking
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const haloX = useMotionValue(0);
  const haloY = useMotionValue(0);

  // Spring physics for smooth following
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const haloSpringConfig = { damping: 20, stiffness: 150, mass: 0.8 };

  const smoothCursorX = useSpring(cursorX, springConfig);
  const smoothCursorY = useSpring(cursorY, springConfig);
  const smoothHaloX = useSpring(haloX, haloSpringConfig);
  const smoothHaloY = useSpring(haloY, haloSpringConfig);

  // Transform values for magnetic attraction
  const magneticX = useTransform(smoothCursorX, (value) => {
    if (!cursorState.isHovering || !cursorState.targetElement || reducedMotion) {
      return value;
    }
    const rect = cursorState.targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(value - centerX, 2) + Math.pow(smoothCursorY.get() - centerY, 2)
    );
    const maxDistance = 36;
    const attraction = Math.max(0, 1 - distance / maxDistance);
    return value + (centerX - value) * attraction * 0.3;
  });

  const magneticY = useTransform(smoothCursorY, (value) => {
    if (!cursorState.isHovering || !cursorState.targetElement || reducedMotion) {
      return value;
    }
    const rect = cursorState.targetElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(smoothCursorX.get() - centerX, 2) + Math.pow(value - centerY, 2)
    );
    const maxDistance = 36;
    const attraction = Math.max(0, 1 - distance / maxDistance);
    return value + (centerY - value) * attraction * 0.3;
  });

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Mouse tracking
  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    haloX.set(e.clientX);
    haloY.set(e.clientY);
  }, [cursorX, cursorY, haloX, haloY]);

  // Magnetic attraction detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isMagnetic = target.closest('.magnetic, .interactive, button, a, [role="button"]');
    
    if (isMagnetic) {
      setCursorState(prev => ({
        ...prev,
        isHovering: true,
        targetElement: target,
      }));
    } else {
      setCursorState(prev => ({
        ...prev,
        isHovering: false,
        targetElement: null,
      }));
    }

    // Check for input elements
    const isInput = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
    setCursorState(prev => ({ ...prev, isOverInput: isInput }));
  }, []);

  // Click effects
  const handleMouseDown = useCallback((e: MouseEvent) => {
    setCursorState(prev => ({ ...prev, isClicking: true }));
    
    if (!reducedMotion) {
      // Create particle burst
      const newParticles: Particle[] = [];
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2;
        const velocity = 2 + Math.random() * 3;
        newParticles.push({
          id: particleIdRef.current++,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          maxLife: 1,
        });
      }
      setParticles(prev => [...prev, ...newParticles]);
    }
  }, [reducedMotion]);

  const handleMouseUp = useCallback(() => {
    setCursorState(prev => ({ ...prev, isClicking: false }));
  }, []);

  // Particle animation
  useEffect(() => {
    if (particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev => 
        prev
          .map(particle => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vx: particle.vx * 0.95,
            vy: particle.vy * 0.95,
            life: particle.life - 0.02,
          }))
          .filter(particle => particle.life > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, [particles.length]);

  // Event listeners
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseDown, handleMouseUp]);

  // Hide default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        ref={cursorRef}
        className={`${styles.cursor} ${cursorState.isOverInput ? styles.cursorInput : ''} ${cursorState.isClicking ? styles.cursorClicking : ''}`}
        style={{
          x: magneticX,
          y: magneticY,
        }}
        animate={{
          scale: cursorState.isHovering ? 1.2 : 1,
          opacity: cursorState.isOverInput ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
      />

      {/* Halo/Glow Ring */}
      <motion.div
        ref={haloRef}
        className={`${styles.halo} ${cursorState.isHovering ? styles.haloHovering : ''}`}
        style={{
          x: smoothHaloX,
          y: smoothHaloY,
        }}
        animate={{
          scale: cursorState.isHovering ? 1.5 : 1,
          opacity: cursorState.isHovering ? 0.8 : 0.4,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 150,
        }}
      />

      {/* Particles */}
      {!reducedMotion && particles.map(particle => (
        <motion.div
          key={particle.id}
          className={styles.particle}
          style={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            opacity: particle.life,
            scale: particle.life,
          }}
          transition={{
            duration: 0,
          }}
        />
      ))}

      {/* Spotlight Effect */}
      {!reducedMotion && (
        <motion.div
          className={styles.spotlight}
          style={{
            x: smoothHaloX,
            y: smoothHaloY,
          }}
          animate={{
            opacity: cursorState.isHovering ? 0.1 : 0.05,
            scale: cursorState.isHovering ? 2 : 1.5,
          }}
        />
      )}
    </>
  );
}