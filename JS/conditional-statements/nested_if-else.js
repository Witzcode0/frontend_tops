/*
Nested if-else Statements

syntax:

if (condition1) {
    // Code to be executed if condition1 is true
    if (condition2) {
        // Code to be executed if condition1 and condition2 are both true
    } else {
        // Code to be executed if condition1 is true but condition2 is false
    }
} else {
    // Code to be executed if condition1 is false
    if (condition3) {
        // Code to be executed if condition1 is false and condition3 is true
    } else {
        // Code to be executed if condition1 and condition3 are both false
    }
}
  

Example:

let x = 10;

if (x > 5) {
  console.log("x is greater than 5");
  if (x % 2 === 0) {
    console.log("x is even");
  } else {
    console.log("x is odd");
  }
    console.log("x is not greater than 5");
} else {
  console.log("x is less than or equal to 5");
}
*/

let age = 20;
let hasDrivingLicense = true;

if (age >= 18) {
    if (hasDrivingLicense) {
        console.log("You are eligible to drive.");
    } else {
        console.log("You are eligible to drive, but you need a driving license.");
    }
} else {
    console.log("You are not eligible to drive.");
}