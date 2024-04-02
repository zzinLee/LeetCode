/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let currentNode = head;

  while (currentNode) {
    if (currentNode.visited) {
      return true;
    }

    currentNode.visited = true;
    currentNode = currentNode.next;
  }

  return false;
}