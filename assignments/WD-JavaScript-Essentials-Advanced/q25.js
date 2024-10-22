// Write to print number in reverse order e.g.: number = 64728 ---> reverse =82746 in JS?

let number = 64728;

let reverse = 0;

while(number > 0){
    reverse = reverse * 10 + number % 10;
    number = Math.floor(number / 10);
}

console.log(reverse);
