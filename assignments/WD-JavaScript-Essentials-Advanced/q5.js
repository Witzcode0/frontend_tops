// What is Condition Statement?

// A conditional statement in programming is a feature that allows a program to perform different actions based on whether a specified condition is true or false. It helps in decision-making processes within a program by executing certain blocks of code when certain conditions are met.

// 1] if Statement

// Executes a block of code if the specified condition is true.

let age = 18;
if (age >= 18) {
    console.log("You are an adult.");
}

// 2] if...else Statement

// Executes one block of code if the condition is true, and another block if the condition is false.

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// 3] if...else if...else Statement

// Allows checking multiple conditions. Executes different blocks of code depending on which condition is true.

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C");
}


// 4] switch Statement

// Evaluates an expression and executes code based on matching cases.

let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}

