const findKeyByValue = function(obj, name) {

  for (let key in obj) {

    if (obj[key] === name) {

      return key;

    }
  }
};

module.exports = findKeyByValue;