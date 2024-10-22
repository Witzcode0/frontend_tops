// What are the looping structures in JavaScript? Any one Example

// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// while loop

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// do-while loop

// let i = 0;

// do {
//   console.log(i);
//   i++;
// } while (i < 5); 

// for...of loop

let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

// for...in loop


let obj = { name: "John", age: 30 };

for (let key in obj) {
  console.log(key + ": " + obj[key]);
}

