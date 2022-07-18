const { readFileSync, writeFileSync } = require('fs');

console.log('start');
const first = readFileSync('./src/content/first.txt', 'utf8')
const second = readFileSync('./src/content/second.txt', 'utf8')

console.log(first);

writeFileSync('./src/content/result-sync.txt', 'Here is the result', { flag: 'a' });

console.log('done with this task');
console.log('starting the next one');