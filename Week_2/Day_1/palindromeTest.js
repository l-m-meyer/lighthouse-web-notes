const palindrome = require('./palindrome');

/////////////// TESTS //////////////////// SHOULD HAVE THEIR OWN FILES
console.log(palindrome('abba') === true); //even number of letters
console.log(palindrome('racecar') === true); //odd number of letters
console.log(palindrome('hello') === false);
console.log(palindrome('hi') === false);
console.log(palindrome('my gym') === true) //spaces should not matter
console.log(palindrome(' my gym ') === true) //spaces should not matter


// EDGE CASES
console.log(palindrome('a') === true);
console.log(palindrome('') === false);
console.log(palindrome({a: 'a'}) === false);
console.log(palindrome([1, 2, 3, 2, 1]) === false);