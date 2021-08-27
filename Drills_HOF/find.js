module.exports = function find(elements, cb) {
    var get = 0;
    for (i = 0; i < elements.length; i++) {
        if (cb(elements[i]) == true) {
            get = elements[i];
            break;
        }
    }
    return get;
}