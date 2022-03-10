const dogs = ['Stella', 'Duff', 'Phoebe', 'Max', 'Dan', 'Dioji', 'Tootsie'];

dogs.forEach((dog) => {
  console.log(`who is a good do? ${dog} is`);
});

/** Two things to do for .forEach() */
// iterate through a given array
// call a provided callback for each element in the array

// shorthand for callback is cb
const ourForEach = (arr, cb) => {
  // iterate through a given array
  // good practice to give the iteration general names
  for (const element of arr) {
    cb(element);
  }
};

// call our version of .forEach();
ourForEach(dogs, (dog) => {
  console.log(`${dog} is still a good dog`);
});