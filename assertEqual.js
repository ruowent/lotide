const assertEqual = function(actual, expected) {

  (actual === expected) ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected, actual + ' !== ' + expected);


};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(50, 1);