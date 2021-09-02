module.exports = function find(elements, cb) {
  let get;
  for (i = 0; i < elements.length; i++) {
    if (cb(elements[i]) == true) {
      get = elements[i];
      break;
    }
  }
  return get;
};
