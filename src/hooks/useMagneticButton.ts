'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function useMagneticButton() {
  const buttonRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const scale = useMotionValue(1);

  const smoothX = useSpring(x, { damping: 25, stiffness: 200 });
  const smoothY = useSpring(y, { damping: 25, stiffness: 200 });
  const smoothRotateX = useSpring(rotateX, { damping: 25, stiffness: 200 });
  const smoothRotateY = useSpring(rotateY, { damping: 25, stiffness: 200 });
  const smoothScale = useSpring(scale, { damping: 25, stiffness: 200 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current || !isHovered) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const maxTilt = 6;
    const maxOffset = 8;
    
    const tiltX = (deltaY / rect.height) * maxTilt;
    const tiltY = (deltaX / rect.width) * maxTilt;
    
    const offsetX = (deltaX / rect.width) * maxOffset;
    const offsetY = (deltaY / rect.height) * maxOffset;
    
    x.set(offsetX);
    y.set(offsetY);
    rotateX.set(-tiltX);
    rotateY.set(tiltY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scale.set(1.02);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const handleMouseDown = () => {
    setIsPressed(true);
    scale.set(0.96);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
    scale.set(isHovered ? 1.02 : 1);
  };

  return {
    buttonRef,
    isHovered,
    isPressed,
    motionProps: {
      ref: buttonRef,
      style: {
        x: smoothX,
        y: smoothY,
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        scale: smoothScale,
      },
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
    },
  };
}
