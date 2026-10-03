import Image from 'next/image';
import RevealWrapper from './RevealWrapper';
import ParallaxWrapper from './ParallaxWrapper';
import AnimatedBackground from './AnimatedBackground';

const steps = [
  {
    num: '01',
    title: 'Learn Tailoring',
    desc: 'Build your foundation from the basics. No prior experience needed — we start from zero and build systematically.',
    img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=700&q=75&fm=webp',
    alt: 'Tailoring — sewing basics',
    reverse: false,
  },
  {
    num: '02',
    title: 'Learn Fashion Designing',
    desc: 'Understand illustration, colour theory, body types, draping, mood boards, and design concepts — the true language of fashion.',
    img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=75&fm=webp',
    alt: 'Fashion designing — illustration and colour theory',
    reverse: true,
  },
  {
    num: '03',
    title: 'Create Your Own Designs',
    desc: "Take what you've learned and apply it. Develop your design voice. Build a portfolio of original work you're proud of.",
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=75&fm=webp',
    alt: 'Creating original fashion designs',
    reverse: false,
  },
  {
    num: '04',
    title: 'Understand Boutique Management',
    desc: 'Learn the fundamentals of managing a fashion business — from operations and pricing to client management and brand positioning.',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=700&q=75&fm=webp',
    alt: 'Fashion boutique management',
    reverse: true,
  },
  {
    num: '05',
    title: 'Prepare For Your Boutique',
    desc: "Follow a structured roadmap towards launching your own boutique. You'll finish with a clear action plan, not just a certificate.",
    img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700&q=75&fm=webp',
    alt: 'Boutique launch roadmap',
    reverse: false,
  },
];

export default function JourneySection() {
  return (
    <section className="journey-section" id="journey">
      <AnimatedBackground variant="dark" />
      <div className="journey__header container">
        <RevealWrapper animation="fade-up">
          <p className="label label--light">The structured path</p>
          <h2 className="section-title section-title--light">
            From Your First Stitch...<br /><em>To Your Own Fashion Journey.</em>
          </h2>
        </RevealWrapper>
      </div>

      <div className="journey__steps container">
        {steps.map((step, index) => (
          <RevealWrapper
            key={step.num}
            className={`journey__step${step.reverse ? ' journey__step--reverse' : ''}`}
            tag="div"
            animation="fade-up"
            delayMs={index * 150}
          >
            <ParallaxWrapper speed={0.08}>
              <div className="journey__step-img-wrap">
                <Image
                  src={step.img}
                  alt={step.alt}
                  width={700}
                  height={500}
                  className="journey__img-el"
                  loading="lazy"
                />
              </div>
            </ParallaxWrapper>
            <div className="journey__step-content">
              <span className="journey__step-num">{step.num}</span>
              <h3 className="journey__step-title">{step.title}</h3>
              <p className="journey__step-desc">{step.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
