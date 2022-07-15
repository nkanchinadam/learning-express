// GLOBALS

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

// setInterval repeats the callback continuously after a set period of time
setInterval(() => {
  console.log('hello world')
}, 1000);

// setTImeout executes the callback once after a set period of time
setTimeout(() => {
  console.log('hello world 2');
}, 5000);