/** Verifica sintaxe dos módulos e referências locais sem instalar pacotes. */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
function walk(path) {
  return readdirSync(path, { withFileTypes: true }).flatMap((entry) => {
    const file = resolve(path, entry.name);
    return entry.isDirectory() ? walk(file) : [file];
  });
}
let checked = 0;
for (const file of walk(root).filter((path) => extname(path) === '.js')) {
  const syntax = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (syntax.status !== 0) throw new Error(syntax.stderr);
  const source = readFileSync(file, 'utf8');
  for (const match of source.matchAll(/from\s+['"]([^'"]+)['"]/g)) {
    if (match[1].startsWith('.') && !existsSync(resolve(dirname(file), match[1]))) {
      throw new Error(`Import ausente em ${file}: ${match[1]}`);
    }
  }
  checked++;
}
console.log(`${checked} módulos verificados: sintaxe e imports locais válidos.`);
