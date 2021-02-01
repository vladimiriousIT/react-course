// Setup constructor to take name and age (default to 0)
// getDesctiption - Vladimir is XX years old.
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    };

    getGreeting() {
        //return 'Hi. I am ' + this.name + '!'; 
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if(this.hasMajor()){
            //description = description + `{}`;
            description += ` His major is ${this.major}.`;
        }
        return description;
    }
}

// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi. I am XXXX XXXX. I'm Visiting from XXXXX.
// 2. Hi. I am XXXX XXXX

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting(){
        let description = super.getGreeting();
        if(this.location){
            description += ` I'm visiting from ${this.location}.`;
        }
        return description;
    }

}

const person = new Student('Vladimir Stratiev', 27, 'Computer Science');
console.log(person.getGreeting());

const student = new Student();
console.log(student.getGreeting());

const traveller = new Traveller('Vladimir Stratiev', 27, 'Bulgaria');
console.log(traveller.getGreeting());
