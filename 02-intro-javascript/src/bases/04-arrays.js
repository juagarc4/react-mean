
// Arrays in JS

// Not to do
// const arr = new Array();
// Best practices
const arr = [1,2,3,4];

// Push modifies main object. Don't use
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);

// Spread operator can be used to expand objects
let arr2 = [...arr, 5];

const arr3 = arr2.map( function (elem) {
    return elem*2;
});

console.log(arr);
console.log(arr2);
console.log(arr3);