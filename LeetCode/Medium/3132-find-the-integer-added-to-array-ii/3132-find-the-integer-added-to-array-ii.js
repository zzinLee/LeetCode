/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minimumAddedInteger(nums1, nums2) {
  const sliceIndexes = getSliceCombinations(nums1.length);
  let min = Infinity;
  
  for (const [start, end] of sliceIndexes) {
    const copy = nums1.filter((v, i) => i !== start && i !== end);
    const diff = diffInteger(copy, nums2);

    if (diff !== null) {
      min = min > diff ? diff : min;
    }
  }

  return min;
}

function getSliceCombinations(n) {
  const result = [];
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      result.push([i, j]);
    }
  }
  
  return result;
}

function diffInteger(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const differences = nums1.map((num1, i) => nums2[i] - num1);
  const filtered = differences.filter((diff) => !Number.isNaN(diff));
  const isSameNumber = new Set(filtered).size === 1;

  if (isSameNumber) {
    return filtered[0];
  }
  
  return null;
}
