// CommonJS - every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./03a-names.ts');
const sayHi = require('./03b-utils.ts');
const data = require('./03c-alternative-exports.ts');

console.log(names);
console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);