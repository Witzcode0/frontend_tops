/* 
Method Overloading (Compile-time Polymorphism, Not Directly Supported)

JavaScript does not support method overloading (having multiple methods with the same name but different parameter types) like some other languages (e.g., Java, C++). However, you can simulate overloading by inspecting the arguments passed to a function.
*/

class Calculator {
    calculate(a, b, operation) {
        if (operation === "add") {
            return a + b;
        } else if (operation === "subtract") {
            return a - b;
        } else if (typeof b === 'undefined') { 
            return a * a;
        } else {
            throw new Error("Invalid operation.");
        }
    }
}

let calc = new Calculator();

console.log(calc.calculate(5, 3, "add"));       
console.log(calc.calculate(5, 3, "subtract")); 
console.log(calc.calculate(5));                 
