import RevealWrapper from './RevealWrapper';
import CountdownTimer from './CountdownTimer';

export default function FinalCta() {
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 3);

  return (
    <section className="final-cta-section" id="final-cta">
      <div className="container container--narrow">
        <RevealWrapper className="final-cta__inner">
          <p className="label">🔥 DON'T MISS THIS OPPORTUNITY</p>
          <h2 className="final-cta__headline">
            Your Fashion Empire<br /><em>Starts TODAY!</em>
          </h2>
          <p className="final-cta__body">
            ⚡ 100+ students already transformed their lives. Don't let another day pass without taking action. Your future self will thank you!
          </p>
          <CountdownTimer deadline={deadline} label="⚡ OFFER EXPIRES IN" />
          <div className="final-cta__actions">
            <a href="#pricing" className="btn btn--primary btn--large" id="final-cta-primary">
              🔥 SECURE MY SPOT NOW →
            </a>
            <p className="final-cta__offer">🎉 ₹80,000 — Save ₹20,000! — Only 12 Seats Left!</p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
