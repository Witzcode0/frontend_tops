// Write a JavaScript Program to display the current day and time in the following 
// format. Sample Output: Today is Friday. Current Time is 12 PM: 12 : 22 2 ?

const today = new Date();

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = dayNames[today.getDay()];

let hours = today.getHours();

const minutes = today.getMinutes();

const seconds = today.getSeconds();

const ampm = hours >= 12 ? "PM" : "AM";

hours = hours % 12 || 12;

console.log(`Today is ${day}. Current Time is ${hours} ${ampm}: ${minutes} : ${seconds}`);