"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
type Kind = "presence" | "continuity" | "integrations";
const copy = {
  presence: { number: "01", title: "Uma linguagem visual para o seu espaço de trabalho.", detail: "Umbra conecta suas ferramentas com superfícies escuras, contraste e cor com intenção.", question: "A primeira tela explica o que é Umbra? A revelação ajuda a ler?" },
  continuity: { number: "02", title: "Você muda de ferramenta. Seu ambiente continua.", detail: "Zed e Kitty compartilham uma intenção visual. O conteúdo muda; a atmosfera permanece.", question: "O notebook abrindo conecta a mensagem à experiência das ferramentas?" },
  integrations: { number: "03", title: "Um ambiente. Suas ferramentas.", detail: "Do editor ao terminal, a mesma intenção. Comece por onde seu trabalho acontece.", question: "A lista revelada em sequência apresenta as integrações com mais clareza?" },
};
const items = [["Zed", "Editor", "themes/zed/umbra"], ["Kitty", "Terminal", "themes/kitty/umbra"], ["Starship", "Prompt", "themes/starship/umbra"], ["Wallpapers", "Coleção", "wallpapers"]];

export function Study({ kind }: { kind: Kind }) {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [staticView, setStaticView] = useState(false);
  const [replayCount, setReplayCount] = useState(0);
  const c = copy[kind];
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      if (staticView) return;
      const lenis = new Lenis({ lerp: 0.12 });
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(tick);
      gsap.utils.toArray<HTMLElement>(".study-heading h1, .study-heading p", root.current!).forEach(element => {
        SplitText.create(element, { type: "lines", mask: "lines", autoSplit: true,
          onSplit(split) {
            return gsap.from(split.lines, { yPercent: 35, opacity: 0, duration: 1.1, stagger: 0.09, ease: "power2.out", scrollTrigger: { trigger: element, start: "top 95%", once: true } });
          },
        });
      });
      // Complete the animation 160px before the sticky scene releases.
      const tl = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: ".study-runway", start: "top top", end: "bottom bottom+=160", scrub: 0.25, invalidateOnRefresh: true } });
      timeline.current = tl;
      if (kind === "presence") {
        const split = SplitText.create(".presence-surface p", { type: "words", aria: "auto" });
        tl.from(split.words, { yPercent: 30, opacity: 0, stagger: 0.12, duration: 0.6 }, 0);
      } else if (kind === "continuity") {
        const zedText = SplitText.create(".app-zed .app-reveal", { type: "words", mask: "words" });
        const kittyText = SplitText.create(".app-kitty .app-reveal", { type: "words", mask: "words" });
        tl.addLabel("leitura", 0)
          .fromTo(".notebook", { yPercent: 8, scale: 0.76 }, { yPercent: -5, scale: 1, duration: 0.55, ease: "power1.inOut" }, 1.15)
          .fromTo(".notebook-lid", { rotationX: -78 }, { rotationX: 0, duration: 0.85, ease: "power1.inOut" }, 0.3)
          .to(".study-heading", { y: -45, opacity: 0, duration: 0.55 }, 0.3)
          .fromTo(".notebook-lid, .notebook-base", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.45 }, 0.8)
          .fromTo(".notebook-display", { opacity: 0 }, { opacity: 1, duration: 0.45 }, 0.8)
          .fromTo(".app-zed", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, 1.45)
          .from(zedText.words, { yPercent: 100, duration: 0.3, stagger: 0.035, ease: "power2.out" }, 1.45)
          .addLabel("zed", 1.7)
          .fromTo(".capture-kitty", { opacity: 0 }, { opacity: 1, duration: 0.8 }, 2.05)
          .fromTo(".capture-zed", { opacity: 1 }, { opacity: 0, duration: 0.8 }, 2.05)
          .to(".app-zed", { autoAlpha: 0, y: -8, duration: 0.2 }, 2.05)
          .fromTo(".app-kitty", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.2 }, 2.3)
          .from(kittyText.words, { yPercent: 100, duration: 0.35, stagger: 0.035, ease: "power2.out" }, 2.3)
          .addLabel("kitty", 2.85);
      } else {
        const rows = gsap.utils.toArray<HTMLElement>(".study-integration", root.current!);
        tl.from(rows, { y: 18, opacity: 0.12, stagger: 0.18, duration: 0.46 }, 0);
      }
      tl.fromTo(".study-meter span", { scaleX: 0 }, { scaleX: 1, duration: kind === "continuity" ? 2.95 : 1 }, 0);
      return () => { timeline.current = null; gsap.ticker.remove(tick); lenis.off("scroll", ScrollTrigger.update); lenis.destroy(); };
    });
    return () => mm.revert();
  }, { scope: root, dependencies: [kind, staticView, replayCount], revertOnUpdate: true });

  const replay = () => {
    const trigger = timeline.current?.scrollTrigger;
    window.scrollTo({ top: trigger ? Number(trigger.start) : 0, behavior: "instant" });
    setReplayCount(value => value + 1);
  };
  return <main ref={root} className={`study-experiment study-${kind} ${staticView ? "study-static" : ""}`}>
    <div className="study-controls"><span>ESTUDO {c.number} / {staticView ? "ESTADO FINAL" : "ROLE PARA EXPERIMENTAR"}</span><div><button onClick={replay}>Reiniciar ↑</button><button aria-pressed={staticView} onClick={() => setStaticView(value => !value)}>{staticView ? "Ativar scroll" : "Ver sem animação"}</button></div></div>
    <div className="study-runway"><div className="study-stage"><div className="study-heading"><h1>{c.title}</h1><p>{c.detail}</p></div>
      {kind === "continuity" && <div className="notebook-apps">{[["zed", "Zed", "Editor"], ["kitty", "Kitty", "Terminal"]].map(([id, name, role]) => <div className={`notebook-app app-${id}`} key={id}><h2 className="app-reveal">Umbra para {name}</h2><a href={`https://github.com/eduardoaugustolb/umbra/tree/main/themes/${id}/umbra`} target="_blank" rel="noreferrer"><span className="app-reveal">Explorar tema ↗</span></a><p>{role} · a mesma atmosfera.</p></div>)}</div>}
      {kind === "presence" && <div className="presence-surface"><p>Menos ruído.<br /><span>Mais presença.</span></p></div>}
      {kind === "continuity" && <div className="continuity-surface"><div className="notebook"><div className="notebook-lid"><div className="notebook-camera" aria-hidden="true" /><div className="capture-frame notebook-display"><Image className="capture-zed" src="/examples/zed.png" alt="Tema Umbra no Zed, na tela do notebook" fill sizes="(max-width: 760px) 88vw, 85vw" preload /><Image className="capture-kitty" src="/examples/kitty.png" alt="Tema Umbra no Kitty, na tela do notebook" fill sizes="(max-width: 760px) 88vw, 85vw" preload /></div></div><div className="notebook-base" aria-hidden="true"><div className="notebook-keyboard">{Array.from({ length: 60 }, (_, index) => <i key={index} />)}</div><div className="notebook-trackpad" /><div className="notebook-front" /></div></div></div>}
      {kind === "integrations" && <div className="study-integration-list">{items.map(([name, role, path]) => <a className="study-integration" data-cursor="button" key={name} href={`https://github.com/eduardoaugustolb/umbra/tree/main/${path}`} target="_blank" rel="noreferrer"><span>{role}</span><strong>{name}</strong><span aria-hidden="true">↗</span></a>)}</div>}
      <div className="study-meter" aria-hidden="true"><span /></div>
    </div></div>
    <div className="study-question"><span>O QUE ESTAMOS AVALIANDO</span><p>{c.question}</p><a href="/estudos">← Voltar aos estudos</a></div>
  </main>;
}
