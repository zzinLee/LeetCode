/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  const wordMap = new Map();

  for (const ch of magazine) {
    wordMap.set(ch, (wordMap.get(ch) || 0) + 1);
  }

  //더 많이 쓰거나, 없는 걸 갖다쓰면 false
  for (const ch of ransomNote) {
    const isNotExistChar = !wordMap.has(ch);

    if (isNotExistChar) {
      return false;
    } else {
      const wordCount = wordMap.get(ch);
      
      wordMap.set(ch, wordCount - 1);
    }
  }

  const mapValues = Array.from(wordMap.values());
  const isAlreadyUsed = mapValues.some((val) => val < 0);

  if (isAlreadyUsed) {
    return false;
  }

  return true;
};
