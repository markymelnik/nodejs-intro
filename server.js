import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('I made this using Node.js'); 
  } else if (req.url === '/test') {
    res.end('Test Page');
  } else

  res.end(`
    <h1>Oops!</h1>
    <a href='/'>Home </a>
  `)
  
})

server.listen(8000);