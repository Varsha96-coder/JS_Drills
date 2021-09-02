module.exports = function defaults(obj, defaultProps) {
  let newObj = [];
  newObj = Object.assign(obj, defaultProps);
  return newObj;
};
