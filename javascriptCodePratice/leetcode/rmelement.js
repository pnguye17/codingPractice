/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    //convert nums to nums array
    //loop two the array and remove number

    for(let i = 0; i < nums.length; i++){
        if (nums[i] === val){
            nums.removeElement(val);
        }
    }

    console.log(nums);


};


