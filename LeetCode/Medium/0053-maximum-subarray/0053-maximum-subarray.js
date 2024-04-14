/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}