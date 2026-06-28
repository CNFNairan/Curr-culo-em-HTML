# Projeto Recriação Responsiva — Capítulo 10

## Autor

Cauê Nairan Ferreira

## Site Escolhido

Spotify

## Link do Site Original

https://www.spotify.com/

## Objetivo Visual do Projeto

Criar uma reinterpretação responsiva e moderna da homepage do Spotify, focando na exibição fluida de listas de reprodução, álbuns em destaque e uma seção hero de impacto.

## Tecnologias Utilizadas

- HTML5 Semântico
- CSS3 Avançado (Flexbox e CSS Grid)
- Tipografia Fluida com a função `clamp()`
- Media Queries focadas na estratégia Mobile-First
- Custom Properties (Variáveis CSS) integradas com `prefers-color-scheme`

## Estratégia Responsiva Utilizada

Adoção estrita do desenvolvimento **Mobile-First**, garantindo que a experiência em telas pequenas (smartphones) seja o alicerce estilístico. O layout expande-se progressivamente através do uso de `min-width` à medida que o espaço de tela aumenta.

## Breakpoints Implementados

- Base: Telas mobile (< 576px)
- Breakpoint 1: `576px` (Smartphones grandes / Pequenos Tablets)
- Breakpoint 2: `768px` (Tablets em modo retrato)
- Breakpoint 3: `1024px` (Desktops e Laptops)

## Principais Adaptações Realizadas

- O menu de navegação colapsa de uma lista vertical simples no mobile para uma barra horizontal distribuída no desktop.
- A seção de cards de música deixa de ser uma lista em coluna única no mobile para se tornar um grid responsivo dinâmico com até 4 colunas em desktops.

## Principais Dificuldades

- Sincronização e calibração das proporções de fontes fluidas usando `clamp()` combinando unidades de viewport (`vw`) e absolutas (`rem`).
- Gerenciamento semântico do contraste e transição automática de cores usando a media query `prefers-color-scheme`.

## Capturas de Tela do Projeto

_(Adicione as suas imagens aqui dentro da pasta assets/images/ quando finalizar a execução no navegador)_

- ![Versão Mobile](./assets/images/screenshot-mobile.jpg)
- ![Versão Tablet](./assets/images/screenshot-tablet.jpg)
- ![Versão Desktop](./assets/images/screenshot-desktop.jpg)
