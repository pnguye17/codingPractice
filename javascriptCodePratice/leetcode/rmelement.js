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


