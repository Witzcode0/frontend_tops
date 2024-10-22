// Write to find minimum number among 3 numbers using ternary operator in JS?

const num1 = 5;
const num2 = 10;
const num3 = 15;

const min = (num1 < num2) ? (num1 < num3) ? num1 : num3 : (num2 < num3) ? num2 : num3;