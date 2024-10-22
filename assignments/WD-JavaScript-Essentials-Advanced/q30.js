
import readline from 'node:readline/promises'; 
import { stdin as input, stdout as output } from 'node:process'; 

function isPalindrome(num) {
    const strNum = num.toString(); 
    const reversedStrNum = strNum.split('').reverse().join(''); 
    return strNum === reversedStrNum; 
}

const rl = readline.createInterface({ input, output });

let count = 0; 
const numbers = []; 

async function askForNumber() {
    while (count < 3) {
        const input = await rl.question(`Enter number ${count + 1}: `);
        const number = parseInt(input); 

        if (!isNaN(number)) { 
            numbers.push(number); 
            count++; 
        } else {
            console.log('Please enter a valid number.');
        }
    }

    rl.close(); 
    checkPalindromes();
}

function checkPalindromes() {
    numbers.forEach((num) => {
        if (isPalindrome(num)) {
            console.log(`${num} is a palindrome.`);
        } else {
            console.log(`${num} is not a palindrome.`);
        }
    });
}

askForNumber();
