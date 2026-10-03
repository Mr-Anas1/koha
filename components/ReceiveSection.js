import RevealWrapper from './RevealWrapper';

const benefits = [
  {
    title: '50+ Item Complimentary Kit',
    desc: 'A complete starter fashion kit shipped to you — everything you need to begin practising from day one.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: 'Government E-Certificate',
    desc: 'An officially recognised certificate that validates your skills and adds credibility to your fashion career.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    title: '100 Days of Live Online Training',
    desc: 'Not a pre-recorded library. Real-time, interactive sessions you attend live — with a trainer who answers your questions.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Direct Training From Your Trainer',
    desc: "You're not learning from an assistant or a substitute. Your trainer — the 12+ year cine costume designer — teaches you personally.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: 'Real Boutique Experience',
    desc: 'Learn from someone who runs 2 active boutiques. The business insights you gain are grounded in real operational experience.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export default function ReceiveSection() {
  return (
    <section className="receive-section" id="receive">
      <div className="container">
        <RevealWrapper>
          <p className="label">Everything included</p>
          <h2 className="section-title">And You Get More<br /><em>Than the Classes.</em></h2>
        </RevealWrapper>

        <div className="receive__grid">
          {benefits.map((b) => (
            <RevealWrapper key={b.title} className="receive__item">
              <div className="receive__icon">{b.icon}</div>
              <div className="receive__text">
                <h3 className="receive__title">{b.title}</h3>
                <p className="receive__desc">{b.desc}</p>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
