import PrimaryButton from "./PrimaryButton";

export default function RepeatCtaSection() {
  return (
    <section className="px-6 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-base leading-relaxed text-muted sm:text-lg">
          Clarity before commitment.
        </p>
        <div className="mt-8">
          <PrimaryButton label="Get clarity in minutes" />
        </div>
      </div>
    </section>
  );
}
