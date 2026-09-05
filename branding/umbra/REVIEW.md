# Avaliação da reconstrução

2026-09-05. Fonte metodológica: [memorable-visual-identity](/home/eduardoaugustolb/.agents/skills/memorable-visual-identity/SKILL.md). Contexto, auditoria, conceito, assets, sistema, provas e documentação seguem a sequência da skill. Notas e proporções são decisões de projeto, não resultados científicos.

## Contexto e auditoria

Umbra reúne temas e wallpapers para pessoas que personalizam ferramentas de desenvolvimento. Os arquivos do projeto estabelecem preto OLED e interfaces acromáticas como restrições. O problema informado pelo usuário é leitura MU no símbolo empilhado. Objetivo: tornar a ordem UM explícita, mantendo uma linguagem repetível nos demais materiais.

Consulta textual às páginas oficiais em 2026-09-05:

| Referência | Evidência | Decisão para Umbra |
| --- | --- | --- |
| [Nord](https://www.nordtheme.com/) | Paleta azulada de inspiração ártica, grupos de cores e catálogo de ports | Não usar cor fria como assinatura |
| [Catppuccin](https://catppuccin.com/) | Posicionamento pastel, esquema comunitário e catálogo de ports | Evitar organizar a identidade em sabores cromáticos |
| [Dracula](https://draculatheme.com/) | Catálogo de temas, metáforas de castelo e caixão | Tema noturno sozinho não distingue Umbra |

Limite: a consulta confirma posicionamento e conteúdo; não permite atribuir com segurança fontes, animações ou uma auditoria visual completa dessas marcas. Monoespaçadas, preto e metáforas noturnas são convenções apontadas pela skill, não uma descoberta quantitativa desta consulta. A oportunidade autoral é a combinação UM horizontal + limiar curvo/angular + composição de campo escuro. Exclusividade não foi comprovada.

## Decisão e refinamento

Na revisão 0.4.1, o feedback do usuário identificou um nó na ligação: o ramal `M72 68V100` prolongava a haste a partir do ponto onde a curva terminava. Esse ramal foi removido de todos os símbolos e aplicações. A curva cúbica chega a (72,68) com tangente vertical e continua pela subida até (72,16), formando um único percurso sem ramificação. Foram mantidos o peso 16 e os encontros chanfrados; a correção está na continuidade da construção. As exportações foram regeneradas e a junção foi reinspecionada em escala ampliada e na prancha de reduções. As notas de potencial abaixo não foram aumentadas por essa correção.

O M acima do U permitia uma ordem vertical MU. A reconstrução coloca o U antes do M no eixo habitual de leitura, com uma única haste compartilhada. O U tem curva aberta em cima; o M mantém duas diagonais e duas hastes. Não há olhos ou cabeça de animal a decifrar. O limiar das aplicações deriva da passagem curva/ângulo, sem reproduzir o monograma inteiro.

## Matriz de assets

As colunas de reconhecimento e exclusividade são hipóteses internas. Fame e uniqueness reais: não medidas.

| Asset | Potencial de reconhecimento | Potencial de exclusividade | Coerência | Repetibilidade |
| --- | --- | --- | --- | --- |
| UM horizontal com haste comum | Médio/alto | Médio: monogramas são frequentes | Alta | Alta |
| Limiar com curva esquerda e saída diagonal direita | Médio | Médio | Alta | Alta |
| Título curto / campo vazio / forma à direita | Médio | Baixo isoladamente | Alta | Alta |
| Caixa baixa na assinatura e metadados espaçados | Baixo isoladamente | Baixo | Média | Alta |
| Preto e cinzas | Baixo isoladamente | Baixo | Alta | Alta |

## Provas e limites

`system.svg` e `stress.svg` foram renderizados com Inkscape e inspecionados visualmente.

| Teste | Resultado da inspeção interna |
| --- | --- |
| Ordem das letras | U à esquerda e M à direita visíveis; a haste comum preserva ligação. Leitura humana espontânea ainda pendente |
| Monocromia / inversão / silhueta | Curva e diagonais preservadas sem dependência de cor |
| Redução em 16, 24, 32, 64 e 128 px | Em 16 px, curva e junção ficam pouco definidas. Recomendar 32 px ou mais |
| Desfoque | A oposição entre curva esquerda e ângulos à direita sobrevive; detalhes dos terminais se perdem |
| Oclusão | O M incompleto deixa de ser legível. Proibir recorte do símbolo |
| Retirada de logo, nome e slogan | Peça direita da prancha mantém limiar, hierarquia e distribuição. Há parentesco visual; isso não comprova identificação de Umbra |
| Troca por concorrente | `applications/competitor-swap.svg`: a composição continua plausível com Nord. O layout isolado tem exclusividade baixa; manter o limiar e construir associação por repetição |
| Entre suportes | Prancha editorial, avatar quadrado e wallpaper panorâmico materializados; aplicação real em interface não avaliada nesta entrega |
| Cinco segundos | Não realizado com participantes; protocolo abaixo |

Não declarar reconhecimento comprovado nem atribuir respostas a participantes inexistentes. Não buscar resolver a baixa exclusividade da paleta adicionando ornamentos.

## Notas internas de potencial (0–10)

| Critério | Nota | Motivo |
| --- | --- | --- |
| Distintividade | 6 | Ligação específica entre letras, mas território de monogramas concorrido |
| Potencial de reconhecimento | 7 | Ordem horizontal e duas anatomias legíveis |
| Coerência semântica | 8 | Sombra, limite e revelação conectam forma e aplicação |
| Força da forma | 7 | Funciona em monocromia e desfoque; frágil sob recorte |
| Identidade tipográfica | 4 | Comportamento consistente, fonte não exclusiva |
| Identidade compositiva | 6 | Limiar repete-se, mas layout aceita outra marca |
| Identidade de movimento | 3 | Regra documentada, sem protótipo animado |
| Flexibilidade entre meios | 7 | Vetor, avatar e wallpaper; impressão não testada |
| Consistência | 8 | Dois assets primários e poucas regras |
| Acessibilidade | 7 | Marca contrastante; tamanho mínimo e uso funcional precisam ser respeitados |
| Longevidade | 7 | Sem efeitos de moda; associação depende de exposição |

## Teste humano a executar

Apresentar o símbolo isolado durante cinco segundos, ocultar e perguntar “Quais letras você viu, em qual ordem?”. Não revelar UM antes. Repetir em 32 px, perguntar sobre dificuldade e registrar literalmente a resposta. Com 5–8 pessoas é possível detectar ambiguidades, não estimar reconhecimento populacional.

Mostrar uma peça assinada e, após outra tarefa, uma peça sem nome, logo e slogan, isolada do cabeçalho da prancha e misturada a referências. Perguntar o que recorda e a qual marca associa, aceitando “não sei”. Registrar participante anônimo, tamanho, tempo, resposta espontânea e familiaridade prévia. Se MU aparecer repetidamente, separar as hastes antes de insistir na fusão.
