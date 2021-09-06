const BMWAndAudi = require('../problem6.js');
const carInventory = require('../index.js').inventory;

const BmAudi = BMWAndAudi(carInventory);
console.log(JSON.stringify(BmAudi, undefined, 4));
