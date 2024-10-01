// Rethrowing Exceptions
// Sometimes, you may want to catch an error, handle it partially, and then rethrow the error for further handling.

try {
    try {
        throw new Error("Something went wrong!");
    } catch (error) {
        console.log("Caught the error, but rethrowing...");
        throw error;  // Rethrowing the error
    }
} catch (error) {
    console.log("Handled error again:", error.message);
}
