# first bad version

이 문제의 목표는 인자로 주어지는 함수 `isBadVersion API`를 최대한 적게 호출하는 것 <br>
주어지는 데이터는 선형 [1, 2, 3, ..., n] 데이터 였고, 하나의 불량품을 기준으로 정렬되어 있음<br>

불량품을 $x$ 라고 할 때 ($x <= n$) <br>
$[1, 2, ..., x - 1]$ 는 정상 <br>
$[x, x + 1, ..., n]$ 는 불량 <br>

이를 통해 Binary Serach 이진탐색법 접근의 힌트를 얻었고 <br>
최대한 함수를 적게 호출하기 위하여 memoized를 사용 <br>

</br>

## Memoized strategy

```js

//함수를 반환하여 memoized를 사용할 수 있다.
//const f(n) = 비싼연산이라고 가정해보자.

const memoized = () => {
    //closure
    const numberMap = new Map();
  
    return (n) => {
      if (!numberMap.has(n)) {
        console.log("비싸요 이 연산");
        
        numberMap.set(n, f(n));
      }

      console.log(numberMap);
      
      return numberMap.get(n);
    };
  }
```

</br>

## Binary Search

선형 데이터에서 정렬되어 있을 때 쓰기 좋은 탐색법 <br>
이때 주요하게 보아야 하는 것은 종료 시점! <br>

</br>

# Pass

## solution

```js
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
function solution(isBadVersion) {
  const memoized = () => {
    const numberMap = new Map();

    return (n) => {
      if (!numberMap.has(n)) {
        numberMap.set(n, isBadVersion(n));
      }
    
      return numberMap.get(n);
    };
  }

  memoizedIsBadVersion = memoized();

    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
      let start = 1;
      let end = n;

      while (start > 0 && start <= end) { //start가 0 이거나, end보다 큰 수가 됬을 때는 모두 탐색한 시점이므로 종료
        const mid = Math.floor((end + start) / 2);

        const isMidBadVersion = memoizedIsBadVersion(mid);

        if (!isMidBadVersion) { //가운데 값이 불량이 아니라면, 더 뒤를 탐색
          start = mid + 1;
        }

        //가운데 값이 만약 불량이라면? 바로 직전 제품에 대한 불량을 확인하고, 불량이 아닐 때 현재 가운데 값이 최초 불량이 됨.

        const isMidPrevBadVersion = memoizedIsBadVersion(mid - 1);

        if (isMidBadVersion && !isMidPrevBadVersion) {
          return mid;
        }

        if (isMidBadVersion) { //만약 둘다 불량이라면, 더 앞에서 탐색
          end = mid - 1;
        }
      }

      if (start <= 0) { //예외케이스1) 모두 불량일 때
        return start;
      } else if (start > end) { //예외 케이스2) 모두 정상일 때
        return null;
      }
    };
};

```
