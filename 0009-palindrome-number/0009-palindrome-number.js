/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x === 0) return true;

    const str = String(x);
    const len = str.length;
    const isOdd = len % 2 === 1;
    const mid = isOdd ? (len + 1) / 2 - 1 : len / 2;

    for (let i = 0; i < mid; i++) {     
        if (str[len - 1 - i] !== str[i]) return false;
    }

    return true;
};