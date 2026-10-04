import RevealWrapper from './RevealWrapper';

const questions = [
  { num: '01', text: '❓ Where do I even START?' },
  { num: '02', text: '❓ What exactly should I LEARN?' },
  { num: '03', text: '❓ How do I develop my OWN DESIGNS?' },
  { num: '04', text: '❓ How do I launch my BOUTIQUE?' },
];

export default function ProblemSection() {
  return (
    <section className="problem-section" id="problem">
      <div className="container container--narrow">
        <RevealWrapper>
          <p className="label">⚠️ THE HARD TRUTH</p>
          <h2 className="section-title">
            You Don&apos;t Need Another Course.<br />
            <em>You Need A PROVEN SYSTEM!</em>
          </h2>

          <div className="problem__body">
            <p className="problem__intro">
              🔥 Maybe you already know stitching. Maybe you&apos;ve watched countless fashion videos. Maybe you&apos;ve always wanted to learn fashion designing.
            </p>
            <p className="problem__intro">💥 But you still don&apos;t know:</p>
          </div>

          <div className="problem__questions">
            {questions.map((q) => (
              <div className="problem__q" key={q.num}>
                <span className="problem__q-num">{q.num}</span>
                <p>{q.text}</p>
              </div>
            ))}
          </div>

          <div className="problem__answer">
            <div className="divider" />
            <p className="problem__answer-text">
              🚀 Kaha gives you a <strong>PROVEN 100-DAY BLUEPRINT</strong> — from your very first stitch to a complete boutique launch roadmap. <strong>NO GUESSWORK. RESULTS GUARANTEED.</strong>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
