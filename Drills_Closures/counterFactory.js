module.exports = counterFactory = (function () {
  let counter = 0;
  return {
    increment() {
      counter += 1;
    },
    decrement() {
      counter -= 1;
    },
    value() {
      return counter;
    },
  };
}());
