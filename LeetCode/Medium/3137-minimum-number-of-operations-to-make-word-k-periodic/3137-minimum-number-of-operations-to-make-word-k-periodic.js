/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumOperationsToMakeKPeriodic = function(word, k) {
  const multiple = (ken, len) => {
    const multiples = [];
    
    for (let i = 0; i * ken < len; i++) {
      multiples.push(i * ken);
    }
    
    return multiples;
  }
  
  const chunking = (arr, word, k) => {
    const map = new Map();
    
    for (const index of arr) {
      const str = word.slice(index, k + index);
      
      map.set(str, map.has(str) ? map.get(str)  + 1 : 1);
    }
    
    return Array.from(map);
  }
  
  const multipleK = multiple(k, word.length);
  const chunks = chunking(multipleK, word, k);
  chunks.sort((a, b) => a[1] - b[1]);
  
  const [periodicString, period] = chunks.pop();
  const changes = chunks.reduce((acc, cur) => acc + cur[1], 0);
  
  return changes;
};