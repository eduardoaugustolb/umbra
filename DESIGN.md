# Umbra — identidade visual

Versão **0.4.1**, 2026-09-05. Junção UM contínua; reconhecimento com público ainda não medido.

Fonte metodológica: skill [memorable-visual-identity](/home/eduardoaugustolb/.agents/skills/memorable-visual-identity/SKILL.md). Este guia traduz seus princípios em regras específicas para Umbra. [Prancha](branding/umbra/system.svg) · [Assets](branding/umbra/README.md) · [Avaliação](branding/umbra/REVIEW.md).

## 1. Conceito e posição

**Limiar: a sombra delimita, o conteúdo aparece.** Umbra cria ambientes de trabalho escuros em que limites, espaço e contraste organizam a atenção. Público inicial: pessoas que personalizam ferramentas de desenvolvimento. Pontos de contato: temas, avatares, documentação, wallpapers e interfaces próprias.

A preferência por preto OLED e neutros permanece. A identidade deve comunicar atenção e continuidade. Evitar metáforas de terror, mascotes noturnos e cor como principal sinal de reconhecimento. A auditoria de categoria e seus limites estão no relatório.

## 2. Assets e reconhecimento

| Hierarquia | Asset | Regra e motivo |
| --- | --- | --- |
| Primário | Monograma UM horizontal | U primeiro, M depois, uma haste comum. A sequência permite leitura direta e a conexão dá unidade |
| Primário | Limiar | Contorno aberto: descida vertical, curva inferior à esquerda, base horizontal, saída diagonal à direita. Reproduz a passagem curva/ângulo das letras |
| Secundário | Composição | Título curto à esquerda, limiar à direita e metadados no rodapé. Repetir a distribuição ajuda a criar parentesco |
| Secundário | Tipografia | Nome em caixa baixa; títulos próximos, rótulos pequenos espaçados |
| Secundário | Relação tonal | Campo preto dominante, forma em cinza e conteúdo localizado em Bone |
| Secundário | Revelação | Imagem imóvel revelada seguindo o contorno; nunca reordenar conteúdo |

Sem logo, nome e slogan, devem restar o limiar assimétrico, o ritmo de títulos e a distribuição tonal. A prancha contém essa aplicação. São candidatos a associação pela repetição, não assets de exclusividade comprovada.

## 3. Logo e nome

Nome público: **Umbra**; identificadores: `umbra`; assinatura editorial em caixa baixa. Destinos usam “Umbra para Zed” e descritores equivalentes, sem criar submarcas por aplicativo.

O [original](branding/umbra/logo/umbra-symbol.svg) tem viewBox 152 × 116 e traço 16. Um único percurso parte de (16,16), desce até (16,68), percorre a curva do U e chega a (72,68) com tangente vertical. Dali sobe diretamente a (72,16), entra nas diagonais do M por (104,60) e (136,16), e termina em (136,100). A subida em x=72 é simultaneamente a haste direita do U e a entrada do M; não existe prolongamento independente abaixo da junção. A curva tem pequena compensação abaixo da base reta. Terminais retos e encontros chanfrados.

A ordem é espacial: U à esquerda, M à direita. Não empilhar letras. A coruja e o antigo V sobre U deixam de orientar o sistema. Não usar olhos, orelhas ou máscaras animais.

Largura mínima recomendada: 32 px; abaixo disso a leitura perde definição. Área livre: pelo menos 16 unidades além da caixa do desenho. Avatar usa margem maior, já aplicada no arquivo próprio. Usar Bone sobre preto ou preto sobre claro. Não espelhar, deformar, recortar, separar por cor, aplicar efeitos ou usar contorno adicional. O símbolo é vetor; as pranchas têm textos editáveis.

## 4. Cores fundamentais

Os nomes de tokens abaixo são uma convenção semântica do guia, ainda sem um pacote de tokens ou gerador implementado. Novas integrações devem mapear essas funções para as propriedades do aplicativo.

### Superfícies e texto

