/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  const countAllNodes = (root) => {
    let count = 0;
    let cur = root;

    while (cur) {
      count++;
      cur = cur.next;
    }

    return count;
  };

  const steppingNode = (step, root) => {
    let cur = root;

    while (step) {
      cur = cur.next;
      step--;
    }

    return cur;
  }; 

  const nodeCount = countAllNodes(head);
  const step = Math.floor(nodeCount/2);

  return steppingNode(step, head);
}
