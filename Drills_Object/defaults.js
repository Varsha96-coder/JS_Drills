module.exports = function defaults(obj, defaultProps) {
    var newObj = [];
    newObj = Object.assign(obj, defaultProps);
    return newObj;
}