'use client';

import { useRef, useState } from 'react';

/**
 * SpotlightCard — adds a subtle spotlight effect on mouse hover
 * Creates a premium feel with light following the cursor
 *
 * Props:
 *   children: ReactNode — card content
 *   className?: string — extra classes
 */
export default function SpotlightCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`spotlight-card${className ? ' ' + className : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isHovered && (
        <div
          className="spotlight-card__glow"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
          }}
        />
      )}
      {children}
    </div>
  );
}
