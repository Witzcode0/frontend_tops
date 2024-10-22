// Write to find the largest of three numbers in JS?

const findLargest = (a, b, c) => {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(10, 20, 30));