class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, school) {
        super(name, age);
        this.school = school;
    }
}

const student1 = new Student('Pesho', 20, 'NPMG');

console.log(student1.name, student1.age, student1.school);
