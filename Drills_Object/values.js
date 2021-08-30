module.exports = function values(obj){
    var getValues = [];
    for(var i in obj){
        getValues.push(obj[i]);
    }
    return getValues;
}
