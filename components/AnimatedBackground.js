'use client';

/**
 * AnimatedBackground — subtle animated gradient background
 * Adds a soft, elegant gradient animation to create depth and movement
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
    </div>
  );
}
