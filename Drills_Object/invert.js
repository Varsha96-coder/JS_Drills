module.exports = function invert(obj){
    var doInvert = {};
    for(var key in obj){
        doInvert[obj[key]] = key;
    }
    return doInvert;
}