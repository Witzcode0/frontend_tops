// Write a JavaScript program to convert an array of objects into CSV string?

const data = [
    { name: 'Alice', age: 25, city: 'New York' },
    { name: 'Bob', age: 30, city: 'Los Angeles' },
    { name: 'Charlie', age: 35, city: 'Chicago' }
];

const keys = Object.keys(data[0]);

const csvData = [];
csvData.push(keys.join(','));

for ( const obj of data) {
    const values = keys.map(key => obj[key]);
    csvData.push(values.join(','));
}

console.log(csvData);