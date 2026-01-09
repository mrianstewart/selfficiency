import {
  Hero,
  HowItWorksSection,
  ProblemSection,
  RepeatCtaSection,
  TrustSection,
  WhatItDoesSection
} from "@/components/marketing";

export default function HomePage() {
  return (
    <main className="text-ink">
      <Hero />
      <ProblemSection />
      <WhatItDoesSection />
      <HowItWorksSection />
      <TrustSection />
      <RepeatCtaSection />
    </main>
  );
}