| Token | Valor | Função |
| --- | --- | --- |
| `surface.canvas` | `#050505` | Fundo principal, editor e terminal; Ink |
| `surface.base` | `#101111` | Painéis, barras e abas inativas; Charcoal |
| `surface.subtle` | `#0E1010` | Destaque discreto de região |
| `surface.raised` | `#161919` | Menus, popovers e diálogos |
| `surface.control` | `#191C1C` | Controles e divisões suaves; Graphite |
| `surface.hover` | `#202424` | Hover de controle |
| `surface.selected` | `#29252F` | Seleção e estado pressionado |
| `border.default` | `#252727` | Separação comum |
| `border.strong` | `#3B4242` | Separação reforçada e guias ativas |
| `text.disabled` | `#555B5A` | Conteúdo indisponível |
| `text.quiet` | `#697271` | Informação de baixa ênfase; revisar contraste no destino |
| `text.muted` | `#858A89` | Texto secundário; Ash |
| `icon.default` | `#AEB9BC` | Ícones e pontuação |
| `text.emphasis` | `#AEB9BC` | Ênfase intermediária |
| `text.primary` | `#C5C7C5` | Texto principal; Bone |
| `text.maximum` | `#FFFFFF` | Marca e realces pontuais |

Preto absoluto deixa de ser requisito. A variante atual usa Ink `#050505` no editor e Charcoal `#101111` nos painéis para evitar blocos pretos indistintos e criar uma hierarquia tonal confortável. Superfícies auxiliares devem ser distinguíveis sem parecerem cartões soltos. Componentes de UI usam Charcoal como base única; Graphite fica reservado a hover e estados ativos, enquanto bordas e acentos comunicam foco.

Preferir Bone a branco puro em grandes blocos de texto. Não usar `text.disabled` em informação necessária à tarefa. Linhas divisórias decorativas podem ser discretas; limites essenciais de controles precisam de contraste próprio.

### Acentos funcionais

| Token | Valor | Função principal |
| --- | --- | --- |
| `accent.cyan` | `#00A6C7` | Informação, links e foco |
| `accent.violet` | `#9D7FD1` | Variáveis especiais e seleção especial |
| `accent.rose` | `#C78995` | Keywords e operadores |
| `accent.amber` | `#CDA27C` | Strings, tags, avisos e literais |
| `accent.blue` | `#7FB8CC` | Tipos, constantes e construtores |
| `accent.sage` | `#83B89A` | Booleanos, sucesso e adições |

Essas cores são acentos semânticos de baixa frequência. A regra padrão é uma experiência predominantemente neutra, com aproximadamente 85–90% de preto e cinzas; Violet, Blue, Cyan e Sage aparecem em papéis definidos de sintaxe, foco, informação e sucesso. Não usar os cinco acentos ao mesmo tempo em uma mesma superfície.

Em peças de marca, usar aproximadamente 80–90% de campo preto/quase preto e o restante em texto e formas neutras. Acentos cromáticos ocupam áreas pequenas e têm função clara. O logo permanece monocromático. Em código e gráficos, a semântica determina a distribuição de cor; não introduzir cor apenas para tornar uma peça mais chamativa.

Fundos semânticos já usados no Zed: erro `#2A1414`, sucesso `#102319` e modificação `#211A0E`. Novos fundos devem permanecer escuros e ser testados com o texto sobreposto. Cor de sintaxe não implica estado: uma tag coral não representa um erro.

## 5. Sintaxe e terminais

### Mapeamento de sintaxe

| Categoria | Tratamento |
| --- | --- |
| Keywords | Violet; peso 600 quando suportado |
| Tipos e constantes | Blue |
| Funções e métodos | Lilac |
| Strings, tags e atributos | Amber |
| Números | Gold |
| Booleanos | Sage |
| Propriedades e variáveis membro | Mist |
| Variáveis comuns e conteúdo embutido | Bone |
| Operadores e escapes | Violet e Blue conforme a função |
| Pontuação | `#697271` |
| Comentários | Slate; itálico opcional conforme fonte e aplicativo |
| Títulos e links no conteúdo | Bone e Cyan em links; títulos podem usar peso 600 |

Manter essa correspondência entre linguagens sempre que houver categorias equivalentes. Parsers e escopos diferentes podem exigir adaptações. Documentar os mapeamentos específicos; evitar criar uma paleta independente por linguagem. A sintaxe deve parecer um código organizado, não um arco-íris: cada cor tem poucos papéis e as variáveis comuns permanecem neutras.

