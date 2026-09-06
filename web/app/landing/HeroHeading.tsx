"use client";

import { ArrowDownIcon } from "@phosphor-icons/react";
import type { MouseEvent } from "react";

type HeroHeadingProps = {
  onExplore: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function HeroHeading({ onExplore }: HeroHeadingProps) {
  return (
    <div className="landing-heading">
      <h1>As suas ferramentas, no mesmo ambiente visual.</h1>
      <p>
        Umbra é um sistema visual com temas escuros e coerentes para o seu
        fluxo de trabalho: mesmas superfícies, mesmo contraste e cor com
        função.
      </p>
      <button type="button" className="cta" onClick={onExplore}>
        Explorar os temas{" "}
        <span aria-hidden="true">
          <ArrowDownIcon size={14} />
        </span>
      </button>
    </div>
  );
}
