import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "lenis/dist/lenis.css";
import "./styles/base.css";
import "./styles/hero.css";
import "./styles/notebook.css";
import "./styles/sections.css";
import "./styles/cursor.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-manrope",
});

const title = "Temas escuros e coerentes para VS Code, Zed, Kitty e Starship | Umbra";
const description =
  "Umbra é um sistema visual com temas escuros para o seu fluxo de trabalho: temas para VS Code, Zed e Kitty, prompt para Starship e wallpapers. Mesmas superfícies, mesmo contraste, cor com função.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["umbra", "tema escuro", "dark theme", "zed", "kitty", "starship", "terminal", "wallpapers", "sistema visual"],
  authors: [{ name: "Umbra", url: "https://github.com/eduardoaugustolb/umbra" }],
  robots: { index: true, follow: true },
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: "Umbra",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/umbra-avatar-512.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Umbra",
  description,
  url: "https://github.com/eduardoaugustolb/umbra",
  inLanguage: "pt-BR",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
