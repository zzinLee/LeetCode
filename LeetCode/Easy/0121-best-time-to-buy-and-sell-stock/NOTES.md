# Pass
## Solution1
58ms
```js
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
```

<br>

## Solution2
75ms
```js
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
```
​
<br>
<hr>
</br>

# Fail
## First Submission
Time Limit Exceeded
200 / 212 testcases passed

```js
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const current = prices[i];
      const buy = prices[j];
      const profit = current - buy

      if (profit >= 0) {
        continue;
      }
      
      if (profit < maxProfit){
        maxProfit = profit;
      }
    }
  }

  return Math.abs(maxProfit);
};
```

<br>

## Second Submission
208 / 212 testcases passed
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit (prices) {
  const priceMap = new Map();
  
  prices.forEach((price, day) => {
    if (priceMap.has(price)) {
      const originDays = priceMap.get(price);

      priceMap.set(price, [...originDays, day + 1]);
    } else {
      priceMap.set(price, [day + 1]);
    }
  });

  let maxProfit = 0;

  const priceSet = Array.from(new Set(prices)).sort((a, b) => a - b);

  for (let i = 0; i < priceSet.length; i++) {
    const smallPrice = priceSet[i];
    
    for (let j = priceSet.length - 1; j > i ; j--) {
      const largePrice = priceSet[j];

      if (largePrice - smallPrice > maxProfit) {
        const smallPriceDay = Math.min(...priceMap.get(smallPrice));
        const largePriceDay = Math.max(...priceMap.get(largePrice));

        if (smallPriceDay < largePriceDay) {
          maxProfit = largePrice - smallPrice;
        }
      } else {
        break;
      }
    }
  }

  return maxProfit;
};
```

<br>
<hr>

# Kadane's Algorithm
dynamic programming technique to find the maximum subarray sum in an array of numbers.
<br>
[description_link_here](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solutions/4868897/most-optimized-kadane-s-algorithm-java-c-python-rust-javascript/)
