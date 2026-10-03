'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change / outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = (e) => {
      if (!e.target.closest('.nav__links') && !e.target.closest('.nav__toggle')) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('click', close);
    return () => document.removeEventListener('click', close);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__logo" aria-label="Kaha Home">
          <span className="nav__logo-kaha">Kaha</span>
          <span className="nav__logo-sub">Fashion &amp; Design</span>
        </Link>

        <button
          className={`nav__toggle${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <ul className={`nav__links${menuOpen ? ' open' : ''}`} role="list">
          <li><a href="#journey"    className="nav__link" onClick={handleLinkClick}>The Journey</a></li>
          <li><a href="#curriculum" className="nav__link" onClick={handleLinkClick}>Curriculum</a></li>
          <li><a href="#trainer"    className="nav__link" onClick={handleLinkClick}>Your Trainer</a></li>
          <li><a href="#pricing"    className="nav__link" onClick={handleLinkClick}>Invest</a></li>
          <li><a href="#pricing"    className="nav__cta-link" onClick={handleLinkClick}>Book Consultation</a></li>
        </ul>
      </div>
    </nav>
  );
}
