const findById = require('../problem1.js');
const carInventory = require('../index.js').inventory;

var id_33 = findById(carInventory);
console.log( "Car 33 is a "+ id_33.car_year+" "+id_33.car_make+" "+id_33.car_model );