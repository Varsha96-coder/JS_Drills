const counterFactory = require('../counterFactory.js');

console.log(counterFactory.value());

counterFactory.increment();
counterFactory.increment();

console.log(counterFactory.value());

counterFactory.decrement();

console.log(counterFactory.value());
