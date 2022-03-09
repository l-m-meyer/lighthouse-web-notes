# March 9, 2022

## Primitive Data Types
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
  ```
  const someMug = {
    color: 'white',
    material: 'ceramic',
    capacity: 320
  };
  ```

* Arrays
  - example where Object would be better store of information:
  ```
  const someOtherMug = ['white', 'cermaic', 320];
  ```
  - example of an Array storing Objects efficiently:
  ```
  const listOfMugs = [someMug];
  ```

## Object Fundamentals
* Keys in Objects must have a value pair
* Objects can store:
  * Numbers
  * Strings
  * Booleans
  * Objects
  * Arrays
  * Functions

### Iterating Over Objects
* For...in
```
for (const key in someMug) {
  if (someMug[key] === 'white') {
    console.log('Found the value at the key", key);
  }
}
```

* For...of (with Object.keys or Object.values)

* Note: Object.entries is not compatible with all values yet

## Object Keys
* Square Bracket Notation
  * Can access values of a variable
  * Must use `""` to access key name
  ``` 
  const key = "color";
  someMug[key]; // Looks for the value of the key called `color`, returns 'white'
  someMug["color"]; // Also works
  ```

* Dot Notation
  * Uses a known key name to access the value
  * Must not have any unsual naming conventions like spaces in the key name (E.g., `"hex value": 0000)
  ```
  someMug.color; // returns 'white'
  someMug.key; // also returns 'white' but uses a variable to access the value stored
  ```

## Functions as Object Methods

## Sharing Objects

## What is `this`?