O tema Umbra usa `#697271` em comentários e `#858A89` em comentários de documentação. Strings, números e funções recebem cor suave para facilitar a varredura; variáveis comuns permanecem em Bone para evitar ruído.

### Terminal integrado e terminais externos

Manter fundo preto e texto Bone. Preservar a semântica de erro, sucesso e aviso das aplicações de terminal. Verificar cores normais, brilhantes, texto invertido, seleção, cursor e sequências com fundo explícito.

| ANSI | Normal atual | Brilhante atual |
| --- | --- | --- |
| Black | `#000000` | `#4E4E4E` |
| Red | `#8A8A8A` | `#B8B8B8` |
| Green | `#A0A0A0` | `#D0D0D0` |
| Yellow | `#989898` | `#C8C8C8` |
| Blue | `#808080` | `#B0B0B0` |
| Magenta | `#909090` | `#C0C0C0` |
| Cyan | `#A8A8A8` | `#E0E0E0` |
| White | `#B0B0B0` | `#FFFFFF` |

Esta tabela registra uma implementação dark charcoal inicial, não uma paleta terminal já validada em todos os usos. Os acentos ANSI são suaves e devem aparecer em baixa frequência. ANSI Black sobre o fundo Ink pode desaparecer; usar texto e indicadores da aplicação para preservar contexto. Testar aplicações reais antes de publicar uma adaptação de terminal.


## 6. Tipografia

A assinatura escrita usa caixa baixa, sem espaçamento expandido. Ela apoia a apresentação do UM e não é um wordmark proprietário. Fonte de execução nas pranchas: DejaVu Sans; fallback sans-serif. Nenhum arquivo de fonte é distribuído.

Títulos: até duas linhas, alinhados à esquerda, entrelinha 1–1,05, tracking entre -0,02 e -0,04 em. Corpo: 16 px / 1,5, 45–70 caracteres por linha. Metadados: 13–14 px, caixa alta e tracking de 0,12 em. Relação título/corpo de aproximadamente 3:1 em peças editoriais. Evitar condensar artificialmente os glifos.

Interfaces usam fonte de sistema; código preserva a escolha do usuário. Não impor fonte, zoom ou ligaduras em temas externos.

## 7. Forma, composição e imagem

Limiar mestre: percurso `M0 0 V150 Q0 270 120 270 H360 L480 150`, traço 32, sem preenchimento. Invariantes: abertura superior, curva só à esquerda, saída diagonal à direita e terminais retos. Variam extensão da base, altura e escala conforme suporte; manter a curva visível e a diagonal ascendente. Nunca inverter os lados. Uma forma dominante por peça, sem padrões de múltiplos símbolos.

Grade de oito colunas, margens de aproximadamente 6%, título nas primeiras quatro colunas e forma no terço direito. Metadados repetem o eixo do título no rodapé. Em retrato, título vem antes da forma; em interfaces pequenas, omitir a forma se competir com a tarefa. Espaçamento em múltiplos de 4 px. Não moldar campos, textos ou botões no contorno do limiar.

Marca: aproximadamente 80–90% de campo preto/quase preto, restante dividido entre forma cinza e texto claro; não é proporção obrigatória em telas funcionais. A paleta isolada não distingue Umbra.

Imagery: abstrações de contorno e sombra com um assunto dominante. Fotografias, quando usadas, recebem tratamento acromático e oclusão lateral seguindo a mesma curva/diagonal; preservar detalhes necessários à interpretação. Sem neon, efeitos metálicos ou brilhos decorativos.

O [wallpaper](branding/umbra/applications/wallpaper.svg) mantém mais da metade esquerda livre e revela o limiar em cinza muito escuro. O baixo contraste dessa forma é intencional e apenas decorativo. Os vídeos preexistentes em `wallpapers/` são coleção anterior; não implicam autoria ou autorização de redistribuição.

## 8. Movimento e comportamento

Assinatura proposta: imagem imóvel revelada por máscara ao longo do limiar, da curva esquerda para a saída direita, em 280–360 ms, com desaceleração `cubic-bezier(0.2,0,0,1)`. Uma execução por entrada explícita; sem loops decorativos. Com `prefers-reduced-motion: reduce`, mostrar o estado final imediatamente. Movimento descrito, ainda sem protótipo implementado.

