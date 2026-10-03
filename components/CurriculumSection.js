import RevealWrapper from './RevealWrapper';
import SpotlightCard from './SpotlightCard';

const modules = [
  {
    part: 'Part I',
    title: 'Tailoring',
    desc: 'Build a strong foundational skill — the craft behind every garment.',
    items: [
      'Basic Tailoring Techniques',
      'Stitching & Seams',
      'Measurements & Patterns',
      'Garment Construction',
      'Intermediate to Advanced Techniques',
    ],
    accent: false,
  },
  {
    part: 'Part II',
    title: 'Fashion Designing',
    desc: 'The creative and conceptual dimension of fashion — where your design voice emerges.',
    items: [
      'Fashion Illustration',
      'Colour Wheel Theory',
      'Body Types & Silhouettes',
      'Mood & Theme Boards',
      'Draping',
      'Design Development',
    ],
    accent: true,
  },
  {
    part: 'Part III',
    title: 'Boutique Management',
    desc: 'Turn your craft into a real business with the right commercial foundations.',
    items: [
      'Business Management Fundamentals',
      'Boutique Launch Roadmap',
      'Pricing Your Work',
      'Client Management',
      'Building Your Brand',
    ],
    accent: false,
  },
];

export default function CurriculumSection() {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <RevealWrapper className="curriculum__header">
          <p className="label label--light">Everything inside the program</p>
          <h2 className="section-title section-title--light">
            What&apos;s Inside the<br /><em>100-Day Program?</em>
          </h2>
        </RevealWrapper>

        <div className="curriculum__grid">
          {modules.map((mod, index) => (
            <RevealWrapper
              key={mod.part}
              animation="fade-up"
              delayMs={index * 150}
            >
              <SpotlightCard className={`curriculum__module${mod.accent ? ' curriculum__module--accent' : ''}`}>
                <div className="curriculum__module-header">
                  <span className="curriculum__module-num">{mod.part}</span>
                  <h3 className="curriculum__module-title">{mod.title}</h3>
                </div>
                <div className="curriculum__module-body">
                  <p className="curriculum__module-desc">{mod.desc}</p>
                  <ul className="curriculum__list" role="list">
                    {mod.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </SpotlightCard>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
