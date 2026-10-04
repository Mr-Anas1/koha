import RevealWrapper from './RevealWrapper';
import AnimatedBackground from './AnimatedBackground';
import CountdownTimer from './CountdownTimer';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Hero() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 3);

  return (
    <>
      {/* Top Marquee Strip */}
      <div className="top-marquee-wrap" aria-hidden="true">
        <div className="marquee">
          <span>🔥 LIMITED TIME OFFER: SAVE ₹20,000 &nbsp;·&nbsp; 100+ STUDENTS ENROLLED &nbsp;·&nbsp; GOVERNMENT CERTIFICATE &nbsp;·&nbsp; 50+ ITEM FREE KIT &nbsp;·&nbsp; 12+ YEAR EXPERT TRAINER &nbsp;·&nbsp; LIVE ONLINE TRAINING &nbsp;·&nbsp; ONLY 12 SEATS LEFT &nbsp;·&nbsp; 🔥 JOIN NOW! &nbsp;·&nbsp;</span>
          <span>🔥 LIMITED TIME OFFER: SAVE ₹20,000 &nbsp;·&nbsp; 100+ STUDENTS ENROLLED &nbsp;·&nbsp; GOVERNMENT CERTIFICATE &nbsp;·&nbsp; 50+ ITEM FREE KIT &nbsp;·&nbsp; 12+ YEAR EXPERT TRAINER &nbsp;·&nbsp; LIVE ONLINE TRAINING &nbsp;·&nbsp; ONLY 12 SEATS LEFT &nbsp;·&nbsp; 🔥 JOIN NOW! &nbsp;·&nbsp;</span>
        </div>
      </div>

      <section className="hero" id="hero">
        <AnimatedBackground variant="hero" />
        <div className="container container--narrow">

        {/* Big Heading */}
        <RevealWrapper animation="fade-up" delayMs={0}>
          <p className="label label--light hero__label">🔥 100-DAY TRANSFORMATION PROGRAM &nbsp;·&nbsp; LIVE ONLINE &nbsp;·&nbsp; LIMITED SEATS</p>
        </RevealWrapper>

        <RevealWrapper animation="fade-up" delayMs={100}>
          <h1 className="hero__headline">
            BECOME A FASHION<br />
            <em>ENTREPRENEUR</em><br />
            IN JUST 100 DAYS!
          </h1>
        </RevealWrapper>

        {/* Description */}
        <RevealWrapper animation="fade-up" delayMs={200}>
          <p className="hero__subtext">
            ⚡ From Zero To Boutique Owner — The Complete Blueprint: Tailoring + Fashion Designing + Business Management. No prior experience needed. Just 100 days to transform your life!
          </p>
        </RevealWrapper>

        {/* Video Player */}
        <RevealWrapper animation="fade-up" delayMs={300}>
          <div className="hero__video-wrapper">
            <div className="hero__video-player">
              <div className="hero__video-thumb">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80&fm=webp"
                  alt="Watch the video to learn more"
                  className="hero__video-thumb-img"
                />
                <div className="hero__video-overlay" />
                <div className="hero__video-play-btn">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="hero__video-caption">
                <p className="hero__video-caption-text">🎬 WATCH: How 100+ Students Transformed Their Lives</p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Badges */}
        <RevealWrapper animation="fade-up" delayMs={400}>
          <div className="hero__badges">
            <div className="badge"><CheckIcon /><span>🎁 50+ Item Free Fashion Kit</span></div>
            <div className="badge"><CheckIcon /><span>📜 Government E-Certificate</span></div>
            <div className="badge"><CheckIcon /><span>⭐ 12+ Year Cine Costume Designer</span></div>
          </div>
        </RevealWrapper>

        {/* CTA */}
        <RevealWrapper animation="fade-up" delayMs={500}>
          <CountdownTimer deadline={deadline} label="🔥 LIMITED TIME OFFER ENDS IN" />
          <div className="hero__actions">
            <a href="#pricing" className="btn btn--primary btn--large" id="hero-cta-primary">
              🔥 START MY JOURNEY NOW →
            </a>
            <p className="hero__footnote">⚡ 100+ Students Already Enrolled &nbsp;·&nbsp; Only 12 Seats Left &nbsp;·&nbsp; This Week Only</p>
          </div>
        </RevealWrapper>

      </div>

      {/* Marquee ticker */}
      <div className="marquee-wrap" aria-hidden="true">
        <div className="marquee">
          <span>🔥 LIMITED TIME OFFER &nbsp;·&nbsp; 100+ STUDENTS ENROLLED &nbsp;·&nbsp; SAVE ₹20,000 &nbsp;·&nbsp; GOVERNMENT CERTIFICATE &nbsp;·&nbsp; 50+ ITEM FREE KIT &nbsp;·&nbsp; 12+ YEAR EXPERT TRAINER &nbsp;·&nbsp; LIVE ONLINE TRAINING &nbsp;·&nbsp; ONLY 12 SEATS LEFT &nbsp;·&nbsp; 🔥 JOIN NOW! &nbsp;·&nbsp;</span>
          <span>🔥 LIMITED TIME OFFER &nbsp;·&nbsp; 100+ STUDENTS ENROLLED &nbsp;·&nbsp; SAVE ₹20,000 &nbsp;·&nbsp; GOVERNMENT CERTIFICATE &nbsp;·&nbsp; 50+ ITEM FREE KIT &nbsp;·&nbsp; 12+ YEAR EXPERT TRAINER &nbsp;·&nbsp; LIVE ONLINE TRAINING &nbsp;·&nbsp; ONLY 12 SEATS LEFT &nbsp;·&nbsp; 🔥 JOIN NOW! &nbsp;·&nbsp;</span>
        </div>
      </div>
      </section>
    </>
  );
}
