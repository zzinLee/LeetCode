/**
 * @param {number[]} rewardValues
 * @return {number}
 */

function maxTotalReward (rewardValues) {
  const asc = rewardValues.sort((a, b) => a - b);
  const len = asc.length;
  const memo = Array.from({ length : len }, (v, i) => Array(4000).fill(-1));
  
  if (len === 1) return asc[0];
  
  return searchNextValue(0, 0);
  
  function searchNextValue(sum, nextIndex) {
    if (nextIndex >= len) return sum;
    if (memo[nextIndex][sum] !== -1) return memo[nextIndex][sum];
  

    const pickSum = sum < asc[nextIndex] ? searchNextValue(sum + asc[nextIndex], nextIndex + 1) : 0;
    const notPickSum = searchNextValue(sum, nextIndex + 1);
    
    memo[nextIndex][sum] = Math.max(pickSum, notPickSum);
    
    return memo[nextIndex][sum];
  }
};