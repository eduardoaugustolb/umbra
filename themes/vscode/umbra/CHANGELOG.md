# Changelog

## [0.3.0] - 2026-09-06

- classes e construtores (`new X`, `X()`, `extends X`) agora Lilac em vez de Slate: o Slate apagado dominava trechos com injeção de dependência;
- chaves de objeto (`{ chave: valor }`) em Amber também no token semântico (`property.declaration`), igual ao TextMate;
- `interface`, `enum`, `struct` e tipos genéricos continuam Slate — só classe (instanciável/chamável) mudou de família;
- ajuste só do VS Code, documentado aqui; Zed mantém o mapeamento original.

## [0.2.0] - 2026-09-06

- sintaxe bem mais específica sem cor nova: 38 regras TextMate e 38 tokens semânticos;
- `null`/`undefined` em Sage; regex e interpolação `${}` em Rose; `this`/`super`, decoradores e anotações em Violet;
- parâmetros em Mist itálico; `console`/`process` e chaves de JSON/YAML em Slate Blue; chaves de objeto em Amber;
- `<tags>` continuam Amber mas os `<>` viraram Ash; colchetes em Ash; funções/métodos declarados em Lilac bold;
- Outline (symbolIcons) acompanha as mesmas cores da sintaxe.

## [0.1.0] - 2026-09-06

- primeira versão do `Umbra` para VS Code, como extensão com duas variantes `Umbra` e `Umbra Ink`;
- workbench unificado em Charcoal `#101111`; variante Ink usa editor/terminal em Ink `#050505`;
- sintaxe mapeada do Zed: keywords/operadores Rose bold, funções Lilac, tipos/constantes Slate Blue, strings/tags Amber, números Gold, booleanos Sage, especiais Violet;
- terminal ANSI, diffs, diagnósticos (erro/sucesso/aviso) e seleção calibrados com os mesmos tokens do Zed;
- `semanticTokenColors` com `semanticHighlighting` ativado para linguagens com provedor semântico.
