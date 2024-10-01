// try...catch Block
// The try...catch block is used to handle errors that may occur within the try section of the code. If an error occurs, control is passed to the catch block.

try {
    let result = 10 / 0;
    console.log(result);

    let x = y;
} catch (error) {
    console.log("An error occurred:", error.message);
}

console.log("Program continues...");
