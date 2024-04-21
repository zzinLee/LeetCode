/**
 * @param {string} word
 * @return {number}
 */
function numberOfSpecialChars(word) {
  const wordArr = word.split("");
  const wordSet = Array.from(new Set(word));
  const upper = new Set();
  const lower = new Set();
  
  for (const word of wordSet) {
    if ("a" <= word && word <= "z") {
      lower.add(word);
    } else {
      upper.add(word);
    }
  }
  
  let count = 0;
  
  for (const ch of upper) {
    if (lower.has(String.fromCharCode(ch.charCodeAt() + 32))) {
      count++;
    }
  }
  
  return count;
}