# Axiomplay Studios Marketing Site

Premium, high-performance marketing site for Axiomplay Studios. Built with Vite + React + TypeScript and designed for GitHub Pages.

## Stack
- Vite + React + TypeScript
- CSS Modules + global design tokens
- ESLint + Prettier

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```
The production output is generated in `dist/`.

## GitHub Pages Deployment
This repo is set up for a GitHub Pages **user site** (`https://axiomplaystudios.github.io`).

1. Push to `main`.
2. GitHub Actions runs `.github/workflows/deploy.yml`.
3. The built `dist/` folder is deployed automatically.

If you later move to a project site, update `base` in `vite.config.ts`.

## Edit Site Content
All copy, links, and game data live in `src/content/siteContent.ts`.

- Update hero text, CTAs, and studio messaging in `siteContent.brand`.
- Add or edit games in `siteContent.games.list`.
- Edit press kit links and colors in `siteContent.pressKit`.
- Update contact details in `siteContent.contact`.
- Update Privacy/Terms content in `siteContent.legal`.

## Press Kit Assets
Assets are stored locally in `public/press-kit/`:
- `logo-pack.zip`
- `brand-colors.txt`
- `screenshots.zip`

## SEO + Metadata
- `index.html` includes OpenGraph, Twitter card, and JSON-LD metadata.
- `public/sitemap.xml` and `public/robots.txt` are included.
- Social preview image: `public/og-image.png`.

## Accessibility & Performance Notes
- Semantic sections, focus-visible styles, and keyboard-friendly nav.
- Lazy-loaded game images and lightweight SVG assets.
- Motion respects `prefers-reduced-motion`.
