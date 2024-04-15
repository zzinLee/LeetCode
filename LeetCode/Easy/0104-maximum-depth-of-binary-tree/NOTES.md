​
# Pass

## solution1

재귀 풀이법 (내 풀이)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxDepth(root) {
  if (!root) {
    return 0;
  }
  
  if (!root.left && !root.right) {
    return 1;
  }
  
  if (root.left && root.right) {
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
  }
  
  if (root.left || root.right) {
    return maxDepth(root.left || root.right) + 1;
  }
}

```

### 같은 풀이법이지만 조금 더 깔끔한 코드

```js
function maxDepth(root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.right), maxDepth(root.left)) + 1;
}
```
