/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
  const str = s.toLowerCase();
  let ans = "";

  for (const ch of str) {
    const isAlphabet = ch >= "a" && ch <= "z";
    const isNotANumber = ch === " " || isNaN(ch);

    if (isAlphabet || !isNotANumber) {
      ans += ch;
    }
  }

  const reversed = ans.split("").reverse().join("");

  return ans === reversed;
}
