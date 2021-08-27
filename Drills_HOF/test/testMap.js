const map = require('../map.js');

const items = [1, 2, 3, 4, 5, 5];

//Double of all elements in an array
    const map1 = map(items, x => x * 2);
    console.log("\nDouble of all items:\n\n" + map1);