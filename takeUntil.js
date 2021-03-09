const takeUntil = function(array, callback) {
  
  const results = [];

  for (let item of array) {

    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }    
  }
  return results;
}

// callback function breakdown
// function callback(item) {
//   if (item < 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

module.exports = takeUntil;