function multiply(firstNum) {
    return function (secondNum) {
        return function (thirdNum) {
            return firstNum * secondNum * thirdNum;
        }
    }
}

console.log(multiply(2)(3)(4)); //24