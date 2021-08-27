// ==== Problem #4 ====
/* The accounting team needs all the years from every car on the lot.
 Execute a function that will return an array from the dealer data containing only the car years and 
 log the result in the console as it was returned.*/

var year = [];

module.exports = function (carInventory){
    for( i = 0 ; i < carInventory.length ; i++ ){
        year.push(carInventory[i].car_year);
    }
    return year;
}