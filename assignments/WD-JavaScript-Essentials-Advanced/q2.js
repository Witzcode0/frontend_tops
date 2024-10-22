// Check if typeof '10' is exactly equal to 10. If not make it exactly equal?

let num = '10';

if (typeof num !== 'num') {
    res = Number(num);
}

if (res === 10 ){
    console.log('The number is now exactly 10');
} else {
    console.log("The v=number is not equale to 10.");
}
