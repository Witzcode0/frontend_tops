// app.js
import { add, subtract } from './math.js';
import User from './user.js';

console.log(add(5, 3));  // Output: 8
console.log(subtract(5, 3));  // Output: 2

const user = new User('Beijesh');
user.greet();  // Output: Hello, Beijesh
