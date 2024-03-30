# Pass
<br>

## Solution1
48ms
- Recursion
- BFS (Breadth-First Search)

</br>

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
 * @return {TreeNode}
 */

function invertTree(root) {
  if (!root) return root;

  const subTree = root.left;
  root.left = root.right;
  root.right = subTree;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

```

</br>

## Solution2
57ms
- Queue
- BFS (Breadth-First Search)

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
 * @return {TreeNode}
 */
function invertTree(root) {
  if (!root) return root;
  
  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    const temp = current.left;
    current.left = current.right;
    current.right = temp;

    if (current.left) {
      queue.push(current.left);
    }

    if (current.right) {
      queue.push(current.right);
    }
  }

  return root;
}

```
​
