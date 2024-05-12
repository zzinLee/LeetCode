/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
function maximumEnergy(energy, k) {
  const energyResult = [];
  const cycle = (index, sum) => {
    if (index + k < energy.length) {
      if (sum < 0) {
        sum = 0;
      }
      
      cycle(index + k, sum + energy[index + k]);
    } else {
      energyResult.push(sum);
    }
  };
  
  for (let start = 0; start <= k; start++) {
    cycle(start, energy[start]);
  }
  
  return Math.max(...energyResult);
}
