const detailsBeforeYear = require('../problem5.js');
const carInventory = require('../index.js').inventory;
const carYear = require('../problem4.js');

const year = carYear(carInventory);
const before2000 = detailsBeforeYear(year, carInventory);

console.log(`${before2000.length} cars were made before the year 2000.`);
console.log(before2000);
console.log(before2000.length);
