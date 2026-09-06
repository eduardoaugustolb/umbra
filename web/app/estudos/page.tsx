import Link from "next/link";

export default function Studies() {
  return <main className="study-index"><p className="study-kicker">TRÊS IDEIAS / TRÊS TESTES ISOLADOS</p><h1>Primeiro, a história.<br /><em>Um gesto por vez.</em></h1><p>Estudos mínimos para avaliar mensagem, ritmo e continuidade. Comece pelo primeiro; os outros exploram as próximas partes.</p><div className="study-links">{[
    ["01-presenca", "01 — O que é", "A sombra abre espaço para uma frase. Um único gesto de revelação."],
    ["02-continuidade", "02 — Por que existe", "Texto centralizado, notebook abrindo e fade entre ferramentas na tela."],
    ["03-integracoes", "03 — O que existe hoje", "Uma lista editorial revela as integrações em sequência."],
  ].map(([path, title, description]) => <Link href={`/estudos/${path}`} key={path}><h2>{title} ↗</h2><p>{description}</p></Link>)}</div></main>;
}
