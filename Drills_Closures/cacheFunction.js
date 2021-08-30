module.exports = function cacheFunction(cb) {
    var track = {};
    return function (a) {
        if (a in track) {
            return a + " : " + track[a];
        } else {
            track[a] = cb(a);
            return track[a];
        }
    };
}