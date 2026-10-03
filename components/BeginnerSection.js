import Image from 'next/image';
import RevealWrapper from './RevealWrapper';

export default function BeginnerSection() {
  return (
    <section className="beginner-section" id="beginner">
      <div className="container">
        <RevealWrapper className="beginner__inner">
          <div className="beginner__text">
            <p className="label label--light">&ldquo;But I&apos;m a beginner...&rdquo;</p>
            <h2 className="section-title section-title--light">
              Perfect.<br /><em>That&apos;s exactly who this is for.</em>
            </h2>
            <p className="beginner__body">
              You don&apos;t have to come with previous fashion designing knowledge. We start from scratch and build your understanding step-by-step.
            </p>
            <p className="beginner__body">
              You don&apos;t need to figure everything out yourself. We&apos;ll show you the path.
            </p>
            <a href="#pricing" className="btn btn--light" id="beginner-cta">
              Start My 100-Day Fashion Journey →
            </a>
          </div>
          <div className="beginner__visual">
            <Image
              src="https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=700&q=75&fm=webp"
              alt="A woman learning to sew and design fashion"
              width={700}
              height={875}
              className="beginner__img-el"
              loading="lazy"
            />
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
