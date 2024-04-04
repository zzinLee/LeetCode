/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  const memoized = () => {
    const numberMap = new Map();

    return (n) => {
      if (!numberMap.has(n)) {
        numberMap.set(n, isBadVersion(n));
      }
    
      return numberMap.get(n);
    };
  }

  memoizedIsBadVersion = memoized();

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 1;
      let end = n;

      while (start > 0 && start <= end) {
        const mid = Math.floor((end + start) / 2);

        const isMidBadVersion = memoizedIsBadVersion(mid);

        if (!isMidBadVersion) {
          start = mid + 1;
        }

        const isMidPrevBadVersion = memoizedIsBadVersion(mid - 1);

        if (isMidBadVersion && !isMidPrevBadVersion) {
          return mid;
        }

        if (isMidBadVersion) {
          end = mid - 1;
        }
      }

      if (start <= 0) {
        return start;
      } else if (start > end) {
        return null;
      }
    };
};