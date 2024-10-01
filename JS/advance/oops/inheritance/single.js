// Single inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    EmployeeInformation() {
        console.log(`My name is ${this.name}, I am ${this.age} years old, and my salary is ${this.salary}`);
    }
}

// let p1 = new Person("brijesh gondaliya", 28)
// p1.greet();

// let e1 = new Employee("brijesh gondaliya", 28, 50000)
// e1.greet();
// e1.EmployeeInformation();
