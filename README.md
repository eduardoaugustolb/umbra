# Umbra

Coleção de wallpapers e temas para ferramentas de desenvolvimento e ambientes gráficos.

A identidade visual **Umbra** está documentada em [DESIGN.md](DESIGN.md), referência para novos temas, ícones, wallpapers e aplicações da marca.

Este é um projeto proprietário. Consulte o arquivo [LICENSE](LICENSE) antes de copiar, redistribuir, modificar ou incorporar qualquer conteúdo.

Veja a [nova prancha de identidade](branding/umbra/system.svg), os [arquivos da marca](branding/umbra/README.md) e a [avaliação do sistema](branding/umbra/REVIEW.md).

## Direção visual

- superfícies dark charcoal, com preto profundo usado no editor quando melhora a concentração;
- branco, cinza e preto na interface para reduzir ruído visual;
- cor apenas onde comunica sintaxe, estado, diagnóstico ou ação;
- cada tema deve documentar sua paleta, escopo e instruções de instalação;
- arquivos grandes de mídia ficam em `wallpapers/`, separados dos temas de software.

## Organização

```text
themes/
├── zed/<theme-family>/       # famílias de temas compatíveis com o Zed
├── kitty/<theme-family>/     # temas para o Kitty
├── starship/<theme-family>/  # prompts para o Starship
└── desktop/<theme-family>/   # temas para ambientes gráficos (futuro)
wallpapers/
├── static/                   # wallpapers estáticos (futuro)
└── animated/                 # wallpapers animados; vídeos existentes ainda ficam na raiz
```

Uma família do Zed é mantida em um diretório próprio para que variantes (por exemplo, OLED e Soft Black) possam evoluir sem misturar assets ou documentação. O JSON segue o schema oficial do Zed e deve ser validado antes de cada release.

Cada tema publicado, independentemente do aplicativo, deve possuir um `README.md` dentro do próprio diretório da família. Esse tutorial individual precisa explicar requisitos, instalação, atualização e remoção/reversão sem depender apenas da documentação global.

## Temas disponíveis

### Zed

- [Umbra](themes/zed/umbra/README.md) — dark OLED/AMOLED, interface monocromática e sintaxe com acentos controlados.

### Kitty

- [Umbra](themes/kitty/umbra/README.md) — terminal dark charcoal com ANSI semântico e superfícies unificadas.

### Starship

- [Umbra](themes/starship/umbra/README.md) — prompt compacto com contexto Git e runtimes discretos.

## Instalação local

As instruções de instalação ficam no `README.md` de cada família. Para o Zed, copie o JSON para `~/.config/zed/themes/` no Linux/macOS ou para `%USERPROFILE%\\AppData\\Roaming\\Zed\\themes\\` no Windows e selecione-o pelo `theme selector: toggle`. Para Kitty e Starship, prefira `include`/mesclagem para preservar configurações pessoais.

## Versionamento

Mudanças de paleta ou compatibilidade devem ser registradas no changelog da família. Use tags semver quando uma família estiver pronta para distribuição: `zed/umbra/v0.1.0`.
