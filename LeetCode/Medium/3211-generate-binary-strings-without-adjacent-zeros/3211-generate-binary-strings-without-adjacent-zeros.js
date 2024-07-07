/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function(n) {
  let binary = ["0", "1"];
  let k = 1;

  while (k < n) {
    const nextBinary = [];

    for (const bin of binary) {
      const last = bin[bin.length - 1];

      if (last === "0") {
        nextBinary.push(bin + "1");
      } else {
        nextBinary.push(bin + "0");
        nextBinary.push(bin + "1");
      }
    }

    binary = nextBinary;

    k++;
  }

  return binary;
};