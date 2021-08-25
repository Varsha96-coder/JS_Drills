// ==== Problem #3 ====
/* The marketing team wants the car models listed alphabetically on the website.
   Execute a function to Sort all the car model names into alphabetical order and 
   log the results in the console as it was returned.*/

var models = [];
module.exports = function (carInventory){
    for( i = 0 ; i < carInventory.length ; i++ ){
        models.push(carInventory[i].car_model);
    }
    //console.log(models);
    return models.sort();
}