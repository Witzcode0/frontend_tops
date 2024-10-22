// Use console.log() and escape characters to print the following pattern in JS?
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125

let num = 5;

for (let row = 1; row <= num; row++) {
    let result = ""; 
    for (let col = 1; col <= num; col++) {
        if (col == 1) {
            result += row; 
        } else if (col == 2) {
            result += " 1"; 
        } else if (col == 3) {
            result += ` ${row}`; 
        } else if (col == 4) {
            result += ` ${row * row}`; 
        } else if (col == 5) {
            result += ` ${row * row * row}`;
        }
    }
    console.log(result);
}