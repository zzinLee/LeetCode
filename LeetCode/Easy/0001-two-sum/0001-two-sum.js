/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const pairNumbers = new Map();

  for (let index = 0; index < nums.length; index++) {
    pairNumbers.set(nums[index], index);
  }

  for (let index = 0; index < nums.length; index++) {
    const number = nums[index];
    const targetAbstraction = target - number;

    if (pairNumbers.has(targetAbstraction)) {
      const targetIndex = pairNumbers.get(targetAbstraction);

      if (targetIndex !== index) {
        return [index, targetIndex];
      }
    }
  }
};
