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
 * @return {boolean}
 */
function isBalanced(root) {
  if (!root) return true;

  let balanced = true;

  const leftDegree = treeDepth(root.left);
  const rightDegree = treeDepth(root.right);
  
  function treeDepth(root) {
    if (!root) return 0;
    
    const left = treeDepth(root.left);
    const right = treeDepth(root.right);

    if (Math.abs(right - left) > 1) {
      balanced = false;
    }

    return Math.max(left, right) + 1;
  }

  if (Math.abs(leftDegree - rightDegree) > 1) {
    balanced = false;
  }

  return balanced;
}

