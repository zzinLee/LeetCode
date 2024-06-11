/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

var valueAfterKSeconds = function(n, k) {
  const arr = new Array(n).fill(1);
  
  for (let i = 0; i < k - 1; i++) {   
    for (let j = 1; j < arr.length; j++) {
      arr[j] += arr[j - 1];
      arr[j] = arr[j] % (1E9 + 7);
    }
  }
  
   return arr.reduce((a, b) => a + b, 0) % (1E9 + 7);
};
