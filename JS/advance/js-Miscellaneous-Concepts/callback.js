// Miscellaneous concepts in JavaScript typically cover a wide range of features like callback functions, events, timers, and error handling. Here are some important miscellaneous concepts:

// Callback Functions: Functions that are passed as arguments to other functions and executed after some operation is complete. Commonly used for asynchronous operations.

function greet(name, callback) {
    console.log('Hello ' + name);
    callback();
}

function sayGoodbye() {
    console.log('Goodbye!');
}

greet('Brijesh', sayGoodbye);
