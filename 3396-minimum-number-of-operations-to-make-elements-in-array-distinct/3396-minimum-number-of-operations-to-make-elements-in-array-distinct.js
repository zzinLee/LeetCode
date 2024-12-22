/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const setting = new Set();
    const len = nums.length;
    
    for (let i = len - 1; i >= 0 ; i--) {
        if (setting.has(nums[i])) {
            return Math.floor(i/3) + 1;
        } else {
            setting.add(nums[i]);
        }
    }
    
    return 0;
};