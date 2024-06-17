/**
 * @param {number[]} power
 * @return {number}
 */
function maximumTotalDamage(power) {
  const powerMap = new Map();
  
  for (const strength of power) {
    if (powerMap.has(strength)) {
      powerMap.set(strength, powerMap.get(strength) + 1);
    } else {
      powerMap.set(strength, 1);
    }
  }
  
  const powers = Array.from(powerMap.keys()).sort((a, b) => a - b);
  const len = powers.length;
  const DP = new Array(len).fill(0);
  
  DP[0] = powers[0] * powerMap.get(powers[0]);
  
  for (let i = 1; i < len; i++) {
    const currentPower = powers[i];
    const currentTotal = currentPower * powerMap.get(currentPower);
    
    DP[i] = DP[i - 1];
    
    let prevIndex = i - 1;
    
    while (prevIndex >= 0 &&
           powers[prevIndex] === currentPower - 1 ||
           powers[prevIndex] === currentPower - 2
          ) { prevIndex--; }
    
    if (prevIndex >= 0) {
      DP[i] = Math.max(DP[i], DP[prevIndex] + currentTotal);
    } else {
      DP[i] = Math.max(DP[i], currentTotal);
    }
  }
  
  return DP[len - 1];
}
