module.exports = function keys(obj) {
  const getKeys = [];
  for (key in obj) {
      getKeys.push(key.toString());
  }
  return getKeys;
};
