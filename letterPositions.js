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

const letterPositions = function(sentence) {
  const results = {};
  sentence = sentence.split(' ').join('');


  for (let i = 0; i < sentence.length; i++) {

    if(results[sentence[i]]) {

      results[sentence[i]].push(i);


    } else {
      results[sentence[i]] = [i];
    }
  }

  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
