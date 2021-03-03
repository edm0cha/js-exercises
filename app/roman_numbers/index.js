/**
 * @param {string} s
 * @return {number}
 */
exports.romanToInt = function(s) {
    var romanDigits = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    var dateString = s.split("");
    var dateCounter = 0;
    var lastNumber=0;

    for(var i = dateString.length -1 ; i >= 0 ; i--){
        if(romanDigits[dateString[i]] >= lastNumber){
            dateCounter += romanDigits[dateString[i]];
        }else {
            dateCounter -= romanDigits[dateString[i]]
        }
        lastNumber = romanDigits[dateString[i]];
    }
    return dateCounter;
};
