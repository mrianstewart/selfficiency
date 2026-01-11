"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const layerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    let revealObserver: IntersectionObserver | null = null;

    const handleScroll = () => {
      if (frame) {
        return;
      }
      frame = window.requestAnimationFrame(() => {
        const node = layerRef.current;
        if (node) {
          const offset = window.scrollY * 0.12;
          node.style.transform = `translate3d(0, ${offset}px, 0)`;
        }

        const glow = glowRef.current;
        if (glow) {
          const fade = Math.max(0.15, 1 - window.scrollY / 520);
          glow.style.opacity = `${fade}`;
        }

        frame = 0;
      });
    };

    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      revealTargets.forEach((target) => revealObserver?.observe(target));
    } else {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      revealObserver?.disconnect();
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 [perspective:1000px]"
      aria-hidden="true"
    >
      <div
        ref={layerRef}
        className="absolute inset-[-90%] opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 14% 18%, rgba(186, 206, 196, 0.6), transparent 56%), radial-gradient(circle at 86% 12%, rgba(209, 188, 169, 0.55), transparent 50%), radial-gradient(circle at 50% 108%, rgba(206, 188, 172, 0.6), transparent 58%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "240% 240%",
          backgroundPosition: "center",
          willChange: "transform"
        }}
      />
      <div
        ref={glowRef}
        className="absolute inset-0 opacity-90 mix-blend-soft-light"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.85), transparent 55%), radial-gradient(circle at 70% 10%, rgba(255, 255, 255, 0.7), transparent 45%)",
          willChange: "opacity"
        }}
      />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 255, 255, 0) 55%)",
          mixBlendMode: "soft-light"
        }}
      />
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0, 0, 0, 0) 46%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.45) 100%)",
          mixBlendMode: "multiply"
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='120' height='120' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "140px 140px"
        }}
      />
    </div>
  );
}
