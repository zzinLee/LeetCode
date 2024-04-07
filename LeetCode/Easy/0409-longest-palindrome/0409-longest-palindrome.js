/**
 * @param {string} s
 * @return {number}
 */
function longestPalindrome (s) {
  const map = new Map();
  const str = s.split("");

  for (const ch of str) {
    map.set(ch, (map.get(ch) || 0) + 1);
  }

  const counts = Array.from(map.values());
  let totalOdd = 0;
  let totalEven = 0;
  let center = false;

  counts.forEach((value) => {
    if (value % 2 === 0) {
      totalEven += value;
    } else if (value !== 1) {
      center = true;
      totalOdd += value - 1;
    } else if (value === 1) {
      center = true;
    }
  });

  return center ? totalEven + totalOdd + 1 :  totalEven + totalOdd;
}
