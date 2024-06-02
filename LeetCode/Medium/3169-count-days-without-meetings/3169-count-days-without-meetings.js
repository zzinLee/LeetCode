/**
 * @param {number} days
 * @param {number[][]} meetings
 * @return {number}
 */
var countDays = function(days, meetings) {
  const newDays = [];
  
  meetings.sort((a, b) => {
    return a[0] - b[0];
  });
  
  for (const [start, end] of meetings) {
    if (!newDays.length) {
      newDays.push([start, end]);
      
      continue;
    }
    
    const [st, e] = newDays.pop();
    
    if (start > e) {
      newDays.push([st, e]);
      newDays.push([start, end]);
    } else if (start <= e) {
      newDays.push([st, Math.max(end, e)]);
    }
  }
  
  return newDays.reduce((acc, cur) => {
    const [startDate, endDate] = cur;
    
    days -= (endDate - startDate + 1);
    
    return days;
  }, days);
};