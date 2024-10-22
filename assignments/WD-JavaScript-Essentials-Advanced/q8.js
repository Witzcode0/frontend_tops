// Convert temperature Fahrenheit to Celsius? (Conditional logic Question)

let Fahrenheit = 98;


if (Fahrenheit >= 32) {
    let Celsius = (Fahrenheit - 32) * 5/9;
    console.log(`${Fahrenheit} degrees Fahrenheit is equal to ${Celsius} degrees Celsius.`);
} else {
    console.log(`${Fahrenheit} degrees Fahrenheit is not a valid temperature.`);
}