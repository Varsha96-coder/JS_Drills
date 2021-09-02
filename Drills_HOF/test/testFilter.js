const filter = require('../filter.js');

const items = [1, 2, 3, 4, 5, 5];

// finding odd
function findOdd(e) {
  if (e % 2 != 0) return true;
  return false;
}

const result = filter(items, findOdd);
console.log(`\nOdd elements in an array are:\n${result}`);

// finding prime
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(`\nPrime no. in array are:\n${filter(items, isPrime)}`);
