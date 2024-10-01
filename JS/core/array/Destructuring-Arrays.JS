// Destructuring is a convenient way to extract values from arrays or objects into distinct variables.

const colors = ['red', 'green', 'blue'];

// Destructuring
const [firstColor, secondColor] = colors; // firstColor = 'red', secondColor = 'green'

// Skipping elements
const [, , thirdColor] = colors; // thirdColor = 'blue'

// Default values
const [a, b, c = 'yellow'] = ['orange', 'purple']; // a = 'orange', b = 'purple', c = 'yellow'
