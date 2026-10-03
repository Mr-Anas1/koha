// app/page.js — Server Component (root page)
import Nav              from '@/components/Nav';
import Hero             from '@/components/Hero';
import VslSection       from '@/components/VslSection';
import ProblemSection   from '@/components/ProblemSection';
import JourneySection   from '@/components/JourneySection';
import WhySection       from '@/components/WhySection';
import TrainerSection   from '@/components/TrainerSection';
import CurriculumSection from '@/components/CurriculumSection';
import ReceiveSection   from '@/components/ReceiveSection';
import BeginnerSection  from '@/components/BeginnerSection';
import WhoSection       from '@/components/WhoSection';
import RoadmapSection   from '@/components/RoadmapSection';
import PricingSection   from '@/components/PricingSection';
import FinalCta         from '@/components/FinalCta';
import Footer           from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VslSection />
        <ProblemSection />
        <JourneySection />
        <WhySection />
        <TrainerSection />
        <CurriculumSection />
        <ReceiveSection />
        <BeginnerSection />
        <WhoSection />
        <RoadmapSection />
        <PricingSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
