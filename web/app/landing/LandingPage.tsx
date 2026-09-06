"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { MotionCursor } from "../MotionCursor";
import { HeroHeading } from "./HeroHeading";
import { MoreSection } from "./MoreSection";
import { Notebook } from "./Notebook";
import { NotebookApps } from "./NotebookApps";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const SlicedWaves = dynamic(() => import("../SlicedWaves"), { ssr: false });

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export function LandingPage() {
  const root = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const [bgOn, setBgOn] = useState(false);

  // CTA leva ao momento do Zed na sequência (não pula os temas para #mais).
  const goToThemes = (event: MouseEvent<HTMLButtonElement>) => {
    const lenis = lenisRef.current;
    const runway = root.current?.querySelector<HTMLElement>(".landing-runway");
    if (!lenis || !runway) return;
    event.preventDefault();
    const start = runway.offsetTop;
    const end = start + runway.offsetHeight - window.innerHeight + 160;
    lenis.scrollTo(start + (end - start) * 0.62, { duration: 1.8 });
  };

  useEffect(() => {
    root.current?.classList.add("landing-ready");
    // Entrada dura ~1.15s (delay .25s + .9s); depois o scrub controla a opacidade.
    const settled = window.setTimeout(
      () => root.current?.classList.add("landing-settled"),
      1400,
    );
    const media = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setBgOn(media.matches);
    update();
    media.addEventListener("change", update);
    return () => {
      window.clearTimeout(settled);
      media.removeEventListener("change", update);
    };
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const lenis = new Lenis({ anchors: true, lerp: 0.045 });
        lenisRef.current = lenis;
        const tick = (time: number) => lenis.raf(time * 1000);
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);

        gsap.utils
          .toArray<HTMLElement>(
            ".landing-heading h1, .landing-heading p",
            root.current!,
          )
          .forEach((element) => {
            SplitText.create(element, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              onSplit(split) {
                return gsap.from(split.lines, {
                  yPercent: 35,
                  opacity: 0,
                  duration: 1.1,
                  stagger: 0.09,
                  ease: "power2.out",
                  scrollTrigger: {
                    trigger: element,
                    start: "top 95%",
                    once: true,
                  },
                });
              },
            });
          });

        const zedText = SplitText.create(".app-zed .app-reveal", {
          type: "words",
          mask: "words",
        });
        const kittyText = SplitText.create(".app-kitty .app-reveal", {
          type: "words",
          mask: "words",
        });

        // Textos disparam por marco (in/out com duração própria), não acompanham o scrub.
        gsap.set(zedText.words, { yPercent: 100 });
        gsap.set(kittyText.words, { yPercent: 100 });
        gsap.set(".app-kitty", { autoAlpha: 0 });

        const zedIntro = gsap
          .timeline({ paused: true })
          .fromTo(
            ".app-zed",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
          )
          .to(
            zedText.words,
            { yPercent: 0, duration: 0.6, stagger: 0.05, ease: "power3.out" },
            "<0.05",
          );

        const swap = gsap
          .timeline({ paused: true })
          .to(".app-zed", {
            autoAlpha: 0,
            y: -10,
            duration: 0.35,
            ease: "power2.in",
          })
          .fromTo(
            ".app-kitty",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.35, ease: "power2.out" },
            "<0.1",
          )
          .to(
            kittyText.words,
            { yPercent: 0, duration: 0.65, stagger: 0.05, ease: "power3.out" },
            "<0.05",
          );

        let zedShown = false;
        let swapped = false;

        // A animação termina 160px antes da cena soltar.
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: ".landing-runway",
            start: "top top",
            end: "bottom bottom+=160",
            scrub: 0.25,
            invalidateOnRefresh: true,
            onUpdate(self) {
              const p = self.progress;
              if (p > 0.44 && !zedShown) {
                zedShown = true;
                zedIntro.play();
              } else if (p <= 0.44 && zedShown) {
                zedShown = false;
                zedIntro.reverse();
              }
              // A troca Zed → Kitty dispara no meio para o final do fade da screenshot (fade: 2.05–2.55/2.95).
              if (p > 0.8 && !swapped) {
                swapped = true;
                swap.play();
              } else if (p <= 0.8 && swapped) {
                swapped = false;
                swap.reverse();
              }
            },
          },
        });

        tl.addLabel("leitura", 0)
          .fromTo(
            ".notebook",
            { yPercent: 8, scale: 0.76 },
            { yPercent: -5, scale: 1, duration: 0.55, ease: "power1.inOut" },
            1.15,
          )
          .fromTo(
            ".notebook-lid",
            { rotationX: -78 },
            { rotationX: 0, duration: 0.85, ease: "power1.inOut" },
            0.3,
          )
          .to(".landing-heading", { y: -45, opacity: 0, duration: 0.55 }, 0.3)
          .to(".hero-bg", { opacity: 0, duration: 0.55 }, 0.3)
          .fromTo(
            ".notebook-lid, .notebook-base",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.45 },
            0.8,
          )
          .fromTo(
            ".notebook-display",
            { opacity: 0 },
            { opacity: 1, duration: 0.45 },
            0.8,
          )
          .addLabel("zed", 1.7)
          .fromTo(
            ".capture-kitty",
            { opacity: 0 },
            { opacity: 1, duration: 0.5 },
            2.05,
          )
          .fromTo(
            ".capture-zed",
            { opacity: 1 },
            { opacity: 0, duration: 0.5 },
            2.05,
          )
          .addLabel("kitty", 2.85)
          .fromTo(
            ".landing-meter span",
            { scaleX: 0 },
            { scaleX: 1, duration: 2.95 },
            0,
          );

        let active = true;
        document.fonts.ready.then(() => {
          if (active) ScrollTrigger.refresh();
        });
        return () => {
          active = false;
          lenisRef.current = null;
          gsap.ticker.remove(tick);
          lenis.off("scroll", ScrollTrigger.update);
          lenis.destroy();
        };
      });
      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <div ref={root}>
      <noscript>
        <style>
          {".landing-heading,.notebook-apps,.notebook{opacity:1!important}"}
        </style>
      </noscript>
      <a className="skip-link" href="#mais">
        Ir para o restante do ambiente
      </a>
      <SiteHeader onExplore={goToThemes} />
      <main id="inicio">
        <div className="landing-runway">
          <div className="landing-stage">
            <div className="hero-bg" aria-hidden="true">
              {bgOn && (
                <SlicedWaves
                  color1="#3B4242"
                  color2="#101111"
                  color3="#858A89"
                  columns={14}
                  rows={8}
                  barThickness={0.1}
                  speed={0.35}
                  travel={0.7}
                  waveSpread={0.9}
                  rowOffset={1.0}
                  softness={0.05}
                  glow={0}
                  brightness={1.0}
                  contrast={1.0}
                  opacity={0.35}
                  mouseInteraction={true}
                  mouseStrength={1}
                  mouseRadius={0.3}
                  grain={true}
                  grainIntensity={0.05}
                />
              )}
            </div>
            <HeroHeading onExplore={goToThemes} />
            <NotebookApps />
            <Notebook />
            <div className="landing-meter" aria-hidden="true">
              <span />
            </div>
            <div className="stage-fade" aria-hidden="true" />
          </div>
        </div>
        <MoreSection />
      </main>
      <SiteFooter />
      <MotionCursor />
    </div>
  );
}
