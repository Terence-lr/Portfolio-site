'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import styles from './Navigation.module.css';

const navItems = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/resume', label: 'Resume' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLAnchorElement>(null);

  // Handle scroll locking and focus trapping
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Lock scroll
      document.body.style.overflow = 'hidden';
      
      // Focus first focusable element
      firstFocusableRef.current?.focus();
    } else {
      // Unlock scroll
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  // Handle focus trapping
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusableRef.current) {
          e.preventDefault();
          lastFocusableRef.current?.focus();
        }
      } else {
        if (document.activeElement === lastFocusableRef.current) {
          e.preventDefault();
          firstFocusableRef.current?.focus();
        }
      }
    }
  };

  return (
    <nav className={styles.nav} role="navigation" aria-label="Main navigation">
      <div className="container">
        <div className={styles.navContent}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
                    <div className={styles.logoImage}>
                      <Image
                        src="/images/circle.jpg"
                        alt="Terence Richardson headshot"
                        width={32}
                        height={32}
                        className={styles.profileImage}
                        priority
                        sizes="32px"
                      />
                    </div>
            <span className={styles.logoText}>
              Terence <span className={styles.lastName}>Richardson</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  pathname === item.href ? styles.active : ''
                } interactive`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-menu"
          >
            <div className={styles.hamburger}>
              <div className={`${styles.bar} ${styles.left}`}></div>
              <div className={`${styles.bar} ${styles.mid}`}></div>
              <div className={`${styles.bar} ${styles.right}`}></div>
            </div>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className={styles.mobileNav}
            ref={mobileMenuRef}
            onKeyDown={handleKeyDown}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.mobileNavLink} ${
                  pathname === item.href ? styles.active : ''
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                ref={index === 0 ? firstFocusableRef : index === navItems.length - 1 ? lastFocusableRef : undefined}
                role="menuitem"
                tabIndex={0}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
