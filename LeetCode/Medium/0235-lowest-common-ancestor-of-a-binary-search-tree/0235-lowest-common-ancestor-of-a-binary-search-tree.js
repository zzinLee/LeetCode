/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  const [leftNode, rightNode] = p.val < q.val ? [p, q] : [q, p];

  if (leftNode.val === root.val || rightNode.val === root.val) {
    return root;
  }

  if (leftNode.val < root.val && rightNode.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (leftNode.val < root.val && rightNode.val > root.val) {
    return root;
  } else if (leftNode.val > root.val && rightNode.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } 
}