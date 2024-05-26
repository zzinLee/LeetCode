/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
  let comp = "";
  
  if (!word.length) return comp;
  
  let compIndex = 0;
  let curIndex = 0;
  let count = 0;
  
  while (compIndex < word.length && curIndex < word.length) {  
    if (count >= 9) {
      comp += count;
      comp += word[compIndex];
      compIndex = curIndex;
      curIndex++;
      count = 1;
      continue;
    }
    
    if (word[compIndex] === word[curIndex]) {
      count++;
      curIndex++;
    } else {
      comp += count;
      comp += word[compIndex];
      compIndex = curIndex;
      curIndex++;
      count = 1;
    }
  }
  
  if (count > 0) {
    comp += count;
    comp += word[compIndex];
  }
  
  return comp;
};