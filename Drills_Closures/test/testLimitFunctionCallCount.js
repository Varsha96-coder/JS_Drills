const limitFunctionCallCount = require("../limitFunctionCallCount.js");

function square(e) {
    return e * e;
}

var result = limitFunctionCallCount(square, 2);
console.log(result(2));
console.log(result(3));
console.log(result(1));