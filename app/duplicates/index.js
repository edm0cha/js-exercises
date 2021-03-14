 /**
  * @param {array} numbers
  * @return {boolean}
  */
exports.checkDuplicates = numbers => {
  var seen = new Array(numbers.length).fill(false);
  for(var i = 0; i < numbers.length; i++){
    if(seen[numbers[i]])
      return true;
    seen[numbers[i]] = true;
  }
  return false;
}
