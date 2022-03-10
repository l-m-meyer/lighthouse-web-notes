# March 10, 2022

## Functions as Values
Function declarations get hoisted to the top of the file, but below is best practice.

Declare the function THEN use the function.
```javascript
const funcName = function(name) {
  console.log('hello there ${name});
}
```

### Functions are Objects
You can treat a function just like any other Object in JavaScript.

"First Class Citizens": A function is an object in JavaScript.

In Ruby, functions are not objects, it doesn't have functions as a concept.

## Function Calling vs Function Passing
Functions that get passed into another function to be invoked by that function are called a `callback`.

Using runner functions is common practice rather than calling individual functions themselves (i.e. passing callback functions to a runner function);

## Callbacks and Higher Order Functions
Higher Order Function is a function that takes in another function as an argument.

## Anonymous Functions
Exists in memory for one moment in time.

Anonymous functions are typically called inline.

We use Anonymous functions because naming things are hard!

If a function does not need to be reused all the time, we can just use an anonymous function because it will only be used right now, in that one instance.

.fitler(), .map(), .forEach() all use anonymous functions.

## Arrow Functions
The more you have to type, the more likely you are to make a mistake. Enter arrow functions...

In JS, also referred to as a fat arrow function.

```javascript
const sayHello = name => console.log(`hello there ${name}`);
```
### Benefits of Arrow Functions
1. No need for the f word (function)
2. If there is only one argument, you can omit the parentheses. Two or more, you have to include parentheses.
3. If it is just a one line of code, you don't need the curly braces.
4. Implicit return: can omit the curly braces and `return` keyword for one line of code.

### Cons of Arrow Functions
1. Arrow function does not create `this`; needs to be a function() to use `this`. 


## Make Our Own Higher Order Function

## Array Methods
* .map() - transform each elemetn in some way
- For transformations
- Creates a copy

* .forEach() - do a thing for each element
- loops through an array

* .filter() - return a smaller array than we started
* .sort()
- changes the original array in place

* .reduce() - take an array and convert it to a single value

## TypeScripts
* adds static types to JS
* Recommends that we learn this after the course.