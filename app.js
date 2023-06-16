import http from 'http';
import { readFileSync } from 'fs';

const homePage = readFileSync('./index.html');
const homeStyle = readFileSync('./styles.css');

const server = http.createServer((req, res) => {

  const url = req.url;

  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(homePage);
    res.end();
  } else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css'});
    res.write(homeStyle);
    res.end();
  } else if (url === '/nice') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write(`<h1>nice</h1>`);
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write(`<h1>Page Not Found</h1>`);
    res.end();
  }
  
});

server.listen(5000);