// Catching Specific Errors
// In JavaScript, different types of errors are thrown for different situations (e.g., ReferenceError, TypeError, SyntaxError). You can catch these errors specifically or use a generic Error object.

try {
    null.toUpperCase();
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Caught a TypeError:", error.message);
    } else {
        console.log("An unknown error occurred:", error.message);
    }
}
