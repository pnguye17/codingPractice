/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    let str1 =  x.toString().split('').join()
    let str2 = x.toString().split('').reverse().join()

    if (str1 === str2 ) {
        return true;
    } else {
        return false 
    }
    
};



