'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VslSection() {
  const [playing, setPlaying] = useState(false);

  // Replace this with your actual YouTube/Vimeo embed URL
  const VIDEO_SRC = ''; // e.g. 'https://www.youtube.com/embed/YOUR_ID?autoplay=1&rel=0'

  return (
    <section className="vsl-section" id="vsl">
      <div className="container">
        <p className="label label--center">Hear directly from the program</p>
        <h2 className="section-title section-title--center">Watch Before You Decide</h2>

        <div className="vsl__wrapper">
          <div
            className="vsl__player"
            role="button"
            tabIndex={0}
            aria-label="Play introduction video"
            onClick={() => setPlaying(true)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setPlaying(true); } }}
          >
            {playing && VIDEO_SRC ? (
              <div className="vsl__iframe-wrap">
                <iframe
                  src={VIDEO_SRC}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Kaha Fashion Program — Introduction Video"
                />
              </div>
            ) : (
              <>
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=75&fm=webp"
                  alt="Video thumbnail — Kaha Fashion Program"
                  fill
                  className="vsl__thumb-img"
                  sizes="(max-width: 768px) 100vw, 840px"
                  loading="lazy"
                />
                <div className="vsl__overlay" />
                <div className="vsl__play-btn" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
