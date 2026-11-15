# Beatriz Nascimento

Página pessoal minimalista em branco e cinza, feita com Astro e CSS, com versões em português e inglês e temas claro e escuro. Um pequeno script preserva a preferência de tema no navegador. Não usa fontes externas ou bibliotecas de ícones.

Contém identificação, GitHub, LinkedIn, e-mail, experiências profissionais na NexAtlas e no iFood Pago, skills, certificações e formação. A aba Blog abre uma página própria, ainda sem publicações. As rotas em português são `/` e `/blog/`; em inglês, `/en/` e `/en/blog/`. A troca de idioma preserva a página atual. O desenho estático em SVG acompanha o tema.

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Build e prévia

```sh
npm run build
npm run preview
```

O site estático é gerado em `dist/`. Textos, traduções, skills e períodos profissionais ficam em `src/data/content.ts`; os contatos, em `src/components/HomePage.astro`; o visual, em `src/styles/global.css`.

Para hospedar em outro subdiretório, configure `base` em `astro.config.mjs`. Para publicar no GitHub Pages, execute `npm run deploy`: o `predeploy` gera o site com o caminho `/portfolio` e o publica na branch `gh-pages`.
