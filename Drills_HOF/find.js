module.exports = function find(elements, cb) {
    var get = undefined;
    for (i = 0; i < elements.length; i++) {
        if (cb(elements[i]) == true) {
            get = elements[i];
            break;
        }
    }
    return get;
}