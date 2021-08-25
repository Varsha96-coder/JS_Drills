// ==== Problem #5 ====
/* The car lot manager needs to find out how many cars are older than the year 2000.
   Using the array you just obtained from the previous problem, 
   find out how many cars were made before the year 2000 and return the array of older cars and log its length.*/

var before2000 = [];

module.exports = function (year,carInventory){
    c = 0;
    for( i = 0 ; i < year.length ; i++ ){
        if( year[i] < 2000){
            c++;
            before2000.push(carInventory[i]);
        }
    }
    return before2000;
}