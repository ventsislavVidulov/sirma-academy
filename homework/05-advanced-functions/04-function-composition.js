function double(num) {
    return num * 2;
}

function square(num) {
    return num ** 2;
}

function compose(...functionsToCompose) {
    return function (num) {
        return functionsToCompose.reduce((acc, current) => current(acc), num);
    }
}

const doubleThenSquare = compose(double, square);
console.log(doubleThenSquare(3)); // Output: 36