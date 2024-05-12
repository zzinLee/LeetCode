/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
function findPermutationDifference (s, t) {
  const sMap = new Map();
  const tMap = new Map();
  let ans = 0;
  
  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], i);
    tMap.set(t[i], i);
  }
  
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const index = tMap.get(ch);
    
    ans += Math.abs(i - index);
  }
  
  return ans;
}
