import RevealWrapper from './RevealWrapper';

const roadmapNodes = [
  { num: '01', title: 'Tailoring',            desc: 'Foundation of every garment',            final: false },
  { num: '02', title: 'Fashion Designing',     desc: 'Illustration, draping, colour, design',  final: false },
  { num: '03', title: 'Practical Application', desc: 'Create your own original designs',       final: false },
  { num: '04', title: 'Boutique Management',   desc: 'Business fundamentals & operations',     final: false },
  { num: '05', title: 'Boutique Launch Roadmap', desc: 'Your complete action plan to launch',  final: true  },
];

export default function RoadmapSection() {
  return (
    <section className="roadmap-section" id="roadmap">
      <div className="container">
        <RevealWrapper className="roadmap__header">
          <p className="label">The structured roadmap</p>
          <h2 className="section-title">100 Days.<br /><em>One Complete Journey.</em></h2>
        </RevealWrapper>

        <RevealWrapper className="roadmap__flow">
          {roadmapNodes.map((node, i) => (
            <div key={node.num}>
              <div className={`roadmap__node${node.final ? ' roadmap__node--final' : ''}`}>
                <div className={`roadmap__node-circle${node.final ? ' roadmap__node-circle--final' : ''}`}>
                  {node.num}
                </div>
                <div className="roadmap__node-content">
                  <h3>{node.title}</h3>
                  <p>{node.desc}</p>
                </div>
              </div>
              {i < roadmapNodes.length - 1 && (
                <div className="roadmap__arrow" aria-hidden="true">↓</div>
              )}
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  );
}
