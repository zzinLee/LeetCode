# ​Pass

## solution1

요소의 갯수가 2만큼 많은 배열에 대해서 조합 logic 을 사용하여 2개의 요소를 제거한 배열 `copy`를 생성합니다. <br>
편집된 `nums1(copy)`와 `nums2` 배열을 sort 하여 오름차순으로 변경하고 <br>
두 요소 사이의 차를 구하여 일정한 차이를 보이는지 확인합니다. <br>
모든 요소들이 일정한 차이를 보인다면 `isSameNumber`플래그를 `true`로 변경하고 <br>
해당 수를 반환하고, 아니라면 `null`을 반환하여 값이 없음을 안내합니다.

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minimumAddedInteger(nums1, nums2) {
  const sliceIndexes = getSliceCombinations(nums1.length);
  let min = Infinity;
  
  for (const [start, end] of sliceIndexes) {
    const copy = nums1.filter((v, i) => i !== start && i !== end);
    const diff = diffInteger(copy, nums2);

    if (diff !== null) {
      min = min > diff ? diff : min;
    }
  }
  
  return min;
}

function getSliceCombinations(n) {
  const result = [];
  
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      result.push([i, j]);
    }
  }
  
  return result;
}

function diffInteger(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  const differences = nums1.map((num1, i) => nums2[i] - num1);
  const filtered = differences.filter((diff) => !Number.isNaN(diff));
  const isSameNumber = new Set(filtered).size === 1;

  if (isSameNumber) {
    return filtered[0];
  }
  
  return null;
}
```

<br></br>

## solution2
처음에 생각해 본 풀이였는데, `temp` 와 `count` 로 처리하는 로직에 대해 생각해내지 못했습니다. <br>
예외케이스가 많을 것이라 생각했고 <br> 혹은 `indexOf` 연산이 오래걸릴 것 같다는 생각 때문에 풀이해보지 않았는데 <br>
이 풀이가 훨-씬 빠르다는 것을 확인하였습니다. <br>
</br>
1. nums2 첫번째 요소를 기준으로 모든 `diff` 값을 구한 다음, `difference` 배열에 넣습니다.
2. `difference` 배열을 순회하면서, 하나의 `diff` 값을 가져옵니다.
3. `nums2` 배열에 있는 숫자들에 `diff` 값을 빼어 `nums1` 에 해당 값이 있는지 확인합니다.
4. 만약 없다면 `continue`
5. 만약 있다면 `nums1`을 copy 한 배열에 해당 값을 조회할 수 없도록 `null`로 처리하고,
6. `count`를 증가 시킵니다.
7. `count === nums2.length` 일 때 2개를 제외한 나머지 값에 대해 해당 `diff` 값을 처리해준 값들이 `nums1`안에 다 있다는 뜻이므로
8. `diff`값을 `result` 배열에 추가합니다.
9. `count` 값은 모든 nums2 순회가 끝나고 나면 `0`으로 초기화합니다.
10. 최종적으로 `result` 배열에서 최소값을 반환합니다.

<br>

```js
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function minimumAddedInteger(nums1, nums2) {
  const difference = [];
  const results = [];
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    const diff = nums2[0] - nums1[i];

    difference.push(diff);
  }

  for (let i = 0; i < difference.length; i++) {
    const temp = [...nums1];
    const diff = difference[i];

    for (let j = 0; j < nums2.length; j++) {
      const index = temp.indexOf(nums2[j] - diff);

      if (index !== -1) {
        temp[index] = null;
        count++;
      }
    }

    if (count === nums2.length) {
      results.push(diff);
    }

    count = 0;
  }

  return Math.min(...results);
}
```
