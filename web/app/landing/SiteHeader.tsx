"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { MouseEvent } from "react";

type SiteHeaderProps = {
  onExplore: (event: MouseEvent<HTMLButtonElement>) => void;
};

export function SiteHeader({ onExplore }: SiteHeaderProps) {
  return (
    <header>
      <a className="wordmark" href="#inicio" aria-label="Umbra, início">
        umbra
      </a>
      <button type="button" className="header-link" onClick={onExplore}>
        Explore o ambiente{" "}
        <span aria-hidden="true">
          <ArrowUpRightIcon size={13} />
        </span>
      </button>
    </header>
  );
}
