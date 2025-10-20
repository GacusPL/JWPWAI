// server.js
const http = require('http');
const pages = require('./pagesModule');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const page = pages.getPage(req.url);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });  res.end(page.body);
});

server.listen(PORT, () => {
  console.log(`Server działa: http://localhost:${PORT}`);
});
