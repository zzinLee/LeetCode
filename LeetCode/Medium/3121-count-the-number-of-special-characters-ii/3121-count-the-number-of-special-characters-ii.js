/**
 * @param {string} word
 * @return {number}
 */
function numberOfSpecialChars(word) {
  const wordArr = word.split("");
  const upper = new Map();
  const lower = new Map();
  
  wordArr.forEach((word, index) => {
    if ("a" <= word && word <= "z") {
      if (lower.has(word)) {
        lower.set(word, lower.get(word)  + "." + index);
      } else {
        lower.set(word, "" + index);
      }
    } else if (!upper.has(word)) {
      upper.set(word, index);
    }
  });
  
  let count = 0;
  
  for (const [upperCase, index] of upper) {
    const lowerCase = String.fromCharCode(upperCase.charCodeAt() + 32);
    const lowerCaseIndexList = lower.get(lowerCase);
    
    if (!lowerCaseIndexList) {
      continue;
    }
    
    if (lowerCaseIndexList.split(".").every((val) => val < index)) {
      count++;
    };
  }
  
  return count;
}
