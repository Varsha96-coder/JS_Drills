module.exports = function reduce(elements, cb, startingValue) {
    //console.log(startingValue);
    if (startingValue) {
        for (i = 0; i < elements.length; i++) {
            startingValue = cb(startingValue, elements[i]);
        }
    } else {
        startingValue = elements[0];
        for (i = 1; i < elements.length; i++) {
            startingValue = cb(startingValue, elements[i]);
        }
    }
    return startingValue;
}