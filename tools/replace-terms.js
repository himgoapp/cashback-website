#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IGNORES = ['node_modules', 'build', '.git', 'tools'];

const replacements = [
  { from: /rakeback\.com/gi, to: 'cashback.com' },
  { from: /Rakeback/g, to: 'Cashback' },
  { from: /rakeback/gi, to: 'cashback' },
  { from: /RAKEBACK/g, to: 'CASHBACK' },
  // new regex to catch both "rackback" and the misspelled "rackbackk" so leftovers get converted
  { from: /rackbackk?/gi, to: 'cashback' },
  { from: /POKER/g, to: 'SHOPPING' },
  { from: /Poker/g, to: 'Shopping' },
  { from: /poker/g, to: 'shopping' }
];

function shouldIgnore(filePath) {
  return IGNORES.some((p) => filePath.includes(path.sep + p + path.sep));
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (shouldIgnore(full)) continue;
    if (entry.isDirectory()) files.push(...walk(full));
    else files.push(full);
  }
  return files;
}

function processFile(filePath, apply) {
  const ext = path.extname(filePath).toLowerCase();
  // target mostly text files
  const textExt = ['.js', '.jsx', '.ts', '.tsx', '.html', '.css', '.json', '.md'];
  if (!textExt.includes(ext)) return 0;
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  for (const r of replacements) {
    if (r.from.test(content)) {
      content = content.replace(r.from, r.to);
      changed = true;
    }
  }
  if (changed) {
    if (apply) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated:', path.relative(ROOT, filePath));
    } else {
      console.log('Would update:', path.relative(ROOT, filePath));
    }
    return 1;
  }
  return 0;
}

function main() {
  const args = process.argv.slice(2);
  const apply = args.includes('--apply');
  console.log(apply ? 'Running apply mode' : 'Running dry-run (no files will be changed)');
  const files = walk(ROOT);
  let total = 0;
  for (const f of files) {
    total += processFile(f, apply);
  }
  console.log(`Processed ${files.length} files, modified ${total} files.`);
  if (!apply) console.log('Rerun with --apply to write changes.');
}

if (require.main === module) main();
