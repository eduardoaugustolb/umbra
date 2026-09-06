# Umbra para VS Code

Tema dark para o VS Code inspirado em ambientes noturnos de baixo brilho. Usa charcoal em vez de preto absoluto para separar editor, painéis e controles; a sintaxe recebe poucos acentos frios e pouco saturados — mesma linguagem do Umbra para Zed.

Duas variantes incluídas:

| Tema | Fundo do editor | Painéis |
| --- | --- | --- |
| `Umbra` | Charcoal `#101111` | Charcoal `#101111` |
| `Umbra Ink` | Ink `#050505` | Charcoal `#101111` |

## Paleta

| Função | Cor | Uso |
| --- | --- | --- |
| Charcoal | `#101111` | editor (Umbra), terminal e componentes de UI |
| Ink | `#050505` | editor e terminal na variante Ink |
| Graphite | `#191C1C` | hover, linha ativa e estados interativos |
| Divider | `#252727` | bordas e divisores |
| Ash | `#858A89` | texto secundário e comentários de documentação |
| Bone | `#C5C7C5` | texto principal |
| Mist | `#B4BEC0` | propriedades, membros e rótulos |
| Lilac | `#B79BDD` | funções, métodos e atributos |
| Rose | `#C78995` | keywords e operadores (bold) |
| Violet | `#9D7FD1` | variáveis especiais |
| Slate Blue | `#A9B4C8` | tipos, constantes, construtores e escapes |
| Amber | `#CDA27C` | strings e tags |
| Gold | `#D0B07C` | números e avisos |
| Sage | `#83B89A` | booleanos e sucesso |
| Sage Blue | `#9AB7B0` | foco, links e informação pontual |

A regra é conter, não eliminar, a cor: cerca de 85–90% da experiência permanece em cinzas escuros e neutros. Variáveis comuns continuam em Bone para evitar ruído.

## Instalação fácil

### Você precisa de

- VS Code 1.80 ou superior.
- Este repositório disponível localmente.

### Instalar passo a passo (desenvolvimento local)

A partir da raiz do repositório, execute:

```sh
cp -r themes/vscode/umbra "$HOME/.vscode/extensions/umbra.umbra-theme-0.3.0"
```

Reinicie o VS Code, abra a paleta de comandos (`Ctrl-K Ctrl-T` / `Cmd-K Ctrl-T`) e escolha `Umbra` ou `Umbra Ink`.

Para o VS Code Insiders ou VSCodium, o diretório de extensões muda:

- Insiders: `$HOME/.vscode-insiders/extensions/umbra.umbra-theme-0.3.0`
- VSCodium: `$HOME/.vscode-oss/extensions/umbra.umbra-theme-0.3.0`

### Empacotar como .vsix (opcional)

Se tiver o `@vscode/vsce` instalado:

```sh
npm install -g @vscode/vsce
vsce package --cwd themes/vscode/umbra
code --install-extension themes/vscode/umbra/umbra-theme-0.3.0.vsix
```

### Atualizar

Repita o comando `cp -r` (ou reinstale o `.vsix`) sempre que baixar uma nova versão do tema e recarregue a janela (`Developer: Reload Window`).

### Remover

Remova somente a pasta instalada:

```sh
rm -rf "$HOME/.vscode/extensions/umbra.umbra-theme-0.3.0"
```

Isso não altera `settings.json` nem outras extensões. Se o tema ainda aparecer na lista, recarregue a janela.

## Compatibilidade

- formato: TextMate `tokenColors` + `semanticTokenColors` com `semanticHighlighting`;
- variantes: `Umbra` (vs-dark) e `Umbra Ink` (vs-dark);
- testado com: VS Code 1.80+ (validar na sua versão antes de publicar);
- não inclui: fonte, ícones de arquivo/produto, ligaduras ou comportamento — o tema mexe só com cores.

## Limitações conhecidas

- sem screenshots reais ainda — validar com conteúdo real (menus, busca, seleção, erros, diffs, painéis);
- `terminal.ansiBlack` acompanha o fundo do editor em cada variante; sobre fundos explícitos escuros ele pode sumir — comportamento herdado do mapeamento Zed;
- foco usa `#9AB7B0`; verificar contraste no seu monitor antes de considerar final.
