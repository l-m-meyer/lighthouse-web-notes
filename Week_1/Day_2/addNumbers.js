// We are tasted to create a program that takes in any number of command line arguments which will be numbers
// Add the numbers together and return a sum of all the numbers

// How do I get command line arguments
// Once command line arguments have come back...
// How do I add numbers together?
// How do I add multiple Numbers together (where size of elements is different)?

// retrieve command line arguments and store Numbers in Array numbers
const args = process.argv;
const numbers = args.slice(2);
console.log(numbers);