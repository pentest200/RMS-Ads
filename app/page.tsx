import HeroSection from "@/components/hero-section";
import Ticker from "@/components/ticker";
import Manifesto from "@/components/manifesto";
import BrandShowcase from "@/components/brand-showcase";
import WorkShowcase from "@/components/work-showcase";
import Expertise from "@/components/expertise";
import Sectors from "@/components/sectors";
import Network from "@/components/network";
import Process from "@/components/process";
import LastCta from "@/components/last-cta";

export default function HomePage() {
  return (
    <main id="top">
      {/* 1. Hero Section with planetary orbit SVG */}
      <HeroSection />

      {/* 2. Capability Ticker Loop */}
      <Ticker />

      {/* 3. Agency Manifesto ("01 / OUR POINT OF VIEW - BIG REACH IS GOOD. REAL IMPACT IS BETTER.") */}
      <Manifesto />

      {/* 4. Client Brand Showcase ("GOOD COMPANY. GREAT AMBITION.") */}
      <BrandShowcase />

      {/* 5. Work Showcase ("02 / WHAT WE MAKE POSSIBLE") */}
      <WorkShowcase />

      {/* 6. Expertise Accordion ("03 / WHAT WE'RE GOOD AT") */}
      <Expertise />

      {/* 7. Industries ("04 / WHO WE PARTNER WITH") */}
      <Sectors />

      {/* 8. Connected Network ("05 / OUR CONNECTED WORLD") */}
      <Network />

      {/* 9. Process ("06 / HOW WE DO IT") */}
      <Process />

      {/* 10. Last CTA & Working Inquiry Form ("YOUR NEXT BIG MOVE ↗") */}
      <LastCta />
    </main>
  );
}
