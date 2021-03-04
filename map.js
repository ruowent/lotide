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
    console.log(`✅✅✅ Assertion Passed: [${arrayOne}] === [${arrayTwo}].`);
  } else {
    console.log(`🚫🚫🚫 Assertion Failed: [${arrayOne}] === [${arrayTwo}].`);
  }
   
};


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
// console.log(results1);

const results2 = map(words, word => word.length);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, [6,7,2,5,3]);
