"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Círculo com morph em botões e links, sem rastro.
// Só transform no pointermove; leituras de DOM no máximo 1x por frame.
export function MotionCursor() {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const cursor = ref.current!;
      const x = gsap.quickTo(cursor, "x", { duration: 0.35, ease: "power3.out" });
      const y = gsap.quickTo(cursor, "y", { duration: 0.35, ease: "power3.out" });
      const width = gsap.quickTo(cursor, "width", { duration: 0.25, ease: "power3.out" });
      const height = gsap.quickTo(cursor, "height", { duration: 0.25, ease: "power3.out" });
      let visible = false;
      let target: HTMLElement | null = null;
      let morphQueued = false;
      let px = 0, py = 0;
      const setTarget = (next: HTMLElement | null) => {
        if (next === target) return;
        target = next;
        morphQueued = true;
      };
      const hide = () => {
        visible = false; setTarget(null); morphQueued = false;
        cursor.style.opacity = "0";
        document.documentElement.classList.remove("custom-cursor-active");
      };
      // Roda no máximo 1x por frame: leituras caras fora do pointermove.
      const morph = () => {
        // Measure once, before the animation writes; also refresh on scroll.
        const button = target?.matches("button, [data-cursor='button'], .more-list a");
        let rect = target?.getBoundingClientRect();
        if (target && !button) {
          const range = document.createRange();
          range.selectNodeContents(target);
          const lines = Array.from(range.getClientRects()).filter(line => line.width > 0 && line.height > 0);
          // The actual text line, not the stretched flex/grid link box.
          rect = lines.sort((a, b) => Math.abs((a.top + a.bottom) / 2 - py) - Math.abs((b.top + b.bottom) / 2 - py))[0] ?? rect;
        }
        const tx = rect ? rect.left : px - 18;
        const ty = rect ? (button ? rect.top : rect.bottom) : py - 18;
        const targetStyle = button && target ? getComputedStyle(target) : null;
        const corners = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"] as const;
        for (const corner of corners) {
          // Keep units and elliptical radii; parseFloat loses that geometry.
          cursor.style[corner] = targetStyle ? targetStyle[corner] : rect ? "1px" : "50%";
        }
        width(rect ? rect.width : 36);
        height(rect ? (button ? rect.height : 2) : 36);
        if (!visible) { x(tx, tx); y(ty, ty); } else { x(tx); y(ty); }
      };
      const move = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") { hide(); return; }
        px = event.clientX; py = event.clientY;
        const hit = event.target instanceof Element ? event.target.closest<HTMLElement>("a, button, [data-cursor]") : null;
        setTarget(hit);
        // Só transform aqui: barato e acompanha o mouse sem atrasar o evento.
        if (!hit) { x(px - 18); y(py - 18); }
        if (!visible) {
          visible = true; cursor.style.opacity = "1";
          document.documentElement.classList.add("custom-cursor-active");
          // Estreia sem voar da origem: posiciona de imediato.
          if (hit) { morphQueued = false; morph(); } else { gsap.set(cursor, { x: px - 18, y: py - 18 }); }
        }
      };
      const frame = () => {
        if (!visible) return;
        if (morphQueued) { morphQueued = false; morph(); }
      };
      const scroll = () => {
        if (!visible) return;
        setTarget(document.elementFromPoint(px, py)?.closest<HTMLElement>("a, button, [data-cursor]") ?? null);
      };
      const resize = () => { if (visible) morphQueued = true; };
      gsap.ticker.add(frame);
      window.addEventListener("pointermove", move);
      window.addEventListener("scroll", scroll, { passive: true });
      window.addEventListener("resize", resize);
      window.addEventListener("blur", hide);
      document.documentElement.addEventListener("pointerleave", hide);
      document.addEventListener("visibilitychange", hide);
      return () => {
        hide(); gsap.ticker.remove(frame);
        window.removeEventListener("pointermove", move); window.removeEventListener("scroll", scroll);
        window.removeEventListener("resize", resize);
        window.removeEventListener("blur", hide); document.documentElement.removeEventListener("pointerleave", hide);
        document.removeEventListener("visibilitychange", hide);
      };
    });
    return () => mm.revert();
  }, { scope: ref });
  return <div ref={ref} className="motion-cursor" aria-hidden="true" />;
}
