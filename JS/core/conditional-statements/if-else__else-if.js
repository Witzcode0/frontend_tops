/* 
if-else else-if statement:

syntax:

if (condition1) {
    // code to be executed if condition1 is true
    //...
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
  //...
} else {
  // code to be executed if condition1 and condition2 are false
  //...
}

Example:

let x = 10;

if (x > 0) {
    console.log("x is positive");
} else if (x < 0) {
  console.log("x is negative");
} else {
  console.log("x is zero");
}

*/

let grade = 85;

if (grade >= 90) {
    console.log("Excellent!");
} else if (grade >= 80) {
    console.log("Very good!");
} else if (grade >= 70) {
    console.log("Good.");
} else {
    console.log("Needs improvement.");
}