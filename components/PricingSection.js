import RevealWrapper from './RevealWrapper';
import SpotlightCard from './SpotlightCard';

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const includes = [
  '100 Days of Live Online Training',
  'Full Tailoring + Fashion Designing + Boutique Curriculum',
  '50+ Item Complimentary Fashion Kit',
  'Government E-Certificate',
  'Direct training from a 12+ Year Cine Costume Designer',
  'Boutique Launch Roadmap & Business Foundations',
];

export default function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <RevealWrapper className="pricing__header">
          <p className="label label--light">Your investment</p>
          <h2 className="section-title section-title--light">
            Join Kaha&apos;s 100-Day<br /><em>Fashion Entrepreneur Program.</em>
          </h2>
        </RevealWrapper>

        <RevealWrapper animation="fade-up">
          <SpotlightCard className="pricing__card">
            <div className="pricing__left">
            <p className="pricing__tagline">A complete fashion education — from first stitch to boutique launch.</p>
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
              <p className="pricing__value-label">Program Value</p>
              <p className="pricing__value-original">₹1,00,000</p>
            </div>
            <div className="pricing__offer-wrap">
              <p className="pricing__offer-label">Join This Month For</p>
              <p className="pricing__offer-price">₹80,000</p>
              <p className="pricing__offer-saving">Save ₹20,000 — Limited-time offer</p>
            </div>
            <div className="pricing__actions">
              <a href="#" className="btn btn--primary btn--large" id="pricing-cta-primary">
                Start My 100-Day Fashion Journey →
              </a>
              <a href="#" className="btn btn--outline-light" id="pricing-cta-secondary">
                Book My 1-to-1 Consultation
              </a>
            </div>
            <p className="pricing__footnote">Speak with us before you decide. No pressure.</p>
          </div>
          </SpotlightCard>
        </RevealWrapper>
      </div>
    </section>
  );
}
