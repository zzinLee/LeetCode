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

