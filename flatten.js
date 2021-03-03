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


// why does the question asked to include the above helper functions?

const flatten = function(arrays) {

  let output = [];

  for (const array of arrays) {

    if (Array.isArray(array)) {

      for (const arr of array) {
        output.push(arr);
      }
    } else {
      output.push(array);
    }
  }
  console.log(output);
};


flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]
