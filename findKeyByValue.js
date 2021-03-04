const assertEqual = function(actual, expected) {

  (actual === expected) ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected, `${actual} !== ${expected}`);


};

const findKeyByValue = function(obj, name) {

  for (let key in obj) {

    if (obj[key] === name) {

      return key;

    }
  }
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);