const mapObject = require('../mapObject.js');

const myObject = { a: 1, b: 2, c: 3 };

const map1 = mapObject(myObject, (x) => x * 2);
console.log(`\nDouble of all items:\n\n${map1}`);
