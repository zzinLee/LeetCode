# climbing stairs

## 문제
`n`으로 올라야 하는 총 계단의 수가 주어집니다. <br>
이때 `1` 또는 `2` 칸 만큼 계단을 오를 수 있을 때, 총 몇 가지 방법으로 오를 수 있는지 연산 후 반환합니다. <br>

## 예시 및 유의점
- `n = 3` 일 때 총 3가지 방법으로 계단을 오를 수 있습니다.
  - 1 + 1 + 1
  - 1 + 2
  - 2 + 1

- 오르는 순서를 구분합니다.

## Pass

### solution 1 | factorial

이 방법은 전체 계단수에서 2 칸씩 오를 수 있는 최대 횟수를 구한 후, <br>
2칸씩 오르는 횟수를 k로 두고, 0 일 때, 1 일 때, ..., 최대 횟수일 때에 대해서 경우의 수를 셉니다. <br>
1칸씩 오르는 횟수`oneCount`는 총 `n - 2*k` 개 이므로,
총 횟수 `totalCount = oneCount + k` 로 

```js
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  let totalSteps = 0;
  let k = Math.floor(n/2);

  const count = (n, k) => {
    if (k === 0) {
      return 1;
    }

    const oneCount = n - k * 2;
    const totalCount = oneCount + k;
    const f = memoizedFactorial();

    return f(totalCount)/f(oneCount)/f(k)
  };

  const factorial = (n) => {
    if (n === 0) {
      return 1;
    }

    return factorial(n - 1) * n;
  };

  const memoizedFactorial = () => {
    const cache = new Map();

    return (n) => {
      if (!cache.has(n)) {
        cache.set(n, factorial(n));
      }

      return cache.get(n);
    };
  }

  while (k) {
    totalSteps += count(n,k);
    k--;
  }
  
  totalSteps += count(n, 0);

  return totalSteps;
}

```


### solution 2 | Dynamic Programming by implementing the Fibonacci Sequence

[더 상세한 풀이는 여기에](https://leetcode.com/problems/climbing-stairs/solutions/2810612/4-ways-to-solve-with-detailed-diagrams-no-memoization-beats-100-time-memory/)

<br>

계단 수가 한칸씩 늘 때 마다, 이전의 연산 값과 관련되어 있음을 알 수 있습니다. <br>
이는 마치 수열처럼 동작하므로, Dynamic Programming 방식을 떠올릴 수 있습니다. <br>

<br>

계단은 한칸 또는 두칸을 한번에 움직이므로 만약 n칸을 움직여야 한다면, <br>
(1) n - 1 칸 움직이기 위해 이동한 횟수 + 1칸 <br>
(2) n - 2 칸 움직이기 위해 이동한 횟수 + 2칸 <br>
총 n 칸을 움직이기 위해 이동한 횟수는 (1) + (2) 입니다. <br>


```js
/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n, memo = {}) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    if (memo[n] !== undefined) {
        return memo[n];
    }
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    
    return memo[n];
}
```
