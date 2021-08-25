const lastCarInfo = require('../problem2.js');
const carInventory = require('../index.js').inventory;

var info = lastCarInfo(carInventory);

console.log("Last car is a "+info.car_make+" "+info.car_model);