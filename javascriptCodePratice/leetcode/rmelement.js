/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
 
    for(let i = 0; i < nums.length; i++){
        if ( nums[i] === val){
            delete nums[i]; 
        }
    }

    let array = nums.filter(function(e) {
                
        return e
    })

    return array;

}

var mySqrt = function(x) {
    
    return Math.floor(Math.pow(x, 0.5))

};



/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function(strs) {
    //compare each string value and iterate the first letters
    
};