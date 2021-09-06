const sortCarModel = require('../problem3.js');
const carInventory = require('../index.js').inventory;

const model = sortCarModel(carInventory);

console.log(model);
