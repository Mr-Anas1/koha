import RevealWrapper from './RevealWrapper';

const CheckIcon = () => (
  <svg className="who__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const statements = [
  '"I want to learn a skill that stays with me."',
  '"I want to earn from home."',
  '"I want to become financially independent."',
  '"I\'ve always wanted to start my own boutique."',
  '"I know stitching, but I want to learn fashion designing properly."',
];

export default function WhoSection() {
  return (
    <section className="who-section" id="who">
      <div className="container container--narrow">
        <RevealWrapper>
          <p className="label">This program was built for you</p>
          <h2 className="section-title">Who Is This<br /><em>Program For?</em></h2>
          <p className="who__intro">For the woman who says:</p>

          <div className="who__statements">
            {statements.map((s) => (
              <div className="who__statement" key={s}>
                <CheckIcon />
                <p className="who__text">{s}</p>
              </div>
            ))}
          </div>

          <div className="who__conclusion">
            <p className="who__conclusion-text">
              If that&apos;s you... <strong>Kaha was created for this journey.</strong>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
