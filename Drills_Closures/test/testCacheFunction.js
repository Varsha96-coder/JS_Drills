const cacheFunction = require('../cacheFunction.js');

function square(e) {
  return e * e;
}

const result = cacheFunction(square);
console.log(result(2));
console.log(result(2));
console.log(result(3));
console.log(result(3));
