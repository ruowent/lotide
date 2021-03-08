const middle = function(array) {

  const arrLength = array.length;

  if (arrLength < 3) {
    return [];
  } else if (arrLength % 2 === 0) {
    return array.slice(arrLength/2 - 1, arrLength/2 + 1);

  } else if (arrLength % 2 !== 0) {

    return array.slice(Math.floor(arrLength/2),Math.floor(arrLength/2)+1);
  }
};

module.exports = middle;

