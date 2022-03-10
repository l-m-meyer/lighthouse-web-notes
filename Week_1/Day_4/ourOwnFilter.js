const dogs = ['Stella', 'Duff', 'Phoebe', 'Max', 'Dan', 'Dioji', 'Tootsie'];

const filteredDogs = dogs.filter((dog) => {
  return dog.length <= 4;
});

console.log(filteredDogs);

/** Steps for .filter() */
// iterate through the provided array
// call the provided callback for each elemetn in the array
// listen to the return value, if true, keep the element

// our version of .filter()
const ourFilter = (arr, cb) => {
  const newArray = [];
  // iterate through the array
  for (const element of arr) {
    const returnVal = cb(element);

    // checks if the callback is true, if so pushes the element to the new array
    if(returnVal){
      newArray.push(element);
    }
  }
  return newArray;
};

const ourFilteredDogs = ourFilter(dogs, dog => {
  return dog[0].toLowerCase() === 'd';
});

console.log(ourFilteredDogs);