import PrimaryButton from "./PrimaryButton";

export default function Hero() {
  return (
    <section className="px-6 pb-24 pt-28 sm:px-8 sm:pb-32 sm:pt-36">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Reduction, not optimisation
        </p>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink sm:text-6xl">
          Less to carry. More space to live.
        </h1>
        <p className="mt-8 text-base leading-relaxed text-muted sm:text-xl">
          Selfficiency helps you remove what does not matter, so life feels
          lighter within minutes.
        </p>
        <div className="mt-12">
          <PrimaryButton label="Get clarity in minutes" />
        </div>
      </div>
    </section>
  );
}
