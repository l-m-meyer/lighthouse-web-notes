# March 14, 2022

## Testing
- Why do we write tests?
* To amek sure our code is running properly
* To ensure things are working well
* To make sure new code doesn't mess with old code
* To state explicitly what we actually want our code to do
* To save future self from any problems after pushing the code and it breaks

### Test Driven Development (TDD)
We write tests first, then we write the code to pass the tests.

* Writing tests will initially be a slow process. 

* The more we write tests, the better off we will be in the future.

* Code-along [palindrome.js](./palindrome.js)
* Test code-along: [palindromeTest.js](./test/palindromeTest.js)

## Module Exports
Module exports only exist on the JS backend, NodeJS.
### Creating and consuming modules using Node's default CommonJS syntax (`module.exports` and `require`)

## TDD built-in methods (console.assert)
First we tested the palindrome.js application using a series of console.log() statements. 

Next, we created a separate file [palindromeTest.js](./palindromeTest.js) (the first) and switched all console.log() statements to console.assert() statements.

## Mocha and Chai
`npm init` then
`npm install mocha chai --save-dev` for install

## Testing with Mocha Chai
###Describe block and it 
```javascript
describe('palindrome tests', () => {
  it('takes abba as input and returns true', () => {
    assert.isTrue(palindrome('abba'));
  })
})
```