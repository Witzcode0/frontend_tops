// Spread Operator (...): It allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // combined = [1, 2, 3, 4, 5, 6]

console.log(combined); // [ 1, 2, 3, 4, 5, 6 ]

// Rest Operator (...): It allows us to represent an indefinite number of arguments as an array.

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
