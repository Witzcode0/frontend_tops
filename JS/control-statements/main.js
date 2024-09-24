/* 
Control Statements

Control statements allow you to modify the normal flow of execution in your JavaScript code. They are used to make decisions, jump to specific parts of the code, or terminate loops prematurely.

break Statement

The break statement is used to:

Exit a loop: When used inside a loop (e.g., for, while, do...while), it immediately terminates the loop, even if the loop condition is still true.

Exit a switch statement: When used inside a switch statement, it terminates the statement and prevents further cases from being executed.

Example:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

continue Statement

The continue statement is used to:

Skip the current iteration of a loop: When used inside a loop, it skips the remaining code in the current iteration and proceeds to the next iteration.

Example:

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue;
  }
    console.log(i);
}

Combining break and continue

You can use break and continue together to create more complex control flow.

Example:

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
    if (i % 2 === 0) {
    continue;
  }
    console.log(i);
}
*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumOfEvenNumbers = 0;

for (let number of numbers) {
  if (number > 7) {
    break;
  }
  if (number % 2 !== 0) {
    continue;
  }
  sumOfEvenNumbers += number;
}

console.log("Sum of even numbers less than or equal to 7:", sumOfEvenNumbers);