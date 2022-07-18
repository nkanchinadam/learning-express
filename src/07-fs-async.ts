const { readFile, writeFile } = require('fs');

console.log('start');
readFile('./src/content/first.txt', 'utf8', (err, result) => {
  if (err) {
    return;
  }
  const first = result;
  console.log(first);

  readFile('./src/content/second.txt', 'utf8', (err, result) => {
    if (err) {
      return;
    }
    const second = result;
    console.log(second);

    writeFile('./src/content/result-async.txt', 'Here is the result', (err, result) => {
      if (err) {
        return;
      }
      console.log('done with this task');
    });
  });
});
console.log('starting next task')