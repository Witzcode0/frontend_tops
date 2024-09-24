/* 
for...of Loops: Iterating Over Iterable Objects

for...of loops are a more concise and readable way to iterate over iterable objects in JavaScript. They are particularly useful for arrays, strings, and other objects that implement the iterable protocol.

Syntax:

for (let element of iterable) {
  // Code to be executed
}

Explanation:

iterable: The object you want to iterate over. 

element: A variable that will hold the current element during each iteration.

// Example: Iterating over an array

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number); // Output: 1, 2, 3, 4, 5
}
*/

let fruits = ["apple", "banana", "orange"];
let message = "Hello, world!";

for (let fruit of fruits) {
  console.log(fruit);
}


for (let char of message) {
  console.log(char);
}