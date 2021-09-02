const flatten = require('../flatten.js');

const nestedArray = [1, [2], [[3]], [[[4]]]];

// function to flat an array
const flat = flatten(nestedArray);
console.log(`\nFlatten array:\n${flat}`);

const flat2 = flatten(nestedArray);
console.log(`\nFlatten array:\n${flat2}`);
