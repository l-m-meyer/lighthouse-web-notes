// map is for transformations, given an array the exact same length as the one you gave it
const dogs = ['Stella', 'Duff', 'Phoebe', 'Max', 'Dan', 'Dioji', 'Tootsie'];

// the purpose of map is to return something
const mapped = dogs.map((dog) => {
  return `${dog} needs a walk`;
});

console.log(mapped);

/** Steps for .map() */
// iterate through an array
// call a callback for each element in the array
// take the callback's return value and push it into another array

// *** always creates a new array

// our version of .map()
const ourMap = (arr, cb) => {
  const newArray = [];

  // iterate through an array
  for (const element of arr) {
    // take the callback's return value and push it into another array
    const returnVal = cb(element);
    newArray.push(returnVal); // same as newArray.push(cb(element));
  }
  return newArray;
};

const mappedDogs = ourMap(dogs, dog => `${dog} needs a treat`);