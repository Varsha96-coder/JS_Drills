module.exports = function mapObject(obj, cb) {
    var doMap = {};
    for (var i in obj) {
        doMap.push(i+":"+cb(obj[i]));
    }
    return doMap;
}