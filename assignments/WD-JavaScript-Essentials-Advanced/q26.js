// Write a program make a summation of given number (E.g., 1523 Ans: - 11) in JS?

let num = 1523;

let sum = 0;

for (let i = 0; i < num.toString().length; i++) {
  sum += parseInt(num.toString().charAt(i));
}

console.log(sum);
