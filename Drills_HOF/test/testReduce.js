const reduce = require('../reduce.js');

const items = [1, 2, 3, 4, 5, 5];

//Adding an element
    function addElements(prev , curr){
        return prev + curr;
    }

    var result = reduce(items, addElements);
    console.log("\nSum of all elements is: " + result);