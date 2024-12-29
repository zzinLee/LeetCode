/**
 * @param {string} s
 * @return {string}
 */
const isPalindrome = function(s) {
    const len = s.length;
    const isOdd = len % 2 === 1;
    const midIndex = isOdd ? (s.length + 1) / 2 - 1 : s.length / 2;
    
    for (let i = 0; i < midIndex; i++) {
        if (s[i] !== s[len - 1 - i]) {
            return false;
        }
    }

    return true;
};

const longestPalindrome = function(s) {
    const len = s.length;

    for (let i = len; i > 0; i--) {
        for (let j = 0; j + i <= len ; j++) {
            const subStr = s.slice(j, j + i);

            if (isPalindrome(subStr)) {
                return subStr;
            }
        }
    } 

};