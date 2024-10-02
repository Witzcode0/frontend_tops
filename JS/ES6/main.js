/* 
New Features in ES6

1] Arrow Functions
Shorter syntax for writing functions. They do not have their own this, making them useful for callbacks and other functional code.

Arrow Functions
Arrow functions are a concise syntax for writing functions. Unlike traditional functions, they do not have their own this or arguments context. They are especially useful in scenarios such as callbacks.

Example:

// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;


2] Classes
ES6 introduced classes to JavaScript, providing syntactic sugar over JavaScript's existing prototype-based inheritance.

The . Operator
The dot operator (.) is used to access object properties or methods.

Example: 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const obj = { name: 'John', age: 30 };
console.log(obj.name);  // Output: John


3] Template Literals
Allow embedding variables and expressions in strings using backticks and ${}.

Example: 
const name = 'John';
console.log(`Hello, ${name}`);

4] Destructuring Assignment
Extract values from arrays or properties from objects into distinct variables.

Example:
const [x, y] = [10, 20];

const {"name", "age"} = {
    name: "brijesh",
    age:28
};

5] Default Parameters
Set default values for function parameters.

Example:
function multiply(a, b = 1) {
  return a * b;
}

6] Rest and Spread Operators
The rest operator (...) collects multiple elements into an array. The spread operator expands an array into individual elements.

Example: 
const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3

7] Let and Const
let and const introduce block-scoped variables. const is used for constants (values that don't change).

Example:
let a = 1;
const b = 2;

8] Promises
Used to handle asynchronous operations in a more readable manner.

Example: 
const promise = new Promise((resolve, reject) => {
  // Asynchronous code here
});

9] For/of Loop
The for/of loop allows iteration over iterable objects like arrays, strings, maps, and sets.

Example: 
const arr = [10, 20, 30];
for (const value of arr) {
  console.log(value); // Output: 10 20 30
}

10] Map Objects
A Map is a collection of keyed data items, similar to an object. However, the keys can be of any type.

Example: 
const map = new Map();
map.set('name', 'John');
map.set('age', 25);

console.log(map.get('name'));  // Output: John

11] Set Objects
A Set is a collection of unique values. Duplicate values are automatically removed.

Example: 
const set = new Set([1, 2, 3, 4, 4, 5]);
console.log(set);  // Output: Set { 1, 2, 3, 4, 5 }


*/