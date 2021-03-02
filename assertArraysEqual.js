const assertEqual = function(actual, expected) {

  (actual === expected) ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.log(`Assertion Failed: ${actual} !== ${expected}`);
  
};

// first compare length of two arrays, return false if doesn't match
// loop though array values and compare
const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length === arrayTwo.length) {

    for (let i = 0; i < arrayOne.length; i++) {

      if (arrayOne[i] !== arrayTwo[i]) {
        return `${arrayOne} does not equal to ${arrayTwo}.`;
      }
    }
  } else {
    return `${arrayOne} does not equal to ${arrayTwo}.`;;
  }
  return `${arrayOne} equals to ${arrayTwo}.`;;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [1, 5, 3]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2, 3], [1, 5, 3]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);