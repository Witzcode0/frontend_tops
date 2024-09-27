// 1.] Functions in JavaScript

// function addTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// console.log(addTwoNumbers(10, 20))


// 2.] Arrow Functions
// let total = (num1, num2) => {
//     return num1 + num2
// }

// console.log(total(10, 20))


// 2.1] If there is a single parameter, parentheses can be omitted:
// const square = n => n * n;
// console.log(square(4));  // Output: 16

// 2.2] If no parameters, parentheses are mandatory:
// const sayHello = () => console.log("Hello!");
// sayHello();  // Output: Hello!


// 3. Higher-Order Functions
// A higher-order function is a function that accepts another function as an argument or returns a function as a result. Common higher-order functions in JavaScript include map(), filter(), and reduce().

// function provideNumber(func, num){
//     return func(num)
// }

// function checkEvenOdd(value){
//     if (value % 2 === 0){
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }

// console.log(provideNumber(checkEvenOdd, 10))

// 4. Array Methods: Map, Reduce, and Filter

// Map:
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// const numbers = [1, 2, 3, 4];
// const squared = numbers.map(num => num * num);

// console.log(squared);  // Output: [1, 4, 9, 16]

// Filter:
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// const numbers = [1, 2, 3, 4, 5];
// const even = numbers.filter(num => num % 2 === 0);

// console.log(even);  // Output: [2, 4]


// Reduce:
// The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum);  // Output: 10
