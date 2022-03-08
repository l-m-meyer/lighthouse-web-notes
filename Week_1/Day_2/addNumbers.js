// We are tasted to create a program that takes in any number of command line arguments which will be numbers
// Add the numbers together and return a sum of all the numbers


const addNumbers = (arr) => {
  // initialize an accumulator
  let sum = 0;
  
  // iterate over numbers Array
  for (let element of arr) {
    sum += Number(element);
  }
  return sum;
}

// retrieve command line arguments and store Numbers in Array numbers
const args = process.argv;
const numbers = args.slice(2);

// call the function
const answer = addNumbers(numbers);
console.log("Input: ", numbers, "Output ==>", answer);