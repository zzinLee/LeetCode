/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
  let last = nums.length - 1;
  let first = 0;
  let mid = Math.floor((last + first) / 2);
  
  while (first <= mid && mid <= last) {
    if(nums[mid] === target) return mid;

    if (nums[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }

    mid = Math.floor((last + first) / 2);
  }

  return -1;
}