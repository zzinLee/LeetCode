/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
  if (nums.length === 1) return true;
  
  let prev = nums[0] % 2;
  
  for (let i = 1; i < nums.length; i++) {
    let next = nums[i] % 2;
    
    if (prev === next) {
      return false;
    } else {
      prev = next;
    }
  }
  
  return true;
};