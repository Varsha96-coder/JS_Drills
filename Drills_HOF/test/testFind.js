const find = require('../find.js');

//const items = [1, 2, 3, 4, 5, 5];
const items = [];

//finding element greater than 4
    const found = find(items, element => element > 4);
    console.log("\nElement greater than 4 is: " + found);