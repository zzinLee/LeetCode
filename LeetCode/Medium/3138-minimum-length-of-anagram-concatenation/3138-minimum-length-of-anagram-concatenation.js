/**
 * @param {string} s
 * @return {number}
 */
var minAnagramLength = function(s) {
  const word = new Map();
  
  for (const ch of s) {
    word.set(ch, word.has(ch) ? word.get(ch) + 1 : 1);
  }
  
  if (word.size === 1) {
    return 1;
  }
  
  const countMap = new Map();
  
  for (const [ch, count] of word) {
    if (countMap.has(count)) {
      const arr = countMap.get(count);
      
      arr.push(ch);
    } else {
      countMap.set(count, [ch]);
    }
  }
  
  const 최대공약수 = (num1, num2) => {
    if (num1 === 0 || num2 === 0) {
      return num1 || num2;
    }
    
    return 최대공약수(num2, num1 % num2);
  }
  
  const countCharsArr = Array.from(countMap).map(([count, arr]) => [count, arr.length]);
  const countsMaximum = countCharsArr.map(([count, len]) => count).reduce((a, b) => 최대공약수(a, b));
  
  let ans = 0;
  
  const numbers = countCharsArr.forEach(([count, len]) => {
    ans += count / countsMaximum * len;
  });
  
  return ans;
};