# Umbra — briefing da landing page e do protótipo

Status: planejamento para protótipo. Documento consolidado em 2026-09-05 a partir da conversa de direção criativa.

## 1. Objetivo

Apresentar o que é a Umbra, por que foi criada e quais funcionalidades oferece atualmente, em uma experiência linear conduzida pelo scroll.

“Mostrar o workspace” significa contar a história do projeto. Imagens do ambiente e das ferramentas servem como demonstração concreta dessa história.

A página deve ter no máximo três seções de conteúdo e um footer. Essa divisão organiza o HTML e a narrativa; o visitante deve perceber um percurso contínuo, como um conto, sem sensação de troca de seção.

## 2. Requisitos acordados

- Next.js como base, com React.
- Lenis para suavização do scroll.
- GSAP e ScrollTrigger para conduzir o storytelling.
- Interatividade e continuidade narrativa também em dispositivos mobile.
- Performance considerada desde a concepção.
- Direção visual ligada ao branding existente da Umbra.
- Autenticidade como requisito central. O nível de ambição visual citado é o de experiências encontradas no Awwwards; nenhuma referência específica foi selecionada para reprodução.
- Parallax pode integrar a experiência quando contribuir para o significado e a percepção espacial.
- Three.js permanece em discussão; sua inclusão não está aprovada como decisão de implementação.

## 3. Base de marca

Referência principal: [DESIGN.md](DESIGN.md). Assets: [branding/umbra](branding/umbra/README.md).

Conceito existente: **“Limiar: a sombra delimita, o conteúdo aparece.”**

Umbra é um sistema visual para transformar ferramentas digitais em um ambiente coerente, calmo e reconhecível. A página deve comunicar atenção, continuidade e uso intencional de contraste e cor.

Elementos que orientam o protótipo:

- Campo Ink `#050505` e superfícies Charcoal `#101111`.
- Texto principal Bone `#C5C7C5`, com hierarquia legível.
- Cor concentrada em funções concretas, como sintaxe, estado e ação.
- Limiar assimétrico com curva à esquerda e saída diagonal à direita.
- Monograma UM preservado, sem deformação ou efeitos sobre o símbolo.
- Títulos curtos alinhados à esquerda e metadados discretos.
- Imagens e recortes das ferramentas como evidência do produto.

A skill de identidade visual orientou a proposta de usar o limiar, a composição e o movimento como mecanismos recorrentes de reconhecimento. Sua eficácia e exclusividade ainda precisam ser avaliadas; não são qualidades comprovadas.

## 4. Conteúdo e percurso narrativo

Os textos abaixo são propostas de copy para experimentar no protótipo, não textos finais aprovados.

| Momento | Mensagem | Evidência visual | Passagem para o próximo momento |
| --- | --- | --- | --- |
| 1 — O que é | “Suas ferramentas. Uma mesma atmosfera.” Umbra é um sistema visual que conecta ferramentas digitais em um ambiente coerente, calmo e reconhecível. | O limiar revela parte de uma ferramenta, já oferecendo uma leitura concreta do produto. | A abertura se amplia e permite perceber que a ferramenta faz parte de um conjunto. |
| 2 — Por que existe | “O foco continua de uma ferramenta para outra.” Criada para reduzir o ruído visual entre os espaços de trabalho, com superfícies consistentes e cor usada com intenção. | Detalhes de superfícies, hierarquia e sintaxe mostram as escolhas do sistema. | O enquadramento acompanha as relações entre ferramentas e torna o conjunto compreensível. |
| 3 — O que oferece hoje | “Uma identidade que já habita seu fluxo.” Apresentar as integrações e a coleção atual. | Os elementos já vistos ganham nome, contexto e acesso aos materiais disponíveis. | A composição se estabiliza para leitura e ação, seguida do footer. |

As funcionalidades devem aparecer durante a explicação e ser consolidadas ao final. Exemplo: falar de cor com função enquanto se mostra a sintaxe do Zed; explicar continuidade enquanto o enquadramento alcança Kitty e Starship.

### Oferta atual a apresentar

Conforme o [README](README.md) do projeto:

- **Zed:** tema dark charcoal, com sintaxe semântica e acentos controlados. Destino: [guia do Zed](themes/zed/umbra/README.md).
- **Kitty:** tema para terminal, com superfícies e paleta coordenadas. Destino: [guia do Kitty](themes/kitty/umbra/README.md).
- **Starship:** configuração de prompt compacto com contexto Git e runtimes discretos. Destino: [guia do Starship](themes/starship/umbra/README.md).
- **Wallpapers:** coleção existente no repositório. Conferir seleção e direitos de cada asset antes de incorporá-lo à página; sua presença na coleção não comprova autoria ou autorização de redistribuição.

Evitar apresentar ícones, ambientes gráficos futuros ou integrações planejadas como funcionalidades já entregues. A descrição pública deve acompanhar o estado real dos arquivos e guias.

### Footer

Fechamento compacto com identidade Umbra, documentação, repositório e licença. Manter continuidade de fundo, alinhamentos e ritmo com a composição anterior.

## 5. Linguagem de interação

Direção proposta: **um plano-sequência controlado pelo scroll**.

Um ambiente visual persistente atravessa os três momentos. O limiar revela, o enquadramento explora e a composição final reúne o conteúdo apresentado. O final de cada momento deve conter visualmente o começo do próximo.

- Cada gesto de scroll produz avanço perceptível da narrativa.
- O visitante determina o ritmo e pode voltar pelo mesmo percurso.
- Evitar encaixe automático de scroll, substituição de slides e mudanças abruptas de fundo.
- Evitar longos trechos fixos que exigem vários gestos apenas para trocar uma frase.
- Textos essenciais e controles permanecem legíveis e acessíveis durante as transições.
- Pinning, se necessário, deve ter duração justificada pela transformação que acontece na tela.
- O footer deve surgir como encerramento natural do percurso.

