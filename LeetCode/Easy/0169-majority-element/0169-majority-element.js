/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  const l = Math.floor(nums.length/2);
  const map = {};

  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
    
    if (map[num] > l) {
      return num;
    }
  }
}