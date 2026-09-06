import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { THEMES, themeUrl } from "./content";

export function MoreSection() {
  return (
    <section
      className="landing-more"
      id="mais"
      aria-labelledby="more-title"
    >
      <p className="eyebrow">TAMBÉM FAZ PARTE</p>
      <h2 id="more-title">Complete o ambiente.</h2>
      <div className="more-list">
        {THEMES.map((item) => (
          <a
            key={item.name}
            data-cursor="button"
            href={themeUrl(item.path)}
            target="_blank"
            rel="noreferrer"
          >
            <span>{item.role}</span>
            <strong>{item.name}</strong>
            <span>{item.detail}</span>
            <span aria-hidden="true">
              <ArrowUpRightIcon size={22} />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
