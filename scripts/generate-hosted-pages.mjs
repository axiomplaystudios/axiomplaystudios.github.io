import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const configPath = path.join(repoRoot, 'src/content/hosted-pages.json');

const hostedPages = JSON.parse(await fs.readFile(configPath, 'utf8'));

const pageStyles = `
      :root {
        color-scheme: light;
        --bg: #f5f8ff;
        --fg: #0b1220;
        --muted: #51607a;
        --surface: #ffffff;
        --border: #d7e0f0;
        --link: #1f5bff;
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        background: radial-gradient(circle at top, #ffffff 0%, var(--bg) 68%);
        color: var(--fg);
        font: 16px/1.6 Georgia, 'Times New Roman', serif;
      }
      main {
        max-width: 860px;
        margin: 0 auto;
        padding: 32px 20px 64px;
      }
      .card {
        background: var(--surface);
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 24px;
        box-shadow: 0 10px 30px rgba(11, 18, 32, 0.06);
      }
      .eyebrow {
        margin: 0 0 8px;
        color: var(--muted);
        font: 600 13px/1.2 system-ui, sans-serif;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      article :first-child { margin-top: 0; }
      article :last-child { margin-bottom: 0; }
      article h1, article h2, article h3 { line-height: 1.2; }
      article h1 { font-size: 2rem; }
      article h2 { margin-top: 2rem; font-size: 1.35rem; }
      article h3 { margin-top: 1.4rem; font-size: 1.05rem; }
      article p, article li { color: var(--fg); }
      article ul { padding-left: 1.25rem; }
      a { color: var(--link); }
`;

const renderPage = ({ canonicalUrl, title, bodyHtml }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="canonical" href="${canonicalUrl}" />
    <style>
${pageStyles}
    </style>
  </head>
  <body>
    <main>
      <div class="card">
        <p class="eyebrow">${hostedPages.eyebrow}</p>
        <article>${bodyHtml}</article>
      </div>
    </main>
  </body>
</html>
`;

for (const page of hostedPages.pages) {
  const sourcePath = path.join(repoRoot, page.sourcePath);
  const outputPath = path.join(repoRoot, 'public', page.path.replace(/^\//, ''), 'index.html');
  const markdown = await fs.readFile(sourcePath, 'utf8');
  const bodyHtml = renderToStaticMarkup(React.createElement(ReactMarkdown, null, markdown));
  const html = `${renderPage({ canonicalUrl: page.canonicalUrl, title: page.title, bodyHtml })}\n`;

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, html);
}
