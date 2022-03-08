// We are tasted to create a program that takes in any number of command line arguments which will be numbers
// Add the numbers together and return a sum of all the numbers

// retrieve command line arguments and store Numbers in Array numbers
const args = process.argv;
const numbers = args.slice(2);

const addNumbers = (arr) => {
  // initialize an accumulator
  let sum = 0;
  
  // iterate over numbers Array
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  console.log(sum);
}

// call the function
addNumbers(numbers);
addNumbers([4, 4, 4, 4]);