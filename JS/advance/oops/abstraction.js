/* Abstraction in JavaScript (or in object-oriented programming in general) is the concept of hiding the complexity of certain parts of a program and exposing only the essential features to the user. It allows us to define the structure of an object without showing unnecessary implementation details, focusing instead on what an object should do rather than how it does it.

JavaScript, like many other OOP languages, can achieve abstraction through the use of:

- Classes and Objects
- Abstract methods (using ES6 classes and inheritance)
- Encapsulation (using closures or private fields) 

1. Abstraction Using Classes
We can use classes in JavaScript to define the "blueprint" of an object, exposing only necessary methods and properties.

class Animal {
    constructor(name) {
        this.name = name;
    }

    // Abstract method (should be implemented by subclasses)
    speak() {
        throw new Error("This method must be implemented by a subclass");
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Bulldog');
dog.speak();  

2. Abstraction Using Encapsulation (Closures)
In JavaScript, we can achieve abstraction by encapsulating certain details using closures or private fields (from ES2022).

function Car(model) {
    let speed = 0; 

    return {
        accelerate: function() {
            speed += 10;
            console.log(`${model} is accelerating. Speed is ${speed}`);
        },
        brake: function() {
            speed -= 5;
            console.log(`${model} is braking. Speed is ${speed}`);
        }
    };
}

let car = Car('Tesla');
car.accelerate(); 
car.brake();      


3. Abstraction Using Private Fields (ES2022)
JavaScript (from ES2022) supports private fields using the # syntax to define properties and methods that are truly private.

class Car {
    #speed;

    constructor(model) {
        this.model = model;
        this.#speed = 0;
    }

    accelerate() {
        this.#speed += 10;
        console.log(`${this.model} is accelerating. Speed is ${this.#speed}`);
    }

    brake() {
        this.#speed -= 5;
        console.log(`${this.model} is braking. Speed is ${this.#speed}`);
    }
}

let car = new Car('Tesla');
car.accelerate(); 
car.brake(); 
console.log(car.#speed);  

*/