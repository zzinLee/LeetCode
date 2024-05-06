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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const numbers = [];
  const q = [[root, 0]];

  while (q.length) {
    const [node, level] = q.shift();

    if (!node) {
      continue;
    }

    if (!numbers[level]) {
        numbers[level] = [node.val];
    } else {
      numbers[level].push(node.val);
    }
    
    if (node.left && node.right) {
      q.unshift([node.right, level + 1]);
      q.unshift([node.left, level + 1]);
    } else if (node.left || node.right) {
      const existNode = node.left || node.right;
      
      q.unshift([existNode, level + 1]); 
    }
  }
  
  return numbers;
};

