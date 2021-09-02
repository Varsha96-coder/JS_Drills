const each = require('../each.js');

const items = [1, 2, 3, 4, 5, 5];

// Adding all elements
let sum = 0;

function addItems(a) {
  sum += a;
}

// adding all elements of an array
each(items, addItems);
console.log(`Sum of all elements: ${sum}`);

// Find out square of any element
let square = 0;

function findSqaure(a) {
  square = a * a;
  console.log(square);
}

console.log('Square of all elements are:');
each(items, findSqaure);
