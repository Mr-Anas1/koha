import RevealWrapper from './RevealWrapper';

export default function FinalCta() {
  return (
    <section className="final-cta-section" id="final-cta">
      <div className="container container--narrow">
        <RevealWrapper className="final-cta__inner">
          <p className="label">Don&apos;t just dream about your boutique</p>
          <h2 className="final-cta__headline">
            Start Building<br /><em>The Skills For It.</em>
          </h2>
          <p className="final-cta__body">
            You don&apos;t need to know everything today. You just need to take the first step.
          </p>
          <div className="final-cta__actions">
            <a href="#pricing" className="btn btn--primary btn--large" id="final-cta-primary">
              I Want to Start My Fashion Journey →
            </a>
            <p className="final-cta__offer">₹80,000 — This Month&apos;s Offer</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
