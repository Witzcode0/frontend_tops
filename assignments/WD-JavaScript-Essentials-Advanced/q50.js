// Array vs object defences in JS? 

// In JavaScript, arrays and objects are two fundamental data structures that serve different purposes. An array is an ordered list of elements that can be accessed by their index (numerical position), making it ideal for storing collections of items, such as a list of fruits or numbers. Arrays maintain the order of their elements and come with built-in methods like push(), pop(), and map() to manipulate the list easily.

// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits[1]);  // "banana"


// In contrast, an object is a collection of key-value pairs, where each value is accessed by a unique key (a string). This makes objects suitable for representing entities with various properties, such as a person with a name and age. Objects do not guarantee order of their properties, but modern JavaScript engines generally maintain insertion order. While arrays are typically used for sequential data, objects are better for structured data where you want to refer to values by descriptive names.

// let person = { name: "John", age: 30 };
// console.log(person.name);  // "John"
