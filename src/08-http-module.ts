const http = require('http');

const server = http.createServer((req, res) => {
  // req is the incoming request - object with a lot of useful information
  // res is the outgoing response that we send back

  if (req.url === '/') {
    res.end('Welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is a short history of us');
    return;
  }
  res.end(`<h1>Oops!</h1><p>We can't find the page that you are looking for</p><a href="/">back home</a>`);
});

server.listen(5000);