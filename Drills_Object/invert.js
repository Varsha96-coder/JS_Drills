module.exports = function invert(obj) {
  const doInvert = {};
  for (const key in obj) {
    doInvert[obj[key]] = key;
  }
  return doInvert;
};
