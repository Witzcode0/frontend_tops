/* 
while Loops

while loops are used to execute a block of code repeatedly as long as a specified condition remains true. They are similar to for loops, but they offer more flexibility in terms of the loop condition and termination.

Syntax:

while (condition) {
  // Code to be executed
}


Explanation:

condition: An expression that evaluates to either true or false.

code to be executed: The block of code that will be executed repeatedly as long as the condition is true.

Example:

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfEvenNumbers = 0;
let index = 0;

while (index < numbers.length) {
  if (numbers[index] % 2 === 0) {
    sumOfEvenNumbers += numbers[index];
  }
  index++;
}

console.log("Sum of even numbers:", sumOfEvenNumbers);