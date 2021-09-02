const defaults = require('../defaults.js');

const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };

console.log(defaults(testObject, { age: 45, gender: 'male' }));
