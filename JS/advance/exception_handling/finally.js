// The finally block contains code that will execute after the try and catch blocks, regardless of whether an exception was thrown or not. It's useful for cleanup activities like closing files, releasing resources, etc.

try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("This block always executes.");
}
