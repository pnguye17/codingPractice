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
    //split each string in the array in substrings to iterate
    let prefixContainer = []
    let prefix = ""
    for (let i = 0; i < strs.length; i++){
        for (let j = 1; j < strs.length; j++){
            let initialWord = strs[i].split('').shift()
            let compareWord = strs[j].split('').shift()
            if (initialWord === compareWord){
                prefixContainer.push(initialWord)
                initialWord = ''
                compareWord = ''
            }
        }
    }
    prefix = prefixContainer.join('')
    console.log(prefix)
};