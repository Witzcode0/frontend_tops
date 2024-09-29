/* 

Method Overriding (Runtime Polymorphism)

Method overriding occurs when a subclass provides a specific implementation of a method that is already defined in its superclass. The subclass method overrides the superclass method. This is one of the most common ways to achieve polymorphism in JavaScript.

*/
class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

function makeAnimalSpeak(animal) {
    animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makeAnimalSpeak(dog);
makeAnimalSpeak(cat); 
