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
var solution = function(isBadVersion) {
  const memoized = (n) => {
    const nums = {};

    if (!nums[n]) {
      const newNum = isBadVersion(n);

      nums[n] = newNum;
    }

    return nums[n];
  }

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 1;
      let end = n;

      while (start > 0 && start <= end) {
        let mid = Math.floor((end + start) / 2);

        const isMidBadVersion = memoized(mid);

        if (!isMidBadVersion) {
          start = mid + 1;
        }

        const isMidPrevBadVersion = memoized(mid - 1);

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