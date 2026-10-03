import Image from 'next/image';
import RevealWrapper from './RevealWrapper';
import ParallaxWrapper from './ParallaxWrapper';
import AnimatedBackground from './AnimatedBackground';
import Counter from './Counter';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <AnimatedBackground variant="hero" />
      <div className="hero__grid">

        {/* Left: Editorial copy */}
        <div>
          <RevealWrapper animation="fade-up" delayMs={0}>
            <p className="label label--light">100-Day Program &nbsp;·&nbsp; Live Online &nbsp;·&nbsp; Limited Seats</p>
          </RevealWrapper>
          <RevealWrapper animation="fade-up" delayMs={100}>
            <h1 className="hero__headline">
              Learn&nbsp;Fashion Designing<br />
              &amp;&nbsp;Start Building<br />
              <em>Your&nbsp;Own&nbsp;Boutique</em><br />
              in&nbsp;100&nbsp;Days.
            </h1>
          </RevealWrapper>
          <RevealWrapper animation="fade-up" delayMs={200}>
            <p className="hero__subtext">
              One structured program — Tailoring + Fashion Designing + Business Management — that takes you from your first stitch to a boutique launch roadmap.
            </p>
          </RevealWrapper>

          <RevealWrapper animation="fade-up" delayMs={300}>
            <div className="hero__badges">
              <div className="badge"><CheckIcon /><span>50+ Item Free Fashion Kit</span></div>
              <div className="badge"><CheckIcon /><span>Government E-Certificate</span></div>
              <div className="badge"><CheckIcon /><span>12+ Year Cine Costume Designer</span></div>
            </div>
          </RevealWrapper>

          <RevealWrapper animation="fade-up" delayMs={400}>
            <div className="hero__actions">
              <a href="#pricing" className="btn btn--primary" id="hero-cta-primary">
                Start My 100-Day Fashion Journey →
              </a>
              <p className="hero__footnote">Beginner-friendly &nbsp;·&nbsp; This month: ₹80,000 &nbsp;·&nbsp; Limited seats</p>
            </div>
          </RevealWrapper>
        </div>

        {/* Right: Image composition */}
        <ParallaxWrapper speed={0.12} className="hero__visual">
          <RevealWrapper animation="fade-right" delayMs={200}>
            <div className="hero__img-frame">
              <Image
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&q=80&fm=webp"
                alt="Elegant Indian fashion design — fabric and sketches"
                width={900}
                height={1100}
                className="hero__img-el"
                priority
                fetchPriority="high"
              />
              <div className="hero__img-caption">
                <span className="label">Kaha Fashion &amp; Design Academy</span>
              </div>
            </div>
          </RevealWrapper>
          <RevealWrapper animation="scale" delayMs={400}>
            <div className="hero__stat-card float">
              <p className="hero__stat-num"><Counter target={100} duration={2000} /></p>
              <p className="hero__stat-label">Days of Live<br />Online Training</p>
            </div>
          </RevealWrapper>
        </ParallaxWrapper>

      </div>

      {/* Marquee ticker */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          <span>Tailoring &nbsp;·&nbsp; Fashion Illustration &nbsp;·&nbsp; Draping &nbsp;·&nbsp; Colour Theory &nbsp;·&nbsp; Boutique Management &nbsp;·&nbsp; Design Development &nbsp;·&nbsp; Mood Boards &nbsp;·&nbsp; Body Types &nbsp;·&nbsp; Boutique Launch &nbsp;·&nbsp;</span>
          <span>Tailoring &nbsp;·&nbsp; Fashion Illustration &nbsp;·&nbsp; Draping &nbsp;·&nbsp; Colour Theory &nbsp;·&nbsp; Boutique Management &nbsp;·&nbsp; Design Development &nbsp;·&nbsp; Mood Boards &nbsp;·&nbsp; Body Types &nbsp;·&nbsp; Boutique Launch &nbsp;·&nbsp;</span>
        </div>
      </div>
    </section>
  );
}
