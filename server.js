const path = require('path');
const fs = require('fs');

const distDir = path.resolve(__dirname, 'dist');

const port = parseInt(process.env.PORT || '4321', 10);

const server = Bun.serve({
  port,
  hostname: '0.0.0.0',
  fetch(req) {
    const url = new URL(req.url);
    let pathname = decodeURIComponent(url.pathname);
    if (pathname === '/') pathname = '/index.html';

    // Prevent Path Traversal (CWE-22)
    let filePath = path.resolve(distDir, '.' + pathname);
    if (!filePath.startsWith(distDir)) {
      return new Response('Forbidden', { status: 403 });
    }

    // If directory, look for index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    }

    // If file doesn't exist, try with .html
    if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
      filePath = filePath + '.html';
    }

    // Serve file with optimized Cache-Control headers
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      const ext = path.extname(filePath).toLowerCase();
      const isImmutableAsset = /\.(webp|png|jpg|jpeg|svg|ico|woff2|woff|ttf|css|js)$/.test(ext) || pathname.includes('/_astro/');
      
      const headers = {};
      if (isImmutableAsset) {
        headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      } else if (ext === '.html') {
        headers['Cache-Control'] = 'public, max-age=0, must-revalidate';
        headers['Content-Type'] = 'text/html; charset=utf-8';
      }

      return new Response(Bun.file(filePath), { headers });
    }

    // Serve custom 404 if available
    const notFoundPage = path.join(distDir, '404', 'index.html');
    const notFoundDirect = path.join(distDir, '404.html');
    const custom404 = fs.existsSync(notFoundPage) ? notFoundPage : (fs.existsSync(notFoundDirect) ? notFoundDirect : null);

    if (custom404) {
      return new Response(Bun.file(custom404), {
        status: 404,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
});

console.log(`Logrus Web Server running at http://localhost:${server.port}`);
