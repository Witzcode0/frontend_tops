// Custom Error Types
// You can define your own custom error types by extending the built-in Error class. This is helpful for creating domain-specific error handling.

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";  
    }
}

try {
    throw new CustomError("This is a custom error!");
} catch (error) {
    console.log(`${error.name}: ${error.message}`);  
}
