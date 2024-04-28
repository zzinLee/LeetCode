# ​Pass

## solution1

요소의 갯수가 2만큼 많은 배열에 대해서 조합 logic 을 사용하여 2개의 요소를 제거한 배열 `copy`를 생성합니다. <br>
편집된 nums1(copy)와 nums2 배열을 sort 하여 오름차순으로 변경하고 <br>
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

## solution2

```js
function minimumAddedInteger (nums1, nums2) {
    const difference = [], output = [];
    let count = 0;
    
    for (let i = 0; i < nums1.length; i++) {
        difference.push(nums2[0] - nums1[i])
    }
  
    for (let i = 0; i < difference.length; i++) {
        const tmp = [...nums1];
      
        for (let j = 0; j < nums2.length; j++) {
            if (nums1.includes(nums2[j] - difference[i])) {
                const index = tmp.indexOf(nums2[j] - difference[i]);

                if (index !== -1) {
                    tmp[index] = null;
                    count++;
                }
            }
        }
      
        if (count === nums2.length) output.push(difference[i]);
      
        count = 0;
    }
        
    return Math.min(...output)
}
```
