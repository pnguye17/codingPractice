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
  if (!strs.length) return ''

  for (let i = 0 ; i <= strs[0].length; i++){
    if(!strs.every((string) => string[i] === strs[0][i])){
        return strs[0].slice(0,1)
    }
  }
    return strs[0]
};