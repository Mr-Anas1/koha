'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * ParallaxWrapper — adds subtle parallax effect to children on scroll
 *
 * Props:
 *   speed?: number — parallax speed multiplier (default: 0.15)
 *   className?: string — extra classes on the wrapper div
 */
export default function ParallaxWrapper({ children, speed = 0.15, className = '' }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;
      const parallaxOffset = distanceFromCenter * speed;

      setOffset(parallaxOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={`parallax-wrapper${className ? ' ' + className : ''}`}>
      <div
        className="parallax-content"
        style={{
          transform: `translateY(${offset}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {children}
      </div>
    </div>
  );
}
