// Setup constructor to take name and age (default to 0)
// getDesctiption - Vladimir is XX years old.
class Person {
    constructor(name = 'Anonymous', age = 0, location = 'Anonymous') {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    getGreeting() {
        //return 'Hi. I am ' + this.name + '!'; 
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old and lives in ${this.location} !`;
    }
}

const person1 = new Person('Vladimir Stratiev', 27, 'Bulgaria');
console.log(person1.getGreeting());
console.log(person1.getDescription());

const person2 = new Person();
console.log(person2.getGreeting());
