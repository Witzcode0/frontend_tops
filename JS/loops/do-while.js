/* 
do...while Loops

A do...while loop is a type of loop in JavaScript that executes a block of code at least once, and then continues to repeat the block as long as a specified condition remains true. This is different from a while loop, where the condition is checked before the first iteration.

Syntax:

do {
  // Code block to be executed
} while (condition);


Explanation:

do: This keyword initiates the loop.

code to be executed: The block of code that will be executed at least once.

while (condition): The condition that must be true for the loop to continue.

Example:

let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5); // Output: 0, 1, 2, 3, 4
*/

let input;

do {
  input = prompt("Enter a positive number:");
} while (isNaN(input) || input <= 0);

console.log("You entered:", input);