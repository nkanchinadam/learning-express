const { createReadStream } = require('fs');

const stream = createReadStream('./src/content/big.txt', { highWaterMark: 90000, encoding: 'utf8' });

// default 64kb
// last buffer - remainder
// highWaterMark - control size

stream.on('data', (result: any) => {
  console.log(result);
});

stream.on('error', (err: any) => {
  console.log(err);
})