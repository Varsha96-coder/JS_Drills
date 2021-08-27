module.exports = function map(elements, cb) {
    var doMap = [];
    for (i = 0; i < elements.length; i++) {
        doMap.push(cb(elements[i]));
    }
    return doMap;
}