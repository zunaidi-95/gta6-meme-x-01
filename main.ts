// gta6-meme-x-01 entry: hands the post's address to the grader.
//
// The entry is the X post itself (a GTA 6 meme). This program only carries
// its address: it reads POST.json from the repository root, checks it names
// one post URL, and writes it unchanged to the output directory, where the
// gate reads it. No network, no clock, no files outside the repository, and
// two runs write the same bytes.
//
// Run it locally the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(botDir, 'POST.json');

let raw: string;
try {
  raw = readFileSync(postPath, 'utf8');
} catch (err) {
  console.error(`cannot read ${postPath}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch {
  console.error('POST.json is not valid JSON');
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be an object with a string "url" field');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'POST.json'), raw);
