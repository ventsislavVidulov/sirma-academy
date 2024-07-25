const stringManipulator = {
    value: '',
    
    setValue(input) {
        this.value = input;
        return this;
    },

    toUpperCase() {
        this.value = this.value.toUpperCase();
        return this;
    },

    print() {
        console.log(this.value);
        return this;
    },

    toLowerCase() {
        this.value = this.value.toLowerCase();
        return this;
    }
};

stringManipulator.setValue('Hello')
    .toUpperCase()
    .print()
    .toLowerCase()
    .print();