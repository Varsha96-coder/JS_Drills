module.exports = function reduce(elements, cb, startingValue) {
  // console.log(startingValue);
  if (startingValue) {
    for (let i = 0; i < elements.length; i += 1) {
      startingValue = cb(startingValue, elements[i]);
    }
  } else {
    startingValue = elements[0];
    for (let i = 1; i < elements.length; i += 1) {
      startingValue = cb(startingValue, elements[i]);
    }
  }
  return startingValue;
};
