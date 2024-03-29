/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
  let buy = prices[0];
  let maxProfit = 0;

  for (let day = 1; day < prices.length; day++) {
    const today = prices[day];

    if (today < buy) {
      buy = today;
    } else if (today - buy > maxProfit) {
      maxProfit = today - buy;
    }
  }

  return maxProfit;
};
