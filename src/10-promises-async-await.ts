const { readFile, writeFile } = require('fs').promises;

//const util = require('util');
//const readFilePromise = util.promisify(readFile);
//const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile('./src/content/first.txt', 'utf8');
    const second = await readFile('./src/content/second.txt', 'utf8');
    await writeFile('./src/content/result-async-await.txt', `THIS IS AWESOME: ${first} ${second}`);
    console.log(first);
    console.log(second);
  }
  catch (error: any) {
    console.log(error);
  }
}

start();

//const getText = (path: string) => {
//  return new Promise((resolve: any, reject: any) => {
//    readFile(path, 'utf8', (err: any, data: any) => {
//      if (err) {
//        reject(err);
//      }
//      else {
//        resolve(data);
//      }
//    });
//  });
//}

// console logging the next line by itself just gives a Promise
//getText('./src/content/first.txt')
//  .then((result: any) => console.log(result))
//  .catch((err: any) => console.log(err));