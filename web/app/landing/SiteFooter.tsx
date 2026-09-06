import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { REPO } from "./content";

const PROJECT_LINKS = [
  { label: "Documentação", href: `${REPO}#readme` },
  { label: "GitHub", href: REPO },
  { label: "Licença", href: `${REPO}/blob/main/LICENSE` },
];

export function SiteFooter() {
  return (
    <footer>
      <a className="wordmark" href="#inicio">
        umbra
      </a>
      <p>
        Temas escuros e coerentes para VS Code, Zed, Kitty e Starship, além
        de wallpapers.
      </p>
      <nav aria-label="Links do projeto">
        {PROJECT_LINKS.map((link) => (
          <a key={link.label} href={link.href}>
            {link.label}{" "}
            <ArrowUpRightIcon size={11} aria-hidden="true" />
          </a>
        ))}
      </nav>
      <span className="footer-note">UM AMBIENTE EM CONSTRUÇÃO / 2026</span>
    </footer>
  );
}
