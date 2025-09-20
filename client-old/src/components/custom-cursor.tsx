import { useEffect, useRef, useCallback } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const lastMouseMove = useRef<number>(0);

  // Throttle function for performance
  const throttle = useCallback((func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    let lastExecTime = 0;
    return function (this: any, ...args: any[]) {
      const currentTime = Date.now();
      
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = Date.now();
        }, delay - (currentTime - lastExecTime));
      }
    };
  }, []);

  // Create cursor trail
  const createTrail = useCallback((x: number, y: number) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail visible';
    trail.style.left = `${x - 4}px`;
    trail.style.top = `${y - 4}px`;
    document.body.appendChild(trail);
    
    trailRefs.current.push(trail);
    
    // Remove trail after animation
    setTimeout(() => {
      trail.classList.remove('visible');
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
        const index = trailRefs.current.indexOf(trail);
        if (index > -1) {
          trailRefs.current.splice(index, 1);
        }
      }, 300);
    }, 100);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let followerX = 0;
    let followerY = 0;

    const updateCursor = () => {
      // Main cursor follows mouse directly
      const diffX = mouseX - cursorX;
      const diffY = mouseY - cursorY;
      cursorX += diffX * 0.15;
      cursorY += diffY * 0.15;
      
      // Follower cursor with more lag
      const followerDiffX = mouseX - followerX;
      const followerDiffY = mouseY - followerY;
      followerX += followerDiffX * 0.08;
      followerY += followerDiffY * 0.08;
      
      // Use transform for better performance
      cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
      follower.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`;
      
      requestAnimationFrame(updateCursor);
    };

    // Throttled mouse move handler
    const handleMouseMove = throttle((e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseMove.current = Date.now();
      
      // Create trail effect occasionally
      if (Math.random() > 0.8) {
        createTrail(e.clientX, e.clientY);
      }
    }, 16);

    // Mouse click handlers
    const handleMouseDown = () => {
      cursor.classList.add('click');
      follower.classList.add('click');
    };

    const handleMouseUp = () => {
      cursor.classList.remove('click');
      follower.classList.remove('click');
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, textarea, [role="button"], .magnetic, .project-card, .skill-badge') ||
                           target.closest('button, a, input, textarea, [role="button"], .magnetic, .project-card, .skill-badge');
      
      if (isInteractive) {
        cursor.classList.add('hover');
        follower.classList.add('hover');
        
        // Enhanced magnetic effect
        const rect = target.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
        );
        
        if (distance < 120) {
          const force = (120 - distance) / 120;
          const offsetX = (centerX - mouseX) * force * 0.2;
          const offsetY = (centerY - mouseY) * force * 0.2;
          
          target.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
          target.classList.add('magnetic');
        } else {
          target.style.transform = 'translate(0, 0)';
          target.classList.remove('magnetic');
        }
      } else {
        cursor.classList.remove('hover');
        follower.classList.remove('hover');
      }
    };

    // Initialize cursor positions
    cursor.style.opacity = '1';
    follower.style.opacity = '1';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Clean up trails
      trailRefs.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      trailRefs.current = [];
    };
  }, [throttle, createTrail]);

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      <div
        ref={followerRef}
        className="custom-cursor"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
      />
    </>
  );
}
