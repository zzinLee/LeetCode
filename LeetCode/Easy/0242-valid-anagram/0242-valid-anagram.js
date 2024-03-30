/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  const checker = {};
  
  for (const ch of s) {
    checker[ch] = (checker[ch] || 0) + 1;
  }

  for (const ch of t) {
    if (!checker[ch]) return false;
    
    checker[ch]--;   
  }

  for (const ch in checker) {
    if (checker.hasOwnProperty(ch)) {
      if (checker[ch] !== 0) return false;
    }
  }

  return true;
}
