// Write a program you have to make a summation of first and last Digit. (E.g., 1234 Ans: -
    // 5) in JS?


let num = 1234;

let firstDigit = Math.floor(num / 1000);

let lastDigit = num % 10;

let sum = firstDigit + lastDigit;

console.log(sum); 