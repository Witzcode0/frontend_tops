// Q.20 Write to show




// i. Monday to Sunday using switch case in JS?
let dayOfWeek = "Monday";

switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's a weekend");
        break;
    default:
        console.log("Invalid day");
}


// ii. Vowel or Consonant using switch case in JS?

let character = "a";

switch (character.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("The character is a vowel");
        break;
    default:
        console.log("The character is a consonant");
}