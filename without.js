const assertArraysEqual = function(arrayOne, arrayTwo) {

    for (let i = 0; i < arrayOne.length; i++) {

      if (arrayOne[i] !== arrayTwo[i]) {
        console.log(`${arrayOne} does not equal to ${arrayTwo}.`);
      }
    }
  console.log(`${arrayOne} equals to ${arrayTwo}.`);
};


const without = function(words, itemsToRemove) {

  let newArray =[];

  for (const word of words) {

    for (const itemToRemove of itemsToRemove) {

      if (words.indexOf(itemToRemove) !== -1 && word !== itemToRemove) {
        newArray.push(word);
      }

    }

  }

  console.log(newArray);

}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

