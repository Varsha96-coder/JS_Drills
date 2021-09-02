// ==== Problem #6 ====
/* A buyer is interested in seeing only BMW and Audi cars within the inventory.
   Execute a function and return an array that only contains BMW and Audi cars.
   Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console. */

const BmAudi = [];
module.exports = function (carInventory) {
  for (let i = 0; i < carInventory.length; i += 1) {
    if (carInventory[i].car_make === 'BMW' || carInventory[i].car_make === 'Audi') {
      BmAudi.push(carInventory[i]);
    }
  }
  return BmAudi;
};
