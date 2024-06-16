/**
 * @param {number[]} hours
 * @return {number}
 */
var countCompleteDayPairs = function(hours) {
  let count = 0;
    for (let i = 0; i < hours.length - 1; i++) {
      const current = hours[i];
      
      for (let j = i + 1; j < hours.length; j++) {
        const next = hours[j];
        
        if ((current + next) % 24 === 0) {
          count++;
        }
      }
    }
  
  return count;
};