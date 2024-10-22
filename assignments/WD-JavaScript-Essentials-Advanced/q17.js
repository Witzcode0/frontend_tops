// Write find maximum number among 3 numbers using ternary operator in JS?

let num1 = 5;
let num2 = 10;
let num3 = 8;

let maxNumber = (num1 > num2) ? ((num1 > num3) ? num1 : num3) : ((num2 > num3) ? num2 : num3);