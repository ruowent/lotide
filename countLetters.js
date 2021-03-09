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


module.exports = countLetters;
