import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

const title = "Temas escuros e coerentes para Zed, Kitty e Starship | Umbra";
const description =
  "Umbra é um sistema visual com temas escuros para o seu fluxo de trabalho: temas para Zed e Kitty, prompt para Starship e wallpapers. Mesmas superfícies, mesmo contraste, cor com função.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["umbra", "tema escuro", "dark theme", "zed", "kitty", "starship", "terminal", "wallpapers", "sistema visual"],
  authors: [{ name: "Umbra", url: "https://github.com/eduardoaugustolb/umbra" }],
  themeColor: "#050505",
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
    <html lang="pt-BR">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
