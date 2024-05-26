/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
  let count = 0;
    nums1.forEach((num1, i) => {
      nums2.forEach((num2, j) => {
        const number = nums1[i];
        const comp = nums2[j] * k;
        
        if (number >= comp && number % comp === 0) {
          count ++;
        }
      });
    });
  
  return count;
};