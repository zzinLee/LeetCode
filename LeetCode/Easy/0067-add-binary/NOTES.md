# Fail

### Time Limit Exceeded
```
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  const arrA = a.split("").map(Number);
  const arrB = b.split("").map(Number);
  let up = 0;
  let str = "";

  while (arrA.length && arrB.length) {
    const lastA = arrA.pop();
    const lastB = arrB.pop();
    const last = (lastA + lastB + up) % 2;

    up = Math.floor((lastA + lastB + up) / 2);
    str = last + str;
  }
  
  if (arrA.length || arrB.length) {
    const residueArr = (arrB.length === 0) ? arrA : arrB;
    
    while (residueArr.length) {
      const residueA = arrA.pop();
      const last = (residueA + up) % 2;

      up = Math.floor((residueA + up)/2);
      str = last + str;
    }
  }

  return  (up || "") + str || "0";
}
```


​
