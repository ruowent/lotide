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
    console.log(`🚫🚫🚫 Assertion Failed: [${arrayOne}] !== [${arrayTwo}].`);
  }
   
};

const takeUntil = function(array, callback) {
  
  const results = [];

  for (let item of array) {

    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }    
  }
  return results;
}

// callback function breakdown
// function callback(item) {
//   if (item < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);