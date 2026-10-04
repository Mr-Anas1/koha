'use client';

/**
 * AnimatedBackground — vibrant animated gradient background
 * Adds dynamic, eye-catching gradient animation for sales pages
 *
 * Props:
 *   variant?: 'hero' | 'dark' | 'light' — color variant
 *   className?: string — extra classes
 */
export default function AnimatedBackground({ variant = 'hero', className = '' }) {
  const variantClasses = {
    hero: 'animated-bg--hero',
    dark: 'animated-bg--dark',
    light: 'animated-bg--light',
  };

  return (
    <div className={`animated-bg ${variantClasses[variant]}${className ? ' ' + className : ''}`}>
      <div className="animated-bg__blob animated-bg__blob--1" />
      <div className="animated-bg__blob animated-bg__blob--2" />
      <div className="animated-bg__blob animated-bg__blob--3" />
      <div className="animated-bg__blob animated-bg__blob--4" />
    </div>
  );
}
