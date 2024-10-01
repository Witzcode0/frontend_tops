class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Mammal extends Animal {
    constructor(name) {
        super(name);
    }
}

class Dog extends Mammal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

let dog = new Dog('Bulldog');
dog.speak();