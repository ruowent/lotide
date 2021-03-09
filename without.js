const without = function(words, itemsToRemove) {

  let newArray = [];

  for (const word of words) {

    for (const itemToRemove of itemsToRemove) {

      if (words.indexOf(itemToRemove) !== -1 && word !== itemToRemove) {
        newArray.push(word);
      }

    }

  }

  return newArray;

};

module.exports = without;