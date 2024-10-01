/*
switch Statements

Syntax:

switch (expression) {
  case value1:
    // statements
    break;
  case value2:
    // statements
    break;
  default:
    // statements
}

Example:

let num = 3;

switch (num) {
  case 1:
    console.log("Number is 1");
    break;
  case 2:
    console.log("Number is 2");
    break;
  case 3:
    console.log("Number is 3");
    break;
  default:
    console.log("Number is not 1, 2, or 3");
}

*/

let dayOfWeek = "Tuesday";

switch (dayOfWeek) {
    case "Monday":
        console.log("It's Monday, the start of the week.");
        break;
    case "Tuesday":
        console.log("It's Tuesday, the middle of the week.");
        break;
    case "Wednesday":
        console.log("It's Wednesday, hump day!");
        break;
    case "Thursday":
        console.log("It's Thursday, almost Friday!");
        break;
    case "Friday":
        console.log("It's Friday, the weekend is here!");
        break;
    default:
        console.log("It's not a weekday.");
}