/* let prom = new Promise(function(resolve, reject){
    if(condition){
        resolve("Here is a success.");
    }else{
        reject("Here is a failure");
    }

});

let onFullFillment = (result) => {
    console.log(result);
};

let onRejection = (error) =>{
    console.log(error)
};

// callback fucntion
prom.then(onFullFillment);

prom.catch(onRejection);

*/

// let complete = true;

// function prom(complete){
//     return new Promise(function (resolve, reject){
//         setTimeout(() =>{
//             if (complete){
//                 resolve("Completed");
//             }else{
//                 reject("Failed");
//             }
//         }, 2000)
//     });
// }

// prom(complete).then((result) => {
//     console.log(result);
// }).catch((error) =>{
//     console.log("ERROR :", error);
// });

