
module.exports = function keys(obj){
    var getKeys = [];
    for(var i in obj){
        getKeys.push(i.toString());
    }
    return getKeys;
}
