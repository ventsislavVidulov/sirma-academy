// 10. Array Extension
// Extend the built-in Array object with additional functionality. Implement the following
// methods:
//  first(): returns the first element of the array.
//  skip(n): returns a new array excluding the first n elements.
//  take(n): returns a new array containing the first n elements.
//  product(): returns the product of all array elements.
//  unique(): returns a new array with unique elements.
// Structure your code as an IIFE to add these methods to the Array prototype.

Array.prototype.first = function() {
    return this[0];
};

Array.prototype.skip = function(n) {
    return this.slice(n);
};

Array.prototype.take = function(n) {
    return this.slice(0, n);
};

Array.prototype.product = function() {
    return this.reduce((acc, cur) => acc * cur, 1);
};

Array.prototype.unique = function() {
    return Array.from(new Set(this));
};

const testArray = [1, 2, 3, 3, 5];
console.log(testArray.first());
console.log(testArray.skip(2));
console.log(testArray.take(2));
console.log(testArray.product());
console.log(testArray.unique());


