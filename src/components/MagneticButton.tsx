'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import styles from './MagneticButton.module.css';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  href?: string;
  target?: string;
  rel?: string;
}

export default function MagneticButton({
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
  href,
  target,
  rel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const buttonClasses = [
    styles.button,
    styles[variant],
    isHovered ? styles.hovered : '',
    isPressed ? styles.pressed : '',
    disabled ? styles.disabled : '',
    className,
  ].filter(Boolean).join(' ');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  const buttonContent = (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
      }}
    >
      <span className={styles.buttonContent}>
        {children}
      </span>
      
      {/* Kinetic Light Sweep */}
      <motion.div
        className={styles.lightSweep}
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? '100%' : '-100%' }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
      
      {/* Ripple Effect */}
      <motion.div
        className={styles.ripple}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isPressed ? 1 : 0,
          opacity: isPressed ? 0.3 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeOut',
        }}
      />
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        className={styles.linkWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{
          type: 'spring',
          damping: 25,
          stiffness: 300,
        }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return buttonContent;
}
