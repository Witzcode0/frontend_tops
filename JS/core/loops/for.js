/* 
for Loops

for loops are used to iterate over a specific number of times or to iterate through elements of an array or other iterable objects. They provide a concise way to repeat a block of code multiple times.

Syntax:
for (initialization; condition; increment/decrement) {
    // Code to be executed
}

Explanation

initialization: This statement is executed once before the loop starts. It is typically used to declare and initialize a loop counter variable.

condition: This expression is evaluated before each iteration. If it evaluates to true, the loop continues. If it evaluates to false, the loop terminates.   

increment/decrement: This statement is executed after each iteration. It is typically used to update the loop counter variable.

code to be executed: This is the block of code that will be executed repeatedly as long as the condition is true.

Example:

for (let i = 0; i < 5; i++) {
    console.log("Iteration " + (i + 1));
}
*/

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}