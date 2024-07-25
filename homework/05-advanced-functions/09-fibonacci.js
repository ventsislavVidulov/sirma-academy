function getFibonacci() {
    let prev = 0;
    let current = 1;
    return function () {
        let temp = prev;
        prev = current;
        current = temp + current;
        return prev;
    }
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21