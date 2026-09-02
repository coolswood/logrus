const path = require('path');
const fs = require('fs');

const distDir = 'C:/Projects/logrus/dist';

const server = Bun.serve({
  port: 4321,
  hostname: '0.0.0.0',
  fetch(req) {
    const url = new URL(req.url);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';

    let filePath = path.join(distDir, pathname);
    
    // If directory, look for index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    // If file doesn't exist, try with .html
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }

    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return new Response(Bun.file(filePath));
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`Logrus Web Server running at http://localhost:${server.port}`);
