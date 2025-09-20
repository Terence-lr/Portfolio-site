'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  href?: string;
  target?: string;
  rel?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  'aria-label'?: string;
  'aria-describedby'?: string;
  'data-analytics'?: string;
  'data-tracking'?: string;
}

export default function Button({
  children,
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const buttonRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const buttonClasses = [
    styles.button,
    styles[variant],
    styles[size],
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

  // Handle external links with proper security attributes
  const linkProps = href ? {
    target: target || (href.startsWith('http') ? '_blank' : undefined),
    rel: rel || (href.startsWith('http') ? 'noopener noreferrer' : undefined),
  } : {};

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
      {...props}
    >
      <span className={styles.buttonContent}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        {children}
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
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

  // Handle internal Next.js links
  if (href && !href.startsWith('http')) {
    return (
      <Link href={href} className={styles.linkWrapper}>
        {buttonContent}
      </Link>
    );
  }

  // Handle external links
  if (href) {
    return (
      <motion.a
        href={href}
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
        {...linkProps}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return buttonContent;
}
