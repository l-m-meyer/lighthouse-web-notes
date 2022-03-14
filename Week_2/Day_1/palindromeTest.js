const palindrome = require('./palindrome');
const assert = require('chai').assert;

console.assert(true, 'this should be true!');

console.log('Palindrome Tests');

/////////////// TESTS //////////////////// SHOULD HAVE THEIR OWN FILES
assert(palindrome('abba') === true, 'abba should return true'); //even number of letters
assert(palindrome('racecar') === true, 'racecar should return true'); //odd number of letters
console.assert(palindrome('hello') === false, 'hello should return false');
console.assert(palindrome('hi') === false);
console.assert(palindrome('my gym') === true) //spaces should not matter
console.assert(palindrome(' my gym ') === true) //spaces should not matter


// EDGE CASES
console.assert(palindrome('a') === true);
console.assert(palindrome('') === false);
console.assert(palindrome({a: 'a'}) === false);
console.assert(palindrome([1, 2, 3, 2, 1]) === false, 'array should return false');