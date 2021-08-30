var makePairs = [];
module.exports = function pairs(obj){
    for(var i in obj){
        var getPairs = [];
        getPairs.push(i);
        getPairs.push(obj[i]);
        makePairs.push(getPairs);
    }
    return makePairs;
}