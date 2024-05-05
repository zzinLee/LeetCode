/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  let substr = "";
  let maxLen = 0;
  
  for (let i = 0; i < s.length; i++) {
    if (substr.includes(s[i])) {
      substr = substr.slice(substr.indexOf(s[i]) + 1);
    }

    substr += s[i];

    if (maxLen < substr.length) {
      maxLen = substr.length;
    }
  }

  return maxLen;
}
