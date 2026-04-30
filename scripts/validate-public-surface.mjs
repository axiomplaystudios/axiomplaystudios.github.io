import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const violations = [];

const readFileSafe = async (filePath) => {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return null;
  }
};

const ensureNoSourcePathInClientJson = async () => {
  const clientJsonPath = path.join(repoRoot, 'src/content/hosted-pages.json');
  const jsonText = await readFileSafe(clientJsonPath);

  if (jsonText && jsonText.includes('"sourcePath"')) {
    violations.push(`Found forbidden "sourcePath" key in ${path.relative(repoRoot, clientJsonPath)}`);
  }
};

const ensureNoAbsoluteLocalPathsInDocs = async () => {
  const docsDir = path.join(repoRoot, 'docs');
  const stack = [docsDir];
  const localPathPattern = /(?:^|[\s`'"])(\/home\/[^\s`'"]+|[A-Za-z]:\\[^\s`'"]+)/m;

  while (stack.length > 0) {
    const current = stack.pop();
    if (!current) {
      continue;
    }

    const entries = await fs.readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
        continue;
      }

      if (!entry.isFile() || !entry.name.endsWith('.md')) {
        continue;
      }

      const content = await readFileSafe(fullPath);
      if (content && localPathPattern.test(content)) {
        violations.push(`Found absolute local filesystem path in ${path.relative(repoRoot, fullPath)}`);
      }
    }
  }
};

const ensureNoOrphanGameAssets = async () => {
  const gamesDir = path.join(repoRoot, 'public/images/games');
  try {
    const files = await fs.readdir(gamesDir);
    if (files.length > 0) {
      violations.push(`Found disallowed orphan assets in public/images/games (${files.join(', ')})`);
    }
  } catch {
    // Directory doesn't exist, which is valid.
  }
};

await ensureNoSourcePathInClientJson();
await ensureNoAbsoluteLocalPathsInDocs();
await ensureNoOrphanGameAssets();

if (violations.length > 0) {
  console.error('Public-surface validation failed:');
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log('Public-surface validation passed.');
