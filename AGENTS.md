# Repository Guidelines

## Project Structure & Module Organization
This repository is currently empty (no tracked files besides `.git`). As you add content, keep a clean, predictable layout. Suggested baseline:

- `index.html` at the repo root for GitHub Pages entry.
- `assets/` for images, fonts, and media.
- `styles/` for CSS.
- `scripts/` for JavaScript.
- `tests/` if automated checks are introduced.

If you introduce a build system, keep generated output in `dist/` and avoid committing it unless required for deployment.

## Build, Test, and Development Commands
No build or test tooling is defined yet (no `package.json`, `Makefile`, or CI config found). When you add tooling, document commands in `README.md` and keep them simple. Example targets to add:

- `npm run dev` for local preview.
- `npm run build` for production output.
- `npm test` for automated checks.

## Coding Style & Naming Conventions
Until formatter configs exist, follow these defaults:

- Indentation: 2 spaces for HTML/CSS/JS and 4 spaces for shell/Python.
- Filenames: kebab-case for assets and CSS files (e.g., `hero-banner.css`).
- JavaScript: `camelCase` for variables/functions, `PascalCase` for classes.

When you add a formatter or linter, commit its config and update this guide.

## Testing Guidelines
No tests exist yet. If you add tests:

- Place them under `tests/`.
- Use `*.test.js` naming.
- Prefer lightweight tooling (e.g., Playwright for UI or Vitest for unit tests) and document how to run them.

## Commit & Pull Request Guidelines
There is no Git history to infer a commit style yet. Until one exists, use concise, imperative messages such as:

- `Add landing page scaffold`
- `Fix nav spacing on mobile`

Pull requests should include:

- A short description of the change and motivation.
- Linked issue (if applicable).
- Screenshots or a GIF for UI changes.

## Security & Configuration Tips
Do not commit secrets, API keys, or `.env` files. Store credentials outside the repo and document any required environment variables in `README.md`.
