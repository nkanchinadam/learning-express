const http = require('http');
const fs = require('fs');

const server = http.createServer((req: any, res: any) => {
  // all data is sent in one big chunk
  // const text = fs.readFileSync('./src/content/big.txt', 'utf8');
  // res.end(text);

  // data is sent in smaller chunks
  const fileStream = fs.createReadStream('./src/content/big.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(res);
  });
  fileStream.on('error', (err: any) => {
    res.end(err);
  });
})

server.listen(5000);