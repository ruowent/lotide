const assertEqual = function(actual, expected) {

  (actual === expected) ? console.log(`Assertion Passed: ${actual} === ${expected}`) : console.assert(actual === expected, `${actual} !== ${expected}`);


};

const countLetters = function(words) {

  const result = {};
  words = words.split(' ').join('');
  for (let word of words) {

    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }

  }
  return result;
}


const words = 'lighthouse in the house';
//const letter = 'h';
//assertEqual(countLetters(words),2);
console.log(countLetters(words));
