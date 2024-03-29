/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
  let minPrice= prices[0];
  let maxProfit = 0;

  for (let day = 1; day < prices.length; day++) {
    minPrice = Math.min(minPrice, prices[day]); 
    maxProfit = Math.max(maxProfit, prices[day] - minPrice);
  }

  return maxProfit;
};
