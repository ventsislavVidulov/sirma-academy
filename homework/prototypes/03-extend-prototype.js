// Write a function that receives a class and attaches a species property with the value
// &quot;Human&quot; and a toSpeciesString() method that returns a string in the format "I am a
// <species>. <toString()>".


class Person {

}

function extendPrototype(className) {
    className.prototype.species = 'Human';
    className.prototype.toSpeciesString = function() {
        return `I am a ${this.species}.`.toString();
    }
}

extendPrototype(Person);

const person = new Person;

console.log(person.species);
console.log(person.toSpeciesString());
