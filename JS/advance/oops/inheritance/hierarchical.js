class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}

let dog = new Dog('Bulldog');
let cat = new Cat('Persian');
dog.speak();
cat.speak(); 