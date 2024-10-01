// throw Keyword
// You can manually throw an exception using the throw keyword. This is useful when you want to raise custom errors based on certain conditions.

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(10, 2)); 
    console.log(divide(10, 0));  
} catch (error) {
    console.log("Error:", error.message); 
}
