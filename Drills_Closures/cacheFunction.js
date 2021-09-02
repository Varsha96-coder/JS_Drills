module.exports = function cacheFunction(cb) {
  const track = {};
  return function (a) {
    if (a in track) {
      return `${a} : ${track[a]}`;
    }
    track[a] = cb(a);
    return track[a];
  };
};
