/**
 * @param {number} x
 * @return {boolean}
 */


var isPalindrome = function(x) {
    let str1 =  x.toString().split()
    let str2 = str1.reverse();
    console.log(str1)
    console.log(str2)
    if (str1 === str2 ) {
        return true
    } 
        return false
    
};

isPalindrome(12);

