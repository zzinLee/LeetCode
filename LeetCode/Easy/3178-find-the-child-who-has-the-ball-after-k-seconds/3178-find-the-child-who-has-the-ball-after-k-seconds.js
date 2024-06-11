/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
  const isReversed = Math.floor(k / (n - 1)) % 2 === 1;
  const residue = k % (n - 1);
  
  if (!isReversed) return residue;
  if (isReversed) return (n - 1) - residue;
};