/* 
An array in JavaScript is a collection of elements, where each element can be of any data type (numbers, strings, objects, or even other arrays). Arrays are ordered, meaning elements are stored in a specific sequence, and can be accessed by their index (position). 

Features of JavaScript Arrays:

Ordered: Elements are stored in a specific sequence.
Indexed: Each element has a unique index starting from 0.
Dynamic: Arrays can change their size dynamically (can grow or shrink).
Mutable: Elements within an array can be modified.
Heterogeneous: Elements can be of different data types.

syntax: let arrayName = [element1, element2, ...];

Example: let fruits = ["apple", "banana", "orange"];

Note: JavaScript arrays are zero-based, meaning the first element has an index of 0, the second element has an index of 1, and so on.

Accessing Array Elements:

To access an element in an array, you use the index in square brackets. For example, fruits[0] will return the value "apple".

Using array methods:

- length: Returns the number of elements in the array.
- indexOf(element): Returns the index of the first occurrence of the element.
- lastIndexOf(element): Returns the index of the last occurrence of the element.
- includes(element): Returns true if the element exists in the array, false otherwise.
Methods:

Adding elements:
push(element): Adds an element to the end of the array.
unshift(element): Adds an element to the beginning of the array.

Removing elements:
pop(): Removes the last element from the array and returns it.
shift(): Removes the first element from the array and returns it.   
splice(start, deleteCount, ...elements): Removes elements starting at the specified index and optionally inserts new elements.

Modifying elements:
[index] = newElement: Assigns a new value to an element at the specified index.

Other methods:
concat(...arrays): Creates a new array by concatenating existing arrays.
join(separator): Converts the array elements to a string, separated by the specified separator.
reverse(): Reverses the order of the elements in the array.
slice(start, end): Creates a new array containing a portion of the original array.
sort(): Sorts the elements in the array in ascending order based on their string representation.
forEach(callback): Calls a function for each element in the array.
map(callback): Creates a new array by applying a function to each element of the original array.
filter(callback): Creates a new array containing elements that pass a test implemented by the provided function.
find(callback): Returns the first element in the array that satisfies the provided testing function.
findIndex(callback): Returns the index of the first element in the array that satisfies the provided testing function.
reduce(callback, initialValue): Applies a function to each element in the array to reduce it to a single value.

*/

let fruits = ["apple", "banana", "orange"];

// Accessing array elements

// Using index:

// console.log(fruits[0]); // Output: apple

// Using method:
// console.log(fruits.length)
// console.log(fruits.indexOf("aefe")) // -1
// console.log(fruits.indexOf("banana")) // 1
// console.log(fruits.lastIndexOf("orange")) // 2
// console.log(fruits.includes("apple")) // true

// Adding elements
// fruits.push("guava", "mango")
// fruits.unshift("mango")

// Removing elements
// fruits.pop()
// fruits.shift()
// fruits.splice(0,2,"mango")
// console.log(fruits)

// concat
let even_nums = [2,4,6,8,10]
let odd_nums = [1,3,5,7,9]

let combined_nums = even_nums.concat(odd_nums)

// console.log(combined_nums)

// join

// let combined_str = combined_nums.join(" - ")

// console.log(combined_str)

// reverse

// combined_nums.reverse()

// console.log(combined_nums)

// slice

// console.log(combined_nums)
// let sub_array = combined_nums.slice(2,5)

// console.log(sub_array)

// sort

// combined_nums.sort()

// console.log(combined_nums)


// forEach

// combined_nums.forEach((num, index) => {
//     console.log(`Element at index ${index} is: ${num}`);
// });


// map

let doubled_nums = combined_nums.map(num => num * 2);

// console.log(doubled_nums)

// filter

let even_numbers = combined_nums.filter(num => num % 2 !== 0);

// console.log(even_numbers)

// find

let first_odd_number = combined_nums.find(num => num % 2 !== 0);

// console.log(first_odd_number)


// findIndex

let first_odd_index = combined_nums.findIndex(num => num % 2 !== 0);

console.log(first_odd_index)

// reduce

let sum_of_numbers = combined_nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum_of_numbers)