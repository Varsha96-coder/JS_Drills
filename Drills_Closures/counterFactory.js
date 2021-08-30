module.exports = counterFactory = (function () {
    var counter = 0;
    return {
        increment: function () {
            counter += 1;
        },
        decrement: function () {
            counter -= 1;
        },
        value: function () {
            return counter;
        }
    }
})();