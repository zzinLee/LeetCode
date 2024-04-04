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
  const memoized = (n) => {
    const badVersion = {};
    let memoizedBadVersion = badVersion[n];

    if (!memoizedBadVersion) {
      memoizedBadVersion = isBadVersion(n);
      badVersion[n] = memoizedBadVersion;
    }

    return memoizedBadVersion;
  }

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 1;
      let end = n;

      //Binary Search
      while (start > 0 && start <= end) {
        let mid = Math.floor((end + start) / 2);

        const isMidBadVersion = memoized(mid);

        if (!isMidBadVersion) {
          start = mid + 1;
        }

        const isMidPrevBadVersion = memoized(mid - 1);
        
        if (isMidBadVersion && isMidPrevBadVersion) {
          end = mid - 1;
        }
        
        if (isMidBadVersion && !isMidPrevBadVersion) {
          return mid;
        }
      }

      //탐색 종료
      if (start <= 0) { //전부 불량일 때
        return start;
      } else if (start > end) { //전부 불량이 아닐 때
        return null;
      }

    };
};