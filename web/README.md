# Umbra — protótipo web

Landing em Next.js, React, GSAP/ScrollTrigger e Lenis. Briefing: [LANDING-PAGE.md](../LANDING-PAGE.md).

## Executar

```sh
cd web
bun install
bun run dev
```

Abra o endereço informado pelo Next.js. Para validar a versão de produção:

```sh
bun run build
bun run typecheck
```

## Escopo

Três seções semânticas compartilham uma cena fixada pelo ScrollTrigger. Uma timeline com os momentos `atmosfera`, `continuidade` e `integracoes` reduz o Zed, acomoda o Kitty e organiza a composição final. O conteúdo explica o projeto, sua intenção e as integrações disponíveis. Breakpoints recriam a sequência para desktop e mobile. Os links abrem os materiais do repositório.

Editor e terminal usam capturas reais mantidas junto dos temas (`themes/zed/umbra/screenshots/1-main.png` e `themes/kitty/umbra/screenshots/1-fastfetch.png`), copiadas para `public/examples/`. As capturas aparecem inteiras, com dimensões proporcionais ao viewport e parallax discreto; os originais permanecem intactos. As imagens são servidas por `next/image` com tamanhos responsivos. Não há Three.js, coleta de dados ou publicação. As fontes web usam Google Fonts com fallback local.

Cursor circular com `mix-blend-mode: difference` para inverter o que está atrás, sem rastro. Sobre botões, assume as dimensões do controle; sobre links, vira sublinhado na linha do texto. Leituras de DOM fora do `pointermove` (1x por frame). Substitui o cursor nativo apenas com mouse, hover e movimento permitido; toque e movimento reduzido preservam o nativo.

Favicon em `app/icon.svg` (monograma UM sobre preto) + apple-touch-icon em `public/umbra-avatar-512.png`. SEO em `app/layout.tsx`: título e descrição diretos, keywords, theme-color, robots, Open Graph, Twitter card e JSON-LD. Sem `og:image` absoluta nem canonical: dependem da URL de publicação, ainda indefinida. Hero com fundo `SlicedWaves` (React Bits + `ogl`) em tons da marca, opacidade 0.35, com mouse e grão; some junto com o título no scroll e não monta com movimento reduzido. Sem travessões nos textos da página.

Mobile mantém o percurso por scroll. Movimento reduzido apresenta o conteúdo sem animação. A limpeza de GSAP, ticker e Lenis ocorre ao desmontar o componente ou mudar a preferência de movimento.

## Tokens

Sem Tailwind por decisão: os tokens vivem no `:root` de `app/styles/base.css` e o CSS segue dividido por responsabilidade (`hero.css`, `notebook.css`, `sections.css`, `cursor.css`).

- Cores: `--ink`, `--bone`, `--muted`, `--line`.
- Espaçamento (`--space-*`, múltiplos de 4px): 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px, 10=40px.
- Raios (`--radius-*`): xs=3px, sm=6px, md=8px, lg=12px, xl=18px, full=50%.
- Movimento: `--duration-fast/base/slow` (.25s/.35s/.9s), `--ease-smooth` e `--ease-brand` (`cubic-bezier(0.2, 0, 0, 1)`, desaceleração da marca).
- Camadas (`--z-*`): bg=0, content=1, scene=2, fade=3, apps=4, header=50, skip=200, cursor=1000, meter=2000.

Regra: estilos novos usam tokens; valores fora da escala só com motivo (ex.: 35px do grid do footer, 14px da base do notebook).

## Revisão visual pendente

Verificar o percurso em aparelho físico, barras móveis do navegador, legibilidade durante as transições e custo de renderização. O protótipo não representa aprovação final de copy, tipografia ou duração do scroll.
