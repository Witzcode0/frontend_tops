// The Date object in JavaScript represents a specific point in time. It provides methods to create, manipulate, and format dates.

// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

// Creating a Date Object:

const current_time = new Date();
// console.log(current_time)

// get year
console.log(current_time.getFullYear());

// get month (0-11)
console.log(current_time.getMonth());

// get date (1-31)
console.log(current_time.getDate());

// get weekday 
// 0 (Sunday) to 6 (Saturday)
console.log(current_time.getDay())

// get hours (0-23)
console.log(current_time.getHours());

// get minutes (0-59)
console.log(current_time.getMinutes());

// get seconds (0-59)
console.log(current_time.getSeconds());

// get milliseconds (0-999)
console.log(current_time.getMilliseconds());


// Formatting a Date Object:
console.log(current_time.toLocaleString());

console.log(current_time.toLocaleDateString());

console.log(current_time.toLocaleTimeString());

console.log(current_time.toISOString());



// Creating a Date Object with specific values:
// const specificDate = new Date(2024, 9, 27, 10, 30, 0, 0);
// console.log(specificDate);

