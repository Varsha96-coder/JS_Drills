const findById = require('../problem1.js');
const carInventory = require('../index.js').inventory;

const Id33 = findById(carInventory);
console.log(`Car 33 is a ${Id33.car_year} ${Id33.car_make} ${Id33.car_model}`);
