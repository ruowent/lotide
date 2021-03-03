const eqArrays = function(arrayOne, arrayTwo) {

  if (arrayOne.length === arrayTwo.length) {

    for (let i = 0; i < arrayOne.length; i++) {

      if (arrayOne[i] !== arrayTwo[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;

};


const assertArraysEqual = function(arrayOne, arrayTwo) {

  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`[${arrayOne}] equals to [${arrayTwo}].`);
  } else {
    console.log(`[${arrayOne}] does not equal to [${arrayTwo}].`);
  }

};

const middle = function(array) {

  const arrLength = array.length;

  if (arrLength < 3) {
    return [];
  } else if (arrLength % 2 === 0) {
    return array.slice(arrLength/2 - 1, arrLength/2 + 1);

  } else if (arrLength % 2 !== 0) {

    return array.slice(Math.floor(arrLength/2),Math.floor(arrLength/2)+1);
  }
}

assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle(['apple','peach','banana','watermelon','orange','pear']), ['banana','watermelon']);