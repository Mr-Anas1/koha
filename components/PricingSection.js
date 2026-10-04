import RevealWrapper from './RevealWrapper';
import SpotlightCard from './SpotlightCard';
import CountdownTimer from './CountdownTimer';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const includes = [
  '🔥 100 Days of Live Online Training',
  '🎯 Full Tailoring + Fashion Designing + Boutique Curriculum',
  '🎁 50+ Item Complimentary Fashion Kit',
  '📜 Government E-Certificate',
  '⭐ Direct training from a 12+ Year Cine Costume Designer',
  '🚀 Boutique Launch Roadmap & Business Foundations',
];

export default function PricingSection() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 3);

  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <RevealWrapper className="pricing__header">
          <p className="label label--light">🔥 LIMITED TIME OFFER</p>
          <h2 className="section-title section-title--light">
            TRANSFORM YOUR LIFE<br /><em>IN JUST 100 DAYS!</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper animation="fade-up">
          <SpotlightCard className="pricing__card">
            <div className="pricing__left">
            <p className="pricing__tagline">💎 Everything you need to start your fashion empire today!</p>
            <ul className="pricing__includes" role="list">
              {includes.map((item) => (
                <li key={item}>
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="pricing__right">
            <div className="pricing__value-wrap">
              <p className="pricing__value-label">Total Value</p>
              <p className="pricing__value-original">₹1,00,000</p>
            </div>
            <div className="pricing__offer-wrap">
              <p className="pricing__offer-label">🎉 TODAY ONLY</p>
              <p className="pricing__offer-price">₹80,000</p>
              <p className="pricing__offer-saving">🎊 YOU SAVE ₹20,000! (80% OFF)</p>
            </div>
            <CountdownTimer deadline={deadline} label="⚡ OFFER EXPIRES IN" />
            <div className="pricing__actions">
              <a href="#" className="btn btn--primary btn--large" id="pricing-cta-primary">
                🔥 SECURE MY SPOT NOW →
              </a>
              <a href="#" className="btn btn--secondary btn--large" id="pricing-cta-secondary">
                💬 BOOK FREE CONSULTATION
              </a>
            </div>
            <p className="pricing__footnote">⚡ 100% SATISFACTION GUARANTEE • NO RISK • START TODAY!</p>
          </div>
          </SpotlightCard>
        </RevealWrapper>
      </div>
    </section>
  );
}
