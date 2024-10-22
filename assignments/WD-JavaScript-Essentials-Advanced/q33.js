// Write a JavaScript program to compare two objects?


function compareObjects(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

const object1 = { name: 'Alice', age: 25 };
const object2 = { name: 'Alice', age: 25 };
const object3 = { name: 'Bob', age: 30 };

console.log(compareObjects(object1, object2));
console.log(compareObjects(object1, object3)); 
