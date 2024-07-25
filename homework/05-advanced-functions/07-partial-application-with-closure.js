function partialSum(num) {
    return function (a, b, c) {
        return a + b + c + num;
    }
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11