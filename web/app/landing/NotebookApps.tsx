import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { NOTEBOOK_APPS, themeGuideUrl } from "./content";

export function NotebookApps() {
  return (
    <div className="notebook-apps">
      {NOTEBOOK_APPS.map((app) => (
        <div className={`notebook-app app-${app.id}`} key={app.id}>
          <h2 className="app-reveal">Tema Umbra para {app.name}</h2>
          <a
            href={themeGuideUrl(app.id)}
            target="_blank"
            rel="noreferrer"
          >
            <span className="app-reveal">Guia de instalação</span>{" "}
            <ArrowUpRightIcon size={13} aria-hidden="true" />
          </a>
          <p>{app.role}</p>
        </div>
      ))}
    </div>
  );
}
