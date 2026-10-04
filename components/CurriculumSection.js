import RevealWrapper from './RevealWrapper';
import SpotlightCard from './SpotlightCard';

const modules = [
  {
    part: 'PHASE 1',
    title: 'Master Tailoring',
    desc: '🔥 Build a strong foundational skill — the craft behind every garment',
    items: [
      '✓ Basic Tailoring Techniques',
      '✓ Professional Stitching & Seams',
      '✓ Perfect Measurements & Patterns',
      '✓ Complete Garment Construction',
      '✓ Intermediate to Advanced Techniques',
    ],
    accent: false,
  },
  {
    part: 'PHASE 2',
    title: 'Fashion Designing',
    desc: '🎨 The creative dimension — where your unique design voice emerges',
    items: [
      '✓ Fashion Illustration Mastery',
      '✓ Colour Wheel Theory',
      '✓ Body Types & Silhouettes',
      '✓ Mood & Theme Boards',
      '✓ Professional Draping',
      '✓ Design Development',
    ],
    accent: true,
  },
  {
    part: 'PHASE 3',
    title: 'Boutique Business',
    desc: '💰 Turn your craft into a profitable business empire',
    items: [
      '✓ Business Management Fundamentals',
      '✓ Boutique Launch Roadmap',
      '✓ Pricing Your Work For Profit',
      '✓ Client Management Mastery',
      '✓ Building Your Brand Empire',
    ],
    accent: false,
  },
];

export default function CurriculumSection() {
  return (
    <section className="curriculum-section" id="curriculum">
      <div className="container">
        <RevealWrapper className="curriculum__header">
          <p className="label label--light">🎯 COMPLETE 100-DAY BLUEPRINT</p>
          <h2 className="section-title section-title--light">
            What You&apos;ll Master<br /><em>In 100 Days!</em>
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
