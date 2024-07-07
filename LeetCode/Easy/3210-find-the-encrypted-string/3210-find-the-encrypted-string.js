/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
  const str = s.split("");
  const ans = [];

  for (let i = 0; i < str.length; i++) {
    ans.push(str[(i + k) % (str.length)]);
  }

  return ans.join("");
};
