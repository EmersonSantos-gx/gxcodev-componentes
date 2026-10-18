/** Servidor local sem dependências: npm start. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const port = Number(process.env.PORT || 5500);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8'
};

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let path = resolve(root, '.' + pathname);
    if (path !== resolve(root) && !path.startsWith(resolve(root) + sep)) {
      response.writeHead(403).end('Acesso negado');
      return;
    }
    if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
    const data = await readFile(path);
    response.writeHead(200, { 'Content-Type': mime[extname(path)] || 'application/octet-stream' });
    response.end(data);
  } catch {
    response.writeHead(404).end('Arquivo não encontrado');
  }
});
server.on('error', (error) => {
  console.error(`Não foi possível iniciar o servidor: ${error.message}`);
  process.exitCode = 1;
});
server.listen(port, '127.0.0.1', () => {
  console.log(`Gxcodev: http://localhost:${port}`);
  console.log('Encerre com Ctrl+C.');
});
