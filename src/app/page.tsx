import Link from "next/link";
import ParallaxBackground from "./_components/ParallaxBackground";

export default function HomePage() {
  return (
    <>
      <ParallaxBackground />
      <main className="text-ink">
        <section className="px-6 pb-14 pt-20 sm:px-10 sm:pb-20 sm:pt-24">
          <div
            data-reveal
            className="mx-auto flex max-w-3xl flex-col items-center text-center"
          >
            {/* Copy rationale: headline frames subtraction, subtext names specific mental load, CTA ends the load, micro-demo shows a lighter outcome. */}
            <p className="text-xs font-semibold uppercase tracking-[0.55em] text-muted sm:text-sm">
              Selfficiency
            </p>
            <h1 className="mt-4 text-[1.65rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink sm:text-4xl lg:text-5xl">
              Less to carry.
              <span className="block">More room to breathe.</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg lg:text-xl">
              Close the open tabs in your head. Drop one thing you're doing out
              of guilt.
            </p>
            <div className="mt-6 text-left text-sm leading-relaxed text-muted sm:text-base">
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-ink">Stop:</span> The
                  thing you keep meaning to do, but never do.
                </p>
                <p>
                  <span className="font-semibold text-ink">Simplify:</span>{" "}
                  Decide what "good enough" looks like for this week.
                </p>
                <p>
                  <span className="font-semibold text-ink">Protect:</span> If it
                  isn't essential, it doesn't get your energy.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <PrimaryButton label="UNLOAD SOMETHING" href="/unload" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function PrimaryButton({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
    >
      {label}
    </Link>
  );
}
