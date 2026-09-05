# Umbra para Starship

Prompt compacto e semântico para o Starship. A maior parte permanece neutra; lilás identifica branch, azul-sálvia indica prontidão, rosa indica erro e os tons âmbar/dourado identificam runtimes detectados.

## Instalação

### Requisitos

- Starship instalado e inicializado no shell.
- Este repositório disponível localmente.

### Instalar

Como você já possui uma configuração pessoal, não substitua o arquivo inteiro. A partir da raiz do repositório, faça uma cópia de segurança:

```sh
cp "$HOME/.config/starship.toml" "$HOME/.config/starship.toml.backup"
```

Mescle as seções de `themes/starship/umbra/starship.toml` em `~/.config/starship.toml` e defina no arquivo pessoal:

```toml
palette = "umbra"
```

Se preferir testar isoladamente, execute:

```sh
STARSHIP_CONFIG=/caminho/absoluto/para/temas/themes/starship/umbra/starship.toml starship prompt
```

Esse comando serve apenas para testar o tema isoladamente. Para voltar ao arquivo pessoal, abra um novo shell ou remova a variável `STARSHIP_CONFIG` da sessão.

### Atualizar

Compare a nova versão com o arquivo pessoal e atualize somente as seções do Umbra. Depois, abra um novo shell para recarregar o prompt.

### Remover

Remova `palette = "umbra"`, as seções do tema e as referências a cores `umbra` do seu `starship.toml`. Se necessário, restaure a cópia de segurança:

```sh
mv "$HOME/.config/starship.toml.backup" "$HOME/.config/starship.toml"
```

Os símbolos de branch e runtimes são ASCII para não exigir uma Nerd Font. O símbolo de prompt pode ser trocado nas três chaves da seção `[character]` caso prefira uma variante tipográfica.

## Paleta

O tema reutiliza os mesmos tokens do Zed e do Kitty: `bone` para conteúdo principal, `muted` para informação auxiliar, `lilac` para contexto Git, `sage_blue` para estado normal, `rose` para falhas e `amber`/`gold` para contexto de execução.
