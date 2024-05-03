/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const result = [];
  const arr = nums.sort((a, b) => a - b);

  if (arr.length < 3) return result;

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) return result;

    if (nums[i] === nums[i - 1]) continue;

    let low = i + 1;
    let high = nums.length - 1;

    while (low < high) {
      const sum = nums[i] + nums[low] + nums[high];
      
      if (sum === 0) {
        result.push([nums[i], nums[low], nums[high]]);

        while (low < high && nums[low] === nums[low + 1]) low++;
        while (low < high && nums[high] === nums[high - 1]) high--;
        low++;
        high--;

        continue;
      }

      if (sum > 0) {
        while (low < high && nums[high] === nums[high - 1]) high--;
        high--;
        
        continue;
      }

      while (low < high && nums[low] === nums[low + 1]) low++;
      
      low++;
    }
  }

  return result;
}
