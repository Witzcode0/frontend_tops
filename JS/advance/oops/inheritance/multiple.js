/*
Multiple inheritance allows a class to inherit properties and methods from more than one class. This is common in some languages like Python but not supported directly in JavaScript. Instead, JavaScript uses mixins to simulate multiple inheritance.
*/

const CanFly = {
    fly() {
        console.log(`${this.name} can fly.`);
    }
};

const CanSwim = {
    swim() {
        console.log(`${this.name} can swim.`);
    }
};

class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Bird extends Animal {
    constructor(name) {
        super(name);
    }
}

Object.assign(Bird.prototype, CanFly, CanSwim);

let bird = new Bird('Sparrow');
bird.fly(); 
bird.swim();  