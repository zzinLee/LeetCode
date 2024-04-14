
## Pass


### solution1 | O(n^2)

브루트포스 적용 <br>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  const n = nums.length;
  let max = -Infinity;
  
  for (let i = 1; i <= n; i++) {
    const sum = subSumMax(nums, i);
    if (max < sum) {
      max = sum;
    }
  }

  return max;
}

function subSumMax(nums, n) {
  if (nums.length === 0) {
    return 0;
  }

  let max = -Infinity;

  for (let i = 0; i < nums.length - n + 1 ; i++) {
    let sum = nums.slice(i, n + i).reduce((a, b) => a + b, 0);

    if (sum > max) {
      max = sum; 
    }
  }

  return max;
}
```

### solution2 | O(n)

카데인 알고리즘을 적용 <br>

```
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let currentSum = nums[0];
  let maxSum = currentSum;

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}
```

### solution3 | O(NlogN)

Divide-and-conquer 방식 <br>
[관련내용링크](https://www.geeksforgeeks.org/maximum-subarray-sum-using-divide-and-conquer-algorithm/)

```
/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  return maxSubArraySum(nums, 0, nums.length - 1);
}

function maxSubArraySum (arr, left, right) {
  if (left > right) {
    return -Infinity;
  }

  const mid = Math.floor((left + right) / 2);
  const leftMax = maxSubArraySum(arr, left, mid - 1);
  const rightMax = maxSubArraySum(arr, mid + 1, right);
  let leftSum = 0;
  let rightSum = 0;
  let curSum = 0;

  for (let i = mid - 1; i >= left; i--) {
    curSum += arr[i];
    leftSum = Math.max(leftSum, curSum);
  }

  curSum = 0;

  for (let i = mid + 1; i <= right; i++) {
    curSum += arr[i];
    rightSum = Math.max(rightSum, curSum);
  }

  return Math.max(leftMax, rightMax, leftSum + rightSum + arr[mid]);
}
```
