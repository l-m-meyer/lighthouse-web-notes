# March 9, 2022

## Data Types
### Primitive Data Types
* Number
  - `NaN` is not a data type, but a result of a Number
  - False value === `0`

* String
  - False value is `""`

* Boolean
  - False value is `false`

* Undefined
  - Are false

* Null
  - Are false

* Symbol

* BigInt
  - False value === `0`

### Structural Data Types
* Objects
  - example of an Object:
  ```javascript
  const someMug = {
    color: 'white',
    material: 'ceramic',
    capacity: 320
  };
  ```

* Arrays
  - example where Object would be better store of information:
  ```javascript
  const someOtherMug = ['white', 'cermaic', 320];
  ```
  - example of an Array storing Objects efficiently:
  ```javascript
  const listOfMugs = [someMug];
  ```

## Object Fundamentals
Keys in Objects must have a value pair

Objects can store:
  * Numbers
  * Strings
  * Booleans
  * Objects
  * Arrays
  * Functions

## Iterating Over Objects
* For...in
```javascript
for (const key in someMug) {
  if (someMug[key] === 'white') {
    console.log('Found the value at the key", key);
  }
}
```
  * Note: can accidentally return the parent of a nested object

* For...of (with Object.keys or Object.values)
```javascript
for (const key of Object.keys(somMug)) {
  if (someMug[key] === 'white') {
    console.log('Found the value at the key", key);
  }
}
```

* Note: Object.entries is not compatible with all values yet

## Object Keys
### Square Bracket Notation
  * Can access values of a variable
  * Must use `""` to access key name
  * Square brackets are used if the key name is unknown or iterating over an object
  * When in doubt, use square bracket notation
  ``` javascript
  const key = "color";
  someMug[key]; // Looks for the value of the key called `color`, returns 'white'
  someMug["color"]; // Also works
  ```

### Dot Notation
  * Uses a known key name to access the value
  * Must not have any unsual naming conventions like spaces in the key name (E.g., `"hex value": 0000)
  ```javascript
  someMug.color; // returns 'white'
  someMug.key; // also returns 'white' but uses a variable to access the value stored
  ```

### Delete a Key From an Object
  * `delete` operator before accessing the Object key

* Add a Key Value to an Object
```javascript
someObject.sound = "squeak squeak";
someObject["sound"] = "squeak squeak";
```

### Deep Keys
```javascript
const marianaTrench = {
  name: 'surface',
  sublevel: {
    name: '1st plateau',
    sublevel: {
      name: '2nd plateau',
      sublevel: {
        name: '3rd plato', // intential typo to fix
      }
    }
  }
}

marianaTrench.sublevel.sublevel.sublevel.name = '3rd plateau'; // Dot notation, long way

// cleaner way to access nested Objects
const firstPlateu = marianaTrench.sublevel;
const secondPlateu = firstPlateu.sublevel;
const thirdPlateu = secondPlateu.sublevel;

thirdPlateu.name = '3rd Plateu'; //updates the value of the thirdPlateu key

console.log(JSON.stringify(marianaTrench)); // makes the Object readable from the console, not necessary

// This code will override the name in the `person` Object
const person = {name: 'Derek, occupation: 'Student'}; // stores the reference to the object
const otherPerson = person;
otherPerson.name = 'Patrice';

// This way will not mutuate the original object
let name = "Derek";
let otherName = name;
otherName = "Patrice";

console.log(name, otherName);
```
## Functions as Object Methods
The goal of using methods in Objects is to use functions that relate the the Object itself.

The `drink` method below could be reused with tea in another object and you would call it the same way, but the output would contextually relate to the Object from which it was defined.

```javascript
const someMugOfCoffee = {
  color: "transparent",
  material: "glass",
  capacity: 500,
  drink: function() {
    console.log("Mmm. That coffee is great!");
  } 
}

someMugOfCoffee.drink(); //calls the function;
```

## Sharing Objects
[pythontutor.com](https://pythontutor.com/javascript.html#mode=edit
) ==> Has a visualizer to step through the code in Python and JavaScript

As long as we don't change the reference (Object name), then we can access and mutate the contents of an Object.


## What is `this`?
Represents the current context in which you are working/where it was defined.

`this` is always able to access the parent Object, but not the siblings of the parent Object.

```javascript
const mugOfCoffee = {
  color: "transparent",
  material: "glass",
  capacity: 500,
  amountOfCoffee: 500,
  drink: function() {
    this.amountOfCoffee -= 50; // subtracts 50 from amountOfCoffee each time drink() is called
    console.log("Mmm. That coffee is great!");
  } 
}

mugOfCoffee.drink(); //calls the function;
```