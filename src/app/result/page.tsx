"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ParallaxBackground from "../_components/ParallaxBackground";

type UnloadResult = {
  stop: string;
  simplify: string;
  protect: string;
};

const fallbackCopy: UnloadResult = {
  stop: "Pause this for seven days. If it still matters next week, you can pick it up then.",
  simplify:
    "Define ‘good enough’ for this week: the smallest version that reduces the pressure.",
  protect: "New rule: if it isn’t essential this week, it doesn’t get time."
};

export default function ResultPage() {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [result, setResult] = useState<UnloadResult | null>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("selfficiency:unload") ?? "";
    if (!stored.trim()) {
      router.replace("/unload");
      return;
    }
    setValue(stored);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 6000);

    setLoading(true);
    fetch("/api/unload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ input: stored }),
      signal: controller.signal
    })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Request failed.");
        }
        return (await response.json()) as UnloadResult;
      })
      .then((data) => {
        setResult(data);
        setError(false);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
        window.clearTimeout(timeout);
      });

    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, [router]);

  if (!value) {
    return null;
  }

  const copy = result ?? (error ? fallbackCopy : null);
  const thinking = "Thinking…";

  return (
    <>
      <ParallaxBackground />
      <main className="text-ink">
        <section className="px-6 py-20 sm:px-10 sm:py-28">
          <div
            data-reveal
            className="mx-auto flex max-w-2xl flex-col gap-6 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.55em] text-muted sm:text-sm">
              Selfficiency
            </p>
            <h1 className="mt-4 text-[1.65rem] font-normal leading-[1.12] tracking-[-0.015em] text-ink sm:text-4xl lg:text-5xl">
              You can stop carrying this.
            </h1>
            <p className="text-xs text-muted sm:text-sm">
              Today you’re carrying: {value}
            </p>
            <div className="mt-6 rounded-[28px] border border-line bg-white/85 px-6 py-8 text-left shadow-soft backdrop-blur-sm sm:px-8">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted">
                Stop
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">
                {copy?.stop ?? (loading ? thinking : "...")}
              </p>
              <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted">
                Simplify
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">
                {copy?.simplify ?? (loading ? thinking : "...")}
              </p>
              <p className="mt-6 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-muted">
                Protect
              </p>
              <p className="mt-3 text-base leading-relaxed text-ink sm:text-lg">
                {copy?.protect ?? (loading ? thinking : "...")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => router.push("/unload")}
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-white shadow-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.25)] transition hover:bg-accent"
            >
              UNLOAD ANOTHER THING
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
