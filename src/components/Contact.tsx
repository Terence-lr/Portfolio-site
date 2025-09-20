'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import MagneticButton from './MagneticButton';
import styles from './Contact.module.css';

export default function Contact() {
  const sectionRef = useScrollReveal<HTMLElement>({ threshold: 0.2 });
  const headerRef = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const formRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const socialRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormState('submitting');
    
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success state after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    } catch (error) {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  return (
    <section ref={sectionRef} className={`${styles.section} scroll-reveal`}>
      <div className="container">
        <div className={styles.content}>
          <div ref={headerRef} className={`${styles.header} scroll-reveal`}>
            <h2 className={styles.title}>
              Contact
            </h2>
            <p className={styles.subtitle}>
              Let's connect! Whether it's collaboration, opportunities, or just a conversation about building with AI — I'd love to hear from you.
            </p>
          </div>
          
          <div className={styles.contactGrid}>
            <div ref={formRef} className={`${styles.contactForm} scroll-reveal`}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    aria-invalid={errors.name ? 'true' : 'false'}
                    required 
                  />
                  {errors.name && (
                    <span id="name-error" className={styles.errorMessage} role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.label}>Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    aria-invalid={errors.email ? 'true' : 'false'}
                    required 
                  />
                  {errors.email && (
                    <span id="email-error" className={styles.errorMessage} role="alert">
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    required
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className={styles.errorMessage} role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>
                
                {/* Form Status Messages */}
                {formState === 'success' && (
                  <div className={styles.successMessage} role="alert">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {formState === 'error' && (
                  <div className={styles.errorMessage} role="alert">
                    ❌ Something went wrong. Please try again or contact me directly.
                  </div>
                )}
                
                <MagneticButton
                  type="submit"
                  variant="primary"
                  className={`magnetic ${styles.submitButton}`}
                  disabled={formState === 'submitting'}
                  aria-describedby="submit-status"
                >
                  {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                </MagneticButton>
                <div id="submit-status" className="sr-only" aria-live="polite">
                  {formState === 'submitting' && 'Submitting your message...'}
                  {formState === 'success' && 'Message sent successfully!'}
                  {formState === 'error' && 'Failed to send message. Please try again.'}
                </div>
              </form>
            </div>
            
            <div ref={socialRef} className={`${styles.socialLinks} scroll-reveal`}>
              <h3 className={styles.socialTitle}>Connect</h3>
              <div className={styles.socialList}>
                <a 
                  href="https://github.com/Terence-lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} interactive`}
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/terence-richardson-13b22a211" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} interactive`}
                >
                  LinkedIn
                </a>
                <a 
                  href="https://x.com/terence_lr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${styles.socialLink} interactive`}
                >
                  X (Twitter)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
