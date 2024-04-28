/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function addedInteger(nums1, nums2) {
  const diff = Math.min(...nums2) - Math.min(...nums1);
  return diff;
}