### Movimento como explicação

Cada animação precisa revelar algo sobre a Umbra:

- Sombra e oclusão apresentam o conteúdo.
- Continuidade entre ferramentas demonstra coerência visual.
- Parallax estabelece relações entre camadas, com amplitude controlada.
- Estabilização final permite examinar a oferta e acessar os guias.

O guia atual propõe revelações breves por entrada explícita. A landing experimentará uma adaptação vinculada ao scroll, preservando a mesma lógica visual. Duração, reversibilidade e extensão desse comportamento serão avaliadas no protótipo antes de uma eventual atualização do guia.

## 6. Mobile

Mobile faz parte da concepção inicial. A experiência deve manter o storytelling e a interatividade por scroll e toque.

- Composição própria para retrato.
- Mesmos acontecimentos e mensagens do desktop, com enquadramentos adequados à tela.
- Quando o desktop mostrar ferramentas lado a lado, o mobile poderá percorrê-las em sequência, mantendo referências visuais de continuidade.
- Ajustar amplitude do parallax, distâncias e quantidade de elementos simultâneos.
- Nenhuma informação ou ação essencial pode depender de hover.
- Preservar o gesto vertical, o acesso aos controles e a possibilidade de retornar pelo percurso.
- Verificar mudanças de altura do viewport causadas pelas barras do navegador.
- Evitar tratar a versão mobile como uma simples remoção das animações.

A preferência de movimento reduzido é uma adaptação de acessibilidade independente do tamanho da tela: apresentar o conteúdo completo e as ações sem exigir a travessia animada.

## 7. Direção técnica e performance

As skills solicitadas são `gsap-scrolltrigger`, `gsap-performance`, `gsap-frameworks` e `gsap-react`. Para Next.js, a implementação específica segue os padrões React; os princípios gerais de montagem, escopo e limpeza complementam essa base.

- Manter conteúdo semântico em HTML e executar animações no ciclo de vida do cliente.
- Usar `useGSAP()` com escopo por componente e limpeza das animações.
- Integrar Lenis e ScrollTrigger por um único ciclo de atualização, sem duplicar loops de animação.
- Remover listeners e callbacks de ticker e destruir a instância Lenis ao desmontar seu proprietário.
- Criar ScrollTriggers na ordem do documento e recalcular posições quando fontes, imagens ou outras mudanças alterarem o layout.
- Preferir `transform` e `opacity` para movimento.
- Aplicar `will-change` somente onde necessário; limitar camadas grandes e trabalho simultâneo.
- Não criar timelines nem atualizar estado React a cada frame de scroll.
- Se houver pinning, animar os elementos internos em vez do elemento fixado.
- Medir o custo da máscara do limiar. Caso necessário, simplificar sua implementação preservando o efeito de revelação.
- Reservar dimensões dos assets para evitar mudanças inesperadas de layout.
- Verificar legibilidade, foco de teclado, alvos de toque e `prefers-reduced-motion`.

Não há promessa de taxa de quadros antes da medição. Validar em mobile e registrar o ambiente testado; emulação de viewport não comprova performance em aparelho físico.

Referências técnicas consultadas:

- [Lenis — integração com GSAP ScrollTrigger](https://github.com/darkroomengineering/lenis#gsap-scrolltrigger)
- [GSAP com React](https://gsap.com/resources/React/)
- [ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)

## 8. Escopo do protótipo

O protótipo deve permitir experimentar a história completa com até três seções e um footer, incluindo os textos exploratórios e a oferta atual.

A primeira passagem a resolver é **abertura → entrada no ambiente**, em desktop e mobile. Ela valida o mecanismo de continuidade que será estendido até o fechamento.

Ordem de execução proposta:

1. Estruturar conteúdo, destinos e composição estática responsiva.
2. Construir a abertura e sua transição para a explicação do projeto.
3. Estender o percurso até as funcionalidades atuais e o footer.
4. Integrar e ajustar Lenis, ScrollTrigger e parallax.
5. Verificar mobile, acessibilidade e custo de renderização.
6. Revisar o protótipo com base na sensação de continuidade e na compreensão da mensagem.

Usar assets existentes adequados ou representações explicitamente provisórias. Não apresentar uma simulação como captura real do produto.

## 9. Critérios de aceitação

- É possível compreender o que é Umbra, por que existe e o que oferece hoje.
- Há no máximo três seções de conteúdo e um footer.
- O percurso parece uma história contínua ao avançar e ao voltar.
- Há referências visuais persistentes durante as transições.
- As funcionalidades são demonstradas em relação ao argumento narrativo.
- A interação continua funcionando em telas mobile.
- Textos não exigem espera artificial ou precisão excessiva no scroll para leitura.
- Links e controles funcionam por teclado e toque.
- A versão com movimento reduzido entrega todo o conteúdo e as ações.
- Não há overflow horizontal acidental, saltos relevantes de layout ou vazamentos de animações ao remontar.
- A identidade mantém o limiar, a relação tonal e a composição reconhecíveis mesmo ao ocultar nome e logo em uma revisão visual.

## 10. Decisões ainda abertas

- Copy final, idioma público e rótulo do CTA principal.
- Seleção de capturas e wallpapers para a apresentação.
- Enquadramentos finais, duração do percurso e necessidade exata de pinning.
- Detalhes de tipografia para a web dentro da direção de marca.
- Uso de Three.js, condicionado a uma contribuição concreta para a narrativa.
- Destino de hospedagem e publicação, fora do escopo deste documento.

Este documento registra o briefing e a proposta de execução. Não implica que o protótipo já foi implementado nem que as escolhas exploratórias já foram aprovadas como design final.
