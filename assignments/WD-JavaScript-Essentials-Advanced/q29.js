// Q.29 Use pattern in console.log in JS?
// 1) 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

// let num = 5;

// for(let row = 1; row<=num; row++){
//     let res = "";
//     for(let col = 1; col<=row; col++) {
//         if (col % 2 == 0){
//             res += "0 ";
//         } else {
//             res += "1 ";
//         }
//     }
//     console.log(res.trim());
// }

// A
// B C D
// E F G
// H I J K L
// M N O P Q

// let num = 5;
// let charCode = 65;

// for (let row = 1; row <= num; row++) {
//     let result = "";
//     let numCols = row % 2 === 0 ? row + 1 : row;

//     for (let col = 1; col <= numCols; col++) {
//         result += String.fromCharCode(charCode) + " "; 
//         charCode++
//     }

//     console.log(result.trim());
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


// let num = 5;
// let g_var = 1;

// for(let row = 1; row<=num; row++){
//     let res = "";
//     for(let col = 1; col<=row; col++) {
//         res += `${g_var} `;
//         g_var++;
//     }
//     console.log(res.trim());
// }


let num = 5;

for(let row = 1; row<=num; row++){
    let res = "";
    for(let col = 1; col<=row; col++) {
        res += "* ";
    }
    console.log(res.trim());
}