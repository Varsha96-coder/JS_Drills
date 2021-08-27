const carYear = require('../problem4.js');
const carInventory = require('../index.js').inventory;

var year = carYear(carInventory);
console.log(year);