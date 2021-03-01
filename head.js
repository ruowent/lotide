const assertEqual = function(actual, expected) {

  (actual === expected) ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected, `${actual} !== ${expected}`);


};

const head = function(array) {
  //return _.head(array);
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");