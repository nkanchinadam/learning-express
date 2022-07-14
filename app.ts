// GLOBALS

// __dirname
// __filename
// require
// module
// process

console.log(__dirname)
console.log(__filename)
console.log(require)
console.log(module)
console.log(process)

setInterval(() => {
  console.log('hello world')
}, 1000);

setTimeout(() => {
  console.log('hello world 2');
}, 5000);