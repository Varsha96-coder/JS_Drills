const makePairs = [];
module.exports = function pairs(obj) {
  for (key in obj) {
    const getPairs = [];
    getPairs.push(key);
    getPairs.push(obj[key]);
    makePairs.push(getPairs);
  }
  return makePairs;
};
