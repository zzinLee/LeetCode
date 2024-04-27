/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function insert(intervals, newInterval) {
  const result = [];
  let resetInterval = newInterval;
  
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const [intervalStart, intervalEnd] = interval;

    if (Math.max(intervalStart, resetInterval[0]) <= Math.min(intervalEnd, resetInterval[1])) {
      resetInterval = [Math.min(resetInterval[0], intervalStart), Math.max(resetInterval[1], intervalEnd)];

      continue;
    }
    
    if (resetInterval[1] < intervalStart) {
      result.push(resetInterval, ...intervals.slice(i));

      return result;
    }

    result.push(interval);
  }

  result.push(resetInterval);

  return result;
}
