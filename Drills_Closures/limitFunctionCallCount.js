module.exports = function limitFunctionCallCount(cb, n) {
    return function (a) {
        if (n > 0) {
            n -= 1;
            return cb(a);
        } else {
            return null;
        }
    };
}