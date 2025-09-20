import { useEffect, useRef, useCallback, useState } from 'react';

interface CursorState {
  type: 'default' | 'magnify' | 'code' | 'terminal' | 'neural' | 'quantum';
  intensity: number;
  prediction: string;
}

export default function AICursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const [cursorState, setCursorState] = useState<CursorState>({
    type: 'default',
    intensity: 0.5,
    prediction: ''
  });

  // AI-powered cursor prediction
  const predictUserIntent = useCallback((element: HTMLElement, mouseX: number, mouseY: number) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2));
    
    // AI prediction logic
    if (element.matches('code, pre, .code-block')) {
      return { type: 'code', intensity: 0.9, prediction: 'Code analysis mode' };
    } else if (element.matches('img, .project-preview')) {
      return { type: 'magnify', intensity: 0.8, prediction: 'Image inspection' };
    } else if (element.matches('button, a, .interactive')) {
      return { type: 'neural', intensity: 0.7, prediction: 'Interactive element' };
    } else if (element.matches('.terminal, .console')) {
      return { type: 'terminal', intensity: 0.9, prediction: 'Terminal access' };
    } else if (distance < 100) {
      return { type: 'quantum', intensity: 0.6, prediction: 'Quantum field active' };
    }
    
    return { type: 'default', intensity: 0.5, prediction: 'Neural network standby' };
  }, []);

  // Create contextual trails
  const createContextualTrail = useCallback((x: number, y: number, type: string) => {
    const trail = document.createElement('div');
    trail.className = `cursor-trail ${type}-trail`;
    
    switch (type) {
      case 'code':
        trail.innerHTML = '<span class="code-syntax">{ }</span>';
        trail.style.color = '#00FFFF';
        break;
      case 'magnify':
        trail.innerHTML = '<span class="magnify-icon">🔍</span>';
        trail.style.color = '#FF6B35';
        break;
      case 'terminal':
        trail.innerHTML = '<span class="terminal-cursor">_</span>';
        trail.style.color = '#8A2BE2';
        break;
      case 'neural':
        trail.innerHTML = '<span class="neural-node">●</span>';
        trail.style.color = '#00FFFF';
        break;
      case 'quantum':
        trail.innerHTML = '<span class="quantum-particle">◊</span>';
        trail.style.color = '#8A2BE2';
        break;
      default:
        trail.innerHTML = '<span class="default-trail">•</span>';
        trail.style.color = '#B8C5D1';
    }
    
    trail.style.left = `${x - 8}px`;
    trail.style.top = `${y - 8}px`;
    trail.style.position = 'fixed';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9998';
    trail.style.fontSize = '12px';
    trail.style.opacity = '0.8';
    trail.style.transition = 'opacity 0.5s ease-out, transform 0.3s ease-out';
    
    document.body.appendChild(trail);
    trailRefs.current.push(trail);
    
    // Animate trail
    setTimeout(() => {
      trail.style.opacity = '0';
      trail.style.transform = 'scale(0.5) translateY(-20px)';
    }, 100);
    
    // Remove trail
    setTimeout(() => {
      if (trail.parentNode) {
        trail.parentNode.removeChild(trail);
      }
      const index = trailRefs.current.indexOf(trail);
      if (index > -1) {
        trailRefs.current.splice(index, 1);
      }
    }, 600);
  }, []);

  // Gravitational field effect
  const applyGravitationalField = useCallback((mouseX: number, mouseY: number) => {
    const elements = document.querySelectorAll('.gravitational');
    elements.forEach((element) => {
      const el = element as HTMLElement;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distance = Math.sqrt(
        Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
      );
      
      if (distance < 200) {
        const force = (200 - distance) / 200;
        const angle = Math.atan2(centerY - mouseY, centerX - mouseX);
        const offsetX = Math.cos(angle) * force * 5;
        const offsetY = Math.sin(angle) * force * 5;
        
        el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        el.style.transition = 'transform 0.1s ease-out';
      } else {
        el.style.transform = 'translate(0, 0)';
      }
    });
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
      // Main cursor follows mouse with AI prediction
      const diffX = mouseX - cursorX;
      const diffY = mouseY - cursorY;
      cursorX += diffX * 0.15;
      cursorY += diffY * 0.15;
      
      // Follower cursor with quantum lag
      const followerDiffX = mouseX - followerX;
      const followerDiffY = mouseY - followerY;
      followerX += followerDiffX * 0.08;
      followerY += followerDiffY * 0.08;
      
      // Apply gravitational field
      applyGravitationalField(mouseX, mouseY);
      
      // Update cursor positions
      cursor.style.transform = `translate(${cursorX - 10}px, ${cursorY - 10}px)`;
      follower.style.transform = `translate(${followerX - 10}px, ${followerY - 10}px)`;
      
      requestAnimationFrame(updateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // AI prediction based on element under cursor
      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (element) {
        const prediction = predictUserIntent(element, e.clientX, e.clientY);
        setCursorState(prediction as CursorState);
        
        // Create contextual trail
        if (Math.random() > 0.7) {
          createContextualTrail(e.clientX, e.clientY, prediction.type);
        }
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, input, textarea, [role="button"], .magnetic, .project-card, .skill-badge, code, pre, img') ||
                           target.closest('button, a, input, textarea, [role="button"], .magnetic, .project-card, .skill-badge, code, pre, img');
      
      if (isInteractive) {
        cursor.classList.add('hover');
        follower.classList.add('hover');
        
        // Enhanced magnetic effect with AI prediction
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

    // Voice command recognition (basic implementation)
    const handleVoiceCommand = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'v') {
        // Voice command mode
        cursor.classList.add('voice-mode');
        setTimeout(() => {
          cursor.classList.remove('voice-mode');
        }, 2000);
      }
    };

    // Initialize cursor
    cursor.style.opacity = '1';
    follower.style.opacity = '1';

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('keydown', handleVoiceCommand);

    updateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('keydown', handleVoiceCommand);
      
      // Clean up trails
      trailRefs.current.forEach(trail => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      });
      trailRefs.current = [];
    };
  }, [predictUserIntent, createContextualTrail, applyGravitationalField]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`ai-cursor cursor-${cursorState.type}`}
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
        className={`ai-cursor-follower cursor-${cursorState.type}`}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      {/* AI Prediction Display */}
      <div
        className="ai-prediction"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          background: 'rgba(10, 14, 26, 0.9)',
          color: '#00FFFF',
          padding: '8px 12px',
          borderRadius: '6px',
          fontSize: '12px',
          fontFamily: 'var(--font-mono)',
          zIndex: 10000,
          border: '1px solid #00FFFF',
          opacity: cursorState.prediction ? 1 : 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        {cursorState.prediction}
      </div>
    </>
  );
}
