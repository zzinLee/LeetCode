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

  const invertSubTree = root.left;
  root.left = root.right;
  root.right = invertSubTree;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}
