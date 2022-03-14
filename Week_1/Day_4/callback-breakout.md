# Callback Breakout Session

## Callback
What is a callback?

A callback function is a function passed into another function as a variable

## Map
Always returns a new array.

## Filter
Returns an array of truthy values based on the passed condition.

## Edge Cases/Test Cases

### Identifying Edge Cases
Let's say that we have a function that is supposed to check two arrays.
It needs to verify all of the elements in them as well.

[] === [0, 1] would evaluate to true because they are both arrays even though they are not equal.

1. Check for type.
- [] === {} => should return false
- [] === [] => should return true

2. Check that lengths are equal.
- array1.length vs array2.length
- [] === [0,1] => should return false
- [] === [] => should return true // checking extremes
- [0,0,0,0] === [1,1,1,1] => should return true // checking extremes

3. Check each element
// check a false case and one true
[0, 2] === [0, 1] => false
[0, 1, 2] === [0, 1, 2] => true