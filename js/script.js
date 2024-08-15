const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce((acc, val) => acc + val, 0);

console.log(`The sum of ${numbers} is ${sum}.`);
