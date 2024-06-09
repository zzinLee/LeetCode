/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var valueAfterKSeconds = function(n, k) {
  const arr = new Array(n).fill(1);
  let ans = arr;
  
  for (let i = 0; i < k; i++) {
    for (let index = 1; index < n; index++) {
      const up = ans[index];
      const left = ans[index - 1];
      
      ans[index] = (up + left) % (1E9 + 7);
    }
  }
  
  return ans[n - 1];
};
