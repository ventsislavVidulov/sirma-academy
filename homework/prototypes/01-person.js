// Write a program that takes firstName and lastName as parameters and returns an object
// with firstName, lastName, and fullName properties. If firstName or lastName changes,
// fullName should also change. If fullName changes to a valid format, firstName and
// lastName should change accordingly.

class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._fullName = firstName + ' ' + lastName;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(input) {
         this._firstName = input;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(input) {
         this._lastName = input;
    }

    get fullName() {
        return this._fullName;
    }

    set fullName(input) {
        if (input.split(' ').length === 2 && !+input.split(' ')[0] && !+input.split(' ')[1]) {
            this._fullName = input;
            this._firstName = input.split(' ')[0];
            this._lastName = +input.split(' ')[1];
        }
    }
}

const somebody = new Person('Jhon', 'Doe');

somebody.fullName = '1 Doe';
console.log(somebody.fullName);
somebody.fullName = 'Jhoane Doe';
console.log(somebody.fullName);
console.log(somebody.firstName);


