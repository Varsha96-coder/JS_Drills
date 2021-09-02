module.exports = function mapObject(obj, cb) {
  const doMap = [];
  for (key in obj) {
    doMap.push(`${key}:${cb(obj[key])}`);
    // doMap[key] = cb(obj[key]);
  }
  return doMap;
};
