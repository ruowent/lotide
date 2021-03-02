// first compare length of two arrays, return false if doesn't match
// loop though array values and compare
const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (arrayOne.length === arrayTwo.length) {

    for (let i = 0; i < arrayOne.length; i++) {

      if (arrayOne[i] !== arrayTwo[i]) {
        return `${arrayOne} does not equal to ${arrayTwo}.`;
      }
    }
  } else {
    return `${arrayOne} does not equal to ${arrayTwo}.`;
  }
  return `${arrayOne} equals to ${arrayTwo}.`;
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 5, 3]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));
