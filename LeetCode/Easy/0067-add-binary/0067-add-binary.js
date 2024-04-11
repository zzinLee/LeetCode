/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const binaryA = BigInt(`0b${a}`);
  const binaryB = BigInt(`0b${b}`);

  const ans = (binaryA + binaryB).toString(2);

  return ans;
}
