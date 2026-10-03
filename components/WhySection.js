import Image from 'next/image';
import RevealWrapper from './RevealWrapper';

export default function WhySection() {
  return (
    <section className="why-section" id="why">
      <div className="container">
        <RevealWrapper className="why__grid">
          <div className="why__text">
            <p className="label">What makes Kaha different</p>
            <h2 className="section-title">
              You&apos;re Not Learning From Someone Who&nbsp;<em>Only Teaches.</em>
            </h2>
            <p className="why__body">
              Your trainer is a working Cine Costume Designer with over 12 years of industry experience. She doesn&apos;t just teach — she practises fashion every single day.
            </p>
            <p className="why__body">
              And Kaha already runs <strong>2 active boutiques</strong>. So your learning is connected to real fashion and boutique experience, not just classroom concepts.
            </p>
            <div className="why__stats">
              <div className="why__stat">
                <p className="why__stat-num">12+</p>
                <p className="why__stat-label">Years of Cine Costume<br />Designing Experience</p>
              </div>
              <div className="why__stat-divider" />
              <div className="why__stat">
                <p className="why__stat-num">2</p>
                <p className="why__stat-label">Running Boutiques<br />owned by your trainer</p>
              </div>
              <div className="why__stat-divider" />
              <div className="why__stat">
                <p className="why__stat-num">100</p>
                <p className="why__stat-label">Days of live, structured<br />online training</p>
              </div>
            </div>
          </div>

          <div className="why__visual">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80&fm=webp"
              alt="Fashion designer working with fabrics"
              width={800}
              height={1000}
              className="why__img-el"
              loading="lazy"
            />
            <div className="why__img-tag">
              <span>Cine Costume Designer &amp; Mentor</span>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
