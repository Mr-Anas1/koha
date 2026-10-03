'use client';

import { useEffect, useRef } from 'react';

/**
 * RevealWrapper — wraps children in a div that fades in
 * when it enters the viewport. Applies .is-visible via IntersectionObserver.
 *
 * Props:
 *   delay?: boolean — adds a slight transition-delay
 *   className?: string — extra classes on the wrapper div
 *   tag?: string — HTML tag to use (default: 'div')
 *   animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale' | 'blur' — animation type
 *   delayMs?: number — custom delay in milliseconds
 */
export default function RevealWrapper({ children, delay = false, className = '', tag: Tag = 'div', animation = 'fade-up', delayMs }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animationClass = `reveal--${animation}`;
  const delayClass = delayMs ? '' : (delay ? ' reveal--delay' : '');
  const customDelayStyle = delayMs ? { transitionDelay: `${delayMs}ms` } : {};

  return (
    <Tag
      ref={ref}
      className={`reveal ${animationClass}${delayClass}${className ? ' ' + className : ''}`}
      style={customDelayStyle}
    >
      {children}
    </Tag>
  );
}
