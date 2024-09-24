/* 
for...in Loops : Iterating Over an Object's Properties

for...in loops are used to iterate over the properties of an object. They are helpful when you need to access or modify the properties of an object dynamically.

Syntax:

for (variable in object) {
  // Code to execute for each property
}

or 

for (let property in object) {
    // Code to be executed
}

Explanation

for...in: The keyword used to introduce a for...in loop.

property: A variable that will hold the current property name during each iteration.

object: The object whose properties you want to iterate over.

Example:

let person = {
  name: "John",
  age: 30,
  city: "New York"
};
let product = {
    name: "Laptop",
    price: 999.99,
    quantity: 10
};

for (let prop in person) {
  console.log(prop + ": " + person[prop]);
}
*/


for (let property in product) {
    console.log(`${property}: ${product[property]}`);
}

let students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 22, grade: "B" },
    { name: "Charlie", age: 19, grade: "C" }
];

let totalAge = 0;
let studentCount = 0;

for (let student of students) {
    totalAge += student.age;
    studentCount++;
}

let averageAge = totalAge / studentCount;
console.log("Average age:", averageAge);