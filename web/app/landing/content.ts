export const REPO = "https://github.com/eduardoaugustolb/umbra";

export type NotebookApp = {
  id: string;
  name: string;
  role: string;
};

export const NOTEBOOK_APPS: NotebookApp[] = [
  { id: "zed", name: "Zed", role: "Editor" },
  { id: "kitty", name: "Kitty", role: "Terminal" },
];

export const themeGuideUrl = (id: string) => `${REPO}/tree/main/themes/${id}/umbra`;

export type ThemeEntry = {
  name: string;
  role: string;
  detail: string;
  path: string;
};

export const THEMES: ThemeEntry[] = [
  {
    name: "Zed",
    role: "Editor",
    detail: "Tema escuro com sintaxe semântica.",
    path: "themes/zed/umbra",
  },
  {
    name: "Kitty",
    role: "Terminal",
    detail: "Terminal com a mesma paleta.",
    path: "themes/kitty/umbra",
  },
  {
    name: "Starship",
    role: "Prompt",
    detail: "Prompt compacto com Git e runtimes.",
    path: "themes/starship/umbra",
  },
  {
    name: "Wallpapers",
    role: "Coleção",
    detail: "Fundos escuros na mesma linguagem.",
    path: "wallpapers",
  },
];

export const themeUrl = (path: string) => `${REPO}/tree/main/${path}`;
