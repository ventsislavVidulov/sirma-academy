function createPrivateCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createPrivateCounter();
const counter2 = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
console.log(counter2.getCount());