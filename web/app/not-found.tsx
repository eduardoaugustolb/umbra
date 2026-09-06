import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | Umbra",
  description: "A página que você procurou não existe. Volte para a Umbra.",
};

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">ERRO 404</p>
      <h1>Essa página não existe.</h1>
      <p>O endereço pode ter mudado ou nunca ter existido.</p>
      <Link className="cta" href="/">
        Voltar para a Umbra
      </Link>
    </main>
  );
}
