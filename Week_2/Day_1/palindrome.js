/** 
 * Palindrome()
 * Write a function that takes in a stirng,
 * if the stirng matches the string backwards, return true, 
 * else return false 
 */ 

const palindrome = string => {
  // if string is falsey value or not a string, return false
  if (!string || typeof string !== 'string') return false;
  
  // remove the spaces from the string
  const sanitizedStr = string.split(' ').join('').toLowerCase();
  const sanitizedStrReverse = sanitizedStr.split('').reverse().join('');

  if (sanitizedStr === sanitizedStrReverse) { //more efficient, less code
    return true;
  }
  return false;
};

module.exports = palindrome;





// loop through the string (by index); long way
/*for (let index in sanitizedStr) {
  if(sanitizedStr[index] !== sanitizedStr[sanitizedStr.length - 1 - index]) {
    return false;
  }
}
return true; */