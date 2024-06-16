/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  let count = 0;
  const hourMap = new Map();
  const hourSet = new Set();
  
  for (const hour of hours) {
    const mapKey = hour % 24;
    
    if (hourMap.has(mapKey)) {
      const added = hourMap.get(mapKey);
      added.push(hour);
      
      hourMap.set(mapKey, added);
    } else {
      hourMap.set(mapKey, [hour]);
      hourSet.add(mapKey);
    }
  }

  
  for (const hourKey of hourSet) {
    if (hourKey === 12 || hourKey === 0) {
      const arr = hourMap.get(hourKey);
      const total = arr.length;
      
      count += (total * (total - 1)) / 2;
      
      continue;
    }
    
    const nextKey = 24 - hourKey;

    if (!hourMap.has(nextKey)) continue;
    
    const nextArr = hourMap.get(nextKey);
    const currentArr = hourMap.get(hourKey);
    
    hourSet.delete(nextKey);
    
    count += (nextArr.length * currentArr.length);  
  }
  
  return count;
};