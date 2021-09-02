module.exports = function filter(elements, cb) {
  const doFilt = [];
  for (i = 0; i < elements.length; i++) {
    if (cb(elements[i]) == true) {
      doFilt.push(elements[i]);
    }
  }
  return doFilt;
};
