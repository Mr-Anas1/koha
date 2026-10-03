import Image from 'next/image';
import RevealWrapper from './RevealWrapper';

export default function TrainerSection() {
  return (
    <section className="trainer-section" id="trainer">
      <div className="container container--narrow">
        <RevealWrapper className="trainer__inner">
          <div className="trainer__img-wrap">
            <Image
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80&fm=webp"
              alt="Kaha trainer — cine costume designer and fashion educator"
              width={600}
              height={750}
              className="trainer__img-el"
              loading="lazy"
            />
            <div className="trainer__img-overlay">
              <p className="trainer__credential">12+ Years &bull; Cine Costume Designer &bull; 2 Boutiques</p>
            </div>
          </div>

          <div className="trainer__content">
            <p className="label">Meet your trainer</p>
            <h2 className="section-title">Learn Directly<br /><em>From Me.</em></h2>
            <blockquote className="trainer__quote">
              &ldquo;I&apos;m a Cine Costume Designer with 12+ years of experience. I&apos;ll be teaching you directly through live online sessions.&rdquo;
            </blockquote>
            <p className="trainer__body">
              My goal isn&apos;t to make fashion designing complicated. It&apos;s to make the concepts simple enough for a beginner to understand — and practical enough to actually apply.
            </p>
            <p className="trainer__body">
              Every session is live. Every question gets answered. You&apos;re not watching a pre-recorded course — you&apos;re learning with a working professional.
            </p>
            <a href="#pricing" className="btn btn--outline" id="trainer-cta">
              Book My 1-to-1 Consultation →
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
