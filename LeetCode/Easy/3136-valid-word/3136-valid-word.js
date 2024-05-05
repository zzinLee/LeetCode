/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
  const vowel = new Set(["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]);
  const invalid = new Set(["@", "#", "$"]);
  
  if (word.length < 3) {
    return false;
  }
  
  let hasNumber = false;
  let hasVowel = false;
  let hasInvalid = false;
  let hasConsonant = false;
  
  for (const ch of word) {
    if ((0 <= Number(ch)) && (Number(ch) <= 9)) {
      hasNumber = true;
    } else if (vowel.has(ch)) {
      hasVowel = true;
    } else if (invalid.has(ch)) {
      hasInvalid = true;
    } else {
      hasConsonant = true;
    }
  }
  
  return hasConsonant && hasVowel && !hasInvalid ? true : false;
};