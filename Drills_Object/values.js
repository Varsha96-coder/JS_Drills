module.exports = function values(obj) {
  const getValues = [];
  for (key in obj) {
    getValues.push(obj[key]);
  }
  return getValues;
};
