"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import ParallaxBackground from "../_components/ParallaxBackground";

export default function UnloadPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [context, setContext] = useState("");
  const [showError, setShowError] = useState(false);
  const [showContextGate, setShowContextGate] = useState(false);
  const trimmed = value.trim();
  const trimmedContext = context.trim();
  const isThinInput =
    trimmed.length < 60 || trimmed.split(/\s+/).filter(Boolean).length < 10;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!trimmed) {
      setShowError(true);
      return;
    }
    if (isThinInput && !trimmedContext) {
      setShowContextGate(true);
      return;
    }
    const combined = trimmedContext
      ? `${trimmed}. ${trimmedContext}`.replace(/\s+/g, " ").trim()
      : trimmed;
    sessionStorage.setItem("selfficiency:unload", combined);
    router.push("/result");
  };

  return (
    <>
      <ParallaxBackground />
      <main className="text-ink">
        <section className="px-6 py-20 sm:px-10 sm:py-28">
          <form
            onSubmit={handleSubmit}
            data-reveal
            className="mx-auto flex max-w-2xl flex-col gap-6 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.55em] text-muted sm:text-sm">
              Selfficiency
            </p>
            <h1 className="mt-4 text-[1.65rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink sm:text-4xl lg:text-5xl">
              What are you currently carrying in your head?
            </h1>
            <p className="text-base leading-relaxed text-muted sm:text-lg">
              Write one thing you keep thinking about, managing, or feeling
              guilty for — even if you don’t know what to do with it.
            </p>
            <div className="text-left">
              <label htmlFor="unload-input" className="sr-only">
                Unload input
              </label>
              <textarea
                id="unload-input"
                name="unload-input"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                autoFocus
                rows={5}
                placeholder={`A routine I never follow\nSomething I said yes to and now resent\nA system I keep alive just in case\nA task I’m avoiding but can’t stop thinking about`}
                className="w-full rounded-3xl border border-line bg-white/85 px-5 py-4 text-base text-ink shadow-soft focus:outline-none focus:ring-2 focus:ring-ink/20"
              />
              <p className="mt-3 text-sm text-muted">
                You don’t need to explain it properly. One sentence is enough.
              </p>
              {showContextGate ? (
                <div className="mt-5">
                  <label htmlFor="unload-context" className="sr-only">
                    Why is this heavy?
                  </label>
                  <input
                    id="unload-context"
                    name="unload-context"
                    value={context}
                    onChange={(event) => setContext(event.target.value)}
                    placeholder="What makes this feel heavy right now? One sentence."
                    className="w-full rounded-full border border-line bg-white/85 px-5 py-3 text-sm text-ink shadow-soft focus:outline-none focus:ring-2 focus:ring-ink/20"
                  />
                  <div className="mt-3 text-xs text-muted">
                    <p>“It’s late and I’m exhausted.”</p>
                    <p>“I feel guilty if I skip.”</p>
                    <p>“It’s taking longer than it should.”</p>
                  </div>
                </div>
              ) : null}
              {showError && !trimmed ? (
                <p className="mt-2 text-xs font-semibold text-ink">
                  Just one thing. Even a sentence.
                </p>
              ) : null}
            </div>
            <button
              type="submit"
              aria-disabled={!trimmed}
              data-disabled={!trimmed}
              className={`inline-flex items-center justify-center rounded-full px-8 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition ${
                trimmed
                  ? "bg-ink hover:bg-accent"
                  : "cursor-not-allowed bg-ink/50"
              }`}
            >
              UNLOAD THIS
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
