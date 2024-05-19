/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
function isArraySpecial(nums, queries) {
  const n = nums.length;
  const isSpecial = new Array(n-1).fill(false);
  
  for (let i = 0; i < n - 1; i++) {
    isSpecial[i] = nums[i] % 2 !== nums[i+1] % 2
  } //비교한 결과 특별한 값이면 true, 아니면 false를 차례대로 넣습니다.
  
  const prefixDiffParity = new Array(n).fill(0);
  for (let i = 1; i < n; i++) {
    prefixDiffParity[i] = prefixDiffParity[i-1] + (isSpecial[i-1] ? 1 : 0);
  }
  //special한 turn이 생길 때마다 +1 씩
  //special하지 않으면 그대로
  
  const results = [];
  
  for (const [from, to] of queries) {
    if (to === from) {
      results.push(true);
      
      continue;
    }
    
    const diffParityCount = prefixDiffParity[to] - prefixDiffParity[from];
    const totalCount = to - from;
      
    if (diffParityCount === totalCount) {//special 갯수가 같으면 OK
      results.push(true);
    } else {
      results.push(false);
    }
  }
  
  return results;
}