Texto essencial e controles ficam disponíveis durante a revelação. Estados de hover podem mudar luminância em 120–160 ms. Foco usa indicador visível, seleção usa marcador estável e carregamento inclui descrição textual. Manter cursor nativo e anatomia dos controles. Não tentar introduzir animação em formatos de tema que não a suportam.

## 9. Acessibilidade e anti-padrões

Texto funcional usa Bone ou Ash sobre preto; cinzas baixos ficam em decoração ou estados realmente indisponíveis. Contraste de textos, limites essenciais e foco deve ser verificado no destino. Não confiar apenas em cor para comunicar erro, sucesso ou seleção.

Enfraquecem o sistema: M sobre U, coruja imposta às letras, paletas por integração, preto com monoespaçada sem o limiar, gradientes decorativos, cartões arbitrariamente recortados, títulos ilegíveis, movimento contínuo e formas sobre texto. O nome sozinho não torna uma composição exclusiva.

## 10. Adaptação para aplicativos externos

Para cada novo tema:

1. Consultar o formato e as propriedades suportadas pelo aplicativo na versão alvo.
2. Mapear superfícies, texto, estados, sintaxe e terminal para as funções deste guia.
3. Documentar campos sem equivalente e cores herdadas do aplicativo.
4. Validar o arquivo com as ferramentas apropriadas ao formato.
5. Inspecionar o tema no aplicativo, com conteúdo real, incluindo menus, busca, seleção, erros, diffs e painéis.
6. Registrar versão testada, instalação, limitações, capturas reais e changelog.

A [implementação do Zed](themes/zed/umbra/umbra.json) é a primeira referência concreta. Ela ainda não representa cobertura completa de todos os estados ou validação visual em todos os contextos. Um JSON sintaticamente válido não comprova conformidade com o schema nem qualidade visual no aplicativo.

Quando uma plataforma exigir ajustes, manter as funções das cores e documentar a diferença. Não prometer compatibilidade com versões que não foram verificadas.


## 11. Entregáveis e manutenção

`branding/umbra/logo/` contém os vetores do símbolo e avatar; `applications/` contém wallpaper e teste de troca de nome; `exports/` reúne PNGs derivados. `system.svg` apresenta a direção e a peça sem marca; `stress.svg` reúne as provas de reprodução. [README dos assets](branding/umbra/README.md).

Construção vetorial autoral assistida por Codex. Nenhum bitmap gerado é usado como original. As fontes não são empacotadas. Não presumir licença geral de distribuição para o repositório. Caminhos publicados são estáveis, versões do tema são independentes do branding.

## 12. Validação e brief

As provas de monocromia, redução, desfoque, oclusão e retirada da assinatura foram renderizadas e inspecionadas. A troca por Nord ainda é plausível: layout e preto têm baixa exclusividade isolados. O [relatório](branding/umbra/REVIEW.md) registra notas conservadoras e protocolo de cinco segundos, pendente de participantes.

Brief: “Criar para Umbra a partir do limiar entre sombra e conteúdo. Usar UM horizontal com haste comum, limiar aberto com curva esquerda e saída diagonal direita, campo preto dominante, títulos curtos e metadados alinhados. Variar escala e extensão mantendo a direção. Demonstrar uma aplicação sem nome, logo e slogan. Preservar legibilidade e comportamento nativo.”

## Histórico

- **0.4.1 — 2026-09-05:** removido o ramal `M72 68V100`; a curva do U segue diretamente para a entrada do M em um único percurso, sem ramificação. Vetores e PNGs atualizados.
- **0.6.0 — 2026-09-05:** UI do Zed consolidada em Charcoal; variações de superfície removidas de painéis, abas, menus e controles.
- **0.4.0 — 2026-09-05:** reconstrução da pasta branding; UM horizontal substitui símbolo empilhado e coruja; limiar assimétrico substitui V central. Novos vetores, aplicações, provas e avaliação. JSON dos temas preservado.
- **0.3.0 — 2026-09-05:** tema Zed acromático, sintaxe por luminância, peso e itálico.
- **0.2.0 — 2026-09-05:** primeira revisão pela skill; direção empilhada posteriormente substituída.
- **0.1.0 — 2026-09-05:** consolidação inicial da identidade.
