const flatten = function(arrays) {

  let output = [];

  for (const array of arrays) {

    if (Array.isArray(array)) {

      for (const arr of array) {
        output.push(arr);
      }
    } else {
      output.push(array);
    }
  }
  return output;
};

module.exports = flatten;

