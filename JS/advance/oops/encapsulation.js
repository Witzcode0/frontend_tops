/*
--------------
Encapsulation:
--------------

Encapsulation is a fundamental principle in object-oriented programming (OOP) that involves bundling data (properties) and the methods that operate on that data within a single unit (object or class). This helps protect data from external access and modification, improving code organization, maintainability, and security.

Key Aspects of Encapsulation:

Data Hiding: Encapsulation promotes data hiding, where the internal state of an object is kept private, accessible only through defined methods. This prevents unauthorized access or modification.

Abstraction: Encapsulation provides a level of abstraction, where you can interact with an object through its public interface (methods) without needing to know the underlying implementation details.

Modularity: Encapsulating data and methods within objects creates modular code, making it easier to understand, maintain, and reuse.

*/

class Person {
    // Private fields (not accessible outside the class)
    #name; // private field
    #age;

    constructor(name, age) {
        this.#name = name;  // private field access within the class
        this.#age = age;
    }

    // Public getter for name
    getName() {
        return this.#name;
    }

    // Public setter for name
    setName(name) {
        this.#name = name;
    }

    // Public getter for age
    getAge() {
        return this.#age;
    }

    // Public setter for age
    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            console.log("Please enter a valid age.");
        }
    }

    // Public method
    displayInfo() {
        console.log(`Name: ${this.#name}, Age: ${this.#age}`);
    }
}

// Usage
const person = new Person("Brijesh", 28);

console.log(person.getName()); // Accessing via getter: John
person.setAge(30); // Setting age via setter

person.displayInfo(); // Name: John, Age: 30

// Trying to access private fields directly will cause an error
// console.log(person.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class
