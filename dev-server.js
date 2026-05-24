const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown',
  '.json': 'application/json',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/') url = '/index.html';
  else if (url === '/11') {
    res.writeHead(301, { Location: '/admin-login.html' });
    res.end();
    return;
  }
  let fp = path.join(__dirname, url);
  fs.readFile(fp, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('404 Not Found');
      return;
    }
    let ext = path.extname(fp);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'text/plain' });
    res.end(data);
  });
}).listen(1111, () => {
  console.log('Server running at http://localhost:1111');
  console.log('Admin panel at http://localhost:1111/11');
});
