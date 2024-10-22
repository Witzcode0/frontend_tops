// What is the drawback of declaring methods directly in JavaScript objects?

// Solution: The drawback of declaring methods directly in JavaScript objects is that it can lead to code pollution and harder to maintain. Instead, it's recommended to define methods as properties of the object's prototype. This way, methods can be accessed and overridden by child objects without polluting the parent object.

// 1. Memory Inefficiency:
// Redundancy:
// If you have multiple objects with the same method, each object will have its own copy of that method's code. This can lead to unnecessary memory usage.
// No Sharing:
// Methods defined directly in objects cannot be easily shared between different objects. If you need to reuse the same method across multiple objects, you'll have to duplicate the code.

// 2. Prototype Chain and Inheritance:
// Limited Inheritance:
// JavaScript's inheritance model relies heavily on the prototype chain. When you declare methods directly in an object, they are not part of the object's prototype. This makes it harder to create inheritance hierarchies and share methods across related objects.
// Overriding Issues:
// If you define a method in an object that has the same name as a method in the object's prototype chain, the locally defined method will override the inherited method. This can lead to unexpected behavior if you're not careful.

// 3. Organization and Maintainability:
// Cluttered Objects:
// As objects grow in complexity, having methods directly within them can make the code harder to read and maintain.
// Separation of Concerns:
// Mixing methods and data directly in objects can violate the principle of separation of concerns. It can be beneficial to separate the logic (methods) from the data (object properties).

// Alternatives:
// Prototype-based Methods:
// You can add methods to the prototype of a constructor function, allowing all instances of that constructor to share the method. This is a more memory-efficient and inheritance-friendly approach.
// Class Syntax (ES6 and later):
// JavaScript classes provide a syntactical sugar over the prototype-based inheritance model. They offer a more organized and familiar way to define methods and manage inheritance.

// Declaring methods directly in an object
const person1 = {
    name: "Alice",
    greet: function() {
      console.log("Hello, I'm " + this.name);
    }
  };
  
  const person2 = {
    name: "Bob",
    greet: function() { // Redundant code
      console.log("Hello, I'm " + this.name);
    }
  };

// Using prototype-based methods
function Person(name) {
    this.name = name;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.name);
  };
  
  const person1 = new Person("Alice");
  const person2 = new Person("Bob");